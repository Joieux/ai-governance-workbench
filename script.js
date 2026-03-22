// script.js — AI Governance Workbench runtime logic
// Data constants (DOC_LIBRARY, NARRATIVES, FW_META, PRIORITY_MAP, RISK_SCENARIOS,
// NIST_TO_CSA, CSA_CODE_MAP, EUAIA_TO_NIST, EUAIA_TO_CSA, OWASP_TO_CSA, OWASP_TO_NIST)
// have been extracted to data.js which must be loaded before this file.


// ══════════════════════════════════════════════
// STATE
// ══════════════════════════════════════════════
let activeId = null;
let activeFw = null;
let currentMode = "explore";
let searchQuery = "";
let searchTimer = null;
let assessState = JSON.parse(localStorage.getItem("ai_assess_state") || "{}");
let assessFilter = "all";
let exportType = "gap-report";

const ALL_ITEMS = () => document.querySelectorAll(".fw-item");
const ALL_CARDS = () => document.querySelectorAll(".domain-card");

// ══════════════════════════════════════════════
// HELPER UTILITIES
// ══════════════════════════════════════════════
function splitAttr(el, attr) {
  const val = el.getAttribute(attr) || "";
  if (!val || val === "none") return [];
  return val
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean);
}

function isoLabelToId(label) {
  const m = {
    "ISO/IEC 42001:2023": "iso-42001",
    "ISO/IEC 23894:2023": "iso-23894",
    "ISO/IEC 5338:2023": "iso-5338",
    "ISO/IEC TS 5723:2022": "iso-5723",
    "ISO/IEC 27001": "iso-27001",
    "iso-42001": "iso-42001",
    "iso-23894": "iso-23894",
    "iso-5338": "iso-5338",
    "iso-5723": "iso-5723",
    "iso-27001": "iso-27001",
  };
  return m[label] || null;
}

function atlasTacticToId(t) {
  const m = {
    "AML.TA0001": "atlas-ta0001",
    "AML.TA0003": "atlas-ta0003",
    "AML.TA0004": "atlas-ta0004",
    "AML.TA0006": "atlas-ta0006",
    "AML.TA0008": "atlas-ta0008",
    "AML.TA0009": "atlas-ta0009",
    "AML.TA0011": "atlas-ta0011",
    "AML.TA0012": "atlas-ta0012",
    "AML.TA0013": "atlas-ta0013",
    "AML.TA0014": "atlas-ta0014",
    "atlas-ta0001": "atlas-ta0001",
    "atlas-ta0003": "atlas-ta0003",
    "atlas-ta0004": "atlas-ta0004",
    "atlas-ta0006": "atlas-ta0006",
    "atlas-ta0008": "atlas-ta0008",
    "atlas-ta0009": "atlas-ta0009",
    "atlas-ta0011": "atlas-ta0011",
    "atlas-ta0012": "atlas-ta0012",
    "atlas-ta0013": "atlas-ta0013",
    "atlas-ta0014": "atlas-ta0014",
  };
  return m[t] || null;
}

function itemsArray() {
  return Array.from(document.querySelectorAll(".fw-item"));
}
function cardsArray() {
  return Array.from(document.querySelectorAll(".domain-card"));
}

// ══════════════════════════════════════════════
// RELATED IDS ENGINE
// ══════════════════════════════════════════════
function getRelatedIds(item) {
  const fw = item.dataset.fw;
  const id = item.dataset.id;
  const rel = new Set([id]);

  function addCsa(codes) {
    codes.forEach((c) => {
      if (CSA_CODE_MAP[c]) rel.add(CSA_CODE_MAP[c]);
    });
  }
  function addIso(refs) {
    refs.forEach((r) => {
      const i = isoLabelToId(r);
      if (i) rel.add(i);
    });
  }
  function addAtlas(refs) {
    refs.forEach((r) => {
      const i = atlasTacticToId(r);
      if (i) rel.add(i);
    });
  }
  function addNist(refs) {
    refs.forEach((n) => rel.add(n));
  }
  function addDomains(d) {
    d.forEach((x) => rel.add("domain-" + x));
  }
  function addOwasp(ids) {
    ids.forEach((o) => rel.add(o));
  }

  if (fw === "nist") {
    addCsa(NIST_TO_CSA[id] || []);
    addIso(splitAttr(item, "data-iso"));
    addAtlas(splitAttr(item, "data-atlas"));
    addDomains(splitAttr(item, "data-domains"));
    // → OWASP reverse
    Object.entries(OWASP_TO_NIST).forEach(([k, v]) => {
      if (v.includes(id)) rel.add(k);
    });
    // → EU AI Act reverse
    Object.entries(EUAIA_TO_NIST).forEach(([k, v]) => {
      if (v.includes(id)) rel.add(k);
    });
  } else if (fw === "csa") {
    addNist(splitAttr(item, "data-nist"));
    addIso(splitAttr(item, "data-iso"));
    addAtlas(splitAttr(item, "data-atlas"));
    addDomains(splitAttr(item, "data-domains"));
    // → OWASP reverse
    const myCode = Object.entries(CSA_CODE_MAP).find(([k, v]) => v === id)?.[0];
    if (myCode)
      Object.entries(OWASP_TO_CSA).forEach(([k, v]) => {
        if (v.includes(myCode)) rel.add(k);
      });
    // → EU AI Act reverse
    Object.entries(EUAIA_TO_CSA).forEach(([k, v]) => {
      const myCsaCode = Object.entries(CSA_CODE_MAP).find(([code, fwid]) => fwid === id)?.[0];
      if (myCsaCode && v.includes(myCsaCode)) rel.add(k);
    });
  } else if (fw === "iso") {
    addNist(splitAttr(item, "data-nist"));
    addCsa(splitAttr(item, "data-csa"));
    addAtlas(splitAttr(item, "data-atlas"));
    addDomains(splitAttr(item, "data-domains"));
    // → OWASP via shared ISO refs
    itemsArray()
      .filter((i) => i.dataset.fw === "owasp")
      .forEach((oi) => {
        if (splitAttr(oi, "data-iso").some((r) => isoLabelToId(r) === id))
          rel.add(oi.dataset.id);
      });
    // → EU AI Act reverse (via shared NIST mapping)
    const isoNistRefs = splitAttr(item, "data-nist");
    Object.entries(EUAIA_TO_NIST).forEach(([k, v]) => {
      if (isoNistRefs.some((n) => v.includes(n))) rel.add(k);
    });
  } else if (fw === "atlas") {
    addNist(splitAttr(item, "data-nist"));
    addCsa(splitAttr(item, "data-csa"));
    addIso(splitAttr(item, "data-iso"));
    addDomains(splitAttr(item, "data-domains"));
    // → OWASP reverse
    itemsArray()
      .filter((i) => i.dataset.fw === "owasp")
      .forEach((oi) => {
        if (splitAttr(oi, "data-atlas").some((t) => atlasTacticToId(t) === id))
          rel.add(oi.dataset.id);
      });
    // → EU AI Act reverse (via shared NIST mapping)
    const atlasNistRefs = splitAttr(item, "data-nist");
    Object.entries(EUAIA_TO_NIST).forEach(([k, v]) => {
      if (atlasNistRefs.some((n) => v.includes(n))) rel.add(k);
    });
  } else if (fw === "owasp") {
    addNist(OWASP_TO_NIST[id] || []);
    addCsa(OWASP_TO_CSA[id] || []);
    addIso(splitAttr(item, "data-iso"));
    addAtlas(splitAttr(item, "data-atlas"));
    addDomains(splitAttr(item, "data-domains"));
    // → EU AI Act reverse
    const owaspNistRefs = OWASP_TO_NIST[id] || [];
    Object.entries(EUAIA_TO_NIST).forEach(([k, v]) => {
      if (owaspNistRefs.some((n) => v.includes(n))) rel.add(k);
    });
  } else if (fw === "euaia") {
    addNist(EUAIA_TO_NIST[id] || []);
    addCsa(EUAIA_TO_CSA[id] || []);
    addIso(splitAttr(item, "data-iso"));
    addAtlas(splitAttr(item, "data-atlas"));
    addDomains(splitAttr(item, "data-domains"));
  }

  return rel;
}

function getDomainRelatedIds(card) {
  const rel = new Set(["domain-" + card.dataset.domain]);
  splitAttr(card, "data-nist").forEach((n) => rel.add(n));
  (card.dataset.iso || "")
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean)
    .forEach((i) => rel.add(i));
  (card.dataset.atlas || "")
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean)
    .forEach((a) => rel.add(a));
  const csaAttr = card.dataset.csa || "";
  csaAttr
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean)
    .forEach((c) => {
      if (CSA_CODE_MAP[c]) rel.add(CSA_CODE_MAP[c]);
    });
  // → OWASP
  const domainName = card.dataset.domain;
  itemsArray()
    .filter((i) => i.dataset.fw === "owasp")
    .forEach((oi) => {
      if (splitAttr(oi, "data-domains").includes(domainName))
        rel.add(oi.dataset.id);
    });
  return rel;
}

// ══════════════════════════════════════════════
// HIGHLIGHT ENGINE
// ══════════════════════════════════════════════
function applyHighlight(relIds, color, label, narrative) {
  itemsArray().forEach((item) => {
    const iid = item.dataset.id;
    if (relIds.has(iid)) {
      item.classList.remove("dimmed", "search-no-match");
      item.classList.add(iid === activeId ? "active" : "related");
      item.style.boxShadow =
        iid === activeId
          ? `inset 4px 0 0 ${color}, 0 0 0 1px ${color}55, 0 2px 16px ${color}25`
          : `inset 3px 0 0 ${color}, 0 0 0 1px ${color}30`;
      item.style.background = iid === activeId ? "" : "";
  } else {
      item.classList.add("dimmed");
      item.classList.remove("active", "related");
      item.style.boxShadow = "";
      item.style.background = "";
    }
  });

  cardsArray().forEach((card) => {
    const did = "domain-" + card.dataset.domain;
    if (relIds.has(did)) {
      card.classList.remove("dimmed", "search-no-match");
      card.classList.add("related");
      card.style.borderColor = color;
      card.style.boxShadow = `0 0 0 2px ${color}80, 0 6px 24px ${color}35`;
      card.style.background = "";
    } else {
      card.classList.add("dimmed");
      card.classList.remove("related");
      card.style.borderColor = "";
      card.style.boxShadow = "";
      card.style.background = "";
    }
  });

  // Update connector panel
  showConnPanel(color, label, narrative, buildConnTags(activeId));
  updateStatusBar(relIds, color, label);
}

function clearHighlight() {
  activeId = null;
  activeFw = null;
  itemsArray().forEach((item) => {
    item.classList.remove("active", "related", "dimmed", "search-no-match");
    item.style.boxShadow = "";
    item.style.background = "";
  });
  cardsArray().forEach((card) => {
    card.classList.remove("related", "dimmed", "search-no-match");
    card.style.borderColor = "";
    card.style.boxShadow = "";
    card.style.background = "";
  });
  document.getElementById("conn-panel").classList.remove("visible");
  updateStatusBar(null, null, null);
}

// ══════════════════════════════════════════════
// CONNECTOR PANEL
// ══════════════════════════════════════════════
function buildConnTags(id) {
  if (!id) return {};
  const item = document.querySelector(`[data-id="${id}"]`);
  if (!item) return {};
  const fw = item.dataset.fw;
  const nistNames = {
    "nist-gov": "GOVERN",
    "nist-map": "MAP",
    "nist-meas": "MEASURE",
    "nist-mgmt": "MANAGE",
  };

  let nist = [],
    csa = [],
    iso = [],
    atlas = [],
    owasp = [];

  if (fw === "nist") {
    csa = NIST_TO_CSA[id] || [];
    iso = splitAttr(item, "data-iso").filter((s) => s !== "none");
    atlas = splitAttr(item, "data-atlas").filter((s) => s !== "none");
    owasp = Object.entries(OWASP_TO_NIST)
      .filter(([k, v]) => v.includes(id))
      .map(([k]) => k.replace("owasp-llm", "LLM").replace("LLM0", "LLM0"));
  } else if (fw === "csa") {
    nist = splitAttr(item, "data-nist").map((n) => nistNames[n] || n);
    iso = splitAttr(item, "data-iso").filter((s) => s !== "none");
    atlas = splitAttr(item, "data-atlas").filter((s) => s !== "none");
    const myCode = Object.entries(CSA_CODE_MAP).find(([k, v]) => v === id)?.[0];
    if (myCode)
      owasp = Object.entries(OWASP_TO_CSA)
        .filter(([k, v]) => v.includes(myCode))
        .map(([k]) => k.replace("owasp-llm", "LLM"));
  } else if (fw === "iso") {
    nist = splitAttr(item, "data-nist").map((n) => nistNames[n] || n);
    csa = splitAttr(item, "data-csa").filter((s) => s !== "none");
    atlas = splitAttr(item, "data-atlas").filter((s) => s !== "none");
    owasp = itemsArray()
      .filter(
        (i) =>
          i.dataset.fw === "owasp" &&
          splitAttr(i, "data-iso").some((r) => isoLabelToId(r) === id),
      )
      .map((i) => i.dataset.id.replace("owasp-llm", "LLM"));
  } else if (fw === "atlas") {
    nist = splitAttr(item, "data-nist").map((n) => nistNames[n] || n);
    csa = splitAttr(item, "data-csa").filter((s) => s !== "none");
    iso = splitAttr(item, "data-iso").filter((s) => s !== "none");
    owasp = itemsArray()
      .filter(
        (i) =>
          i.dataset.fw === "owasp" &&
          splitAttr(i, "data-atlas").some((t) => atlasTacticToId(t) === id),
      )
      .map((i) => i.dataset.id.replace("owasp-llm", "LLM"));
  } else if (fw === "owasp") {
    nist = (OWASP_TO_NIST[id] || []).map((n) => nistNames[n] || n);
    csa = OWASP_TO_CSA[id] || [];
    iso = splitAttr(item, "data-iso").filter((s) => s !== "none");
    atlas = splitAttr(item, "data-atlas").filter((s) => s !== "none");
  } else if (fw === "euaia") {
    nist = (EUAIA_TO_NIST[id] || []).map((n) => n.replace("nist-", "").toUpperCase());
    csa = (EUAIA_TO_CSA[id] || []);
  }
  return { nist, csa, iso, atlas, owasp, euaia: id.startsWith("euaia-") ? [DOC_LIBRARY[id]?.ref || id] : [] };
}

function showConnPanel(color, label, narrative, tags) {
  const panel = document.getElementById("conn-panel");
  const { nist = [], csa = [], iso = [], atlas = [], owasp = [] } = tags;

  document.getElementById("conn-title").innerHTML =
    `<span style="color:${color}">${label}</span>`;
  document.getElementById("conn-narrative").textContent = narrative || "";

  const makeTag = (cls, items) =>
    items.length
      ? items.map((t) => `<span class="conn-tag ${cls}">${t}</span>`).join("")
      : `<span style="font-size:9px;color:var(--muted)">—</span>`;

  document.getElementById("conn-body").innerHTML = `
    <div class="conn-section"><div class="conn-section-label">NIST AI RMF</div><div class="conn-tags">${makeTag("conn-tag-nist", nist)}</div></div>
    <div class="conn-section"><div class="conn-section-label">CSA AICM</div><div class="conn-tags">${makeTag("conn-tag-csa", csa)}</div></div>
    <div class="conn-section"><div class="conn-section-label">ISO Standards</div><div class="conn-tags">${makeTag("conn-tag-iso", iso)}</div></div>
    <div class="conn-section"><div class="conn-section-label">ATLAS / OWASP</div><div class="conn-tags">${makeTag("conn-tag-atlas", atlas)} ${makeTag("conn-tag-owasp", owasp)}</div></div>
    <div class="conn-section" style="border-right:none"><div class="conn-section-label">EU AI Act</div><div class="conn-tags">${makeTag("conn-tag-euaia", tags.euaia || [])}</div></div>
  `;
  panel.classList.add("visible");
}

function updateStatusBar(relIds, color, label) {
  const bar = document.getElementById("status-bar");
  if (!bar) return;
  if (!relIds) {
    bar.innerHTML = `
      <div class="status-item"><div class="status-dot" style="background:var(--nist)"></div><span class="status-label">NIST</span><span class="status-val" id="sb-nist">4 functions</span></div>
      <div class="status-item"><div class="status-dot" style="background:var(--csa)"></div><span class="status-label">CSA</span><span class="status-val" id="sb-csa">11 domains</span></div>
      <div class="status-item"><div class="status-dot" style="background:var(--iso)"></div><span class="status-label">ISO</span><span class="status-val" id="sb-iso">5 standards</span></div>
      <div class="status-item"><div class="status-dot" style="background:var(--atlas)"></div><span class="status-label">ATLAS</span><span class="status-val" id="sb-atlas">10 tactics</span></div>
      <div class="status-item"><div class="status-dot" style="background:var(--owasp)"></div><span class="status-label">OWASP</span><span class="status-val" id="sb-owasp">10 risks</span></div>
      <div class="status-item"><div class="status-dot" style="background:var(--euaia)"></div><span class="status-label">EU AI Act</span><span class="status-val" id="sb-euaia">7 areas</span></div>
      <div class="status-item" style="margin-left:auto;color:var(--muted);font-size:9px;">Click any item to explore connections</div>
    `;
    return;
  }
  const counts = { nist: 0, csa: 0, iso: 0, atlas: 0, owasp: 0, euaia: 0 };
  relIds.forEach((id) => {
    if (id.startsWith("nist-")) counts.nist++;
    else if (id.startsWith("csa-")) counts.csa++;
    else if (id.startsWith("iso-")) counts.iso++;
    else if (id.startsWith("atlas-")) counts.atlas++;
    else if (id.startsWith("owasp-")) counts.owasp++;
    else if (id.startsWith("euaia-")) counts.euaia++;
  });
  bar.innerHTML = `
    <div class="status-item"><span style="color:${color};font-size:10px;font-weight:600;">▶ ${label}</span></div>
    <div class="status-item" style="margin-left:8px"><div class="status-dot" style="background:var(--nist)"></div><span class="status-val">${counts.nist} NIST</span></div>
    <div class="status-item"><div class="status-dot" style="background:var(--csa)"></div><span class="status-val">${counts.csa} CSA</span></div>
    <div class="status-item"><div class="status-dot" style="background:var(--iso)"></div><span class="status-val">${counts.iso} ISO</span></div>
    <div class="status-item"><div class="status-dot" style="background:var(--atlas)"></div><span class="status-val">${counts.atlas} ATLAS</span></div>
    <div class="status-item"><div class="status-dot" style="background:var(--owasp)"></div><span class="status-val">${counts.owasp} OWASP</span></div>
    <div class="status-item"><div class="status-dot" style="background:var(--euaia)"></div><span class="status-val">${counts.euaia} EU AI Act</span></div>
    <button class="nav-btn" style="margin-left:auto;font-size:9px;" onclick="clearHighlight()">✕ Clear</button>
  <span id="last-saved-indicator" class="sb-save-hint"></span>
  `;
}

// ══════════════════════════════════════════════
// SEARCH ENGINE
// ══════════════════════════════════════════════
function doSearch(query) {
  searchQuery = query.trim().toLowerCase();
  const all = itemsArray();
  const cards = cardsArray();

  if (!searchQuery) {
    all.forEach((i) => {
      i.classList.remove("search-match", "search-no-match");
    });
    cards.forEach((c) => {
      c.classList.remove("search-match", "search-no-match");
    });
    document.getElementById("search-count").textContent = "";
    if (activeId) {
      const activeItem = document.querySelector(`[data-id="${activeId}"]`);
      if (activeItem) {
        const rel = getRelatedIds(activeItem);
        applyHighlight(
          rel,
          activeItem.dataset.color,
          activeItem.dataset.label,
          NARRATIVES[activeId] || activeItem.dataset.desc,
        );
      }
    }
    return;
  }

  // Clear selection when searching
  clearHighlight();

  let matchCount = 0;
  all.forEach((item) => {
    const text = [
      item.dataset.label || "",
      item.dataset.desc || "",
      item.dataset.id || "",
      item.querySelector(".fw-item-name")?.textContent || "",
      item.querySelector(".fw-item-desc")?.textContent || "",
    ]
      .join(" ")
      .toLowerCase();

    const hit = text.includes(searchQuery);
    item.classList.toggle("search-match", hit);
    item.classList.toggle("search-no-match", !hit);
    if (hit) matchCount++;
  });

  cards.forEach((card) => {
    const text = [
      card.querySelector(".dc-name")?.textContent || "",
      card.querySelector(".dc-sub")?.textContent || "",
      card.dataset.domain || "",
    ]
      .join(" ")
      .toLowerCase();
    const hit = text.includes(searchQuery);
    card.classList.toggle("search-match", hit);
    card.classList.toggle("search-no-match", !hit);
  });

  document.getElementById("search-count").textContent = matchCount
    ? `${matchCount} match${matchCount > 1 ? "es" : ""}`
    : "no matches";
}

// ══════════════════════════════════════════════
// CLICK HANDLERS
// ══════════════════════════════════════════════
function handleItemClick(item, e) {
  e.stopPropagation();

  // In assess mode, cycle status
  if (currentMode === "assess") {
    const id = item.dataset.id;
    const cur = assessState[id] || "none";
    const next = cur === "none" ? "done" : cur === "done" ? "wip" : "none";
    assessState[id] = next;
    localStorage.setItem("ai_assess_state", JSON.stringify(assessState));
    renderAssessBadges();
    renderAssessMode();
    return;
  }

  const id = item.dataset.id;

  // Toggle off
  if (activeId === id) {
    clearHighlight();
    return;
  }

  // Click highlighted item → open docs
  if (
    activeId &&
    (item.classList.contains("related") || item.classList.contains("active")) &&
    DOC_LIBRARY[id]
  ) {
    openDoc(id);
    return;
  }

  // Fresh selection
  if (searchQuery) {
    const inp = document.getElementById("search-input");
    if (inp) {
      inp.value = "";
      doSearch("");
    }
  }

  activeId = id;
  activeFw = item.dataset.fw;
  const rel = getRelatedIds(item);
  applyHighlight(
    rel,
    item.dataset.color,
    item.dataset.label,
    NARRATIVES[id] || item.dataset.desc || "",
  );
}

function handleCardClick(card, e) {
  e.stopPropagation();
  const domain = card.dataset.domain;
  const domId = "domain-" + domain;
  if (activeId === domId) {
    clearHighlight();
    return;
  }
  activeId = domId;
  activeFw = "domain";
  const rel = getDomainRelatedIds(card);
  const name = card.querySelector(".dc-name")?.textContent || domain;
  const tags = buildCardConnTags(card);
  showConnPanel(
    card.dataset.color,
    name,
    `The ${name} domain intersects with the selected frameworks as shown. Click any highlighted item in the columns above to drill into its documentation.`,
    tags,
  );
  applyHighlight(rel, card.dataset.color, name, "");
}

function buildCardConnTags(card) {
  const nistNames = {
    "nist-gov": "GOVERN",
    "nist-map": "MAP",
    "nist-meas": "MEASURE",
    "nist-mgmt": "MANAGE",
  };
  const nist = (card.dataset.nist || "")
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean)
    .map((n) => nistNames[n] || n);
  const csa = (card.dataset.csa || "")
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean);
  const iso = (card.dataset.iso || "")
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean);
  const atlas = (card.dataset.atlas || "")
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean)
    .filter((s) => s !== "none");
  const domain = card.dataset.domain;
  const owasp = itemsArray()
    .filter(
      (i) =>
        i.dataset.fw === "owasp" &&
        splitAttr(i, "data-domains").includes(domain),
    )
    .map((i) => i.dataset.id.replace("owasp-llm", "LLM"));
  return { nist, csa, iso, atlas, owasp };
}

// ══════════════════════════════════════════════
// MODE SWITCHING
// ══════════════════════════════════════════════
function switchMode(mode) {
  currentMode = mode;
  document
    .querySelectorAll(".nav-mode")
    .forEach((b) => b.classList.toggle("active", b.dataset.mode === mode));
  document
    .querySelectorAll(".mode-panel")
    .forEach((p) => p.classList.toggle("active", p.id === `mode-${mode}`));
  if (mode === "assess") renderAssessMode();
  if (mode === "export") renderExportMode();
  if (mode === "audit") {
    /* audit mode init handled by goAuditStep */
  }
}

// ══════════════════════════════════════════════
// ASSESSMENT MODE
// ══════════════════════════════════════════════
function getAssessStats() {
  const allItems = itemsArray();
  const total = allItems.length;
  let done = 0,
    wip = 0;
  allItems.forEach((i) => {
    const s = assessState[i.dataset.id] || "none";
    if (s === "done") done++;
    if (s === "wip") wip++;
  });
  const fwStats = {};
  ["nist", "csa", "iso", "atlas", "owasp", "euaia"].forEach((fw) => {
    const fwItems = allItems.filter((i) => i.dataset.fw === fw);
    const fwDone = fwItems.filter(
      (i) => (assessState[i.dataset.id] || "none") === "done",
    ).length;
    const fwWip = fwItems.filter(
      (i) => (assessState[i.dataset.id] || "none") === "wip",
    ).length;
    fwStats[fw] = { total: fwItems.length, done: fwDone, wip: fwWip };
  });
  return { total, done, wip, none: total - done - wip, fwStats };
}



function renderAssessMode() {
  const stats = getAssessStats();
  const pct = Math.round((stats.done / stats.total) * 100);
  const wipPct = Math.round((stats.wip / stats.total) * 100);

  // Overall progress
  document.getElementById("assess-pct").textContent =
    `${pct}% implemented · ${stats.wip} in progress`;
  document.getElementById("assess-bar").style.width = pct + "%";

  // Per-framework score cards
  const scoresEl = document.getElementById("fw-scores");
  scoresEl.innerHTML = Object.entries(FW_META)
    .map(([fw, meta]) => {
      const s = stats.fwStats[fw];
      const p = Math.round((s.done / s.total) * 100);
      return `
      <div class="fw-score-card">
        <div class="fw-score-name" style="color:${meta.color}">${meta.name}</div>
        <div class="fw-score-nums" style="color:${meta.color}">${s.done}<span style="font-size:16px;color:var(--dim)">/${s.total}</span></div>
        <div class="fw-score-sub">${s.wip} in progress · ${s.total - s.done - s.wip} not started</div>
        <div class="fw-score-bar"><div class="fw-score-fill" style="width:${p}%;background:${meta.color}"></div></div>
      </div>`;
    })
    .join("");

  // Controls table
  renderAssessTable();

  // Gap analysis
  renderGapAnalysis();
}

function renderAssessTable() {
  const allItems = itemsArray();
  let filtered = allItems;
  if (assessFilter === "done")
    filtered = allItems.filter(
      (i) => (assessState[i.dataset.id] || "none") === "done",
    );
  if (assessFilter === "wip")
    filtered = allItems.filter(
      (i) => (assessState[i.dataset.id] || "none") === "wip",
    );
  if (assessFilter === "none")
    filtered = allItems.filter(
      (i) => (assessState[i.dataset.id] || "none") === "none",
    );

  const tbody = document.getElementById("assess-tbody");
  tbody.innerHTML = filtered
    .map((item) => {
      const id = item.dataset.id;
      const fw = item.dataset.fw;
      const st = assessState[id] || "none";
      const pri = PRIORITY_MAP[id] || "P3";
      const priCls =
        pri === "P1" ? "gap-p1" : pri === "P2" ? "gap-p2" : "gap-p3";
      const fwColor = FW_META[fw]?.color || "#888";
      const label = item.querySelector(".fw-item-name")?.textContent || id;
      const desc = item.querySelector(".fw-item-desc")?.textContent || "";

      return `<div class="assess-row" data-id="${id}">
      <div class="assess-cell">
        <span class="gap-priority ${priCls}">${pri}</span>
      </div>
      <div class="assess-cell">
        <div style="font-size:10px;font-weight:500;color:var(--text);margin-bottom:2px;">${label}</div>
        <div style="font-size:9px;color:var(--dim)">${desc}</div>
      </div>
      <div class="assess-cell">
        <span style="font-size:9px;padding:2px 6px;background:${fwColor}15;border:1px solid ${fwColor}30;color:${fwColor};border-radius:2px">${FW_META[fw]?.name || fw}</span>
      </div>
      <div class="assess-cell">
        <div class="status-toggles">
          <button class="status-btn ${st === "done" ? "done" : ""}" onclick="setStatus('${id}','done')">✓ Done</button>
          <button class="status-btn ${st === "wip" ? "wip" : ""}" onclick="setStatus('${id}','wip')">⚡ WIP</button>
          <button class="status-btn ${st === "none" ? "none" : ""}" onclick="setStatus('${id}','none')">✗</button>
        </div>
      </div>
    </div>`;
    })
    .join("");
}

function setStatus(id, status) {
  assessState[id] = status;
  localStorage.setItem("ai_assess_state", JSON.stringify(assessState));
  renderAssessBadges();
  renderAssessMode();
}

function renderAssessBadges() {
  itemsArray().forEach((item) => {
    const id = item.dataset.id;
    const st = assessState[id] || "none";
    item.classList.toggle("status-done", st === "done");
    item.classList.toggle("status-wip", st === "wip");
    item.classList.toggle("status-none", st === "none");
    // Badge
    let badge = item.querySelector(".assess-badge");
    if (st === "done") {
      if (!badge) {
        badge = document.createElement("span");
        badge.className = "assess-badge done";
        item.appendChild(badge);
      }
      badge.className = "assess-badge done";
      badge.textContent = "✓";
    } else if (st === "wip") {
      if (!badge) {
        badge = document.createElement("span");
        badge.className = "assess-badge wip";
        item.appendChild(badge);
      }
      badge.className = "assess-badge wip";
      badge.textContent = "⚡";
    } else {
      if (badge) badge.remove();
    }
  });
}

function renderGapAnalysis() {
  const allItems = itemsArray();
  const gaps = allItems
    .filter((i) => (assessState[i.dataset.id] || "none") !== "done")
    .sort((a, b) => {
      const pa = PRIORITY_MAP[a.dataset.id] || "P3";
      const pb = PRIORITY_MAP[b.dataset.id] || "P3";
      return pa.localeCompare(pb);
    })
    .slice(0, 12);

  const gapEl = document.getElementById("gap-list");
  if (gaps.length === 0) {
    gapEl.innerHTML = `<div style="text-align:center;padding:24px;color:var(--dim);font-size:11px;">🎉 All controls marked as implemented. Export a compliance report from the Export tab.</div>`;
    return;
  }

  gapEl.innerHTML = gaps
    .map((item) => {
      const id = item.dataset.id;
      const pri = PRIORITY_MAP[id] || "P3";
      const st = assessState[id] || "none";
      const priCls =
        pri === "P1" ? "gap-p1" : pri === "P2" ? "gap-p2" : "gap-p3";
      const label = item.querySelector(".fw-item-name")?.textContent || id;
      const fw = item.dataset.fw;
      const narrative = NARRATIVES[id] || item.dataset.desc || "";
      const shortNarrative =
        narrative.length > 180 ? narrative.slice(0, 180) + "…" : narrative;
      const stLabel =
        st === "wip"
          ? ' <span style="color:#f59e0b;font-size:9px">⚡ In progress</span>'
          : "";
      return `<div class="gap-item">
      <span class="gap-priority ${priCls}">${pri}</span>
      <div class="gap-body">
        <div class="gap-title">${label} <span style="font-size:9px;color:var(--muted)">[${FW_META[fw]?.name || fw}]</span>${stLabel}</div>
        <div class="gap-why">${shortNarrative}</div>
      </div>
    </div>`;
    })
    .join("");
}

function setAssessFilter(f) {
  assessFilter = f;
  document
    .querySelectorAll(".assess-filter-btn")
    .forEach((b) => b.classList.toggle("active", b.dataset.filter === f));
  renderAssessTable();
}

// ══════════════════════════════════════════════
// EXPORT MODE
// ══════════════════════════════════════════════
function renderExportMode() {
  generateExportPreview(exportType);
}

function setExportType(type) {
  exportType = type;
  document
    .querySelectorAll(".export-opt-card")
    .forEach((c) => c.classList.toggle("selected", c.dataset.type === type));
  generateExportPreview(type);
}

function generateExportPreview(type) {
  const stats = getAssessStats();
  const pct = Math.round((stats.done / stats.total) * 100);
  const allItems = itemsArray();
  let md = "";
  const ts = new Date().toISOString().split("T")[0];

  if (type === "gap-report") {
    md = `# AI Governance Gap Report\n**Generated:** ${ts}  |  **Overall Coverage:** ${pct}% (${stats.done}/${stats.total} controls)\n\n`;
    md += `## Coverage Summary\n\n| Framework | Implemented | In Progress | Not Started | Coverage |\n|---|---|---|---|---|\n`;
    Object.entries(FW_META).forEach(([fw, meta]) => {
      const s = stats.fwStats[fw];
      const p = Math.round((s.done / s.total) * 100);
      md += `| ${meta.name} | ${s.done} | ${s.wip} | ${s.total - s.done - s.wip} | ${p}% |\n`;
    });
    const gaps = allItems
      .filter((i) => (assessState[i.dataset.id] || "none") !== "done")
      .sort((a, b) =>
        (PRIORITY_MAP[a.dataset.id] || "P3").localeCompare(
          PRIORITY_MAP[b.dataset.id] || "P3",
        ),
      )
      .slice(0, 20);
    md += `\n## Priority Gaps (Top ${gaps.length})\n\n`;
    gaps.forEach((item) => {
      const id = item.dataset.id,
        pri = PRIORITY_MAP[id] || "P3",
        st = assessState[id] || "none";
      const label = item.querySelector(".fw-item-name")?.textContent || id;
      const fw = FW_META[item.dataset.fw]?.name || item.dataset.fw;
      md += `### [${pri}] ${label} *(${fw})*\n`;
      md += `**Status:** ${st === "wip" ? "In Progress" : "Not Started"}  \n`;
      const narr = NARRATIVES[id] || item.dataset.desc || "";
      if (narr) md += `**Why it matters:** ${narr.slice(0, 200)}...\n\n`;
      else md += "\n";
    });
  } else if (type === "selection") {
    if (!activeId) {
      md = `# Selection Export\n\n*No item currently selected. Go to Explore mode and select an item first.*`;
    } else {
      const activeItem = document.querySelector(`[data-id="${activeId}"]`);
      const label = activeItem?.dataset.label || activeId;
      const color = activeItem?.dataset.color || "#888";
      md = `# Cross-Framework Mapping: ${label}\n**Generated:** ${ts}\n\n`;
      md += `## Narrative\n\n${NARRATIVES[activeId] || activeItem?.dataset.desc || ""}\n\n`;
      const tags = buildConnTags(activeId);
      if (tags.nist?.length)
        md += `## NIST AI RMF\n${tags.nist.map((t) => `- ${t}`).join("\n")}\n\n`;
      if (tags.csa?.length)
        md += `## CSA AICM\n${tags.csa.map((t) => `- ${t}`).join("\n")}\n\n`;
      if (tags.iso?.length)
        md += `## ISO Standards\n${tags.iso.map((t) => `- ${t}`).join("\n")}\n\n`;
      if (tags.atlas?.length)
        md += `## MITRE ATLAS\n${tags.atlas.map((t) => `- ${t}`).join("\n")}\n\n`;
      if (tags.owasp?.length)
        md += `## OWASP LLM Top 10\n${tags.owasp.map((t) => `- ${t}:2025`).join("\n")}\n\n`;
    }
  } else if (type === "full-inventory") {
    md = `# AI Control Inventory\n**Generated:** ${ts}  |  **Coverage:** ${pct}%\n\n`;
    ["nist", "csa", "iso", "atlas", "owasp", "euaia"].forEach((fw) => {
      md += `## ${FW_META[fw].name}\n\n| Control | Status | Priority |\n|---|---|---|\n`;
      allItems
        .filter((i) => i.dataset.fw === fw)
        .forEach((item) => {
          const id = item.dataset.id,
            st = assessState[id] || "none",
            pri = PRIORITY_MAP[id] || "P3";
          const label = item.querySelector(".fw-item-name")?.textContent || id;
          const stLabel =
            st === "done"
              ? "✅ Done"
              : st === "wip"
                ? "⚡ WIP"
                : "❌ Not Started";
          md += `| ${label} | ${stLabel} | ${pri} |\n`;
        });
      md += "\n";
    });
  }

  document.getElementById("export-preview-content").textContent = md;
}

function copyExport() {
  const content = document.getElementById("export-preview-content").textContent;
  navigator.clipboard.writeText(content).then(() => {
    const btn = document.getElementById("copy-btn");
    btn.textContent = "✓ Copied";
    setTimeout(() => {
      btn.textContent = "Copy";
    }, 2000);
  });
}

function downloadExport() {
  const content = document.getElementById("export-preview-content").textContent;
  const ts = new Date().toISOString().split("T")[0];
  const names = {
    "gap-report": "gap-report",
    selection: "selection-mapping",
    "full-inventory": "full-inventory",
  };
  const filename = `ai-governance-${names[exportType] || "export"}-${ts}.md`;
  const blob = new Blob([content], { type: "text/markdown" });
  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = filename;
  a.click();
}

// ══════════════════════════════════════════════
// DOC MODAL
// ══════════════════════════════════════════════
function openDoc(id) {
  const data = DOC_LIBRARY[id];
  if (!data) return;
  document.getElementById("doc-eyebrow").textContent = data.framework;
  document.getElementById("doc-title").innerHTML =
    `<span style="color:${data.color}">${data.title}</span>`;
  document.getElementById("doc-ref").textContent = data.ref;
  document.getElementById("doc-summary").textContent = data.summary;
  document.getElementById("doc-cats").innerHTML = data.categories
    .map(
      (c) => `
    <div class="doc-cat">
      <div class="doc-cat-id" style="color:${data.color}">${c.id}</div>
      <div class="doc-cat-name">${c.name}</div>
      <div class="doc-cat-detail">${c.detail}</div>
    </div>`,
    )
    .join("");
  const link = document.getElementById("doc-link");
  link.href = data.docLink;
  link.style.color = data.color;
  document.getElementById("doc-modal").classList.add("open");
  document.body.style.overflow = "hidden";
}

function closeDoc() {
  document.getElementById("doc-modal").classList.remove("open");
  document.body.style.overflow = "";
}

// ══════════════════════════════════════════════
// THEME TOGGLE
// ══════════════════════════════════════════════
const html = document.documentElement;
if (localStorage.getItem("theme") === "light") html.classList.add("light");
document.getElementById("theme-toggle").addEventListener("click", () => {
  html.classList.toggle("light");
  localStorage.setItem(
    "theme",
    html.classList.contains("light") ? "light" : "dark",
  );
});

// ══════════════════════════════════════════════
// WIRE UP EVENTS ON DOM READY
// ══════════════════════════════════════════════
document.addEventListener("DOMContentLoaded", () => {
  // Item clicks
  document.querySelectorAll(".fw-item").forEach((item) => {
    item.addEventListener("click", (e) => handleItemClick(item, e));
    item.addEventListener("dblclick", (e) => {
      e.stopPropagation();
      if (DOC_LIBRARY[item.dataset.id]) openDoc(item.dataset.id);
    });
  });

  // Domain card clicks
  document.querySelectorAll(".domain-card").forEach((card) => {
    card.addEventListener("click", (e) => handleCardClick(card, e));
  });

  // Mode buttons
  document.querySelectorAll(".nav-mode").forEach((btn) => {
    btn.addEventListener("click", () => switchMode(btn.dataset.mode));
  });

  // Search
  const searchInput = document.getElementById("search-input");
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      clearTimeout(searchTimer);
      searchTimer = setTimeout(() => doSearch(e.target.value), 180);
    });
    searchInput.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        searchInput.value = "";
        doSearch("");
        searchInput.blur();
      }
    });
  }

  // Connector panel clear
  document
    .getElementById("conn-clear")
    ?.addEventListener("click", clearHighlight);

  // Doc modal close
  document.getElementById("doc-close")?.addEventListener("click", closeDoc);
  document.getElementById("doc-modal")?.addEventListener("click", (e) => {
    if (e.target.id === "doc-modal") closeDoc();
  });

  // Keyboard
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      if (document.getElementById("doc-modal")?.classList.contains("open"))
        closeDoc();
      else clearHighlight();
    }
    if ((e.ctrlKey || e.metaKey) && e.key === "k") {
      e.preventDefault();
      document.getElementById("search-input")?.focus();
    }
  });

  // Assess filter buttons
  document.querySelectorAll(".assess-filter-btn").forEach((btn) => {
    btn.addEventListener("click", () => setAssessFilter(btn.dataset.filter));
  });

  // Export option cards
  document.querySelectorAll(".export-opt-card").forEach((card) => {
    card.addEventListener("click", () => setExportType(card.dataset.type));
  });

  // Export action buttons
  document.getElementById("copy-btn")?.addEventListener("click", copyExport);
  document
    .getElementById("download-btn")
    ?.addEventListener("click", downloadExport);

  // Reset assessment
  document.getElementById("reset-assess")?.addEventListener("click", () => {
    if (confirm("Clear all assessment data? This cannot be undone.")) {
      assessState = {};
      localStorage.removeItem("ai_assess_state");
      renderAssessBadges();
      renderAssessMode();
    }
  });

  // Init chips and audit mode
  initChips();
  // Set default date
  const dateEl = document.getElementById("p-date");
  if (dateEl) dateEl.value = new Date().toISOString().split("T")[0];
  const pDateEl = document.getElementById("p-date");
  if (pDateEl) pDateEl.value = new Date().toISOString().split("T")[0];
  // Init badges from saved state
  loadSession();
  renderAssessBadges();
  updateStatusBar(null, null, null);

  // Initial export preview
  generateExportPreview(exportType);
});

// ══════════════════════════════════════════════
// AUDIT MODE — fully generic, no org hardcoded
// ══════════════════════════════════════════════



// ── AUDIT STATE ──
let auditProfile = {};
let auditSelectedScenarios = [];
let auditRisks = [];
let auditFindings = [];

// ── STEP NAVIGATION ──
function goAuditStep(step) {
  document.querySelectorAll(".audit-step-panel").forEach((p, i) => {
    p.style.display = i === step ? "block" : "none";
  });
  document.querySelectorAll(".audit-step").forEach((s, i) => {
    s.classList.toggle("active", i === step);
    s.classList.toggle("done", i < step);
  });
  if (step === 1) renderScenarios();
  if (step === 2) buildRiskRegister();
  if (step === 3) buildFindings();
  if (step === 4) renderAuditReport();
}

// ── CHIP TOGGLE ──
function initChips() {
  document.querySelectorAll(".chip-group").forEach((group) => {
    group.querySelectorAll(".chip").forEach((chip) => {
      chip.addEventListener("click", () => chip.classList.toggle("selected"));
    });
  });
}

function selectTier(n) {
  document
    .querySelectorAll(".tier-card")
    .forEach((c) => c.classList.remove("selected"));
  const tc = document.querySelector(`.tier-card[data-tier="${n}"]`);
  if (tc) tc.classList.add("selected");
}

function getProfileValues() {
  const v = (id) => (document.getElementById(id) || {}).value || "";
  const chips = (gid) =>
    Array.from(document.querySelectorAll(`#${gid} .chip.selected`)).map(
      (c) => c.dataset.val,
    );
  const tierEl = document.querySelector(".tier-card.selected");
  auditProfile = {
    title: v("p-title"),
    date: v("p-date") || new Date().toISOString().split("T")[0],
    org: v("p-org"),
    assessor: v("p-assessor"),
    system: v("p-system"),
    desc: v("p-desc"),
    sector: v("p-sector"),
    maturity: v("p-maturity"),
    context: v("p-context"),
    roles: chips("chips-role"),
    tier: tierEl ? parseInt(tierEl.dataset.tier) : 1,
    data: chips("chips-data"),
    deploy: chips("chips-deploy"),
  };
  return auditProfile;
}

// ── SCENARIO RENDERING ──
function renderScenarios() {
  getProfileValues();
  const grid = document.getElementById("scenario-grid");
  if (!grid) return;

  // Auto-suggest based on profile — pre-select matching scenarios if none chosen yet
  if (auditSelectedScenarios.length === 0) {
    RISK_SCENARIOS.forEach((s) => {
      const tierMatch =
        !s.applicableTiers || s.applicableTiers.includes(auditProfile.tier);
      const dataMatch =
        !s.applicableData ||
        s.applicableData.some((d) => (auditProfile.data || []).includes(d));
      if (tierMatch && dataMatch) auditSelectedScenarios.push(s.id);
      // Profile relevance: score scenarios by data+role overlap with user profile
      const profileData  = auditProfile.data   || [];
      const profileRoles = auditProfile.roles  || [];
      const profileDeploy= auditProfile.deploy || [];
      s.profileScore =
        (s.applicableData   ? s.applicableData.filter(d => profileData.includes(d)).length   : 1) +
        (s.applicableTiers  ? (auditProfile.tier && s.applicableTiers.includes(parseInt(auditProfile.tier, 10)) ? 1 : 0) : 0);
      s.profileRelevant = s.profileScore > 0;
    });
  }

  grid.innerHTML = RISK_SCENARIOS.map((s) => {
    const tierOk =
      !s.applicableTiers || s.applicableTiers.includes(auditProfile.tier);
    const dataOk =
      !s.applicableData ||
      s.applicableData.some((d) => (auditProfile.data || []).includes(d));
    const suggested = tierOk && dataOk;
    const selected = auditSelectedScenarios.includes(s.id);

    const tags = [
      ...s.nist.map(
        (n) =>
          `<span class="scenario-tag conn-tag-nist">${n.replace("nist-", "").toUpperCase()}</span>`,
      ),
      ...s.csa.map(
        (c) => `<span class="scenario-tag conn-tag-csa">${c}</span>`,
      ),
      ...(s.owasp || [])
        .slice(0, 2)
        .map(
          (o) =>
            `<span class="scenario-tag conn-tag-owasp">${o.replace("owasp-", "").toUpperCase()}</span>`,
        ),
      ...(s.atlas || [])
        .slice(0, 1)
        .map(
          (a) =>
            `<span class="scenario-tag conn-tag-atlas">${a.replace("atlas-ta", "TA").toUpperCase()}</span>`,
        ),
    ].join("");

    return `<div class="scenario-card ${selected ? "selected" : ""}" onclick="toggleScenario('${s.id}',this)">
      <div class="scenario-check">${selected ? "✓" : ""}</div>
      <div class="scenario-body">
        <div class="scenario-title">${s.title}</div>
        <div class="scenario-cat">${s.category}${suggested ? ' &nbsp;·&nbsp; <span style="color:var(--nist);font-size:8px;">suggested</span>' : ""}</div>
        <div class="scenario-tags">${tags}</div>
      </div>
    </div>`;
  }).join("");
}

function toggleScenario(id, el) {
  const idx = auditSelectedScenarios.indexOf(id);
  if (idx >= 0) {
    auditSelectedScenarios.splice(idx, 1);
    el.classList.remove("selected");
    el.querySelector(".scenario-check").textContent = "";
  } else {
    auditSelectedScenarios.push(id);
    el.classList.add("selected");
    el.querySelector(".scenario-check").textContent = "✓";
  }
}

// ── RISK REGISTER ──
// ── ASSESS → AUDIT BRIDGE ────────────────────────────────────────────────────
// Maps human-readable control ref strings to DOC_LIBRARY framework item IDs
// so Assess mode gap status can pre-populate Audit risk register controls.
function refToFwIds(ref) {
  if (!ref) return [];
  const ids = [];
  const r = ref.toUpperCase();
  if (r.includes("GOVERN"))  ids.push("nist-gov");
  if (r.includes("MAP"))     ids.push("nist-map");
  if (r.includes("MEASURE")) ids.push("nist-meas");
  if (r.includes("MANAGE"))  ids.push("nist-mgmt");
  if (r.includes("GRC"))  ids.push("csa-grc");
  if (r.includes("MDS"))  ids.push("csa-mds");
  if (r.includes("DSP"))  ids.push("csa-dsp");
  if (r.includes("TVM"))  ids.push("csa-tvm");
  if (r.includes("STA"))  ids.push("csa-sta");
  if (r.includes("SEF"))  ids.push("csa-sef");
  if (r.includes("AIS"))  ids.push("csa-ais");
  if (r.includes("LOG"))  ids.push("csa-log");
  if (r.includes("BCR"))  ids.push("csa-bcr");
  if (r.includes("IAM"))  ids.push("csa-iam");
  if (r.includes("CCC") || r.includes("AIBOM")) ids.push("csa-ccc");
  if (r.includes("42001")) ids.push("iso-42001");
  if (r.includes("23894")) ids.push("iso-23894");
  if (r.includes("5338"))  ids.push("iso-5338");
  if (r.includes("5723"))  ids.push("iso-5723");
  if (r.includes("27001")) ids.push("iso-27001");
  if (r.includes("LLM01")) ids.push("owasp-llm01");
  if (r.includes("LLM02")) ids.push("owasp-llm02");
  if (r.includes("LLM03")) ids.push("owasp-llm03");
  if (r.includes("LLM04")) ids.push("owasp-llm04");
  if (r.includes("LLM05")) ids.push("owasp-llm05");
  if (r.includes("LLM06")) ids.push("owasp-llm06");
  if (r.includes("LLM07")) ids.push("owasp-llm07");
  if (r.includes("LLM08")) ids.push("owasp-llm08");
  if (r.includes("LLM09")) ids.push("owasp-llm09");
  if (r.includes("LLM10")) ids.push("owasp-llm10");
  if (r.includes("ART. 5"))  ids.push("euaia-ch2");
  if (r.includes("ART. 14") || r.includes("ART. 13") || r.includes("HIGH-RISK")) ids.push("euaia-ch3-req");
  if (r.includes("ART. 16") || r.includes("PROVIDER")) ids.push("euaia-ch3-obl");
  if (r.includes("ART. 50") || r.includes("TRANSPARENCY")) ids.push("euaia-ch4");
  if (r.includes("GPAI")) ids.push("euaia-ch5");
  if (r.includes("AI OFFICE")) ids.push("euaia-ch7");
  if (r.includes("ART. 72") || r.includes("INCIDENT")) ids.push("euaia-ch9");
  return [...new Set(ids)];
}
function buildRiskRegister() {
  getProfileValues();
  auditRisks = RISK_SCENARIOS.filter(s => s.applied).map((s, i) => {
    const st = assessState || {};
    return {
      id:          s.id,
      num:         i + 1,
      scenario:    s.id,
      title:       s.title,
      category:    s.category,
      description: s.description,
      precedent:   s.precedent,
      likelihood:  s.defaultLikelihood || 3,
      impact:      s.defaultImpact     || 3,
      controls: s.controls.map((c) => {
        const fwIds     = refToFwIds(c.ref);
        const fromAssess = fwIds.some(id => st[id] && st[id].status === "gap");
        const naInAssess = fwIds.length > 0 && fwIds.every(id => st[id] && st[id].status === "na");
        return {
          ...c,
          type:       fromAssess ? "gap" : (naInAssess ? "na" : c.type),
          fromAssess,
          fwIds,
        };
      }),
    };
  });
  renderRiskRegister();
  goAuditStep(2);
}

function getRating(score) {
  if (score >= 20)
    return { label: "CRITICAL", cls: "rating-critical", color: "#f87171" };
  if (score >= 12)
    return { label: "HIGH", cls: "rating-high", color: "#fcd34d" };
  if (score >= 6)
    return { label: "MEDIUM", cls: "rating-medium", color: "#7dd3fc" };
  return { label: "LOW", cls: "rating-low", color: "#6ee7b7" };
}

function renderRiskRegister() {
  const el = document.getElementById("risk-register");
  if (!el) return;
  el.innerHTML = auditRisks
    .map((r, i) => {
      const score = r.likelihood * r.impact;
      const rat = getRating(score);
      const ctrlRows = r.controls
        .map(
          (c, ci) => `<tr>
      <td style="width:28px;color:var(--dim);font-size:10px;">${ci + 1}</td>
      <td><textarea onchange="auditRisks[${i}].controls[${ci}].desc=this.value">${c.desc}</textarea></td>
      <td style="width:120px;"><select onchange="auditRisks[${i}].controls[${ci}].type=this.value">
        <option ${c.type === "Preventive" ? "selected" : ""}>Preventive</option>
        <option ${c.type === "Detective" ? "selected" : ""}>Detective</option>
        <option ${c.type === "Corrective" ? "selected" : ""}>Corrective</option>
      </select></td>
      <td style="width:200px;"><input value="${c.ref}" onchange="auditRisks[${i}].controls[${ci}].ref=this.value"/></td>
    </tr>`,
        )
        .join("");

      const lBtns = [1, 2, 3, 4, 5]
        .map(
          (v) =>
            `<button class="lxi-btn ${r.likelihood === v ? "active" : ""}" onclick="setLxi(${i},'likelihood',${v})">${v}</button>`,
        )
        .join("");
      const iBtns = [1, 2, 3, 4, 5]
        .map(
          (v) =>
            `<button class="lxi-btn ${r.impact === v ? "active" : ""}"     onclick="setLxi(${i},'impact',${v})">${v}</button>`,
        )
        .join("");

      const CATS = [
        "Fairness & Bias",
        "Explainability & Transparency",
        "Data Quality",
        "Robustness & Reliability",
        "Privacy & Data Protection",
        "Security",
        "Accountability & Third-Party Risk",
      ];

      return `<div class="risk-card" id="rc-${i}">
      <div class="risk-card-header">
        <div class="risk-num">${i + 1}</div>
        <input class="risk-title-input" value="${r.title}" onchange="auditRisks[${i}].title=this.value;updateRiskSummary()"/>
        <span class="risk-rating-badge ${rat.cls}" id="rbadge-${i}">${rat.label} (${score})</span>
      </div>
      <div class="risk-card-body">
        <div class="risk-field risk-field-full">
          <div class="risk-field-label">Category</div>
          <select onchange="auditRisks[${i}].category=this.value">${CATS.map((c) => `<option ${c === r.category ? "selected" : ""}>${c}</option>`).join("")}</select>
        </div>
        <div class="risk-field risk-field-full">
          <div class="risk-field-label">Risk Description — edit to reflect this specific system and context</div>
          <textarea onchange="auditRisks[${i}].description=this.value">${r.description}</textarea>
        </div>
        <div class="risk-field risk-field-full">
          <div class="risk-field-label">Real-World Precedent</div>
          <textarea onchange="auditRisks[${i}].precedent=this.value">${r.precedent}</textarea>
        </div>
        <div class="risk-field risk-field-full">
          <div class="risk-field-label">Risk Rating — Likelihood × Impact</div>
          <div class="lxi-grid">
            <div class="lxi-cell">
              <div class="lxi-label">Likelihood</div>
              <div class="lxi-val" style="color:var(--nist)" id="lv-${i}">${r.likelihood}</div>
              <div class="lxi-range" id="lbtns-${i}">${lBtns}</div>
            </div>
            <div class="lxi-cell">
              <div class="lxi-label">Impact</div>
              <div class="lxi-val" style="color:var(--owasp)" id="iv-${i}">${r.impact}</div>
              <div class="lxi-range" id="ibtns-${i}">${iBtns}</div>
            </div>
            <div class="lxi-cell">
              <div class="lxi-label">Score</div>
              <div class="lxi-val" id="sv-${i}" style="color:${rat.color}">${score}</div>
              <div style="margin-top:6px;font-size:9px;color:var(--dim)">L × I</div>
            </div>
          </div>
        </div>
        <div class="risk-field risk-field-full">
          <div class="risk-field-label">Controls — Preventive / Detective / Corrective</div>
          <table class="controls-table">
            <thead><tr><th>#</th><th>Control Description</th><th>Type</th><th>Framework Reference</th></tr></thead>
            <tbody>${ctrlRows}</tbody>
          </table>
        </div>
      </div>
    </div>`;
    })
    .join("");
  updateRiskSummary();
}

function setLxi(idx, field, val) {
  auditRisks[idx][field] = val;
  const score = auditRisks[idx].likelihood * auditRisks[idx].impact;
  const rat = getRating(score);
  const lv = document.getElementById(`lv-${idx}`),
    iv = document.getElementById(`iv-${idx}`),
    sv = document.getElementById(`sv-${idx}`);
  if (lv) lv.textContent = auditRisks[idx].likelihood;
  if (iv) iv.textContent = auditRisks[idx].impact;
  if (sv) {
    sv.textContent = score;
    sv.style.color = rat.color;
  }
  const badge = document.getElementById(`rbadge-${idx}`);
  if (badge) {
    badge.textContent = `${rat.label} (${score})`;
    badge.className = `risk-rating-badge ${rat.cls}`;
  }
  // Refresh button active states
  ["l", "i"].forEach((pre, pi) => {
    const f = pi === 0 ? "likelihood" : "impact";
    const container = document.getElementById(`${pre}btns-${idx}`);
    if (container)
      container.querySelectorAll(".lxi-btn").forEach((btn, bi) => {
        btn.classList.toggle("active", bi + 1 === auditRisks[idx][f]);
      });
  });
  updateRiskSummary();
}

function updateRiskSummary() {
  const counts = { CRITICAL: 0, HIGH: 0, MEDIUM: 0, LOW: 0 };
  auditRisks.forEach((r) => counts[getRating(r.likelihood * r.impact).label]++);
  const bar = document.getElementById("risk-summary-bar");
  if (!bar) return;
  bar.innerHTML = `
    <div class="risk-summary-item"><div class="risk-dot" style="background:#f87171"></div><span style="color:#f87171">${counts.CRITICAL}</span>&nbsp;Critical</div>
    <div class="risk-summary-item"><div class="risk-dot" style="background:#fcd34d"></div><span style="color:#fcd34d">${counts.HIGH}</span>&nbsp;High</div>
    <div class="risk-summary-item"><div class="risk-dot" style="background:#7dd3fc"></div><span style="color:#7dd3fc">${counts.MEDIUM}</span>&nbsp;Medium</div>
    <div class="risk-summary-item"><div class="risk-dot" style="background:#6ee7b7"></div><span style="color:#6ee7b7">${counts.LOW}</span>&nbsp;Low</div>
    <div style="margin-left:auto;font-size:9px;color:var(--muted)">${auditRisks.length} risks · click scores to adjust</div>`;
}

// ── FINDING GENERATOR ──
function buildFindings() {
  auditFindings = auditRisks
    .filter((r) => r.likelihood * r.impact >= 12)
    .map((r, i) => {
      const score = r.likelihood * r.impact;
      const rat = getRating(score);
      const p = auditProfile;
      return {
        id: `AI-FIND-${String(i + 1).padStart(3, "0")}`,
        rating: rat.label,
        ratingCls: rat.cls,
        score: score,
        risk: r,
        condition: `${r.title} was identified in ${p.system || "the AI system under review"}. ${r.description}`,
        criteria: `The following standards and frameworks establish requirements that this finding does not satisfy: ${r.scenario.frameworks.join(" · ")}.`,
        cause: `Root cause: ${
          r.id.startsWith("no-") ||
          r.id.includes("third-party") ||
          r.id.includes("opacity")
            ? "absence of formal AI governance processes prior to or at the time of system deployment, including lack of documented risk assessment, vendor due diligence, or control implementation."
            : "insufficient security and risk management controls applied to the AI system, resulting in exploitable gaps in the organization's AI risk posture."
        }`,
        effect: `If not remediated, this finding exposes the organization to regulatory enforcement, reputational damage, potential litigation from affected individuals, and operational disruption. Risk score: ${score} (${rat.label}).`,
        recommendation: r.controls
          .slice(0, 3)
          .map((c, ci) => `${ci + 1}. [${c.type}] ${c.desc} — Ref: ${c.ref}`)
          .join("\n"),
        owner: "",
        deadline: "",
        priority:
          score >= 20 ? "Immediate (0–30 days)" : "Short-term (30–90 days)",
      };
    });
  renderFindings();
  goAuditStep(3);
}

function renderFindings() {
  const el = document.getElementById("findings-container");
  if (!el) return;
  if (!auditFindings.length) {
    el.innerHTML = `<div style="text-align:center;padding:32px;color:var(--dim);font-size:11px;">No Critical or High risks found. Go back and adjust risk scores if needed.</div>`;
    return;
  }
  const ELEMENTS = [
    {
      key: "condition",
      label: "Condition",
      desc: "What was observed — what is wrong?",
    },
    {
      key: "criteria",
      label: "Criteria",
      desc: "What standards, frameworks, or regulations require something different?",
    },
    {
      key: "cause",
      label: "Cause",
      desc: "Why did this happen — what is the root cause?",
    },
    {
      key: "effect",
      label: "Effect",
      desc: "What are the potential business, legal, or operational consequences?",
    },
    {
      key: "recommendation",
      label: "Recommendation",
      desc: "What specific, actionable steps should the organization take?",
    },
  ];
  el.innerHTML = auditFindings
    .map((f, fi) => {
      const ratingColors = {
        CRITICAL: "#f87171",
        HIGH: "#fcd34d",
        MEDIUM: "#7dd3fc",
        LOW: "#6ee7b7",
      };
      const col = ratingColors[f.rating] || "#888";
      const elems = ELEMENTS.map(
        (e) => `<div class="finding-element">
      <div class="finding-element-label" style="color:${col}">${e.label}</div>
      <div class="finding-element-desc">${e.desc}</div>
      <textarea rows="${e.key === "recommendation" ? 5 : 3}" onchange="auditFindings[${fi}].${e.key}=this.value">${f[e.key]}</textarea>
    </div>`,
      ).join("");
      return `<div class="finding-card">
      <div class="finding-header">
        <span class="finding-id-badge">${f.id}</span>
        <span class="risk-rating-badge ${f.ratingCls}">${f.rating} · Score ${f.score}</span>
        <span style="font-size:11px;font-weight:500;color:var(--text);flex:1;margin-left:8px;">${f.risk.title}</span>
      </div>
      <div class="finding-body">
        ${elems}
        <div class="finding-meta">
          <div class="finding-meta-field"><div class="finding-meta-label">Risk Owner</div>
            <input placeholder="Name / Role" value="${f.owner}" onchange="auditFindings[${fi}].owner=this.value"/></div>
          <div class="finding-meta-field"><div class="finding-meta-label">Remediation Deadline</div>
            <input type="date" value="${f.deadline}" onchange="auditFindings[${fi}].deadline=this.value"/></div>
          <div class="finding-meta-field"><div class="finding-meta-label">Priority</div>
            <select onchange="auditFindings[${fi}].priority=this.value">
              <option ${f.priority.includes("0") ? "selected" : ""}>Immediate (0–30 days)</option>
              <option ${f.priority.includes("30") ? "selected" : ""}>Short-term (30–90 days)</option>
              <option ${f.priority.includes("90") ? "selected" : ""}>Medium-term (90–180 days)</option>
              <option ${f.priority.includes("180") ? "selected" : ""}>Long-term (180+ days)</option>
            </select></div>
        </div>
      </div>
    </div>`;
    })
    .join("");
}

// ── AUDIT REPORT GENERATOR ──
function renderAuditReport() {
  const p = auditProfile;
  const ts = new Date().toISOString().split("T")[0];
  const counts = { CRITICAL: 0, HIGH: 0, MEDIUM: 0, LOW: 0 };
  auditRisks.forEach((r) => counts[getRating(r.likelihood * r.impact).label]++);

  let md = `# AI Risk Assessment Report\n\n---\n\n`;
  md += `## Assessment Header\n\n| Field | Value |\n|---|---|\n`;
  md += `| Assessment Title | ${p.title || "AI Risk Assessment"} |\n`;
  md += `| Organization | ${p.org || "—"} |\n`;
  md += `| System Assessed | ${p.system || "—"} |\n`;
  md += `| Assessment Date | ${p.date || ts} |\n`;
  md += `| Assessor | ${p.assessor || "—"} |\n`;
  md += `| Sector | ${p.sector || "—"} |\n`;
  md += `| AI Supply Chain Role | ${(p.roles || []).join(", ") || "—"} |\n`;
  md += `| Use Case Tier | Tier ${p.tier || "—"} |\n`;
  md += `| Data Processed | ${(p.data || []).join(", ") || "—"} |\n`;
  md += `| Deployment Model | ${(p.deploy || []).join(", ") || "—"} |\n`;
  md += `| Governance Maturity | ${p.maturity || "—"} |\n`;
  md += `| Methodology | NIST AI RMF 1.0 · CSA AICM v1.0.3 · OWASP LLM Top 10 2025 · MITRE ATLAS · ISO/IEC AI Standards |\n\n`;
  if (p.desc) md += `**System Description:** ${p.desc}\n\n`;
  if (p.context) md += `**Additional Context:** ${p.context}\n\n`;

  md += `---\n\n## Executive Summary\n\n`;
  md += `This assessment identified **${auditRisks.length} risk(s)** across ${auditSelectedScenarios.length} applicable scenario(s).\n\n`;
  md += `| Rating | Count |\n|---|---|\n`;
  md += `| 🔴 Critical | ${counts.CRITICAL} |\n| 🟠 High | ${counts.HIGH} |\n| 🟡 Medium | ${counts.MEDIUM} |\n| 🟢 Low | ${counts.LOW} |\n| **Total** | **${auditRisks.length}** |\n\n`;
  if (counts.CRITICAL + counts.HIGH > 0)
    md += `**Immediate attention required:** ${counts.CRITICAL} Critical and ${counts.HIGH} High risk(s) identified.\n\n`;

  md += `---\n\n## Risk Register\n\n`;
  auditRisks.forEach((r, i) => {
    const score = r.likelihood * r.impact;
    const rat = getRating(score);
    md += `### Risk ${i + 1}: ${r.title}\n\n`;
    md += `**Category:** ${r.category}  \n**Rating:** ${rat.label} (Likelihood: ${r.likelihood} × Impact: ${r.impact} = **${score}**)  \n\n`;
    md += `**Description:**  \n${r.description}\n\n`;
    md += `**Real-World Precedent:**  \n${r.precedent}\n\n`;
    md += `**Controls:**\n\n| # | Control | Type | Framework Reference |\n|---|---|---|---|\n`;
    r.controls.forEach(
      (c, ci) => (md += `| ${ci + 1} | ${c.desc} | ${c.type} | ${c.ref} |\n`),
    );
    md += "\n";
  });

  md += `---\n\n## Formal Findings\n\n`;
  if (!auditFindings.length) {
    md += `*No Critical or High findings. Review risk ratings if needed.*\n\n`;
  } else {
    auditFindings.forEach((f) => {
      md += `### ${f.id}: ${f.risk.title}\n\n`;
      md += `| Field | Value |\n|---|---|\n`;
      md += `| Risk Rating | ${f.rating} (Score: ${f.score}) |\n`;
      md += `| System | ${p.system || "—"} |\n`;
      md += `| Risk Owner | ${f.owner || "TBD"} |\n`;
      md += `| Deadline | ${f.deadline || "TBD"} |\n`;
      md += `| Priority | ${f.priority} |\n\n`;
      md += `**Condition** *(What was observed)*  \n${f.condition}\n\n`;
      md += `**Criteria** *(What should be — standards and frameworks)*  \n${f.criteria}\n\n`;
      md += `**Cause** *(Root cause)*  \n${f.cause}\n\n`;
      md += `**Effect** *(Business and legal consequences)*  \n${f.effect}\n\n`;
      md += `**Recommendation** *(Specific, actionable steps)*  \n${f.recommendation}\n\n---\n\n`;
    });
  }

  md += `## Appendix: Frameworks Applied\n\n`;
  md += `- **NIST AI RMF 1.0** — Govern, Map, Measure, Manage functions\n`;
  md += `- **CSA AICM v1.0.3** — 18 AI control domains\n`;
  md += `- **OWASP LLM Top 10 2025** — Application-layer AI risks\n`;
  md += `- **MITRE ATLAS v5** — Adversarial threat landscape for AI systems\n`;
  md += `- **ISO/IEC 42001:2023** — AI Management Systems\n`;
  md += `- **ISO/IEC 23894:2023** — AI Risk Management\n`;
  md += `- **ISO/IEC TS 5723:2022** — AI Trustworthiness\n\n`;
  md += `*Generated by AI Governance Practitioner Workbench · ${ts}*\n`;

  const prev = document.getElementById("audit-report-preview");
  if (prev) prev.textContent = md;
}

function copyAuditReport() {
  const content =
    (document.getElementById("audit-report-preview") || {}).textContent || "";
  navigator.clipboard.writeText(content).then(() => {
    const btn = document.getElementById("audit-copy-btn");
    if (btn) {
      btn.textContent = "✓ Copied";
      setTimeout(() => (btn.textContent = "Copy Report"), 2000);
    }
  });
}

function downloadAuditReport() {
  const content =
    (document.getElementById("audit-report-preview") || {}).textContent || "";
  const org = (auditProfile.org || "org")
    .replace(/[^a-z0-9]/gi, "_")
    .toLowerCase();
  const ts = new Date().toISOString().split("T")[0];
  const a = document.createElement("a");
  a.href = URL.createObjectURL(new Blob([content], { type: "text/markdown" }));
  a.download = `ai-risk-assessment-${org}-${ts}.md`;
  a.click();
}

// ── WORD EXPORT ─────────────────────────────────────────────────────────────
async function downloadAuditReportDocx() {
  const { Document, Packer, Paragraph, TextRun, Table, TableRow, TableCell,
          HeadingLevel, AlignmentType, WidthType, BorderStyle, ShadingType,
          PageNumber, NumberFormat, Footer, Header, PageBreak, Tab,
          convertInchesToTwip, UnderlineType } = window.docx;

  const p = auditProfile;
  const ts = new Date().toISOString().split("T")[0];

  // colour palette
  const COL = {
    navy:    "1E3A5F",
    accent:  "38BDF8",
    dark:    "0F172A",
    mid:     "1E293B",
    light:   "F1F5F9",
    border:  "334155",
    white:   "FFFFFF",
    red:     "EF4444",
    orange:  "F97316",
    yellow:  "EAB308",
    green:   "22C55E",
    muted:   "64748B",
  };

  const txt = (text, opts = {}) => new TextRun({
    text: String(text || ""),
    font: "Calibri",
    size: opts.size || 22,
    bold: opts.bold || false,
    italics: opts.italic || false,
    color: opts.color || COL.dark,
  });

  const para = (children, opts = {}) => new Paragraph({
    children: Array.isArray(children) ? children : [children],
    alignment: opts.align || AlignmentType.LEFT,
    spacing: { before: opts.before ?? 80, after: opts.after ?? 80 },
    heading: opts.heading || undefined,
  });

  const h1 = (text) => new Paragraph({
    children: [new TextRun({ text, font: "Calibri", size: 48, bold: true, color: COL.white })],
    shading: { type: ShadingType.SOLID, color: COL.navy, fill: COL.navy },
    spacing: { before: 400, after: 160 },
  });

  const h2 = (text) => new Paragraph({
    children: [new TextRun({ text, font: "Calibri", size: 32, bold: true, color: COL.navy })],
    spacing: { before: 320, after: 120 },
    border: { bottom: { color: COL.accent, size: 8, space: 4, style: BorderStyle.SINGLE } },
  });

  const cell = (children, opts = {}) => new TableCell({
    children: Array.isArray(children) ? children : [new Paragraph({
      children: [txt(children, (opts.text || {}))],
      spacing: { before: 60, after: 60 },
    })],
    width: opts.width ? { size: opts.width, type: WidthType.PERCENTAGE } : undefined,
    shading: opts.shade ? { type: ShadingType.SOLID, color: opts.shade, fill: opts.shade } : undefined,
    margins: { top: 80, bottom: 80, left: 120, right: 120 },
  });

  const hCell = (label, width) => cell(
    [new Paragraph({ children: [txt(label, { bold: true, color: COL.white, size: 20 })], spacing: { before: 60, after: 60 } })],
    { shade: COL.navy, width }
  );

  const trow = (cells) => new TableRow({ children: cells });

  const sevColor = (score) => {
    if (score >= 16) return { bg: "fee2e2", fg: COL.red,    label: "CRITICAL" };
    if (score >= 9)  return { bg: "ffedd5", fg: COL.orange, label: "HIGH"     };
    if (score >= 4)  return { bg: "fef9c3", fg: COL.yellow, label: "MEDIUM"   };
    return             { bg: "dcfce7", fg: COL.green,  label: "LOW"      };
  };

  const blankPara = () => para([txt("")], { before: 40, after: 40 });

  const tierLabel = p.tier
    ? "Tier " + p.tier + " — " + (p.tier === "1" ? "Critical / High-Risk" : p.tier === "2" ? "Significant Risk" : p.tier === "3" ? "Limited Risk" : "Minimal Risk")
    : "";

  // COVER PAGE
  const cover = [
    new Paragraph({ children: [], spacing: { before: 0, after: 2400 } }),
    new Paragraph({
      children: [new TextRun({ text: "AI RISK ASSESSMENT REPORT", font: "Calibri", size: 72, bold: true, color: COL.navy })],
      alignment: AlignmentType.CENTER, spacing: { before: 0, after: 240 },
    }),
    new Paragraph({
      children: [new TextRun({ text: p.title || "Untitled System Assessment", font: "Calibri", size: 40, italics: true, color: COL.muted })],
      alignment: AlignmentType.CENTER, spacing: { before: 0, after: 480 },
    }),
    new Paragraph({
      children: [new TextRun({ text: "Confidential — For Internal Use Only", font: "Calibri", size: 22, italics: true, color: COL.muted })],
      alignment: AlignmentType.CENTER, spacing: { before: 0, after: 400 },
    }),
    ...[
      ["Organization",    p.org || "—"],
      ["System",          p.system || "—"],
      ["Assessor",        p.assessor || "—"],
      ["Assessment Date", p.date || ts],
      ["Sector",          p.sector || "—"],
      ["Risk Tier",       tierLabel || "—"],
    ].map(([label, value]) => new Paragraph({
      children: [
        new TextRun({ text: (label + ":").padEnd(25), font: "Calibri", size: 22, color: COL.muted }),
        new TextRun({ text: value, font: "Calibri", size: 22, bold: true, color: COL.dark }),
      ],
      alignment: AlignmentType.CENTER, spacing: { before: 60, after: 60 },
    })),
    new Paragraph({ children: [new PageBreak()], spacing: { before: 0, after: 0 } }),
  ];

  // SECTION 1: SYSTEM PROFILE
  const profileRows = [
    ["Assessment Title",     p.title    || "—"],
    ["Organization",         p.org      || "—"],
    ["System Name",          p.system   || "—"],
    ["Assessor",             p.assessor || "—"],
    ["Date",                 p.date     || ts],
    ["Sector",               p.sector   || "—"],
    ["AI Supply Chain Role", (p.roles  || []).join(", ") || "—"],
    ["Data Processed",       (p.data   || []).join(", ") || "—"],
    ["Deployment Model",     (p.deploy || []).join(", ") || "—"],
    ["Maturity Level",       p.maturity || "—"],
    ["Risk Tier",            tierLabel  || "—"],
  ];
  if (p.desc)    profileRows.push(["System Description", p.desc]);
  if (p.context) profileRows.push(["Additional Context",  p.context]);

  const profileTable = new Table({
    width: { size: 100, type: WidthType.PERCENTAGE },
    rows: [
      trow([hCell("Field", 30), hCell("Value", 70)]),
      ...profileRows.map(([label, value], idx) => trow([
        cell([new Paragraph({ children: [txt(label, { bold: true, size: 20 })], spacing: { before: 60, after: 60 } })],
             { shade: idx % 2 === 0 ? "f8fafc" : COL.white, width: 30 }),
        cell([new Paragraph({ children: [txt(value, { size: 20 })], spacing: { before: 60, after: 60 } })],
             { shade: idx % 2 === 0 ? "f8fafc" : COL.white, width: 70 }),
      ])),
    ],
  });

  // SECTION 2: RISK SUMMARY
  const counts = { CRITICAL: 0, HIGH: 0, MEDIUM: 0, LOW: 0 };
  auditRisks.forEach(r => {
    const score = r.likelihood * r.impact;
    counts[sevColor(score).label]++;
  });
  const totalRisks = auditRisks.length;

  const summaryTable = new Table({
    width: { size: 100, type: WidthType.PERCENTAGE },
    rows: [
      trow([hCell("Severity", 20), hCell("Count", 15), hCell("% of Total", 15), hCell("Action Required", 50)]),
      ...Object.entries({
        CRITICAL: ["fee2e2", COL.red,    "Immediate action — regulatory breach or severe harm likely"],
        HIGH:     ["ffedd5", COL.orange, "Urgent remediation required within 30 days"],
        MEDIUM:   ["fef9c3", COL.yellow, "Address within 90 days via remediation roadmap"],
        LOW:      ["dcfce7", COL.green,  "Monitor; remediate within normal governance cycle"],
      }).map(([sev, [bg, fg, desc]]) => {
        const pct = totalRisks > 0 ? Math.round((counts[sev] / totalRisks) * 100) + "%" : "0%";
        return trow([
          cell([new Paragraph({ children: [txt(sev, { bold: true, color: fg, size: 20 })], spacing: { before: 60, after: 60 } })], { shade: bg, width: 20 }),
          cell([new Paragraph({ children: [txt(String(counts[sev]), { bold: true, size: 24, color: fg })], spacing: { before: 60, after: 60 }, alignment: AlignmentType.CENTER })], { shade: bg, width: 15 }),
          cell([new Paragraph({ children: [txt(pct, { size: 20, color: COL.muted })], spacing: { before: 60, after: 60 }, alignment: AlignmentType.CENTER })], { shade: bg, width: 15 }),
          cell([new Paragraph({ children: [txt(desc, { size: 20 })], spacing: { before: 60, after: 60 } })], { shade: bg, width: 50 }),
        ]);
      }),
    ],
  });

  // SECTION 3: RISK REGISTER
  const riskTableRows = [trow([hCell("Risk Scenario", 55), hCell("Rating", 15), hCell("L", 8), hCell("I", 8), hCell("Score", 14)])];
  auditRisks.forEach((r, idx) => {
    const score = r.likelihood * r.impact;
    const sev = sevColor(score);
    const gapCount = r.controls ? r.controls.filter(c => c.type === "gap").length : 0;
    const ctrlCount = r.controls ? r.controls.length : 0;

    // Risk row
    riskTableRows.push(trow([
      cell([
        new Paragraph({ children: [txt((idx + 1) + ".  " + (r.title || "Risk Scenario"), { bold: true, size: 22 })], spacing: { before: 80, after: 40 } }),
        ...(r.desc ? [new Paragraph({ children: [txt(r.desc, { size: 18, color: COL.muted })], spacing: { before: 0, after: 80 } })] : []),
      ], { shade: idx % 2 === 0 ? "f8fafc" : COL.white, width: 55 }),
      cell([new Paragraph({ children: [txt(sev.label, { bold: true, color: sev.fg, size: 20 })], spacing: { before: 80, after: 80 }, alignment: AlignmentType.CENTER })], { shade: sev.bg, width: 15 }),
      cell([new Paragraph({ children: [txt(String(r.likelihood), { size: 20 })], spacing: { before: 80, after: 80 }, alignment: AlignmentType.CENTER })], { shade: idx % 2 === 0 ? "f8fafc" : COL.white, width: 8 }),
      cell([new Paragraph({ children: [txt(String(r.impact), { size: 20 })], spacing: { before: 80, after: 80 }, alignment: AlignmentType.CENTER })], { shade: idx % 2 === 0 ? "f8fafc" : COL.white, width: 8 }),
      cell([new Paragraph({ children: [txt(String(score), { bold: true, size: 20, color: sev.fg })], spacing: { before: 80, after: 80 }, alignment: AlignmentType.CENTER })], { shade: sev.bg, width: 14 }),
    ]));

    // Controls subrow
    if (ctrlCount > 0) {
      const gapLines = r.controls.filter(c => c.type === "gap").map(c => new Paragraph({ children: [txt("⚠ [GAP] " + (c.label || c.id || ""), { size: 18, color: COL.red })], spacing: { before: 20, after: 20 }, indent: { left: convertInchesToTwip(0.2) } }));
      const okLines  = r.controls.filter(c => c.type !== "gap").map(c => new Paragraph({ children: [txt("✓ " + (c.label || c.id || ""), { size: 18, color: COL.green })], spacing: { before: 20, after: 20 }, indent: { left: convertInchesToTwip(0.2) } }));
      riskTableRows.push(new TableRow({
        children: [new TableCell({
          children: [
            new Paragraph({ children: [txt("Controls: " + ctrlCount + " reviewed, " + gapCount + " gap(s)", { bold: true, size: 18, color: COL.muted })], spacing: { before: 60, after: 40 } }),
            ...gapLines, ...okLines.slice(0, 6),
          ],
          columnSpan: 5,
          shading: { type: ShadingType.SOLID, color: "f0f9ff", fill: "f0f9ff" },
          margins: { top: 40, bottom: 80, left: 240, right: 120 },
        })],
      }));
    }
  });

  const riskTable = new Table({
    width: { size: 100, type: WidthType.PERCENTAGE },
    rows: riskTableRows,
  });

  // SECTION 4: CONTROL GAPS
  const allGaps = [];
  auditRisks.forEach(r => {
    (r.controls || []).filter(c => c.type === "gap").forEach(c => {
      allGaps.push({ risk: r.title || "Risk", ctrl: c.label || c.id || "Control" });
    });
  });

  const gapSection = allGaps.length > 0 ? [
    h1("4. Control Gaps"),
    new Paragraph({ children: [txt("The following " + allGaps.length + " control gap" + (allGaps.length !== 1 ? "s" : "") + " require remediation:", { size: 20 })], spacing: { before: 80, after: 120 } }),
    new Table({
      width: { size: 100, type: WidthType.PERCENTAGE },
      rows: [
        trow([hCell("#", 8), hCell("Risk Scenario", 42), hCell("Control Gap Identified", 50)]),
        ...allGaps.map((g, i) => trow([
          cell([new Paragraph({ children: [txt(String(i + 1), { size: 20 })], spacing: { before: 60, after: 60 }, alignment: AlignmentType.CENTER })], { shade: i % 2 === 0 ? "f8fafc" : COL.white, width: 8 }),
          cell([new Paragraph({ children: [txt(g.risk, { size: 20 })], spacing: { before: 60, after: 60 } })], { shade: i % 2 === 0 ? "f8fafc" : COL.white, width: 42 }),
          cell([new Paragraph({ children: [txt(g.ctrl, { bold: true, color: COL.red, size: 20 })], spacing: { before: 60, after: 60 } })], { shade: i % 2 === 0 ? "fee2e2" : "fff1f1", width: 50 }),
        ])),
      ],
    }),
  ] : [
    h1("4. Control Gaps"),
    new Paragraph({ children: [txt("No control gaps identified. All assessed controls are in place.", { italic: true, color: COL.green, size: 20 })], spacing: { before: 80, after: 80 } }),
  ];

  // ASSEMBLE DOCUMENT
  const org = (p.org || "org").replace(/[^a-z0-9]/gi, "_").toLowerCase();
  const filename = "ai-risk-assessment_" + org + "_" + ts + ".docx";

  const doc = new Document({
    creator: "AI Governance Practitioner Workbench",
    title: "AI Risk Assessment Report",
    description: "Exported from AI Governance Practitioner Workbench",
    sections: [{
      properties: {
        page: {
          margin: {
            top:    convertInchesToTwip(1),
            bottom: convertInchesToTwip(1),
            left:   convertInchesToTwip(1.25),
            right:  convertInchesToTwip(1.25),
          },
        },
      },
      headers: {
        default: new Header({
          children: [new Paragraph({
            children: [
              new TextRun({ text: "AI Risk Assessment Report  |  CONFIDENTIAL", font: "Calibri", size: 16, color: COL.muted }),
              new TextRun({ text: "		" + (p.org || ""), font: "Calibri", size: 16, bold: true, color: COL.navy }),
            ],
            border: { bottom: { color: COL.accent, size: 6, style: BorderStyle.SINGLE, space: 4 } },
          })],
        }),
      },
      footers: {
        default: new Footer({
          children: [new Paragraph({
            children: [
              new TextRun({ text: "Generated " + ts + "  |  AI Governance Practitioner Workbench", font: "Calibri", size: 16, color: COL.muted }),
              new TextRun({ text: "		Page ", font: "Calibri", size: 16, color: COL.muted }),
              new TextRun({ children: [PageNumber.CURRENT], font: "Calibri", size: 16, color: COL.muted }),
              new TextRun({ text: " of ", font: "Calibri", size: 16, color: COL.muted }),
              new TextRun({ children: [PageNumber.TOTAL_PAGES], font: "Calibri", size: 16, color: COL.muted }),
            ],
            border: { top: { color: COL.border, size: 4, style: BorderStyle.SINGLE, space: 4 } },
          })],
        }),
      },
      children: [
        ...cover,
        h1("1. System Profile"),
        blankPara(),
        profileTable,
        h1("2. Risk Summary"),
        new Paragraph({ children: [txt("Total risk scenarios assessed: " + totalRisks, { bold: true, size: 20 })], spacing: { before: 80, after: 120 } }),
        summaryTable,
        h1("3. Risk Register"),
        new Paragraph({ children: [txt("Detailed breakdown of assessed risk scenarios, controls, and identified gaps.", { size: 20, color: COL.muted })], spacing: { before: 80, after: 120 } }),
        riskTable,
        blankPara(),
        ...gapSection,
        blankPara(),
        new Paragraph({ children: [new TextRun({ text: "END OF REPORT", font: "Calibri", size: 20, bold: true, color: COL.muted })], alignment: AlignmentType.CENTER, spacing: { before: 400, after: 80 } }),
        new Paragraph({ children: [new TextRun({ text: "Generated by AI Governance Practitioner Workbench", font: "Calibri", size: 16, italics: true, color: COL.muted })], alignment: AlignmentType.CENTER, spacing: { before: 0, after: 0 } }),
      ],
    }],
  });

  try {
    const blob = await Packer.toBlob(doc);
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = filename;
    a.click();
    URL.revokeObjectURL(a.href);
  } catch (e) {
    alert("Word export failed: " + e.message);
    console.error("docx export error", e);
  }
}

// ── SESSION MANAGEMENT ─────────────────────────────────────────────────────
const SESSION_KEY = 'ai_gwb_session_v1';

function updateSavedIndicator(label) {
  const el = document.getElementById('last-saved-indicator');
  if (el) el.textContent = label;
}
function saveSession() {
  try {
    const state = JSON.parse(localStorage.getItem('ai_assess_state') || '{}');
    const session = {
      savedAt: new Date().toISOString(),
      assessState: state,
      auditProfile: window.auditProfile || {},
      auditRisks: (() => {
        const risks = {};
        document.querySelectorAll('.risk-row').forEach(row => {
          const id = row.dataset.id;
          if (!id) return;
          const lSel = row.querySelector('.likelihood-select');
          const iSel = row.querySelector('.impact-select');
          const tSel = row.querySelector('.control-type-select');
          risks[id] = {
            likelihood: lSel ? lSel.value : null,
            impact: iSel ? iSel.value : null,
            controlType: tSel ? tSel.value : null
          };
        });
        return risks;
      })(),
      auditTier: window.auditTier || null
    };
    localStorage.setItem(SESSION_KEY, JSON.stringify(session));
    updateSavedIndicator('Saved ' + new Date().toLocaleTimeString());
    console.log('[GWB] Session saved');
  } catch(e) {
    console.error('[GWB] Save failed', e);
  }
}
function loadSession() {
  try {
    const raw = localStorage.getItem(SESSION_KEY);
    if (!raw) return;
    const session = JSON.parse(raw);
    // Restore assess state
    if (session.assessState) {
      localStorage.setItem('ai_assess_state', JSON.stringify(session.assessState));
    }
    // Restore audit profile
    if (session.auditProfile && typeof initAuditProfile === "function") {
      Object.assign(window.auditProfile || {}, session.auditProfile);
    }
    // Restore tier
    if (session.auditTier != null) {
      window.auditTier = session.auditTier;
    }
    const d = new Date(session.savedAt);
    const label = 'Restored ' + d.toLocaleDateString() + ' ' + d.toLocaleTimeString();
    updateSavedIndicator(label);
    console.log('[GWB] Session loaded from', session.savedAt);
  } catch(e) {
    console.error('[GWB] Load failed', e);
  }
}
function resetSession() {
  if (!confirm('Reset all assessment data? This cannot be undone.')) return;
  localStorage.removeItem(SESSION_KEY);
  localStorage.removeItem('ai_assess_state');
  window.auditProfile = {};
  window.auditTier = null;
  // Reset UI chips
  document.querySelectorAll('.chip.active').forEach(c => c.classList.remove('active'));
  // Re-render if audit panel visible
  if (typeof renderAuditDashboard === 'function') renderAuditDashboard();
  updateSavedIndicator('New session');
  console.log('[GWB] Session reset');
}
function exportSessionJSON() {
  try {
    const raw = localStorage.getItem(SESSION_KEY);
    const data = raw ? JSON.parse(raw) : { savedAt: new Date().toISOString(), note: 'No session saved yet' };
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = 'gwb-session-' + new Date().toISOString().slice(0,10) + '.json';
    a.click();
    URL.revokeObjectURL(a.href);
  } catch(e) {
    alert('Export failed: ' + e.message);
  }
}
function importSessionJSON() {
  const input = document.createElement('input');
  input.type = 'file';
  input.accept = '.json,application/json';
  input.onchange = async e => {
    try {
      const file = e.target.files[0];
      if (!file) return;
      const text = await file.text();
      const session = JSON.parse(text);
      if (session.assessState) {
        localStorage.setItem('ai_assess_state', JSON.stringify(session.assessState));
      }
      localStorage.setItem(SESSION_KEY, JSON.stringify(session));
      if (session.auditTier != null) window.auditTier = session.auditTier;
      const d = new Date(session.savedAt || Date.now());
      updateSavedIndicator('Imported ' + d.toLocaleDateString());
      alert('Session imported. Reload the page to apply all state.');
      console.log('[GWB] Session imported');
    } catch(e) {
      alert('Import failed: ' + e.message);
    }
  };
  input.click();
}

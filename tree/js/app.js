(() => {
  // js/branchAnchors.js
  var CANOPY_POINTS = [
    { x: 47.19, y: 9.79 },
    { x: 52.99, y: 9.36 },
    { x: 53.77, y: 9.36 },
    { x: 58.37, y: 8.19 },
    { x: 38.94, y: 13.51 },
    { x: 42.4, y: 17.02 },
    { x: 49.22, y: 15 },
    { x: 49.46, y: 11.28 },
    { x: 55.5, y: 12.02 },
    { x: 60.83, y: 13.09 },
    { x: 62.08, y: 14.79 },
    { x: 65.37, y: 15.74 },
    { x: 71.71, y: 17.34 },
    { x: 28.23, y: 21.28 },
    { x: 31.94, y: 20.64 },
    { x: 36.66, y: 18.19 },
    { x: 39.71, y: 17.87 },
    { x: 42.46, y: 22.13 },
    { x: 48.44, y: 20.32 },
    { x: 50.06, y: 21.06 },
    { x: 55.38, y: 22.87 },
    { x: 60.41, y: 22.98 },
    { x: 64.23, y: 19.79 },
    { x: 69.92, y: 24.47 },
    { x: 74.88, y: 22.02 },
    { x: 25.54, y: 30.53 },
    { x: 27.75, y: 30 },
    { x: 32.66, y: 28.94 },
    { x: 33.91, y: 27.23 },
    { x: 38.94, y: 25.43 },
    { x: 42.7, y: 30.64 },
    { x: 48.92, y: 29.79 },
    { x: 53.71, y: 28.19 },
    { x: 59.93, y: 28.19 },
    { x: 62.56, y: 27.23 },
    { x: 65.43, y: 30.21 },
    { x: 70.1, y: 31.17 },
    { x: 74.64, y: 28.19 },
    { x: 80.08, y: 28.83 },
    { x: 20.69, y: 34.15 },
    { x: 23.68, y: 35.43 },
    { x: 27.27, y: 37.02 },
    { x: 32.42, y: 34.79 },
    { x: 36.48, y: 32.87 },
    { x: 44.56, y: 36.06 },
    { x: 49.34, y: 37.13 },
    { x: 56.22, y: 38.51 },
    { x: 59.33, y: 33.72 },
    { x: 61.24, y: 32.55 },
    { x: 67.05, y: 32.02 },
    { x: 71.05, y: 38.51 },
    { x: 74.64, y: 38.09 },
    { x: 77.75, y: 31.6 },
    { x: 18.72, y: 42.13 },
    { x: 22.13, y: 38.94 },
    { x: 29.01, y: 38.62 },
    { x: 33.07, y: 41.28 },
    { x: 36.54, y: 39.36 },
    { x: 38.34, y: 43.83 },
    { x: 47.91, y: 41.38 },
    { x: 53.29, y: 41.7 },
    { x: 56.16, y: 40.43 },
    { x: 58.25, y: 41.17 },
    { x: 62.56, y: 45.32 },
    { x: 65.97, y: 45.64 },
    { x: 73.03, y: 44.26 },
    { x: 74.7, y: 42.23 },
    { x: 77.63, y: 42.13 },
    { x: 83.25, y: 43.83 },
    { x: 21.83, y: 48.83 },
    { x: 26.56, y: 47.66 },
    { x: 29.72, y: 46.28 },
    { x: 34.27, y: 50.74 },
    { x: 38.76, y: 47.77 },
    { x: 59.09, y: 49.26 },
    { x: 63.64, y: 49.15 },
    { x: 68.24, y: 47.98 },
    { x: 71.65, y: 50.96 },
    { x: 76.44, y: 47.34 },
    { x: 79.72, y: 52.34 },
    { x: 81.34, y: 49.89 },
    { x: 87.38, y: 50.11 },
    { x: 20.1, y: 54.36 },
    { x: 23.33, y: 57.34 },
    { x: 25.66, y: 56.6 },
    { x: 32.78, y: 56.7 },
    { x: 36.66, y: 55.64 },
    { x: 41.09, y: 56.6 },
    { x: 57.95, y: 55.32 },
    { x: 61.18, y: 56.6 },
    { x: 65.85, y: 55 },
    { x: 72.19, y: 58.62 },
    { x: 75.96, y: 56.6 },
    { x: 80.32, y: 58.51 },
    { x: 83.55, y: 56.49 },
    { x: 23.62, y: 66.7 },
    { x: 26.5, y: 64.15 },
    { x: 33.19, y: 60.53 },
    { x: 36.24, y: 65.53 },
    { x: 39.29, y: 61.38 },
    { x: 62.74, y: 65.53 },
    { x: 65.19, y: 63.72 },
    { x: 69.44, y: 65.85 },
    { x: 23.39, y: 69.36 },
    { x: 28.35, y: 68.51 },
    { x: 31.76, y: 67.23 },
    { x: 67.82, y: 67.66 }
  ];
  var REFERENCE_POINT = { x: 50, y: 32 };
  function getAllAnchors() {
    return CANOPY_POINTS.map((point, index) => ({ ...point, index }));
  }

  // js/anchorPlacement.js
  var GOLDEN_ANGLE_DEG = 137.508;
  function distance(a, b) {
    const dx = a.x - b.x;
    const dy = a.y - b.y;
    return Math.sqrt(dx * dx + dy * dy);
  }
  function sortAnchorsByDistance(anchors, referencePoint) {
    return anchors.map((anchor, index) => ({ index, d: distance(anchor, referencePoint) })).sort((a, b) => a.d - b.d).map((entry) => entry.index);
  }
  function computeAnchorAssignment(orderIndex, sortedAnchorIndices) {
    const anchorCount = sortedAnchorIndices.length;
    const slot = orderIndex % anchorCount;
    const occupantIndex = Math.floor(orderIndex / anchorCount);
    return { anchorIndex: sortedAnchorIndices[slot], occupantIndex };
  }
  function computeStickyOffset(occupantIndex, baseRadiusPercent = 3.2) {
    if (occupantIndex === 0) {
      return { dx: 0, dy: 0 };
    }
    const angle = occupantIndex * GOLDEN_ANGLE_DEG * Math.PI / 180;
    const radius = baseRadiusPercent * Math.sqrt(occupantIndex);
    return { dx: radius * Math.cos(angle), dy: radius * Math.sin(angle) };
  }

  // js/stageConfig.js
  var STAGES = [
    { id: 1, min: 0 },
    { id: 2, min: 10 },
    { id: 3, min: 25 },
    { id: 4, min: 45 },
    { id: 5, min: 70 },
    { id: 6, min: 100 }
  ];
  function getStageForCount(count) {
    let current = STAGES[0];
    for (const stage of STAGES) {
      if (count >= stage.min) {
        current = stage;
      }
    }
    return current;
  }

  // js/leafScale.js
  var NATIVE_FRAME_WIDTH = 1672;
  var NATIVE_FRAME_HEIGHT = 940;
  var BASE_STICKY_WIDTH_PX = 40;
  function computeFrameScale(frameWidthPx, nativeFrameWidth = NATIVE_FRAME_WIDTH) {
    if (!Number.isFinite(frameWidthPx) || frameWidthPx <= 0) {
      return 1;
    }
    return frameWidthPx / nativeFrameWidth;
  }

  // js/stickyVisuals.js
  var LEAF_VARIANTS = ["oval-a", "oval-b", "heart"];
  var FLOWER_PROBABILITY = 0.15;
  var LEAF_COLORS = ["#4FAE62", "#D95B45", "#E3C43F", "#3E9BB5", "#9B68D0"];
  var FLOWER_COLORS = ["#FFF1D6", "#FFD7C8", "#F7E7F0", "#FFE4A8"];
  var CENTER_COLOR_ALIASES = {
    \u798F\u5CA1: "#4FAE62",
    \u798F\u5CA1\u5B66\u7FD2\u30BB\u30F3\u30BF\u30FC: "#4FAE62",
    \u798F\u5CA1\u30BB\u30F3\u30BF\u30FC: "#4FAE62",
    \u718A\u672C: "#F04F69",
    \u718A\u672C\u5B66\u7FD2\u30BB\u30F3\u30BF\u30FC: "#F04F69",
    \u718A\u672C\u30BB\u30F3\u30BF\u30FC: "#F04F69",
    \u5BAE\u5D0E: "#E3C43F",
    \u5BAE\u5D0E\u5B66\u7FD2\u30BB\u30F3\u30BF\u30FC: "#E3C43F",
    \u5BAE\u5D0E\u30BB\u30F3\u30BF\u30FC: "#E3C43F",
    \u5927\u5206: "#3E9BB5",
    \u5927\u5206\u5B66\u7FD2\u30BB\u30F3\u30BF\u30FC: "#3E9BB5",
    \u5927\u5206\u30BB\u30F3\u30BF\u30FC: "#3E9BB5",
    \u5343\u8449: "#9D7AF5",
    \u5343\u8449\u5B66\u7FD2\u30BB\u30F3\u30BF\u30FC: "#9D7AF5",
    \u5343\u8449\u30BB\u30F3\u30BF\u30FC: "#9D7AF5"
  };
  var STICKY_DEPTHS = ["background", "midground", "foreground"];
  var DEPTH_WEIGHTS = { background: 0.2, midground: 0.6, foreground: 0.2 };
  var DEPTH_WIDTH_RANGES = {
    background: { min: 14, max: 25 },
    midground: { min: 28, max: 39 },
    foreground: { min: 34, max: 45 }
  };
  var LEAF_WIDTH_MIN_PX = Math.min(...Object.values(DEPTH_WIDTH_RANGES).map((r) => r.min));
  var LEAF_WIDTH_MAX_PX = Math.max(...Object.values(DEPTH_WIDTH_RANGES).map((r) => r.max));
  var LEAF_ROTATION_NATURAL_MAX_DEG = 70;
  var LEAF_ROTATION_DRAMATIC_MIN_DEG = 110;
  var LEAF_ROTATION_DRAMATIC_MAX_DEG = 250;
  var LEAF_ROTATION_DRAMATIC_PROBABILITY = 0.2;
  var LEAF_JITTER_MIN_PX = 2;
  var LEAF_JITTER_MAX_PX = 6;
  var FOREGROUND_ACCENT_MAX_X_PROBABILITY = 0.5;
  var FOREGROUND_ACCENT_DEPTH_BONUS = 0.15;
  var TONE_VARIANTS = [
    { lightnessMultiplier: 0.97, saturationMultiplier: 1.03 },
    { lightnessMultiplier: 1, saturationMultiplier: 1 },
    { lightnessMultiplier: 1.07, saturationMultiplier: 0.96 }
  ];
  var DEPTH_OPACITY = {
    background: 0.82,
    midground: 0.92,
    foreground: 1
  };
  var SWAY_PROBABILITY = 0.3;
  var SWAY_PERIODS_SEC = [7, 9, 11];
  var SWAY_AMPLITUDE_RANGES = {
    background: { min: 1, max: 1.6 },
    midground: { min: 1.6, max: 2.2 },
    foreground: { min: 2.2, max: 3 }
  };
  function hexToHsl(hex) {
    const r = parseInt(hex.slice(1, 3), 16) / 255;
    const g = parseInt(hex.slice(3, 5), 16) / 255;
    const b = parseInt(hex.slice(5, 7), 16) / 255;
    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    const l = (max + min) / 2;
    if (max === min) return { h: 0, s: 0, l };
    const d = max - min;
    const s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    let h;
    if (max === r) h = (g - b) / d + (g < b ? 6 : 0);
    else if (max === g) h = (b - r) / d + 2;
    else h = (r - g) / d + 4;
    return { h: h * 60, s, l };
  }
  function hslToHex({ h, s, l }) {
    const c = (1 - Math.abs(2 * l - 1)) * s;
    const x = c * (1 - Math.abs(h / 60 % 2 - 1));
    const m = l - c / 2;
    const [r0, g0, b0] = h < 60 ? [c, x, 0] : h < 120 ? [x, c, 0] : h < 180 ? [0, c, x] : h < 240 ? [0, x, c] : h < 300 ? [x, 0, c] : [c, 0, x];
    const toHex = (v) => Math.round(Math.max(0, Math.min(1, v + m)) * 255).toString(16).padStart(2, "0");
    return `#${toHex(r0)}${toHex(g0)}${toHex(b0)}`;
  }
  function applyTone(hex, tone) {
    const { h, s, l } = hexToHsl(hex);
    const toned = {
      h,
      s: Math.max(0, Math.min(1, s * tone.saturationMultiplier)),
      l: Math.max(0, Math.min(1, l * tone.lightnessMultiplier))
    };
    return hslToHex(toned);
  }
  function pickToneVariant(id) {
    const roll = hashToFraction(`tone:${id}`);
    const index = Math.min(Math.floor(roll * TONE_VARIANTS.length), TONE_VARIANTS.length - 1);
    return TONE_VARIANTS[index];
  }
  function hashStringToInt(str) {
    let hash = 0;
    for (let i = 0; i < str.length; i += 1) {
      hash = hash * 31 + str.charCodeAt(i) | 0;
    }
    hash ^= hash >>> 16;
    hash = Math.imul(hash, 2246822507);
    hash ^= hash >>> 13;
    hash = Math.imul(hash, 3266489909);
    hash ^= hash >>> 16;
    return Math.abs(hash);
  }
  function hashToFraction(seed) {
    return hashStringToInt(seed) % 1e3 / 1e3;
  }
  function normalizeCenterName(center) {
    return String(center ?? "").replace(/[　\s]+/gu, "").trim();
  }
  function getStickyKind(id) {
    return hashToFraction(`kind:${id}`) < FLOWER_PROBABILITY ? "flower" : "leaf";
  }
  function getStickyVariant(id) {
    if (getStickyKind(id) === "flower") {
      return "flower";
    }
    const roll = hashToFraction(`variant:${id}`);
    const index = Math.min(Math.floor(roll * LEAF_VARIANTS.length), LEAF_VARIANTS.length - 1);
    return LEAF_VARIANTS[index];
  }
  function getStickyDepth(id) {
    const roll = hashToFraction(`depth:${id}`);
    let cumulative = 0;
    for (const depth of STICKY_DEPTHS) {
      cumulative += DEPTH_WEIGHTS[depth];
      if (roll < cumulative) {
        return depth;
      }
    }
    return STICKY_DEPTHS[STICKY_DEPTHS.length - 1];
  }
  function getStickyLeafWidth(id) {
    const range = DEPTH_WIDTH_RANGES[getStickyDepth(id)];
    const widthRoll = hashToFraction(`width:${id}`);
    return range.min + widthRoll * (range.max - range.min);
  }
  function getStickyRotation(id) {
    const roll = hashToFraction(`rotation:${id}`);
    if (hashToFraction(`rotation-bucket:${id}`) < LEAF_ROTATION_DRAMATIC_PROBABILITY) {
      return LEAF_ROTATION_DRAMATIC_MIN_DEG + roll * (LEAF_ROTATION_DRAMATIC_MAX_DEG - LEAF_ROTATION_DRAMATIC_MIN_DEG);
    }
    return -LEAF_ROTATION_NATURAL_MAX_DEG + roll * (2 * LEAF_ROTATION_NATURAL_MAX_DEG);
  }
  function getStickyJitter(id) {
    const angle = hashToFraction(`jitter-angle:${id}`) * 2 * Math.PI;
    const radius = LEAF_JITTER_MIN_PX + hashToFraction(`jitter-radius:${id}`) * (LEAF_JITTER_MAX_PX - LEAF_JITTER_MIN_PX);
    return { dxPx: radius * Math.cos(angle), dyPx: radius * Math.sin(angle) };
  }
  function getStickyForegroundAccent(id, anchorXPercent) {
    const xFraction = Math.max(0, Math.min(1, anchorXPercent / 100));
    const depthBonus = getStickyDepth(id) === "foreground" ? FOREGROUND_ACCENT_DEPTH_BONUS : 0;
    const probability = xFraction * FOREGROUND_ACCENT_MAX_X_PROBABILITY + depthBonus;
    return hashToFraction(`accent:${id}`) < probability;
  }
  function getStickyLeafBaseColor(id, center) {
    const normalized = normalizeCenterName(center);
    const known = CENTER_COLOR_ALIASES[normalized];
    const base = known ?? LEAF_COLORS[hashStringToInt(`color:${id}`) % LEAF_COLORS.length];
    return applyTone(base, pickToneVariant(id));
  }
  function getStickyOpacity(id) {
    return DEPTH_OPACITY[getStickyDepth(id)];
  }
  function getStickySwayEnabled(id) {
    return hashToFraction(`sway:${id}`) < SWAY_PROBABILITY;
  }
  function getStickySwayPeriod(id) {
    const roll = hashToFraction(`sway-period:${id}`);
    const index = Math.min(Math.floor(roll * SWAY_PERIODS_SEC.length), SWAY_PERIODS_SEC.length - 1);
    return SWAY_PERIODS_SEC[index];
  }
  function getStickySwayAngle(id) {
    const range = SWAY_AMPLITUDE_RANGES[getStickyDepth(id)];
    const roll = hashToFraction(`sway-angle:${id}`);
    return range.min + roll * (range.max - range.min);
  }
  function getStickySwayDelay(id) {
    const period = getStickySwayPeriod(id);
    const phase = hashToFraction(`sway-phase:${id}`);
    return -(phase * period);
  }
  function getStickyColor(id, center = null) {
    if (getStickyKind(id) === "flower") {
      return FLOWER_COLORS[hashStringToInt(`color:${id}`) % FLOWER_COLORS.length];
    }
    return getStickyLeafBaseColor(id, center);
  }
  function resolveStickyVisual(id, anchor, center = null) {
    const anchorXPercent = anchor?.x ?? 50;
    const swayEnabled = getStickySwayEnabled(id);
    return {
      kind: getStickyKind(id),
      variant: getStickyVariant(id),
      depth: getStickyDepth(id),
      width: getStickyLeafWidth(id),
      color: getStickyColor(id, center),
      opacity: getStickyOpacity(id),
      sunlit: getStickyForegroundAccent(id, anchorXPercent),
      rotation: getStickyRotation(id),
      jitter: getStickyJitter(id),
      swayEnabled,
      swayAngle: swayEnabled ? getStickySwayAngle(id) : 0,
      swayPeriod: swayEnabled ? getStickySwayPeriod(id) : 0,
      swayDelay: swayEnabled ? getStickySwayDelay(id) : 0
    };
  }

  // js/messageStore.js
  function jitterToPercent({ dxPx, dyPx }) {
    return { dx: dxPx / NATIVE_FRAME_WIDTH * 100, dy: dyPx / NATIVE_FRAME_HEIGHT * 100 };
  }
  function createMessageStore() {
    const anchors = getAllAnchors();
    const sortedAnchorIndices = sortAnchorsByDistance(anchors, REFERENCE_POINT);
    let messages = [];
    let seenIds = /* @__PURE__ */ new Set();
    const changeListeners = /* @__PURE__ */ new Set();
    const addListeners = /* @__PURE__ */ new Set();
    function getStats() {
      const count = messages.length;
      return { count, stage: getStageForCount(count) };
    }
    function notifyChange() {
      const snapshot = getStats();
      for (const listener of changeListeners) {
        listener(snapshot);
      }
    }
    function addMessage(raw) {
      if (seenIds.has(raw.id)) {
        return null;
      }
      const orderIndex = messages.length;
      const { anchorIndex, occupantIndex } = computeAnchorAssignment(orderIndex, sortedAnchorIndices);
      const anchorPoint = anchors[anchorIndex];
      const offset = computeStickyOffset(occupantIndex);
      const settledAnchor = { x: anchorPoint.x + offset.dx, y: anchorPoint.y + offset.dy };
      const visual = resolveStickyVisual(raw.id, settledAnchor, raw.center);
      const jitter = jitterToPercent(visual.jitter);
      const record = {
        id: raw.id,
        center: raw.center,
        message: raw.message,
        anchor: {
          x: settledAnchor.x + jitter.dx,
          y: settledAnchor.y + jitter.dy
        },
        kind: visual.kind,
        variant: visual.variant,
        color: visual.color,
        opacity: visual.opacity,
        sunlit: visual.sunlit,
        leafWidth: visual.width,
        rotation: visual.rotation,
        swayEnabled: visual.swayEnabled,
        swayAngle: visual.swayAngle,
        swayPeriod: visual.swayPeriod,
        swayDelay: visual.swayDelay
      };
      seenIds.add(raw.id);
      messages.push(record);
      for (const listener of addListeners) {
        listener(record);
      }
      notifyChange();
      return record;
    }
    function reset() {
      messages = [];
      seenIds = /* @__PURE__ */ new Set();
      notifyChange();
    }
    function onChange(listener) {
      changeListeners.add(listener);
      return () => changeListeners.delete(listener);
    }
    function onMessageAdded(listener) {
      addListeners.add(listener);
      return () => addListeners.delete(listener);
    }
    return {
      addMessage,
      reset,
      onChange,
      onMessageAdded,
      getStats,
      getMessages: () => messages.slice()
    };
  }

  // js/csvParser.js
  function parseCsv(text) {
    const rows = [];
    let row = [];
    let field = "";
    let inQuotes = false;
    let i = 0;
    function endField() {
      row.push(field);
      field = "";
    }
    function endRow() {
      endField();
      rows.push(row);
      row = [];
    }
    while (i < text.length) {
      const char = text[i];
      if (inQuotes) {
        if (char === '"') {
          if (text[i + 1] === '"') {
            field += '"';
            i += 2;
            continue;
          }
          inQuotes = false;
          i += 1;
          continue;
        }
        field += char;
        i += 1;
        continue;
      }
      if (char === '"') {
        inQuotes = true;
        i += 1;
        continue;
      }
      if (char === ",") {
        endField();
        i += 1;
        continue;
      }
      if (char === "\r") {
        i += 1;
        continue;
      }
      if (char === "\n") {
        endRow();
        i += 1;
        continue;
      }
      field += char;
      i += 1;
    }
    if (field !== "" || row.length > 0) {
      endRow();
    }
    return rows.filter((r) => !(r.length === 1 && r[0].trim() === ""));
  }
  function csvRowsToRecords(rows) {
    const [, ...dataRows] = rows;
    if (!dataRows) return [];
    const records = [];
    const occurrences = /* @__PURE__ */ new Map();
    for (const cols of dataRows) {
      const message = (cols[1] ?? "").trim();
      if (!message) continue;
      const center = (cols[0] ?? "").trim();
      const key = `${center}|${message}`;
      const occurrence = occurrences.get(key) ?? 0;
      occurrences.set(key, occurrence + 1);
      records.push({ id: `msg:${key}#${occurrence}`, center, message });
    }
    return records;
  }

  // js/csvPoller.js
  var SHEET_ID_PATTERN = /\/spreadsheets\/d\/([a-zA-Z0-9-_]+)/;
  var GID_PATTERN = /[?#&]gid=([0-9]+)/;
  var DEFAULT_INTERVAL_MS = 3e4;
  var DEFAULT_MAX_START_JITTER_MS = 3e3;
  function toCsvUrl(input) {
    if (!input) return null;
    if (/output=csv|gviz\/tq/.test(input)) return withForcedColumnRange(input);
    const match = SHEET_ID_PATTERN.exec(input);
    if (!match) return null;
    const gidMatch = GID_PATTERN.exec(input);
    const gid = gidMatch ? gidMatch[1] : "0";
    return withForcedColumnRange(`https://docs.google.com/spreadsheets/d/${match[1]}/gviz/tq?tqx=out:csv&gid=${gid}`);
  }
  function withForcedColumnRange(url) {
    const withoutRange = url.replace(/[?&]range=[^&]*/, "");
    const separator = withoutRange.includes("?") ? "&" : "?";
    return `${withoutRange}${separator}range=C:D`;
  }
  async function fetchCsvRows(csvUrl, fetchImpl) {
    const res = await fetchImpl(csvUrl);
    if (!res.ok) throw new Error(`bad status: ${res.status}`);
    return parseCsv(await res.text());
  }
  function createCsvPoller({
    getUrl,
    onNewRecords,
    onStatusChange,
    intervalMs = DEFAULT_INTERVAL_MS,
    maxStartJitterMs = DEFAULT_MAX_START_JITTER_MS,
    fetchImpl = fetch,
    // (sheetInput) -> Promise<string[][]>. Defaults to fetch + csv; main.js
    // injects the gviz JSONP loader (js/gvizJsonp.js) so file:// works.
    loadRows = (sheetInput) => fetchCsvRows(toCsvUrl(sheetInput), fetchImpl),
    randomImpl = Math.random
  }) {
    let intervalId = null;
    let jitterTimeoutId = null;
    let generation = 0;
    async function pollOnce() {
      const myGeneration = generation;
      const sheetInput = getUrl();
      if (!toCsvUrl(sheetInput)) {
        onStatusChange?.({ online: false });
        return;
      }
      try {
        const rows = await loadRows(sheetInput);
        if (myGeneration !== generation) return;
        const records = csvRowsToRecords(rows);
        onStatusChange?.({ online: true });
        onNewRecords(records);
      } catch {
        if (myGeneration !== generation) return;
        onStatusChange?.({ online: false });
      }
    }
    function start() {
      if (intervalId !== null || jitterTimeoutId !== null) return;
      const delay = randomImpl() * maxStartJitterMs;
      jitterTimeoutId = setTimeout(() => {
        jitterTimeoutId = null;
        pollOnce();
        intervalId = setInterval(pollOnce, intervalMs);
      }, delay);
    }
    function stop() {
      generation += 1;
      if (jitterTimeoutId !== null) {
        clearTimeout(jitterTimeoutId);
        jitterTimeoutId = null;
      }
      if (intervalId !== null) {
        clearInterval(intervalId);
        intervalId = null;
      }
    }
    return { start, stop };
  }

  // js/gvizJsonp.js
  var SHEET_ID_PATTERN2 = /\/spreadsheets\/d\/([a-zA-Z0-9-_]+)/;
  var GID_PATTERN2 = /[?#&]gid=([0-9]+)/;
  var DEFAULT_TIMEOUT_MS = 15e3;
  var CALLBACK_PREFIX = "__yushisaiTreeGviz_";
  function toGvizJsonpUrl(sheetInput, callbackName) {
    const match = SHEET_ID_PATTERN2.exec(sheetInput ?? "");
    if (!match) return null;
    const gidMatch = GID_PATTERN2.exec(sheetInput);
    const gid = gidMatch ? gidMatch[1] : "0";
    return `https://docs.google.com/spreadsheets/d/${match[1]}/gviz/tq?tqx=out:json;responseHandler:${callbackName}&headers=0&gid=${gid}&range=C:D`;
  }
  function gvizTableToRows(response) {
    if (response?.status !== "ok" || !response.table) {
      throw new Error(`gviz error: ${response?.status ?? "no response"}`);
    }
    return response.table.rows.map(
      (row) => (row.c ?? []).map((cell) => cell?.v == null ? "" : String(cell.v))
    );
  }
  function createJsonpRowsLoader({
    doc = document,
    win = window,
    timeoutMs = DEFAULT_TIMEOUT_MS
  } = {}) {
    let sequence = 0;
    return function loadRows(sheetInput) {
      sequence += 1;
      const callbackName = `${CALLBACK_PREFIX}${Date.now()}_${sequence}`;
      const url = toGvizJsonpUrl(sheetInput, callbackName);
      if (!url) return Promise.reject(new Error("no spreadsheet id in sheet url"));
      return new Promise((resolve, reject) => {
        const script = doc.createElement("script");
        let settled = false;
        function finish(error, rows) {
          if (settled) return;
          settled = true;
          clearTimeout(timeoutId);
          delete win[callbackName];
          script.remove();
          if (error) reject(error);
          else resolve(rows);
        }
        const timeoutId = setTimeout(() => finish(new Error("gviz jsonp timeout")), timeoutMs);
        win[callbackName] = (response) => {
          try {
            finish(null, gvizTableToRows(response));
          } catch (error) {
            finish(error);
          }
        };
        script.onerror = () => finish(new Error("gviz jsonp script failed to load"));
        script.src = url;
        doc.head.appendChild(script);
      });
    };
  }

  // js/idleReplay.js
  var DEFAULT_IDLE_TIMEOUT_MS = 6e4;
  var DEFAULT_REPLAY_INTERVAL_MS = 8e3;
  var DEFAULT_MAX_TOTAL_COUNT = 300;
  function createIdleReplay({
    getMessages,
    getCurrentCount,
    onReplay,
    idleTimeoutMs = DEFAULT_IDLE_TIMEOUT_MS,
    replayIntervalMs = DEFAULT_REPLAY_INTERVAL_MS,
    maxTotalCount = DEFAULT_MAX_TOTAL_COUNT
  }) {
    let idleTimer = null;
    let replayTimer = null;
    let cursor = 0;
    let replaySeq = 0;
    function stopReplaying() {
      if (replayTimer !== null) {
        clearInterval(replayTimer);
        replayTimer = null;
      }
    }
    function replayNext() {
      if (getCurrentCount() >= maxTotalCount) {
        stopReplaying();
        return;
      }
      const messages = getMessages();
      if (messages.length === 0) {
        stopReplaying();
        return;
      }
      const source = messages[cursor % messages.length];
      cursor += 1;
      replaySeq += 1;
      onReplay({
        id: `${source.id}::replay:${replaySeq}`,
        center: source.center,
        message: source.message
      });
    }
    function startReplaying() {
      if (replayTimer !== null) return;
      if (getMessages().length === 0) return;
      if (getCurrentCount() >= maxTotalCount) return;
      replayTimer = setInterval(replayNext, replayIntervalMs);
      replayNext();
    }
    function notifyActivity() {
      stopReplaying();
      if (idleTimer !== null) {
        clearTimeout(idleTimer);
      }
      idleTimer = setTimeout(startReplaying, idleTimeoutMs);
    }
    function stop() {
      if (idleTimer !== null) {
        clearTimeout(idleTimer);
        idleTimer = null;
      }
      stopReplaying();
    }
    return { notifyActivity, stop };
  }

  // js/messageTicker.js
  var DEFAULT_LEAF_TRAVEL_MS = 1050;
  var DEFAULT_CARD_HOLD_MIN_MS = 4500;
  var DEFAULT_CARD_HOLD_MAX_MS = 1e4;
  var DEFAULT_CARD_HOLD_PER_CHAR_MS = 120;
  var DEFAULT_GAP_MS = 1500;
  function defaultCardHoldMs(record) {
    const scaled = record.message.length * DEFAULT_CARD_HOLD_PER_CHAR_MS;
    return Math.max(DEFAULT_CARD_HOLD_MIN_MS, Math.min(DEFAULT_CARD_HOLD_MAX_MS, scaled));
  }
  function createMessageTicker({
    getMessages,
    onPhaseChange,
    leafTravelMs = DEFAULT_LEAF_TRAVEL_MS,
    gapMs = DEFAULT_GAP_MS,
    cardHoldMs = defaultCardHoldMs
  }) {
    let cursor = 0;
    let timer = null;
    let running = false;
    function scheduleNext(delayMs, fn) {
      timer = setTimeout(fn, delayMs);
    }
    function goIdleThenRetry() {
      onPhaseChange("idle", null);
      scheduleNext(gapMs, runCycle);
    }
    function runCycle() {
      const messages = getMessages();
      if (messages.length === 0) {
        goIdleThenRetry();
        return;
      }
      const record = messages[cursor % messages.length];
      cursor += 1;
      onPhaseChange("leaf-in", record);
      scheduleNext(leafTravelMs, () => {
        onPhaseChange("card", record);
        scheduleNext(cardHoldMs(record), () => {
          onPhaseChange("leaf-out", record);
          scheduleNext(leafTravelMs, goIdleThenRetry);
        });
      });
    }
    function start() {
      if (running) return;
      running = true;
      runCycle();
    }
    function stop() {
      running = false;
      if (timer !== null) {
        clearTimeout(timer);
        timer = null;
      }
    }
    function reset() {
      cursor = 0;
      if (timer !== null) {
        clearTimeout(timer);
        timer = null;
      }
      if (running) {
        goIdleThenRetry();
      }
    }
    return { start, stop, reset };
  }

  // js/timeOfDay.js
  var TIME_BUCKETS = [
    { id: "morning", startMinutes: 9 * 60 + 30 },
    { id: "midday", startMinutes: 11 * 60 },
    { id: "afternoon", startMinutes: 14 * 60 },
    { id: "evening", startMinutes: 16 * 60 }
  ];
  var MINUTES_PER_DAY = 24 * 60;
  var TRANSITION_WINDOW_MINUTES = 30;
  function minutesSinceMidnight(date) {
    return date.getHours() * 60 + date.getMinutes() + date.getSeconds() / 60;
  }
  function getTimeBlend(date) {
    const minutes = minutesSinceMidnight(date);
    const firstBucket = TIME_BUCKETS[0];
    const lastBucket = TIME_BUCKETS[TIME_BUCKETS.length - 1];
    if (minutes <= firstBucket.startMinutes) {
      return { from: firstBucket.id, to: firstBucket.id, progress: 0 };
    }
    for (let i = 0; i < TIME_BUCKETS.length; i += 1) {
      const bucket = TIME_BUCKETS[i];
      const nextBucket = TIME_BUCKETS[i + 1];
      const bucketEnd = nextBucket ? nextBucket.startMinutes : MINUTES_PER_DAY;
      if (minutes < bucket.startMinutes || minutes >= bucketEnd) continue;
      const minutesToBoundary = bucketEnd - minutes;
      if (nextBucket && minutesToBoundary <= TRANSITION_WINDOW_MINUTES) {
        const progress = (TRANSITION_WINDOW_MINUTES - minutesToBoundary) / TRANSITION_WINDOW_MINUTES;
        return { from: bucket.id, to: nextBucket.id, progress };
      }
      return { from: bucket.id, to: bucket.id, progress: 0 };
    }
    return { from: lastBucket.id, to: lastBucket.id, progress: 0 };
  }

  // js/main.js
  var SHEET_URL_STORAGE_KEY = "yushisai-message-tree:sheetUrl";
  var DEFAULT_SHEET_URL = "https://docs.google.com/spreadsheets/d/1o_dQU4QDgNj2KL04wXAheoOi30sv9A3XcAA9WJiXFkw/edit?gid=735394104#gid=735394104";
  var CARD_HOLD_MS = 1200;
  var CARD_TRAVEL_MS = 900;
  var RESIZE_DEBOUNCE_MS = 150;
  var STAGE_FLASH_MS = 1400;
  var TIME_OF_DAY_UPDATE_MS = 60 * 1e3;
  var TICKER_DISPLAY_POINT = { x: 50, y: 76 };
  var TICKER_LEAF_HIDDEN_SCALE = 0.45;
  var TICKER_LEAF_VISIBLE_SCALE = 1;
  var SETTLE_FALLBACK_BUFFER_MS = 300;
  function init() {
    const messageStore = createMessageStore();
    const realMessages = [];
    let renderGeneration = 0;
    const app = document.querySelector(".app");
    const treeFrame = document.querySelector(".tree-frame");
    const stickyLayer = document.querySelector(".sticky-layer");
    const cardLayer = document.querySelector(".card-layer");
    const modal = document.querySelector(".modal");
    const modalMessage = document.querySelector(".modal-message");
    const modalClose = document.querySelector(".modal-close");
    const tickerEl = document.querySelector(".message-ticker");
    const tickerTravelLeaf = document.querySelector(".ticker-travel-leaf");
    const tickerCardEl = document.querySelector(".ticker-card");
    function updateFrameScale() {
      const width = treeFrame.getBoundingClientRect().width;
      document.documentElement.style.setProperty("--frame-scale", String(computeFrameScale(width)));
    }
    let resizeTimer = null;
    function scheduleFrameScaleUpdate() {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(updateFrameScale, RESIZE_DEBOUNCE_MS);
    }
    updateFrameScale();
    window.addEventListener("resize", scheduleFrameScaleUpdate);
    function triggerStageFlash() {
      const flash = document.createElement("div");
      flash.className = "stage-flash";
      app.appendChild(flash);
      requestAnimationFrame(() => flash.classList.add("active"));
      setTimeout(() => flash.remove(), STAGE_FLASH_MS);
    }
    let lastAppliedStage = null;
    function applyStage(stageId) {
      app.dataset.stage = String(stageId);
      if (lastAppliedStage !== null && stageId !== lastAppliedStage) {
        triggerStageFlash();
      }
      lastAppliedStage = stageId;
    }
    let debugTimeOverrideMinutes = null;
    const timeLayers = document.querySelectorAll(".time-layer");
    function getTimeOfDayNow() {
      if (debugTimeOverrideMinutes === null) return /* @__PURE__ */ new Date();
      const overridden = /* @__PURE__ */ new Date();
      overridden.setHours(Math.floor(debugTimeOverrideMinutes / 60), debugTimeOverrideMinutes % 60, 0, 0);
      return overridden;
    }
    function applyTimeBlend(blend) {
      for (const layer of timeLayers) {
        const id = layer.dataset.timeLayer;
        let opacity = 0;
        if (id === blend.from) opacity += 1 - blend.progress;
        if (id === blend.to) opacity += blend.progress;
        layer.style.opacity = String(opacity);
      }
    }
    function updateTimeOfDay() {
      applyTimeBlend(getTimeBlend(getTimeOfDayNow()));
    }
    updateTimeOfDay();
    setInterval(updateTimeOfDay, TIME_OF_DAY_UPDATE_MS);
    function openModal(message) {
      modalMessage.textContent = message;
      modal.classList.add("open");
    }
    function closeModal() {
      modal.classList.remove("open");
    }
    modalClose.addEventListener("click", closeModal);
    modal.addEventListener("click", (event) => {
      if (event.target === modal) closeModal();
    });
    function finalizeSticky(card, record) {
      card.style.removeProperty("transition-duration");
      card.textContent = "";
      card.classList.remove("card", "settling");
      card.classList.add("sticky");
      card.dataset.id = record.id;
      card.title = record.message;
      card.addEventListener("click", () => openModal(record.message));
      const visual = document.createElement("span");
      visual.className = "sticky-visual";
      visual.dataset.variant = record.variant;
      if (record.swayEnabled) visual.dataset.sway = "true";
      card.appendChild(visual);
      stickyLayer.appendChild(card);
    }
    function spawnCard(record) {
      const generation = renderGeneration;
      const card = document.createElement("div");
      card.className = "card";
      card.textContent = record.message;
      card.dataset.kind = record.kind;
      card.dataset.sunlit = String(record.sunlit);
      card.style.setProperty("--leaf-color", record.color);
      card.style.setProperty("--leaf-unit-scale", String(record.leafWidth / BASE_STICKY_WIDTH_PX));
      card.style.setProperty("--leaf-rotation", `${record.rotation}deg`);
      card.style.setProperty("--sticky-opacity", String(record.opacity));
      if (record.swayEnabled) {
        card.style.setProperty("--sway-angle", `${record.swayAngle}deg`);
        card.style.setProperty("--sway-period", `${record.swayPeriod}s`);
        card.style.setProperty("--sway-delay", `${record.swayDelay}s`);
      }
      cardLayer.appendChild(card);
      setTimeout(() => {
        if (generation !== renderGeneration || !card.isConnected) return;
        card.classList.add("settling");
        card.style.left = `${record.anchor.x}%`;
        card.style.top = `${record.anchor.y}%`;
        const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        if (!reducedMotion) {
          card.style.transitionDuration = `${CARD_TRAVEL_MS}ms`;
        }
        let finalized = false;
        const finalizeOnce = () => {
          if (finalized) return;
          finalized = true;
          card.removeEventListener("transitionend", onTransitionEnd);
          clearTimeout(fallbackTimer);
          if (generation !== renderGeneration || !card.isConnected) return;
          finalizeSticky(card, record);
        };
        const onTransitionEnd = (event) => {
          if (event.target === card && event.propertyName === "transform") finalizeOnce();
        };
        card.addEventListener("transitionend", onTransitionEnd);
        const fallbackMs = reducedMotion ? SETTLE_FALLBACK_BUFFER_MS : CARD_TRAVEL_MS + SETTLE_FALLBACK_BUFFER_MS;
        const fallbackTimer = setTimeout(finalizeOnce, fallbackMs);
      }, CARD_HOLD_MS);
    }
    messageStore.onMessageAdded((record) => spawnCard(record));
    messageStore.onChange((stats) => applyStage(stats.stage.id));
    applyStage(messageStore.getStats().stage.id);
    const idleReplay = createIdleReplay({
      getMessages: () => realMessages,
      getCurrentCount: () => messageStore.getStats().count,
      onReplay: (record) => messageStore.addMessage(record)
    });
    function setTravelLeafState(point, { visible, animate }) {
      if (!animate) tickerTravelLeaf.style.transition = "none";
      tickerTravelLeaf.style.left = `${point.x}%`;
      tickerTravelLeaf.style.top = `${point.y}%`;
      tickerTravelLeaf.style.opacity = visible ? "1" : "0";
      const scale = visible ? TICKER_LEAF_VISIBLE_SCALE : TICKER_LEAF_HIDDEN_SCALE;
      tickerTravelLeaf.style.transform = `translate(-50%, -50%) scale(${scale})`;
      if (!animate) {
        void tickerTravelLeaf.offsetHeight;
        tickerTravelLeaf.style.transition = "";
      }
    }
    function applyTickerPhase(phase, record) {
      tickerEl.dataset.phase = phase;
      tickerTravelLeaf.dataset.phase = phase;
      if (phase === "idle") {
        tickerTravelLeaf.style.opacity = "0";
        return;
      }
      tickerTravelLeaf.style.setProperty("--leaf-color", record.color);
      tickerCardEl.textContent = record.message;
      if (phase === "leaf-in") {
        setTravelLeafState(record.anchor, { visible: false, animate: false });
        requestAnimationFrame(() => setTravelLeafState(TICKER_DISPLAY_POINT, { visible: true, animate: true }));
      } else if (phase === "leaf-out") {
        setTravelLeafState(record.anchor, { visible: false, animate: true });
      }
    }
    const messageTicker = createMessageTicker({
      getMessages: () => realMessages,
      onPhaseChange: applyTickerPhase
    });
    messageTicker.start();
    function addRealMessage(raw) {
      const record = messageStore.addMessage(raw);
      if (record) {
        realMessages.push({
          id: record.id,
          center: record.center,
          message: record.message,
          anchor: record.anchor,
          color: record.color
        });
        idleReplay.notifyActivity();
      }
      return record;
    }
    function resetAllMessages() {
      renderGeneration += 1;
      messageStore.reset();
      realMessages.length = 0;
      cardLayer.replaceChildren();
      stickyLayer.replaceChildren();
      messageTicker.reset();
    }
    let statusEl = null;
    const isViewer = document.body.dataset.viewer === "1";
    const getSheetUrl = () => isViewer ? DEFAULT_SHEET_URL : localStorage.getItem(SHEET_URL_STORAGE_KEY) ?? DEFAULT_SHEET_URL;
    const poller = createCsvPoller({
      getUrl: getSheetUrl,
      loadRows: createJsonpRowsLoader(),
      onNewRecords: (records) => {
        for (const record of records) {
          addRealMessage(record);
        }
      },
      onStatusChange: (status) => {
        if (statusEl) {
          statusEl.dataset.online = String(status.online);
          statusEl.textContent = status.online ? "\u30AA\u30F3\u30E9\u30A4\u30F3" : "\u30AA\u30D5\u30E9\u30A4\u30F3(\u518D\u8A66\u884C\u4E2D)";
        }
      }
    });
    poller.start();
    if (isViewer) return;
    statusEl = document.querySelector(".sheet-status");
    const urlInput = document.querySelector(".sheet-url-input");
    const saveButton = document.querySelector(".sheet-url-save");
    urlInput.value = getSheetUrl();
    saveButton.addEventListener("click", () => {
      const url = urlInput.value.trim();
      poller.stop();
      if (url) {
        localStorage.setItem(SHEET_URL_STORAGE_KEY, url);
      } else {
        localStorage.removeItem(SHEET_URL_STORAGE_KEY);
        urlInput.value = DEFAULT_SHEET_URL;
      }
      poller.start();
    });
    const devPanel = document.querySelector(".dev-panel");
    if (new URLSearchParams(window.location.search).get("debug") === "1") {
      devPanel.hidden = false;
    }
    const DEV_CENTERS = ["\u798F\u5CA1", "\u718A\u672C", "\u5BAE\u5D0E", "\u5927\u5206", "\u5343\u8449"];
    function setDevMessageCount(targetCount) {
      if (targetCount < messageStore.getStats().count) {
        resetAllMessages();
      }
      for (let i = messageStore.getStats().count; i < targetCount; i += 1) {
        addRealMessage({ id: `dev_${i}`, center: DEV_CENTERS[i % DEV_CENTERS.length], message: `\u958B\u767A\u7528\u30C6\u30B9\u30C8\u30E1\u30C3\u30BB\u30FC\u30B8 ${i + 1}` });
      }
    }
    document.querySelector(".dev-count-apply").addEventListener("click", () => {
      const target = Math.floor(Number(document.querySelector(".dev-count-input").value));
      if (Number.isFinite(target) && target >= 0) {
        setDevMessageCount(target);
      }
    });
    document.querySelector(".dev-count-reset").addEventListener("click", resetAllMessages);
    document.querySelector(".dev-time-apply").addEventListener("click", () => {
      const [hours, minutes] = document.querySelector(".dev-time-input").value.split(":").map(Number);
      if (Number.isFinite(hours) && Number.isFinite(minutes)) {
        debugTimeOverrideMinutes = hours * 60 + minutes;
        updateTimeOfDay();
      }
    });
    document.querySelector(".dev-time-reset").addEventListener("click", () => {
      debugTimeOverrideMinutes = null;
      updateTimeOfDay();
    });
    window.__debug = {
      messageStore,
      poller,
      applyStage,
      spawnCard,
      idleReplay,
      messageTicker,
      realMessages,
      setDevMessageCount,
      updateTimeOfDay,
      setDebugTime: (hours, minutes) => {
        debugTimeOverrideMinutes = hours * 60 + minutes;
        updateTimeOfDay();
      }
    };
  }
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
//# sourceMappingURL=app.js.map

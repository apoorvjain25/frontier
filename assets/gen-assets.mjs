// Deterministic SVG asset generator for the frontier repo (seeded, no Math.random).
import { writeFileSync } from "node:fs";

const OUT = "assets"; // run from the repo root: node assets/gen-assets.mjs
const MONO = "ui-monospace, SFMono-Regular, Menlo, Consolas, 'Liberation Mono', monospace";
const BG = "#0B0E14", INK = "#E9ECF1", LINE = "#2A3242", LINE2 = "#39445A",
      MUTE = "#6B7280", MUTE2 = "#9CA3AF", AMBER = "#F5A623", CHIP = "#11161F";

// Seeded LCG in [-1, 1]
function lcg(seed) { let s = seed >>> 0; return () => { s = (s * 1664525 + 1013904223) >>> 0; return (s / 2147483648) - 1; }; }

// Catmull-Rom closed loop -> cubic bezier path
function smoothClosed(pts) {
  const n = pts.length; let d = `M ${pts[0][0].toFixed(1)} ${pts[0][1].toFixed(1)} `;
  for (let i = 0; i < n; i++) {
    const p0 = pts[(i - 1 + n) % n], p1 = pts[i], p2 = pts[(i + 1) % n], p3 = pts[(i + 2) % n];
    const c1 = [p1[0] + (p2[0] - p0[0]) / 6, p1[1] + (p2[1] - p0[1]) / 6];
    const c2 = [p2[0] - (p3[0] - p1[0]) / 6, p2[1] - (p3[1] - p1[1]) / 6];
    d += `C ${c1[0].toFixed(1)} ${c1[1].toFixed(1)} ${c2[0].toFixed(1)} ${c2[1].toFixed(1)} ${p2[0].toFixed(1)} ${p2[1].toFixed(1)} `;
  }
  return d + "Z";
}

// Open smooth path through points
function smoothOpen(pts) {
  const n = pts.length; let d = `M ${pts[0][0].toFixed(1)} ${pts[0][1].toFixed(1)} `;
  for (let i = 0; i < n - 1; i++) {
    const p0 = pts[Math.max(0, i - 1)], p1 = pts[i], p2 = pts[i + 1], p3 = pts[Math.min(n - 1, i + 2)];
    const c1 = [p1[0] + (p2[0] - p0[0]) / 6, p1[1] + (p2[1] - p0[1]) / 6];
    const c2 = [p2[0] - (p3[0] - p1[0]) / 6, p2[1] - (p3[1] - p1[1]) / 6];
    d += `C ${c1[0].toFixed(1)} ${c1[1].toFixed(1)} ${c2[0].toFixed(1)} ${c2[1].toFixed(1)} ${p2[0].toFixed(1)} ${p2[1].toFixed(1)} `;
  }
  return d;
}

function contourRings({ peakX, peakY, rings, baseR, step, driftX, driftY, ryf, seed, stroke, width, innerStroke }) {
  const rnd = lcg(seed); let out = "";
  for (let t = 0; t < rings; t++) {
    const rx = baseR + t * step, ry = rx * ryf;
    const cx = peakX + t * driftX, cy = peakY + t * driftY;
    const pts = [];
    for (let a = 0; a < 10; a++) {
      const ang = (Math.PI * 2 * a) / 10;
      const wob = 1 + 0.085 * rnd();
      pts.push([cx + Math.cos(ang) * rx * wob, cy + Math.sin(ang) * ry * wob]);
    }
    const col = t < 2 && innerStroke ? innerStroke : stroke;
    out += `<path d="${smoothClosed(pts)}" fill="none" stroke="${col}" stroke-width="${width}"/>\n`;
  }
  return out;
}

// ---------- HERO 1500x500 ----------
const nodes = [[790, 452], [880, 408], [958, 352], [1024, 296], [1078, 244], [1106, 206]];
const peak = [1116, 174];
const ascent = smoothOpen([...nodes, peak]);

const hero = `<svg xmlns="http://www.w3.org/2000/svg" width="1500" height="500" viewBox="0 0 1500 500">
<rect width="1500" height="500" fill="${BG}"/>
${contourRings({ peakX: 1116, peakY: 176, rings: 8, baseR: 26, step: 37, driftX: 5, driftY: 14, ryf: 0.66, seed: 41, stroke: LINE, width: 1.4, innerStroke: LINE2 })}
<path d="${ascent}" fill="none" stroke="${INK}" stroke-width="1.6" stroke-dasharray="1 7" stroke-linecap="round" opacity="0.6"/>
${nodes.map(([x, y], i) => `<circle cx="${x}" cy="${y}" r="5" fill="${BG}" stroke="${INK}" stroke-width="1.4" opacity="0.85"/>${i >= 4 ? `<circle cx="${x}" cy="${y}" r="9.5" fill="none" stroke="${INK}" stroke-width="1.1" opacity="0.5"/>` : ""}`).join("\n")}
<circle cx="${peak[0]}" cy="${peak[1]}" r="11" fill="none" stroke="${AMBER}" stroke-width="1.4" opacity="0.55"/>
<circle cx="${peak[0]}" cy="${peak[1]}" r="5.5" fill="${AMBER}"/>
<line x1="${peak[0]}" y1="${peak[1] - 6}" x2="${peak[0]}" y2="${peak[1] - 40}" stroke="${INK}" stroke-width="1.4"/>
<path d="M ${peak[0]} ${peak[1] - 40} L ${peak[0] + 30} ${peak[1] - 32} L ${peak[0]} ${peak[1] - 24} Z" fill="${AMBER}"/>
<text x="92" y="212" font-family="${MONO}" font-size="76" letter-spacing="6" fill="${INK}">frontier</text>
<text x="94" y="258" font-family="${MONO}" font-size="21" letter-spacing="1" fill="${MUTE}">quality is a procedure, not a property</text>
<rect x="92" y="296" width="404" height="54" rx="10" fill="${CHIP}" stroke="${LINE}" stroke-width="1.4"/>
<text x="116" y="330" font-family="${MONO}" font-size="22" fill="${AMBER}">/frontier &lt;deliverable&gt;</text>
<text x="94" y="404" font-family="${MONO}" font-size="17" letter-spacing="0.5" fill="${MUTE2}">21 crafts &#183; best-of-N candidates &#183; 2-clean-pass convergence &#183; taste gate</text>
</svg>`;

// ---------- SOCIAL 1280x640 ----------
const social = `<svg xmlns="http://www.w3.org/2000/svg" width="1280" height="640" viewBox="0 0 1280 640">
<rect width="1280" height="640" fill="${BG}"/>
${contourRings({ peakX: 1120, peakY: 105, rings: 6, baseR: 24, step: 36, driftX: 4, driftY: 11, ryf: 0.7, seed: 97, stroke: "#1E2634", width: 1.4 })}
<circle cx="1120" cy="105" r="5" fill="${AMBER}"/>
<text x="640" y="322" text-anchor="middle" font-family="${MONO}" font-size="96" letter-spacing="10" fill="${INK}">frontier</text>
<line x1="480" y1="366" x2="800" y2="366" stroke="${LINE}" stroke-width="1.5"/>
<text x="640" y="414" text-anchor="middle" font-family="${MONO}" font-size="23" letter-spacing="1" fill="${MUTE2}">21 craft standards &#183; convergence loop &#183; taste gate</text>
<text x="640" y="474" text-anchor="middle" font-family="${MONO}" font-size="19" fill="${MUTE}">quality is a procedure, not a property</text>
</svg>`;

writeFileSync(`${OUT}/hero.svg`, hero);
writeFileSync(`${OUT}/social-preview.svg`, social);
console.log("written: hero.svg, social-preview.svg");

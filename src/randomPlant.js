// randomPlant.js

const plantSvgV1 = `
<svg width="100" height="150" viewBox="0 0 100 150" xmlns="http://www.w3.org/2000/svg" id="plantSVG_v1">
  <title>Simple Plant - Single Flower</title>
  <desc>Plant in a pot with one white flower.</desc>
  <polygon points="20,80 80,80 70,120 30,120" fill="#D2691E" stroke="#8B4513" stroke-width="1"/>
  <rect x="18" y="75" width="64" height="5" fill="#B85C1A" stroke="#8B4513" stroke-width="1"/>
  <rect x="22" y="80" width="56" height="5" fill="#654321"/>
  <g id="plant1">
    <rect x="48" y="45" width="4" height="35" fill="#228B22"/>
    <ellipse cx="45" cy="55" rx="15" ry="8" fill="#2E8B57" transform="rotate(-20 45 55)"/>
    <ellipse cx="55" cy="50" rx="16" ry="9" fill="#2E8B57" transform="rotate(25 55 50)"/>
    <ellipse cx="50" cy="70" rx="14" ry="7" fill="#2E8B57" transform="rotate(5 50 70)"/>
  </g>
  <g id="flower1" transform="translate(0, -5)">
    <circle cx="50" cy="33" r="6" fill="white" stroke="#ccc" stroke-width="0.5"/>
    <circle cx="42" cy="38" r="6" fill="white" stroke="#ccc" stroke-width="0.5"/>
    <circle cx="58" cy="38" r="6" fill="white" stroke="#ccc" stroke-width="0.5"/>
    <circle cx="44" cy="45" r="6" fill="white" stroke="#ccc" stroke-width="0.5"/>
    <circle cx="56" cy="45" r="6" fill="white" stroke="#ccc" stroke-width="0.5"/>
    <circle cx="50" cy="40" r="4" fill="yellow"/>
  </g>
  <text x="50" y="140" font-family="sans-serif" font-size="12" fill="#333333" text-anchor="middle">
    My Plant 1
  </text>
</svg>
`;

const plantSvgV2 = `
<svg width="100" height="150" viewBox="0 0 100 150" xmlns="http://www.w3.org/2000/svg" id="plantSVG_v2">
  <title>Simple Plant - Two Flowers</title>
  <desc>Plant in a pot with two flowers (yellow/orange and pink/yellow).</desc>
  <polygon points="20,80 80,80 70,120 30,120" fill="#D2691E" stroke="#8B4513" stroke-width="1"/>
  <rect x="18" y="75" width="64" height="5" fill="#B85C1A" stroke="#8B4513" stroke-width="1"/>
  <rect x="22" y="80" width="56" height="5" fill="#654321"/>
  <g id="plant2">
    <rect x="48" y="50" width="4" height="30" fill="#228B22"/>
    <ellipse cx="45" cy="60" rx="15" ry="8" fill="#2E8B57" transform="rotate(-20 45 60)"/>
    <ellipse cx="55" cy="55" rx="16" ry="9" fill="#2E8B57" transform="rotate(25 55 55)"/>
    <ellipse cx="50" cy="75" rx="14" ry="7" fill="#2E8B57" transform="rotate(5 50 75)"/>
  </g>
  <g id="flowers2">
     <g transform="translate(-10, -10)">
        <circle cx="50" cy="38" r="5" fill="yellow" stroke="#eee" stroke-width="0.5"/>
        <circle cx="44" cy="42" r="5" fill="yellow" stroke="#eee" stroke-width="0.5"/>
        <circle cx="56" cy="42" r="5" fill="yellow" stroke="#eee" stroke-width="0.5"/>
        <circle cx="50" cy="45" r="5" fill="yellow" stroke="#eee" stroke-width="0.5"/>
        <circle cx="50" cy="41" r="3" fill="orange"/>
     </g>
     <g transform="translate(10, -15)">
        <circle cx="50" cy="38" r="5" fill="pink" stroke="#fcc" stroke-width="0.5"/>
        <circle cx="44" cy="42" r="5" fill="pink" stroke="#fcc" stroke-width="0.5"/>
        <circle cx="56" cy="42" r="5" fill="pink" stroke="#fcc" stroke-width="0.5"/>
        <circle cx="50" cy="45" r="5" fill="pink" stroke="#fcc" stroke-width="0.5"/>
        <circle cx="50" cy="41" r="3" fill="yellow"/>
     </g>
  </g>
  <text x="50" y="140" font-family="sans-serif" font-size="12" fill="#333333" text-anchor="middle">
    My Plant 2
  </text>
</svg>
`;

const plantSvgV3 = `
<svg width="100" height="150" viewBox="0 0 100 150" xmlns="http://www.w3.org/2000/svg" id="plantSVG_v3">
  <title>Simple Plant - Three Small Flowers</title>
  <desc>Plant in a pot with three small, simple flowers (red, blue, purple).</desc>
  <polygon points="20,80 80,80 70,120 30,120" fill="#D2691E" stroke="#8B4513" stroke-width="1"/>
  <rect x="18" y="75" width="64" height="5" fill="#B85C1A" stroke="#8B4513" stroke-width="1"/>
  <rect x="22" y="80" width="56" height="5" fill="#654321"/>
  <g id="plant3">
    <rect x="48" y="45" width="4" height="35" fill="#228B22"/>
    <ellipse cx="45" cy="55" rx="15" ry="8" fill="#2E8B57" transform="rotate(-20 45 55)"/>
    <ellipse cx="55" cy="50" rx="16" ry="9" fill="#2E8B57" transform="rotate(25 55 50)"/>
    <ellipse cx="50" cy="70" rx="14" ry="7" fill="#2E8B57" transform="rotate(5 50 70)"/>
  </g>
  <g id="flowers3">
     <circle cx="45" cy="38" r="5" fill="red"/> <circle cx="45" cy="38" r="2" fill="#F88"/>
     <circle cx="55" cy="35" r="5" fill="blue"/> <circle cx="55" cy="35" r="2" fill="#AAF"/>
     <circle cx="50" cy="45" r="5" fill="purple"/> <circle cx="50" cy="45" r="2" fill="#DAF"/>
  </g>
  <text x="50" y="140" font-family="sans-serif" font-size="12" fill="#333333" text-anchor="middle">
    My Plant 3
  </text>
</svg>
`;

const plantSvgV4 = `
<svg width="100" height="150" viewBox="0 0 100 150" xmlns="http://www.w3.org/2000/svg" id="plantSVG_v4">
  <title>Simple Plant - One Elliptical Flower</title>
  <desc>Plant in a pot with one flower made of elliptical petals.</desc>
  <polygon points="20,80 80,80 70,120 30,120" fill="#D2691E" stroke="#8B4513" stroke-width="1"/>
  <rect x="18" y="75" width="64" height="5" fill="#B85C1A" stroke="#8B4513" stroke-width="1"/>
  <rect x="22" y="80" width="56" height="5" fill="#654321"/>
  <g id="plant4">
    <rect x="48" y="45" width="4" height="35" fill="#228B22"/>
    <ellipse cx="45" cy="55" rx="15" ry="8" fill="#2E8B57" transform="rotate(-20 45 55)"/>
    <ellipse cx="55" cy="50" rx="16" ry="9" fill="#2E8B57" transform="rotate(25 55 50)"/>
    <ellipse cx="50" cy="70" rx="14" ry="7" fill="#2E8B57" transform="rotate(5 50 70)"/>
  </g>
  <g id="flower4" transform="translate(0, -5)">
    <ellipse cx="50" cy="35" rx="5" ry="10" fill="orange" stroke="#D46A00" stroke-width="0.5"/>
    <ellipse cx="50" cy="35" rx="5" ry="10" fill="orange" stroke="#D46A00" stroke-width="0.5" transform="rotate(72 50 40)"/>
    <ellipse cx="50" cy="35" rx="5" ry="10" fill="orange" stroke="#D46A00" stroke-width="0.5" transform="rotate(144 50 40)"/>
    <ellipse cx="50" cy="35" rx="5" ry="10" fill="orange" stroke="#D46A00" stroke-width="0.5" transform="rotate(216 50 40)"/>
    <ellipse cx="50" cy="35" rx="5" ry="10" fill="orange" stroke="#D46A00" stroke-width="0.5" transform="rotate(288 50 40)"/>
    <circle cx="50" cy="40" r="3" fill="#8B4513"/>
  </g>
  <text x="50" y="140" font-family="sans-serif" font-size="12" fill="#333333" text-anchor="middle">
    My Plant 4
  </text>
</svg>
`;

const plantSvgV5 = `
<svg width="100" height="150" viewBox="0 0 100 150" xmlns="http://www.w3.org/2000/svg" id="plantSVG_v5">
  <title>Simple Plant - Flower Bud Cluster</title>
  <desc>Plant in a pot with a cluster of small flower buds.</desc>
  <polygon points="20,80 80,80 70,120 30,120" fill="#D2691E" stroke="#8B4513" stroke-width="1"/>
  <rect x="18" y="75" width="64" height="5" fill="#B85C1A" stroke="#8B4513" stroke-width="1"/>
  <rect x="22" y="80" width="56" height="5" fill="#654321"/>
  <g id="plant5">
    <rect x="48" y="45" width="4" height="35" fill="#228B22"/>
    <ellipse cx="45" cy="55" rx="15" ry="8" fill="#2E8B57" transform="rotate(-20 45 55)"/>
    <ellipse cx="55" cy="50" rx="16" ry="9" fill="#2E8B57" transform="rotate(25 55 50)"/>
    <ellipse cx="50" cy="70" rx="14" ry="7" fill="#2E8B57" transform="rotate(5 50 70)"/>
  </g>
  <g id="buds5" fill="pink" stroke="darkred" stroke-width="0.5">
    <circle cx="50" cy="35" r="3"/> <circle cx="46" cy="38" r="3"/> <circle cx="54" cy="38" r="3"/>
    <circle cx="48" cy="42" r="3"/> <circle cx="52" cy="42" r="3"/> <circle cx="50" cy="40" r="3"/>
  </g>
  <text x="50" y="140" font-family="sans-serif" font-size="12" fill="#333333" text-anchor="middle">
    My Plant 5
  </text>
</svg>
`;
const plantSvgs = [plantSvgV1, plantSvgV2, plantSvgV3, plantSvgV4, plantSvgV5];

function getRandomPlantSvg() {
  const randomIndex = Math.floor(Math.random() * plantSvgs.length);
  return plantSvgs[randomIndex];
}

// Export the function as the default export of this module
export default getRandomPlantSvg;

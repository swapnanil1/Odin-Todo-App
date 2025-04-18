// randomPlant.js

const potComponent = `
  <polygon points="20,80 80,80 70,120 30,120" fill="POT_FILL_COLOR" stroke="POT_STROKE_COLOR" stroke-width="1"/>
  <rect x="18" y="75" width="64" height="5" fill="POT_RIM_COLOR" stroke="POT_STROKE_COLOR" stroke-width="1"/>
  <rect x="22" y="80" width="56" height="5" fill="POT_SOIL_COLOR"/>
`;

const foliageComponent = `
  <g id="plant_foliage">
    <rect x="48" y="45" width="4" height="35" fill="STEM_COLOR"/>
    <ellipse cx="45" cy="55" rx="15" ry="8" fill="LEAF_COLOR" transform="rotate(-20 45 55)"/>
    <ellipse cx="55" cy="50" rx="16" ry="9" fill="LEAF_COLOR" transform="rotate(25 55 50)"/>
    <ellipse cx="50" cy="70" rx="14" ry="7" fill="LEAF_COLOR" transform="rotate(5 50 70)"/>
  </g>
`;

const flowerComponents = [
  `<g id="flower_type_1" transform="translate(0, -5)">
    <circle cx="50" cy="33" r="6" fill="PETAL_COLOR" stroke="#ccc" stroke-width="0.5"/>
    <circle cx="42" cy="38" r="6" fill="PETAL_COLOR" stroke="#ccc" stroke-width="0.5"/>
    <circle cx="58" cy="38" r="6" fill="PETAL_COLOR" stroke="#ccc" stroke-width="0.5"/>
    <circle cx="44" cy="45" r="6" fill="PETAL_COLOR" stroke="#ccc" stroke-width="0.5"/>
    <circle cx="56" cy="45" r="6" fill="PETAL_COLOR" stroke="#ccc" stroke-width="0.5"/>
    <circle cx="50" cy="40" r="4" fill="CENTER_COLOR"/>
  </g>`,
  `<g id="flower_type_2" transform="translate(0, -10)">
     <circle cx="50" cy="38" r="5" fill="PETAL_COLOR" stroke="#eee" stroke-width="0.5"/>
     <circle cx="44" cy="42" r="5" fill="PETAL_COLOR" stroke="#eee" stroke-width="0.5"/>
     <circle cx="56" cy="42" r="5" fill="PETAL_COLOR" stroke="#eee" stroke-width="0.5"/>
     <circle cx="50" cy="45" r="5" fill="PETAL_COLOR" stroke="#eee" stroke-width="0.5"/>
     <circle cx="50" cy="41" r="3" fill="CENTER_COLOR"/>
  </g>`,
  `<g id="flower_type_3">
     <circle cx="45" cy="38" r="5" fill="PETAL_COLOR"/> <circle cx="45" cy="38" r="2" fill="CENTER_COLOR"/>
     <circle cx="55" cy="35" r="5" fill="PETAL_COLOR"/> <circle cx="55" cy="35" r="2" fill="CENTER_COLOR"/>
     <circle cx="50" cy="45" r="5" fill="PETAL_COLOR"/> <circle cx="50" cy="45" r="2" fill="CENTER_COLOR"/>
  </g>`,
  `<g id="flower_type_4" transform="translate(0, -5)">
    <ellipse cx="50" cy="35" rx="5" ry="10" fill="PETAL_COLOR" stroke="PETAL_STROKE_COLOR" stroke-width="0.5"/>
    <ellipse cx="50" cy="35" rx="5" ry="10" fill="PETAL_COLOR" stroke="PETAL_STROKE_COLOR" stroke-width="0.5" transform="rotate(72 50 40)"/>
    <ellipse cx="50" cy="35" rx="5" ry="10" fill="PETAL_COLOR" stroke="PETAL_STROKE_COLOR" stroke-width="0.5" transform="rotate(144 50 40)"/>
    <ellipse cx="50" cy="35" rx="5" ry="10" fill="PETAL_COLOR" stroke="PETAL_STROKE_COLOR" stroke-width="0.5" transform="rotate(216 50 40)"/>
    <ellipse cx="50" cy="35" rx="5" ry="10" fill="PETAL_COLOR" stroke="PETAL_STROKE_COLOR" stroke-width="0.5" transform="rotate(288 50 40)"/>
    <circle cx="50" cy="40" r="3" fill="CENTER_COLOR"/>
  </g>`,
  `<g id="buds_type_5" fill="PETAL_COLOR" stroke="PETAL_STROKE_COLOR" stroke-width="0.5">
    <circle cx="50" cy="35" r="3"/> <circle cx="46" cy="38" r="3"/> <circle cx="54" cy="38" r="3"/>
    <circle cx="48" cy="42" r="3"/> <circle cx="52" cy="42" r="3"/> <circle cx="50" cy="40" r="3"/>
  </g>`,
];

const textComponentTemplate = `
  <text x="50" y="140" font-family="sans-serif" font-size="12" fill="#333333" text-anchor="middle">
    TEXT_CONTENT
  </text>
`;

const potColors = ["#D2691E", "#A0522D", "#CD853F", "#B8860B", "#8B4513"];
const potRimColors = ["#B85C1A", "#8B4513", "#A0522D", "#DAA520", "#654321"];
const potStrokeColors = ["#8B4513", "#654321", "#A0522D"];
const soilColors = ["#654321", "#5C4033", "#8B4513"];
const leafColors = ["#2E8B57", "#228B22", "#006400", "#556B2F", "#8FBC8F"];
const stemColors = ["#228B22", "#006400", "#556B2F"];
const petalColors = [
  "#FFFFFF",
  "#FFC0CB",
  "#FFD700",
  "#FFA500",
  "#FF4500",
  "#DC143C",
  "#8A2BE2",
  "#4169E1",
  "#ADD8E6",
];
const petalStrokeColors = [
  "#CCCCCC",
  "#FFB6C1",
  "#DAA520",
  "#D2691E",
  "#CC0000",
  "#B22222",
  "#6A0DAD",
  "#1E90FF",
  "#87CEEB",
];
const centerColors = [
  "#FFFF00",
  "#FFD700",
  "#FFA500",
  "#8B4513",
  "#F5F5DC",
  "#EEE8AA",
];

function escapeXml(unsafe) {
  if (typeof unsafe !== "string") {
    return unsafe;
  }
  return unsafe.replace(/[<>&'"]/g, function (c) {
    switch (c) {
      case "<":
        return "<";
      case ">":
        return ">";
      case "&":
        return "&";
      case "'":
        return "'";
      case '"':
        return '"';
      default:
        return c;
    }
  });
}

function getRandomElement(arr) {
  if (!arr || arr.length === 0) return "";
  return arr[Math.floor(Math.random() * arr.length)];
}

function getRandomPlantSvg(name, descript) {
  const potFill = getRandomElement(potColors);
  const potRim = getRandomElement(potRimColors);
  const potStroke = getRandomElement(potStrokeColors);
  const potSoil = getRandomElement(soilColors);
  const leafColor = getRandomElement(leafColors);
  const stemColor = getRandomElement(stemColors);
  const petalColor = getRandomElement(petalColors);
  const petalStroke = getRandomElement(petalStrokeColors);
  const centerColor = getRandomElement(centerColors);

  const selectedFlowerComponent = getRandomElement(flowerComponents);

  let currentPot = potComponent
    .replace(/POT_FILL_COLOR/g, potFill)
    .replace(/POT_STROKE_COLOR/g, potStroke)
    .replace(/POT_RIM_COLOR/g, potRim)
    .replace(/POT_SOIL_COLOR/g, potSoil);

  let currentFoliage = foliageComponent
    .replace(/STEM_COLOR/g, stemColor)
    .replace(/LEAF_COLOR/g, leafColor);

  let currentFlower = selectedFlowerComponent
    .replace(/PETAL_COLOR/g, petalColor)
    .replace(/CENTER_COLOR/g, centerColor)
    .replace(/PETAL_STROKE_COLOR/g, petalStroke);

  const titleContent = escapeXml(name || "Random Plant");
  const descContent = escapeXml(descript || "A randomly selected plant.");
  const textComponent = textComponentTemplate.replace(
    "TEXT_CONTENT",
    titleContent
  );

  const finalSvg = `
<svg width="100" height="150" viewBox="0 0 100 150" xmlns="http://www.w3.org/2000/svg" id="plantSVG_random_${Date.now()}">
  <title>${titleContent}</title>
  <desc>${descContent}</desc>
  ${currentPot}
  ${currentFoliage}
  ${currentFlower}
  ${textComponent}
</svg>
`;

  return finalSvg.trim();
}

export default getRandomPlantSvg;

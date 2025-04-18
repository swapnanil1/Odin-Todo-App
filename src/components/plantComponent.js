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
  ` <circle cx="50" cy="33" r="6" fill="PETAL_COLOR" stroke="#ccc" stroke-width="0.5"/>
    <circle cx="42" cy="38" r="6" fill="PETAL_COLOR" stroke="#ccc" stroke-width="0.5"/>
    <circle cx="58" cy="38" r="6" fill="PETAL_COLOR" stroke="#ccc" stroke-width="0.5"/>
    <circle cx="44" cy="45" r="6" fill="PETAL_COLOR" stroke="#ccc" stroke-width="0.5"/>
    <circle cx="56" cy="45" r="6" fill="PETAL_COLOR" stroke="#ccc" stroke-width="0.5"/>
    <circle cx="50" cy="40" r="4" fill="CENTER_COLOR"/>`,
  ` <circle cx="50" cy="38" r="5" fill="PETAL_COLOR" stroke="#eee" stroke-width="0.5"/>
    <circle cx="44" cy="42" r="5" fill="PETAL_COLOR" stroke="#eee" stroke-width="0.5"/>
    <circle cx="56" cy="42" r="5" fill="PETAL_COLOR" stroke="#eee" stroke-width="0.5"/>
    <circle cx="50" cy="45" r="5" fill="PETAL_COLOR" stroke="#eee" stroke-width="0.5"/>
    <circle cx="50" cy="41" r="3" fill="CENTER_COLOR"/>`,
  ` <circle cx="45" cy="38" r="5" fill="PETAL_COLOR"/> <circle cx="45" cy="38" r="2" fill="CENTER_COLOR"/>
    <circle cx="55" cy="35" r="5" fill="PETAL_COLOR"/> <circle cx="55" cy="35" r="2" fill="CENTER_COLOR"/>
    <circle cx="50" cy="45" r="5" fill="PETAL_COLOR"/> <circle cx="50" cy="45" r="2" fill="CENTER_COLOR"/>`,
  ` <ellipse cx="50" cy="35" rx="5" ry="10" fill="PETAL_COLOR" stroke="PETAL_STROKE_COLOR" stroke-width="0.5"/>
    <ellipse cx="50" cy="35" rx="5" ry="10" fill="PETAL_COLOR" stroke="PETAL_STROKE_COLOR" stroke-width="0.5" transform="rotate(72 50 40)"/>
    <ellipse cx="50" cy="35" rx="5" ry="10" fill="PETAL_COLOR" stroke="PETAL_STROKE_COLOR" stroke-width="0.5" transform="rotate(144 50 40)"/>
    <ellipse cx="50" cy="35" rx="5" ry="10" fill="PETAL_COLOR" stroke="PETAL_STROKE_COLOR" stroke-width="0.5" transform="rotate(216 50 40)"/>
    <ellipse cx="50" cy="35" rx="5" ry="10" fill="PETAL_COLOR" stroke="PETAL_STROKE_COLOR" stroke-width="0.5" transform="rotate(288 50 40)"/>
    <circle cx="50" cy="40" r="3" fill="CENTER_COLOR"/>`,
  ` <circle cx="50" cy="35" r="3" fill="PETAL_COLOR" stroke="PETAL_STROKE_COLOR" stroke-width="0.5"/>
    <circle cx="46" cy="38" r="3" fill="PETAL_COLOR" stroke="PETAL_STROKE_COLOR" stroke-width="0.5"/>
    <circle cx="54" cy="38" r="3" fill="PETAL_COLOR" stroke="PETAL_STROKE_COLOR" stroke-width="0.5"/>
    <circle cx="48" cy="42" r="3" fill="PETAL_COLOR" stroke="PETAL_STROKE_COLOR" stroke-width="0.5"/>
    <circle cx="52" cy="42" r="3" fill="PETAL_COLOR" stroke="PETAL_STROKE_COLOR" stroke-width="0.5"/>
    <circle cx="50" cy="40" r="3" fill="PETAL_COLOR" stroke="PETAL_STROKE_COLOR" stroke-width="0.5"/>`,
];

const potTextTemplate = `
  <text x="50" y="100" font-family="sans-serif" font-size="10" font-weight="bold" fill="#FFFFFF" text-anchor="middle">
    POT_TEXT_CONTENT
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

const redPetalColors = ["#FF4500", "#DC143C"];

const nonRedOverridePalettes = [
  { petal: "#FFFFFF", stroke: "#CCCCCC", center: "#FFFF00" },
  { petal: "#FFD700", stroke: "#DAA520", center: "#FFA500" },
  { petal: "#8A2BE2", stroke: "#6A0DAD", center: "#F5F5DC" },
  { petal: "#4169E1", stroke: "#1E90FF", center: "#FFFF00" },
  { petal: "#ADD8E6", stroke: "#87CEEB", center: "#EEE8AA" },
];

function escapeXml(unsafe) {
  if (typeof unsafe !== "string") {
    return unsafe;
  }
  // *** Corrected escapeXml function ***
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

function isRed(color) {
  return redPetalColors.some(
    (red) => red.toUpperCase() === color.toUpperCase()
  );
}

function getRandomPlantSvg(name, descript) {
  const potFill = getRandomElement(potColors);
  const potRim = getRandomElement(potRimColors);
  const potStroke = getRandomElement(potStrokeColors);
  const potSoil = getRandomElement(soilColors);
  const leafColor = getRandomElement(leafColors);
  const stemColor = getRandomElement(stemColors);

  let currentPetalColor = getRandomElement(petalColors);
  let currentPetalStroke = getRandomElement(petalStrokeColors);
  let currentCenterColor = getRandomElement(centerColors);

  const baseFlowerTemplate = getRandomElement(flowerComponents);
  const numberOfFlowers = Math.random() < 0.4 ? 2 : 3;

  if (numberOfFlowers === 2 && isRed(currentPetalColor)) {
    // Corrected logic: Override if 2 flowers AND it *IS* red
    const overridePalette = getRandomElement(nonRedOverridePalettes);
    currentPetalColor = overridePalette.petal;
    currentPetalStroke = overridePalette.stroke;
    currentCenterColor = overridePalette.center;
  }

  const baseFlowerContent = baseFlowerTemplate
    .replace(/PETAL_COLOR/g, currentPetalColor)
    .replace(/CENTER_COLOR/g, currentCenterColor)
    .replace(/PETAL_STROKE_COLOR/g, currentPetalStroke);

  let multiFlowerComponent = "";
  if (numberOfFlowers === 2) {
    multiFlowerComponent = `
      <g transform="translate(-15, 0)">${baseFlowerContent}</g>
      <g transform="translate(15, -5)">${baseFlowerContent}</g>
    `;
  } else {
    multiFlowerComponent = `
      <g transform="translate(-20, -5)">${baseFlowerContent}</g>
      <g transform="translate(0, 0)">${baseFlowerContent}</g>
      <g transform="translate(20, -5)">${baseFlowerContent}</g>
    `;
  }

  let currentPot = potComponent
    .replace(/POT_FILL_COLOR/g, potFill)
    .replace(/POT_STROKE_COLOR/g, potStroke)
    .replace(/POT_RIM_COLOR/g, potRim)
    .replace(/POT_SOIL_COLOR/g, potSoil);

  let currentFoliage = foliageComponent
    .replace(/STEM_COLOR/g, stemColor)
    .replace(/LEAF_COLOR/g, leafColor);

  const titleContent = escapeXml(name || "Random Plant");
  const descContent = escapeXml(descript || "A randomly selected plant.");

  const potTextComponent = potTextTemplate.replace(
    "POT_TEXT_CONTENT",
    titleContent
  );

  const scaledFlowerGroup = `
    <g transform="translate(50, 40) scale(1.3) translate(-50, -40)">
      ${multiFlowerComponent}
    </g>
  `;

  const finalSvg = `
<svg width="100" height="150" viewBox="0 0 100 150" xmlns="http://www.w3.org/2000/svg" id="plantSVG_random_${Date.now()}">
  <title>${titleContent}</title>
  <desc>${descContent}</desc>
  ${currentPot}
  ${potTextComponent}
  ${currentFoliage}
  ${scaledFlowerGroup}
</svg>
`;

  return finalSvg.trim();
}

export default getRandomPlantSvg;

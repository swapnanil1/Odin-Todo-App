// cloudComponent.js

// --- SVG Shapes (Placeholders for Fills) ---

const cloudSvgV1 = `
<svg width="100" height="60" viewBox="0 0 120 70" xmlns="http://www.w3.org/2000/svg" id="cloudSVG_v1_themed">
  <title>Gentle Puff Cloud</title>
  <desc>A medium-sized, soft cumulus cloud.</desc>
  <path id="cloud1Path" d="M 20 60 C 5 60, 5 40, 30 40 C 30 20, 60 20, 70 35 C 85 25, 110 35, 110 50 C 125 50, 125 60, 100 60 Z" fill="CLOUD_FILL_URL_OR_COLOR" />
  <text x="70" y="48" font-family="Arial, sans-serif" font-weight="bold" font-size="10" fill="TEXT_FILL_COLOR" text-anchor="middle">
    TASK_NAME_PLACEHOLDER
  </text>
</svg>
`;

const cloudSvgV2_new = `
<svg width="100" height="65" viewBox="0 0 130 75" xmlns="http://www.w3.org/2000/svg" id="cloudSVG_v2_themed">
    <title>Floating Cloud</title>
    <desc>A medium cloud with distinct round sections.</desc>
    <path id="cloud2Path" d="M 25 65 C 5 65, 5 45, 30 45 C 20 25, 40 15, 60 25 C 80 15, 105 25, 105 45 C 125 45, 125 65, 100 65 Z" fill="CLOUD_FILL_URL_OR_COLOR"/>
    <text x="65" y="50" font-family="Arial, sans-serif" font-weight="bold" font-size="10" fill="TEXT_FILL_COLOR" text-anchor="middle">
      TASK_NAME_PLACEHOLDER
    </text>
</svg>
`;

const cloudSvgV3 = `
<svg width="100" height="70" viewBox="0 0 130 80" xmlns="http://www.w3.org/2000/svg" id="cloudSVG_v3_themed">
  <title>Soft Cloud Cluster</title>
  <desc>A cluster of small, soft cloud puffs.</desc>
  <defs>
    <path id="puff1_v3" d="M 30 70 C 10 70, 10 50, 35 50 C 35 35, 55 35, 60 45 C 70 40, 85 45, 85 55 C 95 55, 95 70, 75 70 Z"/>
    <path id="puff2_v3" d="M 75 65 C 65 65, 65 50, 80 50 C 80 40, 95 40, 100 45 C 110 42, 120 45, 120 55 C 130 55, 130 65, 110 65 Z"/>
    <path id="puff3_v3" d="M 50 55 C 40 55, 40 40, 55 40 C 55 30, 70 30, 75 35 C 85 32, 95 35, 95 45 C 105 45, 105 55, 85 55 Z"/>
  </defs>
  <use href="#puff1_v3" fill="CLOUD_FILL_URL_OR_COLOR"/>
  <use href="#puff2_v3" fill="CLOUD_FILL_URL_OR_COLOR" transform="translate(-10, -5)"/>
  <use href="#puff3_v3" fill="CLOUD_FILL_URL_OR_COLOR" transform="translate(-20, -15)"/>
  <text x="65" y="53" font-family="Arial, sans-serif" font-weight="bold" font-size="10" fill="TEXT_FILL_COLOR" text-anchor="middle">
    TASK_NAME_PLACEHOLDER
  </text>
</svg>
`;

// New Design for V4 - Layered / Drifting look
const cloudSvgV4_new = `
<svg width="100" height="60" viewBox="0 0 160 75" xmlns="http://www.w3.org/2000/svg" id="cloudSVG_v4_themed">
  <title>Layered Drifting Cloud</title>
  <desc>A horizontally oriented cloud with overlapping layers.</desc>
  <g opacity="0.85">
     <path id="cloud4Layer1" d="M 10 65 C 40 75, 120 75, 150 65 C 140 55, 110 50, 80 55 C 50 50, 20 55, 10 65 Z" fill="CLOUD_FILL_URL_OR_COLOR"/>
     <path id="cloud4Layer2" d="M 25 55 C 50 45, 110 45, 135 55 C 125 60, 100 65, 80 60 C 60 65, 35 60, 25 55 Z" fill="CLOUD_FILL_URL_OR_COLOR" transform="translate(0, -5)"/>
  </g>
  <text x="80" y="58" font-family="Arial, sans-serif" font-weight="bold" font-size="10" fill="TEXT_FILL_COLOR" text-anchor="middle">
    TASK_NAME_PLACEHOLDER
  </text>
</svg>
`;

const cloudSvgV5 = `
<svg width="100" height="80" viewBox="0 0 110 90" xmlns="http://www.w3.org/2000/svg" id="cloudSVG_v5_themed">
  <title>Bright Top Puff</title>
  <desc>A tall, bright cumulus cloud.</desc>
   <path id="cloud5Body" d="M 20 80 C 0 80, 0 60, 25 60 C 15 40, 30 20, 50 20 C 70 20, 85 40, 75 60 C 100 60, 100 80, 80 80 Z" fill="CLOUD_FILL_URL_OR_COLOR"/>
  <text x="55" y="60" font-family="Arial Black, sans-serif" font-weight="bold" font-size="10" fill="TEXT_FILL_COLOR" text-anchor="middle">
    TASK_NAME_PLACEHOLDER
  </text>
</svg>
`;

// Updated array of cloud SVG shape templates
const cloudShapeSvgs = [
  cloudSvgV1,
  cloudSvgV2_new,
  cloudSvgV3,
  cloudSvgV4_new,
  cloudSvgV5,
];

// --- Color Themes ---
const cloudColorThemes = [
  // Theme 1: Classic White/BlueSky
  {
    id: "blueSky",
    fill: `url(#gradBlueSky)`,
    gradientDef: `<linearGradient id="gradBlueSky" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" stop-color="#FFFFFF"/><stop offset="100%" stop-color="#F0F4F8"/></linearGradient>`,
    textColor: "#555555",
  },
  // Theme 2: Sunset Orange/Pink
  {
    id: "sunset",
    fill: `url(#gradSunset)`,
    gradientDef: `<linearGradient id="gradSunset" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#FFDAB9"/><stop offset="50%" stop-color="#FFA07A"/><stop offset="100%" stop-color="#FFC0CB"/></linearGradient>`,
    textColor: "#8B4513", // SaddleBrown
  },
  // Theme 3: Cool Blue (Replaced Stormy)
  {
    id: "coolBlue",
    fill: `url(#gradCoolBlue)`,
    gradientDef: `<linearGradient id="gradCoolBlue" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" stop-color="#E0FFFF"/><stop offset="100%" stop-color="#B0E0E6"/></linearGradient>`,
    textColor: "#191970", // MidnightBlue
  },
  // Theme 4: Pastel Purple/Lavender
  {
    id: "pastel",
    fill: `url(#gradPastel)`,
    gradientDef: `<radialGradient id="gradPastel" cx="50%" cy="50%" r="70%"><stop offset="0%" stop-color="#E6E6FA"/><stop offset="100%" stop-color="#D8BFD8"/></radialGradient>`,
    textColor: "#4B0082", // Indigo
  },
  // Theme 5: Simple Light Yellow Solid (Replaced Light Blue)
  {
    id: "lightYellow",
    fill: "#FFFFE0", // LightYellow solid color
    gradientDef: "", // No gradient needed for solid color
    textColor: "#B8860B", // DarkGoldenrod
  },
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
  if (!arr || arr.length === 0) return null;
  return arr[Math.floor(Math.random() * arr.length)];
}

function getRandomCloudSvg(name, descript) {
  const cloudShapeTemplate = getRandomElement(cloudShapeSvgs);
  const colorTheme = getRandomElement(cloudColorThemes);

  if (!cloudShapeTemplate || !colorTheme) {
    console.error("Could not select cloud template or theme.");
    return "";
  }

  let svgMarkup = cloudShapeTemplate;
  const nameContent = escapeXml(name || "Cloud Task");
  const descContent = escapeXml(descript || "A cloud representing a task.");

  svgMarkup = svgMarkup.replace(
    /(<title>)([\s\S]*?)(<\/title>)/i,
    `$1${nameContent}$3`
  );
  svgMarkup = svgMarkup.replace(
    /(<desc>)([\s\S]*?)(<\/desc>)/i,
    `$1${descContent}$3`
  );

  svgMarkup = svgMarkup.replace(/CLOUD_FILL_URL_OR_COLOR/g, colorTheme.fill);
  svgMarkup = svgMarkup.replace(/TEXT_FILL_COLOR/g, colorTheme.textColor);
  svgMarkup = svgMarkup.replace(/TASK_NAME_PLACEHOLDER/g, nameContent);

  if (colorTheme.gradientDef) {
    if (svgMarkup.includes("<defs>")) {
      svgMarkup = svgMarkup.replace(
        "<defs>",
        `<defs>${colorTheme.gradientDef}`
      );
    } else {
      svgMarkup = svgMarkup.replace(
        /(<svg[^>]*>)/,
        `$1<defs>${colorTheme.gradientDef}</defs>`
      );
    }
  }

  return svgMarkup;
}

export default getRandomCloudSvg;

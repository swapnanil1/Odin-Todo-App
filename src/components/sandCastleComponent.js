var sandcastleSvgV1 =
  '<svg width="110" height="100" viewBox="0 0 110 100" xmlns="http://www.w3.org/2000/svg" id="taskSandcastleIcon">' +
  "<title>{{TASK_NAME}}</title>" +
  "<desc>{{TASK_DESC}}</desc>" +
  "<defs>" +
  '<filter id="sandTexture_{{UNIQUE_ID}}" x="-10%" y="-10%" width="120%" height="120%">' +
  '<feTurbulence type="fractalNoise" baseFrequency="0.08" numOctaves="3" seed="{{SEED}}" result="noise"/>' +
  '<feColorMatrix type="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 0.15 0" result="noiseAlpha"/>' +
  '<feComposite operator="in" in="noiseAlpha" in2="SourceGraphic" result="texturedNoise"/>' +
  '<feBlend in="SourceGraphic" in2="texturedNoise" mode="multiply"/>' +
  '<feGaussianBlur stdDeviation="0.3"/>' +
  "</filter>" +
  '<linearGradient id="gradSand_{{UNIQUE_ID}}" x1="0%" y1="0%" x2="0%" y2="100%">' +
  '<stop offset="0%" stop-color="#F5EAAA"/>' +
  '<stop offset="100%" stop-color="#E0CDA5"/>' +
  "</linearGradient>" +
  '<linearGradient id="gradSandDarker_{{UNIQUE_ID}}" x1="0%" y1="0%" x2="0%" y2="100%">' +
  '<stop offset="0%" stop-color="#E0CDA5"/>' +
  '<stop offset="100%" stop-color="#CDAD8E"/>' +
  "</linearGradient>" +
  '<clipPath id="clipArch_{{UNIQUE_ID}}">' +
  '<path d="M 30 70 A 25 25 0 0 1 80 70 V 90 H 30 Z"/>' +
  "</clipPath>" +
  "</defs>" +
  '<g filter="url(#sandTexture_{{UNIQUE_ID}})">' +
  '<rect x="5" y="70" width="100" height="25" fill="url(#gradSand_{{UNIQUE_ID}})"/>' +
  '<rect x="15" y="40" width="30" height="35" fill="url(#gradSand_{{UNIQUE_ID}})"/>' +
  '<rect x="65" y="40" width="30" height="35" fill="url(#gradSand_{{UNIQUE_ID}})"/>' +
  '<rect x="40" y="55" width="30" height="20" fill="url(#gradSand_{{UNIQUE_ID}})"/>' +
  '<path d="M 30 70 A 25 25 0 0 1 80 70 V 90 H 30 Z" fill="url(#gradSandDarker_{{UNIQUE_ID}})"/>' +
  '<rect x="30" y="70" width="50" height="20" fill="#B8860B" opacity="0.3" clip-path="url(#clipArch_{{UNIQUE_ID}})"/>' +
  '<polygon points="15,40 20,35 25,40 30,35 35,40 40,35 45,40" fill="#D2B48C"/>' +
  '<polygon points="65,40 70,35 75,40 80,35 85,40 90,35 95,40" fill="#D2B48C"/>' +
  '<line x1="20" y1="35" x2="20" y2="25" stroke="#A0522D" stroke-width="1.5"/>' +
  '<polygon points="20,25 30,28 20,31" fill="#E34234"/>' +
  "</g>" +
  '<text x="55" y="85" font-family="Arial, sans-serif" font-weight="bold" font-size="10" fill="#8B4513" text-anchor="middle" dominant-baseline="middle">{{TASK_NAME_SHORT}}</text>' +
  "</svg>";

var sandcastleSvgV2 =
  '<svg width="100" height="110" viewBox="0 0 100 110" xmlns="http://www.w3.org/2000/svg" id="taskSandcastleIcon">' +
  "<title>{{TASK_NAME}}</title>" +
  "<desc>{{TASK_DESC}}</desc>" +
  "<defs>" +
  '<pattern id="sandPattern_{{UNIQUE_ID}}" patternUnits="userSpaceOnUse" width="6" height="6">' +
  '<circle cx="1" cy="1" r="0.6" fill="#D2B48C" opacity="0.4"/>' +
  '<circle cx="4" cy="4" r="0.6" fill="#DEB887" opacity="0.4"/>' +
  "</pattern>" +
  '<linearGradient id="gradSandWall_{{UNIQUE_ID}}" x1="0%" y1="0%" x2="100%" y2="0%">' +
  '<stop offset="0%" stop-color="#F5EAAA"/>' +
  '<stop offset="50%" stop-color="#EEDDAB"/>' +
  '<stop offset="100%" stop-color="#F5EAAA"/>' +
  "</linearGradient>" +
  "</defs>" +
  '<rect x="0" y="0" width="100" height="110" fill="url(#sandPattern_{{UNIQUE_ID}})"/>' +
  '<g stroke="#A0522D" stroke-width="1">' +
  '<path d="M 10 95 Q 50 75 90 95 V 105 H 10 Z" fill="url(#gradSandWall_{{UNIQUE_ID}})"/>' +
  '<path d="M 20 70 L 20 40 L 40 40 L 40 70 Z" fill="url(#gradSandWall_{{UNIQUE_ID}})"/>' +
  '<path d="M 60 70 L 60 40 L 80 40 L 80 70 Z" fill="url(#gradSandWall_{{UNIQUE_ID}})"/>' +
  '<rect x="35" y="55" width="30" height="15" fill="url(#gradSandWall_{{UNIQUE_ID}})"/>' +
  '<polygon points="20,40 23,35 26,40 29,35 32,40 35,35 38,40 40,35" fill="#D2B48C"/>' +
  '<polygon points="60,40 63,35 66,40 69,35 72,40 75,35 78,40 80,35" fill="#D2B48C"/>' +
  '<circle cx="15" cy="90" r="4" fill="#FFDEAD"/>' +
  '<circle cx="85" cy="90" r="4" fill="#FFDEAD"/>' +
  '<g transform="translate(70 25) scale(0.7)">' +
  '<polygon points="0,15 15,15 12,0 3,0" fill="#1E90FF"/>' +
  '<path d="M 1 0 C 5 -8, 10 -8, 14 0" stroke="#696969" stroke-width="1" fill="none"/>' +
  "</g>" +
  "</g>" +
  '<text x="50" y="85" font-family="Verdana, sans-serif" font-weight="bold" font-size="9" fill="#A0522D" text-anchor="middle" dominant-baseline="middle">{{TASK_NAME_SHORT}}</text>' +
  "</svg>";

var sandcastleSvgs = [sandcastleSvgV1, sandcastleSvgV2];

function generateUniqueId() {
  return Date.now().toString(36) + Math.random().toString(36).substring(2, 5);
}

function escapeXml(unsafe) {
  if (typeof unsafe !== "string") {
    return unsafe;
  }
  return unsafe.replace(/[<>&'"]/g, function (c) {
    switch (c) {
      case "<":
        return "&lt;";
      case ">":
        return "&gt;";
      case "&":
        return "&amp;";
      case "'":
        return "&apos;";
      case '"':
        return "&quot;";
      default:
        return c;
    }
  });
}

function getRandomElement(arr) {
  if (!arr || arr.length === 0) return null;
  return arr[Math.floor(Math.random() * arr.length)];
}

function getRandomSandcastleSvg(name, descript) {
  var svgTemplate = getRandomElement(sandcastleSvgs);
  if (!svgTemplate) {
    console.error("Could not select sandcastle template.");
    return "";
  }

  var uniqueId = generateUniqueId();
  var seed = Math.floor(Math.random() * 100);
  var taskName = escapeXml(name || "Sand Task");
  var taskNameShort =
    taskName.length > 10 ? taskName.substring(0, 9) + "…" : taskName;
  var taskDesc = escapeXml(descript || "A sandcastle representing a task.");

  var svgMarkup = svgTemplate;

  svgMarkup = svgMarkup
    .replace(/\{\{UNIQUE_ID\}\}/g, uniqueId)
    .replace(/\{\{SEED\}\}/g, seed)
    .replace(/\{\{TASK_NAME\}\}/g, taskName)
    .replace(/\{\{TASK_NAME_SHORT\}\}/g, taskNameShort)
    .replace(/\{\{TASK_DESC\}\}/g, taskDesc);

  return svgMarkup.trim();
}

module.exports = getRandomSandcastleSvg;

var cloudSvgV1 =
  '<svg width="120" height="75" viewBox="0 0 120 75" xmlns="http://www.w3.org/2000/svg" id="taskCloudIcon">' +
  "<title>{{TASK_NAME}}</title>" +
  "<desc>{{TASK_DESC}}</desc>" +
  "<defs>" +
  '<linearGradient id="gradCloud_{{UNIQUE_ID}}" x1="0%" y1="0%" x2="0%" y2="100%">' +
  '<stop offset="0%" style="stop-color:{{GRADIENT_START}};stop-opacity:1" />' +
  '<stop offset="100%" style="stop-color:{{GRADIENT_END}};stop-opacity:0.9" />' +
  "</linearGradient>" +
  '<filter id="softBlur_{{UNIQUE_ID}}" x="-20%" y="-20%" width="140%" height="140%">' +
  '<feGaussianBlur stdDeviation="1"/>' +
  "</filter>" +
  "</defs>" +
  '<g filter="url(#softBlur_{{UNIQUE_ID}})">' +
  '<path d="M 30 65 C 10 65, 5 45, 30 40 C 25 20, 50 15, 65 30 C 80 18, 105 25, 110 45 C 130 45, 125 65, 95 65 Z" fill="url(#gradCloud_{{UNIQUE_ID}})" />' +
  "</g>" +
  '<text x="60" y="53" font-family="Arial, sans-serif" font-weight="bold" font-size="10" fill="{{TEXT_COLOR}}" text-anchor="middle" dominant-baseline="middle">{{TASK_NAME_SHORT}}</text>' +
  "</svg>";

var cloudSvgV2 =
  '<svg width="130" height="70" viewBox="0 0 130 70" xmlns="http://www.w3.org/2000/svg" id="taskCloudIcon">' +
  "<title>{{TASK_NAME}}</title>" +
  "<desc>{{TASK_DESC}}</desc>" +
  "<defs>" +
  '<radialGradient id="gradCloud_{{UNIQUE_ID}}" cx="50%" cy="40%" r="70%" fx="50%" fy="30%">' +
  '<stop offset="0%" style="stop-color:{{GRADIENT_START}};stop-opacity:1" />' +
  '<stop offset="100%" style="stop-color:{{GRADIENT_END}};stop-opacity:0.85" />' +
  "</radialGradient>" +
  "</defs>" +
  '<path d="M 25 60 C 5 60, 5 40, 35 40 C 30 20, 55 10, 70 25 C 90 15, 115 25, 115 45 C 135 45, 130 60, 105 60 Z" fill="url(#gradCloud_{{UNIQUE_ID}})" />' +
  '<text x="65" y="48" font-family="Arial, sans-serif" font-weight="bold" font-size="10" fill="{{TEXT_COLOR}}" text-anchor="middle" dominant-baseline="middle">{{TASK_NAME_SHORT}}</text>' +
  "</svg>";

var cloudSvgV3 =
  '<svg width="140" height="80" viewBox="0 0 140 80" xmlns="http://www.w3.org/2000/svg" id="taskCloudIcon">' +
  "<title>{{TASK_NAME}}</title>" +
  "<desc>{{TASK_DESC}}</desc>" +
  "<defs>" +
  '<linearGradient id="gradCloud_{{UNIQUE_ID}}" x1="0%" y1="0%" x2="0%" y2="100%">' +
  '<stop offset="0%" style="stop-color:{{GRADIENT_START}};stop-opacity:0.9" />' +
  '<stop offset="100%" style="stop-color:{{GRADIENT_END}};stop-opacity:1" />' +
  "</linearGradient>" +
  '<filter id="cloudLayerFilter_{{UNIQUE_ID}}">' +
  '<feGaussianBlur in="SourceAlpha" stdDeviation="2" result="blur"/>' +
  '<feOffset dy="2" result="offsetBlur"/>' +
  "<feMerge>" +
  '<feMergeNode in="offsetBlur"/>' +
  '<feMergeNode in="SourceGraphic"/>' +
  "</feMerge>" +
  "</filter>" +
  "</defs>" +
  '<g filter="url(#cloudLayerFilter_{{UNIQUE_ID}})">' +
  '<path d="M 20 70 C 0 70, 0 50, 30 45 C 20 25, 45 15, 65 30 C 85 20, 110 30, 115 50 C 135 50, 140 70, 110 70 Z" fill="url(#gradCloud_{{UNIQUE_ID}})" opacity="0.85"/>' +
  '<path d="M 40 65 C 25 65, 20 50, 40 45 C 35 30, 55 25, 70 35 C 85 28, 105 35, 105 50 C 120 50, 125 65, 100 65 Z" fill="url(#gradCloud_{{UNIQUE_ID}})" opacity="0.95" transform="translate(5, -5)"/>' +
  "</g>" +
  '<text x="70" y="55" font-family="Arial, sans-serif" font-weight="bold" font-size="10" fill="{{TEXT_COLOR}}" text-anchor="middle" dominant-baseline="middle">{{TASK_NAME_SHORT}}</text>' +
  "</svg>";

var cloudShapeSvgs = [cloudSvgV1, cloudSvgV2, cloudSvgV3];

var cloudColorThemes = [
  { id: "skyBlue", start: "#FFFFFF", end: "#E0F2F7", textColor: "#005683" },
  { id: "softPink", start: "#FFF0F5", end: "#FFDAE0", textColor: "#8B0047" },
  { id: "goldenHour", start: "#FFF8DC", end: "#FFECB3", textColor: "#B8860B" },
  { id: "stormy", start: "#D3D3D3", end: "#B0C4DE", textColor: "#2F4F4F" },
  { id: "whitePuff", start: "#FFFFFF", end: "#F5F5F5", textColor: "#696969" },
];

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

function getRandomCloudSvg(name, descript) {
  var cloudShapeTemplate = getRandomElement(cloudShapeSvgs);
  var colorTheme = getRandomElement(cloudColorThemes);

  if (!cloudShapeTemplate || !colorTheme) {
    console.error("Could not select cloud template or theme.");
    return "";
  }

  var uniqueId = generateUniqueId();
  var taskName = escapeXml(name || "Cloud Task");
  var taskNameShort =
    taskName.length > 12 ? taskName.substring(0, 10) + "..." : taskName;
  var taskDesc = escapeXml(descript || "A cloud representing a task.");

  var svgMarkup = cloudShapeTemplate;

  svgMarkup = svgMarkup
    .replace(/\{\{UNIQUE_ID\}\}/g, uniqueId)
    .replace(/\{\{TASK_NAME\}\}/g, taskName)
    .replace(/\{\{TASK_NAME_SHORT\}\}/g, taskNameShort)
    .replace(/\{\{TASK_DESC\}\}/g, taskDesc)
    .replace(/\{\{GRADIENT_START\}\}/g, colorTheme.start)
    .replace(/\{\{GRADIENT_END\}\}/g, colorTheme.end)
    .replace(/\{\{TEXT_COLOR\}\}/g, colorTheme.textColor);

  return svgMarkup.trim();
}

module.exports = getRandomCloudSvg;

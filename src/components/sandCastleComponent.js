// sandcastleComponent.js

const sandcastleSvgV1 = `
<svg width="100" height="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <title>Simple Castle</title>
  <desc>A simple sandcastle with one central tower and a flag.</desc>
  <defs>
    <filter id="sandTexture1" x="0" y="0" width="100%" height="100%">
      <feTurbulence type="fractalNoise" baseFrequency="0.5" numOctaves="2" result="turbulence"/>
      <feColorMatrix type="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 0.1 0" result="textureMask"/>
       <feComposite operator="in" in="textureMask" in2="SourceGraphic" result="textured"/>
       <feBlend in="SourceGraphic" in2="textured" mode="multiply"/>
    </filter>
  </defs>
  <g filter="url(#sandTexture1)">
    <rect x="15" y="60" width="70" height="30" fill="#F4A460"/>
    <rect x="35" y="30" width="30" height="35" fill="#F4A460"/>
    <polygon points="35,30 40,25 45,30" fill="#DEB887"/>
    <polygon points="47,30 52,25 57,30" fill="#DEB887"/>
    <polygon points="60,30 65,25 70,30" fill="#DEB887"/>
    <line x1="65" y1="25" x2="65" y2="15" stroke="#8B4513" stroke-width="1"/>
    <polygon points="65,15 75,18 65,21" fill="#DC143C"/>
  </g>
  <text x="50" y="80" font-family="Verdana, sans-serif" font-size="9" fill="#8B4513" text-anchor="middle">
    TASK_NAME_PLACEHOLDER
  </text>
</svg>
`;

const sandcastleSvgV2 = `
<svg width="100" height="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <title>Two Tower Castle</title>
  <desc>A sandcastle with two towers connected by a wall.</desc>
   <defs>
     <pattern id="sandDots2" patternUnits="userSpaceOnUse" width="5" height="5">
       <circle cx="1" cy="1" r="0.5" fill="#DEB887" opacity="0.5"/>
       <circle cx="3" cy="4" r="0.5" fill="#D2B48C" opacity="0.5"/>
     </pattern>
   </defs>
   <g fill="url(#sandDots2)">
    <rect x="10" y="50" width="80" height="40" fill="#F5DEB3"/>
    <rect x="15" y="25" width="25" height="35" fill="#F5DEB3"/>
    <rect x="60" y="25" width="25" height="35" fill="#F5DEB3"/>
    <polygon points="15,25 19,20 23,25" fill="#E0CFA8"/>
    <polygon points="27,25 31,20 35,25" fill="#E0CFA8"/>
    <polygon points="60,25 64,20 68,25" fill="#E0CFA8"/>
    <polygon points="72,25 76,20 80,25" fill="#E0CFA8"/>
   </g>
  <text x="50" y="75" font-family="Arial, sans-serif" font-weight="bold" font-size="10" fill="#A0522D" text-anchor="middle">
    TASK_NAME_PLACEHOLDER
  </text>
</svg>
`;

const sandcastleSvgV3 = `
<svg width="100" height="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <title>Mound Castle</title>
  <desc>A sandcastle built on a rounded mound with a pail.</desc>
  <path d="M 10 90 Q 50 50, 90 90 Z" fill="#F4A460"/>
  <circle cx="50" cy="45" r="15" fill="#FFDEAD"/>
  <circle cx="50" cy="45" r="12" fill="#F4A460"/>
  <rect x="45" y="25" width="10" height="10" fill="#FFDEAD"/>
  <polygon points="45,25 47,20 49,25" fill="#DEB887"/>
  <polygon points="51,25 53,20 55,25" fill="#DEB887"/>
  <g transform="translate(75 75) scale(0.8)">
    <polygon points="0,15 15,15 12,0 3,0" fill="#4682B4"/>
    <path d="M 1 0 C 5 -8, 10 -8, 14 0" stroke="#696969" stroke-width="1" fill="none"/>
  </g>
  <text x="50" y="50" font-family="cursive" font-size="10" fill="#8B4513" text-anchor="middle">
    TASK_NAME_PLACEHOLDER
  </text>
</svg>
`;

const sandcastleSvgV4 = `
<svg width="100" height="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <title>Castle with Arch</title>
  <desc>A sandcastle featuring a central archway.</desc>
  <rect x="5" y="70" width="90" height="20" fill="#DEB887"/>
  <rect x="15" y="40" width="20" height="35" fill="#DEB887"/>
  <rect x="65" y="40" width="20" height="35" fill="#DEB887"/>
  <path d="M 35 75 A 15 15 0 0 1 65 75 L 65 40 L 35 40 Z" fill="#F4A460"/>
  <path d="M 40 70 A 10 10 0 0 1 60 70 L 60 55 L 40 55 Z" fill="#A0522D"/>
  <polygon points="15,40 18,35 21,40" fill="#D2B48C"/>
  <polygon points="25,40 28,35 31,40" fill="#D2B48C"/>
  <polygon points="65,40 68,35 71,40" fill="#D2B48C"/>
  <polygon points="75,40 78,35 81,40" fill="#D2B48C"/>
   <text x="50" y="60" font-family="Georgia, serif" font-size="9" fill="#FFF8DC" text-anchor="middle">
    TASK_NAME_PLACEHOLDER
  </text>
</svg>
`;

const sandcastleSvgV5 = `
<svg width="100" height="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <title>Tiered Castle</title>
  <desc>A sandcastle with multiple tiers and simple details.</desc>
  <rect x="10" y="75" width="80" height="15" fill="#F4A460"/>
  <rect x="20" y="55" width="60" height="20" fill="#FFDEAD"/>
  <rect x="35" y="30" width="30" height="25" fill="#F4A460"/>
  <circle cx="30" cy="50" r="5" fill="#DEB887"/>
  <circle cx="70" cy="50" r="5" fill="#DEB887"/>
  <polygon points="35,30 40,25 45,30" fill="#DEB887"/>
  <polygon points="55,30 60,25 65,30" fill="#DEB887"/>
  <g>
      <circle cx="25" cy="82" r="1.5" fill="#D2B48C" opacity="0.6"/>
      <circle cx="50" cy="85" r="1" fill="#D2B48C" opacity="0.6"/>
      <circle cx="75" cy="80" r="1.5" fill="#D2B48C" opacity="0.6"/>
      <circle cx="40" cy="65" r="1" fill="#D2B48C" opacity="0.6"/>
      <circle cx="60" cy="68" r="1" fill="#D2B48C" opacity="0.6"/>
  </g>
  <text x="50" y="48" font-family="Impact, sans-serif" font-size="10" fill="#A0522D" text-anchor="middle">
    TASK_NAME_PLACEHOLDER
  </text>
</svg>
`;

const sandcastleSvgs = [
  sandcastleSvgV1,
  sandcastleSvgV2,
  sandcastleSvgV3,
  sandcastleSvgV4,
  sandcastleSvgV5,
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

function getRandomSandcastleSvg(name, descript) {
  const randomIndex = Math.floor(Math.random() * sandcastleSvgs.length);
  let svgMarkup = sandcastleSvgs[randomIndex];

  const nameContent = escapeXml(name || "Sand Task");
  const descContent = escapeXml(
    descript || "A sandcastle representing a task."
  );

  // Replace title and desc first
  svgMarkup = svgMarkup.replace(
    /(<title>)([\s\S]*?)(<\/title>)/i,
    `$1${nameContent}$3`
  );
  svgMarkup = svgMarkup.replace(
    /(<desc>)([\s\S]*?)(<\/desc>)/i,
    `$1${descContent}$3`
  );

  // Replace the placeholder text
  svgMarkup = svgMarkup.replace(/TASK_NAME_PLACEHOLDER/g, nameContent);

  // --- Add the consistent ID ---
  svgMarkup = svgMarkup.replace(
    /(<svg[^>]*)/,
    '$1 id="taskSandcastleIcon"' // Add the fixed id
  );

  return svgMarkup;
}

export default getRandomSandcastleSvg;

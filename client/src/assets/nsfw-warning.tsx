import React from 'react';

/**
 * NSFW warning image component as an SVG for better performance and styling
 */
export const NSFWWarningImage = () => {
  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 600 600"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="rounded-md"
    >
      <rect width="600" height="600" fill="#EEEDEA" />
      <rect x="40" y="40" width="520" height="520" rx="30" stroke="#1E5188" strokeWidth="10" fill="none" />
      <text
        x="300"
        y="220"
        fontSize="80"
        fontWeight="bold"
        fill="#1E5188"
        textAnchor="middle"
        fontFamily="sans-serif"
      >
        NSFW
      </text>
      <text
        x="300"
        y="300"
        fontSize="80"
        fontWeight="bold"
        fill="#1E5188"
        textAnchor="middle"
        fontFamily="sans-serif"
      >
        website
      </text>
      <text
        x="300"
        y="400"
        fontSize="50"
        fontWeight="bold"
        fill="#1E5188"
        textAnchor="middle"
        fontFamily="sans-serif"
      >
        See Report
      </text>
      <text
        x="300"
        y="450"
        fontSize="50"
        fontWeight="bold"
        fill="#1E5188"
        textAnchor="middle"
        fontFamily="sans-serif"
      >
        for Details
      </text>
    </svg>
  );
};

/**
 * Returns the NSFW warning as a data URL
 */
export function getNSFWWarningAsDataURL(): string {
  // Return a simplified SVG data URL with the same styling
  return `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="600" height="600" viewBox="0 0 600 600"><rect width="600" height="600" fill="%23EEEDEA"/><rect x="40" y="40" width="520" height="520" rx="30" stroke="%231E5188" stroke-width="10" fill="none"/><text x="300" y="220" font-size="80" font-weight="bold" fill="%231E5188" text-anchor="middle" font-family="sans-serif">NSFW</text><text x="300" y="300" font-size="80" font-weight="bold" fill="%231E5188" text-anchor="middle" font-family="sans-serif">website</text><text x="300" y="400" font-size="50" font-weight="bold" fill="%231E5188" text-anchor="middle" font-family="sans-serif">See Report</text><text x="300" y="450" font-size="50" font-weight="bold" fill="%231E5188" text-anchor="middle" font-family="sans-serif">for Details</text></svg>`;
}
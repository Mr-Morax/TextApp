import React from 'react';

export default function HighlightedParagraph({ paragraph, searchTerm }) {
  // If there's no search term, just return the plain paragraph
  if (!searchTerm) return <p>{paragraph}</p>;

  // Use a regex to split the paragraph while keeping the search term ('i' makes it case-insensitive)
  const regex = new RegExp(`(${searchTerm})`, 'gi');
  const parts = paragraph.split(regex);

  return (
    <p>
      {parts.map((part, index) => 
        // If the part matches the search term, wrap it in a highlight span
        regex.test(part) ? (
          <span key={index} style={{ backgroundColor: 'yellow', fontWeight: 'bold' }}>
            {part}
          </span>
        ) : (
          part
        )
      )}
    </p>
  );
}
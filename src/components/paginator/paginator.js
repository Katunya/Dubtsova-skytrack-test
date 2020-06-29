import React from 'react';

export const Paginator = (({ arrayImage, displayImage, paginate }) => {
  const pages = Array.from({ length: Math.ceil(arrayImage / displayImage) },
    (_, i) => <li onClick={() => paginate(i + 1)} key={i}> {i + 1}</li>)
  return (
    <ul className="pagination">
      {pages}
    </ul>
  )
});

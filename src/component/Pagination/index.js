import React from 'react';
import PaginationComponent from "react-reactstrap-pagination";

const Pagination = ({totalItems, pageSize, onSelect}) => {
  return (
    <PaginationComponent 
        totalItems={totalItems} 
        pageSize={pageSize} 
        onSelect={onSelect} 
        maxPaginationNumbers={3}
        firstPageText= {"<<"}
        previousPageText= {"<"}
        nextPageText= {">"}
        lastPageText= {">>"}
    />
  );
}

export default Pagination;
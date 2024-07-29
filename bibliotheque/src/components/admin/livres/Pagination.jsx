import React from 'react'
import "./livre.css"


const Pagination = ({handlePrevPage, handleNextPage, handlePageChange, currentPage, totalPages}) => {
  return (
    <div className='pagination'>
      <button onClick={() => handlePrevPage()} disabled={currentPage===1}>prev</button>
      {
        Array.from({length: totalPages}, (_, index) => (
          <button key={index+1} 
          onClick={() => handlePageChange(index+1)} 
          disabled={currentPage === index+1}
          className={currentPage === index+1? 'page-link active' : ''}>
            {index+1}
          </button>
        ))
      }
      <button onClick={() => handleNextPage} disabled={currentPage === totalPages}>next</button>
    </div>
  )
}

export default Pagination

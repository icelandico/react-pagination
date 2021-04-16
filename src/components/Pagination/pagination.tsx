import React, { useState} from 'react';
import './styles.css'

interface IProps {
  allPagesNumber: number
  itemsPerPage: number
  itemsNumber: number
}

const Pagination: React.FC<IProps> = (props) => {
  const [currentPage, setCurrentPage] = useState<number>(1);

  const onFirstPage = (): void => {
    setCurrentPage(1);
  }

  const onLastPage = (): void => {
    setCurrentPage(props.allPagesNumber);
  }

  const onNextPage = (): void => {
    setCurrentPage(currentPage + 1);
  }

  const onPreviousPage = (): void => {
    setCurrentPage(currentPage - 1);
  }

  const onSetPage = (page: string): void => {
    const newPage = parseInt(page, 10);
    setCurrentPage(newPage);
  }

  return (
    <div className="pagination__container">
      <div
        className={`pagination__button pagination__page-first ${currentPage === 1 ? 'pagination__button--disabled' : ''}`}
        onClick={() => onFirstPage()}
      >
        First
      </div>
      <div
        className={`pagination__button pagination__page-previous ${currentPage === 1 && 'pagination__button--disabled'}`}
        onClick={() => onPreviousPage()}
      >
        Previous
      </div>
      <div className="pagination__page-active">
        <input className="pagination__current-page" onChange={(e) => onSetPage(e.target.value)}
               value={currentPage}/> / <span>{props.allPagesNumber}</span>
      </div>
      <div
        className={`pagination__button pagination__page-next ${currentPage === props.allPagesNumber && 'pagination__button--disabled'}`}
        onClick={() => onNextPage()}
      >
        Next
      </div>
      <div
        className={`pagination__button pagination__page-last ${currentPage === props.allPagesNumber && ' pagination__button--disabled'}`}
        onClick={() => onLastPage()}
      >
        Last
      </div>
    </div>
  )
}

export default Pagination;

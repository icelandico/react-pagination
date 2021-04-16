import React, { useEffect, useState} from 'react';
import './styles.css'

interface IProps {
  allPagesNumber: number
  itemsPerPage: number
  itemsNumber: number
  pageChange: (page: number) => void
}

const Pagination: React.FC<IProps> = (props) => {
  const [currentPage, setCurrentPage] = useState<number>(1);

  useEffect(() => {
    props.pageChange(currentPage)
  }, [currentPage])

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

  const validateInput = (value: string) => {
    const regex = /^[0-9\b]+$/
    const regexTest = regex.test(value)
    regexTest && setCurrentPage(parseInt(value, 10))
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
        <input className="pagination__current-page"
               onChange={(e) => validateInput(e.target.value)}
               value={currentPage}
        />
         /
        <span>{props.allPagesNumber}</span>
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

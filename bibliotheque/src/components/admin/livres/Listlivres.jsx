import React, { useEffect, useState } from 'react'
import AfficheLivre from './AfficheLivre'
//import axios from 'axios'
import {
  deleteLivre,
  fetchlivres,
  fetchLivresPagination
} from '../../../services/livreservice'
import Pagination from './Pagination'
import { confirmAlert } from 'react-confirm-alert' // Import
import 'react-confirm-alert/src/react-confirm-alert.css' // Import css

const Listlivres = () => {
  const [livres, setLivres] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [limit, setLimit] = useState(5)
  const [totalPages, setTotalPages] = useState(0)

  // method get data livres  return data from service
  /*const loadlivres = async() => {
    const res = await fetchlivres()
    setLivres(res.data)
    console.log(livres)
  }
  */
  // fetch data livres return data from service by pagination
  const fetchProducts = async (page, limit) => {
    try {
      const res = await fetchLivresPagination(page, limit)
      setLivres(res.data.products)
      setTotalPages(res.data.totalPages)
      console.log(livres)
      console.log(totalPages)
    } catch (error) {
      console.log(error.message)
    }
  }
  // method pagination handlePrevPage
  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1)
    }
  }
  // method pagination handleNextPage
  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1)
    }
  }
  // method pagination handlePageChange
  const handlePageChange = page => {
    setCurrentPage(page)
  }
  // method pagination handlelimitChange
  const handleLimitChange = (e) => {
    setLimit(parseInt(e.target.value, 10))
    setCurrentPage(1)
  }


  // method handle delete livre
  const handleDeleteLivre = async (id, isbn) => {
    confirmAlert({
      title: 'Confirm to submit',
      message: 'Are you sure to do this. ' + isbn,
      buttons: [
        {
          label: 'Yes',
          onClick: () =>
            deleteLivre(id)
              .then(res => fetchProducts(currentPage, limit))
              .catch(error => console.log(error.message))
        },
        {
          label: 'No'
        }
      ]
    })
  }
  // useEffect
  useEffect(() => {
    //loadlivres()
    fetchProducts(currentPage, limit)
  }, [currentPage, limit])

  return (
    <div>
      <AfficheLivre 
        livres={livres} 
        handleDeleteLivre={handleDeleteLivre} 
        handleLimitChange={handleLimitChange} 
        limit={limit}/>
      <Pagination
        handlePrevPage={handlePrevPage}
        handleNextPage={handleNextPage}
        handlePageChange={handlePageChange}
        currentPage={currentPage}
        totalPages={totalPages}
      />
    </div>
  )
}

export default Listlivres

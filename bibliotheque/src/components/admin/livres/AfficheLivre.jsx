import React from 'react'
import Table from 'react-bootstrap/Table';
import Accordion from 'react-bootstrap/Accordion';

const AfficheLivre = ({ livres, handleDeleteLivre, handleLimitChange, limit }) => {
  return (
    <div className='m-5'>
      {/* The `<table className='table table-striped'>` is creating a table element with the class names
      'table' and 'table-striped'. The 'table' class is likely a Bootstrap class that provides
      styling for tables, while the 'table-striped' class adds zebra-striping to the table rows for
      better readability. */}
      <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>Liste des livres</Accordion.Header>
        <Accordion.Body>
          Je trouver le tableau qui contient la liste des livres
        </Accordion.Body>
      </Accordion.Item>
      </Accordion>
      <Table striped bordered hover>
        <thead>
          <th>couverture</th>
          <th>isbn</th>
          <th>titre</th>
          <th>annee d'édition</th>
          <th>quantité</th>
          <th>prix</th>
          <th>Modifier</th>
          <th>Supprimer</th>
        </thead>
        <tbody>
          {livres.map((item, index) => (
            <tr key={index}>
             <td>
                <img src={item.couverture} width={80} height={80} />
              </td>
              <td>{item.isbn}</td>
              <td>{item.titre}</td>
              <td>{item.annedition}</td>
              <td>{item.qtestock}</td>
              <td>{item.prix}</td>
              <td>  
                  <center><button className='btn btn-warning'><i className='fa-solid fa-pen-to-square'></i>update</button></center>    
              </td>
              <td>
                <center>
                  <button className='btn btn-danger' onClick={() => handleDeleteLivre(item._id, item.isbn)}>
                  <i className='fa-solid fa-trash-arrow-up'></i>
                  delete</button>
                </center>
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan={8}>
              <select value={limit} onChange={handleLimitChange}>
                <option value={5}>5</option>
                <option value={10}>10</option>
                <option value={15}>15</option>
                <option value={20}>20</option>
              </select> livres par page
            </td>
          </tr>
        </tfoot>
      </Table>
    </div>
  )
}

export default AfficheLivre
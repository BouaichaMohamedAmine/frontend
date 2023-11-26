import React, { useEffect, useState } from 'react'
import axios from"axios"
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';

import { Link } from "react-router-dom";

const Listarticles = () => {

  const [articles,setarticles]=useState([])

useEffect(()=>{
  getarticles()
}, [])


const getarticles=async()=>{
  await axios.get("http://localhost:3001/api/articles")
  .then(res=>{
    setarticles(res.data)
  })
  .catch(error=>{
    console.log(error)
  })
}

  return (
<div className="container">
<div >
<nav className="navbar navbar-expand-lg navbar-dark bg-success">
<div className="container-fluid">

<Link className="btn btn-outline-light" to="/articles/add">
<i class="fa-solid fa-plus"></i>

Ajouter un article
</Link>
</div>
</nav>
</div>


<div className="py-4">
    
      <Table striped bordered hover size="sm" className='table border shadow'>
        <thead>
          <th>Image article</th>
          <th>Référence</th>
          <th>Nom article</th>
          <th>Marque</th>
          <th>Prix DT</th>
          <th>Quantité de stock</th>
          <th>Modifier</th>
          <th>Supprimer</th>
        </thead>
        <tbody>
      {articles.map((art,index)=>
      <tr key={index}>
        
        <td><img src={art.imageart} width={80} height={80}/></td>
        <td>{art.reference}</td>
        <td>{art.designation}</td>
        <td>{art.marque}</td>
        <td>{art.prix}</td>
        <td>{art.qtestock}</td>
        <td><Link className="btn btn-outline-dark" to={`/article/edit/${art._id}`}>
        <i class="fa-solid fa-pen-to-square"></i>
        Modifier
        </Link>
        </td>
        <td><Button variant='outline-danger'>
        <i class="fa-solid fa-trash"></i>
        Supprimer</Button></td>
      </tr>
)}
      
      </tbody>
      </Table>
      </div>
    </div>
  )
}





export default Listarticles

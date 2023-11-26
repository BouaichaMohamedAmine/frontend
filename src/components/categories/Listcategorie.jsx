import React, { useEffect, useState } from 'react'
import axios from"axios"
import Button from 'react-bootstrap/Button';

const Listcategorie = () => {

  const [categories,setcategories]=useState([])

useEffect(()=>{
  getcategories()
}, [])


const getcategories=async()=>{
  await axios.get("http://localhost:3001/api/categories")
  .then(res=>{
    setcategories(res.data)
  })
  .catch(error=>{
    console.log(error)
  })
}

  return (
    <div>
      <table className='table table-striped'>
        <thead>
          <th>Nom catégorie</th>
          <th>Image catégorie</th>
          <th>Modifier</th>
          <th>Supprimer</th>
        </thead>
        <tbody>
      {categories.map((cat,index)=>
      <tr key={index}>
        <td>{cat.nomcategorie}</td>
        <td><img src={cat.imagecategorie} width={80} height={80}/></td>
        <td><Button variant='outline-warning'>
        <i class ="fa-solid fa-pen-to-square"></i>
        Modifier</Button></td>
        <td><Button variant='outline-danger'>
        <i class="fa-solid fa-trash"></i>
        Supprimer</Button></td>
      </tr>
)}
      
      </tbody>
      </table>
    </div>
  )
}

export default Listcategorie

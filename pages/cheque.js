import Head from "next/head";
import styles from "../styles/Home.module.css";
import { useState, useEffect } from 'react';


import {PrismaClient} from '@prisma/client'

const prisma = new PrismaClient()

export default function Home({ data }) {

  const [formData, setFormData]=useState({})
 const saveopp = e =>{
  e.preventDefault()
  console.log(formData)
 }
 
    return (
        <div className={styles.container}>
            <Head>
                <title>opposition cheques</title>
                
            </Head>

            {data.map(item => (
              <ul key="item.id">
              <table className="table table-striped table-dark">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">NOM</th>
      <th scope="col">email</th>
      <th scope="col">RIB</th>
      <th scope="col">categorie</th>
      <th scope="col">motif </th>

      
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">{item.id}</th>
      <td> {item.name}</td>
      <td>{item.email}</td>
      <td>{item.RIB}</td>
      <td>{item.categorie}</td>
      <td>{item.motif}</td>
      {/* <td><button onClick={() => deleteOppo(item.id)} className="btn btn-sm btn-danger btn-delete-user" disabled={user.isDeleting}>
                                    {user.isDeleting 
                                        ? <span className="spinner-border spinner-border-sm"></span>
                                        : <span>Delete</span>
                                    }
                                </button></td> */}

    </tr>

   
  </tbody>
</table>
</ul>
 ))}



                  

          
          

         



          
          
            

           
        </div>
    );
}





 


export async function getServerSideProps() {

  const opposition = await prisma.opposicheq.findMany()
  
    

    return {
        props: {
            data : opposition
        }
    }


}
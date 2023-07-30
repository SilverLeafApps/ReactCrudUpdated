import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

import {toast } from 'react-toastify';

import "bootstrap/dist/css/bootstrap.min.css"; //this is the magic line of code

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

//npm install react-bootstrap bootstrap
//npm install axios react-toastify react-router-dom react-bootstrap json-serve

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import DeleteConfirmation from "./productsCRUD/DeleteConfirmation";
//https://codemoto.io/coding/react/react-delete-confirmation-modal
//https://react-bootstrap.netlify.app/docs/components/modal
//==========================

const _jsonserver_api ="http://localhost:3004/products";//json-server --watch src/UsersDB/users.json --port 3004
const _webapi_api="https://localhost:7198/api/SuperHero";
var finalAPI_URL = _jsonserver_api;

//============================
const Products = () => {
    //-----------variables---------------
    const [productsdata, productsdatachange] = useState(null);
    const navigate = useNavigate();


      //---------- modal dialog confirm box -----
    const [id, setId] = useState(null);
    const [deleteMessage, setDeleteMessage] = useState(null);
    const [canShowModalBox, setDisplayConfirmationModal] = useState(false);

      const hideConfirmationModal = () => {
        setDisplayConfirmationModal(false);
      };

    const submitDelete = (id) =>{

        axios.delete("https://64c677800a25021fde91ac9a.mockapi.io/users/"+ id)
        .then(() => {
            toast.warn("Deleted successfully", {position: toast.POSITION.TOP_RIGHT});
            window.location.reload();
        }).catch((err) => {
            console.log(err.message);
        }) 
        
/*             fetch("http://localhost:3004/products/" + id, {method: "DELETE"})
            .then((res) => {
                //alert('Deleted successfully.')
                toast.warn("Deleted successfully", {position: toast.POSITION.TOP_RIGHT});
                window.location.reload();})
            .catch((err) => {
                console.log(err.message)
            })     */ 
    };

    const showConfirmationModal = (id) => {
        setDisplayConfirmationModal(true);  
        setId(id); 
        setDeleteMessage("Are you sure you want to delete this item = " + id);
   
      };
  //------------------------------------------------
    const DeleteBtnClick_OLD = (id) => {
        if (window.confirm('Do you want to delete?')) {
            fetch("http://localhost:3004/products/" + id, {method: "DELETE"})
            .then((res) => {
                //alert('Deleted successfully.')
                toast.warn("Deleted successfully", {position: toast.POSITION.TOP_RIGHT});
                window.location.reload();})
            .catch((err) => {
                console.log(err.message)
            }) 
        }
    }
    //--------------------------------------
    const ReadBtnClick = (id) => {
     
        navigate("/products/read/" + id);
    }

    //------------Btn click actions--------------
        const UpdateBtnClick = (id) => {
            navigate("/products/update/" + id);
        }
    
    //------------Btn click actions--------------
         const AddNewBtnClick = () => {
            navigate("/products/create");
        }
    
    //-----------GetAll action-------------------
    const loadUsers_axios = async () => {
        //const resp = await axios.get("http://localhost:3004/superhero");
        //herosdatachange(resp.data);  // save this in usestate() using callback

        return await axios.get("http://localhost:3004/products")
                          .then((resp)=> productsdatachange(resp.data))
                          .catch((err) => console.log(err))
    }

    const loadUsers_fetch = async () => {
        //fetch("http://localhost:3004/products")
       fetch("https://64c677800a25021fde91ac9a.mockapi.io/users")
        .then((res) => {
            return res.json(); //first convert to json format
        }).then((resp) => {
            productsdatachange(resp);  // save this in usestate() using callback
        }).catch((err) => {
            console.log(err.message);
        })
    }

    //-----------useeffect & return-----------------
    useEffect(() => {
        loadUsers_fetch();
       // loadUsers_axios();

       //setTimeout(() =>loadUsers_fetch(),500);
    }, [])
    

   return (
        <div style={{marginTop:"9.5vh"}}>
                <div>
                    <h2>Product Details</h2>
                </div>
               
                <div>
                    <TableContainer component={Paper}>
                            <div>
                                <Button
                                onClick={() => { AddNewBtnClick() }} 
                                className="btn btn-success">
                                    Add New (+)
                                </Button>
                            </div>
                            <table class="table table-striped">
                            <TableHead>

                                    <TableRow>
                                        <TableCell>ID</TableCell>
                                        <TableCell>NickName</TableCell>
                                        <TableCell>FName</TableCell>
                                        <TableCell>LName</TableCell>
                                        <TableCell>Place</TableCell>
                                        <TableCell>ACTIONS</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {productsdata &&
                                        productsdata.map(item => (
                                            <TableRow key={item.id}>
                                                <TableCell>{item.id}</TableCell>
                                                <TableCell>{item.NickName}</TableCell>
                                                <TableCell>{item.FirstName}</TableCell>
                                                <TableCell>{item.LastName}</TableCell>
                                                <TableCell>{item.Place}</TableCell>
                                                <TableCell>
                                                    <Button onClick={() => { ReadBtnClick(item.id) }} className="btn btn-primary">View</Button>
                                                    <Button onClick={() => { UpdateBtnClick(item.id) }} className="btn btn-success">Edit</Button>
                                                    {/* <a onClick={() => { DeleteBtnClick_OLD(item.id) }} className="btn btn-danger">Delete</a>*/ }
                                                    <Button onClick={() => { showConfirmationModal(item.id) }} className="btn btn-danger">Delete</Button>
                                                </TableCell>
                                            </TableRow>
                                        ))
                                    }
                                </TableBody>
                            </table>
                            
                            <DeleteConfirmation showModal={canShowModalBox} hideModal={hideConfirmationModal} confirmModal={submitDelete} id={id} message={deleteMessage}  />
                    </TableContainer>
                </div>

            </div>
    ); 
    //---------------------------------------------------
}

export default Products;

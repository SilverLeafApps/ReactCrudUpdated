import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

import {toast } from 'react-toastify';

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
    const [displayConfirmationModal, setDisplayConfirmationModal] = useState(false);
    const [deleteMessage, setDeleteMessage] = useState(null);

      const hideConfirmationModal = () => {
        setDisplayConfirmationModal(false);
      };

    const submitDelete = (id) =>{
            fetch("http://localhost:3004/products/" + id, {method: "DELETE"})
            .then((res) => {
                //alert('Deleted successfully.')
                toast.warn("Deleted successfully", {position: toast.POSITION.TOP_RIGHT});
                window.location.reload();})
            .catch((err) => {
                console.log(err.message)
            })     
    };

    const DeleteBtnClick_ModalDlg = (id) => {
        setId(id); 
        setDeleteMessage("Are you sure you want to delete this item = " + id);
        setDisplayConfirmationModal(true);    
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
        fetch("http://localhost:3004/products")
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
        <div>
            <div>
                <div>
                    <h2>Product Listing</h2>
                </div>
                <div>
                    <div>
                        <Button
                          onClick={() => { AddNewBtnClick() }} 
                          className="btn btn-success">
                            Add New (+)
                        </Button>
                    </div>
                    <TableContainer component={Paper}>
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
                                             <Button onClick={() => { DeleteBtnClick_ModalDlg(item.id) }} className="btn btn-danger">Delete</Button>
                                        </TableCell>
                                    </TableRow>
                                ))
                            }
                        </TableBody>
                    </table>
                    </TableContainer>
                    <DeleteConfirmation showModal={displayConfirmationModal} confirmModal={submitDelete} hideModal={hideConfirmationModal} id={id} message={deleteMessage}  />
                </div>
            </div>
        </div>
    ); 
    //---------------------------------------------------
}

export default Products;

import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import axios from "axios";

const ProdRead = () => {
    const { prodid } = useParams();

    const [productsdata, productsdatachange] = useState({});

    useEffect(() => {

        //https://mockapi.io/  (login with your github a/c for silverapps)
        axios.get("https://64c677800a25021fde91ac9a.mockapi.io/users/"+ prodid).then((resp) => {
            productsdatachange(resp.data);
            console.log(productsdata);
        }).catch((err) => {
            console.log(err.message);
        }) 

        /* fetch("http://localhost:3004/products/" + prodid).then((res) => {
            return res.json();
        }).then((resp) => {
            productsdatachange(resp);
        }).catch((err) => {
            console.log(err.message);
        }) */
    }, []);
    return (
        <div>
               {/* <div className="row"> <div className="offset-lg-3 col-lg-6"> */}

            <div className="container">
                
                <div className="card row" style={{ "textAlign": "left" }}>
                        <div className="card-title">
                            <h2>Product Details</h2>
                        </div>
                            
                        <div className="card-body">                         
                        {
                            productsdata &&
                            <div>
                                <h2>NickName: <b>{productsdata.NickName}</b>  ({productsdata.id})</h2>
                                <h5>First Name: {productsdata.FirstName}</h5>
                                <h5>Last Name : {productsdata.LastName}</h5>
                                <h5>Place     : {productsdata.Place}</h5>
                                <Link className="btn btn-danger" to="/">Back to Listing</Link>
                            </div>
                        }
                       </div>
                </div>
            </div>
        </div>
    );
}

export default ProdRead;
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

import {toast } from 'react-toastify';

import axios from "axios";
//=============================

const ProdUpdate = () => {
    const { prodid } = useParams();

    const[id,idchange]=useState("");
    const[NickName,hnamechange]=useState("");
    const[FirstName,fnamechange]=useState("");
    const[LastName,lnamechange]=useState("");
    const[Place,pnamechange]=useState("");
    const[active,activechange]=useState(true);
    const[validation,valchange]=useState(false);

    //const [empdata, empdatachange] = useState({});

    useEffect(() => {

        axios.get("https://64c677800a25021fde91ac9a.mockapi.io/users/"+ prodid).then((resp) => {
            idchange(resp.data.id);
            hnamechange(resp.data.NickName);
            fnamechange(resp.data.FirstName);
            lnamechange(resp.data.LastName);
            pnamechange(resp.data.Place);
        }).catch((err) => {
            console.log(err.message);
        }) 


       /*  fetch("http://localhost:3004/products/" + prodid).then((res) => {
            return res.json();
        }).then((resp) => {
            idchange(resp.id);
            hnamechange(resp.NickName);
            fnamechange(resp.FirstName);
            lnamechange(resp.LastName);
            pnamechange(resp.Place);
        }).catch((err) => {
            console.log(err.message);
        }) */
    }, []);

  


    const navigate=useNavigate();



    const handlesubmit=(e)=>{
      e.preventDefault();

      const proddata={id,NickName,FirstName,LastName,Place};
      

     /*  fetch("http://localhost:3004/products/"+ prodid,{
        method:"PUT",
        headers:{"content-type":"application/json"},
        body:JSON.stringify(proddata)
      }) */
      axios.put("https://64c677800a25021fde91ac9a.mockapi.io/users/"+ prodid,
      {NickName,FirstName,LastName,Place}
      )
      .then((res)=>{
        //alert('Saved successfully.')
        toast.success("Updated successfully", {position: toast.POSITION.TOP_RIGHT});
        navigate('/');
      }).catch((err)=>{
        console.log(err.message)
      })

    }
    return ( 
        <div>

        <div className="row">
            <div className="offset-lg-3 col-lg-6">
                <form className="container" onSubmit={handlesubmit}>

                    <div className="card" style={{"textAlign":"left"}}>
                        <div className="card-title">
                            <h2>Product Update</h2>
                        </div>
                        <div className="card-body">

                            <div className="row">

                                <div className="col-lg-12">
                                    <div className="form-group">
                                        <label>ID</label>
                                        <input value={id} disabled="disabled" className="form-control"></input>
                                    </div>
                                </div>

                                <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>HName</label>
                                            <input required value={NickName} onMouseDown={e=>valchange(true)} onChange={e=>hnamechange(e.target.value)} className="form-control"></input>
                                        {NickName.length==0 && validation && <span className="text-danger">Enter nick name</span>}
                                        </div>
                                    </div>

                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>FName</label>
                                            <input value={FirstName} onChange={e=>fnamechange(e.target.value)} className="form-control"></input>
                                        </div>
                                    </div>

                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>LName</label>
                                            <input value={LastName} onChange={e=>lnamechange(e.target.value)} className="form-control"></input>
                                        </div>
                                    </div>

                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>Place</label>
                                            <input value={Place} onChange={e=>pnamechange(e.target.value)} className="form-control"></input>
                                        </div>
                                    </div>

                                    <div className="col-lg-12">
                                        <div className="form-check">
                                        <input checked={active} onChange={e=>activechange(e.target.checked)} type="checkbox" className="form-check-input"></input>
                                            <label  className="form-check-label">Is Active</label>
                                            
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                           <button className="btn btn-success" type="submit">Save</button>
                                           <Link to="/" className="btn btn-danger">Back</Link>
                                        </div>
                                    </div>


                            </div>
                          

                        </div>

                    </div>

                </form>

            </div>
        </div>
    </div>
     );
}
 
export default ProdUpdate;

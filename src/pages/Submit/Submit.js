import logo from '../../logo.svg';
import "./Submit.scss";
import axios from 'axios';
import { Route, Routes } from "react-router-dom";
import { Link, useNavigate, useParams } from "react-router-dom";
import React, { useState } from "react";
import Swal from "sweetalert2";

function Submit() {
  const [title, setTitle] = useState("");
  const [status, setStatus] = useState("");
  const [price, setPrice] = useState("");
  const [location, setLocation] = useState("");
  const [address, setAddress] = useState("");
  const [type, setType] = useState("");
  const [phone, setPhone] = useState("");
  const [baths, setBaths] = useState("");
  const [rooms, setRooms] = useState("");
  const [size, setSize] = useState("");
  const [image, setImage] = useState([]);
  const [vedio, setVedio] = useState({});
  const handleImageChange = (e) => {
    if (e.target.files) {
      console.log(e.target.files[0]);
      setImage(image => e.target.files);
      setVedio(e.target.files[0]);
    }
  };
  const handleVedioChange = (e) => {
    if (e.target.files) {
      console.log(e.target.files[0]);
      setVedio(e.target.files[0]);
    }
  };
  var tokenStr = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0NzFiMTBjMTI3MzJlNjdlZjZiZWU4NiIsImVtYWlsIjoiYWJkby5jb20iLCJsb2dvdXQiOmZhbHNlLCJpYXQiOjE2ODUxODA5MjksImV4cCI6MTY4NzYxODEyOX0.Vq1kU0jIjEeNhWRzWhy1bs4kcYHoW8fPbJuvokRE8NU";
  const config =  { headers:{ 'content-type': 'multipart/form-data; boundary=<calculated when request is sent>' ,"Authorization" : `Bearer ${tokenStr}`}};
  const [description, setDescription] = useState("");
  const navigate = useNavigate();
  const handleSubmit = () => {
    var status = 400;
    const bodyFormData = new FormData();
    bodyFormData.append('name', title);
    bodyFormData.append('description', description);
    bodyFormData.append('price', price);
    bodyFormData.append('location', location);
    bodyFormData.append('address', address);
    bodyFormData.append('type', type);
    bodyFormData.append('status', status);
    bodyFormData.append('rooms', rooms);
    bodyFormData.append('size', size);
    bodyFormData.append('baths', baths);
    bodyFormData.append('images', image);
    bodyFormData.append('vedio', vedio);
    console.log(title);
    for (var key of bodyFormData.entries()) {
        console.log(key[0] + ', ' + key[1]);
    }
    fetch("http://localhost:5000/properties/addproperty", {
      mode: 'no-cors',
      method: "POST",
      body: bodyFormData
    }).then(
        (res) => {
            Swal.fire({
          title: "Add done successfully",
          icon: "success",
          confirmButtonText: "Ok",
          }).then((result) => {
            if (result.isConfirmed) {
              navigate("/home");
            } else if (result.isDenied) {
              Swal.fire("Changes are not saved", "", "info");
            }
          });
        }
        )
        .catch(err => {
          console.log(err);
             return Swal.fire({
              icon: "error",
              title: "Oops...",
              text: "there is something is Wrong",
            });
        // some error handling
      });
  };

  return (

<div>
  <div className="container">
      <div className="box">
          <div className="chose">
              <div className="head">
                    <div className="head-l">
                    <div className="sec0">
                          <input type="text" required onChange={(e) => setTitle(e.target.value)}/>
                        <label>Title</label>
                    </div>
                      <div className="sec1">
                        <input type="number" onChange={(e) => setPrice(e.target.value)} required/>
                          <label>Price</label>
                          </div>
                        <div className="sec2">
                          <input type="text" onChange={(e) => setAddress(e.target.value)} required/>
                        <label>Address</label>
                    </div>
                    <div className="sec3">
                      <input type="text" onChange={(e) => setPhone(e.target.value)} required/>
                      <label>Phone Number</label>                      
                    </div>
                    <div className="sec4">
                      <form action="/upload" method="post" enctype="multipart/form-data">
                        <label for="file-upload" className="custom-file-upload">
                          <i className="fa-solid fa-camera fa-l"></i>
                          <input id="file-upload" type="file" onChange={handleImageChange} name="images" accept="image/*" multiple />
                        </label>
                      </form>
                    </div>
                      <div className="secv">
                        <form action="/action_page.php">
                          <input type="file" id="myFile" onChange={handleVedioChange} name="filename"/>
                          <i className="fas fa-regular fa-video"></i>
                        </form>                        
                      </div>
                      </div>
                          <div className="head-R">
                            <div className="sec1">
                                    <label for="property-status">Property Status</label>
                                      <select name="property-status" onChange={(e) => setStatus(e.target.value)} id="property-status">
                                          <option value="for-rent">For Rent</option>
                                          <option value="for-sale">For Sale</option>
                                      </select>
                        </div>
                      <div className="sec2">
                          <label for="location">Location</label>
                              <select name="location" onChange={(e) => setLocation(e.target.value)} id="location">
                                <option value="Cairo">Cairo</option>
                                <option value="Giza">Giza</option>
                                <option value="Alex">Alex</option>
                                <option value="Luxor">Luxor</option>
                              </select>
                        </div>
                      <div className="sec3">
                              <label for="Property-Type">Property Type</label>
                                <select name="Property-Type" onChange={(e) => setType(e.target.value)} id="Property-Type">
                                  <option value="Office">Office</option>
                                  <option value="Shop">Shop</option>
                                  <option value="Apartment">Apartment</option>
                              </select>
                      </div>
                </div>
              </div>
              <div className="center">
                <div>
                  <div><i className=" fas fa-thin fa-bed"></i><span><input type="number" onChange={(e) => setRooms(e.target.value)} placeholder="Bedrooms"/></span></div>
                  
                </div>
                <div>
                  <div><i className="fas fa-shower"></i><span><input type="number"  onChange={(e) => setBaths(e.target.value)} placeholder="BathRooms"/></span></div>

                </div>
                <div>
                  <div>
                    <i className="fas fa-light fa-ruler-combined"></i><span><input type="number" onChange={(e) => setSize(e.target.value)} placeholder="Area "/></span>
                  </div>
                </div>
              </div>
              <div className='des'>
              <textarea id="description" name="description" onChange={(e) => setDescription(e.target.value)} placeholder='Type Detailes...'></textarea>
                </div>   
              <div className="btn">
                <button type="submit" onClick={handleSubmit}>Submit</button>
              </div>     
          </div>
      </div>
  </div>
</div>

  );
}

export default Submit;

import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Edit = ({ id }) => {

  const navigate = useNavigate();
  const [editData, setEditData] = useState({
    name: "",
    email: "",
    website: "",
    company: "",
    phone: "",
  });
  
  useEffect(() => {
    
    axios
      .get(`https://6651db1b20f4f4c44278edc6.mockapi.io/api/user/${id}`)
      .then((res) => setEditData(res.data))
      .catch((err) => console.log(err));
  }, []);

    const handleChange = (e) => {
    const { name, value } = e.target;
    setEditData((preData) => ({
      ...preData,
      [name]: value,
    }));
  };
  const handleSubmit = async (e) => {
    
    e.preventDefault();
    await axios
      .put(`https://6651db1b20f4f4c44278edc6.mockapi.io/api/user/${id}`, editData)
      .then((res) => console.log(res.data))
      .catch((error) => console.log(error));
    navigate("/users");
  };
  return (
    <>
      <form
        className="container mt-5 text-center"
        style={{ width: "30rem" }}
        onSubmit={handleSubmit}
      >
        <div className="row mb-5">
          <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">
            Name:
          </label>
          <div className="col-sm-12">
            <input
              type="text"
              className="form-control"
              name="name"
              value={editData.name}
              onChange={handleChange}
            />
          </div>
          <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">
            Email :
          </label>
          <div className="col-sm-12">
            <input
              type="text"
              className="form-control"
              name="email"
              value={editData.email}
              onChange={handleChange}
            />
          </div>
          <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">
            Website:
          </label>
          <div className="col-sm-12">
            <input
              type="text"
              className="form-control"
              name="website"
              value={editData.website}
              onChange={handleChange}
            />
          </div>
          <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">
            Company:
          </label>
          <div className="col-sm-12">
            <input
              type="text"
              className="form-control"
              name="company"
              value={editData.company}
              onChange={handleChange}
            />
          </div>
          <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">
            Phone:
          </label>
          <div className="col-sm-12">
            <input
              type="tel"
              className="form-control"
              name="phone"
              value={editData.phone}
              onChange={handleChange}
            />
          </div>
          
        </div>

        <button type="submit" className="btn btn-primary">
          Update
        </button>
      </form>
    </>
  );
};

export default Edit;
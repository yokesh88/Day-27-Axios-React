import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddUser = () => {
  const navigate = useNavigate();
  const [createData, setCreateData] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCreateData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://6651db1b20f4f4c44278edc6.mockapi.io/api/user",
        createData
      );
      console.log(response.data);
      navigate("/users");
    } catch (error) {
      console.error("Error creating user:", error);
    }
  };

  return (
    <form
      className="container mt-5 text-center userWidth"
      
      onSubmit={handleSubmit}
    >
      <div className="row mb-5">
        <label htmlFor="name" className="col-sm-2 col-form-label">
          Name:
        </label>
        <div className="col-sm-12">
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            value={createData.name}
            onChange={handleChange}
          />
        </div>
        <label htmlFor="email" className="col-sm-2 col-form-label">
          Email :
        </label>
        <div className="col-sm-12">
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            value={createData.email}
            onChange={handleChange}
          />
        </div>
        <label htmlFor="website" className="col-sm-2 col-form-label">
          Website:
        </label>
        <div className="col-sm-12">
          <input
            type="text"
            className="form-control"
            id="website"
            name="website"
            value={createData.website}
            onChange={handleChange}
          />
        </div>
        <label htmlFor="company" className="col-sm-2 col-form-label">
          Company:
        </label>
        <div className="col-sm-12">
          <input
            type="text"
            className="form-control"
            id="company"
            name="company"
            value={createData.company}
            onChange={handleChange}
          />
        </div>
        <label htmlFor="phone" className="col-sm-2 col-form-label">
          Phone:
        </label>
        <div className="col-sm-12">
          <input
            type="tel"
            className="form-control"
            id="phone"
            name="phone"
            value={createData.phone}
            onChange={handleChange}
          />
        </div>
      </div>
      <button type="submit" className="btn btn-primary">
        Create
      </button>
    </form>
  );
};

export default AddUser;
// import React from 'react'
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Users = ({ setId }) => {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);
  const [deleteData, setDeleteData] = useState([]);
  useEffect(() => {
    
    axios
      .get("https://6651db1b20f4f4c44278edc6.mockapi.io/api/user")
      .then((res) => setUsers(res.data));
  }, [deleteData]);


  const handleEdit = (id) => {
    setId(id);

    navigate(`/edit/${id}`);
  };
  
  const handleDel = (id) => {
    axios
      .delete(`https://6651db1b20f4f4c44278edc6.mockapi.io/api/user/${id}`)
      .then((res) => setDeleteData(res.data))
      .catch((err) => console.log(err));
  };
  return (
   
    <div className="container user">
      <div className="table-responsive">
        <table className="table table-striped mt-4">
          <thead>
            <tr className="table-danger">
              <th scope="col">S.No</th>
              <th scope="col">Name</th>

              <th scope="col">Email</th>
              <th scope="col">Website</th>
              <th scope="col">Company</th>
              <th scope="col">Phone</th>
              <th scope="col">Edit</th>
              <th scope="col">Delete</th>
            </tr>
          </thead>
          <tbody>
            {users.map((item, index) => (
              <tr className="table-primary" key={index}>
                <th scope="row">{item.id}</th>
                <td>{item.name}</td>

                <td>{item.email}</td>
                <td>{item.website}</td>
                <td>{item.company}</td>
                <td>{item.phone}</td>

                <td>
                  <button
                    className="btn btn-primary"
                    onClick={() => {
                      handleEdit(item.id);
                    }}
                  >
                    Edit
                  </button>
                </td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => {
                      handleDel(item.id);
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;
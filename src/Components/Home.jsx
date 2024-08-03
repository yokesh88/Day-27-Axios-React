import axios from "axios";
import React, { useEffect, useState } from "react";

const Home = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    
    axios
      .get("https://6651db1b20f4f4c44278edc6.mockapi.io/api/user")
      .then((res) => setUsers(res.data));
  }, []);

  return (
    
    <div className="container">
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {users.map((item, index) => (
          <div className="col" key={index}>
            <div className="card h-100 mt-3">
             
              <div className="card-body">
                <h5 className="card-title text-center">{item.name}</h5>
                <hr />
                <p className="card-text text-center">
                  <b>name:</b> {item.name}
                </p>
                <p className="card-text text-center">
                  <b>Email:</b> {item.email}
                </p>
                <p className="card-text text-center">
                  <b>Website:</b> {item.website}
                </p>
                <p className="card-text text-center">
                  <b>Company:</b> {item.company}
                </p>
                <p className="card-text text-center">
                  <b>Phone:</b> {item.phone}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
import React from "react";
import { useNavigate } from "react-router-dom";
const Userlist = () => {
  const navigate = useNavigate();
  const users = [
    {
      role: "user",
      _id: "634d9d78a298c616ddd717a4",
      name: "Akash Gangwar",
      email: "anilb980@gmail.com",
    },
    {
      role: "admin",
      _id: "634f9bd771ba0e28b0f34485",
      name: "Akash Gangwar",
      email: "anilb9850@gmail.com",
    },
    {
      role: "admin",
      _id: "634f9e8a71ba0e28b0f34486",
      name: "Akash Gangwar",
      email: "anilb98@gmail.com",
    },
    {
      role: "user",
      _id: "634ff56b605caf70314998e8",
      name: "Akash Gangwar",
      email: "anilb500@gmail.com",
    },
    {
      role: "admin",
      _id: "635446a1605caf70314998f6",
      name: "Anup Jha",
      email: "anup.jha.02@icloud.com",
    },
    {
      role: "user",
      _id: "6366ef1afad68b8d4fb3b429",
      name: "Abbbbbb",
      email: "anilb200@gmail.com",
    },
    {
      role: "user",
      _id: "636b9f6cb1a3f28c557b7a16",
      name: "Anil Babu",
      email: "anilb90@gmail.com",
    },
  ];

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignContent: "center",
        }}
      >
        <div>
          <button className="btnhome" onClick={() => navigate("/")}>
            Go backe to home
          </button>
          <h1>Here is Users List</h1>
          {users &&
            users.map((user) => {
              return (
                <>
                  <p>user name: {user.name}</p>
                  <p>user email: {user.email}</p>
                  <p>user role: {user.role}</p>
                </>
              );
            })}
        </div>
      </div>
    </>
  );
};

export default Userlist;

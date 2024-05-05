import { useState, useEffect } from "react";
import axios, { all } from "axios";
import { Link } from "react-router-dom";
import SideBar from "../../components/SideBar";
import UserCard from "../../components/UserCard";
import "../styles.css";
import useAlluserGet from "../../hooks/user/useAlluserGet.jsx";

const AllUsers = () => {
   
  const [currentPage, setCurrentPage] = useState(1);
  const [usersPerPage] = useState(10);
  const { allUsers } = useAlluserGet();


  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = allUsers.slice(indexOfFirstUser, indexOfLastUser);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  console.log(allUsers)


  return (
    <>
    <div className="user-page ">
      <div className="page-bar position-fixed">
      <SideBar namePage="All User"/>
      </div>

      <div className="user-data-content container position-fixed">
        
        <div className="user-card-tabler container d-flex flex-row justify-content-between align-items-center">
          <p className="img-text">Profile Picture</p>
          <p> ID</p>
          <p>Name</p>
          <p>Email</p>
          <p className="img-text">Phone Number</p>
          <p className="role-text">Role</p>
          <p>Update</p>
        </div>
      </div>

      <div className="user-page-content container">
          {currentUsers.map((user) => (
            <div
            className="user-item container d-flex flex-row justify-content-between align-items-center"
            key={user.id}
            >
            <UserCard
              id={user.id}
              name={user.name}
              email={user.email}
              phoneNumber={user.phoneNumber}
              profilePictureUrl={user.profilePictureUrl}
              role={user.role}
            />
            <Link to={`updateProfile/${user.id}`}>
              <i className="btn btn-outline-primary bi bi-person-lines-fill">
                Profile
              </i>
            </Link>

            <Link to={`updateUserRole/${user.id}`}>
              <i className="btn btn-outline-primary bi bi-person-badge">
                Role
              </i>
            </Link>
          </div>
          ))}
  
          <div className="pagination-controls">
            {currentPage > 1 ? (
              <button onClick={() => paginate(currentPage - 1)}>Previous</button>
            ) : (
              <button className="disabled" disabled>Previous</button>
            )}
            <button className="disabled" disabled>{currentPage}</button>
            {currentPage < Math.ceil(allUsers.length / usersPerPage) && (
              <button onClick={() => paginate(currentPage + 1)}>Next</button>
            )}
          </div>
        </div>
      </div>
    </>
  );
  };

export default AllUsers;
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import SideBar from "../../components/SideBar";
import UserCard from "../../components/UserCard";
import "../styles.css";

const AllUsers = () => {
  const [allUsers, setAllUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [usersPerPage] = useState(10); // Number of users per page
 

  useEffect(() => {
    handleAllUsers();
  }, []); // Fetch users when component mounts

  const handleAllUsers = async () => {
    try {
      const res = await axios.get(
        "https://travel-journal-api-bootcamp.do.dibimbing.id/api/v1/all-user",
        {
          headers: {
            apiKey: "24405e01-fbc1-45a5-9f5a-be13afcd757c",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3RlckBnbWFpbC5jb20iLCJ1c2VySWQiOiJmNzdiODU5My0xNDYzLTRmMzUtOGZkYS0zMzVmOTk0ZTlhZGYiLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE3MTIzMjQ5NDN9.CT-qSmsXHHDyZzjJZFjmE47VLSzBUiZL3g3vTEHQlrQ",
          },
        }
      );
      setAllUsers(res.data.data);
    } catch (err) {
      console.log(err);
    }
  };

  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = allUsers.slice(indexOfFirstUser, indexOfLastUser);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);





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
            {currentPage > 1 && (
              <button onClick={() => paginate(currentPage - 1)}>Previous</button>
            )}
            <button disabled>{currentPage}</button>
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
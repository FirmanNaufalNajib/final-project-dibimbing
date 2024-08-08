import UserCard from "../../components/UserCard";
import SideBar from "../../components/SideBar";
import useLoggeduserGet from "../../hooks/user/useLoggeduserGet";

const LoggedUsers = () => {

  const { logUser } = useLoggeduserGet();

return (
  <>
  <div className="user-page d-flex">
    <div className="page-bar position-fixed">
          <SideBar/>
    </div>
    <div className="user-page-content container">
    <div className="user-card-tabler container d-flex flex-row justify-content-between align-items-center">
            <p className="img-text">Image Profile</p>
            <p> ID</p>
            <p>Name</p>
            <p>Email</p>
            <p className="img-text">Phone Number</p>
            <p className="role-text">Role</p>
            <p>Update</p>
    </div>

    {logUser.length > 0 ? (
      logUser.map((user) => {
        if (user.role === "user") {
          return (
            <div key={user.id} className="user-item container d-flex flex-row justify-content-between align-items-center">

              <UserCard
                key={user.id}
                id={user.id}
                name={user.name}
                email={user.email}
                phoneNumber={user.phoneNumber}
                profilePictureUrl={user.profilePictureUrl}
                role={user.role}
              />

            </div>
          );
        }
      })
    ) : (
      <h2>Nobody Log on</h2>
    )}
    </div>

    </div>
    </>
  );
};

export default LoggedUsers;
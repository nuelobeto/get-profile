import { useContext } from "react";
import { GlobalContext } from "./../context/GlobalStates";

const Profile = () => {
  const { profile } = useContext(GlobalContext);

  return (
    <div className="profile">
      <div className="container">
        <h1>Profile</h1>
        <div className="profile-details">
          <p>name: {profile?.name}</p>
          <p>email: {profile?.email}</p>
          <p>company: {profile?.company}</p>
          <p>occupation: {profile?.occupation}</p>
          <p>marital status: {profile?.marital_status}</p>
        </div>
      </div>
    </div>
  );
};

export default Profile;

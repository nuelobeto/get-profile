import { useContext } from "react";
import { Link } from "react-router-dom";
import { GlobalContext } from "./../context/GlobalStates";

const Dashboard = () => {
  const { profile } = useContext(GlobalContext);

  return (
    <div className="dashboard">
      <nav>
        <div className="container">
          <div className="nav">
            <div className="logo">
              <h1>Logo</h1>
            </div>
            <div className="user">
              <p>
                Welcome <span>{profile?.name}</span>
              </p>
              <Link to="/profile">
                <button className="profile-btn">Profile</button>
              </Link>
            </div>
          </div>
        </div>
      </nav>
      <main>
        <div className="container">
          <section>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consectetur iste dignissimos assumenda laudantium? Dolore et
              ratione, aliquam distinctio exercitationem id neque a ipsam
              inventore? Eos fugiat recusandae libero incidunt corporis!
            </p>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consectetur iste dignissimos assumenda laudantium? Dolore et
              ratione, aliquam distinctio exercitationem id neque a ipsam
              inventore? Eos fugiat recusandae libero incidunt corporis!
            </p>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consectetur iste dignissimos assumenda laudantium? Dolore et
              ratione, aliquam distinctio exercitationem id neque a ipsam
              inventore? Eos fugiat recusandae libero incidunt corporis!
            </p>
          </section>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;

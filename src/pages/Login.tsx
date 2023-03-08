import { useContext, useEffect } from "react";
import { GlobalContext } from "./../context/GlobalStates";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { user, setUser } = useContext(GlobalContext);

  const navigate = useNavigate();

  const handleLogin = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const payload = {
      email: "festus@gmail.com",
      password: "festus1234",
    };

    setUser(payload);

    localStorage.setItem("user", JSON.stringify(payload));
  };

  useEffect(() => {
    if (user === null) {
      return;
    }
    navigate("/dashboard");
  }, [user, navigate]);

  return (
    <div className="auth">
      <form onSubmit={handleLogin}>
        <div className="form-header">
          <h1>Login</h1>
        </div>
        <div className="form-body">
          <div className="form-group">
            <label>Email</label>
            <input type="text" defaultValue="festus@gmail.com" />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input type="password" defaultValue="festus1234" />
          </div>
          <button>Log in</button>
        </div>
      </form>
    </div>
  );
};

export default Login;

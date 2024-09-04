import { useState, useEffect, useRef } from "react";
import axios from "axios";
import { Link, NavLink } from "react-router-dom";
import styles from "./styles.module.css";
import PacmanLoader from "react-spinners/PacmanLoader";
import styled from "styled-components";

const CenteredDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50vh;
`;

const Login = () => {
  const [data, setData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [effect, setEffect] = useState("");
  //screen loading
  const [screenLoading, setScreenLoading] = useState(false);

  let id;
  if (localStorage.getItem("id")) {
    id = localStorage.getItem("id");
  } else {
    id = "";
  }

  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setScreenLoading(true); // Show the loading spinner before making the request
    try {
      const url = "https://honbil-back.onrender.com/api/v1/rentals/login";
      const { data: res } = await axios.post(url, data);

      console.log(res.data);
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("id", res.data.id);
      setScreenLoading(false);
      window.location = "/#/rentals";
    } catch (error) {
      if (
        error.response &&
        error.response.status >= 400 &&
        error.response.status <= 500
      ) {
        setError(error.response.data.message);
      }
      setScreenLoading(false); // Hide the loading spinner in case of an error
    }
  };

  // const useRunOnce = ({ fn, sessionKey }) => {
  //   const triggered = useRef(false);

  //   useEffect(() => {
  //     const hasBeenTriggered = sessionKey
  //       ? sessionStorage.getItem(sessionKey)
  //       : triggered.current;

  //     if (!hasBeenTriggered) {
  //       fn();
  //       triggered.current = true;

  //       if (sessionKey) {
  //         sessionStorage.setItem(sessionKey, "true");
  //       }
  //     }
  //   }, [fn, sessionKey]);

  //   return null;
  // };
  // useRunOnce({
  //   fn: () => {
  //     console.log("Runs once on mount");
  //     // window.location.reload(true);
  //   },
  // });
  return (
    <>
      {screenLoading ? (
        <CenteredDiv>
          <h2 className="section__title text-[#00df9a]">Getting Your Wheels</h2>
          <br />
          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp;
          <PacmanLoader color="#36d7b7" />
        </CenteredDiv>
      ) : (
        <div className={styles.login_container}>
          <div className={styles.login_form_container}>
            <div className={styles.left}>
              <form className={styles.form_container} onSubmit={handleSubmit}>
                <h1>Login to Your Account</h1>
                <br />
                <input
                  type="email"
                  placeholder="Email"
                  name="email"
                  onChange={handleChange}
                  value={data.email}
                  required
                  className={styles.input}
                />
                <input
                  type="password"
                  placeholder="Password"
                  name="password"
                  onChange={handleChange}
                  value={data.password}
                  required
                  className={styles.input}
                />
                {error && <div className={styles.error_msg}>{error}</div>}
                {/* <button type="submit" className={styles.green_btn}>
              Sign In
            </button> */}
                <br />
                <button
                  className={styles.green_btn}
                  onClick={() => {
                    setEffect(true);
                  }}
                  type="submit"
                >
                  Login
                </button>
                <br />
                <hr style={{ width: "200px", height: "5px" }} />
                <div className="skip-btn">
                  <NavLink to={`/rentals/${id}`}>
                    <button type="button" className={styles.white_btn}>
                      Do it Later
                    </button>
                  </NavLink>
                </div>
              </form>
            </div>
            <div className={styles.right}>
              <h1>New Here ?</h1>
              <Link to="/signup">
                <button type="button" className={styles.white_btn}>
                  Sign Up
                </button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Login;

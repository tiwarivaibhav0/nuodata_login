import React from "react";
import styles from "./login.module.css";

function Login() {
  return (
    <div className={styles.container}>
      <Frame1 />
      <Form />
      <Sidebar />
    </div>
  );
}

function Form() {
  return (
    <div className={styles.form}>
      <h4>Hello! Welcome back</h4>
      <p>Log in to your account.</p>
      <div>
        <p>
          <label>E-mail address</label>
        </p>
        <input placeholder="example@gmail.com" />
      </div>
      <div>
        <p>
          <label>Password</label>
        </p>
        <input placeholder="Enter Password" type="password" />
      </div>
      <div className={styles.link}>
        <a href="#">Forget Password</a>{" "}
      </div>
      <div>
        <button>Login</button>

        <div className={styles.linethrough}>
          <span className={styles.text}>Or</span>
        </div>
        <br />
        <button className={styles.btn2}>
          <i class="fa-brands fa-google"></i> Login with Google
        </button>
        <p>
          <span id={styles.account}>Don't have an account?</span> <a href="#">Sign up</a>{" "}
        </p>
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className={styles.image}>
      <div>
        <img src="/logo.jpg" alt="" />
        <p>Welcome to Nuodata</p>
      </div>
    </div>
  );
}

function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <div className={styles.placeholder}></div>
    </div>
  );
}
export default Login;

import classes from "./ProfileForm.module.css";
import { useSelector } from "react-redux";
import { useRef } from "react";
const ProfileForm = () => {
  const idToken = useSelector((state) => state.token);
  const newPasswordRef = useRef();
  const changePassword = (event) => {
    event.preventDefault();
    console.log(idToken);
    console.log(newPasswordRef.current.value);
    fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyABQwM4WMhWTU8qZcr2VIzpI8Uok_qgnUQ",
      {
        method: "POST",
        body: JSON.stringify({
          idToken: idToken,
          password: newPasswordRef.current.value,
          returnSecureToken: false,
        }),
        headers: {
          "Content-type": "application/json",
        },
      }
    ).then((res) => {
      res.json().then((data) => console.log(data));
    });
  };
  return (
    <form className={classes.form}>
      <div className={classes.control}>
        <label htmlFor="new-password">New Password</label>
        <input type="password" id="new-password" ref={newPasswordRef} />
      </div>
      <div className={classes.action}>
        <button onClick={changePassword}>Change Password</button>
      </div>
    </form>
  );
};

export default ProfileForm;

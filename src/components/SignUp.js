import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import InputControl from "./InputControl";
import { auth } from "../firebase";
import "../style.css";

function Signup() {
    const navigate = useNavigate();
    const [values, setValues] = useState({
        name: "",
        email: "",
        pass: "",
    });
    const [errorMsg, setErrorMsg] = useState("");
    const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);

    const handleSubmission = () => {
        if (!values.name || !values.email || !values.pass) {
            setErrorMsg("Fill all fields");
            return;
        }

      setErrorMsg("");
      setSubmitButtonDisabled(true);
      createUserWithEmailAndPassword(auth, values.email, values.pass)
          .then(async (res) => {
              setSubmitButtonDisabled(false);
              const user = res.user;
              await updateProfile(user, {
                  displayName: values.name,
              });
              navigate("/");
          })
          .catch((err) => {
            setSubmitButtonDisabled(false);
            setErrorMsg(err.message);
        });
    };

    return (
        <div className="container">
            <div className="innerBox">
                <h1 className="heading">SIGN UP</h1>
                
                <InputControl label="First Name" placeholder="First Name"
                    onChange={(event) =>
                        setValues((prev) => ({ ...prev, name: event.target.value }))
                    }
                />
                <InputControl label="Last Name" placeholder="Last Name"
                    onChange={(event) =>
                        setValues((prev) => ({ ...prev, name: event.target.value }))
                    }
                />
                <InputControl  type="email" label="Email" placeholder="Enter email address"
                    onChange={(event) =>
                        setValues((prev) => ({ ...prev, email: event.target.value }))
                    }
                />
                <InputControl type="Password" label="Password" placeholder="Enter password"
                    onChange={(event) =>
                        setValues((prev) => ({ ...prev, pass: event.target.value }))
                    }
                />

                <div className="footer">
                    <b className="error">{errorMsg}</b>
                    <button onClick={handleSubmission} disabled={submitButtonDisabled}>
                        SIGN UP
                    </button>
                    <p>
                        Already have an account?{" "}
                        <span>
                            <Link to="/signin">SIGN IN</Link>
                        </span>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Signup;

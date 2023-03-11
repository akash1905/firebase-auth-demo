import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import InputControl from "./InputControl";
import { auth } from "../firebase";
import "../style.css";

function SignIn() {
    const navigate = useNavigate();
    const [values, setValues] = useState({
        email: "",
        pass: "",
    });
    const [errorMsg, setErrorMsg] = useState("");
    const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);

    const handleSubmission = () => {
        if (!values.email || !values.pass) {
            setErrorMsg("Fill all fields");
            return;
        }

      setErrorMsg("");
      setSubmitButtonDisabled(true);
      signInWithEmailAndPassword(auth, values.email, values.pass)
            .then(async (res) => {
                setSubmitButtonDisabled(false);
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
                <h1 className="heading">SIGN IN</h1>

                <InputControl type="email" label="Email" placeholder="Enter email address"
                    onChange={(event) =>
                        setValues((prev) => ({ ...prev, email: event.target.value }))
                    }
                />
                <InputControl type="Password" label="Password" placeholder="Enter Password"
                    onChange={(event) =>
                        setValues((prev) => ({ ...prev, pass: event.target.value }))
                    }
                />

                <div className="footer">
                    <b className="error">{errorMsg}</b>
                    <button disabled={submitButtonDisabled} onClick={handleSubmission}>
                        SIGN IN
                    </button>
                    <p>
                        Already have an account?{" "}
                        <span>
                            <Link to="/signup">SIGN UP</Link>
                        </span>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default SignIn;

import "./App.css";
import { Formik, useFormik } from "formik";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import * as yup from "yup";

function App() {
  const formValidation = yup.object({
    firstName: yup.string().required(),
    lastName: yup.string().required(),
    email: yup.string().required().email(),
    password: yup.string().required().min(6),
  });

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    },
    validationSchema: formValidation,
  });

  const style = {
    backgroundColor: "hsl(154, 59%, 51%)",
    padding: "10px",
    letterSpacing: "1px",
  };

  return (
    <div className="App">
      <div className="left-card">
        <h1>Learn to code by watching others</h1>
        <p>
          See how experienced developers problems in real-time. Watching
          scripted tutorials is great but understanding how developers think is
          invaluable
        </p>
      </div>
      <div className="right-card">
        <h4>
          try it free 7 days <span>then 20/mo. thereafter</span>
        </h4>
        <form
          action="#"
          className="sign-up-form"
          onSubmit={formik.handleSubmit}
        >
          <TextField
            name="firstName"
            id="outlined-basic"
            placeholder="First Name"
            variant="outlined"
            onChange={formik.handleChange}
            error={formik.errors.firstName}
            helperText={formik.errors.firstName}
          />
          <TextField
            name="lastName"
            id="outlined-basic"
            placeholder="Last Name"
            variant="outlined"
            onChange={formik.handleChange}
            error={formik.errors.lastName}
            helperText={formik.errors.lastName}
          />
          <TextField
            name="email"
            id="outlined-basic"
            placeholder="Email Address"
            variant="outlined"
            onChange={formik.handleChange}
            error={formik.errors.email}
            helperText={formik.errors.email}
          />
          <TextField
            name="password"
            id="outlined-basic"
            placeholder="Password"
            variant="outlined"
            onChange={formik.handleChange}
            error={formik.errors.password}
            helperText={formik.errors.password}
          />
          <Button
            type="submit"
            className="submit-button"
            sx={style}
            variant="contained"
          >
            Claim your free trail
          </Button>
          <p>
            By clicking the button, you are agreeing the{" "}
            <span className="terms">terms and services</span>
          </p>
        </form>
      </div>
    </div>
  );
}

export default App;

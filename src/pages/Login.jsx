import React, { useState } from "react";
import { useFormik } from "formik";
import signUpSchema from "../schemas";

const initialValues = {
  name: "",
  email: "",
  password: "",
};

const Login = () => {
  const [currentState, setCurrentState] = useState("SignUp");

  const { values, handleSubmit, touched, handleChange, errors, handleBlur } =
    useFormik({
      initialValues: initialValues,
      validationSchema: signUpSchema,
      onSubmit: (values, { resetForm }) => {
        console.log(values);
        resetForm();
      },
    });

  return (
    <form
      className="flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-grey-800"
      onSubmit={handleSubmit}
    >
      <div className="inline-flex items-center gap-2 mb-4 mt-10">
        <p className="prata-regular  text-3xl">{currentState}</p>
        <hr className="border-none h-[1.5px] w-16 bg-grey-800" />
      </div>
      {currentState === "LogIn" ? (
        ""
      ) : (
        <input
          type="text"
          className="w-full px-3 py-2 border border-grey-800 placeholder:text-grey-500"
          placeholder="Name"
          name="name"
          value={values.name}
          onChange={handleChange}
          onBlur={handleBlur}
        />
      )}
      {errors.name && touched.name ? (
        <p className="error-form text-red-500">{errors.name}</p>
      ) : null}
      <input
        type="email"
        className="w-full px-3 py-2 border border-grey-800 placeholder:text-grey-500"
        placeholder="Email"
        name="email"
        value={values.email}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      {errors.email && touched.email ? (
        <p className="error-form text-red-500">{errors.email}</p>
      ) : null}
      <input
        type="password"
        className="w-full px-3 py-2 border border-grey-800 placeholder:text-grey-500"
        placeholder="Password"
        name="password"
        value={values.password}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      {errors.password && touched.password ? (
        <p className="error-form text-red-500">{errors.password}</p>
      ) : null}
      <div className="w-full flex justify-between text-sm mt-[-8px]">
        <p className="cursor-pointer">Forgot your Password?</p>
        {currentState === "LogIn" ? (
          <p
            onClick={() => setCurrentState("Sign Up")}
            className="cursor-pointer"
          >
            Create account
          </p>
        ) : (
          <p
            onClick={() => setCurrentState("LogIn")}
            className="cursor-pointer"
          >
            LogIn Here
          </p>
        )}
      </div>
      <button
        className="bg-black text-white font-light px-8 py-2 mt-4"
        type="submit"
      >
        {currentState === "LogIn" ? "SignIn" : "SignUp"}
      </button>
    </form>
  );
};

export default Login;

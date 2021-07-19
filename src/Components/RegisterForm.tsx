import axios from "axios";
import { Formik, Form as FormikForm, useField } from "formik";
import PropTypes from "prop-types";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import * as yup from "yup";

import { Grid } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

import ShowPassword from "./ShowPassword";

const RegisterForm: React.FC<any> = (props) => {
  const history = useHistory();
  const handleAdd = (submitData: any, { resetForm }: any) => {
    // delete submitData.confirmPass;
    axios.post("http://localhost:8081/register", submitData).catch((error) => {
      console.log(error);
      toast.error(error);
    });
    console.log(submitData);
    history.push("/Login");
  };

  const initialValues = {
    email: "",
    name: "",
    surname: "",
    password: "",
    confirmPassword: "",
    adress: "",
  };

  const validationSchema = yup.object().shape({
    surname: yup.string().required("required").typeError("required"),
    name: yup.string().required("required").typeError("required"),
    email: yup.string().required("required").typeError("required"),
    password: yup
      .string()
      .required("Please enter your password")
      .min(6, "Password is too short - should be 6 chars minimum."),
    confirmPassword: yup
      .string()
      .required("Please confirm your password")
      .when("password", {
        is: (password: string | any[]) =>
          password && password.length > 0 ? true : false,
        then: yup
          .string()
          .oneOf([yup.ref("password")], "Password doesn't match"),
      }),
    adress: yup.string().notRequired().typeError(""),
  });

  const EmailTextField = () => {
    const [fieldTitle, { error: errorTitle, touched: touchedTitle }] =
      useField("email");
    const hasErrorTitle = Boolean(errorTitle) && touchedTitle;
    return (
      <TextField
        label="email"
        type="text"
        variant={"outlined"}
        error={hasErrorTitle}
        helperText={hasErrorTitle && errorTitle}
        fullWidth
        {...fieldTitle}
      />
    );
  };

  const ConfirmPassTextField = () => {
    const [fieldTitle, { error: errorTitle, touched: touchedTitle }] =
      useField("confirmPassword");
    const hasErrorTitle = Boolean(errorTitle) && touchedTitle;
    return (
      <TextField
        label="confirmPassword"
        type="text"
        variant={"outlined"}
        error={hasErrorTitle}
        helperText={hasErrorTitle && errorTitle}
        fullWidth
        {...fieldTitle}
      />
    );
  };

  const NameTextField = () => {
    const [fieldTitle, { error: errorTitle, touched: touchedTitle }] =
      useField("name");
    const hasErrorTitle = Boolean(errorTitle) && touchedTitle;
    return (
      <TextField
        label="name"
        type="text"
        variant={"outlined"}
        error={hasErrorTitle}
        helperText={hasErrorTitle && errorTitle}
        fullWidth
        {...fieldTitle}
      />
    );
  };

  const AdressTextField = () => {
    const [fieldTitle, { error: errorTitle, touched: touchedTitle }] =
      useField("adress");
    const hasErrorTitle = Boolean(errorTitle) && touchedTitle;
    return (
      <TextField
        label="adress"
        type="text"
        variant={"outlined"}
        error={hasErrorTitle}
        helperText={hasErrorTitle && errorTitle}
        fullWidth
        {...fieldTitle}
      />
    );
  };

  const SurNameTextField = () => {
    const [fieldTitle, { error: errorTitle, touched: touchedTitle }] =
      useField("surname");
    const hasErrorTitle = Boolean(errorTitle) && touchedTitle;
    return (
      <TextField
        label="surname"
        type="text"
        variant={"outlined"}
        error={hasErrorTitle}
        helperText={hasErrorTitle && errorTitle}
        fullWidth
        {...fieldTitle}
      />
    );
  };

  const PassTextField = () => {
    const [fieldBody, { error: errorBody, touched: touchedBody }] =
      useField("password");
    const hasErrorBody = Boolean(errorBody) && touchedBody;
    const [passwordType, setPasswordType] = useState<string>("password");
    return (
      <TextField
        size="small"
        label="Password"
        variant={"outlined"}
        type={passwordType}
        fullWidth
        error={hasErrorBody}
        helperText={hasErrorBody && errorBody}
        {...fieldBody}
        InputProps={{
          endAdornment: <ShowPassword setPasswordType={setPasswordType} />,
        }}
      />
    );
  };

  return (
    <div style={{ padding: "5rem 30rem 5rem 30rem", minWidth: "30%" }}>
      <Formik
        onSubmit={handleAdd}
        initialValues={initialValues}
        validationSchema={validationSchema}
      >
        {(formikBag) => {
          formikBag.isSubmitting && formikBag.setSubmitting(false);

          return (
            <FormikForm noValidate>
              <Grid
                container
                spacing={0}
                direction="column"
                alignItems="center"
                justifyContent="center"
              >
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <EmailTextField />
                  </Grid>
                  <Grid item xs={12}>
                    <NameTextField />
                  </Grid>
                  <Grid item xs={12}>
                    <SurNameTextField />
                  </Grid>
                  <Grid item xs={12}>
                    <PassTextField />
                  </Grid>
                  <Grid item xs={12}>
                    <ConfirmPassTextField />
                  </Grid>
                  <Grid item xs={12}>
                    <AdressTextField />
                  </Grid>
                  <Grid item xs={12}>
                    <Button
                      type={"submit"}
                      variant={"outlined"}
                      color="primary"
                    >
                      Register
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
            </FormikForm>
          );
        }}
      </Formik>
    </div>
  );
};

RegisterForm.propTypes = {
  addUserHandler: PropTypes.func.isRequired,
};

export default RegisterForm;

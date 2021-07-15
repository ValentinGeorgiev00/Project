import axios from "axios";
import { Formik, Form as FormikForm, useField } from "formik";
import PropTypes from "prop-types";
import React from "react";
import { toast } from "react-toastify";
import * as yup from "yup";

import { Grid } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

const LoginForm: React.FC<any> = (props) => {
  const handleAdd = (submitData: any, { resetForm }: any) => {
    console.log(submitData);
    axios
      .post("http://localhost:8081/login", submitData)

      .catch((error) => {
        toast.error(error);
      });
  };

  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = yup.object().shape({
    email: yup.string().required("required").typeError("required"),
    password: yup
      .string()
      .required("Please enter your password")
      .min(6, "Password is too short - should be 8 chars minimum."),
  });

  const TitleTextField = () => {
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

  const BodyTextField = () => {
    const [fieldBody, { error: errorBody, touched: touchedBody }] =
      useField("password");
    const hasErrorBody = Boolean(errorBody) && touchedBody;
    return (
      <TextField
        label="Password"
        variant={"outlined"}
        type="text"
        fullWidth
        error={hasErrorBody}
        helperText={hasErrorBody && errorBody}
        {...fieldBody}
      />
    );
  };

  return (
    <div>
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
                spacing={1}
                direction="column"
                alignItems="center"
                justifyContent="center"
                style={{ minHeight: "50vh" }}
              >
                <Grid item xs={12}>
                  <TitleTextField />
                </Grid>
                <Grid item xs={12}>
                  <BodyTextField />
                </Grid>
                <Grid item xs={12}>
                  <Button type={"submit"} variant={"outlined"} color="primary">
                    Login
                  </Button>
                </Grid>
              </Grid>
            </FormikForm>
          );
        }}
      </Formik>
    </div>
  );
};

LoginForm.propTypes = {
  addUserHandler: PropTypes.func.isRequired,
};

export default LoginForm;

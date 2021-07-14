import React, { useEffect, useState } from "react";

import { IconButton, InputAdornment } from "@material-ui/core";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";

interface Props {
  setPasswordType?: any;
  setConfirmPasswordType?: any;
}

const ShowPassword: React.FC<Props> = ({
  setPasswordType,
  setConfirmPasswordType,
}) => {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  useEffect(() => {
    if (setPasswordType) {
      showPassword ? setPasswordType("text") : setPasswordType("password");
    }

    if (setConfirmPasswordType) {
      showPassword
        ? setConfirmPasswordType("text")
        : setConfirmPasswordType("password");
    }
  }, [setConfirmPasswordType, setPasswordType, showPassword]);

  return (
    <InputAdornment position="end">
      <IconButton size="small" onClick={() => setShowPassword(!showPassword)}>
        {showPassword ? (
          <Visibility style={{ fontSize: 23 }} />
        ) : (
          <VisibilityOff style={{ fontSize: 23 }} />
        )}
      </IconButton>
    </InputAdornment>
  );
};

export default ShowPassword;

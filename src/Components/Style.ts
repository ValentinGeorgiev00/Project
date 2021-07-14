import { makeStyles } from '@material-ui/core';

export default makeStyles({
  nav: {
  width: "100%",
  display: "flex",
  justifyContent: "space-around",
  alignItems: "center",
  minHeight: "10vh",
  background: "green",
    color: "white",
    height: "100%",
    border: "solid Black",
   
   
},

  navLinks: {
    height:"100%",
    width: "100%",
  background: "green",
    color: "white",
    textDecoration: "none",
  
  display: "flex",
  justifyContent: "space-around",
  alignItems: "center",
  listStyle: "none",
    },
  Navstyle: {
background: "green",
    color: "white",
    
    textDecoration: "none",
    "&:focus": { color: "purple" },
    },
  center: {
    
    height: "100%",
  width: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  textAlign: "center",
  },
})
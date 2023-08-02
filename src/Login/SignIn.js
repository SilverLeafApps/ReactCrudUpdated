import React, { useState } from 'react';
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

import {toast } from 'react-toastify';
import {useNavigate } from "react-router-dom";
//import swal from 'sweetalert';
//import cors from 'cors';



export default function SignIn() {

  const [username, setUserName] = useState();
  const [password, setPassword] = useState();

  const navigate = useNavigate();


   const handleSubmit = async event => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    const credentials={username,password};
    console.log(credentials);

   /*  const response = await loginUser({
       username,
       password
    }); */

    fetch("https://64c677800a25021fde91ac9a.mockapi.io/login",{
      method:"POST",
      headers:{"content-type":"application/json"},
      body:JSON.stringify(credentials)
    }).then((res)=>{
      //alert('Saved successfully.')
      //if ('accessToken' in res) {
      console.log('response')
      console.log(res)
      toast.success("Created successfully", {position: toast.POSITION.TOP_RIGHT, icon: "👍"});
      navigate('/');
      
    }).catch((err)=>{
      console.log(err.message)
    }) 

  };

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            onChange={e => setUserName(e.target.value)}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            onChange={e => setPassword(e.target.value)}
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="/signup" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}
//https://www.copycat.dev/blog/material-ui-form/

import React, { useState } from 'react';
import { TextField, Button, Container, Stack } from '@mui/material';
import { Link } from "react-router-dom"
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";


const SignUp = () => {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [dateOfBirth, setDateOfBirth] = useState('')
    const [password, setPassword] = useState('')

    function handleSubmit(event) {
        event.preventDefault();
        console.log(firstName, lastName, email, dateOfBirth, password)
    }

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
                    SignUp Form
                </Typography>
                <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                    <form onSubmit={handleSubmit} action={<Link to="/login" />}>
                        <Stack spacing={2} direction="row" sx={{ marginBottom: 4 }}>
                            <TextField
                                type="text"
                                variant='outlined'
                                color='secondary'
                                label="First Name"
                                onChange={e => setFirstName(e.target.value)}
                                value={firstName}
                                fullWidth
                                required
                            />
                            <TextField
                                type="text"
                                variant='outlined'
                                color='secondary'
                                label="Last Name"
                                onChange={e => setLastName(e.target.value)}
                                value={lastName}
                                fullWidth
                                required
                            />
                        </Stack>
                        <TextField
                            type="email"
                            variant='outlined'
                            color='secondary'
                            label="Email"
                            onChange={e => setEmail(e.target.value)}
                            value={email}
                            fullWidth
                            required
                            sx={{ mb: 4 }}
                        />
                        <TextField
                            type="password"
                            variant='outlined'
                            color='secondary'
                            label="Password"
                            onChange={e => setPassword(e.target.value)}
                            value={password}
                            required
                            fullWidth
                            sx={{ mb: 4 }}
                        />
                        <TextField
                            type="date"
                            variant='outlined'
                            color='secondary'
                            label="Date of Birth"
                            onChange={e => setDateOfBirth(e.target.value)}
                            value={dateOfBirth}
                            fullWidth
                            required
                            sx={{ mb: 4 }}
                        />
                        <Button type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >Register</Button>
                        <Link to="/login" variant="body2">
                            {"Do have an account? Sign In"}
                        </Link>
                    </form>



                </Box>
            </Box>
        </Container>
    )
}

export default SignUp;
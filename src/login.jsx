import React, { useState } from 'react';
import { Button, TextField, Grid, Paper, AppBar, Typography, Toolbar } from '@material-ui/core';

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = (event) => {
        event.preventDefault();
        // Handle login logic here
    }

    return (
        <Grid container spacing={0} justify="center" direction="row">
            <Grid item>
                <Grid
                    container
                    direction="column"
                    justify="center"
                    spacing={2}
                    className="login-form"
                >
                    <Paper
                        variant="elevation"
                        elevation={2}
                        className="login-background"
                    >
                        <Grid item>
                            <Typography component="h1" variant="h5">
                                Sign in
                            </Typography>
                        </Grid>
                        <Grid item>
                            <form onSubmit={handleLogin}>
                                <Grid container direction="column" spacing={2}>
                                    <Grid item>
                                        <TextField
                                            type="email"
                                            placeholder="Email"
                                            fullWidth
                                            name="username"
                                            variant="outlined"
                                            value={username}
                                            onChange={(event) => setUsername(event.target.value)}
                                            required
                                            autoFocus
                                        />
                                    </Grid>
                                    <Grid item>
                                        <TextField
                                            type="password"
                                            placeholder="Password"
                                            fullWidth
                                            name="password"
                                            variant="outlined"
                                            value={password}
                                            onChange={(event) => setPassword(event.target.value)}
                                            required
                                        />
                                    </Grid>
                                    <Grid item>
                                        <Button
                                            variant="contained"
                                            color="primary"
                                            type="submit"
                                            className="button-block"
                                        >
                                            Submit
                                        </Button>
                                    </Grid>
                                </Grid>
                            </form>
                        </Grid>
                    </Paper>
                </Grid>
            </Grid>
        </Grid>
    );
}

export default Login;
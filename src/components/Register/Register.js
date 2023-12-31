import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

import { Navigate, useNavigate } from "react-router-dom";
import Typography from "@mui/material/Typography";

import Container from "@mui/material/Container";

export default function SignIn() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
      Firstname: data.get("firstname"),
      Firstname: data.get("Lastname"),
      conformpassword : data.get("conformpassword"),
    });
  };
  const navigate = useNavigate();

  return (
    <Container component="main" maxWidth="sm">
      <Box
        sx={{
          boxShadow: 3,
          borderRadius: 2,
          px: 4,
          py: 6,
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography component="h1"fontSize="30px" variant="h5">
          Sign Up
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
        <TextField
            margin="normal"
            required
            fullWidth
            id="Fisrt Name"
            label="Fisrt Name"
            name="Fisrt Name"
            autoComplete="Fisrt Name"
            autoFocus
            aria-required
          /><TextField
          margin="normal"
          required
          fullWidth
          id="Last Name"
          label="Last Name"
          name="Last Name"
          autoComplete="last Name"
          autoFocus
        />
    
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
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
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="conform password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          {/* <Button
            type="submit"
            fullWidth
            variant="contained"
            
            sx={{ mt: 3, mb: 2 }}
          >
            {/* <li className='nav-item'> */}
              {/* <Link to = "home" className='nav-link text-uppercase text-white fs-22 fw-6 ls-1'> Home</Link>
            </li>  
           
          </Button>  */}


<button
                                className="loginButton"
                                style={{ marginTop: "90px", width:"300px"}}
                                onClick={() => {
                                    navigate("/Login");
                                }}
                            >
                                Submit
                            </button>

          <Grid container>
            <Grid item xs>
              <Link href="Login" variant="body2">
                Login
              </Link>
            </Grid>
            <Grid item>
              {/* <Link href="#" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link> */}
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}
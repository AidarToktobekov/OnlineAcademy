"use client";
import { AppBar, Container, Link, Toolbar } from '@mui/material';
import Grid from '@mui/material/Grid2';
import dynamic from "next/dynamic";
const AppToolbar = dynamic(() => Promise.resolve(Navbar), { ssr: false });
const Navbar = ()=>{

  return(
    <>
      <AppBar position={"sticky"}>
        <Toolbar>
          <Container maxWidth={'lg'}>
            <Grid
              container
              alignItems={'center'}
              justifyContent={'space-between'}
              sx={{
                width: '100%',
              }}
            >
              <Link href={"/"} sx={{
                color: "#fff",
              }}>
                Online Academy
              </Link>

              <Link href={"/login"} sx={{
                color: "#fff",
              }}>
                Sign in
              </Link>
            </Grid>
          </Container>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default AppToolbar;
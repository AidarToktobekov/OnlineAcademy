import { AppBar, Container, Link, Toolbar } from '@mui/material';
import Grid from '@mui/material/Grid2';

const AppToolbar = ()=>{
  return(
    <>
      <AppBar position={"sticky"} color={'inherit'}>
        <Toolbar>
          <Container maxWidth={'lg'}>
            <Grid
              container
              alignItems={'center'}
              justifyContent={'center'}
            >
              <Link href={"/"}>
                Online Academy
              </Link>

              <Link href={"/login"}>
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
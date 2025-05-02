import { ChangeEvent, FC, FormEvent, SetStateAction } from 'react';
import Grid from '@mui/material/Grid2';
import { Button, TextField } from '@mui/material';
import { UserLogin } from '@/types/userTypes';

interface Props {
  onSubmit: ((user: UserLogin)=>void);
  state: UserLogin;
  setState: (value: (SetStateAction<UserLogin>)) => void;
}

const LoginForm: FC<Props> = (
  {
    onSubmit,
    state,
    setState
  }
) =>{

  const inputChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setState(prev=>({ ...prev, [e.target.name]: e.target.value }));
  }

  const submitFormHandler = (event: FormEvent) => {
    event.preventDefault();
    onSubmit(state);
  }

  return(
    <>
      <Grid component={"form"} onSubmit={submitFormHandler}>
        <Grid container flexDirection={'column'} gap={1}>
            <TextField label="Email" variant="outlined" name={"email"} onChange={inputChangeHandler} sx={{
              width: '100%',
            }}/>
            <TextField label="Password" variant="outlined" name={"password"} onChange={inputChangeHandler} sx={{
              width: '100%',
            }}/>
            <Button type={"submit"} variant={"contained"} sx={{
              width: '100%',
            }}>
              Save
            </Button>
        </Grid>
      </Grid>
    </>
  );
};

export default LoginForm;
import { ChangeEvent, FC, FormEvent, SetStateAction } from 'react';
import Grid from '@mui/material/Grid2';
import { Alert, Button, TextField } from '@mui/material';
import { UserMutation } from '@/types/userTypes';
import { useAppSelector } from '@/redux/hooks';
import { selectRegisterError } from '@/redux/slices/userSlice';

interface Props {
  onSubmit: ((user: UserMutation)=>void);
  state: UserMutation;
  setState: (value: (SetStateAction<UserMutation>)) => void;
}

const RegisterForm: FC<Props> = (
  {
    onSubmit,
    state,
    setState
  }
) =>{

  const error = useAppSelector(selectRegisterError);
  if (error){
    console.log(error);
  }

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
          {error ? (
            <Alert severity={"error"}>
              {error.message}
            </Alert>
          ): null }
          <Grid>
            <TextField label="Username" variant="outlined" name={"username"} onChange={inputChangeHandler}/>
          </Grid>
          <Grid>
            <TextField label="Email" variant="outlined" name={"email"} onChange={inputChangeHandler}/>
          </Grid>
          <Grid>
            <TextField label="Password" variant="outlined" name={"password"} type={"password"} onChange={inputChangeHandler}/>
          </Grid>
          <Grid>
            <TextField label="Confirm password" variant="outlined" name={"confirmPassword"} type={"password"} onChange={inputChangeHandler}/>
          </Grid>
          <Grid>
            <Button type={"submit"}>
              Save
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default RegisterForm;
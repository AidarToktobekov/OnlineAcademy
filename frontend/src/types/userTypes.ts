export interface UserProfile {
  _id: string;
  username: string;
  email: string;
  token: string;
}

export interface UserLogin {
  email: string;
  password: string;
}

export interface UserMutation {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export interface ValidationError {
  errors?: {
    [key: string]: {
      name: string;
      message: string;
    };
  };
  message: string;
  name?: string;
  _name?: string;
}

export interface GlobalError {
  error: string;
}


export interface AllUsers {
  id: string;
  username: string;
  isActive: boolean;
  password: string;
}

export interface UserFind {
  id: string;
  username: string;
  isActive: boolean;
  profile:{
    id:string;
    firstName:string;
    lastName:string;
  };
  role:{
    id:string;
    label:string;
  }
};

export interface UserTable {
  id: string;
  name: string;
  email: string;
  role: string;
  status: string;
  joined: string;
  update: string;
};
export const users = [
  {
    id: "1",
    name: "Arham Khan",
    username: "Aarhamkhnz",
    email: "hello@arhamkhnz.com",
    avatar: "https://avatars.githubusercontent.com/u/43849669",
    role: "administrator",
  },
];
export type Roles ={
  id:string;
  name:string;
  description:string;
  permissions:string[];
}
export const AllRoles:Roles[] =[
  {
    id: "1",
    name: "Admin",
    description: "Full system access",
    permissions: ["Users create", "Users find", "Order register"],
  },
  {
    id: "2",
    name: "Editor",
    description: "Can edit content",
    permissions: ["Users find", "Order register"],
  },
  {
    id: "3",
    name: "Viewer",
    description: "Read-only access",
    permissions: ["Users find"],
  },
];
// export const permissions:string[] =["add user","edit user","block user"]

export const permissions =[
  {
    id:"656",
    title:"Users create",
    accesses:["add user","edit user","block user"]
  },
  {
    id:"898",
    title:"Users find",
    accesses:["Find by name"]
  },
  {
    id:"789",
    title:"Order register",
    accesses:["edit order","add order","delete order"]
  }
]
export const rootUser = users[0];

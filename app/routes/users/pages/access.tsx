import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "~/components/ui/card";
import { Label } from "~/components/ui/label";
import { Input } from "~/components/ui/input";
import { Button } from "~/components/ui/button";
import {  type ContextType } from "./details";
import { useState } from "react";
import { useOutletContext } from "react-router";
export default function UserProfile() {
  const { user } = useOutletContext<ContextType>();
  const permissions:string[] =["Add user","Remove user","Change setting"]
  const [formData, setFormData] = useState({
    role: user.role || "",
    status: user.status || "",
  });
  const handleRemove = () => {};
  const handleChange = () => {};
  return (
    <div className="space-y-6 max-w-3xl">
      <Card>
        <CardHeader>
          <CardTitle>Edit user access</CardTitle>
          <CardDescription>
            Plan, account status and permissions.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid gap-2">
            <Label htmlFor="plan">Role</Label>
            <Input
              id="plan"
              name="plan"
              value={formData.role}
              onChange={handleChange}
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="status">Account status</Label>
            <Input
              id="status"
              name="status"
              value={formData.status}
              onChange={handleChange}
            />
          </div>
          <div className="grid gap-2">
            <Label >Permissions</Label>
           {permissions.map((item)=>(
            <div className="flex">
             <Label >
              <Input type="checkbox" onChange={handleChange} className="size-5"/>
              {item}
             </Label>
           </div>
           ))}
          </div>
        </CardContent>
        <CardFooter>
          <Button
            variant="destructive"
            onClick={handleRemove}
            className="bg-red-600 hover:bg-red-700 text-black"
          >
            Block user
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import { Input } from "~/components/ui/input";
import { Button } from "~/components/ui/button";
import { Label } from "~/components/ui/label";
import { useNavigate, useOutletContext } from "react-router";
import {  type ContextType } from "./details";
import { useState } from "react";
export default function UserProfile() {
  const navigate = useNavigate();
  const { user } = useOutletContext<ContextType>();

  const [formData, setFormData] = useState({
    name: user.name || "",
    email: user.email || "",
    phone: user.phone || "09123456789",
  });

  const handleChange = () => {};

  const handleSave = () => {};
  return (
    <div className="space-y-6 max-w-3xl">
      <Card>
        <CardHeader>
          <CardTitle>Personal Information</CardTitle>
          <CardDescription>Update name, email, role and phone.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid gap-2">
            <Label htmlFor="name">First name</Label>
            <Input
              id="name"
              name="name"
              value={formData.name.split(" ")[0]}
              onChange={handleChange}
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="name">Last name</Label>
            <Input
              id="name"
              name="name"
              value={formData.name.split(" ")[1]}
              onChange={handleChange}
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="phone">Phone number</Label>
            <Input
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              dir="ltr"
            />
          </div>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button onClick={handleSave}>Save changes</Button>
          <Button variant="outline" onClick={() => navigate("/users")}>
            Back
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}

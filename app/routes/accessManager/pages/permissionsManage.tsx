import { permissions } from "~/data/users";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import { Label } from "~/components/ui/label";
import { Input } from "~/components/ui/input";
import { Button } from "~/components/ui/button";
import { Plus } from "lucide-react";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "~/components/ui/accordion";
import { Checkbox } from "~/components/ui/checkbox";
import { Outlet, useNavigate } from "react-router";

export default function PermissionsManage() {
  const navigate = useNavigate();
  return (
    <div className="space-y-6 max-w-5xl mx-auto p-4">
      <Card>
        <CardHeader>
          <CardTitle>Manage permissions</CardTitle>
          <CardDescription>edit permissions</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex justify-between items-center mb-6 gap-4">
            <Button
              onClick={() => {
                navigate("/access/permissionsmanager/addpermission");
              }}
            >
              + Add Permissions
            </Button>
          </div>
          <Accordion type="multiple" className="w-full">
            {permissions.map((group, index) => (
              <AccordionItem key={group.title} value={`item-${index}`}>
                <AccordionTrigger className="hover:no-underline gap-2">
                  <div>{group.title}</div>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-2 pl-2 pt-2">
                    {group.accesses.map((perm) => (
                      <div key={perm} className="flex items-center space-x-2">
                        <Checkbox id={perm} />
                        <Label
                          htmlFor={perm}
                          className="text-sm font-normal cursor-pointer"
                        >
                          {perm}
                        </Label>
                      </div>
                    ))}
                  </div>
                </AccordionContent>
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() =>
                      navigate(`/access/permissionsmanager/${group.id}`)
                    }
                  >
                    Edit
                  </Button>
                  <Button variant="destructive" size="sm">
                    Delete
                  </Button>
                </div>
              </AccordionItem>
            ))}
          </Accordion>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button>Save changes</Button>
        </CardFooter>
      </Card>
      <Outlet />
    </div>
  );
}

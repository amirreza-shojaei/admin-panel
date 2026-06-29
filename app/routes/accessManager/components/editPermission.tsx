import { useNavigate, useParams } from "react-router";
import { Button } from "~/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "~/components/ui/dialog";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "~/components/ui/accordion";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";
import { Checkbox } from "~/components/ui/checkbox";
import { permissions } from "~/data/users";

export default function EditPermission() {
  const navigate = useNavigate();
  const { id } = useParams();
  const permission = permissions.find((p) => p.id === id);

  if (!permission) throw new Response("Not Found", { status: 404 });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // TODO: Update permission

    navigate("/access/permissionsmanager");
  };

  return (
    <Dialog
      open
      onOpenChange={() => navigate("/access/permissionsmanager")}
    >
      <DialogContent className="max-w-lg">
        <DialogHeader>
          <DialogTitle>Edit {permission.title}</DialogTitle>
          <DialogDescription>
            Edit permission information
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6">
           <div className="grid gap-2">
            <Label htmlFor="roleName">Permission title</Label>
            <Input
              id="roleName"
              value={permission.title}
              placeholder="Role name"
              required
            />
          </div>

          <div className="grid gap-2">
            <Label className="text-base ">Edit permissions</Label>

            <Accordion type="multiple" className="w-full">
              {permissions.map((group, index) => (
                <AccordionItem
                  key={group.title}
                  value={`item-${index}`}
                >
                  <AccordionTrigger>
                    {group.title}
                  </AccordionTrigger>

                  <AccordionContent>
                    <div className="space-y-2 pt-2 pl-2">
                      {group.accesses.map((perm) => (
                        <div
                          key={perm}
                          className="flex items-center space-x-2"
                        >
                          <Checkbox id={perm} checked />

                          <Label
                            htmlFor={perm}
                            className="cursor-pointer font-normal text-sm"
                          >
                            {perm}
                          </Label>
                        </div>
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
          <DialogFooter>
            <Button
              type="button"
              variant="outline"
              onClick={() => navigate("/access/permissionsmanager")}
            >
              Cancel
            </Button>

            <Button type="submit">
              Save
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
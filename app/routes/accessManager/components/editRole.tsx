import { useNavigate, useParams } from "react-router";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";
import { Checkbox } from "~/components/ui/checkbox";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "~/components/ui/accordion";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "~/components/ui/dialog";

import { AllRoles, permissions } from "~/data/users";

export default function EditRole() {
  const navigate = useNavigate();
  const { id } = useParams();
  const role = AllRoles.find((u) => u.id === id);

  if (!role) throw new Response("Not Found", { status: 404 });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // TODO: Update role

    navigate("/access/rolemanager");
  };

  return (
    <Dialog open onOpenChange={() => navigate("/access/rolemanager")}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Edit {role.name}</DialogTitle>
          <DialogDescription>
            Edit role information
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid gap-2">
            <Label htmlFor="roleName">Role Name</Label>
            <Input
              id="roleName"
              value={role.name}
              placeholder="Role name"
              required
            />
          </div>

          <div className="grid gap-2">
            <Label htmlFor="description">Description</Label>
            <Input
              id="description"
              value={role.description}
              placeholder="Description"
            />
          </div>

          <div className="grid gap-2">
            <Label className="text-base">Select permissions</Label>

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
                          <Checkbox id={perm} />

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
              onClick={() => navigate("/access/rolemanager")}
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
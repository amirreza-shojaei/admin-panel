import { useState } from "react";
import { useNavigate } from "react-router";
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
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "~/components/ui/dialog";
import { permissions } from "~/data/users";

export default function AddRole() {
  const navigate = useNavigate();

  const [roleName, setRoleName] = useState("");
  const [description, setDescription] = useState("");
  const [selectedPermissions, setSelectedPermissions] = useState<string[]>([]);

  const handlePermissionChange = (permission: string, checked: boolean) => {
    if (checked) {
      setSelectedPermissions((prev) => [...prev, permission]);
    } else {
      setSelectedPermissions((prev) =>
        prev.filter((p) => p !== permission)
      );
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // TODO: API Call

    navigate("/access/rolemanager");
  };

  return (
    <Dialog open onOpenChange={() => navigate("/access/rolemanager")}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Add role</DialogTitle>
          <DialogDescription>
            Add new role with specific permissions
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid gap-2">
            <Label htmlFor="roleName">Role Name</Label>
            <Input
              id="roleName"
              placeholder="e.g. Content Manager"
              value={roleName}
              onChange={(e) => setRoleName(e.target.value)}
              required
            />
          </div>

          <div className="grid gap-2">
            <Label htmlFor="description">Description</Label>
            <Input
              id="description"
              placeholder="Brief description of the role"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
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
                          <Checkbox
                            id={perm}
                            checked={selectedPermissions.includes(perm)}
                            onCheckedChange={(checked) =>
                              handlePermissionChange(
                                perm,
                                checked === true
                              )
                            }
                          />

                          <Label
                            htmlFor={perm}
                            className="cursor-pointer font-normal"
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
              Create role
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
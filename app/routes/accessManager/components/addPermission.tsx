import { useState } from "react";
import { useNavigate } from "react-router";
import { Button } from "~/components/ui/button";
import { Label } from "~/components/ui/label";
import { Input } from "~/components/ui/input";
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

import { permissions } from "~/data/users";

export default function AddPermission() {
  const navigate = useNavigate();

  const [permissionTitle, setPermissionTitle] = useState("");
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

    navigate("/access/permissionsmanager");
  };

  return (
    <Dialog
      open
      onOpenChange={() => navigate("/access/permissionsmanager")}
    >
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Add permission</DialogTitle>
          <DialogDescription>
            Add new permission with access
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid gap-2">
            <Label htmlFor="permissionTitle">Permission title</Label>
            <Input
              id="permissionTitle"
              placeholder="e.g. User Management"
              value={permissionTitle}
              onChange={(e) => setPermissionTitle(e.target.value)}
              required
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
              onClick={() => navigate("/access/permissionsmanager")}
            >
              Cancel
            </Button>

            <Button type="submit">
              Create permission
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
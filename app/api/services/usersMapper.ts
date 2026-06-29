import type { AllUsers, UserTable, UserFind } from "./types";

export function mapUser(user: AllUsers): UserTable {
  return {
    id: user.id,
    name: `${user.username}`,
    email: "-",
    role: user.username,
    status: user.isActive ? "Subscribed" : "Inactive",
    joined: "2026-04-30",
    update:"2026-05-05"
  };
};

export function mapUserF(user: UserFind): UserTable {
  return {
    id: user.id,
    name: `${user.profile.firstName} ${user.profile.lastName}`,
    email: "",
    role: user.role.label,
    status: user.isActive ? "Subscribed" : "Inactive",
    joined: "2026-04-30",
    update:"2026-05-05"
  };
};

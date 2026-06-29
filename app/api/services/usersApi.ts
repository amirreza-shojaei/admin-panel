import { api } from "../api";
import type { AllUsers, UserFind, UserTable } from "./types";
import { mapUser, mapUserF } from "./usersMapper";

export async function findAllUsers(): Promise<UserTable[]> {
  const usersApi = await api<AllUsers[]>("/users", {
    method: "GET",
  });

  if (!usersApi) return [];

  return usersApi.map(mapUser);
}

export async function findById(id: string): Promise<UserTable> {
  const user = await api<UserFind>(`/users/${id}/find`, {
    method: "GET",
  });

  if (!user) {
    throw new Error("User not found");
  }

  return mapUserF(user);
}

export async function deleteUser(id: string) {
  return api(`/users/${id}/find`, {
    method: "DELETE",
  });
}
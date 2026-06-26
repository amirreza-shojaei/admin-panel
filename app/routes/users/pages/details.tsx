import { useState, useContext, createContext } from "react";
import { Outlet, useLocation, Navigate, useParams } from "react-router";
import { Header } from "~/components/pagesHeader";
import { ProfileBreadcrumb } from "~/components/pagesBreadCrumb";
import { Button } from "~/components/ui/button";
import { Menu } from "lucide-react";
import userData from "../components/data.json";
import {User,Key} from"lucide-react";
import { PageSidebar } from "~/components/pagesSidebar";

export interface UserProfileInfo {
  id: string;
  name: string;
  email: string;
  role: string;
  status: string;
  billing: string;
  joined: string;
  update:string
  phone?: string;
  lastLogin?: string;
}

export type ContextType = {
  user: UserProfileInfo;
};

export default function UserProfile() {
  const { id } = useParams();
  const user = userData.find((u) => u.id === id);
  if (!user) throw new Response("Not Found", { status: 404 });
  const [sidebarOpen, setSidebarOpen] = useState(false);
const sidebarItems = [
  {
    title: "Setting",
    items: [
      {
        label: "User profile",
        icon: User,
        url:`/users/${id}/profile`
      },
      {
        label: "Access management",
        icon: Key,
        url:`/users/${id}/access`
      },
    ],
  },
];
  return (
    <div className="flex flex-col h-full overflow-hidden">
      <Header
        props={{
          title: `${user.name}`,
          description: `ID: #${user.id} • Joined ${new Date(user.joined).toLocaleDateString()}`,
          action: <ProfileBreadcrumb />,
        }}
      />
      <div className="md:hidden flex items-center gap-2  px-4 py-3 sticky top-0 bg-background z-30">
        <Button
          size="icon"
          variant="outline"
          onClick={() => setSidebarOpen(true)}
        >
          <Menu className="h-5 w-5" />
        </Button>
      </div>

      <div className="flex flex-1 overflow-hidden relative">
        {sidebarOpen && (
          <div
            className="fixed inset-0 bg-black/40 z-40 md:hidden"
            onClick={() => setSidebarOpen(false)}
          />
        )}

        <div
          className={`
            fixed md:static top-0 left-0 z-50 h-full
            transform transition-transform duration-300
            ${
              sidebarOpen
                ? "translate-x-0"
                : "-translate-x-full md:translate-x-0"
            }
          `}
        >
          <PageSidebar onClose={() => setSidebarOpen(false)} sidebarItems={sidebarItems} />
        </div>
        <main className="flex-1 overflow-auto p-4 md:p-6 w-full">
          <Outlet context={{ user } satisfies ContextType} />
          <Navigate to="profile" replace />
        </main>
      </div>
    </div>
  );
}

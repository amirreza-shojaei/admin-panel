import {
  type RouteConfig,
  route,
  layout,
  prefix,
  index,
} from "@react-router/dev/routes";

export default [
  // redirect to /dashboard/default
  index("routes/index.tsx"),

  layout("layouts/main/index.tsx", [
    ...prefix("dashboard", [
      route("default", "routes/dashboard/default/index.tsx"),
      route("crm", "routes/dashboard/crm/index.tsx"),
      route("finance", "routes/dashboard/finance/index.tsx"),
      route("analytics", "routes/dashboard/analytics/index.tsx"),
      route("productivity", "routes/dashboard/productivity/index.tsx"),
    ]),

    ...prefix("users", [
      index("routes/users/index.tsx"),
      route("/:id", "routes/users/pages/details.tsx", [
        route("profile", "routes/users/pages/profile.tsx"),
        route("access", "routes/users/pages/access.tsx"),
      ]),
    ]),

    ...prefix("settings", [index("routes/settings/index.tsx")]),

    route("profile", "routes/profile/index.tsx", [
      route("account", "routes/profile/pages/account.tsx"),
      route("password", "routes/profile/pages/password.tsx"),
    ]),

    
    route("access", "routes/accessManager/index.tsx", [
      route("rolemanager", "routes/accessManager/pages/roleManager.tsx", [
        route("addrole", "routes/accessManager/components/addRole.tsx"),
        route(":id", "routes/accessManager/components/editRole.tsx"),
      ]),
      route(
        "permissionsmanager",
        "routes/accessManager/pages/permissionsManage.tsx",
        [
          route(
            "addpermission",
            "routes/accessManager/components/addPermission.tsx",
          ),
          route(":id", "routes/accessManager/components/editPermission.tsx"),
        ],
      ),
      route(
        "websitepermissions",
        "routes/accessManager/pages/websitepermissions.tsx",
      ),
    ]),
  ]),
] satisfies RouteConfig;

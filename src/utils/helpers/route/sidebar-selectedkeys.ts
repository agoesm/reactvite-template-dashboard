import { path } from "./path";

const ROUTE_MAPPING: Record<string, string> = {
  // Dashboard
  [path.MAIN.DASHBOARD]: path.MAIN.DASHBOARD,

  // Users routes - all point to /users menu
  [path.MAIN.USERS_MANAGEMENT.BASE]: path.MAIN.USERS_MANAGEMENT.BASE,
  [path.MAIN.USERS_MANAGEMENT.ADD_USER]: path.MAIN.USERS_MANAGEMENT.BASE,
  [path.MAIN.USERS_MANAGEMENT.EDIT_USER]: path.MAIN.USERS_MANAGEMENT.BASE,
  [path.MAIN.USERS_MANAGEMENT.DETAIL_USER]: path.MAIN.USERS_MANAGEMENT.BASE,
};

export const getSelectedKeys = (pathname: string) => {
  const cleanPath = pathname.split("?")[0].split("#")[0];

  const matchedKey = Object.keys(ROUTE_MAPPING).find((key) =>
    cleanPath.startsWith(key)
  );

  return matchedKey ? ROUTE_MAPPING[matchedKey] : cleanPath;
};

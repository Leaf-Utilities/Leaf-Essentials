import { prismarineDb } from "./lib/prismarinedb";

export const sidebarConfig = prismarineDb.table("SidebarConfig").keyval();
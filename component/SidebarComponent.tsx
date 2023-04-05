import Link from "next/link";
import React from "react";
import { Sidebar, Menu, MenuItem, useProSidebar, sidebarClasses } from "react-pro-sidebar";

export default function SidebarComponent() {
  return (
    <Sidebar
      rootStyles={
        {
          // [`.${sidebarClasses.container}`]: {
          //   backgroundColor: "black",
          // },
        }
      }
    >
      <Menu
        menuItemStyles={{
          button: ({ level, active, disabled }) => {
            // only apply styles on first level elements of the tree
            if (level === 0)
              return {
                color: disabled ? "#f5d9ff" : "#000000",
                backgroundColor: active ? "black" : undefined,
              };
          },
        }}
      >
        <MenuItem>
          {" "}
          <Link href="/">Dashboard</Link>{" "}
        </MenuItem>
        <MenuItem> Users</MenuItem>
        <MenuItem> Information</MenuItem>
      </Menu>
    </Sidebar>
  );
}

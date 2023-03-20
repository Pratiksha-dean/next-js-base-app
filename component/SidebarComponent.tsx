import React from 'react'
import { Sidebar, Menu, MenuItem, useProSidebar } from "react-pro-sidebar";


export default function SidebarComponent() {
  return (
    <Sidebar>
      <Menu>
        <MenuItem> Documentation</MenuItem>
        <MenuItem> Calendar</MenuItem>
        <MenuItem> E-commerce</MenuItem>
      </Menu>
    </Sidebar>
  );
}

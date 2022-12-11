import React, { useState } from "react";
import items from "../../data/sidebarAdmin.json";
import SidebarAdminItems from "./SidebarAdminItems";
import "./sidebarAdmin.css";
import { GiHamburgerMenu } from "react-icons/gi";

export default function Menu() {
  const [show, setShow] = useState(false);
  return (
    <div className={show?"main2" : "main"}>
      <div className="sidebar-mobile">
        <a href="#" onClick={() => setShow(!show)}>
          <GiHamburgerMenu fill ="white"/>
        </a>
      </div>
      <div className={show ? "sidebar-view" : "sidebar"}>
        {items.map((item, index) => (
          <SidebarAdminItems key={index} item={item} />
        ))}
      </div>
    </div>
  );
}

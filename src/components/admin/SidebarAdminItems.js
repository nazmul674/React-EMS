import React from 'react'
import { Routes, Route } from "react-router-dom";
import * as Icon from 'react-bootstrap-icons';
import './sidebarAdmin.css'
import { useState } from 'react';
import { Link } from 'react-router-dom'
// import Dashboard from '../../pages/dashboard';
// import Equipments from '../../pages/equipments';
// import Cabinets from '../../pages/cabinets';
// import { preventOverflow } from '@popperjs/core';

export default function SidebarAdminItems({item}) {
  const [open, setOpen] = useState(false);

  if (item.childrens){
    return (
      <div className={open ? "sidebar-item open" : "sidebar-item"}>
          <div className='sidebar-title'>
              <span>
                  {/* <Icon.Speedometer viewBox="0 0 16 20"/> */}
                  {item.icon && <i className={item.icon}></i>}
                  <h1 className='sidebar-name'>
                    {item.title}
                  </h1>
              </span>
              <Icon.ChevronDown className='toggle-btn' onClick={() => setOpen(!open)}/>
          </div>
          <div className='sidebar-content'>
            {item.childrens.map((child, index)=><SidebarAdminItems key={index} item={child}/>)}
          </div>
      </div>
    )
  }
  else{
    return (
          <Link to={item.path || "#"} className='sidebar-title plain'>
              <span>
                  {item.icon && <i className={item.icon}></i>}
                  <h1 className='sidebar-name  no-title'>
                    {item.title}
                  </h1>
              </span>
          </Link>
    )
  }

  
}
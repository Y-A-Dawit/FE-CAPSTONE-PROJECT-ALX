import React from 'react'
import { faCircleUser } from '@fortawesome/free-solid-svg-icons';
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons';


const SidebarData = [ // array of objects
    {
        title:'Profile',
        icon: faCircleUser,
        link: '/profile'
    },
    {
        title:'About',
        icon: faCircleInfo,
        link: '/about'
    }
]

export default SidebarData;
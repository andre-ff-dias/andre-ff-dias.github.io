import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as RiIcons from 'react-icons/ri';
import * as IoIcons from "react-icons/io5";

export const SidebarData = [
    {
        title: 'Home',
        path: '/',
        icon: <AiIcons.AiFillHome />,
    },
    {
        title: 'Portfolio',
        path: '#',
        icon: <IoIcons.IoFolderOpenSharp />,
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,
        subNav: [
            {
                title: 'Chess',
                path: '/chess',
                icon: <FaIcons.FaChess />
            },
            {
                title: 'Chat',
                path: '/chat',
                icon: <IoIcons.IoChatbubbles />
            },
            {
                title: 'Todo',
                path: '/todo',
                icon: <RiIcons.RiTodoFill />
            }
        ]
    }
]
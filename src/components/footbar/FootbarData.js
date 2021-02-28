import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as SiIcons from "react-icons/si";
import * as IoIcons from "react-icons/io5";
import * as AiIcons from 'react-icons/ai';

export const FootbarData = [
    {
        name: 'Github',
        url: 'https://github.com/andre-ff-dias',
        icon: <FaIcons.FaGithub />,
        color: '#24292e'
    },
    {
        name: 'Mail',
        url: 'mailto:andrefilipefd@hotmail.com',
        icon: <SiIcons.SiMailDotRu />,
        color: '#d73a49'
    },
    {
        name: 'LinkedIn',
        url: 'https://www.linkedin.com/in/andre-ff-dias/',
        icon: <IoIcons.IoLogoLinkedin />,
        color: '#0e76a8'
    },
    {
        name: 'Twitter',
        url: 'https://twitter.com/andre_ff_dias',
        icon: <AiIcons.AiFillTwitterCircle />,
        color: '#1DA1F2'
    },
]
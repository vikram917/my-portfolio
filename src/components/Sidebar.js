"use client"
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUserCircle, faBriefcase, faProjectDiagram, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';

const Sidebar = () => {
  const router = useRouter();
  const [activeLink, setActiveLink] = useState('');

  const navigationItems = [
    { name: 'Home', icon: faHome, href: '/home' },
    { name: 'About', icon: faUserCircle, href: '/about' },
    { name: 'Experience', icon: faBriefcase, href: '/experience' },
    { name: 'Projects', icon: faProjectDiagram, href: '/projects' },
    { name: 'Contact', icon: faEnvelope, href: '/contact' }
  ];

  useEffect(() => {
    const active = navigationItems.find(item => router.asPath === item.href);
    setActiveLink(active ? active.href : 'bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500');
  }, [router.asPath]);

  return (
    <div className="bg-transparent text-white w-7 xl:w-14 flex justify-center items-center xl:p-4 rounded-lg">
      <div className="flex flex-col space-y-6">
        {navigationItems.map((item, index) => (
          <Link
            key={index}
            href={item.href}
            className={`flex items-center hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:text-white rounded-md xl:p-4`}
          >
            <FontAwesomeIcon
              icon={item.icon}
              
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
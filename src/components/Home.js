import React from 'react'

const Home = () => {
  return (
    <div>
         {navigationItems.map((item, index) => (
          <a
            key={index}
            href={item.href}
            className={`flex items-center bg-slate-50/5 space-x-4 hover:text-white hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-md p-4 ${
              router.pathname === item.href ? '' : ''
            }`}
          >
            <FontAwesomeIcon icon={item.icon} />
          </a>
        ))}
    </div>
  )
}

export default Home
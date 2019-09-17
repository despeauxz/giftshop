import React from 'react';
import { Link } from 'react-router-dom';
import { Chart, Ticket, Logo } from '@base/images';
import './index.scss';


class Sidebar extends React.Component {
  
  render() {
    return (
      <div className="sidebar flex-none lg:w-64 md:w-16 pb-6 hidden md:block">
        <div className="text-white mb-2 mt-3 px-6 flex justify-center mx-auto mt-8">
          <div className="flex-auto">
            <Link to="/" className="font-semibold leading-tight mb-1 truncate text-center text-xl md:hidden lg:block">
              <img src={Logo} className="mr-0" />
              <span>Dantown</span>
            </Link>
            <div className="flex items-center md:hidden my-4 relative">
              <span className="bg-green-600 rounded-full block w-2 h-2 mr-2"></span>
              <Link to="#" className="text-white opacity-50 text-sm">Online</Link>
            </div>
          </div>
        </div>
        <div className="my-8 nav">
          <div className="flex items-center">
            <Link to="/" className="text-white opacity-75 block w-full p-4 py-4 flex active">
              <span>
                <img src={Chart} className="w-6 h-6" />
              </span>
              <h4 className="md:hidden lg:block ml-4">Overview</h4>
            </Link>
          </div>
          <div className="flex items-center">
            <Link to="/" className="text-white opacity-75 block w-full p-4 py-4 flex">
              <span>
                <img src={Ticket} className="w-6 h-6" />
              </span>
              <h4 className="md:hidden lg:block ml-4">Tickets</h4>
            </Link>
          </div>
          <div className="flex items-center">
            <Link to="/" className="text-white opacity-75 block w-full p-4 py-4 flex">
              <span>
                <img src={Ticket} className="w-6 h-6" />
              </span>
              <h4 className="md:hidden lg:block ml-4">Tickets</h4>
            </Link>
          </div>
          <div className="flex items-center">
            <Link to="/" className="text-white opacity-75 block w-full p-4 py-4 flex">
              <span>
                <img src={Ticket} className="w-6 h-6" />
              </span>
              <h4 className="md:hidden lg:block ml-4">Tickets</h4>
            </Link>
          </div>
          <div className="flex items-center">
            <Link to="/" className="text-white opacity-75 block w-full p-4 py-4 flex">
              <span>
                <img src={Ticket} className="w-6 h-6" />
              </span>
              <h4 className="md:hidden lg:block ml-4">Tickets</h4>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Sidebar;

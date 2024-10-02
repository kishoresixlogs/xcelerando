import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu } from 'lucide-react';
import logo from '../../assets/images/logo.png';
import dashboard from '../../assets/images/dashboard.png';
import students from '../../assets/images/students.png';
import tasks from '../../assets/images/tasks.png';
import library from '../../assets/images/library.png';
import settings from '../../assets/images/settings.png';
import logout from '../../assets/images/logout.png';

const Sidebar = ({ isSidebarOpen, toggleSidebar }) => {
    const location = useLocation(); // Get current location

    const sidebarItems = [
        { name: 'Dashboard', image: dashboard, path: "/xcelerando/dashboard" },
        { name: 'Students', image: students, path: "/xcelerando/students" },
        { name: 'Task', image: tasks, path: "/xcelerando/tasks" },
        { name: 'Library', image: library, path: "/xcelerando/libraries" },
        { name: 'Settings', image: settings, path: "#" },
        { name: 'Logout', image: logout, path: "/xcelerando/" }
    ];

    return (
        <aside className={`sidebar ${isSidebarOpen ? '' : 'hidden'}`}>
            <div className="sidebar-header d-flex justify-content-space-between">
                <Link to="/" className="sidebar-logo">
                    <img src={logo} alt='logo' className='logo' />
                </Link>
                <Menu className="sidebar-toggle-btn" onClick={toggleSidebar} />
            </div>
            <nav className="sidebar-nav">
                {sidebarItems.map((item, index) => (
                    <Link
                        key={index}
                        to={item.path}
                        className={`sidebar-item ${location.pathname === item.path ? 'active' : ''}`}
                    >
                        <img src={item.image} alt={item.name} className='icon' />
                        <span>{item.name}</span>
                    </Link>
                ))}
            </nav>
        </aside>
    );
}

export default Sidebar
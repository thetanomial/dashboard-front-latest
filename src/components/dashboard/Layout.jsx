import { Outlet, NavLink, useNavigate, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaLock } from "react-icons/fa6";
import './Layout.css';
import './ProfileCard.css';
import linkMappings from '../../data/linkMappings';
import ProfileCard from './ProfileCard';

const Layout = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const activeSection = linkMappings.find((section) => 
    section.subLinks.some(subLink => location.pathname.startsWith(subLink.path)) ||
    location.pathname.includes(section.name.toLowerCase())
  );

  const displayNames = {
    'Social-Media': 'Social Media',
    'Human Resources': 'Human Resources',
    'Accounting': 'Accounting',
    'Legal': 'Legal',
  };

  const linkAnimation = {
    initial: { opacity: 0, y: 10 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -10 },
    transition: { duration: 0.2 },
  };

  return (
    <div className="dashboard">
      <aside className="sidebar">
        <nav>
          <ul>
            <li>
              <button className="go-back" onClick={() => navigate(-1)}>
                Go Back
              </button>
            </li>
            <li>
              <button className="go-back-to-dashboard" onClick={() => navigate("/dashboard")}>
                Go Back To Dashboard
              </button>
            </li>
          </ul>
        </nav>

        <ProfileCard name="John Doe" email="john.doe@example.com" />

        {activeSection ? (
          <motion.nav className="sub-links" {...linkAnimation}>
            <h3>{displayNames[activeSection.name] || activeSection.name} Links</h3>
            <ul>
              {activeSection.subLinks.map((link) => (
                <li key={link.id}>
                  <NavLink 
                    to={link.isLocked ? '#' : link.path}
                    className={({ isActive }) => 
                      link.isLocked 
                        ? 'locked' 
                        : isActive 
                          ? 'active' 
                          : ''
                    }
                  >
                    {link.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </motion.nav>
        ) : (
          <>
            <motion.nav className="additional-links" {...linkAnimation}>
              <h3>Dashboard Links</h3>
              <ul>
                <li>
                  <NavLink to="/dashboard/contact-admin">
                    Contact Admin
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/profile">
                    Profile
                  </NavLink>
                </li>
              </ul>
            </motion.nav>
            <motion.nav className="additional-links" {...linkAnimation}>
              <h3>Looking for?</h3>
              <ul>
                <li>
                  <NavLink to="/dashboard/looking-for/website">
                    Website
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/looking-for/hoarding">
                    Hoarding
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/looking-for/recruitment">
                    Recruitment
                  </NavLink>
                </li>

                <li>
                  <NavLink to="/dashboard/looking-for/loan-management">
                    Loan Management
                  </NavLink>
                </li>
              </ul>
            </motion.nav>
          </>
        )}
      </aside>
      <main className="content">
        <motion.div 
          key={location.key}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
        >
          <Outlet />
        </motion.div>
      </main>
    </div>
  );
};

export default Layout;
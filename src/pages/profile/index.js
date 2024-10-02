import { useEffect, useState } from 'react'
import './profile.css'
import profile from '../../assets/images/profile.png'
import Sidebar from '../../components/sidebar/Sidebar'
import Modal from '../../components/modal/Modal'
import Header from '../../components/header'

const Profile = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true)
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isViewModalOpen, setIsViewModalOpen] = useState(false)
    const [currentPage, setCurrentPage] = useState(1);
    const studentsPerPage = 10; // Number of students to display per page

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => {
        setIsModalOpen(false);
       
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic her

        // Clear fields after submission
        closeModal(); // Close modal after submission
    };

    const openViewModal = () => setIsViewModalOpen(true)
    const closeViewModal = () => setIsViewModalOpen(false)

    const assignedStudents = [
        { name: 'John doe', accessCode: '0001', file: 'File 1', date: 'Mon, April 29 2024' },
        { name: 'John doe', accessCode: '0002', file: 'File 2', date: 'Tue, April 30 2024' },
        { name: 'John doe', accessCode: '0003', file: 'File 3', date: 'Wed, May 1 2024' },
    ]

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen)
    }

    useEffect(() => {
        const mediaQuery = window.matchMedia('(max-width: 996px)');

        // Function to handle screen resize
        const handleScreenResize = () => {
            if (mediaQuery.matches) {
                setIsSidebarOpen(false); // Hide sidebar when screen width is <= 996px
            } else {
                setIsSidebarOpen(true);  // Show sidebar on larger screens
            }
        };

        // Add the event listener
        mediaQuery.addEventListener('change', handleScreenResize);

        // Call it initially to set the correct state on load
        handleScreenResize();

        // Clean up the event listener on component unmount
        return () => {
            mediaQuery.removeEventListener('change', handleScreenResize);
        };
    }, []);

    return (
        <>
            <div className={`dashboard-container ${isSidebarOpen ? 'sidebar-open' : 'sidebar-closed'}`}>
                <Sidebar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
                {/* Main Content */}
                <main className="main-content">
                    <Header isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} heading={"Profile"} />
                    <div className="profile-section">
                        <section className="profile">
                            <div className="profile-header">
                                <img
                                    src={profile}
                                    alt="Patrenna"
                                    className="profile-image"
                                />
                                <div className='hed'>
                                    <h2 className="profile-name">Patrenna</h2>
                                    <p className="profile-role">Admin</p>
                                    <p className="profile-email">patrenna@xcelerando.com</p>
                                </div>
                            </div>
                        </section>
                        <section className="personal-details">
                            <h3>Personal Details:</h3>
                            <a href="#" className="edit-profile">
                                Edit Profile
                            </a>
                            <div className="details-container">
                                <div className="details-column">
                                    <table className="details-table">
                                        <tbody>
                                            <tr>
                                                <td className="detail-label">Name</td>
                                                <td>Patronna Schell</td>
                                            </tr>
                                            <tr>
                                                <td className="detail-label">Location</td>
                                                <td>USA</td>
                                            </tr>
                                            <tr>
                                                <td className="detail-label">Website</td>
                                                <td>www.abcxyz.com</td>
                                            </tr>
                                            <tr>
                                                <td className="detail-label">Email</td>
                                                <td>patrenna@gmail.com</td>
                                            </tr>
                                            <tr>
                                                <td className="detail-label">Phone</td>
                                                <td>+125 254 3562</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div className="details-column">
                                    <table className="details-table">
                                        <tbody>
                                            <tr>
                                                <td className="detail-label">Instruments</td>
                                                <td>Guitar</td>
                                            </tr>
                                            <tr>
                                                <td className="detail-label">Institute</td>
                                                <td>XYZ Pro Institute</td>
                                            </tr>
                                            <tr>
                                                <td className="detail-label">Experience</td>
                                                <td>08 Years</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </section>

                    </div>
                    <div className="profile-section">
                        <section className="card-details">
                            <h3>Card Details:</h3>
                            <a href="#" className="manage-link">
                                Manage
                            </a>
                            <div className="card">
                                <p>Visa 2141</p>
                                <p className="card-number">**** **** **** 8014</p>
                                <p>Card Holder: John Doe</p>
                            </div>
                        </section>
                        <section className="change-password">
                            <h3>Change Password:</h3>
                            <form>
                                <div className='chng-pass-main'>
                                    <div className='current-pass'>
                                        <input type="password" id="current-password" placeholder='Current Password' required />
                                    </div>
                                    <div className='new-pass'>
                                        <input type="password" id="new-password" placeholder='New Password' required />
                                    </div>
                                </div>
                                <button type="submit">Change Password</button>
                            </form>
                        </section>
                    </div>
                </main>
            </div>
        </>
    )
}

export default Profile
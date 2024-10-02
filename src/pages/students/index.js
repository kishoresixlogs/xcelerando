import { useEffect, useState } from 'react'
import './student.css'
import profile from '../../assets/images/profile.png'
import Sidebar from '../../components/sidebar/Sidebar'
import Modal from '../../components/modal/Modal'
import Header from '../../components/header'
import RightProfile from '../../components/SideProfile/SideProfile'

const Students = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true)
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [firstName, setFirstName] = useState(false);
    const [lastName, setLastName] = useState(false);
    const [accessCode, setAccessCode] = useState(false);
    const [showRightProfile, setShowRightProfile] = useState(false);
    const [selectedStudentIndex, setSelectedStudentIndex] = useState(null);
    const [error, setError] = useState('');
    const [isMessageModalOpen, setIsMessageModalOpen] = useState(false)
    const [isNotificationModalOpen, setIsNotificationModalOpen] = useState(false)
    const [isViewModalOpen, setIsViewModalOpen] = useState(false)
    const [isNotificationOpen, setIsNotificationOpen] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const studentsPerPage = 10; // Number of students to display per page

    const toggleRightProfile = (index, student) => {
        if (selectedStudentIndex === index) {
            setSelectedStudentIndex(null); // Close the profile
            setShowRightProfile(false);    // Hide the profile in the sidebar
        } else {
            setSelectedStudentIndex(index); // Open the selected student profile
            setShowRightProfile(true);      // Show the profile in the sidebar
        }
    };
    const assignedStudents = [
        { image: profile, name: 'John doe', userName: '@john1', studentid: '111-222', recentUpdate: 'Mon, April 29 2024' },
        { image: profile, name: 'John doe1', userName: '@john1', studentid: '111-333', recentUpdate: 'Tue, April 30 2024' },
        { image: profile, name: 'John doe2', userName: '@john1', studentid: '111-444', recentUpdate: 'Wed, May 1 2024' },
    ]

    const totalPages = Math.ceil(assignedStudents.length / studentsPerPage);

    // Get the current students to display based on the current page
    const indexOfLastStudent = currentPage * studentsPerPage;
    const indexOfFirstStudent = indexOfLastStudent - studentsPerPage;
    const currentStudents = assignedStudents.slice(indexOfFirstStudent, indexOfLastStudent);

    // Handle pagination navigation
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => {
        setIsModalOpen(false);
        // Reset form fields when closing the modal
        setFirstName('');
        setLastName('');
        setAccessCode('');
        setError('');
    };



    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        // Validate inputs
        if (!firstName || !lastName || !accessCode) {
            setError('All fields are required');
            return;
        }

        // Reset error message
        setError('');

        // Handle the submission logic here (e.g., send data to API)
        console.log('New Student:', { firstName, lastName, accessCode });

        // Clear fields after submission
        closeModal(); // Close modal after submission
    };

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
            {/* Modal for Creating New Catalog */}
            <Modal isOpen={isModalOpen} closeModal={closeModal}>
                <h2 className='student-modal-h2'>Add New Student</h2>
                {/* Add form elements here */}
                <form>
                    <div className="form-group">
                        <label>First Name</label>
                        <input type="text" placeholder="Enter first name" />
                    </div>
                    <div className="form-group">
                        <label>Last Name</label>
                        <input type="text" placeholder="Enter last name" />
                    </div>
                    <div className="form-group">
                        <label>Access Code</label>
                        <input type="number" placeholder="Enter access code" />
                    </div>
                    <button className="create-btn-model margin-model" type="submit">Add</button>
                </form>
            </Modal>
            <div className={`dashboard-container ${isSidebarOpen ? 'sidebar-open' : 'sidebar-closed'}`}>
                {/* Sidebar */}
                {/* <aside className={`sidebar ${isSidebarOpen ? '' : 'hidden'}`}>
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
                            to="#"
                            className={`sidebar-item ${item.name === 'Dashboard' ? 'active' : ''}`}
                        >
                            <img src={item.image} alt='logo' className='icon' />
                            <span>{item.name}</span>
                        </Link>
                    ))}
                </nav>
            </aside> */}
                <Sidebar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />


                {/* Main Content */}
                <main className="main-content">
                    <Header isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} heading={"Students"} />

                    {/* Assigned Students */}
                    <section className="students-section">
                        <div className='student-header'>
                            <h2>All Students</h2>
                            <button className="create-btn" onClick={openModal}>Add New Student</button>
                        </div>
                        <div className="students-table">
                            <table>
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>User Name</th>
                                        <th>Student Id</th>
                                        <th>Recent Update</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {currentStudents.map((student, index) => (
                                        <tr key={index}>
                                            <td onClick={() => toggleRightProfile(index, student)} style={{ cursor: "pointer" }}>
                                                <img src={student.image} alt='profile' width={"30px"} height={"auto"} className='list-profile' />
                                                {student.name}
                                            </td>
                                            <td>{student.userName}</td>
                                            <td>{student.studentid}</td>
                                            <td>{student.recentUpdate}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>

                            {/* Pagination Controls */}
                            <div className="pagination">
                                <button
                                    onClick={() => paginate(currentPage - 1)}
                                    disabled={currentPage === 1}
                                >
                                    Previous
                                </button>
                                {Array.from({ length: totalPages }, (_, index) => (
                                    <button
                                        key={index + 1}
                                        onClick={() => paginate(index + 1)}
                                        className={currentPage === index + 1 ? 'active' : ''}
                                    >
                                        {index + 1}
                                    </button>
                                ))}
                                <button
                                    onClick={() => paginate(currentPage + 1)}
                                    disabled={currentPage === totalPages}
                                >
                                    Next
                                </button>
                            </div>
                        </div>
                    </section>
                </main>

                {/* Right Sidebar */}
                {selectedStudentIndex !== null && (
                    <RightProfile student={currentStudents[selectedStudentIndex]} onClose={() => setSelectedStudentIndex(null)} />
                )}
            </div>
        </>
    )
}

export default Students
import { useEffect, useState } from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import Modal from '../../components/modal/Modal'
import Header from '../../components/header'

const Tasks = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true)
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const studentsPerPage = 10; // Number of students to display per page

    const assignedStudents = [
        { name: 'John doe', accessCode: '0001', file: 'File 1', date: 'Mon, April 29 2024' },
        { name: 'John doe', accessCode: '0002', file: 'File 2', date: 'Tue, April 30 2024' },
        { name: 'John doe', accessCode: '0003', file: 'File 3', date: 'Wed, May 1 2024' },
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
       
    };



    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        // Validate inputs
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
                <Sidebar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
                {/* Main Content */}
                <main className="main-content">
                    <Header isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} heading={"Tasks"} />
                    {/* Assigned Students */}
                    <section className="students-section">
                        <div className='student-header'>
                            <h2>Assigned Students</h2>
                            {/* <button className="create-btn" onClick={openModal}>Add New Student</button> */}
                        </div>
                        <div className="students-table">
                            <table>
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Access code</th>
                                        <th>Files</th>
                                        <th>Date</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {currentStudents.map((student, index) => (
                                        <tr key={index}>
                                            <td>{student.name}</td>
                                            <td>{student.accessCode}</td>
                                            <td>{student.file}</td>
                                            <td>{student.date}</td>
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
            </div>
        </>
    )
}

export default Tasks
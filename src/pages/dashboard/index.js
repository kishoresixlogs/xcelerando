import { useEffect, useState } from 'react'
import './dashboard.css'  // Import the CSS file
import birthday from '../../assets/images/birthday.png'
import party from '../../assets/images/party.png'
import melodies from '../../assets/images/melodies.png'
import donizotti from '../../assets/images/donizotti.png'
import donizotti2 from '../../assets/images/donizotti2.png'
import magazine from '../../assets/images/magzine.png'
import ice from '../../assets/images/ice.png'
import pride from '../../assets/images/pride.png'
import milk from '../../assets/images/milk.png'
import butterfly from '../../assets/images/butterfly.png'
import outline from '../../assets/images/Outline.png'
import Sidebar from '../../components/sidebar/Sidebar'
import Modal from '../../components/modal/Modal'
import Catalogs from '../../components/catalog/catalog'
import Recommended from '../../components/Recommended/Recommended'
import Header from '../../components/header'

const Dashboard = () => {
    const [activeGenre, setActiveGenre] = useState('Jazz')
    const [isSidebarOpen, setIsSidebarOpen] = useState(true)
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isMessageModalOpen, setIsMessageModalOpen] = useState(false)
    const [isNotificationModalOpen, setIsNotificationModalOpen] = useState(false)
    const [isViewModalOpen, setIsViewModalOpen] = useState(false)
    const [isNotificationOpen, setIsNotificationOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    const openMessageModal = () => setIsMessageModalOpen(true)
    const closeMessageModal = () => setIsMessageModalOpen(false)

    const openNotificationModal = () => setIsNotificationModalOpen(true)
    const closeNotificationModal = () => setIsNotificationModalOpen(false)

    const openViewModal = () => setIsViewModalOpen(true)
    const closeViewModal = () => setIsViewModalOpen(false)

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen)
    }

    const catalogs = [
        { name: 'Birthday', musicCount: 5, image: birthday },
        { name: 'Party', musicCount: 7, image: party },
        { name: 'Melodies', musicCount: 3, image: melodies }
    ]

    const recommendedPieces = [
        { name: 'Donizetti', description: 'Lorem ipsum dolor sit amet, adipiscing elit...', price: 3.99, image: donizotti },
        { name: 'Donizetti', description: 'Lorem ipsum dolor sit amet, adipiscing elit...', price: 3.99, image: donizotti2 }
    ]

    const assignedStudents = [
        { name: 'John doe', accessCode: '0001', file: 'File 1', date: 'Mon, April 29 2024' },
        { name: 'John doe', accessCode: '0002', file: 'File 2', date: 'Tue, April 30 2024' },
        { name: 'John doe', accessCode: '0003', file: 'File 3', date: 'Wed, May 1 2024' }
    ]

    const genres = [
        {
            name: 'Jazz',
            count: 5,
            songs: [
                { name: 'Magazine', artist: 'SuicideBoys', students: 5, image: magazine },
                { name: 'Ice Cave II', artist: 'Lebanon Hanover', students: 8, image: ice },
                { name: 'My Pride', artist: 'Sydney Valette', students: 3, image: pride },
                { name: 'BUTTERFLY EFFECT', artist: 'Travis Scott', students: 9, image: butterfly },
                { name: 'Milk It', artist: 'Nirvana', students: 7, image: milk }
            ]
        },
        { name: 'Orchestra', count: 8, songs: [] },
        { name: 'Classic', count: 3, songs: [] },
        { name: 'Metal', count: 5, songs: [] }
    ]


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
                <h2>Create New Catalog</h2>
                {/* Add form elements here */}
                <form>
                    <div className="form-group">
                        <label>Catalog Name</label>
                        <input type="text" placeholder="Enter catalog name" />
                    </div>
                    <div className="form-group">
                        <label>Music Count</label>
                        <input type="number" placeholder="Enter music count" />
                    </div>
                    <button className="create-btn-model" type="submit">Create</button>
                </form>
            </Modal>
            <Modal isOpen={isMessageModalOpen} closeModal={closeMessageModal}>
                <h2>Messages</h2>
                <p>You have new messages!</p>
            </Modal>

            {/* <Modal isOpen={isNotificationModalOpen} closeModal={closeNotificationModal}>
                <h2>Notifications</h2>
                <p>You have new notifications!</p>
            </Modal> */}

            <Modal isOpen={isViewModalOpen} closeModal={closeViewModal}>
                <h2>View Recommended Piece</h2>
                <p>Details about the recommended piece...</p>
            </Modal>
            <div className={`dashboard-container ${isSidebarOpen ? 'sidebar-open' : 'sidebar-closed'}`}>
                <Sidebar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
                {/* Main Content */}
                <main className="main-content">
                    <Header isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} heading="Dashboard" />
                    <div className='row after-main-row'>
                        {/* Catalogs */}
                        <Catalogs catalogs={catalogs} openModal={openModal} />
                        {/* Recommended Pieces */}
                        <Recommended recommendedPieces={recommendedPieces} openModal={openViewModal} />
                    </div>

                    {/* Assigned Students */}
                    <section className="students-section">
                        <h2>Assigned Students</h2>
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
                                    {assignedStudents.map((student, index) => (
                                        <tr key={index}>
                                            <td>{student.name}</td>
                                            <td>{student.accessCode}</td>
                                            <td>{student.file}</td>
                                            <td>{student.date}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </section>
                </main>

                {/* Right Sidebar */}
                <aside className="right-sidebar">
                    <div className="genres-list">
                        {genres.map((genre) => (
                            <div key={genre.name} className="genre-item">
                                <button
                                    onClick={() => setActiveGenre(activeGenre === genre.name ? '' : genre.name)}
                                    className="genre-btn"
                                >
                                    <span>{genre.name} ({genre.count})</span>
                                    <span>{activeGenre === genre.name ? '▼' : '▶'}</span>
                                </button>
                                {activeGenre === genre.name && (
                                    <div className="songs-list">
                                        {genre.songs.map((song, index) => (
                                            <div key={index} className="song-item">
                                                <div className='d-flex align-items-flex-start'>
                                                    <div className='d-flex align-items-center'>
                                                        <img src={outline} alt="icon" />
                                                        <img src={song.image} alt={song.name} className="song-image" />
                                                    </div>
                                                    <div className='d-flex align-items-center'>
                                                        <div className='recom-text'>
                                                            <h3>{song.name}</h3>
                                                            <p>{song.artist}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='student'>
                                                    <p className='song-students-number'>{song.students}</p>
                                                    <p className='song-students'>students</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </aside>
            </div>
        </>
    )
}

export default Dashboard
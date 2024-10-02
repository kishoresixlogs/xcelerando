import { useEffect, useState } from 'react'
import './library.css'
import birthday from '../../assets/images/birthday.png'
import party from '../../assets/images/party.png'
import melodies from '../../assets/images/melodies.png'
import donizotti from '../../assets/images/donizotti.png'
import donizotti2 from '../../assets/images/donizotti2.png'
import volume from '../../assets/images/volume.png'
import Sidebar from '../../components/sidebar/Sidebar'
import Modal from '../../components/modal/Modal'
import Header from '../../components/header'

const Library = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true)
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isViewModalOpen, setIsViewModalOpen] = useState(false)

    const [songTitle, setSongTitle] = useState('');
    const [composer, setComposer] = useState('');
    const [arranger, setArranger] = useState('');
    const [lyricist, setLyricist] = useState('');
    const [ensembleType, setEnsembleType] = useState('');
    const [voicing, setVoicing] = useState('');
    const [difficulty, setDifficulty] = useState('');
    const [catalog, setCatalog] = useState('');
    const [createCatalog, setCreateCatalog] = useState('');
    const [uploadedFiles, setUploadedFiles] = useState([]);

    const handleFileUpload = (e) => {
        const files = Array.from(e.target.files);
        setUploadedFiles((prevFiles) => [...prevFiles, ...files]);
    };

    const removeFile = (index) => {
        setUploadedFiles((prevFiles) => prevFiles.filter((_, i) => i !== index));
    };

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => {
        setIsModalOpen(false);
        // Reset form fields when closing the modal
        setSongTitle('');
        setComposer('');
        setArranger('');
        setLyricist('');
        setEnsembleType('');
        setVoicing('');
        setDifficulty('');
        setCatalog('');
        setCreateCatalog('');
        setUploadedFiles([]);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log({
            songTitle,
            composer,
            arranger,
            lyricist,
            ensembleType,
            voicing,
            difficulty,
            catalog: createCatalog || catalog,
            uploadedFiles,
        });

        // Clear fields after submission
        closeModal(); // Close modal after submission
    };

    const openViewModal = () => setIsViewModalOpen(true)
    const closeViewModal = () => setIsViewModalOpen(false)

    const catalogs = [
        { name: 'Birthday', musicCount: 5, image: birthday },
        { name: 'Party', musicCount: 7, image: party },
        { name: 'Melodies', musicCount: 3, image: melodies }
    ]

    const recommendedPieces = [
        { name: 'Donizetti', description: 'Lorem ipsum dolor sit amet, adipiscing elit...', price: 3.99, image: donizotti },
        { name: 'Donizetti', description: 'Lorem ipsum dolor sit amet, adipiscing elit...', price: 3.99, image: donizotti2 },
        { name: 'Donizetti', description: 'Lorem ipsum dolor sit amet, adipiscing elit...', price: 3.99, image: donizotti },
        { name: 'Donizetti', description: 'Lorem ipsum dolor sit amet, adipiscing elit...', price: 3.99, image: donizotti2 },
        { name: 'Donizetti', description: 'Lorem ipsum dolor sit amet, adipiscing elit...', price: 3.99, image: donizotti },
        { name: 'Donizetti', description: 'Lorem ipsum dolor sit amet, adipiscing elit...', price: 3.99, image: donizotti2 },
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
            {/* Modal for Creating New Catalog */}
            <Modal isOpen={isModalOpen} closeModal={closeModal}>
                <div className="modal-overlay-library">
                    <div className="modal-content-library">
                        <h2 className="music-modal-title">Add New Music</h2>
                        <form className="modal-form" onSubmit={handleSubmit}>
                            <div className="modal-row">
                                <div className="modal-group">
                                    <label htmlFor="songTitle">Song Title</label>
                                    <input
                                        type="text"
                                        id="songTitle"
                                        className="input-field"
                                        placeholder="Enter Song Title"
                                        value={songTitle}
                                        required
                                        onChange={(e) => setSongTitle(e.target.value)}
                                    />
                                </div>
                                <div className="modal-group">
                                    <label htmlFor="composer">Composer*</label>
                                    <input
                                        type="text"
                                        id="composer"
                                        className="input-field"
                                        placeholder="Enter Composer"
                                        value={composer}
                                        required
                                        onChange={(e) => setComposer(e.target.value)}
                                    />
                                </div>
                            </div>

                            <div className="modal-row">
                                <div className="modal-group">
                                    <label htmlFor="arranger">Arranger</label>
                                    <input
                                        type="text"
                                        id="arranger"
                                        className="input-field"
                                        placeholder="Enter Arranger"
                                        value={arranger}
                                        required
                                        onChange={(e) => setArranger(e.target.value)}
                                    />
                                </div>
                                <div className="modal-group">
                                    <label htmlFor="lyricist">Lyricist</label>
                                    <input
                                        type="text"
                                        id="lyricist"
                                        className="input-field"
                                        placeholder="Enter Lyricist"
                                        value={lyricist}
                                        required
                                        onChange={(e) => setLyricist(e.target.value)}
                                    />
                                </div>
                            </div>

                            <div className="modal-row">
                                <div className="modal-group">
                                    <label htmlFor="ensembleType">Ensemble Type</label>
                                    <select
                                        id="ensembleType"
                                        className="input-select"
                                        value={ensembleType}
                                        required
                                        onChange={(e) => setEnsembleType(e.target.value)}
                                    >
                                        <option value="">Select</option>
                                        <option value="C">C</option>
                                        {/* Add more options as needed */}
                                    </select>
                                </div>
                                <div className="modal-group">
                                    <label htmlFor="voicing">Voicing (SSA)</label>
                                    <select
                                        id="voicing"
                                        className="input-select"
                                        value={voicing}
                                        required
                                        onChange={(e) => setVoicing(e.target.value)}
                                    >
                                        <option value="">Select</option>
                                        <option value="B">B</option>
                                        {/* Add more options as needed */}
                                    </select>
                                </div>
                            </div>

                            <div className="modal-row">
                                <div className="modal-group">
                                    <label htmlFor="difficulty">Difficulty</label>
                                    <select
                                        id="difficulty"
                                        className="input-select"
                                        value={difficulty}
                                        required
                                        onChange={(e) => setDifficulty(e.target.value)}
                                    >
                                        <option value="">Select</option>
                                        <option value="A">A</option>
                                        {/* Add more options as needed */}
                                    </select>
                                </div>
                                <div className="modal-group">
                                    <label htmlFor="catalog">Catalog</label>
                                    <div className="input-wrapper">
                                        <select
                                            id="catalog"
                                            className="input-select"
                                            value={catalog}
                                            required
                                            onChange={(e) => setCatalog(e.target.value)}
                                        >
                                            <option value="">Select or Create New</option>
                                            <option value="Birthday">Birthday</option>
                                            <option value="Beach Party">Beach Party</option>
                                            <option value="Oldies">Oldies</option>
                                        </select>
                                    </div>
                                </div>
                            </div>

                            <div className="modal-row">
                                <div className="modal-group">
                                    <div className="file-upload">
                                        <input
                                            type="file"
                                            id="uploadFile"
                                            className="input-file"
                                            multiple
                                            required
                                            onChange={handleFileUpload}
                                        />
                                    </div>
                                    <div className="uploaded-files">
                                        {uploadedFiles.map((file, index) => (
                                            <span key={index} className="file-item">
                                                {file.name} <span className="file-remove" onClick={() => removeFile(index)}>X</span>
                                            </span>
                                        ))}
                                    </div>
                                </div>
                                <div className="modal-group">
                                    <input
                                        type="text"
                                        className="input-create"
                                        placeholder="Create New"
                                        value={createCatalog}
                                        onChange={(e) => setCreateCatalog(e.target.value)}
                                    />
                                </div>
                            </div>

                            <button type="submit" className="modal-btn">ADD</button>
                        </form>
                    </div>
                </div>
            </Modal>
            <Modal isOpen={isViewModalOpen} closeModal={closeViewModal}>
                <h2>View Recommended Piece</h2>
                <p>Details about the recommended piece...</p>
            </Modal>
            <div className={`dashboard-container ${isSidebarOpen ? 'sidebar-open' : 'sidebar-closed'}`}>
                <Sidebar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
                {/* Main Content */}
                <main className="main-content">
                    <Header isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} heading={"Library"} />
                    <div className='header-catalog'>
                        <div className="header">
                            <h2>Catalog</h2>
                            <div className='search-button'>
                                <div className="search-bar">
                                    <input type="text" placeholder="Search" />
                                </div>
                                <button className="add-button" onClick={(e) => openModal()}>+ Add New Music</button>
                            </div>
                        </div>
                        <div className="catalog">
                            {catalogs.map((catalog, index) => (
                                <div key={index} className="catalog-item-library">
                                    <img src={catalog.image} alt={catalog.name} className="catalog-image" />
                                    <div className='catalog-text'>
                                        <h3>{catalog.name}</h3>
                                        <p>{catalog.musicCount} music</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="recommended recommended-section-library">
                        <h2 className="section-title">Recommended Sheet</h2>
                        <div className="music-grid">
                            {
                                recommendedPieces.map((piece, index) => (
                                    <div key={index} className="music-item">
                                        <img src={piece.image} alt={piece.name} />
                                        <div className="music-info">
                                            <div className="music-title">{piece.name}</div>
                                            <div className="music-description">
                                                {piece.description}
                                            </div>
                                            <div className="music-actions">
                                                <div className='view-volume'>
                                                    <button className="view-button" onClick={(e) => openViewModal()}>View</button>
                                                    <img src={volume} alt="volume" className="play-btn-library" />
                                                </div>
                                                <span className="music-price">${piece.price}</span>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                    <div className="new-sheet recommended-section-library">
                        <h2 className="section-title">New Sheet Music</h2>
                        <div className="new-music-grid">
                            {
                                recommendedPieces.map((piece, index) => (
                                    <div key={index} className="music-item">
                                        <img src={piece.image} alt={piece.name} />
                                        <div className="music-info">
                                            <div className="music-title">{piece.name}</div>
                                            <div className="music-description">
                                                {piece.description}
                                            </div>
                                            <div className="music-actions">
                                                <div className='view-volume'>
                                                    <button className="view-button" onClick={(e) => openViewModal()}>View</button>
                                                    <img src={volume} alt="volume" className="play-btn-library" />
                                                </div>
                                                <span className="music-price">${piece.price}</span>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>

                </main>
            </div>
        </>
    )
}

export default Library
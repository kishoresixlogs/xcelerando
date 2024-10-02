// Catalogs.jsx
import React from 'react';
import volume from '../../assets/images/volume.png'

const Recommended = ({ recommendedPieces, openModal }) => {
    return (
        <section className="col-lg-6 col-md-12 col-sm-12 recommended-section">
            <h2 className='dash_h2'>Recommended Pieces</h2>
            <div className="recommended-grid">
                {recommendedPieces.map((piece, index) => (
                    <div key={index} className="recommended-item">
                        <img src={piece.image} alt={piece.name} className="recommended-image" />
                        <div className='recom-sec'>
                            <h3>{piece.name}</h3>
                            <p className='recom-para'>{piece.description}</p>
                            <div className="recommended-actions">
                                <button className="view-btn" onClick={openModal}>View</button>
                                <img src={volume} alt="volume" className="play-btn" />
                                <span>${piece.price.toFixed(2)}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Recommended;

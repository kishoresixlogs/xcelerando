// Catalogs.jsx
import React from 'react';

const Catalogs = ({ catalogs, openModal }) => {
    return (
        <section className="col-lg-6 col-md-12 col-sm-12 catalogs-section">
            <div className="section-header">
                <h2>Catalogs</h2>
                <button className="create-btn" onClick={openModal}>Create New</button>
            </div>
            <div className="catalogs-grid">
                {catalogs.map((catalog, index) => (
                    <div key={index} className="catalog-item">
                        <img src={catalog.image} alt={catalog.name} className="catalog-image" />
                        <div className='catalog-text'>
                            <h3>{catalog.name}</h3>
                            <p>{catalog.musicCount} music</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Catalogs;

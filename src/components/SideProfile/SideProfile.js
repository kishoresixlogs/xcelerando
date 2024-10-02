// Catalogs.jsx
import React, { useState } from 'react';
import profile from '../../assets/images/profile.png'
import butterfly from '../../assets/images/butterfly.png'
import ice from '../../assets/images/ice.png'
import magzine from '../../assets/images/magzine.png'


const RightProfile = ({ student, onClose }) => {
    const handleCloseProfile = () => {
        onClose(); // Notify the parent to close the profile
    };
    return (
        <aside className="right-sidebar-student">
            <div className="profile-student">
                <p className='cross' onClick={handleCloseProfile}>x</p>
                <div className="profile-avatar">
                    <img src={student.image} alt="Profile" />
                </div>
                <h2>{student.name}</h2>
                <p>Group1</p>
            </div>
            <div className="latest-scores">
                <div className="section-header">
                    <h3>Latest Score</h3>
                    <a href="#" className="view-all">
                        View all →
                    </a>
                </div>
                <div className="score-item">
                    <img src={butterfly} alt="BUTTERFLY EFFECT" />
                    <span>BUTTERFLY EFFECT</span>
                    <button>Open</button>
                </div>
                <div className="score-item">
                    <img src={ice} alt="Ice Cave II" />
                    <span>Ice Cave II</span>
                    <button>Open</button>
                </div>
                <div className="score-item">
                    <img src={magzine} alt="Morrison's - Track 9" />
                    <span>Morrison's - Track 9</span>
                    <button>Open</button>
                </div>
            </div>
            <div className="recently-viewed">
                <div className="section-header">
                    <h3>Recently Viewed</h3>
                    <a href="#" className="view-all">
                        View all →
                    </a>
                </div>
                <div className="recent-item">
                    <div className="placeholder" />
                    <span>The Silver Spear - Tune 2</span>
                </div>
                <div className="recent-item">
                    <div className="placeholder" />
                    <span>Drowsy Maggie - Tune 8</span>
                </div>
                <div className="recent-item">
                    <div className="placeholder" />
                    <span>Bill Collin's - Track 17</span>
                </div>
            </div>
        </aside>
    );
}

export default RightProfile;

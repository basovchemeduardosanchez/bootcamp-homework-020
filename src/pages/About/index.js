import React from 'react';
import profilePicture from '../../profile-picture.jpg'

function About(){
    return (
        <div className="container p-4" >
            <div className="Portfolio-card card shadow bg-secondary text-white">
                <div className="card-header bg-dark">
                    <h5 className="m-0">
                        About
                    </h5>
                </div>
                {/* The no-gutters class makes the columns not to have gaps between themselves */}
                <div className="row no-gutters">
                    {/* Full width on extra small screen, 4 columns from small onwards */}
                    <div className="col-12 col-sm-4">
                        {/* In the style attribute, adapt the image to the height of the column and then make the image fill the whole space preserving the proportions of the image and aligning to the middle of it */}
                        <img className="card-img rounded-0" style={{ height: '100%', objectFit: 'cover' }} src={profilePicture} alt="Eduardo Sánchez Villafán" />
                    </div>
                    {/* This should complement the above column. Full width on extra small screen, take the rest of the columns from small onwards */}
                    <div className="col-12 col-sm">
                        <div className="card-body">
                            <p className="card-text">
                            Hello, feel free to send me and e-mail if you would like to discuss a project.
                            </p>
                            <p className="card-text">
                                <small>Last update: AUG-26, 2020</small>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
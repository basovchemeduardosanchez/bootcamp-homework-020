import React from 'react';
import Project from '../../components/Project'

function Portfolio(){
    return (
        <div className="container p-4">
            <div className="Portfolio-card card shadow bg-secondary text-white">
                <div className="card-header bg-dark">
                    <h5 className="m-0">
                        Portfolio
                    </h5>
                </div>
                <div className="card-body p-0">
                    {/* data-interval="false" makes the carousel not to cycle automatically */}
                    <div className="Portfolio-carousel carousel slide" id="Portfolio-carousel" data-ride="carousel" data-interval="false">
                        <ol class="carousel-indicators align-items-center" style={{height: '30px', margin: '0 10%', backgroundColor: '#0000002A' }}>
                            <li data-target="#Portfolio-carousel" data-slide-to="0" class="active"></li>
                            <li data-target="#Portfolio-carousel" data-slide-to="1"></li>
                            <li data-target="#Portfolio-carousel" data-slide-to="2"></li>
                            <li data-target="#Portfolio-carousel" data-slide-to="3"></li>
                        </ol>
                        <div style={{height: '20px', margin: '0 10%', backgroundColor: '#0000002A'}}></div>
                        <div className="carousel-inner" style={{padding: '0 10% 30px'}}>
                            <div className="carousel-item active">
                                <Project
                                    name="Backpacker's Assistant"
                                    url="https://basovchemeduardosanchez.github.io/Project1/index.html"
                                >
                                    <p>
                                        Tha back packers assistant is the ultimate tool to design a trip on a clever way,it features the usage of several REST APIs, including Triposo, UnsplashSource, Mappquest ans Rest Countries. Its goal is to hep people to plan vacation trips on a successful way integrating many useful data sources on a single system
                                    </p>
                                </Project>
                            </div>
                            <div className="carousel-item">
                                <Project
                                    name="Random Password Generator"
                                    url="https://basovchemeduardosanchez.github.io/bootcamp-homework-003/"
                                >
                                    <p>
                                        A simple randomizer to generate passwords
                                    </p>
                                </Project>
                            </div>
                            <div className="carousel-item">
                                <Project
                                    name="CSS Challenge"
                                    url="https://basovchemeduardosanchez.github.io/bootcamp-homework-004/"
                                >
                                    <p>
                                    A simple game to test your CSS skills
                                    </p>
                                </Project>
                            </div>
                            <div className="carousel-item">
                                <Project
                                    name="Plan It!"
                                    url="https://polar-hamlet-63733.herokuapp.com/"
                                >
                                    <p>
                                    A tasks organizer
                                    </p>
                                </Project>
                            </div>
                        </div>
                        <a className="carousel-control-prev" style={{width: '10%', backgroundColor: '#0005'}} href="#Portfolio-carousel" role="button" data-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="sr-only">Previous</span>
                        </a>
                        <a className="carousel-control-next" style={{width: '10%', backgroundColor: '#0005'}} href="#Portfolio-carousel" role="button" data-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="sr-only">Next</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Portfolio;
import React from 'react';
import './style.css'

function Project(props) {
    return (
        <div className="card bg-secondary rounded-0 border-0">
            <div class="card-body p-0">
                <div className="p-4">
                    <div className="row mb-4">
                        <div className="col">
                            <h3 className="mb-0">{props.name}</h3>
                        </div>
                        {/* col-auto adjusts to the column content instead of a fixed width, this way the button gets aligned to the right because the column containing it will shrink to the width of the content */}
                        <div className="col-auto">
                            {/* The rel="noreferrer noopener" was suggested by eslint and is used not to leak data of the previous page the user was in */}
                            <a className="btn btn-primary" href={props.url} rel="noreferrer noopener" target="_blank" title="Open in new window">
                                <span className="fa fa-external-link"></span>
                            </a>
                        </div>
                    </div>
                    <div>
                        {/* Children is a special prop which contains the children elements of the component tag */}
                        {props.children}
                    </div>
                </div>
                <iframe className="d-block" title={props.name} src={props.url} frameborder="0" style={{ width: '100%', height: '600px' }}></iframe>
            </div>
        </div>
    );
}

export default Project;
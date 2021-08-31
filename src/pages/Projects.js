import React from 'react';
import techblog from '../assets/imgs/techblog.png';

export default function Projects() {
    return (
        <div className="projectcard">
            <img src={techblog} alt="techblog notepad icon" className="img"/>
                <p>Tech Blog for making and saving posts</p>
                <div className="project-div">
                    <a href="https://github.com/aleck-charlie/techblog" className="button"> Github</a>
                    <br />
                    <a href="https://techblog-ca.herokuapp.com/" className="button"> Deployed </a>
                </div>        
        </div>
    )
}
import React from 'react';
import techblog from '../assets/imgs/techblog.png';
import dash from '../assets/imgs/dash.png';
import starcross from '../assets/imgs/starcross.png';



export default function Projects() {
    return (
        <div className="card">
            <div className="projectcard">
                <img src={techblog} alt="techblog app icon" className="img" />
                <p>Create and save blog posts</p>
                <div className="project-div">
                    <a href="https://github.com/aleck-charlie/techblog" className="button"> Github</a>
                    <br />
                    <a href="https://techblog-ca.herokuapp.com/" className="button"> Deployed </a>
                </div>
            </div>
            <div className="projectcard">
                <img src={dash} alt="weather dashboard app icon" className="img" />
                <p>A 5 day forecast app using a weather API</p>
                <a href="https://github.com/aleck-charlie/weather_dashboard" class="button"> Github</a>
                <br />
                <a href="https://aleck-charlie.github.io/weather_dashboard/" class="button"> Deployed </a>
            </div>
            <div className="projectcard">
                <img src={starcross} alt="starcrossed app icon" className="img" />
                <p>A dating app for the literal stars, a sci-fi take on modern dating apps</p>
                <a href="https://github.com/star-crossed-team/star-crossed" className="button"> Github</a>
                <br />
                <a href="https://star-crossed-dating.herokuapp.com/" className="button"> Deployed </a>
            </div>
        </div>
    )
}
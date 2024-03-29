import React from 'react';
import Button from 'react-bootstrap/Button';
import { NavLink } from 'react-router-dom';

export default function Projects() {

    const projects = [
        {
            id: 1,
            img: "images/calculator.png",
            text: "Make quick and accurate calculations with this React calculator.",
            url: '/calculator'
        },
        {
            id: 2,
            img: "images/potatohead.png",
            text: "Mr. Potato Head is for any age :) Create a profile and save your work for later!",
            url: "potatohead/potatohead.html"
        }
    ];

    return (
        < div className="projectsPage">
            <div className="prevProjects">
                {
                    projects.map(p => (
                        <div className="prevProject">
                            <img className="projPic" src={p.img} alt="project"></img>
                            <div className="projInfo">
                                {p.text}
                                {p.id === 1 && <NavLink className="projButton" to={p.url} target="_blank">view</NavLink>}
                                {p.id === 2 && <a className="projButton" href={p.url} target="_blank" rel="noreferrer">view</a>}
                            </div>
                        </div>
                    ))}
                <div id="projThirdCol">
                    <h3>Projects</h3>
                    Check out some smaller exercises on <a href="https://github.com/ewajsbaum/myprojects" target="_blank" rel="noreferrer"><Button variant="light">GitHub</Button></a>
                </div>
            </div>
        </div>
    );
}
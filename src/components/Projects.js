import React from 'react';
import Card from 'react-bootstrap/Card';

export default function Projects() {

    const projects = [
        {
            img: "images/restaurant.png",
            text: "Bon Apetite! This restaraunt feeds only the cloud... but it's built entirely with HTML!",
            url: ""
        },
        {
            img: "images/calculator.png",
            text: "Make quick and accurate calculations with this React calculator",
            url: ""
        },
        {
            img: "images/potatohead.png",
            text: "Mr. Potato Head is for any age :) Create a profile and save your work for later!",
            url: ""
        }
    ];


    const openProject = (url) => {
        window.open(url, "_blank", "noreferrer");
    };

    return (
        < div className="temp">
            <div className="projectList">
                {
                    projects.map(p => (
                        <Card className="project" onClick={() => openProject(p.url)}>
                            <Card.Img className="cardPic" variant="top" src={p.img} />
                            <Card.Body>
                                <Card.Text>
                                    {p.text}
                                </Card.Text>
                            </Card.Body>
                        </Card>

                    ))}
            </div>
        </div>
    );
}

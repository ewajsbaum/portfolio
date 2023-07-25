import React from 'react';
import { NavLink } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

export default function Cards() {
    return (
        <container className="container-fluid row align-items-center justify-content-center">
            <Card>
                <Card.Body>
                    <Card.Title>I'm currently working on:</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">Mobile App</Card.Subtitle>
                    <Card.Text className="py-3">Cleanliness at its highest level - complexity gone.
                        Hire a cleaner at the click of button and say goodbye to housekeeping hassles.</Card.Text>
                    <Button className="cardButton" variant="light"><NavLink to='/currentProject' className="customLink">View Project</NavLink></Button>
                </Card.Body>
            </Card>
            <Card>
                <Card.Body>
                    <Card.Title>When I'm not coding you'll find me:</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">Studying &#x1F644;</Card.Subtitle>
                    <Card.Text className="py-3">I'm currently reading "The Environment and You" by
                        Norm Christensen and Lissa Leege. Environmental Science is cooler than I thought!</Card.Text>
                    <Button className="cardButton" variant="light"><NavLink to='/education' className="customLink">My Path</NavLink></Button>

                </Card.Body>
            </Card>
            <Card>
                <Card.Body>
                    <Card.Title>I'm passionate about:</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">Attitude of Gratitude</Card.Subtitle>
                    <Card.Text className="py-3" id="quote">"Too many blessings to count... It’s a nice problem to have." (Keely Chace)</Card.Text>
                </Card.Body>
            </Card>
        </container>
    )
}

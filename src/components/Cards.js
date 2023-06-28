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
                    <Card.Subtitle className="mb-2 text-muted">Project Name</Card.Subtitle>
                    <Card.Text className="py-3">Some quick example text to build on the card title and
                        make up the bulk of thecard's content.</Card.Text>
                    <Button className="cardButton" variant="light"><NavLink to='/currentProject' className="customLink">View Project</NavLink></Button>
                </Card.Body>
            </Card>
            <Card>
                <Card.Body>
                    <Card.Title>I'm currently employed by:</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">Company Name</Card.Subtitle>
                    <Card.Text className="py-3">Some quick example text to build on the card title and make up the bulk of
                        the card's content.</Card.Text>
                    <Button className="cardButton" variant="light"><NavLink to='/currentEmployment' className="customLink">References</NavLink></Button>
                </Card.Body>
            </Card>
            <Card>
                <Card.Body>
                    <Card.Title> When I'm not coding I like to:</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">Hobby Name</Card.Subtitle>
                    <Card.Text className="py-3">Some quick example text to build on the card title and make up the bulk of
                        the card's content.</Card.Text>
                </Card.Body>
            </Card>
        </container>
    )
}

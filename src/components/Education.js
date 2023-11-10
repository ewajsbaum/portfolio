import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function Education() {
    return (
        <div id="educ_page">
            <h1>Education</h1>

            <Card className="ed_card">
                <Card.Header>2021-current</Card.Header>
                <Card.Body>
                    <Card.Title>Woodmont College</Card.Title>
                    <Card.Text>
                        Bachelors of Science in Computer Programming and Technology
                    </Card.Text>
                    <a href="https://woodmontcollege.edu/" target="_blank" rel="noreferrer"><Button variant="light">Learn More</Button></a>
                </Card.Body>
            </Card>

            <Card className="ed_card">
                <Card.Header>2021-2023</Card.Header>
                <Card.Body>
                    <Card.Title>PCS - The School of Evolving Technology</Card.Title>
                    <Card.Text>
                        Software, Web and Application Development Course<br />
                        Completed an intensive and comprehensive program focused on developing critical,
                        real-world web and application programming and design skills. Developed practical applications and databases in C#, JavaScript,
                        HTML, CSS, Node.js and React. Gained critical skills in application security and best practices.
                    </Card.Text>
                    <a href="https://pcsnynj.org/" target="_blank" rel="noreferrer"><Button variant="light">Learn More</Button></a>
                </Card.Body>
            </Card>
        </div>
    );
}




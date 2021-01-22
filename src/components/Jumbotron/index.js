import React from 'react';
import { Jumbotron, Container } from 'reactstrap';

const JumbotronComponent = ({ title, subtitle }) => {
    return (
        <div>
            <Jumbotron>
                <Container>
                    <h1 className='display-8'>{title}</h1>
                    <p className='lead'>{subtitle}</p>
                </Container>
            </Jumbotron>
        </div>
    );
};

export default JumbotronComponent;

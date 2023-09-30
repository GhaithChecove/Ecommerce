import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
function Footer() {
    return (
        <footer>
            <Container>
                <Row>
                    <Col className='m-col-3'></Col>
                    <Col className='m-col-3'></Col>
                    <Col className="m-col-3  text-center py-3"> Copyright &copy;  Ghaith</Col>
                </Row>

            </Container>

        </footer>
    )
}

export default Footer
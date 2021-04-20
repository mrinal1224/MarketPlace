import React from 'react'
import {Container , Col, Row} from 'react-bootstrap'

const Footer = () => {
    return (
        <div>
            <Container>
                <Row>
                    <Col className="text-center py-3">
                         Copyright Reserved &copy; MyShop
                    </Col>
                </Row>
            </Container>

        </div>
    )
}

export default Footer

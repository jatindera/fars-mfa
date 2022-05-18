import axios from "axios";
import React, { useEffect, useState } from "react";
import { Card, Container, Row, Col } from "react-bootstrap";


const DummyList = () => {
    const [dummyList, setDummyList] = useState([])

    useEffect(() => {
        axios.get("http://localhost:8000/dummyList")
            .then(res => {
                setDummyList(res.data)
            })

    }, [])


    return (
        <>
            <Container>
                <Row className="justify-content-md-center">
                    {
                        dummyList.map((item) => {
                            return (
                                <Col>
                                    <Card
                                        bg="info"
                                        key={item.id}
                                        text="white"
                                        style={{ width: '18rem' }}
                                        className="mb-2"
                                    >
                                        <Card.Header>{item.team}</Card.Header>
                                        <Card.Body>
                                            <Card.Title>{item.name}</Card.Title>
                                            <Card.Text>
                                                {item.name} work from <b>{item.workLocation}</b> location
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            )
                        })
                    }
                </Row>
            </Container>
        </>
    )
}

export default DummyList
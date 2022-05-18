import axios from "axios";
import React, { useEffect, useState } from "react";
import { Card, Container, Row, Col } from "react-bootstrap";
import { useMsal } from "@azure/msal-react";
import {getAccessToken} from "../utils/helperFunctions.js";



const DummyList = () => {


    const [dummyList, setDummyList] = useState([])
    const { instance, inProgress, accounts } = useMsal();



    useEffect(() => {

        const fetchData = async () => {
            const accessToken = await getAccessToken(instance, inProgress, accounts)
            const config = {
                headers: { Authorization: `Bearer ${accessToken}` }
            };
            // console.log(config)
            axios.get("http://localhost:8000/dummyList", config)
            .then(res => {
                setDummyList(res.data)
                console.log(res.data)
            })
        }

        fetchData()
    }, [instance, inProgress, accounts])


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
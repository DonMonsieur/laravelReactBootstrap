import React, { Fragment } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import api from "../api";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const CreateUser = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const createUser = async () => {
        const response = await api.post("/users/create", {
            name: name,
            email: email,
            password: password,
        });
        console.log(response.data.data);
        if (response.status === 200) {
            alert(response.data.message)
            navigate("/");
        }
    };

    return (
        <Fragment>
            <Form>
                <Form.Group as={Row} className="mb-3">
                    <Form.Label column sm="2">
                        Name
                    </Form.Label>
                    <Col sm="10">
                        <Form.Control
                            plaintext
                            placeholder="Enter new username"
                            value={name}
                            onChange={(event) => setName(event.target.value)}
                        />
                    </Col>
                    <Form.Label column sm="2">
                        Email
                    </Form.Label>
                    <Col sm="10">
                        <Form.Control
                            plaintext
                            placeholder="Enter new email"
                            value={email}
                            onChange={(event) => setEmail(event.target.value)}
                        />
                    </Col>
                </Form.Group>

                <Form.Group
                    as={Row}
                    className="mb-3"
                    controlId="formPlaintextPassword"
                >
                    <Form.Label column sm="2">
                        Password
                    </Form.Label>
                    <Col sm="10">
                        <Form.Control
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(event) =>
                                setPassword(event.target.value)
                            }
                        />
                    </Col>
                </Form.Group>
                <Link to="/">
                    <Button>Back</Button>
                </Link>
                <Button onClick={createUser}>Submit</Button>
            </Form>
        </Fragment>
    );
};

export default CreateUser;

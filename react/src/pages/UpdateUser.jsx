import React, { Fragment, useEffect } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import api from "../api";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

const UpdateUser = () => {
    const { id } = useParams();
    const [userId, setUserId] = useState(id);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const updateUser = async () => {
        const response = await api.put(`/users/update/${userId}`, {
            name: name,
            email: email,
            password: password,
        });
        if (response.status == 200) {
            alert(response.data.message);
            navigate("/");
        }
    };

    const currentUser = async () => {
        const response = await api.get(`/users/${userId}`);

        if (response.status == 200) {
            setName(response.data.user.name);
            setEmail(response.data.user.email);
        }
    };

    useEffect(() => {
        currentUser();
    }, []);

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
                            placeholder="Update username"
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
                            placeholder="Update email"
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
                            placeholder="Update Password"
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
                <Button onClick={updateUser}>Submit</Button>
            </Form>
        </Fragment>
    );
};

export default UpdateUser;

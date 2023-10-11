import { useEffect, useState } from "react";
import "../App.css";
import { Button, Table } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import api from "../api";
import { Link } from "react-router-dom";

function App() {
    const [users, setUsers] = useState([]);

    const getUsers = async () => {
        const response = await api.get("/users");

        if (response.status == 200) {
            setUsers(response.data.data);
        }
    };

    useEffect(() => {
        getUsers();
    }, []);

    return (
        <>
            <Link to="/users/create">
                <Button>Add User</Button>
            </Link>

            <Table striped bordered hover variant="dark">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user) => (
                        <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </>
    );
}

export default App;

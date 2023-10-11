import { useEffect, useState } from "react";
import "../App.css";
import { Button, Table } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import api from "../api";
import { Link } from "react-router-dom";

const App = () => {
    const [users, setUsers] = useState([]);

    const getUsers = async () => {
        const response = await api.get("/users");

        if (response.status == 200) {
            setUsers(response.data.data);
        }
    };

    const deleteUser = async (id) => {
        const response = await api.delete(`/users/delete/${id}`);

        if (response.status == 200) {
            alert(response.data.message);
            getUsers();
        }
    };

    useEffect(() => {
        getUsers();
    }, []);

    const handleUpdateUser = () => {
        return <Link to="/users/update"></Link>;
    };

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
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user) => (
                        <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>
                                <Link to={`/users/update/${user.id}`}>
                                    <Button>Update</Button>
                                </Link>

                                <Button
                                    variant="danger"
                                    style={{ marginLeft: "10px" }}
                                    onClick={() => deleteUser(user.id)}
                                >
                                    Delete
                                </Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </>
    );
};

export default App;

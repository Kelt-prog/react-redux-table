import React from 'react';
import { Table } from 'reactstrap';

const UserInfo = ({ userDetails }) => {
    return (
        <Table striped>
            <tbody>
                <tr>
                    <td width='200'>id</td>
                    <td width='10'>:</td>
                    <td>{userDetails.id}</td>
                </tr>
                <tr>
                    <td width='200'>First Name</td>
                    <td width='10'>:</td>
                    <td>{userDetails.firstName}</td>
                </tr>
                <tr>
                    <td width='200'>Last name</td>
                    <td width='10'>:</td>
                    <td>{userDetails.lastName}</td>
                </tr>
                <tr>
                    <td width='200'>Email</td>
                    <td width='10'>:</td>
                    <td>{userDetails.email}</td>
                </tr>
                <tr>
                    <td width='200'>Phone</td>
                    <td width='10'>:</td>
                    <td>{userDetails.phone}</td>
                </tr>
                <tr>
                    <td width='200'>Description</td>
                    <td width='10'>:</td>
                    <td>{userDetails.description}</td>
                </tr>
            </tbody>
        </Table>
    );
};

export default UserInfo;

import React from 'react';

const UserDetails = ({user}) => {
    return (
        <div>
            <div>
                <div>id: {user.id}</div>
                <div>username: {user.username}</div>
                <div>name: {user.name}</div>
                <div>email: {user.email}</div>
                <div>phone: {user.phone}</div>
                <div>website: {user.website}</div>
            </div>
        </div>
    );
};

export default UserDetails;
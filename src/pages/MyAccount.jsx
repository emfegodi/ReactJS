import React from 'react';
import '../styles/MyAccount.scss';

const MyAccount = () => {
    return (
        <div className="login">
            <div className="form-container">
                <h1 className="title">My account</h1>
                <form action="#" className="form">
                    <div>
                        <label for="name" className="label">Name</label>
                        <p className="value">Juan Rodríguez</p>
                        <label for="email" className="label">Email address</label>
                        <p className="value">platzi@example.com</p>
                        <label for="password" className="label">Password</label>
                        <p className="value">*********</p>
                    </div>
                    <input type="submit" value="Edit" className="secondary-button edit-button" />
                </form>
            </div>
        </div>
    );
};

export default MyAccount;
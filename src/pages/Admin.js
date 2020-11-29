import React, { useState } from 'react'
import { API, graphqlOperation } from "aws-amplify";
import { AmplifyAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';
import { createByte } from '../api/mutations'

const Admin = () => {
    const [byteDetails, setByteDetails] = useState({ index: "", size: "", price: "" });

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (!byteDetails.index || !byteDetails.size || !byteDetails.price) return
            await API.graphql(graphqlOperation(createByte, { input: byteDetails }))
            setByteDetails({ index: "", size: "", price: "" })
            window.location.reload(false);
        } catch (err) {
            console.log('error creating todo:', err)
        }
    }

    return (
        <section className="admin-wrapper">
            <AmplifyAuthenticator>
                <section>
                    <header className="form-header">
                        <h3>Add New Byte</h3>
                        <AmplifySignOut></AmplifySignOut>
                    </header>
                    <form className="form-wrapper" onSubmit={handleSubmit}>
                        <div className="form-fields">
                            <div className="index-form">
                                <p><label htmlFor="index">Index</label></p>
                                <p><input
                                    id="form-index"
                                    name="index"
                                    type="text"
                                    placeholder="Type the index"
                                    onChange={(e) => setByteDetails({ ...byteDetails, index: e.target.value, size: 1 })}
                                    required
                                /></p>
                            </div>
                            <div className="price-form">
                                <p><label htmlFor="price">Price (£)</label>
                                    <input
                                        id="form-price"
                                        name="price"
                                        type="text"
                                        placeholder="What is the Price of this byte (£)"
                                        onChange={(e) => setByteDetails({ ...byteDetails, price: e.target.value })}
                                        required
                                    /></p>
                            </div>
                            <div className="submit-form">
                                <button className="btn" type="submit">Submit</button>
                            </div>
                        </div>
                    </form>
                </section>
            </AmplifyAuthenticator>
        </section>
    )
}

export default Admin

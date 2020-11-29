import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { ByteContext } from "../context/bytes";

const Home = () => {
    const { featured } = useContext(ByteContext);
    if (!featured.length) {
        return <h3>No Featured Bytes</h3>
    }
    return (
        <>
            <section className="featured">
                <div className="bytes featured-list">
                    {featured.map(({ id, index, size }) => (
                        <article key={id} className="byte featured-byte">
                            <div className="byte-image">
                                <p>Bits {index} to {index + size}</p>
                            </div>
                            <Link to={`bytes/${id}`} className="btn">details</Link>
                        </article>
                    ))}
                </div>
            </section>
        </>
    )
}

export default Home;
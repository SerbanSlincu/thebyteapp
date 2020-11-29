import React, { useContext } from 'react'
import { Link } from "react-router-dom";
import { ByteContext } from '../context/bytes';
import Box from '@material-ui/core/Box';

const Bytes = () => {
    const { bytes } = useContext(ByteContext);

    if (!bytes.length) {
        return <h3>No Bytes Available</h3>
    }
    const compare =(a, b) => {
      return a.index > b.index;
    }

    return (
        <section className="bytes">
            {bytes.sort(compare).map(({ id, index, owner, content }) => (
                <article key={id} className="byte">
                    {owner === null &&
                      <Box className="bit">
                        <div className="leftDiv">{index}</div>
                        <div className="rightDiv">
                          <Link to={`bit/${id}`}>
                            <button className="btn2">
                              buy  
                            </button>
                          </Link>
                        </div>
                      </Box>
                    }
                    {owner !== null &&
                      <Box className="bit">
                        <div className="leftDiv">{index}</div>
                        <div className="rightDiv">
                          <Link to={`bit/${id}`}>
                            <button className="btn2">
                              {content}  
                            </button>
                          </Link>
                        </div>
                      </Box>
                    }
                </article>
            ))}
        </section>
    )
}

export default Bytes

import React, { useContext } from "react";
import { useParams, useHistory } from "react-router-dom";
import { ByteContext } from "../context/bytes";
import { CartContext } from "../context/cart";
import { UserContext } from "../context/user";

const ByteDetails = () => {
  const { id } = useParams();
  const history = useHistory();
  const { bytes, toggleBit } = useContext(ByteContext);
  const { getUserEmail } = useContext(UserContext);
  const { addToCart } = useContext(CartContext);

  const byte = bytes.find((byte) => {
    return byte.id === id;
  });
  if (!byte) {
    return <h3>Loading...</h3>;
  }

  const { index, price, owner, content } = byte;

  return (
    <section className="byte-details">
      <div>
        <h2>Bit at index {index}</h2>
        {owner === null && 
          <div className="detail-description">
            <h4>Price - £ {price}</h4>
            <button
              className="btn"
              onClick={() => {
                addToCart({ ...byte });
                history.push("/cart");
              }}
            >
              Add to Cart
            </button>
          </div>
        }
        {owner !== null &&
          <div className="detail-description">
            <h4>Contents: {content}</h4>
            {getUserEmail() === byte.owner &&
            <button
              className="btn"
              onClick={async () => {
                await toggleBit({...byte});
                window.location.reload();
              }}
            >
              Toggle
            </button>}
          </div>
        }
      </div>
    </section>
  );
};

export default ByteDetails;

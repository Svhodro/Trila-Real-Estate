import React, { useContext } from "react";
import UserContext from "../../context/UserContext";

function Details() {
  const { details } = useContext(UserContext);
  return (
    <div className="sm:h-screen flex justify-center items-center p-8 overflow-hidden">
      <div>
        <div className="card sm:card-side bg-base-100 shadow-xl ">
          <figure>
            <img src={details.Propertyimage} alt="Album" />
          </figure>
          <div className="card-body text-xl ">
            <p>{details.Propertytitle}</p>
            <hr />
            <p>dasscription:</p>
            <p>
              all the property in our webpage are shown that will very clean and
              for properly saleing perpuse only
            </p>
            <hr />
            <p>{details.Pricerange}</p>
            <hr />
            <p>agent: {details.Agentname}</p>
            <hr />

            <div className="card-actions justify-end">
              <button className="btn btn-primary">Add to wishlist</button>            
            </div>
          </div>
        </div>
        <div className="card-actions justify-center my-6">
              <button className="btn btn-primary">Review</button>
             
            </div>
      </div>
    </div>
  );
}

export default Details;

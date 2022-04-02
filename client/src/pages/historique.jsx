import React from "react";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import moment from "moment";
function Historique(props) {
  const { histor } = useSelector((state) => state);
  console.log({ histor });
  return (
    <div>
      <ul className="list-group ">
        {histor.historiques.length === 0 ? (
          <div>history empty</div>
        ) : (
          histor.historiques.map((history) => (
            <li
              className="list-group-item d-flex justify-content-between"
              key={history._id}
            >
              <span>{history.messageHistorique}</span>
              <span>{moment(history.createdAt).format("LLL")}</span>
            </li>
          ))
        )}
      </ul>
    </div>
  );
}

Historique.propTypes = {};

export default Historique;

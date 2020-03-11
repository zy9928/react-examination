import React, { Component, PropsWithChildren } from "react";
import classnames from "classnames";
import PropTypes from "prop-types";
// import style from "./PlayerListItem.scss";
import "./PlayerListItem.scss";

const PlayerListItem: React.FC<PropsWithChildren<any>> = function PlayerListItem(props) {
  return (
    <li className='playerListItem'>
      <div className='playerInfos'>
        <div>
          <span>{props.name}</span>
        </div>
        <div>
          <small>
            {props.team} · {props.position}
          </small>
        </div>
      </div>
      <div className='playerActions'>
        <button
          className='btn btn-default btnAction'
          onClick={() => props.starPlayer(props.id)}
        >
          <i
            className={classnames("fa", {
              "fa-star": props.starred,
              "fa-star-o": !props.starred
            })}
          />
        </button>
        <button
          className='btn btn-default btnAction'
          onClick={() => props.deletePlayer(props.id)}
        >
          <i className="fa fa-trash" />
        </button>
      </div>
    </li>
  );
};

PlayerListItem.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  team: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
  starred: PropTypes.bool,
  starPlayer: PropTypes.func.isRequired
};

export default PlayerListItem;

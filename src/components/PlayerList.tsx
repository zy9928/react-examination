import React, { Component, PropsWithChildren } from 'react';
import PropTypes from 'prop-types';
import './PlayerList.scss';
import PlayerListItem from './PlayerListItem';

const PlayerList: React.FC<PropsWithChildren<any>> = function PlayerList (props) {
  return (
    <ul className='playerList'>
      {props.players.map((player: { name: any; team: any; position: any; starred: any; }, index: any) => {
        return (
          <PlayerListItem
            key={index}
            id={index}
            name={player.name}
            team={player.team}
            position={player.position}
            starred={player.starred}
            {...props.actions}
          />
        );
      })}
    </ul>
  );
}



PlayerList.propTypes = {
  players: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
};

export default PlayerList;

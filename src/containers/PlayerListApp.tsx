import React, { Component, PropsWithChildren } from 'react';
import './PlayerListApp.scss';
import { connect } from 'react-redux';

import { addPlayer, deletePlayer, starPlayer } from '../actions/PlayersActions';
import { PlayerList, AddPlayerInput } from '../components';
import { render } from 'react-dom';

const PlayerListApp: React.FC<PropsWithChildren<any>> = function PlayerListApp(props) {

  const {
    playerlist: { playersById },
  } = props;

  const actions = {
    addPlayer: props.addPlayer,
    deletePlayer: props.deletePlayer,
    starPlayer: props.starPlayer,
  };


  return(
    <div className='playerListAppBox'>
      <h1>NBA Players</h1>
      <AddPlayerInput addPlayer={actions.addPlayer} />
      <PlayerList players={playersById} actions={actions} />
    </div>
  )
}

// class PlayerListApp extends Component {
//   render() {
//     const {
//       playerlist: { playersById },
//     } = this.props;

//     const actions = {
//       addPlayer: this.props.addPlayer,
//       deletePlayer: this.props.deletePlayer,
//       starPlayer: this.props.starPlayer,
//     };

//     return (
//       <div className={styles.playerListApp}>
//         <h1>NBA Players</h1>
//         <AddPlayerInput addPlayer={actions.addPlayer} />
//         <PlayerList players={playersById} actions={actions} />
//       </div>
//     );
//   }
// }

function mapStateToProps(state: any) {
  return state;
}

export default connect(
  mapStateToProps,
  {
    addPlayer,
    deletePlayer,
    starPlayer,
  },
)(PlayerListApp);

import React, { PropsWithChildren, useState, ChangeEvent } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import './AddPlayerInput.scss';

const AddPlayerInput: React.FC<PropsWithChildren<any>> = function AddPlayerInput (this: any, props) {

  const [name, setname] = useState(props.name || '')

  function handleChange (e: any) {
    setname(e.target.value)
  }

  function handleSubmit(e: any) {
    const name = e.target.value.trim();
    if (e.which === 13) {
      props.addPlayer(name);
      setname('');
    }
  }

  return (
    <input
      type="text"
      autoFocus={true}
      className={classnames('form-control', 'addPlayerInput')}
      placeholder="Type the name of a player"
      value={name}
      onChange={handleChange.bind(this)}
      onKeyDown={handleSubmit.bind(this)}
    />
  );
}


AddPlayerInput.propTypes = {
  addPlayer: PropTypes.func.isRequired,
};

export default AddPlayerInput;

import React from 'react';
import PropTypes from 'prop-types';

export default  function TechItem ({ tech, onDelete }) {
  return  (
    <li>
    {tech}
    <button 
    onClick = { onDelete }
    type="button">remove</button>
    </li>
  );
}
TechItem.defaultProps = {
  tech: 'oculto',
}
TechItem.propTypes = {
  tech: PropTypes.string,
  onDelete: PropTypes.func.isRequired,
}
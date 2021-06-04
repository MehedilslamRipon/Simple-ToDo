import React from 'react';
import propTypes from 'prop-types';
import SearchPanel from './SearchPanel';

const Controller = ({ term, handleSearch, toggleForm }) => (
   <div>
      <SearchPanel
         term={term}
         handleSearch={handleSearch}
         toggleForm={toggleForm}
      />
   </div>
);

Controller.propTypes = {
   term: propTypes.string.isRequired,
   handleSearch: propTypes.func.isRequired,
   toggleForm: propTypes.func.isRequired,
};

export default Controller;

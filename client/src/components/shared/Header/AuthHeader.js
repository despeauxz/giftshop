import React from 'react';
import PropTypes from 'prop-types';

const AuthHeader = (props) => {
  const { name } = props;
  return (
    <React.Fragment>
      <div className="flex px-4 lg:px-6 py-4 items-center flex-none">
        <div className="flex flex-col">
          <h3 className="text-gray-800 text-base lg:text-xl mb-1 font-bold">{name}</h3>
        </div>
        <div className="mx-auto md:block">
          <div className="relative">

          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

AuthHeader.propTypes = {
  name: PropTypes.string.isRequired
};

export default AuthHeader;
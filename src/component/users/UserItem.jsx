import React from 'react';
import { Link } from 'react-router-dom';
import propTypes from 'prop-types';

const UserItem = ({ user: { login, avatar_url } }) => {
  return (
    <div className='card shadow-md compact slide bg-base-100'>
      <div className='flox-row item-center space-x-4 card-body'>
        <div>
          <div className='avatar'>
            <div className='rounded-full shadow w-14 h-14'>
              <img src={avatar_url} alt='profile' />
            </div>
          </div>
        </div>
        <div className='card-title'>{login}</div>
        <Link
          className='text-base-content text-opacity-40'
          to={`/user/${login}`}
        >
          Visit Profile
        </Link>
      </div>
    </div>
  );
};

UserItem.propTypes = {
  user: propTypes.object.isRequired,
};

export default UserItem;

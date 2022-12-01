import React, { useContext } from 'react';
import Spinner from '../layout/Spinner';
import UserItem from './UserItem';
import GithubContext from '../../Context/Github/GithubContext';

const UserResults = () => {
  const { user, loading } = useContext(GithubContext);

  if (!loading) {
    return (
      <>
        <div className='grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2'>
          {user.map((user, id) => (
            <UserItem key={id} user={user} />
          ))}
        </div>
      </>
    );
  } else {
    return <Spinner />;
  }
};

export default UserResults;

import { useState, useContext } from 'react';
import GithubContext from '../../Context/Github/GithubContext';
import AlertContext from '../../Context/Alert/AlertContext';

function UserSearch() {
  const [text, setText] = useState('');

  const { user, searchUsers, clearResults } = useContext(GithubContext);
  const { setAlert } = useContext(AlertContext);

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (text === '') {
      setAlert('error', 'Please enter something');
    } else {
      searchUsers(text);
      setText('');
    }
  };

  return (
    <div className='grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 mb-8 gap-8'>
      <div>
        <form onSubmit={handleSubmit}>
          <div className='form-control'>
            <div className='relative'>
              <input
                type='text'
                className='w-full pr-40 bg-gray-200 input input-lg text-black'
                placeholder='Search'
                value={text}
                onChange={handleChange}
              />
              <button
                type='submit'
                className='absolute top-0 right-0 rounded-l-none w-36 btn btn-lg'
              >
                Go
              </button>
            </div>
          </div>
        </form>
      </div>
      {user.length > 0 && (
        <div>
          <button className='btn btn-ghost btn-lg' onClick={clearResults}>
            Clear
          </button>
        </div>
      )}
    </div>
  );
}

export default UserSearch;

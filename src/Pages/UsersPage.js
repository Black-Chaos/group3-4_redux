import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getAllUsers } from 'redux/users/operations';
import { selectAllUsers } from 'redux/users/selectors';

export function UsersPage() {
  const dispatch = useDispatch();
  const users = useSelector(selectAllUsers);

  useEffect(() => {
    dispatch(getAllUsers());
  }, []);

  return (
    <ul>
      {users.map(({ id, name }) => (
        <li key={id}>
          <Link to={id}>{name}</Link>
        </li>
      ))}
    </ul>
  );
}

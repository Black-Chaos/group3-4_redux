import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getUserDetailsById, removeUser } from 'redux/users/operations';
import { selectUser } from '../redux/users/selectors';
import { Modal } from '../components/Modal/Modal';

export function UserDetailsPage() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  const { userId } = useParams();

  const [isModalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    dispatch(getUserDetailsById(userId));
  }, [dispatch]);

  return (
    <>
      {user && (
        <>
          <div>
            <img src={user.avatar} alt={user.name} />
            <h2>{user.name}</h2>
            <p>{user.number}</p>
            <p>{user.email}</p>
            <p>{user.address}</p>
          </div>
          <button type="button">Delete</button>
          {isModalOpen && <Modal />}
        </>
      )}
    </>
  );
}

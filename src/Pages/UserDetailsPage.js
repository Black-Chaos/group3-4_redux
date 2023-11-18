import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import { getUserDetailsById, removeUser } from 'redux/users/operations';
import { selectUser } from '../redux/users/selectors';
import { Modal } from '../components/Modal/Modal';
import { useNavigate } from 'react-router-dom/dist';

export function UserDetailsPage() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  const navigate = useNavigate();

  const { userId } = useParams();

  const [isModalOpen, setModalOpen] = useState(false);

  const handleDelete = () => {
    setModalOpen(true);
  };

  const handleClickNo = () => {
    setModalOpen(false);
  };

  const handleClickYes = () => {
    dispatch(removeUser(userId));
    navigate('/users');
  };

  useEffect(() => {
    dispatch(getUserDetailsById(userId));
  }, [dispatch, userId]);

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
          <button type="button" onClick={handleDelete}>
            Delete
          </button>
          <Link to="update">Update user</Link>
          {isModalOpen && (
            <Modal
              handleClickNo={handleClickNo}
              handleClickYes={handleClickYes}
            />
          )}
        </>
      )}
    </>
  );
}

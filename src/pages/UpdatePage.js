import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { useNavigate } from 'react-router-dom';
import { getUserDetailsById, updateUser } from 'redux/users/operations';
import { selectUser } from 'redux/users/selectors';

const UpdatePage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { userId } = useParams();
  const currentUser = useSelector(selectUser);
  const [userData, setUserData] = useState({
    name: currentUser?.name,
    number: currentUser?.number,
    email: currentUser?.email,
    address: currentUser?.address,
    avatar: currentUser?.avatar,
  });

  useEffect(() => {
    dispatch(getUserDetailsById(userId));
  }, [dispatch, userId]);

  const handleChange = ({ target: { name, value } }) => {
    setUserData(prevUserData => {
      return { ...prevUserData, [name]: value };
    });
  };

  const handleSubmit = event => {
    event.preventDefault();
    dispatch(updateUser({ id: userId, ...userData }));
    navigate(`/users/${userId}`);
  };

  return (
    <>
      {currentUser && (
        <form onSubmit={handleSubmit}>
          <label>
            Name
            <input
              type="text"
              name="name"
              value={userData.name}
              onChange={handleChange}
            />
          </label>
          <label>
            Number
            <input
              type="text"
              name="number"
              value={userData.number}
              onChange={handleChange}
            />
          </label>
          <label>
            Email
            <input
              type="email"
              name="email"
              value={userData.email}
              onChange={handleChange}
            />
          </label>
          <label>
            Address
            <input
              type="text"
              name="address"
              value={userData.address}
              onChange={handleChange}
            />
          </label>
          <label>
            Avatar
            <input
              type="url"
              name="avatar"
              value={userData.avatar}
              onChange={handleChange}
            />
          </label>
          <button>Submit</button>
        </form>
      )}
    </>
  );
};

export default UpdatePage;

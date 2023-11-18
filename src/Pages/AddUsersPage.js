import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom/dist';
import { addUser } from 'redux/users/operations';

const AddUsersPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async event => {
    event.preventDefault();

    const elements = event.target.elements;

    const data = {
      name: elements.name.value,
      number: elements.number.value,
      email: elements.email.value,
      address: elements.address.value,
      avatar: elements.avatar.value,
    };

    const newUser = await dispatch(addUser(data)).unwrap();
    navigate(`/users/${newUser.id}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name
        <input type="text" name="name" />
      </label>
      <label>
        Number
        <input type="text" name="number" />
      </label>
      <label>
        Email
        <input type="email" name="email" />
      </label>
      <label>
        Address
        <input type="text" name="address" />
      </label>
      <label>
        Avatar
        <input type="url" name="avatar" />
      </label>
      <button>Submit</button>
    </form>
  );
};

export default AddUsersPage;

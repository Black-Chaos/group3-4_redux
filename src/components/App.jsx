import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout/Layout';
import { HomePage } from 'pages/HomePage';
import { UsersPage } from 'pages/UsersPage';
import { UserDetailsPage } from 'pages/UserDetailsPage';
import AddUsersPage from 'pages/AddUsersPage';
import UpdatePage from 'pages/UpdatePage';

export function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="users" element={<UsersPage />} />
        <Route path="users/:userId" element={<UserDetailsPage />} />
        <Route path="users/add" element={<AddUsersPage />} />
        <Route path="users/:userId/update" element={<UpdatePage />} />
      </Route>
    </Routes>
  );
}

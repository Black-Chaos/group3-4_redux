import { Route, Routes } from "react-router-dom";
import { Layout } from "./Layout/Layout";
import { HomePage } from "Pages/HomePage";
import { UsersPage } from "Pages/UsersPage";

export function App() {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<HomePage />} />
                <Route path="users" element={<UsersPage/>} />
            </Route>
        </Routes>
    )
}
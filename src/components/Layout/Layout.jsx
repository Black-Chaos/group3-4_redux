import { Navigation } from "components/Navigation/Navigation";
import { Outlet } from "react-router-dom";

export function Layout() {
    return (
        <>
            <header>
                <Navigation/>
            </header>
            <main>
                <Outlet/>
            </main>
        </>
    )
}
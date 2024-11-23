import { ReactNode } from "react";
import NavBar from "../navbar";

interface LayoutProps {
    children: ReactNode;
}

function Layout({children}: LayoutProps) {
    return (
        <div className="flex flex-col items-center">
            <NavBar />
            {children}
        </div>
    )
}

export default Layout
import { ReactNode } from "react";
import Navbar from "../navbar";

interface LayoutProps {
    children: ReactNode;
}

function Layout({children}: LayoutProps) {
    return (
        <div className="flex flex-col items-center">
            <Navbar />
            {children}
        </div>
    )
}

export default Layout
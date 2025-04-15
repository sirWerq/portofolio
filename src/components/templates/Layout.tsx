import { Navbar } from "../organisms";

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className="w-full min-h-svh relative">
            <Navbar />
            {children}
        </div>
    );
}

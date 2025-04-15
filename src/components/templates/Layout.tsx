import { Navbar, Footer } from "../organisms";

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className="w-full min-h-svh relative space-y-8">
            <Navbar />
            {children}
            <Footer />
        </div>
    );
}

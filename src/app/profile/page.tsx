import Navbar from "../navbar";

export default function Dashboard() {
    return (
        <div>
            <Navbar></Navbar>
            
            <main className="flex min-h-screen flex-col items-center justify-between p-16">
                <h2 className={`mb-3 text-5xl font-semibold`}>
                    Profile
                </h2>
            </main>
        </div>
    )
}
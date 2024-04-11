import Navbar from "../navbar";

export default function Dashboard() {
    return (
        <div>
            <Navbar></Navbar>
            
            <main className="grid grid-cols-3 min-h-screen p-16">
                <div className="col-span-3 flex justify-center">
                    <h2 className={`mb-4 text-5xl font-semibold underline decoration-wavy decoration-2`}>
                        Photo Gallery
                    </h2>
                </div>
                
                <div className={`grid grid-cols-3 justify-center`}>
                    <h4>Explore</h4>
                </div>
            </main>
        </div>
    )
}
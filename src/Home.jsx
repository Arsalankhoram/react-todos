import Todos from "./components/Todos";

export default function Home() {
    return (
        <div>
            <div className="bg-gray-100">
                <div className="flex items-center justify-center h-screen">
                    <Todos />
                </div>
            </div>

        </div>
    )
}
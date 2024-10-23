import Navbar from "@/app/components/navbar"


export default function ProgrammingPage() {
return(
    <div className="max-w-7xl mx-auto px-4 py-10 flex flex-col sm:flex-row sm:space-x-6 space-y-6 sm:space-y-0">
    {/* Web Development Card */}
    <div className="bg-white rounded-lg shadow-md p-6 transition-transform transform hover:scale-105 flex-1">
        <h2 className="text-xl font-semibold text-gray-800 mb-2">Web Development</h2>
        <p className="text-gray-600 mb-4">
            Build stunning, responsive websites that deliver exceptional user experiences. Our team specializes in modern technologies and best practices.
        </p>
        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition">Learn More</button>
    </div>

    {/* SEO Card */}
    <div className="bg-white rounded-lg shadow-md p-6 transition-transform transform hover:scale-105 flex-1">
        <h2 className="text-xl font-semibold text-gray-800 mb-2">SEO</h2>
        <p className="text-gray-600 mb-4">
            Enhance your online visibility with our effective SEO strategies. We focus on optimizing your website to rank higher on search engines and attract organic traffic.
        </p>
        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition">Learn More</button>
    </div>

    {/* Marketing Card */}
    <div className="bg-white rounded-lg shadow-md p-6 transition-transform transform hover:scale-105 flex-1">
        <h2 className="text-xl font-semibold text-gray-800 mb-2">Marketing</h2>
        <p className="text-gray-600 mb-4">
            Engage your target audience with our comprehensive digital marketing strategies. We create tailored campaigns that drive results and boost your brand awareness.
        </p>
        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition">Learn More</button>
    </div>
</div>

)
}
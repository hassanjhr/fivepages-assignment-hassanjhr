
export default function ContactPage(){
    return(
        <div className="max-w-md mx-auto mt-10">
    <form>
        <fieldset className="border-2 border-gray-300 p-4 rounded-lg">
            <legend className="text-lg font-semibold mb-2">Contact Details</legend>
            
            <label className="block mb-4">
                First Name:<br />
                <input type="text" name="firstName" className="mt-1 block w-full border border-gray-300 rounded p-2" placeholder="Enter your first name" required />
            </label>
            
            <label className="block mb-4">
                Email:<br />
                <input type="email" name="email" className="mt-1 block w-full border border-gray-300 rounded p-2" placeholder="Enter your email" required />
            </label>
            
            <label className="block mb-4">
                Mobile Number:<br />
                <input type="tel" name="mobile" className="mt-1 block w-full border border-gray-300 rounded p-2" placeholder="Enter your mobile number" required />
            </label>
            
            <label className="block mb-4">
                Query:<br />
                <textarea name="query" className="mt-1 block w-full border border-gray-300 rounded p-2" placeholder="Enter your query" rows="4" required></textarea>
            </label>

            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition">Submit</button>
        </fieldset>
    </form>
</div>



    )
}
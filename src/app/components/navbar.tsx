import Link from "next/link"
import Image from "next/image"
import digi from "../images/digi.png"

export default function Navbar() {
    return (


        <div className="">
    <ul className="flex justify-between items-center border-4 bg-slate-800 border-slate-800 text-gray-100 px-2 text-xl font-semibold ">
       <div> <div className="flex ">
     
            <li><Link className="px-2 hover:text-sky-700 underline" href='/'>Home</Link></li>
            <li><Link className="px-2 hover:text-sky-700 underline" href='/about'>About</Link></li>
            <li><Link className="px-2 hover:text-sky-700 underline" href='/jobs'>Jobs</Link></li>
            <li><Link className="px-2 hover:text-sky-700 underline" href='/contact'>Contact</Link></li>
            <li><Link className="px-2 hover:text-sky-700 underline lg:flex hidden" href='/jobs/programming'>Programming</Link></li>
            {/* <li><Link className="px-2 hover:text-sky-700 underline" href='/services'>Services</Link></li> */}
            <li className="group relative">
                <button className="px-2 underline hover:text-sky-700">Services</button>
                <ul className="absolute left-0 hidden group-hover:block bg-slate-700 text-gray-100 py-2">
                    <li><Link className="block px-4 py-2 hover:text-sky-700" href="/services/web-development">Web Development</Link></li>
                    <li><Link className="block px-4 py-2 hover:text-sky-700" href="/services/seo">SEO</Link></li>
                    <li><Link className="block px-4 py-2 hover:text-sky-700" href="/services/marketing">Marketing</Link></li>
                </ul>
            </li>
        </div></div>
        <div className=" lg:flex hidden">
        <li className="px-2 "><input type="search" name="search" placeholder=" Enter keyword " className="text-black rounded" /><button className="p-2 underline hover:text-sky-700"> Search</button><input type="submit" value="" /></li>
        <button className="px-2 hover:text-sky-700 underline">Login</button>
        <button className="px-2 hover:text-sky-700 underline">Sign up</button>
        </div>

    </ul>
        


    
</div>

    )
}




{/* <ul className="lg:flex hidden justify-between items-center border-4 bg-slate-800 border-slate-800 text-gray-100 px-2 text-xl font-semibold"> */}


// import Link from "next/link"

// export default function Navbar() {
//     return (
//         <div className="flex justify-center border-4 text-base bg-slate-800 border-slate-800 text-gray-100 items-center">
//             <div className=""><Link className="px-5 text-xl font-semibold" href='/'>Home</Link> </div>       
//             <div><Link className="px-5 text-xl font-semibold" href='/about'>About</Link> </div>
//             <div><Link className="px-5 text-xl font-semibold" href='/jobs'>Jobs</Link></div>
//             <div><Link className="px-5 text-xl font-semibold" href='/jobs/programming'>Programming</Link></div>
//         </div>
//     )
// }



// <div className="">

        //     <ul className="flex justify-center border-4 bg-slate-800 border-slate-800 text-gray-100 items-center px-2 text-xl font-semibold underline ">
        //         <li><Link className="px-2" href='/'>Home</Link></li>
        //         <li><Link className="px-2" href='/about'>About</Link></li>
        //         <li><Link className="px-2" href='/jobs'>Jobs</Link></li>
        //         <li><Link className="px-2" href='/contact'>Contact</Link></li>
        //         <li><Link className="px-2" href='/jobs/programming'>Programming</Link></li>
        //         <li><Link className="px-2" href='/services'>Services</Link></li>
        //         <li ><button className="justify-end">Search</button></li>
        //     </ul>
        //     <ul> 
                
        //         <li></li>
        //     </ul>

        // </div>
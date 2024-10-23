
// import { resolve } from "path"
// import Navbar from "../components/navbar"
import Link from "next/link"
import Image from "next/image"
import digi from "../images/digi.png"

export default async function About() {
    
 await new Promise((resolve) => {
    setTimeout(resolve,2000)
})
 
return(
   
    
    
    
    <div className="flex items-center justify-center p-6">
        {/* Left Side: Image */}
        <div className="lg:flex hidden flex-shrink-0 w-1/2">
        <Image src={digi} alt="logo"></Image>
        {/* <Image src={"./image/digi"} alt="logo" width={"700"} height={"300"}/> */}
        </div>
    
        {/* Right Side: Introduction Text */}
        <div className=" p-2">
            <h2 className=" font-semibold mb-4 text-justify text-gray-600 text-3xl">About Us!</h2>
            <p className="text-gray-700">
            At our core, we are a team of dedicated professionals passionate about helping businesses succeed in the digital landscape. With expertise in web development, SEO, and digital marketing, we strive to deliver innovative solutions tailored to meet the unique needs of our clients.

Our Mission
Our mission is to empower businesses by providing top-quality services that enhance online presence and drive measurable results. We believe in the power of collaboration, working closely with our clients to understand their goals and transform their ideas into reality.

What We Offer
Web Development: We create visually appealing, user-friendly websites that are not only functional but also optimized for performance. Our focus is on providing seamless experiences for your visitors.

SEO: Our search engine optimization strategies are designed to improve your website's visibility on search engines. We implement best practices to attract organic traffic and help you rank higher in search results.

Digital Marketing: We develop comprehensive digital marketing strategies that engage your target audience, increase brand awareness, and drive conversions. From social media marketing to email campaigns, we cover all aspects to ensure your business thrives.

Why Choose Us?
Client-Centric Approach: Your success is our priority. We take the time to understand your needs and tailor our services accordingly.
Experienced Team: Our skilled professionals bring a wealth of knowledge and experience to every project, ensuring high-quality results.
Integrity and Transparency: We believe in honest communication and transparency throughout the process, keeping you informed every step of the way.
Join us as we embark on a journey to elevate your business. Together, we can achieve remarkable results and create a strong digital presence that stands out in today's competitive market.
            </p>
            <p className="mt-4 text-sky-950">
                Feel free to explore our Services!
            </p>
            <br />
            <Link href="services"><button className="border-2 rounded font-semibold text-sky-900 p-2">Services</button></Link>
        </div>
    </div>
    
      );
    } 
    

     //     <div>
          
    //       <h1 className="text-5xl bg-red-800 text-zinc-100 border-b-8
    
    // border-y-amber-900 border-t-8 text-A1Color ml-8" >Home</h1><br />
    // <h1 className="text-2xl font-serif font-semibold underline text-justify flex justify-center">AI Agents:</h1><br />
    // <p className="font-serif text-justify p-2">
    //   Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat a excepturi repellendus doloribus quia dicta eum provident beatae sint cupiditate velit temporibus voluptatibus, odit voluptas molestiae quidem fugit voluptate ullam. Sint quis autem cumque ut aut, eum nesciunt quisquam esse quidem ad laboriosam quia deleniti excepturi rem libero dicta sequi!
    // </p>
    //    </div>
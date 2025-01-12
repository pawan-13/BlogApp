import '../Css/Header.css';
import Image from "next/image"
import { assets } from "../../Assets/assets"

const Header = () => {
  return (
    <div className="py-5 px-5 md:px-12 lg:px-28">
        <div className="flex items-center justify-between">
            <Image src={assets.logo} width={180} alt="" className="w-[130px] sm:w-auto"/>
            <button className="flex items-center gap-2 font-medium py-1 px-3 sm:py-3 sm:px-6 border border-solid border-black shadow-[-7px_7px_0px_#000000]">Get Started <Image src={assets.arrow} alt=""/></button>
        </div>
        <div className="text-center my-12">
            <h1 className="spaceText text-3xl sm:text-5xl font-medium">Latest Blogs</h1>
            <p className="max-w-[740px] m-auto text-xs sm:text-base">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum necessitatibus nulla iste non suscipit, illo et incidunt nam blanditiis facere perferendis voluptas quia voluptatem explicabo! Alias laborum maxime libero odit.</p>
            <form className="flex justify-between max-w-lg scale-75 sm:scale-100 mx-auto mt-10 border border-black shadow-[-7px_7px_0px_#000000]" action="">
              <input type="email" name="email" id="email" placeholder="Enter Your Email" className="pl-4 outline-none" />
              <button type='submit' className="border-l border-black py-4 px-4 sm:px-8 active:bg-gray-600 active:text-white">Subscribe Email</button>
            </form>
        </div>
    </div>
  )
}
export default Header
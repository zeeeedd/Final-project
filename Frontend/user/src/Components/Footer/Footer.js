
import Circle1 from '../../Assists/Footer/div.graphics_blurred-sphere.png';
import Circle2 from '../../Assists/Footer/div.graphics_blurred-sphere (1).png'
import Circle3 from '../../Assists/Footer/div.graphics_blurred-sphere (2).png'
import { Link } from 'react-router-dom';



function Footer() {
    return(
    <>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>

    <section className="relative bg-gradient-to-b from-red-700 via-red-900 to-black text-white py-24 text-center h-[648px] overflow-hidden">
  {/* Circles Background */}
  <div className="absolute inset-0 flex items-center justify-center z-0">
    <img src={Circle1} className="w-[1240px] h-[1240px] rounded-full bg-white/5" />
    <div className="absolute">
      <img src={Circle2} className="w-[1040px] h-[1040px] border border-white/5 bg-white/5 rounded-full" />
    </div>
    <div className="absolute">
      <img src={Circle3} className="w-[840px] h-[840px]" />
    </div>
  </div>

  {/* Bottom Gradient Overlay */}
  <div className="absolute bottom-0 left-0 right-0 h-50 bg-gradient-to-b from-transparent to-black z-10 pointer-events-none"></div>

  {/* Foreground Content */}
  <div className="relative z-20 max-w-4xl mx-auto px-4">
  <h2 className="text-4xl md:text-5xl font-semibold mb-4 mt-10">
      Let’s make something <br></br> great together.
    </h2>
    <p className="text-gray-300 mb-10 mt-10 leading-7">
      Let us know what challenges you are trying <br></br> to solve so we can help.
    </p>
    <Link to="Contact" className="rounded-full border border-white w-14 text-4xl pb-2 h-14 hover:bg-white hover:text-black transition">
      →
    </Link>
  </div>
</section>




<footer className="bg-black text-white px-4 py-12">
  <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
    {/* Left */}
    <div>
      <h1 className="font-bold  text-start text-xl mb-2">🔴 YallahFit</h1>
      <p className='text-start leading-6 mt-5'>We manage fitness journeys <br></br> for everyone, everywhere.</p>
    </div>

    {/* Center */}
    <div className=" flex ">
      <ul className='ml-40'>
        <li className='mb-5 font-bold text-[#e63946]'>Company</li>
        <li className="mb-2"><a href="#" className="hover:underline">Home</a></li>
        <li className="mb-2"><a href="#" className="hover:underline">Offers</a></li>
        <li className="mb-2"><a href="#" className="hover:underline">About us</a></li>
        <li className="mb-2"><a href="#" className="hover:underline">Contact us</a></li>
      </ul>
      <ul className='ml-[180px]'>
        <li className='mb-5 font-bold text-[#e63946]'>Social</li>
        <li className="mb-2"><a href="#" className="hover:underline">LinkedIn</a></li>
        <li className="mb-2"><a href="#" className="hover:underline">Twitter</a></li>
        <li className="mb-2"><a href="#" className="hover:underline">Instagram</a></li>
        <li className="mb-2"><a href="#" className="hover:underline">Facebook</a></li>
      </ul>
      <ul className='ml-[180px]'>
        <li className='mb-5 font-bold text-[#e63946]'>Contact</li>
        <li className="mb-2"><a href="#" className="hover:underline"> +(212) 6 21 73 79 04</a></li>
        <li className="mb-2"><a href="#" className="hover:underline">example@gmail.com</a></li>
        <li className="mb-2"><a href="#" className="hover:underline">Casablanca, Morocco</a></li>
        <li className="mb-2"><a href="#" className="hover:underline"></a></li>
      </ul>
    </div>

    {/* Right - empty to match spacing */}
    <div></div>
  </div>

  <div className="border-t border-gray-800 mt-12 pt-6 text-sm text-gray-400 text-center">
    <div className="mb-2">
      <a href="#" className="mx-2 hover:underline">Terms of Use</a>|
      <a href="#" className="mx-2 hover:underline">Privacy Policy</a>|
      <a href="#" className="mx-2 hover:underline">About Cookies</a>
    </div>
    <p className="mt-4 max-w-3xl mx-auto">
      This product focuses on providing organizations with tools to achieve financial transparency. 
      It might include features for budgeting, expense tracking, financial reporting, and analytics 
      to help businesses understand and communicate their financial health clearly.
    </p>
  </div>
</footer>

  
  </>
  )
}

export default Footer;

const Footer = ()=>{

     let date = new Date().getFullYear();

     return(
          <div className="bg-gradient-to-b from-black to-gray-800 text-white h-auto w-full">
               <div className="py-4">
                    <div className="flex flex-col justify-center items-center text-[14px]">
                         <p>Made by <span className="underline  underline-offset-4 font-bold">MOHASIN PATEL</span></p>
                         <p>&copy;Copyright {date}</p>
                    </div>
               </div>
          </div>
     );
}

export default Footer;
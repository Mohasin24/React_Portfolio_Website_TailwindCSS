
const formApi = "https://getform.io/f/1ce4e375-e2e8-4757-aa1c-b9ed00086501";

const Contact = () => {
  return (
    <div name="Contact" className="w-full h-full bg-gradient-to-b from-black to-gray-800 text-white px-4 py-8 pt-14">

      <div className="max-w-screen-lg h-full mx-auto flex flex-col justify-center items-center ">
        <div className="py-12">
          <p className="text-4xl font-bold border-b-4 border-gray-500">Contact</p>
        </div>

        <div className="w-2/4">
          <form action={formApi} method="POST" className="flex flex-col gap-5">
               <input type="text" name="name" placeholder="Enter your name..." className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none" required />

               <input type="email" name="email" placeholder="Enter your email..." className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none" required />

               <textarea 
                name="message"
                rows="5"
                placeholder="Enter your message here...."
                className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
               />

               <button className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-4 mx-auto flex items-center hover:scale-110 duration-300 rounded-md">Let's Talk</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;

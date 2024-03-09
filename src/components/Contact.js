// API endpoint for the form submission
const formApi = "https://getform.io/f/1ce4e375-e2e8-4757-aa1c-b9ed00086501";

// Functional component for the Contact section
const Contact = () => {
  return (
    <div name="Contact" className="w-full min-h-screen bg-gradient-to-b from-black to-gray-800 text-white flex flex-col justify-center items-center">

      {/* Container for Contact section */}
      <div className="w-full h-full flex flex-col items-center py-14">
        {/* Heading for the Contact section */}
        <div className="py-12">
          <p className="text-4xl font-bold border-b-4 border-gray-500">Contact</p>
        </div>

        {/* Form section */}
        <div className="w-2/4">
          {/* Form for user input */}
          <form action={formApi} method="POST" className="flex flex-col gap-5">
               {/* Input field for name */}
               <input type="text" name="name" placeholder="Enter your name..." className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none" required />

               {/* Input field for email */}
               <input type="email" name="email" placeholder="Enter your email..." className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none" required />

               {/* Textarea for message */}
               <textarea 
                name="message"
                rows="5"
                placeholder="Enter your message here...."
                className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
               />

               {/* Button to submit the form */}
               <button className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-4 mx-auto flex items-center hover:scale-110 duration-300 rounded-md">Let's Talk</button>
          </form>
        </div>
      </div>
    </div>
  );
};

// Exporting the Contact component as the default export
export default Contact;

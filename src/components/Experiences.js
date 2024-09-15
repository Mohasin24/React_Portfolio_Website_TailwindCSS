import { Experience as Experience_List } from "../Data";

const Experience = () => {
     return (
          <div
               name="Experience"
               className="w-full min-h-screen text-white pt-20 bg-gradient-to-b from-black to-gray-800"
          >

               <div className="max-w-screen-lg px-14 pb-10 mx-auto flex flex-col justify-center items-center w-full h-full">
                    {/* Header for the About section */}
                    <div className="pb-8 flex flex-row justify-center items-center">
                         <p className="font-bold text-4xl border-b-4 inline border-gray-500">
                              Experience
                         </p>
                    </div>

                    <div className="bg-gradient-to-b from-black to-gray-900 w-full h-full p-6  shadow-md shadow-gray-500 rounded-md flex flex-col gap-6 justify-center items-center">
                         {
                              Experience_List.map(({ id, designation, organisation, type, date, location, skill }) => (

                                   <div key={id} className="flex flex-row gap-6 justify-center">
                                        <div className="border-white border-r-4 py-2 rounded-md">

                                        </div>
                                        <div
                                             className="rounded-md px-3 md:px-5 py-2 w-[80%] md:w-[50%] h-full bg-gray-800">
                                             <p className="md:text-[1.2rem] font-bold text-center">{designation}</p>
                                             <p className="font-semibold">
                                                  <span>{organisation}</span>
                                                  <span> - </span>
                                                  <span>{type}</span>
                                             </p>
                                             <p className="text-gray-400">{date}</p>
                                             <p>{location}</p>

                                             <div>

                                                  <p className="font-semibold">Skills:</p>
                                                  <p className="text-gray-300 pl-4">{skill}</p>
                                             </div>

                                        </div>
                                   </div>

                              )
                              )
                         }
                    </div>
               </div>
          </div>
     );
}

export default Experience;


import React from 'react'

function Contect() {
  return (
    <div className=' w-full mt-10 flex justify-center items-center'>

     <div className="container w-96">
     <h2 className=" mb-6 text-white  pb-4">
        connect with me
      </h2>

      <form action="#" method="post">
        <input type="text" name="name" id="name" placeholder="Enter your name"
          className="w-full bg-transparent border-b-2 border-gray-500 text-white px-2 py-2  
                          focus:outline-none focus:border-[#FFCFCF] transition duration-300"/>

        <input type="text" name="subject" id="subject"
          placeholder="Enter Subject" // Remove border-none and adjust the border declaration
          className="w-full bg-transparent border-b-2 border-gray-500 text-white px-2 py-2 mt-5
                          focus:outline-none focus:border-[#FFCFCF] transition duration-300"/>

        <textarea name="subject" id="subject" placeholder="Enter your message here "rows="1" cols="50" // Remove border-none and adjust the border declaration
          className="w-full bg-transparent border-b-2 border-gray-500 text-white px-2 py-2 mt-5
              focus:outline-none focus:border-[#FFCFCF] transition duration-300"/>

<button
  type="submit"
  className="text-white px-2 py-1 rounded-sm font-medium shadow-md border-b-2 border-transparent hover:border-b-2 hover:border-white transition mt-5"
>
  Submit
</button>


      </form>
     </div>

    </div>
  )
}

export default Contect


// import React from "react";
// import { FaUser, FaEnvelope, FaBuilding, FaMapMarkerAlt } from "react-icons/fa";

// function Contect() {
//   return (
//     <div className="flex  justify-center min-h-screen  px-4">
//       <div className="w-full max-w-3xl  text-white shadow-lg rounded-lg p-8">
//         {/* Title */}
// ]

//         <form className="space-y-5">

//           <div className="flex flex-col text-sm">


//             <input type="text" name="name" id="name" placeholder="Enter your name"
//               className="w-full bg-transparent border-b-2 border-gray-500 text-white px-2 py-2
//                           focus:outline-none focus:border-yellow-500 transition duration-300"/>




//             <input type="text" name="subject" id="subject"
//               placeholder="Enter Subject" // Remove border-none and adjust the border declaration
//               className="w-full bg-transparent border-b-2 border-gray-500 text-white px-2 py-2
//                           focus:outline-none focus:border-yellow-500 transition duration-300"/>




//             <textarea name="subject" id="subject" placeholder="Enter your message here  " rows="4" cols="50" // Remove border-none and adjust the border declaration
//               className="w-full bg-transparent border-b-2 border-gray-500 text-white px-2 py-2
//               focus:outline-none focus:border-yellow-500 transition duration-300"/>


//             <button
//               type="submit"
//               className="  bg-yellow-500 text-black p-2 rounded-md font-medium shadow-md hover:bg-yellow-600 transition"
//             >
//               Submit
//             </button>
//           </div>

//         </form>
//       </div>
//     </div>
//   );
// }

// export default Contect;

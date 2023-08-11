// import React, { useContext, useEffect, useRef } from 'react'
// import img from "../img/KKART2.png"
// import { Link, Navigate } from 'react-router-dom'
// import Dashboard from './Dashboard'


// function Admin() {
 
  
//   const useName=useRef("null")
//   const password=useRef("null")
   

   
//         function check(){
//             // console.log(useName.current.value)
            
//             if(useName.current.value=="Admin" && password.current.value=="Admin"){
//                <Link to="/admin/dashboard"></Link>
//                 }
//         }
       
      

   


//   return (<>
//     <form className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8" action='/admin/dashboard' method='GET'>
//     <div className="sm:mx-auto sm:w-full sm:max-w-sm">
//       <img
//         className="mx-auto h-20 w-auto"
//         src={img}
//         alt="Your Company"
//       />
//       <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
//         Admin login
//       </h2>
//     </div>

//     <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
//       <div className="space-y-6" >
//         <div>
//           <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
//             Admin
//           </label>
//           <div className="mt-2">
//             <input 
//             value="Admin"
//            ref={useName}
            
//               id="email"
//               name="email"
              
              
//               required
//               className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//             />
//           </div>
//         </div>

//         <div>
//           <div className="flex items-center justify-between">
//             <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
//               Password
//             </label>
//             <div className="text-sm">
//               <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
//                 Forgot password?
//               </a>
//             </div>
//           </div>
//           <div className="mt-2">
//             <input
//             value="Admin"
//             ref={password}
            
//               id="password"
//               name="password"
//               type="password"
//               autoComplete="current-password"
//               required
//               className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//             />
//           </div>
//         </div>

//         <div>
//           <button onClick={check}
            
//             className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
//           >
//             Sign in
//           </button>
//         </div>
//       </div>

      
//     </div>
//   </form>
// </>
// )
// }

// export default Admin


import React, { useRef } from 'react';
import img from "../img/KKART2.png";
import { Link } from 'react-router-dom';
import Dashboard from './Dashboard';

function Admin() {
  const useName = useRef("null");
  const password = useRef("null");

  function check() {
    if (useName.current.value === "Admin" && password.current.value === "Admin") {
      window.location.href = "/admin/dashboard";
    }
  }

  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            className="mx-auto h-20 w-auto"
            src={img}
            alt="Your Company"
          />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Admin login
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <div className="space-y-6">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Admin
              </label>
              <div className="mt-2">
                <input
                  defaultValue="Admin"
                  ref={useName}
                  id="email"
                  name="email"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Password
                </label>
                <div className="text-sm">
                  <a
                    href="#"
                    className="font-semibold text-indigo-600 hover:text-indigo-500"
                  >
                    Forgot password?
                  </a>
                </div>
              </div>
              <div className="mt-2">
                <input
                  defaultValue="Admin"
                  ref={password}
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
                onClick={check}
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign in
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Admin;

import React from 'react'
import data from "./Json";

function Dashboard() {
    console.log(data)
    
  return (

    <>
   
    
        
          <div className="flex flex-col">
            <div className="overflow-x-auto">
              <div className="p-1.5 w-full inline-block align-middle">
                <div className="overflow-hidden border rounded-lg">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th
                          scope="col"
                          className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                        >
                          COUNT
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                        >
                          NAME
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                        >
                          Email
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-xs font-bold text-right text-gray-500 uppercase "
                        >
                          Role
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-xs font-bold text-right text-gray-500 uppercase "
                        >
                          Country
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-xs font-bold text-right text-gray-500 uppercase "
                        >
                          Resume
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                        {data.length !=0 ? 
                        data.map((ele,index)=>(
                            
                            <tr>
                              {  console.log(ele.email)}
                                
                            <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                              {index+1}
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">{ele.first_name}</td>
                            <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                              {ele.email}
                            </td>
                            <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                              <a className="text-green-500 hover:text-blue-700" href="#">
                                {ele.profession}
                              </a>
                            </td>
                            <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                              <a className="text-green-500 hover:text-blue-700" href="#">
                                {ele.country}
                              </a>
                            </td>
                            <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                              <a className="text-orange-500 hover:text-blue-700" href="#">
                                Generate
                              </a>
                            </td>
                          </tr> 
                        ))
                       
                      : <h1>NO DATA</h1>}
                     
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          </>
        );
      };
      


export default Dashboard
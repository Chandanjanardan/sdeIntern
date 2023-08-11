import {React,useEffect} from 'react'
import { Navigate, useNavigate,Link } from 'react-router-dom';
import Resume from './Resume';




function Dashboard({data,firstPostIndex,currentPage}) {
// const navigate = useNavigate()

//   function resumeBuilder(resumeData){

//     <Resume resumeData={resumeData}/>
//     navigate("/resume",{replace:true})
//   }
  
    
    
    
  return (

    <>
   

   
        
          <div className="flex flex-col">
            <div className="overflow-x-auto">
              <div className="p-1.5 w-full inline-block align-middle">
                <div className="overflow-hidden border rounded-lg">
                  <table className="min-w-full divide-y divide-gray-200" >
                    <thead className="bg-gray-50 top-0 sticky">
                      <tr>
                        <th
                          scope="col"
                          className="px-6 py-3 text-xl font-bold text-left text-gray-500 uppercase "
                        >
                          COUNT
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-xl font-bold text-left text-gray-500 uppercase "
                        >
                          NAME
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-xl font-bold text-left text-gray-500 uppercase "
                        >
                          Email
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-xl font-bold text-right text-gray-500 uppercase "
                        >
                          Role
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-xl font-bold text-right text-gray-500 uppercase "
                        >
                          Country
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-xl font-bold text-right text-gray-500 uppercase "
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
                                
                            <td className="px-6 py-4 text-x font-medium text-gray-800 whitespace-nowrap">
                              {firstPostIndex+1}
                            </td>
                            <td className="px-6 py-4 text-x text-gray-800 whitespace-nowrap">{ele.first_name}</td>
                            <td className="px-6 py-4 text-x text-gray-800 whitespace-nowrap">
                              {ele.email}
                            </td>
                            <td className="px-6 py-4 text-x font-medium text-right whitespace-nowrap">
                              <a className="text-green-500 hover:text-blue-700" href="#">
                                {ele.profession}
                              </a>
                            </td>
                            <td className="px-6 py-4 text-x font-medium text-right whitespace-nowrap">
                              <a className="text-green-500 hover:text-blue-700" href="#">
                                {ele.country}
                              </a>
                            </td>
                            <td className="px-6 py-4 text-x font-medium text-right whitespace-nowrap">
                              <Link to={`/resume/${firstPostIndex}`} className="text-orange-500 hover:text-blue-700" href="#">
                              <button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
  Resume
</button>
                                </Link>
                              
                            </td>
                            {firstPostIndex++}
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
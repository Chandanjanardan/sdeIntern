import {React,useState} from 'react'
import jsonData from "./Json"
import Pagination from './Pagination'
import Dashboard from './Dashboard'


function Middleware() {
    
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage, setPostsPerPage] = useState(50);
    const lastPostIndex = currentPage * postsPerPage;
    const firstPostIndex = lastPostIndex - postsPerPage;
    const currentPosts =jsonData.slice(firstPostIndex, lastPostIndex);
    
    console.log("data")
    console.log(currentPage)
   
  return (
    <>
   <Dashboard data={currentPosts} currentPage={currentPage} firstPostIndex={firstPostIndex}/>
   <Pagination  totalPosts={jsonData.length}
                postsPerPage={postsPerPage}
                setCurrentPage={setCurrentPage}
                currentPage={currentPage}/>
    </>
  )
}

export default Middleware
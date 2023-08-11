import {React,useState} from 'react'
import jsonData from "./Json"
import Pagination from './Pagination'
import Dashboard from './Dashboard'
import Filter from './Filter';




function Middleware() {
    
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage, setPostsPerPage] = useState(50);
    const lastPostIndex = currentPage * postsPerPage;
    const firstPostIndex = lastPostIndex - postsPerPage;
    const currentPosts =jsonData.slice(firstPostIndex, lastPostIndex);
    
    console.log(jsonData[3].first_name,"This is testing of data from array")
    console.log(currentPage)
   
  return (
    <>
    <Filter/>
   <Dashboard data={currentPosts} currentPage={currentPage} firstPostIndex={firstPostIndex}/>
   <Pagination  totalPosts={jsonData.length}
                postsPerPage={postsPerPage}
                setCurrentPage={setCurrentPage}
                currentPage={currentPage}/>
    </>
  )
}

export default Middleware
//Complete the necessary code in this file
// import useState

import React, { useState } from "react";
import Post from "./Post";
import "./Posts.css";
import dummyData from '../../dummy-data.js'
// import data 

const PostsPage = (props) => {
  // set up state for your data
   const [postData, setPostData] = useState(dummyData)

 


  return (
    <div className="posts-container-wrapper">
      {/* map through data here to return a Post and pass data as props to Post */}
     {props.dummyData.map((data) =>(
<Post post ={data} /> 
     ))}
        
        
      


    </div>
  );
};

export default PostsPage;


import React, { useState } from 'react';
import ClassCounter from './components/ClassCounter';
import PostItem from './components/PostItem';
import './styles/App.css';
function App() {

  const [posts, setPosts] = useState([
    {id:1, title:"JS", body:"Reacct"},
    {id:2, title:"Java", body:"Servlet"}
  ]);



  return (
    <div className="App">
         <ClassCounter/>
<h1 style={{textAlign: 'center'}}>
  Setlist
</h1>
         {posts.map(post => <PostItem post = {post} key={post.id}/>)}
         

      {/* <h2>{value}</h2>
       <input 
      type="text" 
      value={value}
      onChange ={event => setValue(event.target.value)}/> */}

    </div>
  );
}

export default App;

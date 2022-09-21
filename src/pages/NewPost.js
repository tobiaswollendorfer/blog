import React, { useState } from "react";
import Input from "../components/Input";
import Bloglist from "../components/Bloglist";

//route: /newPost
function NewPost() {
  const [blogPosts, setBlogPosts] = useState([]);
  function deletepost(ID) {
    setBlogPosts((prevBlogPosts) => {
      const updatedBlogPosts = prevBlogPosts.filter((blog) => blog.id !== ID);
      return updatedBlogPosts;
    });
  }
  function editPost(ID, enterdText) {
    console.log(ID);
    for(const e in blogPosts){
      if(blogPosts[e].id === ID)
        console.log(blogPosts[e]);
        blogPosts[e].post = enterdText;
    }
  }
  //need to have value and label for checkbox??
  function addBlog(value, label, id, username, title, date, post) {
    setBlogPosts((prevBlogPosts) => {
      const updatedBlogPosts = [...prevBlogPosts];

      updatedBlogPosts.unshift({
        value: value,
        label: label,
        id: id,
        username: username,
        date: date,
        title: title,
        post: post,
      });

      return updatedBlogPosts;
    });
  }

  return (
    <div>
      <Input onAddBlogPost={addBlog} />
      <Bloglist
        bloglist={blogPosts}
        deletepost={deletepost}
        editPost={editPost}
      />
    </div>
  );
}

export default NewPost;

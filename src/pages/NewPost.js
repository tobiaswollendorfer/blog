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

  console.log(blogPosts);
  return (
    <div>
      <Input onAddBlogPost={addBlog} />
      <Bloglist bloglist={blogPosts} deletepost={deletepost} />
    </div>
  );
}

export default NewPost;

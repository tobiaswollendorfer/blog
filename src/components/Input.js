import React, { useState } from "react";
const Input = (props) => {
  const [inputBlogPosts, setInputBlogPosts] = useState([]);

  const formSubmitHandler = (event) => {
    event.preventDefault();
    props.onAddBlogPost(
      inputBlogPosts.username, //value
      inputBlogPosts.username, //label
      Math.random().toString(), //id (unique)
      inputBlogPosts.username, //username
      inputBlogPosts.title, //date
      inputBlogPosts.date, //title
      inputBlogPosts.post //post
    );
    //reset values of inputfild to " "
    setInputBlogPosts({ username: "", title: "", date: "", post: "" });
  };
  //store each inputfield as object with corresponding keys(username, date, blogtitle, post)
  const handleChange = (e) => {
    setInputBlogPosts({ ...inputBlogPosts, [e.target.name]: e.target.value });
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div>
        <h2>username</h2>
        <input
          type="text"
          id="username"
          value={inputBlogPosts.username}
          name="username"
          onChange={handleChange}
        />
        <h2>date</h2>
        <input
          type="date"
          id="data"
          value={inputBlogPosts.date}
          name="date"
          onChange={handleChange}
        />
        <h2>Blog title</h2>
        <input
          type="text"
          id="title"
          value={inputBlogPosts.title}
          name="title"
          onChange={handleChange}
        />
        <h2>post</h2>
        <textarea
          id="post"
          value={inputBlogPosts.post}
          name="post"
          onChange={handleChange}
        ></textarea>
      </div>
      <button> submit Blog Post</button>
    </form>
  );
};

export default Input;

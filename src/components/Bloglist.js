import React, { useState } from "react";
import IndividualBlog from "./IndividualBlog";
import Select from "react-select";

const Bloglist = (props) => {
  const [selectedOptions, setSelectedOptions] = useState("");

  let postsfiltered = [];
  let filteredUsername = [];

  //if user select one specific user, then compare username und store all there posts in postsfilterd
  //will be displayed after filteroption
  if (props.bloglist !== 0) {
    for (const i in props.bloglist) {
      if (props.bloglist[i].username === selectedOptions.label) {
        postsfiltered.push(props.bloglist[i]);
      }
    }
  }
  //store all non duplicate Usernames in filterUsername store in string Username to use indexOF

  for (const i in props.bloglist) {
    let username = props.bloglist[i].username;
    if (filteredUsername.indexOf(username) === -1)
      filteredUsername.push(username);
  }
  //convert back to Array of Objects to use it in select (need label und value key)
  const options = filteredUsername.map((v) => ({
    label: v,
    value: v,
  }));
  //store selected user as selectedOption
  function handleSelect(data) {
    setSelectedOptions(data);
  }
  
 

  if (props.bloglist.length === 0) {
    return <div>No Blogposts yet, create ?</div>;
  } else {
    return (
      <div>
        <h1> All blogPosts </h1>

        <ul>
          {props.bloglist.map((blog, i) => (
            <IndividualBlog
              blogitem={blog}
              deletepost={props.deletepost}
              editPost={props.editPost}
              key={i}
            ></IndividualBlog>
          ))}
        </ul>
        <h1>filter by username </h1>
        <div>
          <Select options={options} onChange={handleSelect} />
        </div>
        <ul>
          {postsfiltered.map((blog, i) => (
            <IndividualBlog
              blogitem={blog}
              deletepost={props.deletepost}
              editPost={props.editPost}
              key={i}
            ></IndividualBlog>
          ))}
        </ul>
      </div>
    );
  }
};

export default Bloglist;

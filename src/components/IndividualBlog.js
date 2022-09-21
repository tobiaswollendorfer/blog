import React, { useState } from "react";
const IndividualBlog = (props) => {
  const [currentlyinedit, setcurrentlyInEdit] = useState(false);
  const [changedText, setChangedText] = useState("");

  const handleChange = (e) => {
    setChangedText(e.target.value);
  };
  function deleteHandler() {
    props.deletepost(props.blogitem.id);
  }
  function replaceHandler() {
    props.editPost(props.blogitem.id, changedText);
    setcurrentlyInEdit(!currentlyinedit);
  }
  function editPostHandler() {
    setcurrentlyInEdit(!currentlyinedit);
  }

  return (
    <div>
      <div>
        {" "}
        {props.blogitem.post} from {props.blogitem.username}
      </div>
      <button onClick={deleteHandler}> delete Blogpost </button>
      <button onClick={editPostHandler}> edit Blogpost </button>
      {currentlyinedit ? (
        <div>
          <input placeholder="edit your post" onChange={handleChange} />
          <button onClick={replaceHandler}>
            replace old Post with new post
          </button>
        </div>
      ) : (
        <div />
      )}
    </div>
  );
};
export default IndividualBlog;

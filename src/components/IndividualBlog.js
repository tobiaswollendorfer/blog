const IndividualBlog = (props) => {
  function deleteHandler() {
    props.deletepost(props.blogitem.id);
  }
  return (
    <div>
      <div>
        {" "}
        {props.blogitem.post} from {props.blogitem.username}
      </div>
      <button onClick={deleteHandler}> delete Blogpost </button>
    </div>
  );
};
export default IndividualBlog;

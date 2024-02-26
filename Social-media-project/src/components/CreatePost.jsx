import { useContext, useRef } from "react";
import { PostList } from "../store/post-list-store";

const CreatePost = () => {
  const { addPost } = useContext(PostList);

  const userIdElement = useRef();
  const titleElement = useRef();
  const bodyElement = useRef();
  const tagsElement = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    const title = titleElement.current.value;
    const body = bodyElement.current.value;
    const userId = userIdElement.current.value;
    const tags = tagsElement.current.value.split(" ");

    userIdElement.current.value = "";
    titleElement.current.value = "";
    bodyElement.current.value = "";
    tagsElement.current.value = "";

    addPost(userId, title, body, tags);
  };

  return (
    <form className="createPost" onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="userId" className="form-label">
          User Id (can give your name)
        </label>
        <input
          type="text"
          className="form-control"
          id="userId"
          ref={userIdElement}
        />
      </div>

      <div className="mb-3">
        <label htmlFor="title" className="form-label">
          Title for your Post
        </label>
        <input
          type="text"
          className="form-control"
          ref={titleElement}
          id="title"
          placeholder="How are you feeling today. . . "
        />
      </div>

      <div className="mb-3">
        <label htmlFor="body" className="form-label">
          Description
        </label>
        <textarea
          rows="7"
          className="form-control"
          id="body"
          placeholder="Describe more about it. . ."
          ref={bodyElement}
        />
      </div>

      <div className="mb-3">
        <label htmlFor="tags" className="form-label">
          Give space seperated tags
        </label>
        <input
          type="text"
          className="form-control"
          id="tags"
          placeholder="tag1 tag2 tag3...."
          ref={tagsElement}
        />
      </div>

      <button type="submit" className="btn btn-primary">
        Post
      </button>
    </form>
  );
};

export default CreatePost;

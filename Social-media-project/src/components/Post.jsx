import { useContext } from "react";
import { MdDelete } from "react-icons/md";
import { PostList } from "../store/post-list-store";

const Post = ({ post }) => {
  const { deletePost } = useContext(PostList);
  return (
    <div className="card postCard" style={{ width: "80%", minWidth: "20rem" }}>
      <div className="card-body card-yuvi">
        <h5 className="card-title">
          {post.title}
          <span
            className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
            onClick={() => deletePost(post.id)}
          >
            <MdDelete />
          </span>
        </h5>
        <p className="card-text">{post.body}</p>
        {post.tags.map((tag) => (
          <span key={tag} className="badge text-bg-info hashTag">
            {tag}
          </span>
        ))}

        <div className="alert alert-success reaction" role="alert">
          Total reactons in this post is {post.reactions}
        </div>
      </div>
    </div>
  );
};

export default Post;

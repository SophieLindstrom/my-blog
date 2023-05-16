import LikeButton from "./LikeButton";

export default function CommentBox() {
  return (
    <div className="main-container">
      <div>
        <h3>Comments</h3>
        <textarea placeholder="Leave a comment" />
        <div>
          <button>Submit</button>
          <LikeButton />
        </div>
      </div>
    </div>
  );
}

import LikeButton from "./LikeButton";

export default function CommentBox() {
  return (
    <div className="bg-slate-300 p-4">
      <h3>KOMMENTERA</h3>

      <textarea className="rounded-md p-3 mb-3" placeholder="Vad tycker du?" />
      <div>
        <textarea className="rounded-md p-3" placeholder="Namn" />
      </div>
      <div>
        <button>Submit</button>
        <LikeButton />
      </div>
    </div>
  );
}

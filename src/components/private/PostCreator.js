import React from "react";

function PostCreator() {
  const { input, setInput } = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="post-creator">
      <div className="post-creator-top">
        <div>user avatar</div>
        <form>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="post-creator-input"
            placeholder="description"
          ></input>
        </form>
      </div>
      <div className="post-creator-bottom">
        <form>
          <input
            className="post-creator-input"
            placeholder="URL image (optional)"
          ></input>
        </form>
        <button></button>
      </div>
    </div>
  );
}

export default PostCreator;
import React from "react";

function PostCreator() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="post-creator">
      <div className="post-creator-top">
        <div>user avatar</div>
        <form>
          <input
            className="post-creator-input"
            placeholder="description"
          ></input>
        </form>
      </div>
      <div className="post-creator-bottom">
        <form>
          <div>inserir imagem</div>
        </form>
        <button></button>
      </div>
    </div>
  );
}

export default PostCreator;

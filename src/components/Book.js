const Book = () => (
  <>
    <div className="card">
      <div className="title">
        <span>Action</span>
        <h1>Kung Fu Panda: The Dragon Knight</h1>
        <p>Unseen Content</p>
        <ul>
          <li>Comment</li>
          <li>Remove</li>
          <li>Edit</li>
        </ul>
      </div>

      <div className="progress">
        <h4>60%</h4>
      </div>
      <div className="chapter">
        <h4>Current Chapter</h4>
        <h5>Chapter 02</h5>
        <button type="button">IN PROGRESS</button>
      </div>
    </div>

    <div className="card">
      <div className="title">
        <span>Action</span>
        <h1>The Gray Man</h1>
        <p>Unseen Content</p>
        <ul>
          <li>Comment</li>
          <li>Remove</li>
          <li>Edit</li>
        </ul>
      </div>

      <div className="progress">
        <h4>100%</h4>
      </div>
      <div className="chapter">
        <h4>The Gray Man</h4>
        <h5>Chapter 16</h5>
        <button type="button">IN PROGRESS</button>
      </div>
    </div>

  </>
);

export default Book;

/* eslint-disable react/prop-types */
const Book = (props) => {
  const { name, author } = props;

  return (

    <div className="book-info">
      <h2 className="book-title">{name}</h2>
      <h6 className="book-author">{author}</h6>
      <div className="action-buttons">
        <button className="button-outline" type="button">
          Remove
        </button>
      </div>
    </div>
  );
};
export default Book;

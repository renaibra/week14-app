import { useState } from "react";

const ReviewForm = (props) => {
    
    
  const { movie, setMovie } = props;
  const [formData, setFormData] = useState({
    author: "",
    content: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const updatedMovie = {
      ...movie,
      reviews: [
        ...(movie?.reviews || []), // add null check for movie.reviews
        {
          author: formData.author,
          content: formData.content,
        },
      ],
    };
    setFormData({ author: "", content: "" });
  };


  return (
    <form onSubmit={handleFormSubmit}>
      <div className="form-group">
        <label htmlFor="author">Author</label>
        <input
          type="text"
          className="form-control"
          id="author"
          name="author"
          value={formData.author}
          onChange={handleInputChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="content">Content</label>
        <textarea
          className="form-control"
          id="content"
          name="content"
          value={formData.content}
          onChange={handleInputChange}
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default ReviewForm;

const movieData = [
    {
      id: 1,
      title: "The Shawshank Redemption",
      synopsis:
        "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
      rating: 9.3,
      reviews: [
        {
          id: 1,
          movieId: 1,
          text: "This movie is a masterpiece!",
        },
        {
          id: 2,
          movieId: 1,
          text: "I could watch it again and again.",
        },
      ],
    },
    {
      id: 2,
      title: "The Godfather",
      synopsis:
        "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
      rating: 9.2,
      reviews: [
        {
          id: 1,
          movieId: 2,
          text: "One of the best movies ever made!",
        },
        {
          id: 2,
          movieId: 2,
          text: "I love this movie!",
        },
      ],
    },
    {
      id: 3,
      title: "The Dark Knight",
      synopsis:
        "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
      rating: 9.0,
      reviews: [
        {
          id: 1,
          movieId: 3,
          text: "A thrilling masterpiece that never gets old!",
        },
        {
          id: 2,
          movieId: 3,
          text: "A must-watch for any superhero fan!",
        },
      ],
    },
  ];
  export default movieData;

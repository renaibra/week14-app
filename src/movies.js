const movies = [
    {
      id: 1,
      title: "The Shawshank Redemption",
      image: "/images/Shawshank.png",
      synopsis: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
      rating: 4.8,
      reviews: [
        {
          id: 1,
          username: "johndoe",
          text: "This movie is a masterpiece! The acting, writing, and direction are all top-notch."
        },
        {
          id: 2,
          username: "janedoe",
          text: "I've seen this movie so many times and it never gets old. A true classic."
        }
      ]
    },
    {
      id: 2,
      title: "The Godfather",
      image: "/images/Godfather.jpg",
      synopsis: "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
      rating: 4.7,
      reviews: [
        {
          id: 1,
          username: "michaelcorleone",
          text: "I love this movie! The performances are amazing and the story is so gripping."
        },
        {
          id: 2,
          username: "kayadams",
          text: "This is one of the greatest movies ever made. A true cinematic masterpiece."
        }
      ]
    },
    // Add more movie objects here
  ];
  
  export default movies;
  
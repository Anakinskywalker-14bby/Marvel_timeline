const mcuData = [
  { title: "Iron Man", type: "Movie", phase: 1, saga: "The Infinity Saga", month: "May", year: 2008 },
  { title: "The Incredible Hulk", type: "Movie", phase: 1, saga: "The Infinity Saga", month: "June", year: 2008 },
  { title: "Iron Man 2", type: "Movie", phase: 1, saga: "The Infinity Saga", month: "April", year: 2010 },
  { title: "Thor ", type: "Movie", phase: 1, saga: "The Infinity Saga", month: "April", year: 2011 },
  { title: "Captain America: The First Avenger", type: "Movie", phase: 1, saga: "The Infinity Saga", month: "July", year: 2011 },
  { title: "The Avengers", type: "Movie", phase: 1, saga: "The Infinity Saga", month: "April", year: 2012 },

  { title: "Iron Man 3", type: "Movie", phase: 2, saga: "The Infinity Saga", month: "April", year: 2013 },
  { title: "Thor: The Dark World", type: "Movie", phase: 2, saga: "The Infinity Saga", month: "November", year: 2013 },
  { title: "Captain America: The Winter Soldier", type: "Movie", phase: 2, saga: "The Infinity Saga", month: "March" , year: 2014 },
  { title: "Guardians of the Galaxy", type: "Movie", phase: 2, saga: "The Infinity Saga", month: "July" , year: 2014 },
  { title: "Avengers: Age of Ultron", type: "Movie", phase: 2, saga: "The Infinity Saga", month: "April", year: 2015 },

  { title: "Captain America: Civil War", type: "Movie", phase: 3, saga: "The Infinity Saga", month: "April", year: 2016 },
  { title: "Doctor Strange", type: "Movie", phase: 3, saga: "The Infinity Saga", month: "October" , year: 2016 },
  { title: "Guardians of the Galaxy Vol 2", type: "Movie", phase: 3, saga: "The Infinity Saga", month: "April", year: 2017 },
  { title: "Spider-Man: Homecoming", type: "Movie", phase: 3, saga: "The Infinity Saga", month: "July" , year: 2017 },
  { title: "Thor: Ragnarok", type: "Movie", phase: 3, saga: "The Infinity Saga", month: "October" , year: 2017 },
  { title: "Black Panther", type: "Movie", phase: 3, saga: "The Infinity Saga", month: "February" , year: 2018 },
  { title: "Avengers: Infinity War", type: "Movie", phase: 3, saga: "The Infinity Saga", month: "April", year: 2018 },
  { title: "Ant-Man and the Wasp", type: "Movie", phase: 3, saga: "The Infinity Saga", month: "July" , year: 2018 },
  { title: "Captain Marvel", type: "Movie", phase: 3, saga: "The Infinity Saga", month: "March" , year: 2019 },
  { title: "Avengers: Endgame", type: "Movie", phase: 3, saga: "The Infinity Saga", month: "April", year: 2019 },
  { title: "Spider-Man: Far From Home", type: "Movie", phase: 3, saga: "The Infinity Saga", month: "July" , year: 2019 },

  { title: "Black Widow", type: "Movie", phase: 4, saga: "The Multiverse Saga", month: "July", year: 2021 },
  { title: "Shang-Chi and the Legend of the Ten Rings", type: "Movie", phase: 4, saga: "The Multiverse Saga", month: "September", year: 2021 },
  { title: "Eternals", type: "Movie", phase: 4, saga: "The Multiverse Saga", month: "November", year: 2021 },
  { title: "Spider-Man: No Way Home", type: "Movie", phase: 4, saga: "The Multiverse Saga", month: "December", year: 2021 },
  { title: "Doctor Strange in the Multiverse of Madness", type: "Movie", phase: 4, saga: "The Multiverse Saga", month: "May", year: 2022 },
  { title: "Thor: Love and Thunder", type: "Movie", phase: 4, saga: "The Multiverse Saga", month: "July", year: 2022 },
  { title: "Black Panther: Wakanda Forever", type: "Movie", phase: 4, saga: "The Multiverse Saga", month: "November", year: 2022 },

  { title: "Ant-Man and The Wasp: Quantumania", type: "Movie", phase: 5, saga: "The Multiverse Saga", month: "February", year: 2023 },
  { title: "Guardians of the Galaxy Vol 3", type: "Movie", phase: 5, saga: "The Multiverse Saga", month: "May", year: 2023 },
  { title: "The Marvels", type: "Movie", phase: 5, saga: "The Multiverse Saga", month: "November", year: 2023 },
  { title: "Deadpool & Wolverine", type: "Movie", phase: 5, saga: "The Multiverse Saga", month: "July", year: 2024 },
  { title: "Captain America: Brave New World", type: "Movie", phase: 5, saga: "The Multiverse Saga", month: "February", year: 2025 },
  { title: "Thunderbolts*", type: "Movie", phase: 5, saga: "The Multiverse Saga", month: "May", year: 2025 },

  { title: "The Fantastic Four: First Steps", type: "Movie", phase: 6, saga: "The Multiverse Saga", month: "July", year: 2025 },
  { title: "Spider-Man: Brand New Day", type: "Movie", phase: 6, saga: "The Multiverse Saga", month: "July", year: 2026 },
  { title: "Avengers: Doomsday", type: "Movie", phase: 6, saga: "The Multiverse Saga", month: "December", year: 2026 },
  { title: "Avengers: Secret Wars", type: "Movie", phase: 6, saga: "The Multiverse Saga", month: "December", year: 2027 },
];

function renderTimeline() {
  let timelineContainer = document.getElementById("timeline");
  let allHtml = "";

  for (let i = 0; i < mcuData.length; i++) {
      let movie = mcuData[i];
      console.log(movie.title);

      let html = `
      <div class = "timeline-item">
        <h3>${movie.title}</h3>
        <p>${movie.type} | ${movie.year} | Phase ${movie.phase}</p>
      </div>
    `;

    allHtml += html;
  }
    timelineContainer.innerHTML = allHtml;
}

renderTimeline();
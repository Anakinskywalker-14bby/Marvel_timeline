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

  { title: "Eyes of Wakanda", type: "Show", month: "August", year: 2025, phase: 6, saga: "The Multiverse Saga" },
  { title: "Daredevil: Born Again | Season 3", type: "Show", month: "March", year: 2027, phase: 6, saga: "The Multiverse Saga" },
  { title: "Wonder Man | Season 2", type: "Show", month: "N/A", year: "N/A", phase: "N/A", saga: "The Multiverse Saga" },
  { title: "Your Friendly Neighborhood Spider-Man | Season 2", type: "Show", month: "November", year: 2026, phase: 6, saga: "The Multiverse Saga" },
  { title: "VisionQuest", type: "Show", month: "October", year: 2026, phase: 6, saga: "The Multiverse Saga" },
  { title: "X-Men '97 | Season 2", type: "Show", month: "July", year: 2026, phase: "N/A", saga: "Marvel Animation" },
  { title: "The Punisher: One Last Kill", type: "Show", month: "May", year: 2026, phase: 6, saga: "The Multiverse Saga" },
  { title: "Daredevil: Born Again | Season 2", type: "Show", month: "March", year: 2026, phase: 6, saga: "The Multiverse Saga" },
  { title: "Wonder Man | Season 1", type: "Show", month: "January", year: 2026, phase: 6, saga: "The Multiverse Saga" },
  { title: "Marvel Zombies | Season 1", type: "Show", month: "September", year: 2025, phase: 6, saga: "The Multiverse Saga" },
  { title: "Ironheart", type: "Show", month: "June", year: 2025, phase: 5, saga: "The Multiverse Saga" },
  { title: "Daredevil: Born Again | Season 1", type: "Show", month: "March", year: 2025, phase: 5, saga: "The Multiverse Saga" },
  { title: "Your Friendly Neighborhood Spider-Man | Season 1", type: "Show", month: "January", year: 2025, phase: 5, saga: "The Multiverse Saga" },
  { title: "What If...? | Season 3", type: "Show", month: "December", year: 2024, phase: 5, saga: "The Multiverse Saga" },
  { title: "Agatha All Along", type: "Show", month: "September", year: 2024, phase: 5, saga: "The Multiverse Saga" },
  { title: "X-Men '97 | Season 1", type: "Show", month: "March", year: 2024, phase: "N/A", saga: "Marvel Animation" },
  { title: "Echo", type: "Show", month: "January", year: 2024, phase: 5, saga: "The Multiverse Saga" },
  { title: "What If...? | Season 2", type: "Show", month: "December", year: 2023, phase: 5, saga: "The Multiverse Saga" },
  { title: "Loki | Season 2", type: "Show", month: "October", year: 2023, phase: 5, saga: "The Multiverse Saga" },
  { title: "I Am Groot | Season 2", type: "Show", month: "September", year: 2023, phase: 5, saga: "The Multiverse Saga" },
  { title: "Secret Invasion", type: "Show", month: "June", year: 2023, phase: 5, saga: "The Multiverse Saga" },
  { title: "The Guardians of the Galaxy Holiday Special", type: "Show", month: "November", year: 2022, phase: 4, saga: "The Multiverse Saga" },
  { title: "Werewolf By Night", type: "Show", month: "October", year: 2022, phase: 4, saga: "The Multiverse Saga" },
  { title: "She-Hulk: Attorney-at-Law", type: "Show", month: "August", year: 2022, phase: 4, saga: "The Multiverse Saga" },
  { title: "I Am Groot | Season 1", type: "Show", month: "August", year: 2022, phase: 4, saga: "The Multiverse Saga" },
  { title: "Ms. Marvel", type: "Show", month: "June", year: 2022, phase: 4, saga: "The Multiverse Saga" },
  { title: "Moon Knight", type: "Show", month: "March", year: 2022, phase: 4, saga: "The Multiverse Saga" },
  { title: "Hawkeye", type: "Show", month: "November", year: 2021, phase: 4, saga: "The Multiverse Saga" },
  { title: "What If...? | Season 1", type: "Show", month: "August", year: 2021, phase: 4, saga: "The Multiverse Saga" },
  { title: "Loki | Season 1", type: "Show", month: "June", year: 2021, phase: 4, saga: "The Multiverse Saga" },
  { title: "The Falcon and The Winter Soldier", type: "Show", month: "March", year: 2021, phase: 4, saga: "The Multiverse Saga" },
  { title: "Marvel's Daredevil | Season 1", type: "Show", month: "April", year: 2015, phase: "N/A", saga: "The Defenders Saga" },
  { title: "Marvel's Daredevil | Season 2", type: "Show", month: "March", year: 2016, phase: "N/A", saga: "The Defenders Saga" },
  { title: "Marvel's Daredevil | Season 3", type: "Show", month: "October", year: 2018, phase: "N/A", saga: "The Defenders Saga" },
  { title: "Marvel's The Defenders", type: "Show", month: "August", year: 2017, phase: "N/A", saga: "The Defenders Saga" },
  { title: "Marvel's Iron Fist | Season 1", type: "Show", month: "March", year: 2017, phase: "N/A", saga: "The Defenders Saga" },
  { title: "Marvel's Iron Fist | Season 2", type: "Show", month: "September", year: 2018, phase: "N/A", saga: "The Defenders Saga" },
  { title: "Marvel's Jessica Jones | Season 1", type: "Show", month: "November", year: 2015, phase: "N/A", saga: "The Defenders Saga" },
  { title: "Marvel's Jessica Jones | Season 2", type: "Show", month: "March", year: 2018, phase: "N/A", saga: "The Defenders Saga" },
  { title: "Marvel's Jessica Jones | Season 3", type: "Show", month: "June", year: 2019, phase: "N/A", saga: "The Defenders Saga" },
  { title: "Marvel's Luke Cage | Season 1", type: "Show", month: "September", year: 2016, phase: "N/A", saga: "The Defenders Saga" },
  { title: "Marvel's Luke Cage | Season 2", type: "Show", month: "June", year: 2018, phase: "N/A", saga: "The Defenders Saga" },
  { title: "Marvel's The Punisher | Season 1", type: "Show", month: "November", year: 2017, phase: "N/A", saga: "The Defenders Saga" },
  { title: "Marvel's The Punisher | Season 2", type: "Show", month: "January", year: 2019, phase: "N/A", saga: "The Defenders Saga" },
  { title: "Marvel's Agent Carter | Season 1", type: "Show", month: "January", year: 2015, phase: "N/A", saga: "Marvel Television" },
  { title: "Marvel's Agent Carter | Season 2", type: "Show", month: "January", year: 2016, phase: "N/A", saga: "Marvel Television" },
  { title: "Marvel's Agents of S.H.I.E.L.D. | Season 1", type: "Show", month: "September", year: 2013, phase: "N/A", saga: "Marvel Television" },
  { title: "Marvel's Agents of S.H.I.E.L.D. | Season 2", type: "Show", month: "September", year: 2014, phase: "N/A", saga: "Marvel Television" },
  { title: "Marvel's Agents of S.H.I.E.L.D. | Season 3", type: "Show", month: "September", year: 2015, phase: "N/A", saga: "Marvel Television" },
  { title: "Marvel's Agents of S.H.I.E.L.D. | Season 4", type: "Show", month: "September", year: 2016, phase: "N/A", saga: "Marvel Television" },
  { title: "Marvel's Agents of S.H.I.E.L.D. | Season 5", type: "Show", month: "December", year: 2017, phase: "N/A", saga: "Marvel Television" },
  { title: "Marvel's Agents of S.H.I.E.L.D. | Season 6", type: "Show", month: "May", year: 2019, phase: "N/A", saga: "Marvel Television" },
  { title: "Marvel's Agents of S.H.I.E.L.D. | Season 7", type: "Show", month: "May", year: 2020, phase: "N/A", saga: "Marvel Television" },
  { title: "Marvel's Inhumans", type: "Show", month: "September", year: 2017, phase: "N/A", saga: "Marvel Television" },
];

function renderTimeline() {
  let timelineContainer = document.getElementById("timeline");
  let allHtml = "";

  for (let i = 0; i < mcuData.length; i++) {
      let card = mcuData[i];
      console.log(card.title);

      let html = `
      <div class = "timeline-item">
        <h3>${card.title}</h3>
        <p>${card.type} | ${card.year} | Phase ${card.phase}</p>
      </div>
    `;

    allHtml += html;
  }
    timelineContainer.innerHTML = allHtml;
}

renderTimeline();
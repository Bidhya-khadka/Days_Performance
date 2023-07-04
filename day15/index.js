//Q1.
//Filter by genre - sub classification

const { movies } = {
  movies: [
    //val
    {
      title: "Movie A",
      year: 2022,
      genres: [
        //val
        {
          name: "Genre X",
          classification: {
            main: "Action",
            sub: ["Thriller", "Adventure"], //val
          },
        },
        {
          name: "Genre Y",
          classification: {
            main: "Drama",
            sub: ["Romance"],
          },
        },
      ],
      actors: [
        {
          name: "Actor 1",
          role: "Protagonist",
        },
        {
          name: "Actor 2",
          role: "Antagonist",
        },
      ],
    },

    {
      title: "Movie B",
      year: 2019,
      genres: [
        {
          name: "Genre Z",
          classification: {
            main: "Science Fiction",
            sub: ["Thriller"],
          },
        },
        {
          name: "Genre W",
          classification: {
            main: "Mystery",
            sub: ["Suspense"],
          },
        },
      ],
      actors: [
        {
          name: "Actor 3",
          role: "Main Character",
        },
        {
          name: "Actor 4",
          role: "Supporting Character",
        },
      ],
    },
  ],
};

// let response = {
//   success: true,
//   message: "data fetched successfully",
//   data: allAboutMovie,
// };

const checkGenre = (g) => {
  const filterdMovie = movies.filter((movie) => {
    const filterGenreData = movie.genres.filter((genre) => {
      return genre.classification.sub.includes(g);
    });
    return filterGenreData.length > 0;
  });
  console.log(filterdMovie);
};
checkGenre("Romance");

// ***********************************************************************************

// 1. Create a function which sorts the persons based on lastname and if equal on the firstname.
// Example array person:
/*const persons = [
  {
    id: 325330,
    firstname: "Frank",
    lastname: "Lion",
    image: "url",
    birthday: "10.05.1991",
    gender: "male",
    hobbie: ["walking", "basketball"],
    nationality: "syria",
    friends: ["", "", ""],
    residence: 10041,
  },
  {
    id: 325326,
    firstname: "Dan",
    lastname: "Tiger",
    image: "url",
    birthday: "03.18.1990",
    gender: "Male",
    hobbie: ["Football", "Reading"],
    nationality: "switzerland",
    friends: [325330, 325334],
    residence: 10041,
  },
  {
    id: 325326,
    firstname: "Fan",
    lastname: "Tiger",
    image: "url",
    birthday: "03.18.2005",
    gender: "Male",
    hobbie: ["Football", "Reading"],
    nationality: "switzerland",
    friends: [325330, 325334],
    residence: 10041,
  },
  {
    id: 325334,
    firstname: "Bilal",
    lastname: "Zakki",
    image: "url",
    birthday: "08.19.1999",
    gender: "male",
    hobbie: ["swimming", "walking"],
    nationality: "canda",
    friends: [325330, 325326],
    residence: 10012,
  },
];
const sortedPersons = persons.sort((a, b) => {
  if (a.lastname < b.lastname) return -1;
  if (a.lastname > b.lastname) return 1;
  return 0;
});
console.log(sortedPersons);
*/
// ******************************************************************************************

// 2. Create a function creating the Fibonacci sequence:
//     hint: if input = 10, fibonacci sequence should be: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]. First two numbers will be always [0,1] and respective numbers will be sum of last two index in an array.

// const fibonacciSeries = (n) => {
//   const fibArr = [0, 1];
//   for (let i = 2; i < n; i++) {
//     fibArr.push(fibArr[i - 2] + fibArr[i - 1]);
//   }
//   return fibArr;
// };
// console.log(fibonacciSeries(10));

// *******************************************************************************

// 3. Create a function finding the most frequent element in an array:
//     hint: [1, 2, 3, 2, 1, 2, 3, 3, 3] -> Expected result: 3 is the most frequent number.
// f={1:,2:,3:}
// let arr = [1, 2, 3, 2, 1, 2, 3, 3, 3];

// const frequentCount = (arr) => {
//   let fequency = {};
//   let maxCount = 0;
//   let mostFeqentElement = 0;

//   // *************just for Object.keys ans Object.values
//   let maxNumber = 0;
//   // ******************

//   arr.forEach((num) => {
//     if (fequency[num]) {
//       fequency[num]++;
//     } else {
//       fequency[num] = 1;
//     }

//     if (fequency[num] > maxCount) {
//       maxCount = fequency[num];
//       // 3::4
//       mostFeqentElement = num;
//     }

//     Object.values(fequency).forEach((val, index) => {
//       if (val > maxNumber) {
//         maxNumber = val;
//       }
//     });
//   });
//   console.log(fequency);
//   console.log(`${maxCount} is the maximum count of an element`);
//   console.log(`${mostFeqentElement} is the most fequent element of an array`);

//   console.log(`****************************************************`);
//   console.log(maxNumber);
// };
// frequentCount(arr);

//Organizing Instructors

const organizeInstructors = function(instructors) {
  let organized = {};

  //Create all the keys and assign them an empty array
  for (let i = 0; i < instructors.length; i++) {
    organized[instructors[i].course] = [];
  }

  //Push names into arrays (values of the key-value pair)
  for (let i = 0; i < instructors.length; i++) {
    organized[instructors[i].course].push(instructors[i].name);
  }
  return organized;
};

console.log(organizeInstructors([
  {name: "Samuel", course: "iOS"},
  {name: "Victoria", course: "Web"},
  {name: "Karim", course: "Web"},
  {name: "Donald", course: "Web"}
]));
console.log(organizeInstructors([
  {name: "Brendan", course: "Blockchain"},
  {name: "David", course: "Web"},
  {name: "Martha", course: "iOS"},
  {name: "Carlos", course: "Web"}
]));

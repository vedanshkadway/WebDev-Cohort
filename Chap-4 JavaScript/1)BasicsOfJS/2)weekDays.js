//Question: Write a function to calculate the days of the week based on the number provided using switch-case statements.
// 1 --> Monday
// 2 --> Tuesday
// 3 --> Wednesday
// 4 --> Thursday
// 5 --> Friday
// 6 --> Saturday
// 7 --> Sunday

// You just need to implement the getDayOfWeek function
function getDayOfWeek(day) {
  // Return the corresponding day of the week based on the input number
  switch (day){
    case 1:
      return "Monday";
      break;
    case 2:
      return "Tuesday";
      break;
    case 3:
      return "Wednesday";
      break;
    case 4:
      return "Thursday";
      break;
    case 5:
      return "Friday";
      break;
    case 6:
      return "Saturday";
      break;
    case 7:
      return "Sunday";
      break;
    default:
      return "Invalid Day";

  }
}


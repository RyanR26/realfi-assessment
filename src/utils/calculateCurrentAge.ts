export default function calculateCurrentAge(dateOfBirth: Date) {
  var today = new Date(); 
  var diffInMilliSeconds = today.getTime() - dateOfBirth.getTime(); 
  var diffInYears = diffInMilliSeconds/1000/60/60/24/365.25;
  return Math.abs(Math.floor(diffInYears));
};

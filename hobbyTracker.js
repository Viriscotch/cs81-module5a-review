// Daily hobby log with day, hobby name, duration in minutes, and mood
const hobbyLog = [
  { day: "Monday", hobby: "drawing", minutes: 30, mood: "focused" },
  { day: "Tuesday", hobby: "reading", minutes: 20, mood: "relaxed" },
  { day: "Wednesday", hobby: "gaming", minutes: 45, mood: "excited" },
  { day: "Thursday", hobby: "drawing", minutes: 25, mood: "creative" },
  { day: "Friday", hobby: "reading", minutes: 35, mood: "calm" }
];

/*
Calculates the total number of minutes spent on all hobbies
Uses reduce() to accumulate the "minutes" field of each session
*/
function totalTime(log) {
    // sum accumulates total minutes; session is each log entry
  return log.reduce((sum, session) => sum + session.minutes, 0);
}

/*
Returns an array of unique hobby names from the log
Uses map() to extract all hobby names and Set to remove duplicates
*/
function uniqueHobbies(log) {
  const names = log.map(entry => entry.hobby);  // Extract all hobby values
  return [...new Set(names)];   // Use Set to remove duplicates
}

/*
Returns all sessions where the time spent is greater than a given threshold
Uses filter() to select only long sessions
*/
function longSessions(log, minMinutes) {
  return log.filter(entry => entry.minutes > minMinutes);
}

/*
Counts how many sessions match a given mood
Uses filter() to isolate matching entries, then returns their count
*/
function countMood(log, moodType) {
  return log.filter(entry => entry.mood === moodType).length;
}
// Test the functions with the hobby log
console.log("Total time spent:", totalTime(hobbyLog), "minutes");
console.log("Unique hobbies:", uniqueHobbies(hobbyLog));
console.log("Sessions longer than 30 min:", longSessions(hobbyLog, 30));
console.log("Number of relaxed sessions:", countMood(hobbyLog, "relaxed"));

/*
Suggested Improvement:
The function name longSessions() could be renamed to filterByMinimumTime() to make it more descriptive and consistent with its behavior.
*/

// New test
console.log("Number of focused sessions:", countMood(hobbyLog, "focused"));
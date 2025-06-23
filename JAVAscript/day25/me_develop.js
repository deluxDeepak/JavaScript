const cricketQuiz = [
    { question: "What is the maximum number of overs in an ODI match?", options: ["50", "20", "40", "60"], answer: "50" },
    { question: "Who holds the record for most Test centuries?", options: ["Ricky Ponting", "Virat Kohli", "Sachin Tendulkar", "Steve Smith"], answer: "Sachin Tendulkar" },
    { question: "What does LBW stand for?", options: ["Long Ball Warning", "Left Bat Wins", "Leg Before Wicket", "Line Below Waist"], answer: "Leg Before Wicket" },
    { question: "Which country won the first Cricket World Cup?", options: ["India", "West Indies", "Australia", "England"], answer: "West Indies" },
    { question: "How many players are in a cricket team?", options: ["9", "10", "11", "12"], answer: "11" },
    { question: "Who is called the 'Master Blaster'?", options: ["Brian Lara", "Sachin Tendulkar", "Chris Gayle", "Virender Sehwag"], answer: "Sachin Tendulkar" },
    { question: "Which format has 20 overs per side?", options: ["Test", "ODI", "T20", "Super League"], answer: "T20" },
    { question: "Year of first T20 World Cup?", options: ["2005", "2007", "2009", "2011"], answer: "2007" },
    { question: "Most wickets in ODIs?", options: ["Muralitharan", "Wasim Akram", "Anil Kumble", "Glenn McGrath"], answer: "Muralitharan" },
    { question: "What is scoring 100 runs called?", options: ["Double", "Half-century", "Century", "Ton"], answer: "Century" },
    { question: "India's 2011 WC captain?", options: ["Dravid", "Dhoni", "Kohli", "Ganguly"], answer: "Dhoni" },
    { question: "What's a hat-trick?", options: ["3 sixes", "3 wickets in 3 balls", "3 runs", "3 catches"], answer: "3 wickets in 3 balls" },
    { question: "Ball color in Test cricket?", options: ["Red", "White", "Pink", "Yellow"], answer: "Red" },
    { question: "Runs for hitting boundary on full?", options: ["4", "6", "2", "5"], answer: "6" },
    { question: "Ashes series is between?", options: ["India & Pakistan", "Australia & England", "NZ & SA", "WI & SL"], answer: "Australia & England" },
    { question: "Fastest ball ever bowled?", options: ["Brett Lee", "Shoaib Akhtar", "Mitchell Starc", "Mark Wood"], answer: "Shoaib Akhtar" },
    { question: "DRS stands for?", options: ["Decision Review System", "Digital Ref System", "Dynamic Run Summary", "Down Regulation Score"], answer: "Decision Review System" },
    { question: "Total innings in a Test match?", options: ["2", "3", "4", "6"], answer: "4" },
    { question: "Device for no-ball checking?", options: ["UltraEdge", "Snicko", "Hawk-Eye", "Front foot sensor"], answer: "Front foot sensor" },
    { question: "Maiden over means?", options: ["Sixes only", "No runs conceded", "All wickets", "Powerplay over"], answer: "No runs conceded" },
    { question: "Who is called 'The Wall'?", options: ["Ganguly", "Sehwag", "Dravid", "Kohli"], answer: "Dravid" },
    { question: "Most ICC World Cups won?", options: ["India", "Australia", "WI", "England"], answer: "Australia" },
    { question: "Lord’s Cricket Ground is in?", options: ["Sydney", "London", "Mumbai", "Cape Town"], answer: "London" },
    { question: "What is a duck?", options: ["Out on 0", "Fast bowling", "Six in first ball", "Missed stumping"], answer: "Out on 0" },
    { question: "Duration of Test match?", options: ["3 days", "4 days", "5 days", "6 days"], answer: "5 days" },
    { question: "Highest ODI score by individual?", options: ["Sehwag", "Guptill", "Rohit", "Rohit Sharma (264)"], answer: "Rohit Sharma (264)" },
    { question: "Where must bowler not overstep?", options: ["Crease line", "Pitch", "Stumps", "Popping crease"], answer: "Popping crease" },
    { question: "Who makes decisions on field?", options: ["Captain", "Referee", "Coach", "Umpire"], answer: "Umpire" },
    { question: "Max bouncers per over (ODI)?", options: ["1", "2", "3", "Unlimited"], answer: "2" },
    { question: "Googly is?", options: ["Fast ball", "Reverse swing", "Spin variation", "Overthrow"], answer: "Spin variation" },
    { question: "1st to score 10,000 Test runs?", options: ["Sunil Gavaskar", "Sachin", "Lara", "Ponting"], answer: "Sunil Gavaskar" },
    { question: "India's WC 2019 hat-trick bowler?", options: ["Bumrah", "Shami", "Chahal", "Yadav"], answer: "Shami" },
    { question: "Follow-on target in Tests?", options: ["150", "200", "250", "300"], answer: "200" },
    { question: "Min overs for ODI result?", options: ["15", "20", "25", "30"], answer: "20" },
    { question: "What is a yorker?", options: ["Full toss", "Low fast delivery", "Bouncer", "Slow ball"], answer: "Low fast delivery" },
    { question: "1st Indian woman to 2000 T20I runs?", options: ["Harmanpreet", "Mithali", "Smriti", "Jhulan"], answer: "Mithali" },
    { question: "Full form of IPL?", options: ["India Player League", "Indian Premier League", "International Play League", "Indian Power League"], answer: "Indian Premier League" },
    { question: "Double bounce ball result?", options: ["Valid", "Free hit", "No ball", "Dead ball"], answer: "No ball" },
    { question: "India's 1983 WC captain?", options: ["Gavaskar", "Kapil Dev", "Srikkanth", "Amarnath"], answer: "Kapil Dev" },
    { question: "Host of 2023 WC?", options: ["England", "India", "Australia", "NZ"], answer: "India" },
    { question: "Powerplay means?", options: ["Free run scoring", "Restricted fielding", "No bowling change", "Unlimited overs"], answer: "Restricted fielding" },
    { question: "Nightwatchman role?", options: ["Score quick runs", "Protect main batter", "Bowl at night", "Fielding strategy"], answer: "Protect main batter" },
    { question: "What happens on free hit?", options: ["Any run out", "No run", "No dismissal except run out", "Bonus runs"], answer: "No dismissal except run out" },
    { question: "Most Tests played by?", options: ["India", "England", "Australia", "South Africa"], answer: "England" },
    { question: "Best bowling in ODI?", options: ["Chaminda Vaas", "Bumrah", "Murali", "Afridi"], answer: "Chaminda Vaas" },
    { question: "DLS method used for?", options: ["Pitch report", "Powerplay", "Rain-affected games", "Toss"], answer: "Rain-affected games" },
    { question: "Sledging is?", options: ["Cheering", "Trash talk", "Warm-up", "Team huddle"], answer: "Trash talk" },
    { question: "Youngest international centurion?", options: ["Afridi", "Tendulkar", "Hasan Raza", "Jayasuriya"], answer: "Hasan Raza" },
    { question: "T20 slow over-rate penalty?", options: ["No penalty", "Fine only", "Less fielders outside circle", "No bowling change"], answer: "Less fielders outside circle" },
    { question: "Most sixes in international cricket?", options: ["MS Dhoni", "Rohit Sharma", "Chris Gayle", "AB de Villiers"], answer: "Rohit Sharma" }
];

// ***************************jab query selector use karte hai to ye use karo ******************************//
// id=dot(.)
// class=#
// tag=direct name likho 
// const question = document.querySelector('.question');

// const question_tag = document.createElement('p');
// question_tag.innerText = "Hellow i Am Deepak";

// question.append(question_tag);


// *********************************************Array ke ander ke object **********************************//
// console.log(cricketQuiz[0]); //ek object batayega oske ander ka 
// console.log(cricketQuiz[0].question); //Element batayega 

// Agr loop se access karna ho tab for each lagana 
// cricketQuiz.forEach(question =>{
//     console.log(question.question);
//     console.log(question.answer);
// })

// to know the type of array 
// console.log(Array.isArray(cricketQuiz));

// // it shows object because in js it is actually object 
// console.log(typeof cricketQuiz)

let ques_arr = [];
cricketQuiz.forEach((data) => {
    ques_arr.push(data.question)

})
console.log(ques_arr);


for (let i = 0; i < cricketQuiz.length; i++) {
    const question = document.querySelector('.question');
    const question_tag = document.createElement('p');
    question_tag.innerText = `${i + 1}.` + ques_arr[i];

    question.append(question_tag);


}

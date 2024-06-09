// Initial variables ---------------------------------------------------
const timeDict = {
    "sec" : 1000,
    "min" : 60000,
    "hour" : 3600000
}

const welcomes = ["night", "vibe", "life", "light", "lisya", "mood", "groove", "spirit", "aura"];
const animationTime = 1000;
let cycleTime = timeDict.sec*3;
let cyclingWelcomes;

const directory = ["welcome", "post"];
let dirIndex = 0;

let workouts;

// Helper functions ---------------------------------------------------
function isNumber(x) { return typeof x === 'number'; }

// Function - cycle welcoming message ---------------------------------------------------

// set cycle time in minutes
// x = 17, 17 mins
function setCycleTime(x) {
    if (!isNumber(x)) { return; }
    cycleTime = timeDict.min * x;
}

function cycleWelcome() {
    const word = document.getElementById('welcome-word');
    const rand = Math.floor(Math.random() * welcomes.length);
    word.classList.add('fade-out');
    word.classList.remove('fade-in')

    setTimeout(() => {
        word.textContent = welcomes[rand]; // replace text here
        word.classList.add('fade-in');
        word.classList.remove('fade-out')
    }, animationTime);
}

cyclingWelcomes = setInterval(cycleWelcome, cycleTime + animationTime);
// clearInterval(cycleWelcome);

// Function - full screen sections navigation ---------------------------------------------------
document.addEventListener("wheel", function(event) {
    event.preventDefault(); // prevent default scrolling behaviour

    if (event.deltaY > 0) { if (dirIndex < directory.length-1) dirIndex++; } 
    else if (event.deltaY < 0) { if (dirIndex > 0) dirIndex--; }

    let s = "container-".concat(directory[dirIndex]);
    document.getElementById(s).scrollIntoView({ behavior: 'smooth' });
})

// Function - workouts.json
// fetch('workouts.json')
//     .then(response => response.json())
//     .then(data => {
//         workouts = data;
//         console.log(workouts);
//         console.log(data.workouts[0]["exercises"][0]["reps"]);
//     })
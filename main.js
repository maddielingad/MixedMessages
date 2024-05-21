const possibleDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
const possibleFortunes = [
    "find unexpected wealth",
    "encounter an old friend",
    "receive good news",
    "have a productive day",
    "discover a new opportunity",
    "experience a pleasant surprise",
    "feel particularly energetic",
    "get an exciting offer",
    "enjoy a day of relaxation",
    "achieve a personal goal"
];
const possibleAdvice = [
    "celebrate with friends",
    "take time to reflect",
    "invest in yourself",
    "reach out to loved ones",
    "seize the moment",
    "make a bold move",
    "take a well-deserved break",
    "explore new possibilities",
    "be open to new experiences",
    "focus on self-care"
];

randomElement = array => {
    return array[Math.floor(Math.random() * array.length)];
}

const day = randomElement(possibleDays);
const fortune = randomElement(possibleFortunes);
const advice = randomElement(possibleAdvice);

console.log(`On ${day}, you will ${fortune}. Therefore, you should ${advice}.`);
const zodiacSigns = [
    "Aries(मेष)",
    "Taurus(वृषभ)",
    "Gemini(मिथुन)",
    "Cancer(कर्क)",
    "Leo(सिंह)",
    "Virgo(कन्या)",
    "Libra(तुला)",
    "Scorpio(वृश्चिक)",
    "Sagittarius(धनु)",
    "Capricorn(मकर)",
    "Aquarius(कुंभ)",
    "Pisces(मीन)"
];

// size 30
const futurePredictions = [
    "Your career will reach new heights this year, with unexpected opportunities arising.",
    "A significant relationship will blossom, bringing joy and companionship.",
    "Financial stability is on the horizon, allowing for greater peace of mind.",
    "Embrace change, as it will lead to personal growth and exciting adventures.",
    "Your health will flourish, providing you with vitality and energy.",
    "Creative endeavors will be particularly rewarding, bringing recognition.",
    "A long-held dream will finally come to fruition, fulfilling your aspirations.",
    "Travel opportunities will present themselves, expanding your horizons.",
    "Family bonds will strengthen, creating a harmonious home environment.",
    "Unexpected challenges will test your resilience, but you will emerge stronger.",
    "A mentor will appear, guiding you towards your true path.",
    "Your intuition will be heightened, allowing you to make wise decisions.",
    "Forgiveness will bring healing and liberation from the past.",
    "Acts of kindness will have a ripple effect, creating positive change.",
    "Learning new skills will open doors to exciting possibilities.",
    "A significant decision will shape your future, choose wisely.",
    "Embrace solitude, as it will lead to self-discovery and inner peace.",
    "Your leadership qualities will shine, inspiring those around you.",
    "Collaboration will be key to achieving your goals, seek partnerships.",
    "Trust in the universe, even when the path ahead seems unclear.",
    "A period of reflection will bring clarity and renewed purpose.",
    "Your communication skills will be enhanced, fostering deeper connections.",
    "Let go of negativity and embrace a more optimistic outlook.",
    "Celebrate your achievements, no matter how small, to build momentum.",
    "Your determination will overcome obstacles, leading to triumph.",
    "A new perspective will transform your understanding of a challenging situation.",
    "Embrace your unique gifts and talents, sharing them with the world.",
    "Your inner strength will surprise you, empowering you to face adversity.",
    "A period of transformation will lead to a more authentic self.",
    "The seeds you plant today will blossom into a beautiful future."
];

// siz 30
const astrologyRecommendations = [
    "Focus on your strengths and talents to achieve your goals.",
    "Embrace challenges as opportunities for growth and learning.",
    "Cultivate positive relationships and nurture your social connections.",
    "Prioritize self-care and maintain a healthy work-life balance.",
    "Trust your intuition and inner guidance when making decisions.",
    "Express your creativity and explore new avenues of self-expression.",
    "Set clear intentions and align your actions with your aspirations.",
    "Practice gratitude and appreciate the blessings in your life.",
    "Let go of limiting beliefs and embrace a mindset of abundance.",
    "Seek knowledge and expand your understanding of the world.",
    "Be adaptable and open to new experiences and perspectives.",
    "Communicate effectively and express your needs and desires clearly.",
    "Forgive yourself and others, and release any resentment or negativity.",
    "Embrace change and navigate transitions with grace and resilience.",
    "Find inspiration in nature and connect with the natural world.",
    "Practice mindfulness and cultivate a sense of inner peace and calm.",
    "Be patient and persistent in pursuing your long-term objectives.",
    "Celebrate your successes and acknowledge your accomplishments.",
    "Embrace vulnerability and allow yourself to be authentic and genuine.",
    "Serve others and contribute to the well-being of your community.",
    "Honor your emotions and allow yourself to feel and process them.",
    "Set healthy boundaries and protect your energy and well-being.",
    "Seek support from loved ones and trusted advisors when needed.",
    "Embrace your unique qualities and express your individuality.",
    "Live in alignment with your values and principles.",
    "Take calculated risks and step outside of your comfort zone.",
    "Maintain a positive outlook and cultivate optimism and hope.",
    "Learn from your mistakes and use them as stepping stones to success.",
    "Embrace the present moment and savor the joys of everyday life.",
    "Trust in the journey and have faith in the unfolding of your destiny."
];

// size 20
const cosmicVictimCompliments = [
    "Born under a moon too generous for this world.",
    "Blessed with empathy so deep it drowns logic.",
    "Too loyal for a realm that thrives on detachment.",
    "A heart wired to heal others, even when breaking.",
    "Eyes see through souls—often mistaken for staring.",
    "Meant to glow, but prefers the quiet shimmer.",
    "Carries ancient wisdom, mistaken for overthinking.",
    "Cosmic timing never aligns—too ahead of this age.",
    "Energy attracts broken things—heals them silently.",
    "Fate wrote kindness into every reaction.",
    "Emotions read like poetry—too nuanced for the blunt.",
    "Pulls pain from others like a magnet to metal.",
    "Chosen to feel deeply in a shallow sea.",
    "Walks the earth with clouds in every step.",
    "Crafted for peace, but chaos always finds the aura.",
    "Gives too much because the stars stitched generosity in.",
    "Shadowed by selflessness in a sun-loving world.",
    "Rare soul frequency—misunderstood brilliance.",
    "Carries storms in silence, so others may dance in the sun.",
    "Too celestial for the logic of mortals."
];

const form = document.getElementById('form_data');

form.addEventListener('submit', (event) => {

    event.preventDefault();
    // console.log("Submitted to check.");
    // console.log(event.target);

    const name = document.getElementById('name').value;
    const surname = document.getElementById('surname').value;
    // ye data string ke formate me ata hai 
    const date = Number(document.getElementById('date').value);
    const month = Number(document.getElementById('month').value);
    const year = Number(document.getElementById('year').value);

    // console.log(name, surname, date, month, year);

    const result = document.getElementById('result');
    const first_msg = `Hellow ${name} ${surname}`;
    const second_msg = `Your Zodiac sign is ${zodiacSigns[month-1]}.`;
    const third_msg= cosmicVictimCompliments[date-1];
    // const fourth_msg=
    // masg different dene ke liye kuch naya logic likh skte hai 

    // same name wale same recomendation mile 
    let index=(name.length*surname.length*year)%30;
    const fourth_msg=astrologyRecommendations[index];

    // iska bhi rehna chiye prediction 
    index =(date*month*year)%30;
    const sixth_msg=futurePredictions[index];

    
    // result.innerHTML = "Hellow";
    result.innerText=`${first_msg} ${second_msg} ${third_msg} Our Recomendation for You: ${fourth_msg} Your Future Prediction is: ${sixth_msg}`
})







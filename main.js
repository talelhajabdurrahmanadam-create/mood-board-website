const moods={
    happy: "You're doing amazing! Keep shining and spread the joy 💛",
  sad: "It’s okay to feel sad sometimes. Remember: tomorrow is a new start 🌈",
  calm: "Breathe in... breathe out... peace is your superpower 🌿",
  energetic: "Channel your energy! Go after your goals with confidence 🚀"
};

const buttons =document.querySelectorAll(".mood-btn");
const supportMessage=document.getElementById("supportMessage");


buttons.forEach(btn=>{
    btn.addEventListener("click" , () =>{
        const mood =btn.getAttribute("data-mood");
        supportMessage.textContent=moods[mood];
    });
});
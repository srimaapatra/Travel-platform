// ================= CONTACT FORM =================
const form = document.getElementById("contactForm");

if(form){
form.addEventListener("submit", function(e){
  e.preventDefault();

  let name = document.getElementById("name").value.trim();
  let email = document.getElementById("email").value.trim();
  let message = document.getElementById("message").value.trim();
  let status = document.getElementById("status");

  if(!name || !email || !message){
    status.innerText = "⚠ Please fill all fields";
    status.style.color = "red";
    return;
  }

  if(!email.includes("@")){
    status.innerText = "⚠ Invalid email";
    status.style.color = "red";
    return;
  }

  // Save to localStorage (simulate backend)
  let data = {name,email,message};
  let messages = JSON.parse(localStorage.getItem("messages")) || [];
  messages.push(data);
  localStorage.setItem("messages", JSON.stringify(messages));

  status.innerText = "✅ Message sent successfully!";
  status.style.color = "green";

  form.reset();
});
}


// ================= COUNTER =================
function animate(id,target){
let el = document.getElementById(id);
if(!el) return;

let count=0;
let interval=setInterval(()=>{
count += Math.ceil(target/50);
if(count>=target){
count=target;
clearInterval(interval);
}
el.innerText=count;
},30);
}

animate("users",12000);
animate("places",80);
animate("years",10);


// ================= SEARCH (for homepage) =================
function searchDestinations(){
let input=document.querySelector(".search-box input");
if(!input) return;

let value=input.value.toLowerCase();
document.querySelectorAll(".card").forEach(card=>{
let title=card.innerText.toLowerCase();
card.style.display=title.includes(value)?"block":"none";
});
}
function filterCards(){
let input = document.getElementById("searchInput").value.toLowerCase();
let cards = document.querySelectorAll(".card");

cards.forEach(card=>{
let text = card.innerText.toLowerCase();
card.style.display = text.includes(input) ? "block" : "none";
});
}
document.querySelectorAll(".card").forEach(card=>{
card.addEventListener("click", ()=>{
  alert("Opening details page (you can build this next)");
});
});
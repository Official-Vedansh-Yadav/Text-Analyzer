// Event Listners
document.getElementById("submitBtn").addEventListener("click", showresult);
document.getElementById("access-tools").addEventListener("click", trigger_Tools);
document.getElementById("close-btn").addEventListener("click", close_Modal);
document.getElementById("replace-btn").addEventListener("click", replace);
document.getElementById("delete-btn").addEventListener("click", remove_selected_word);
  
// Initializing Variables
var input;
var allwords;

// Function to show the results
function showresult() {
  var input = document.getElementById("input").value;
  var allcharacters = input.split("");
  allwords = input.split(" ");
  if (input === "") {
    allwords = [];
    allcharacters = [];
  }
  document.getElementById("words").getElementsByTagName("span")[0].innerHTML =
    allwords.length;
  document
    .getElementById("characters")
    .getElementsByTagName("span")[0].innerHTML = allcharacters.length;
}

// Functio trigger tge Modal with many tools
function trigger_Tools() {
  let Modal = document.getElementById("modal");
  let darkElement = document.querySelector(".dark-tansparency");
  Modal.style.display = "flex";
  darkElement.style.display = "block";
}

// Function to close the Modal of.tools
function close_Modal() {
  let Modal = document.getElementById("modal");
  let darkElement = document.querySelector(".dark-tansparency");
  Modal.style.display = "none";
  darkElement.style.display = "none";
}

// Function to replace a word with another word
function replace() {
  showresult();
  
  let selected_word = document.getElementById("find").value;
  let replacing_word = document.getElementById("replace").value;
  allwords.forEach((element,index)=>{
    if (element === selected_word) {
      allwords[index] = replacing_word;
    }
  })
  
document.getElementById("input").value = allwords.join(" ");
document.getElementById("find").value = "";
document.getElementById("replace").value =  "";
}

// Function to remove a word from tge paragraph globally
function remove_selected_word() {
  showresult();
  
  let deleting_word = document.getElementById("delete").value;
  allwords.forEach((element, index) => {
    if (element === deleting_word) {
    delete  allwords[index];
    }
  })
  
  document.getElementById("input").value = allwords.join(" ");
  document.getElementById("delete").value = "";
}
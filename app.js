// above 500 is Grade-A
// below 500 and above 400 is Grade-B
// below 400 and above 300 is Grade-C
// below 300 is Grade-D
let gradeMain = document.querySelector(".grade-main")
let grade = document.querySelector('.grade');
let input = document.querySelector('input');
let button = document.querySelector('button');

button.addEventListener("click", ()=> {
    let marks = input.value;
    gradeMain.style.display = "block";
    console.log(marks);
     if(marks>=500) {
            grade.textContent = "You're a Grade-A person"
        }else if(marks>=400) {
             grade.textContent = "You're a Grade-B person"
        }else if(marks>=300){
            grade.textContent = "You're a Grade-C person"
        }else {
            grade.textContent = "You're a Grade-D person"
        }
    input.value = "";
    
})


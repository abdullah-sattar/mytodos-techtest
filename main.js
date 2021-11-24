const input = document.querySelector(".main__input");
const inputBtn = document.querySelector(".main__btn")
const output = document.querySelector(".main__output");
const completed = document.querySelector(".main__completed")

// const tasks = [];

inputBtn.addEventListener("click", (event) => {
    event.preventDefault();
    completed.style.display = "none";
    // tasks.push(input.value);
    // console.log(tasks);
    output.innerHTML = `<li><input type="checkbox">${input.value}</input></li>`
});
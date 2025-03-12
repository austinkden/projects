const boxes = document.querySelectorAll("div.text");
const bkSects = document.querySelectorAll("section.background");
let globalCheck = 0;
let globalCheckList = [];

boxes.forEach(box => {
    box.addEventListener("mouseover", () => {
        globalCheck = 1;
        globalCheckList.push(1);
        setTimeout(() => {
            if (globalCheckList.length < 2) {
                globalCheck = 0;
            }
            globalCheckList.pop();
        }, 1500);
        box.classList.add("stay");

        bkSects.forEach(sect => {
            sect.classList.remove("show");
            sect.classList.add("hide");
        })

        document.querySelector(`section.${box.classList[1]}`).classList.add("show");
    })
});

setInterval(() => {
    if (globalCheck == 0) {
        bkSects.forEach(sect => {
            sect.classList.remove("show");
            sect.classList.add("hide");
        })
    }
}, 100);
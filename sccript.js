//hasattribute
//setattribute
//getattribute
//removeattribute

//appendChild
//prependChild
//after
//before


//creatElement
//creatChild

//classList

let btn = document.querySelector(".btn")
let ul = document.querySelector("ul")
let li = document.querySelectorAll("li")
let inp = document.querySelector("input");
let delBtn1 = document.querySelector(".delBtn1");
let delBtn2 = document.querySelector(".delBtn2");
let delBtn3 = document.querySelector(".delBtn3");
let div = document.querySelectorAll(".div")
for (let i = 0; i < div.length; i++) {
    delBtn1.addEventListener("click", function () {
        div[0].remove();
    });
    delBtn2.addEventListener("click", function () {
        div[1].remove();
    });
    delBtn3.addEventListener("click", function () {
        div[2].remove();
    });
    div[0].addEventListener("click", function () {
        let notCheckedList1 = div[0].querySelector("div")
        notCheckedList1.classList.toggle("checked-list1")
    })
    div[1].addEventListener("click", function () {
        let notCheckedList2 = div[1].querySelector("div")
        notCheckedList2.classList.toggle("checked-list2")
    })
    div[2].addEventListener("click", function () {
        let notCheckedList3 = div[2].querySelector("div")
        notCheckedList3.classList.toggle("checked-list3")
    })
}


btn.addEventListener("click", function () {
    let newDiv = document.createElement("div");
    let del = document.createElement("button");
    let delIcon = document.createElement("i")
    let list = document.createElement("li");
    let newDivnotCheckedList = document.createElement("div");
    let newDivI = document.createElement("i");
    if (list.innerText = inp.value) {

        ul.prepend(newDiv);
        newDiv.classList.add("newDiv");

        newDiv.prepend(newDivnotCheckedList);
        newDivnotCheckedList.prepend(newDivI);
        newDivnotCheckedList.append(list);
        newDivI.classList.add("fa")
        newDivI.classList.add("fa-check")
        newDiv.append(del);
        delIcon.classList.add("fa")
        delIcon.classList.add("fa-trash")
        del.append(delIcon);
        newDiv.addEventListener("click", function () {

            newDivnotCheckedList.classList.toggle("newDivCheckedList")
        })
        if (inp.value = "") {

        }
    } else {
        alert("You must write something!")
    }
    del.addEventListener("click", function () {
        newDiv.remove();
    })

})
inp.addEventListener("keyup", function (event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        btn.click();
    }
})
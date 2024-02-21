"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
let data = {
    id: "",
    content: "",
    author: ""
};
const contentQoute = document.querySelector(".content-qoute");
const contentAuthor = document.querySelector(".content-author");
const generateButton = document.querySelector(".generate-qoute");
generateButton === null || generateButton === void 0 ? void 0 : generateButton.addEventListener("click", () => {
    start();
});
function start() {
    return __awaiter(this, void 0, void 0, function* () {
        yield fetch("https://api.quotable.io/random")
            .then((res) => res.json())
            .then((res) => {
            data.id = res._id;
            data.content = res.content;
            data.author = res.author;
            console.log("data updated");
        });
        console.log(data.content);
        contentQoute.innerText = data.content;
        contentAuthor.innerText = "- " + data.author;
        console.log("function done");
    });
}
start();

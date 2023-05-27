const contentLetterSrart_actived = "Hãy nói gì đó ở đây trước khi người ấy mở bức thư nhé." //Lời mở đầu cho bức thư
const mainContentLetter = "Gửi lời nhắn nhủ đến người bạn bạn yêu thương." //Nội dung của bức thư

// Gắn 1 đường link ảnh bất kì
let imgStart = document.querySelector(".myAI"); //Hình ảnh xuất hiện trong lời mở đầu của bức thư
imgStart.src = "https://static.vecteezy.com/system/resources/previews/013/491/986/non_2x/cute-young-boy-kid-wearing-sweater-and-hat-free-png.png";

// Gắn 1 link ảnh bất kì
let imgLetter = document.querySelector(".img");
imgLetter.src = "data:image/jpeg;base64,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 "; //Hình ảnh xuất hiện trong nội dung của bức thư sau khi bức thư được viết ra hết

const splitContentLetterSrart_actived = contentLetterSrart_actived.split("");

document.querySelector(".sticker").addEventListener("click", function () { //Hiệu ứng gõ chữ cho phần mở đầu của bức thư
    document.querySelector(".contentLetter").innerHTML = "";
    document.querySelector(".startLetter").classList.add("active")
    setTimeout(() => {
        splitContentLetterSrart_actived.forEach((val, index) => {
            setTimeout(() => {
                document.querySelector(".contentLetter").innerHTML += val;
                if (index == contentLetterSrart_actived.length - 1) {
                    setTimeout(() => {
                        document.querySelector(".recieve").setAttribute("style", "opacity: 1; transition: .5s") 
                    }, 1000)
                }
            }, 50 * index)
        })
    }, 1000)
})

document.querySelector("#mess").addEventListener("change", function () { //Hiệu ứng gõ chữ cho phần nội dung của bức thư
    if (this.checked == true) {
        document.querySelector(".content").classList.add("actived")
        const splitMainContentLetter = mainContentLetter.split("");

        splitMainContentLetter.forEach((val, index) => {
            setTimeout(() => {
                document.querySelector(".mainContent").innerHTML += val;
                if (index == mainContentLetter.length - 1) {
                    document.querySelector(".img1").setAttribute("style", "opacity: 1; transition: .5s")
                }
            }, 50 * index)
        })

    } else {
        document.querySelector(".content").classList.remove("actived")
        document.querySelector(".img1").setAttribute("style", "opacity: 0; transition: .5s")
        document.querySelector(".mainContent").innerHTML = "";
    }
})

document.querySelector(".recieve").addEventListener("click", () => {
    document.querySelector(".startLetter").classList.add("close");
    setTimeout(() => {
        document.querySelector(".startForm").classList.add("close");
        setTimeout(() => {
            document.querySelector(".startForm").setAttribute("style", "bottom: 100%");

            let getTypeDevice = document.documentElement.clientWidth;
            if (getTypeDevice <= 768) {
                createLight(20)
            } else {
                createLight(40)
            }

        }, 500)
    }, 500)
})

// Animation Drop light _ Tạo hiệu ứng kim tuyến rơi
//Bạn có thể thiết kế lại để trông chân thật hơn nhé, thiết kế của mình hơi bị cứng và thiếu sự tự nhiên
const getBackground = document.querySelector(".backgroundParty");
var width = getBackground.offsetWidth;
var height = getBackground.offsetHeight;

function createLight(a) {
    var container = document.querySelector(".backgroundParty");
    const blurLv = [2, 4];
    const count = a;
    const allDefaultColor = ["red", "lime", "yellow", "orange", "blue"]

    for (var i = 0; i < count; i++) {
        var randomLeft = 0;
        randomLeft = Math.floor(Math.random() * width);
        var randomTop = 0;
        randomTop = Math.floor(Math.random() * height / 2);
        var color = "white";
        var blur = Math.floor(Math.random() * 2);
        var widthEle = Math.floor(Math.random() * 5) + 15;
        var moveTime = Math.floor(Math.random() * 4) + 4;

        var div = document.createElement("div");
        div.classList.add = "snow";
        div.style.position = "absolute";
        div.style.backgroundColor = allDefaultColor[Math.floor(Math.random() * 5)]
        div.style.borderRadius = Math.floor(Math.random() * 10 + 10).toString() + "px"

        div.style.height = "0px";
        div.style.width = "0px";

        div.style.height = widthEle * Math.floor(Math.random() * 4 + 1) + "px";
        div.style.width = widthEle + "px";
        div.style.marginLeft = randomLeft + "px"
        div.style.marginTop = randomTop + "px"
        div.style.filter = "blur(" + blurLv[blur] + "px" + ")"
        div.style.animation = "moveLight " + moveTime + "s ease-in-out infinite";

        container.appendChild(div);
    }
}
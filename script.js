let imgbox = document.getElementById("imgbox");
let qrImage = document.getElementById("qrImage");
let t2 = document.getElementById("t2");
let messageBox = document.getElementById("messageBox");
let generateBtn = document.getElementById("btn1");
let previousInputValue = "";

function GenerateQR() {
    if (t2.value.length > 0 && t2.value !== previousInputValue) {
        gify.style.display = "block";
        previousInputValue = t2.value; 

        setTimeout(function() {
            qrImage.src = "https://chart.googleapis.com/chart?cht=qr&chs=304x288&choe=UTF-8&chl=" + t2.value;
            qrImage.onload = function() {
                gify.style.display = "none";
                qrImage.style.display = "block";
            };
            messageBox.textContent = "";
        }, 500);
    } else if (t2.value.length === 0) {
        messageBox.textContent = "Please Enter Some Value";
    }
}
t2.addEventListener("input", function() {
    qrImage.style.display = "none";
    gify.style.display = "none";
});
t2.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        event.preventDefault(); 
        GenerateQR();
    }
});
generateBtn.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        event.preventDefault(); 
        GenerateQR();
    }
});

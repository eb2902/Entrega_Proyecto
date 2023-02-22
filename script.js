let profilePic = document.getElementById("pic")
let inputFile = document.getElementById("img")

inputFile.onchange = function(){
    profilePic.src = URL.createObjectURL(inputFile.files[0]);
}
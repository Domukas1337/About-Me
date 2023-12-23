function switchContent(index){
    var contentSection = document.getElementsByClassName("content");
    var buttonSection = document.getElementsByClassName("buttons");
    for (var i = 0; i < contentSection.length; i++){
        contentSection[i].classList.remove("active");
        buttonSection[i].classList.remove("active");
    }
    var selectedContent = document.getElementById("content" + index);
    var selectedButton = document.getElementById("button" + index);
    selectedContent.classList.add("active");
    selectedButton.classList.add("active");
}
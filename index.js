function switchContent(index){
    var contentSection = document.getElementsByClassName("content");
    for (var i = 0; i < contentSection.length; i++){
        contentSection[i].classList.remove("active");
    }
    var selectedContent = document.getElementById("content" + index);
    selectedContent.classList.add("active");
}
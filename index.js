function switchContent(index){
    // get content and button
    var contentSection = document.getElementsByClassName("content");
    var buttonSection = document.getElementsByClassName("buttons");

    // remove active class from all contents
    for (var i = 0; i < contentSection.length; i++){
        contentSection[i].classList.remove("active");
        buttonSection[i].classList.remove("active");
    }
    // get selected content and button
    var selectedContent = document.getElementById("content" + index);
    var selectedButton = document.getElementById("button" + index);
    
    // add active class to selected content
    selectedContent.classList.add("active");
    selectedButton.classList.add("active");
}
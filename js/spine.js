function startSearch() {
    var input, filter, ul, li, a, i;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    ul = document.getElementById("myUL");
    li = document.getElementsByTagName("li");

    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];

        if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = " ";
        } else {
            li[i].style.display = "none"
        }

    }
}


// slide
var on = true;
var myVar = setInterval(function () { if (on) { slides() } on = true; }, 7000);

function slides() {
    document.getElementsByTagName("img")[0].style.width = "0px";
    document.getElementsByTagName("img")[1].style.width = "100%";
    var slide = document.getElementsByTagName("img")[0];
    document.getElementById("slide").appendChild(slide);

}

// show contact
function showContact() {
    document.querySelector(".contact-con").style.display = "flex";
}

function hideContact() {
    document.querySelector(".contact-con").style.display = "none";
}
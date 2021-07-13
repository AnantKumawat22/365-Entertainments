const dropdown = () => {
    document.getElementById("dropdown-content").style.display = "block";
}

const dropdownc = () => {
    document.getElementById("dropdown-content").style.display = "none";
}


var genrevalue = "all";

const getMediaPosters = () => {
    var contents = document.getElementById('contents').children;

    for(var i = 0; i < contents.length; i++){
        document.getElementById('contents').children[i].style.display = "";
    }
    document.getElementsByClassName('name').innerText = "All";
    genrevalue = "all";
    document.getElementById("dropdown-content").style.display = "none";
    updateResults();
}

const getmoviesaction = () => {
    var contents = document.getElementById('contents').children;
    for(var i = 0; i < contents.length; i++){
        var action = document.getElementById('contents').children[i];
        if(action.getAttribute("name") == "action"){
            document.getElementById('contents').children[i].style.display = "";
        }
        else{
            document.getElementById('contents').children[i].style.display = "none";
        }
    }
    document.getElementsByClassName('name').innerText = "Action";
    genrevalue = "action";
    document.getElementById("dropdown-content").style.display = "none";
    updateResults();
}

const getmoviesdrama = () => {
    var contents = document.getElementById('contents').children;

    for(var i = 0; i < contents.length; i++){
        var action = document.getElementById('contents').children[i];
        if(action.getAttribute("name") == "drama"){
            document.getElementById('contents').children[i].style.display = "";
        }
        else{
            document.getElementById('contents').children[i].style.display = "none";
        }
    }
    document.getElementsByClassName('name').innerText = "Drama";
    genrevalue = "drama";
    document.getElementById("dropdown-content").style.display = "none";
    updateResults();
}

const getmoviesscifi = () => {
    var contents = document.getElementById('contents').children;

    for(var i = 0; i < contents.length; i++){
        var action = document.getElementById('contents').children[i];
        if(action.getAttribute("name") == "scifi"){
            document.getElementById('contents').children[i].style.display = "";
        }
        else{
            document.getElementById('contents').children[i].style.display = "none";
        }
    }
    document.getElementsByClassName('name').innerText = "Sci-Fi";
    genrevalue = "scifi";
    document.getElementById("dropdown-content").style.display = "none";
    updateResults();
}





const updateResults = () => {
    console.log("Hello");
    var search = document.getElementById('input').value.trim().toLowerCase();
    var b = document.getElementsByClassName('name');
    
    for (var i = 0; i < b.length; i++) {
        var action = document.getElementById('contents').children[i];

        if ((b[i].innerText.toLowerCase().indexOf(search) > -1) && (genrevalue == action.getAttribute("name"))) {
            b[i].parentElement.parentElement.style.display = ""; 
        }
        else if ((b[i].innerText.toLowerCase().indexOf(search) > -1) && (genrevalue == "all")) {
            b[i].parentElement.parentElement.style.display = ""; 
        }
        else{
            b[i].parentElement.parentElement.style.display = "none";
        }
    }
}
//PZDC GOVNOKOD
document.onkeypress = function (e) {
    console.log(e);

    switch (e.key) {
        case 't':
        case 'е':
            redirect('https://twitter.com/');
            break;
        case 'i':
        case 'ш':
            redirect('https://www.instagram.com/?hl=en');
            break;
        case 'g':
        case 'п':
            redirect('https://github.com/');
            break;
        case 'y':
        case 'н':
            redirect('https://www.youtube.com/');
            break;
        case 's':
        case 'ы':
        case 'і':
            focusSearch();
    }   
}

//find better solution to this^^^

function redirect($link) {
    window.location = $link;
}

function focusSearch() {
    document.getElementById('search_field').focus();
}
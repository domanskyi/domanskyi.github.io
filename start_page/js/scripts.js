document.onkeypress = function (e) {
    $active = document.activeElement;

    if ($active.id != 'search_input') {
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

    switch (e.key) {
        case 'Enter':
            searcher(document.getElementById('search_input').value);
            break;
    }
}

function redirect($link) {
    window.location = $link;
}

function focusSearch() {
    document.getElementById('search_input').focus();
}

function searcher(qur) {
    key = qur.split(' ')[0];

    switch(key) {
        case 'п':
        case 'g':
            qur = qur.substr(2);
            window.open('http://google.com/search?q='+qur, "_self");
            break;
        case 'н':
        case 'y':
            qur = qur.substr(2);
            window.open('https://www.youtube.com/results?search_query='+qur, "_self");
            break;
        case 'к':
        case 'r':
            qur = qur.substr(2);
            window.open('https://www.reddit.com/search?q='+qur, "_self");
            break;
        default: 
            window.open('https://duckduckgo.com/?q='+qur, "_self");
            break;
    }
}

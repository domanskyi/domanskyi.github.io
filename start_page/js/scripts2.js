document.onkeypress = function (e) {
    if(e.key == 'Enter') {
        inputQuery = document.getElementById('search_input').value;

        separatedQuery = separateQuery(inputQuery);

        key = separatedQuery[0];
        query = separatedQuery[1];

        switch(key) {
            case 'g':
                r('http://google.com/', 'http://google.com/search?q=', query);
                break;
            case 'gh':
                r('https://github.com/', 'https://github.com/search?q=', query);
                break;
            case 'y':
                r('https://www.youtube.com/','https://www.youtube.com/results?search_query=',query);
                break;
            case 't':
                r('https://twitter.com/');
                break;
            case 'i':
                r('https://www.instagram.com/?hl=en');
                break;
            case 'r':
                r('https://www.reddit.com/', 'https://www.reddit.com/search?q=', query);
                break;
            default:
                window.open('https://duckduckgo.com/?q='+inputQuery, "_self");
                break;
        }
    } else if(e.key == 's') {
        document.getElementById('search_input').focus();
    }

}

function separateQuery(query) {
    key = query.split(' ')[0].replace(/ /g, '');

    sep = query.split(' ');

    if(sep.length == 1 || sep[1].length == 0) {
        qur = false;
    } else {
        qur = '';
        for (let index = 1; index < sep.length; index++) {
            qur = qur + sep[index] + ' ';
        }
    }

    ret = Array();
    ret[0] = key;
    ret[1] = qur;
        
    return ret;
}

function r(firstLink, secondLink = false, query = true) {
    if(query == false || secondLink == false) {
        window.open(firstLink, "_self");
    } else {
        window.open(secondLink+query, "_self");
    }
}

function fillInput(key) {
    document.getElementById('search_input').value = key + ' ';
    document.getElementById('search_input').focus();
}
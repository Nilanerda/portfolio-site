window.onscroll = function() {
    hideWelcomePage();
    animateNavTabs();
};

function hideWelcomePage() {
    let welcomePage = document.getElementById('welcomePage');
    let header = document.getElementById('header');
    let rect = header.getBoundingClientRect();
    if (rect.top === 0) {
        welcomePage.style.display = 'none';
    }
}

function animateNavTabs() {
    const TOP_CONTENT_INDENT = 40;
    let sections = document.getElementsByClassName('main-content');
    let headerHeight = document.getElementById('header').getBoundingClientRect().height;
    for (let section of sections) {
        let rect = section.getBoundingClientRect();
        let id = section.id;
        if (rect.top <= headerHeight + TOP_CONTENT_INDENT  &&  rect.top + rect.height > headerHeight + TOP_CONTENT_INDENT) {
            document.querySelector('a[href*=' + id + ']').setAttribute('class', 'active');
        } else {
            document.querySelector('a[href*=' + id + ']').setAttribute('class', '');
        }
    }
}
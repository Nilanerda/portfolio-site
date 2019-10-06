window.onscroll = function() {scroll()};
function scroll() {
    let welcomePage = document.getElementById('welcomePage');
    let header = document.getElementById('header');
    let rect = header.getBoundingClientRect();
    if (rect.top === 0) {
        welcomePage.style.display = 'none';
    }
}
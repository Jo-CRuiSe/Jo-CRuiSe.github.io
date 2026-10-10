let menu = document.querySelector('.cake-menu');
let navlist = document.querySelector('.cake-nav-list');

menu.onclick = () => {
    /* menu.classList.toggle('bx-x'); */
    navlist.classList.toggle('open');
}

const sr = ScrollReveal ({
    distance: '65px',
    duration: 2600,
    delay: 450, 
    reset: true
});

sr.reveal('.cake-text', {delay: 200, origin:'top'});
sr.reveal('.cake-menu', {delay: 450, origin:'top'});
sr.reveal('.cake-logo', {delay: 500, origin:'left'});
sr.reveal('.cake-3d-object', {delay: 100, origin:'bottom'});

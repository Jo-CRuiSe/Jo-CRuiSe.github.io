document.querySelectorAll('.dock li').forEach(li => {
    li.addEventListener('click', e => {
        e.currentTarget.classList.add('loading');
      })

    li.addEventListener('mousemove', e => {
        let item = e.target;
        let itemRect = item.getBoundingClientRect();
        let offset = Math.abs(e.clientX - itemRect.left) / itemRect.width;

        var prev = item.previousElementSibling || null;
        var next = item.nextElementSibling || null;

        let scale = 0.6;

        resetScale();

        if (prev) {
            prev.style.setProperty('--scale', 1 + scale * Math.abs(offset - 1));
        }

        item.style.setProperty('--scale', 1 + scale);

        if (next) {
            next.style.setProperty('--scale', 1 + scale * offset);
        }
    })
});

document.querySelector('.dock').addEventListener('mouseleave', e => {
    resetScale();
});

function resetScale() {
    document.querySelectorAll('.dock li').forEach(li => {
        li.style.setProperty('--scale', 1);
    });
}
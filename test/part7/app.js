const portfolioBox = document.querySelector('.portfolio-box');

function generateMasonryGrid(columns, portfolioItems) {
    portfolioBox.innerHTML = '';

    // Store all column arrays which contain the relevant posts
    let columnWrappers = [];

    //Create column item array and add this to columnWrappers object
    for(let i = 0; i < columns; i++) {
        columnWrappers[`column${i}`] = [];
    };


    for(let i = 0; i < portfolioItems.length; i++) {
        const column = i % columns;
        columnWrappers[`column${column}`].push(portfolioItems[i]);
    };

    for(let i = 0; i < columns; i++) {
        let columnPosts = columnWrappers[`column${i}`];
        let column = document.createElement('div');
        column.classList.add('column');

        columnPosts.forEach(portfolioItems => {
            let portfolioItem = document.createElement('div');
            portfolioItem.classList.add('portfolio-item');
            let image = document.createElement('img');
            image.src = portfolioItems.image;
            image.loading = "lazy";
            image.alt = portfolioItems.layerTitle;
            let portfolioLayer = document.createElement('div');
            portfolioLayer.classList.add('portfolio-layer');
            let layerTitle = document.createElement('h4');
            layerTitle.innerText = portfolioItems.layerTitle;
            let popupBtn = document.createElement('button');
            popupBtn.classList.add('popup-btn');
            popupBtn.innerText = '查看更多';
            let icon = document.createElement('i');
            icon.classList.add('fa-solid','fa-arrow-right');
            icon.innerHTML ="";
            let popupView = document.createElement('div');
            popupView.classList.add('popup-view');
            let popupCard = document.createElement('div');
            popupCard.classList.add('popup-card');
            let popupAlign = document.createElement('div');
            popupAlign.classList.add('popup-align');
            let popupRed = document.createElement('a');
            popupRed.classList.add('popup-red');
            let popupYellow = document.createElement('a');
            popupYellow.classList.add('popup-yellow');
            let popupGreen = document.createElement('a');
            popupGreen.classList.add('popup-green');
            let popupInfo = document.createElement('div');
            popupInfo.classList.add('info');
            let infoTitle = document.createElement('h2');
            infoTitle.innerText = portfolioItems.infoTitle;
            let infoText = document.createElement('p');
            infoText.innerText = portfolioItems.info;

            popupBtn.appendChild(icon);
            portfolioLayer.append(layerTitle, popupBtn);
            portfolioItem.append(image, portfolioLayer, popupView);
            popupView.append(popupCard);
            popupCard.append(popupAlign, popupInfo);
            popupAlign.append(popupRed, popupYellow, popupGreen);
            popupInfo.append(infoTitle, infoText);
            column.appendChild(portfolioItem);

            if (portfolioItems.infoTitle == '') {
                popupBtn.style.display = 'none';
            };
        });
        portfolioBox.appendChild(column);
    }

}

let previousScreenSize = window.innerWidth;

window.addEventListener('resize', () => {
    imageIndex = 0;

    if(window.innerWidth < 600 && previousScreenSize > 600) {
        generateMasonryGrid(1, portfolioItems);
    } else if (window.innerWidth >= 600 && window.innerWidth < 1000 && (previousScreenSize < 600 || previousScreenSize >= 1000)) {
        generateMasonryGrid(2, portfolioItems);
    } else if(window.innerWidth >= 1000 && previousScreenSize < 1000) {
        generateMasonryGrid(3, portfolioItems);
    }
    previousScreenSize = window.innerWidth;
});

if (previousScreenSize < 600) {
    generateMasonryGrid(1, portfolioItems);
} else if (previousScreenSize >= 600 && previousScreenSize < 1000) {
    generateMasonryGrid(2, portfolioItems);
} else {
    generateMasonryGrid(3, portfolioItems);
}
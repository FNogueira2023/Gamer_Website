window.onload = () => {
    const track = document.querySelector('.track');
    const url = 'https://dummyjson.com/products';  



    fetch(url)
        .then(res => res.json())
        .then(data => {
            let products = data.products; 
            console.log(products);           

            products.forEach(product => {
                const cardContainer = document.createElement('div');
                cardContainer.setAttribute('class', 'card-container');

                const card = document.createElement('div');
                card.setAttribute('class', 'card');


                const image = document.createElement('img');
                image.src = product.images[0];
                image.setAttribute('class', 'card-image');

                const info = document.createElement('p');
                info.textContent = product.title;
                info.setAttribute('class', 'card-info');


                const a = document.createElement('a');
                const link = document.createTextNode(info.textContent);
                a.appendChild(link);

                a.title = info.textContent;
                a.href = `https://www.amazon.com/s?k=${product.title}`;

                track.appendChild(cardContainer);
                cardContainer.appendChild(card);
                card.appendChild(image);

                card.appendChild(a);
                a.appendChild(info);
            });
        });
}
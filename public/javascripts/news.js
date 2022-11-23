window.onload = () => {
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'addf339929mshc849be3e5d9792ep1b5959jsn3f891bdfa041',
            'X-RapidAPI-Host': 'gamings.p.rapidapi.com'
        }
    };
    const url = 'https://gamings.p.rapidapi.com/news';

    fetch(url, options)
        .then(response => response.json())
        .then(response => {
            const news = response;
            const newsGallery = document.querySelector('.newsGallery');

            console.log(news);

            news.forEach(element => {
                const newsArticle = document.createElement('article');
                newsArticle.setAttribute('class', 'newsArticle');

                const newsImage = document.createElement('img');
                newsImage.setAttribute('class', 'newsImage');
                newsImage.src = element.Image;

                const newsInfo = document.createElement('div')
                newsInfo.setAttribute('class', 'newsInfo');

                const title = document.createElement('h2');
                title.textContent = element.Heading;
                title.setAttribute('class', 'newsTitle');

                const p = document.createElement('p');
                p.textContent = element.Body;
                p.setAttribute('class', 'newsText');

                newsGallery.appendChild(newsArticle);
                newsArticle.append(newsInfo, newsImage);
                newsInfo.append(title, p);

            });
        })
        .catch(err => console.error(err));
}


 
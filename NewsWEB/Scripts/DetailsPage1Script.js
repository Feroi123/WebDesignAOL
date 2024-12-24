let username_value = sessionStorage.getItem('username')
const username_navbar = document.getElementById('username-navbar')

username_navbar.innerHTML = `<div id="username-navbar" class="username-navbar-style">Welcome to NEWSWEB, ${username_value}!</div>`

// Define the API URL
const apiUrl = 'https://newsapi.org/v2/everything?q=tesla&from=2024-11-24&sortBy=publishedAt&apiKey=a22b630cf12343d7b20de624602229c0';

const fetchData = async () => {
  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    let detailsHTML = '';
    const data = await response.json();
    const articles = data.articles;
    console.log("Articles", articles)
    let i = 1;
    const item = articles[i];
    const articleHTML = `
      <div class="details-article-image-container">
        <img src="${item.urlToImage
          }" alt="" class="details-article-image">
      </div>
      <div class="details-article-title">
        ${item.title} 
      </div>
      <div class="details-article-author">
        By ${item.author}
      </div>
      <div class="details-article-content">
      ${item.content}
      </div>
    `
    document.getElementById('details-list').innerHTML = articleHTML;

  } catch (error) {
    console.error('Error:', error);
  }
};

fetchData();

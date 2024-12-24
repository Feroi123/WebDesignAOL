let username_value = sessionStorage.getItem('username')
const username_navbar = document.getElementById('username-navbar')

username_navbar.innerHTML = `<div id="username-navbar" class="username-navbar-style">Welcome to NEWSWEB, ${username_value}!</div>`

// Define the API URL
const apiUrl = 'https://newsapi.org/v2/everything?q=tesla&from=2024-11-24&sortBy=publishedAt&apiKey=a22b630cf12343d7b20de624602229c0';

function Details0(){
  window.location.href="DetailsPage.html";
}

function Details1(){
  window.location.href="DetailsPage1.html";
}

function Details2(){
  window.location.href="DetailsPage2.html";
}


const fetchData = async () => {
  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    let itemlistHTML = '';

    const data = await response.json();
    const articles = data.articles;
    console.log("Articles", articles)

    for(let i = 0; i < 3 ; i++){
      const item = articles[i];
      const html = `
      <div class="items-list" onclick="Details${i}();">
        <div class="image-container">
          <img src="${item.urlToImage
          }" alt="" class="items-image">
        </div>
        <div class="text-container">
          <p class="article-title">
            ${item.title}
          </p>
          <p class="article-author">
            Written by ${item.author}
          </p>
          <p class="article-description">
            "${item.description}"
          </p>
        </div>
      </div>
      `
      itemlistHTML += html;
    }

    console.log(itemlistHTML)
    document.getElementById('item-list').innerHTML = itemlistHTML;

  } catch (error) {
    console.error('Error:', error);
  }
};

fetchData();

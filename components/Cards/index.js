// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.


axios
 .get('https://lambda-times-backend.herokuapp.com/articles')
 .then(results => {
     console.log(results.data)
 })
 .catch(err => {
     console.log(err);
 })

function articleFactory(pass) {
    //create elements
    const shell = document.createElement('div');
    const headline = document.createElement('div');
    const author = document.createElement('div');
    const conImg = document.createElement('div');
    const imgUrl = document.createElement('img');
    const auName = document.createElement('span');
    
    //create structure
    shell.appendChild(headline);
    shell.appendChild(author);
    author.appendChild(conImg);
    conImg.appendChild(imgUrl);
    author.appendChild(auName);

    //add content
    headline.textContent = pass.headline;
    imgUrl.textContent = pass.authorPhoto;
    auname.textContent = pass.authorName;

    //add styles
    shell.classList.add('card');
    headline.classList.add('headline');
    author.classList.add('author');
    conImg.classList.add('img-container');

    return shell;

};

const art = document.querySelector('.cards-container')


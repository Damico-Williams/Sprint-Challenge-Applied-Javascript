// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

axios
 .get('https://lambda-times-backend.herokuapp.com/topics')
 .then(results => {
     console.log(results.data)
     results.data.map(parameter => {
        complete.appendChild(topicFactory(parameter));
     })
 })
 .catch(err => {
     console.log(err);
 })


 function topicFactory(pass) {
    //create elements
    const topic = document.createElement('div');
    
    //create structure
 

    //add content
    // topic.textContent = pass.;
    

    //add styles
    topic.classList.add('tab');

    return topic;

};

const complete = document.querySelector('.topics')
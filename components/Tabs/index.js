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
     //add .topics or not a function on forEach line 18
    const tabs = results.data.topics
      console.log(tabs)
  
     tabs.forEach(parameter => {
        complete.appendChild(topicFactory(parameter));
     })
 })
 .catch(err => {
     console.log(err);
 })


 function topicFactory(pass) {
    //create elements
    const topic = document.createElement('div');
   

    //add content
    topic.textContent = pass;
    

    //add styles
    topic.classList.add('tab');
    
    
    //on event listen a seperate class is activated
    topic.addEventListener('mouseover', () => {
        topic.classList.toggle('active-tab');
   })
   
    topic.addEventListener('mouseleave', () => {
        topic.classList.toggle('active-tab');
   })

    return topic;

};

const complete = document.querySelector('.topics')

//adds a string to the beginning of the list
complete.appendChild(topicFactory('all'))
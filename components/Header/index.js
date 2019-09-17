// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component

let information = [{
    arch: 'SMARCH 28, 2019',
    time: 'Lambda Times',
    deg:'98°'
  }];

function Header(pass) {
    //create elements
    const wrapper = document.createElement('div');
    const date = document.createElement('span');
    const head = document.createElement('h1');
    const degree = document.createElement('span');
    
    //create structure
    wrapper.appendChild(date);
    wrapper.appendChild(head);
    wrapper.appendChild(degree);

    //add content
    date.textContent = pass.arch;
    head.textContent = pass.time;
    degree.textContent = pass.deg;

    //add styles
    wrapper.classList.add('header');
    date.classList.add('date');
    head.classList.add('h1');
    degree.classList.add('temp');

    return wrapper;

}

const add = document.querySelector('.header-container');

information.map(parameter => {
    add.appendChild(Header(parameter));
  });
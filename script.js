/* 
Don't need javascript below. its for changing color of state
document.getElementById('CA').addEventListener('mouseenter', function () {
    this.style.fill = '#ff0000'; // Change color to red on hover
});

document.getElementById('CA').addEventListener('mouseleave', function () {
    this.style.fill = '#da627d'; // Change color back to initial color on mouse leave
}); */

// https://stackoverflow.com/a/60287614

// I would like to attach a hover event to each state, and when the user hovers over the state, it will console.log the state name. States can be selected using the queryselector "svg path"
// 
// How to get data using fetch , API fetch(`https://example.com/api/state/${stateId}`)
//   .then(response => response.json())
//   .then(data => {const state = document.getElementById('stateName');
//     console.log(data);
//   });

// data


const stateData = {
  AL: {
    catsEuthanized: 1466,
    dogsEuthanized: 4274
  },

  AK: {
      catsEuthanized: 344,
      dogsEuthanized: 253
    },
  
  AR: {
    catsEuthanized: 182,
    dogsEuthanized: 479
  },
  
  AZ: {
    catsEuthanized: 1466,
    dogsEuthanized: 4274,
  },
  
  CA: {
    catsEuthanized: 22538,
    dogsEuthanized: 27861,
  },
  
  NY: {
    catsEuthanized: 1154,
    dogsEuthanized: 1205,
  },
  
  TX: {
    catsEuthanized: 12061,
    dogsEuthanized: 5290,
  },

  
  
}


// Defining variable to call in function below
const apiKey = 'CBho7kEWq9cARiPLGY9EfTvQl9BjJ3jyR9zA8e86oR3GeYbSC6 '; 
const statePopup = document.getElementById('statePopup');
const catsEuthanized = document.getElementById('catsEuthanized');
const dogsEuthanized = document.getElementById('dogsEuthanized');



// method to select all svg paths & choose which data to display
document.querySelectorAll('svg path').forEach(state => {
  state.addEventListener('mouseover', function() {
    const stateId = state.getAttribute('id');
    const stateEuthanizedData = stateData[stateId];
  
    StateNameDisplay.textContent = 'State:  '+ stateId;
    catsEuthanized.textContent = `Cats Euthanized: ${stateEuthanizedData.catsEuthanized}`;
    dogsEuthanized.textContent = `Dogs Euthanized: ${stateEuthanizedData.dogsEuthanized}`;

    // Set popup position to be by cursor
    statePopup.style.top = `${event.clientY}px`;
    statePopup.style.left = `${event.clientX + 20}px`; // Adjust as needed

    // Shows the popup
    statePopup.style.display = 'block';
    });

  // Close popup when user stops hovering over state
  state.addEventListener('mouseout', () => {
    // stateName.textContent = '';
    statePopup.style.display = 'none';
  });

});


//Want to delete this - need team discussion(relating to this & html)
 //  stateName.textContent = state.getAttribute('data-name');
 // stateData.textContent = 'Cats Euthanized: ${stateEuthanizedData.catsEuthanized}'; 

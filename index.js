/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}



/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(str) {
  let con = parseInt(str,10);
  if (con < 12 ){
    return 'Good Morning' 
    }
    else if (con >= 12 && con <= 17)  {
      return 'Good Afternoon'
    }
    else {
      return 'Good Evening'
    }
}
/* Write your implementation of displayMessage() */

function displayMessage (str) {
let newHeader = document.getElementById('greeting');
newHeader.innerText = `${str}`;
}

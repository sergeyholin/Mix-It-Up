const result = "gin"
// document.getElementById(myInput.value);


// function searchFunction() {
//     result = document.getElementById("myInput");
//  }


function toggle(){
    var blur = document.getElementById('blur')
    blur.classlist.toggle('active')
}

function searchFunction() {
    result = document.getElementById(myInput.value);
 }




// async function newFormHandler(event) {
//     event.preventDefault();
//     const drink_name = document.querySelector('#drink_name').value;
//     const ingredients = document.querySelector('#ingredients').value;
//     const directions = document.querySelector('#directions').value;
//     // might need to change api to db instead
//     const response = await fetch(`/api/drink`, {
//       method: 'POST',
//       body: JSON.stringify({
//         drink_name,
//         ingredients,
//         directions,
//       }),
//       headers: {
//         'Content-Type': 'application/json',
//       },
//     });
//     //if the drink is added, the 'all' template will be rerendered
//     if (response.ok) {
//       document.location.replace('/');
//     } else {
//       alert('Failed to add drink');
//     }
//   }
  
//   document.querySelector('.new-dish-form').addEventListener('submit', newFormHandler);
module.exports = result
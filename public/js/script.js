// var result = "gin";


// document.getElementById(myInput.value);


// function searchFunction(event) {
//   event.preventDefault();  
//   let result = document.getElementById("search-bar").value;
//   alert(result);
//   console.log(result);
//  }

function toggle() {
  var blur = document.getElementById("blur");
  blur.classlist.toggle("active");
}
// ---------------------------------------------------------
const searchFunction = async (event) => {
  event.preventDefault();

  const result = document.getElementById("search-bar").value.trim();
 location.replace(`/api/search/${result}`);
  // if (result) {
  //   const response =await fetch('/search', {
  //     method: 'POST',
  //     body: JSON.stringify({result}),
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //   });

  //   if (response.ok) {
  //     document.location.replace('/api/display_all');

  //   } else {
  //     alert('Failed to search');
  //   }
  // }
};
// ------------------------------------------------------


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

var drinkPics = {
  '0' : {
    'image' : 'https://images.pexels.com/photos/338713/pexels-photo-338713.jpeg?auto=compress&cs=tinysrgb&w=1600' 
  },
  '1' : {
    'image' : 'https://images.pexels.com/photos/1304540/pexels-photo-1304540.jpeg?auto=compress&cs=tinysrgb&w=1600' 
  },
  '2' : {
    'image' : 'https://images.pexels.com/photos/1304541/pexels-photo-1304541.jpeg?auto=compress&cs=tinysrgb&w=1600' 
  },
  '3' : {
    'image' : 'https://images.pexels.com/photos/2480828/pexels-photo-2480828.jpeg?auto=compress&cs=tinysrgb&w=1600' 
  },
  '4' : {
    'image' : 'https://images.pexels.com/photos/1304542/pexels-photo-1304542.jpeg?auto=compress&cs=tinysrgb&w=1600' 
  },
  '5' : {
    'image' : 'https://images.pexels.com/photos/2336667/pexels-photo-2336667.jpeg?auto=compress&cs=tinysrgb&w=1600' 
  },
  '6' : {
    'image' : 'https://images.pexels.com/photos/2795026/pexels-photo-2795026.jpeg?auto=compress&cs=tinysrgb&w=1600' 
  },
  '7' : {
    'image' : 'https://images.pexels.com/photos/3604314/pexels-photo-3604314.jpeg?auto=compress&cs=tinysrgb&w=1600' 
  },
  '8' : {
    'image' : 'https://images.pexels.com/photos/2093089/pexels-photo-2093089.jpeg?auto=compress&cs=tinysrgb&w=1600' 
  },
  '9' : {
    'image' : 'https://images.pexels.com/photos/434295/pexels-photo-434295.jpeg?auto=compress&cs=tinysrgb&w=1600' 
  },
  '10' : {
    'image' : 'https://images.pexels.com/photos/1590154/pexels-photo-1590154.jpeg?auto=compress&cs=tinysrgb&w=1600' 
  },
  '11' : {
    'image' : 'https://images.pexels.com/photos/1194030/pexels-photo-1194030.jpeg?auto=compress&cs=tinysrgb&w=1600' 
  },
  '12' : {
    'image' : 'https://images.pexels.com/photos/342971/pexels-photo-342971.jpeg?auto=compress&cs=tinysrgb&w=1600' 
  },
  '13' : {
    'image' : 'https://images.pexels.com/photos/8105035/pexels-photo-8105035.jpeg?auto=compress&cs=tinysrgb&w=1600' 
  },
  '14' : {
    'image' : 'https://images.pexels.com/photos/1564534/pexels-photo-1564534.jpeg?auto=compress&cs=tinysrgb&w=1600' 
  },
  '15' : {
    'image' : 'https://images.pexels.com/photos/2663974/pexels-photo-2663974.jpeg?auto=compress&cs=tinysrgb&w=1600' 
  },
  '16' : {
    'image' : 'https://images.pexels.com/photos/2615326/pexels-photo-2615326.jpeg?auto=compress&cs=tinysrgb&w=1600' 
  },
  '17' : {
    'image' : 'https://images.pexels.com/photos/2480823/pexels-photo-2480823.jpeg?auto=compress&cs=tinysrgb&w=1600' 
  },
  '18' : {
    'image' : 'https://images.pexels.com/photos/4021983/pexels-photo-4021983.jpeg?auto=compress&cs=tinysrgb&w=1600' 
  },
  '19' : {
    'image' : 'https://images.pexels.com/photos/3721968/pexels-photo-3721968.jpeg?auto=compress&cs=tinysrgb&w=1600' 
  },
  '20' : {
    'image' : 'https://images.pexels.com/photos/3407778/pexels-photo-3407778.jpeg?auto=compress&cs=tinysrgb&w=1600' 
  },
  '21' : {
    'image' : 'https://images.pexels.com/photos/4958892/pexels-photo-4958892.jpeg?auto=compress&cs=tinysrgb&w=1600' 
  },
  '22' : {
    'image' : 'https://images.pexels.com/photos/7376783/pexels-photo-7376783.jpeg?auto=compress&cs=tinysrgb&w=1600' 
  },
  '23' : {
    'image' : 'https://images.pexels.com/photos/12174019/pexels-photo-12174019.jpeg?auto=compress&cs=tinysrgb&w=1600' 
  },
  '24' : {
    'image' : 'https://images.pexels.com/photos/1289256/pexels-photo-1289256.jpeg?auto=compress&cs=tinysrgb&w=1600' 
  },
  '25' : {
    'image' : 'https://images.pexels.com/photos/3407782/pexels-photo-3407782.jpeg?auto=compress&cs=tinysrgb&w=1600' 
  },
  '26' : {
    'image' : 'https://images.pexels.com/photos/4667182/pexels-photo-4667182.jpeg?auto=compress&cs=tinysrgb&w=1600' 
  },
  '27' : {
    'image' : 'https://images.pexels.com/photos/1282278/pexels-photo-1282278.jpeg?auto=compress&cs=tinysrgb&w=1600' 
  },
  '28' : {
    'image' : 'https://images.pexels.com/photos/2691360/pexels-photo-2691360.jpeg?auto=compress&cs=tinysrgb&w=300' 
  },
  '29' : {
    'image' : 'https://images.pexels.com/photos/2842876/pexels-photo-2842876.jpeg?auto=compress&cs=tinysrgb&w=300' 
  },
  '30' : {
    'image' : 'https://images.pexels.com/photos/594302/pexels-photo-594302.jpeg?auto=compress&cs=tinysrgb&w=300' 
  },
  '31' : {
    'image' : 'https://images.pexels.com/photos/10836625/pexels-photo-10836625.jpeg?auto=compress&cs=tinysrgb&w=300' 
  },
  '32' : {
    'image' : 'https://images.pexels.com/photos/10836604/pexels-photo-10836604.jpeg?auto=compress&cs=tinysrgb&w=300' 
  },
  '33' : {
    'image' : 'https://images.pexels.com/photos/6542680/pexels-photo-6542680.jpeg?auto=compress&cs=tinysrgb&w=300' 
  },
  '34' : {
    'image' : 'https://images.pexels.com/photos/9009821/pexels-photo-9009821.jpeg?auto=compress&cs=tinysrgb&w=300' 
  },
  '35' : {
    'image' : 'https://images.pexels.com/photos/4279097/pexels-photo-4279097.jpeg?auto=compress&cs=tinysrgb&w=300' 
  },
  '36' : {
    'image' : 'https://images.pexels.com/photos/3196019/pexels-photo-3196019.jpeg?auto=compress&cs=tinysrgb&w=300' 
  },
  '37' : {
    'image' : 'https://images.pexels.com/photos/6542293/pexels-photo-6542293.jpeg?auto=compress&cs=tinysrgb&w=300' 
  },
  '38' : {
    'image' : 'https://images.pexels.com/photos/5947020/pexels-photo-5947020.jpeg?auto=compress&cs=tinysrgb&w=300' 
  },
  '39' : {
    'image' : 'https://images.pexels.com/photos/4946725/pexels-photo-4946725.jpeg?auto=compress&cs=tinysrgb&w=300' 
  },
  '40' : {
    'image' : 'https://images.pexels.com/photos/12365242/pexels-photo-12365242.jpeg?auto=compress&cs=tinysrgb&w=300' 
  },
}

var picArray = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '40']
var randomIndex = Math.floor(Math.random()*picArray.length);
var randomPic = picArray[randomIndex];
console.log(randomPic);

var panelBody = document.getElementById("panelImage");
panelBody.style.backgroundImage = drinkPics[randomPic].image; 




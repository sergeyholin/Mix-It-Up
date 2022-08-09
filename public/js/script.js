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

};

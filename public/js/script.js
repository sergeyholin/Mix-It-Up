// For poping out and darkening background.
function toggle() {
  var blur = document.getElementById("blur");
  blur.classlist.toggle("active");
}
// Search function for search bar.
const searchFunction = async (event) => {
  event.preventDefault();

  const result = document.getElementById("search-bar").value.trim();
 location.replace(`/api/search/${result}`);
};
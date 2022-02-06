function hidefunc() {
    var sm = document.getElementById('sm');
    var element = document.getElementById('list');
    var bg = document.getElementById('colorbg');
    if (element.style.display === "none") {
        element.style.display = "block";
        sm.style.display = "flex";
        bg.style.backgroundColor = "#4b4276";

    } else {
        bg.style.backgroundColor = "white";
        element.style.display = "none";
        sm.style.display = "none";

        // element.style.backgroundColor="white"
    }
}

// fetch('https://jsonplaceholder.typicode.com/posts').then(function (response) {
// 	// The API call was successful!
// 	console.log('success!', response);
// }).catch(function (err) {
// 	// There was an error
// 	console.warn('Something went wrong.', err);
// });
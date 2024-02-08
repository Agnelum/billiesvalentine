// function handleChoice() {
//     const choice = document.querySelector('input[name="choice"]:checked').value;
//     if (choice === "yes") {
//       // Redirect to Snapchat (replace with your actual Snapchat link)
//       window.location.href = "img/milk-and-mocha-hug.gif";
//     } else {
//       // Display a sad face (you can use an emoji or an image)
//     //   alert("😢");
//     window.location.href = "img/sad-face-bear.gif";
        
//     }
//   }

function handleChoice() {
    const choice = document.querySelector('input[name="choice"]:checked').value;
    const resultContainer = document.getElementById('result');
    if (choice === "yes") {
        // Display the happy GIF
        resultContainer.innerHTML = '<img src="img/milk-and-mocha-hug.gif" alt="Happy GIF">';
    } else {
        // Display the sad GIF
        resultContainer.innerHTML = '<img src="img/teddy-bear.gif" alt="Sad GIF">';
    }
}

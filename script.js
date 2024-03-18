document.getElementById('fetch-button').addEventListener('click', function() {
  fetch('https://dog.ceo/api/breeds/image/random')
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      displayDogImage(data.message);
    })
    .catch(error => {
      console.error('There was a problem with the fetch operation:', error);
      alert('Failed to fetch random dog image. Please try again later.');
    });
});

function displayDogImage(imageUrl) {
  const dogImage = document.getElementById('dog-image');
  dogImage.src = imageUrl;
}

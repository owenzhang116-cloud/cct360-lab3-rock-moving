let story = 1;
let slide = 1;

function showSlide() {
  let photoNumber = slide;
  let photo = document.getElementById("photo");
  let caption = document.getElementById("caption");

  if (story === 2) {
    photoNumber = 4 - slide;
  }

  if (photoNumber === 1) {
    photo.src = "outside.png";
    photo.alt = "The rock sitting outside on a concrete path";
  } else if (photoNumber === 2) {
    photo.src = "door.png";
    photo.alt = "The rock at the doorway of a house";
  } else {
    photo.src = "sofa.png";
    photo.alt = "The rock sitting on a beige sofa";
  }

  if (slide === 1) {
    document.getElementById("step").innerHTML = "Beginning - 1 / 3";
  } else if (slide === 2) {
    document.getElementById("step").innerHTML = "Middle - 2 / 3";
  } else {
    document.getElementById("step").innerHTML = "End - 3 / 3";
  }

  if (story === 1) {
    document.getElementById("storyTitle").innerHTML = "Story 1: Moving in";
    document.getElementById("story1Button").style.backgroundColor = "lightblue";
    document.getElementById("story2Button").style.backgroundColor = "lightgray";

    if (slide === 1) {
      caption.innerHTML = "The rock waited outside for 300 years.";
    } else if (slide === 2) {
      caption.innerHTML = "Someone finally let it in.";
    } else {
      caption.innerHTML = "It found a home. It decided not to pay rent.";
    }
  } else {
    document.getElementById("storyTitle").innerHTML = "Story 2: Moving out";
    document.getElementById("story1Button").style.backgroundColor = "lightgray";
    document.getElementById("story2Button").style.backgroundColor = "lightblue";

    if (slide === 1) {
      caption.innerHTML = "The rock had not paid rent for 300 years.";
    } else if (slide === 2) {
      caption.innerHTML = "The landlord asked it to step outside.";
    } else {
      caption.innerHTML = "Back on the ground. At least this place is free.";
    }
  }

  document.getElementById("previousButton").disabled = slide === 1;
  document.getElementById("nextButton").disabled = slide === 3;
}

function chooseStory1() {
  story = 1;
  slide = 1;
  showSlide();
}

function chooseStory2() {
  story = 2;
  slide = 1;
  showSlide();
}

function previousSlide() {
  if (slide > 1) {
    slide = slide - 1;
    showSlide();
  }
}

function nextSlide() {
  if (slide < 3) {
    slide = slide + 1;
    showSlide();
  }
}

document.getElementById("story1Button").addEventListener("click", chooseStory1);
document.getElementById("story2Button").addEventListener("click", chooseStory2);
document.getElementById("previousButton").addEventListener("click", previousSlide);
document.getElementById("nextButton").addEventListener("click", nextSlide);

showSlide();

// Important: I had help from AI to generate comments, I dont have much experience with large projects so i struggle with writing comments properly.
// I was origonally going to not use AI; however the lack of proper comments was really confusing me so i used it for that purpose. I just want to be transparrent.

// Get the button and project elements
const projectHideButton = document.getElementById(
  "projects-hide"
) as HTMLButtonElement;
const projects = document.querySelectorAll(
  ".project"
) as NodeListOf<HTMLElement>; // Assert as NodeList of HTMLElements
const educationHideButton = document.getElementById(
  "education-hide"
) as HTMLButtonElement;
const institutions = document.querySelectorAll(
  ".institution"
) as NodeListOf<HTMLElement>; // Assert as NodeList of HTMLElements

// Add an event listener to the project hide button
projectHideButton.addEventListener("click", () => {
  // Toggle the visibility of each project
  projects.forEach((project) => {
    // Assert that project is an HTMLElement
    if (project.style.display === "none") {
      project.style.display = "block"; // Show the project
    } else {
      project.style.display = "none"; // Hide the project
    }
  });

  // Change the button text based on visibility
  if (projectHideButton.textContent === "Hide") {
    projectHideButton.textContent = "Show"; // Change text to "Show"
  } else {
    projectHideButton.textContent = "Hide"; // Change text back to "Hide"
  }
});

// Add an event listener to the education hide button
educationHideButton.addEventListener("click", () => {
  // Toggle the visibility of each institution
  institutions.forEach((institution) => {
    // Assert that project is an HTMLElement
    if (institution.style.display === "none") {
      institution.style.display = "block"; // Show the institution
    } else {
      institution.style.display = "none"; // Hide the institution
    }
  });

  // Change the button text based on visibility
  if (educationHideButton.textContent === "Hide") {
    educationHideButton.textContent = "Show"; // Change text to "Show"
  } else {
    educationHideButton.textContent = "Hide"; // Change text back to "Hide"
  }
});

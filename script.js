const initEditButtons = () => {
  const editButtons = document.querySelectorAll(".edit");
  editButtons.forEach((button) => {
    button.addEventListener("click", (event) => {
      const section = event.target.closest("section");
      toggleEditMode(button, section);
    });
  });
};

const toggleEditMode = (button, section) => {
  const elements = section.querySelectorAll("h3, p, img");
  if (button.textContent === "Edit") {
    button.textContent = "Save";
    elements.forEach((el) => {
      if (el.tagName === "IMG") {
        addFileInput(el);
      } else {
        el.contentEditable = "true";
      }
    });
  } else {
    button.textContent = "Edit";
    elements.forEach((el) => {
      if (el.tagName === "IMG") {
        removeFileInput(el);
      } else {
        el.contentEditable = "false";
      }
    });
  }
};

const addFileInput = (img) => {
  const fileInput = document.createElement("input");
  fileInput.type = "file";
  fileInput.accept = "image/*";
  fileInput.addEventListener("change", (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.addEventListener("load", (event) => {
      img.src = event.target.result;
    });
    reader.readAsDataURL(file);
  });
  img.parentNode.insertBefore(fileInput, img);
};

const removeFileInput = (img) => {
  img.parentNode.removeChild(img.previousElementSibling);
};

const initExportButton = () => {
  const exportButton = document.getElementById("export-pdf");
  exportButton.addEventListener("click", () => {
    const element = document.querySelector("main");
    html2pdf().from(element).save();
  });
};

initEditButtons();
initExportButton();


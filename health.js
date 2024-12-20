function newCard() {
    let text;
    let vaccine = prompt("Please enter vaccine name:", "Vaccine Name");
    let adminDate = prompt("Please enter administered date:", "Administered Date");
    let nextDate = prompt("Please enter next due date:", "Next Due Date");
    let vetName = prompt("Please enter clinic/veterinary name:", "Clinic/Vet Name");
    if (vaccine == null || vaccine == "") {
      text = "User cancelled the prompt.";
    } else {
      text = "Vaccine administered " + vaccine;
    }
    document.getElementById("demo").innerHTML = text;
  }

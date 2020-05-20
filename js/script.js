//get DOM elements
const name = document.getElementById("name");
const email = document.getElementById("mail");
const zipCode = document.getElementById("zip");
const cvv = document.getElementById("cvv");
const submitButton = document.querySelector('button[type="submit"]');
const ccNumber = document.querySelector("#cc-num");
const titleMenu = document.querySelector("#title");
const basicInfo = document.getElementsByTagName("fieldset")[0];
const paymentInfo = document.getElementsByTagName("fieldset")[3];

//focus on 'name' textfield
name.focus();

//hide 'other-title' textfield
const otherTitle = document.getElementById("other-title");
otherTitle.hidden = true;
titleMenu.addEventListener("change", (e) => {
  if (titleMenu.value === "other") {
    otherTitle.hidden = false;
  } else {
    otherTitle.hidden = true;
  }
});

//hide 'select theme' option element
const designMenu = document.querySelector("#design");
const selectTheme = design.children[0];
selectTheme.hidden = true;

//placeholder for the 'color' menu and hide all the options
const colorMenu = document.getElementById("color");
const numColors = colorMenu.length;
const colorDiv = document.querySelector("#colors-js-puns");
const textColor = document.createElement("OPTION");

//hide color menu until theme's selection
colorDiv.hidden = true;
colorMenu.insertBefore(textColor, colorMenu.children[0]);
colorMenu.children[0].hidden = true;
textColor.textContent = "Please select a T-shirt theme";
textColor.selected = "selected";

for (let i = 1; i < colorMenu.length; i++) {
  colorMenu.children[i].hidden = true;
}

//update color options according to theme selected
designMenu.addEventListener("change", (e) => {
  if (designMenu.value === "js puns") {
    colorDiv.hidden = false;
    for (let j = 1; j <= numColors; j++) {
      if (j <= 3) {
        colorMenu.children[j].hidden = false;
      } else {
        colorMenu.children[j].hidden = true;
      }
    }
  }

  if (designMenu.value === "heart js") {
    colorDiv.hidden = false;
    for (let z = 1; z <= numColors; z++) {
      if (z <= 3) {
        colorMenu.children[z].hidden = true;
      } else {
        colorMenu.children[z].hidden = false;
      }
    }
  }
});

//disabling conflicting activities and adding total cost information
const activities = document.querySelector(".activities");
const totalDOM = document.createElement("label");
var total = 0;
const breakDOM = document.createElement("br");
activities.appendChild(breakDOM);
activities.appendChild(totalDOM);
totalDOM.innerHTML = `Total: $${total}`;
const inputAct = document.querySelectorAll('input[type="checkbox"]');

activities.addEventListener("change", (e) => {
  errorSpan.hidden = true;
  let dayTime = e.target.getAttribute("data-day-and-time");
  if (e.target.checked) {
    total += Number(e.target.getAttribute("data-cost"));
    totalDOM.innerHTML = `Total: $${total}`;
  } else {
    total -= Number(e.target.getAttribute("data-cost"));
    totalDOM.innerHTML = `Total: $${total}`;
  }
  for (let i = 0; i < inputAct.length; i++) {
    if (e.target.checked) {
      if (
        dayTime === inputAct[i].getAttribute("data-day-and-time") &&
        e.target.name != inputAct[i].name
      ) {
        inputAct[i].disabled = true;
      }
    } else if (
      dayTime === inputAct[i].getAttribute("data-day-and-time") &&
      e.target.name != inputAct[i].name
    ) {
      inputAct[i].disabled = false;
    }
  }
});

//payment section
const paymentMenu = document.querySelector("#payment");
paymentMenu.children[1].selected = true;
const ccForm = document.querySelector(".credit-card");
const paypalForm = document.querySelector(".paypal");
const bitcoinForm = document.querySelector(".bitcoin");
paymentMenu.children[0].hidden = true;
ccForm.hidden = false;
paypalForm.hidden = true;
bitcoinForm.hidden = true;

paymentMenu.addEventListener("change", (e) => {
  if (e.target.value === "credit card") {
    ccForm.hidden = false;
    paypalForm.hidden = true;
    bitcoinForm.hidden = true;
  }
  if (e.target.value === "paypal") {
    paypalForm.hidden = false;
    ccForm.hidden = true;
    bitcoinForm.hidden = true;
  }
  if (e.target.value === "bitcoin") {
    bitcoinForm.hidden = false;
    ccForm.hidden = true;
    paypalForm.hidden = true;
  }
});

//error message
errorSpan = document.createElement("span");
activities.insertBefore(errorSpan, activities.children[1]);
errorSpan.textContent = "Register for Activities";
errorSpan.style.color = "Red";
errorSpan.style.position = "relative";
errorSpan.style.right = "-300px";
errorSpan.style.border = "1px solid";
errorSpan.hidden = true;

errorName = document.createElement("span");
basicInfo.insertBefore(errorName, basicInfo.children[3]);
errorName.style.color = "Red";
errorName.style.position = "relative";
errorName.style.right = "-300px";
errorName.hidden = true;

errorEmail = document.createElement("span");
basicInfo.insertBefore(errorEmail, basicInfo.children[6]);
errorEmail.style.color = "Red";
errorEmail.style.position = "relative";
errorEmail.style.right = "-300px";
errorEmail.hidden = true;

errorCC = document.createElement("span");
ccForm.children[0].appendChild(errorCC);
errorCC.textContent = "Empty field";
errorCC.style.color = "Red";
errorCC.style.position = "relative";
errorCC.style.right = "-200px";
errorCC.hidden = true;

errorZip = document.createElement("span");
ccForm.children[1].appendChild(errorZip);
errorZip.textContent = "Empty field";
errorZip.style.color = "Red";
errorZip.style.position = "relative";
errorZip.style.right = "-50px";
errorZip.hidden = true;

errorCVV = document.createElement("span");
ccForm.children[2].appendChild(errorCVV);
errorCVV.textContent = "Empty field";
errorCVV.style.color = "Red";
errorCVV.style.position = "relative";
errorCVV.style.right = "-50px";
errorCVV.hidden = true;

//validation section
function nameErrorIndicator() {
  if (name.value.length == 0) {
    errorName.textContent = "Empty field";
  } else {
    errorName.textContent = "Invalid name";
  }
  name.style.borderColor = "Red";
  errorName.hidden = false;
}
function nameAcceptedValue() {
  name.style.borderColor = "";
  errorName.hidden = true;
}

function emailErrorIndicator() {
  if (email.value.length == 0) {
    errorEmail.textContent = "Empty field";
  } else {
    errorEmail.textContent = "Invalid email";
  }
  email.style.borderColor = "Red";
  errorEmail.hidden = false;
}
function emailAcceptedValue() {
  email.style.borderColor = "";
  errorEmail.hidden = true;
}

function activitiesErrorIndicator() {
  errorSpan.hidden = false;
}
function activitiesAcceptedValue() {
  errorSpan.hidden = true;
}

function ccErrorIndicator() {
  if (ccNumber.value.length == 0) {
    errorCC.textContent = "Empty field";
  } else {
    errorCC.textContent = "Invalid card";
  }
  ccNumber.style.borderColor = "Red";
  errorCC.hidden = false;
}
function ccAcceptedValue() {
  ccNumber.style.borderColor = "";
  errorCC.hidden = true;
}

function zipErrorIndicator() {
  if (zipCode.value.length == 0) {
    errorZip.textContent = "Empty field";
  } else {
    errorZip.textContent = "Invalid Zip Code";
  }
  zipCode.style.borderColor = "Red";
  errorZip.hidden = false;
}
function zipAcceptedValue() {
  zipCode.style.borderColor = "";
  errorZip.hidden = true;
}

function cvvErrorIndicator() {
  if (cvv.value.length == 0) {
    errorCVV.textContent = "Empty field";
  } else {
    errorCVV.textContent = "Invalid number";
  }
  cvv.style.borderColor = "Red";
  errorCVV.hidden = false;
}
function cvvAcceptedValue() {
  cvv.style.borderColor = "";
  errorCVV.hidden = true;
}

//format specifications
function nameValidation(input) {
  const validName = /^\w([^0-9]*)$/i;
  if (validName.test(input) == false) {
    nameErrorIndicator();
    return false;
  } else {
    nameAcceptedValue();
    return true;
  }
}

function emailValidation(input) {
  const validEmail = /^\S+@\S+$/i;
  if (validEmail.test(input) == false) {
    emailErrorIndicator();
    return false;
  } else {
    emailAcceptedValue();
    return true;
  }
}

function activitiesValidation(input) {
  if (!document.querySelector("input[type='checkbox']:checked")) {
    activitiesErrorIndicator();
    return false;
  } else {
    activitiesAcceptedValue();
    return true;
  }
}

function ccValidation(input) {
  let paymentValue = document.querySelector("#payment").value;
  if (paymentValue !== "credit card") {
    ccAcceptedValue();
    return true;
  } else {
    const validCC = /^[0-9]{13,16}$/;
    if (validCC.test(input) == false) {
      ccErrorIndicator();
      return false;
    } else {
      ccAcceptedValue();
      return true;
    }
  }
}

function zipValidation(input) {
  let paymentValue = document.querySelector("#payment").value;
  if (paymentValue !== "credit card") {
    zipAcceptedValue();
    return true;
  } else {
    const validZip = /^[0-9]{5}(?:-[0-9]{4})?$/;
    if (validZip.test(input) == false) {
      zipErrorIndicator();
      return false;
    } else {
      zipAcceptedValue();
      return true;
    }
  }
}

function cvvValidation(input) {
  let paymentValue = document.querySelector("#payment").value;
  if (paymentValue !== "credit card") {
    cvvAcceptedValue();
    return true;
  } else {
    const validCvv = /[0-9]{3}/;
    if (validCvv.test(input) == false) {
      cvvErrorIndicator();
      return false;
    } else {
      cvvAcceptedValue();
      return true;
    }
  }
}

function masterValidation() {
  if (
    nameValidation(name.value) &&
    emailValidation(email.value) &&
    activitiesValidation(activities.value) &&
    ccValidation(ccNumber.value) &&
    zipValidation(zipCode.value) &&
    cvvValidation(cvv.value)
  ) {
    return true;
  } else {
    return false;
  }
}

//real-time validation
name.addEventListener("keyup", (e) => {
  nameValidation(name.value);
});

email.addEventListener("keyup", (e) => {
  emailValidation(email.value);
});

ccNumber.addEventListener("keyup", (e) => {
  ccValidation(ccNumber.value);
});

zipCode.addEventListener("keyup", (e) => {
  zipValidation(zipCode.value);
});

cvv.addEventListener("keyup", (e) => {
  cvvValidation(cvv.value);
});

//final submission and refresh
submitButton.addEventListener("click", (e) => {
  e.preventDefault();
  masterValidation();
  if (masterValidation()) {
    e.preventDefault();
    window.location.reload();
  } else {
    nameValidation(name.value);
    emailValidation(email.value);
    activitiesValidation(activities.value);
    ccValidation(ccNumber.value);
    zipValidation(zipCode.value);
    cvvValidation(cvv.value);
  }
});

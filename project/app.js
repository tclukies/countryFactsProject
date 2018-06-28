function accessAPI() {
  return fetch(
    "http://inqstatsapi.inqubu.com/?api_key=6e634b34088e8dc0&cmd=getWorldData&data=population"
  )
    .then(response => response.json())
    .then(addElements);

  function addElements(response) {
    console.log(response);
    let countryNames = response.map(function(countryItem) {
      return countryItem.countryName;
    });
    let countryCodes = response.map(function(countryItem) {
      return countryItem.countryCode;
    });
    for (let i = 0; i < response.length; i++) {
      let countryNameBoxes = document.createElement("input");
      let countryNameBoxLabels = document.createElement("label");
      countryNameBoxes.className = "countryNameBoxes";
      countryNameBoxes.type = "checkbox";
      countryNameBoxes.value = countryCodes[i];
      countryNameBoxLabels.textContent = countryNames[i];
      document.querySelector(".countrySection").appendChild(countryNameBoxes);
      document
        .querySelector(".countrySection")
        .appendChild(countryNameBoxLabels);
    }
  }
}
accessAPI();

document
  .querySelector(".submitButton")
  .addEventListener("click", giveDetailsToQueryString);

function giveDetailsToQueryString(event) {
  let responseCountryBoxes = document.querySelectorAll(".countryNameBoxes");
  let responseFactBoxes = document.querySelectorAll(".factBoxes");
  for (let i = 0; i < responseCountryBoxes.length; i++) {
    if (responseCountryBoxes[i].checked === true) {
      console.log(responseCountryBoxes[i].value);
    }
    console.log("These arent checked");
  }
  for (let i = 0; i < responseFactBoxes.length; i++) {
    if (responseFactBoxes[i].checked === true) {
      console.log(responseFactBoxes[i].value);
    } else {
      console.log("these facts arent checked");
    }
  }
}

function accessAPI() {
  return fetch(
    "http://inqstatsapi.inqubu.com/?api_key=6e634b34088e8dc0&cmd=getWorldData&data=population"
  )
    .then(response => response.json())
    .then(addElements);

  function addElements(response) {
    let countryNames = response.map(function(countryItem) {
      return countryItem.countryName;
    });
    for (let i = 0; i < response.length; i++) {
      let countryNameBoxes = document.createElement("input");
      let countryNameBoxLabels = document.createElement("label");
      let countryNameAndSelector = document.createElement("div");

      countryNameAndSelector.className = "countryNameAndSelector";
      countryNameBoxes.className = "countryNameBoxes";
      countryNameBoxes.type = "checkbox";
      countryNameBoxes.value = countryNames[i];
      countryNameBoxLabels.textContent = countryNames[i];
      countryNameAndSelector.appendChild(countryNameBoxes);
      countryNameAndSelector.appendChild(countryNameBoxLabels);
      document
        .querySelector(".countrySection")
        .appendChild(countryNameAndSelector);
    }
  }
}
accessAPI();

document
  .querySelector(".submitButton")
  .addEventListener("click", giveDetailsToQueryString);

function giveDetailsToQueryString(event) {
  let responseFactBoxes = document.querySelectorAll(".factBoxes");
  let factURL = "";

  for (let i = 0; i < responseFactBoxes.length; i++) {
    if (responseFactBoxes[i].checked === true) {
      factURL += responseFactBoxes[i].value + ",";
    }
  }
  factURL = factURL.slice(0, -1);
  let newFetchURL =
    "http://inqstatsapi.inqubu.com?api_key=6e634b34088e8dc0&cmd=getWorldData&data=" +
    factURL;

  return fetch(newFetchURL)
    .then(response => response.json())
    .then(displayResponse);
}
function displayResponse(response) {
  let reducedFacts = response.reduce(function(acc, curr) {
    delete curr["countryCode"];
    acc.push(curr);
    return acc;
  }, []);

  let responseCountryBoxes = document.querySelectorAll(".countryNameBoxes");
  let selectedCountries = [];
  for (let i = 0; i < responseCountryBoxes.length; i++) {
    if (responseCountryBoxes[i].checked === true) {
      selectedCountries.push(responseCountryBoxes[i].value);
    }
  }
  selectedCountryFacts = [];
  for (let i = 0; i < selectedCountries.length; i++) {
    for (let j = 0; j < reducedFacts.length; j++) {
      if (selectedCountries[i] == reducedFacts[j].countryName) {
        selectedCountryFacts.push(reducedFacts[j]);
      }
    }
  }
  console.log(selectedCountryFacts);

  document
    .querySelector("main")
    .removeChild(document.querySelector(".clearedSection"));

  for (let i = 0; i < selectedCountryFacts.length; i++) {
    let countryTable = document.createElement("table");
    let titleRow = document.createElement("tr");
    let titleRowTextBox = document.createElement("td");
    let titleRowText = document.createTextNode(
      selectedCountryFacts[i].countryName
    );

    let fapRow = document.createElement("tr");
    let fapRowTextBox = document.createElement("td");
    let fapLabelTextbox = document.createElement("td");
    let fapLabelText = document.createTextNode("Forest Area Percent");
    let fapRowText = document.createTextNode(
      selectedCountryFacts[i].forest_area_percent
    );

    titleRowTextBox.appendChild(titleRowText);
    titleRow.appendChild(titleRowText);
    countryTable.appendChild(titleRow);

    fapRowTextBox.appendChild(fapRowText);
    fapLabelTextbox.appendChild(fapLabelText);
    fapRow.appendChild(fapLabelTextbox);
    fapRow.appendChild(fapRowText);

    countryTable.appendChild(fapRow);

    if (selectedCountryFacts[i].happiness_index) {
      let happyRow = document.createElement("tr");
      let happyRowTextBox = document.createElement("td");
      let happyLabelTextbox = document.createElement("td");
      let happyLabelText = document.createTextNode("Happiness Index");
      let happyRowText = document.createTextNode(
        selectedCountryFacts[i].happiness_index
      );
      happyRowTextBox.appendChild(happyRowText);
      happyLabelTextbox.appendChild(happyLabelText);
      happyRow.appendChild(happyLabelTextbox);
      happyRow.appendChild(happyRowText);

      countryTable.appendChild(happyRow);
    }

    if (selectedCountryFacts[i].death_rate) {
      let deathRow = document.createElement("tr");
      let deathRowTextBox = document.createElement("td");
      let deathLabelTextbox = document.createElement("td");
      let deathLabelText = document.createTextNode("Death Rate");
      let deathRowText = document.createTextNode(
        selectedCountryFacts[i].death_rate
      );
      deathRowTextBox.appendChild(deathRowText);
      deathLabelTextbox.appendChild(deathLabelText);
      deathRow.appendChild(deathLabelTextbox);
      deathRow.appendChild(deathRowText);

      countryTable.appendChild(deathRow);
    }

    if (selectedCountryFacts[i].life_expectancy) {
      let lifeExpRow = document.createElement("tr");
      let lifeExpRowTextBox = document.createElement("td");
      let lifeExpLabelTextbox = document.createElement("td");
      let lifeExpLabelText = document.createTextNode("Life Expectancy");
      let lifeExpRowText = document.createTextNode(
        selectedCountryFacts[i].life_expectancy
      );
      lifeExpRowTextBox.appendChild(lifeExpRowText);
      lifeExpLabelTextbox.appendChild(lifeExpLabelText);
      lifeExpRow.appendChild(lifeExpLabelTextbox);
      lifeExpRow.appendChild(lifeExpRowText);

      countryTable.appendChild(lifeExpRow);
    }

    if (selectedCountryFacts[i].literacy_rate) {
      let literacyRow = document.createElement("tr");
      let literacyRowTextBox = document.createElement("td");
      let literacyLabelTextbox = document.createElement("td");
      let literacyLabelText = document.createTextNode("Literacy Rate");
      let literacyRowText = document.createTextNode(
        selectedCountryFacts[i].literacy_rate
      );
      literacyRowTextBox.appendChild(literacyRowText);
      literacyLabelTextbox.appendChild(literacyLabelText);
      literacyRow.appendChild(literacyLabelTextbox);
      literacyRow.appendChild(literacyRowText);

      countryTable.appendChild(literacyRow);
    }

    if (selectedCountryFacts[i].population) {
      let populationRow = document.createElement("tr");
      let populationRowTextBox = document.createElement("td");
      let populationLabelTextbox = document.createElement("td");
      let populationLabelText = document.createTextNode("Population");
      let populationRowText = document.createTextNode(
        selectedCountryFacts[i].population
      );
      populationRowTextBox.appendChild(populationRowText);
      populationLabelTextbox.appendChild(populationLabelText);
      populationRow.appendChild(populationLabelTextbox);
      populationRow.appendChild(populationRowText);

      countryTable.appendChild(populationRow);
    }

    if (selectedCountryFacts[i].tourist_arrivals) {
      let tourismRow = document.createElement("tr");
      let tourismRowTextBox = document.createElement("td");
      let tourismLabelTextbox = document.createElement("td");
      let tourismLabelText = document.createTextNode("Tourism Rate");
      let tourismRowText = document.createTextNode(
        selectedCountryFacts[i].tourist_arrivals
      );
      tourismRowTextBox.appendChild(tourismRowText);
      tourismLabelTextbox.appendChild(tourismLabelText);
      tourismRow.appendChild(tourismLabelTextbox);
      tourismRow.appendChild(tourismRowText);

      countryTable.appendChild(tourismRow);
    }

    countryTable.className = "table-warning";
    document.querySelector(".countryNameResponse").appendChild(countryTable);
  }

  var btn = document.createElement("button");
  var t = document.createTextNode("Start a New Selection");
  btn.className = "newQueryButton";
  btn.appendChild(t);
  document.querySelector("main").appendChild(btn);
  btn.addEventListener("click", reloadPage);

  function reloadPage() {
    window.location.reload();
  }
}

//   google.charts.load("current", { packages: ["corechart", "bar"] });
//   google.charts.setOnLoadCallback(drawAxisTickColors);

//   function drawAxisTickColors() {
//     var data = google.visualization.arrayToDataTable(
//       for (let i=0; i<Object.keys(selectedCountryFacts).length; i++){
//         [
//       ["Country", selectedCountryFacts[i], "2000 Population"],
//       ["New York City, NY", 8175000, 8008000],
//       ["Los Angeles, CA", 3792000, 3694000],
//       ["Chicago, IL", 2695000, 2896000],
//       ["Houston, TX", 2099000, 1953000],
//       ["Philadelphia, PA", 1526000, 1517000]
//       ])
//   }}
//     var options = {
//       title: "Population of Largest U.S. Cities",
//       chartArea: { width: "50%" },
//       hAxis: {
//         title: "Total Population",
//         minValue: 0,
//         textStyle: {
//           bold: true,
//           fontSize: 12,
//           color: "#4d4d4d"
//         },
//         titleTextStyle: {
//           bold: true,
//           fontSize: 18,
//           color: "#4d4d4d"
//         }
//       },
//       vAxis: {
//         title: "City",
//         textStyle: {
//           fontSize: 14,
//           bold: true,
//           color: "#848484"
//         },
//         titleTextStyle: {
//           fontSize: 14,
//           bold: true,
//           color: "#848484"
//         }
//       }
//     };
//     var chart = new google.visualization.BarChart(
//       document.getElementById("chart_div")
//     );
//     chart.draw(data, options);
//   }
// }

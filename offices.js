const offices = [
  {
    mjesto: "Zagreb",
    adresa: "BENCEKOVIĆEVA 31",
    period: {
      od: "	27.07.2020.",
      do: "23.08.2020.",
    },
    radnoVrijeme: [
      "PON: ZATVORENO",
      "UTO - PET: 11:00 - 17:00",
      "SUB - NED: 11:00 - 19:00",
    ],
    latlong: { Latitude: 45.783759, Longitude: 15.961341 },
  },
  {
    mjesto: "Zagreb",
    adresa: "ZAGREBAČKA 185",
    period: {
      od: "10.08.2020.",
      do: "23.08.2020.",
    },
    radnoVrijeme: [
      "PON: 11:00 - 20:00",
      "UTO - SUB: 09:00 - 21:00",
      "NED: 09:00 - 20:00",
    ],
    latlong: { Latitude: 45.801995, Longitude: 15.918679 },
  },
  {
    mjesto: "Zagreb",
    adresa: "ŠUBIĆEVA 42",
    period: {
      od: "27.07.2020.",
      do: "23.08.2020.",
    },
    radnoVrijeme: [
      "PON: ZATVORENO",
      "UTO - PET: 11:00 - 17:00",
      "SUB - NED: 11:00 - 19:00",
    ],
    latlong: { Latitude: 45.813363, Longitude: 15.99624 },
  },
  {
    mjesto: "TRSTENIK NARTSKI",
    adresa: "ZAGREBAČKA ULICA 197",
    period: {
      od: "privremeno rv od 12.07.",
      do: "",
    },
    radnoVrijeme: [
      "PON: 11:00 - 20:00",
      "UTO - SUB: 09:00 - 21:00",
      "NED: 09:00 - 20:00",
    ],
    latlong: { Latitude: 45.781002, Longitude: 16.176434 },
  },
  {
    mjesto: "MARIJA BISTRICA",
    adresa: "ŠOPĆEV PROLAZ 20",
    period: {
      od: "27.07.2020.",
      do: "23.08.2020.",
    },
    radnoVrijeme: [
      "PON: ZATVORENO",
      "UTO - PET: 11:00 - 17:00",
      "SUB - NED: 11:00 - 19:00",
    ],
    latlong: { Latitude: 46.005181, Longitude: 16.116739 },
  },
  {
    mjesto: "IVANEC",
    adresa: "TRG HRVATSKIH IVANOVACA 9",
    period: {
      od: "03.08.2020.",
      do: "23.08.2020.",
    },
    radnoVrijeme: [
      "PON - ZATVORENO",
      "UTO - PET - 11:00 - 17:00",
      "SUB - NED - 11:00 - 19:00",
    ],
    latlong: { Latitude: 46.223556, Longitude: 16.124145 },
  },
  {
    mjesto: "NEDELIŠĆE",
    adresa: "TRG REPUBLIKE 24",
    period: {
      od: "27.07.2020.",
      do: "23.08.2020.",
    },
    radnoVrijeme: [
      "PON - ZATVORENO",
      "UTO - PET - 11:00 - 17:00",
      "SUB - NED - 11:00 - 19:00",
    ],
    latlong: { Latitude: 46.376767, Longitude: 16.385550 },
  },
  {
    mjesto: "PRELOG",
    adresa: "GLAVNA 49",
    period: {
      od: "27.07.2020.",
      do: "23.08.2020.",
    },
    radnoVrijeme: [
      "PON - ZATVORENO",
      "UTO - PET - 11:00 - 17:00",
      "SUB - NED - 11:00 - 19:00",
    ],
    latlong: { Latitude: 46.337276, Longitude: 16.616853 },
  },
  {
    mjesto: "DONJI KRALJEVEC",
    adresa: "KOLODVORSKA 33",
    period: {
      od: "27.07.2020.",
      do: "23.08.2020.",
    },
    radnoVrijeme: [
      "PON - ZATVORENO",
      "UTO - PET - 11:00 - 17:00",
      "SUB - NED - 11:00 - 19:00",
    ],
    latlong: { Latitude: 46.367357, Longitude: 16.649155 },
  },
  {
    mjesto: "DELNICE",
    adresa: "SUPILOVA 20",
    period: {
      od: "27.07.2020.",
      do: "23.08.2020.",
    },
    radnoVrijeme: [
      "PON - ZATVORENO",
      "UTO - PET - 11:00 - 17:00",
      "SUB - NED - 11:00 - 19:00",
    ],
    latlong: { Latitude: 45.394536, Longitude: 14.799820 },
  },
  {
    mjesto: "VRSAR",
    adresa: "OBALA MARŠALA TITA 1 A",
    period: {
      od: "27.07.2020.",
      do: "23.08.2020.",
    },
    radnoVrijeme: [
      "PON - ZATVORENO",
      "UTO - PET - 11:00 - 17:00",
      "SUB - NED - 11:00 - 19:00",
    ],
    latlong: { Latitude: 45.162191, Longitude: 13.600452 },
  },
  {
    mjesto: "VIŠKOVO",
    adresa: "STUPARI 26 A",
    period: {
      od: "27.07.2020.",
      do: "23.08.2020.",
    },
    radnoVrijeme: [
      "PON - ZATVORENO",
      "UTO - PET - 11:00 - 17:00",
      "SUB - NED - 11:00 - 19:00",
    ],
    latlong: { Latitude: 45.365646, Longitude: 14.397843 },
  },
  {
    mjesto: "OGULIN",
    adresa: "VLADIMIRA NAZORA 11",
    period: {
      od: "27.07.2020.",
      do: "23.08.2020.",
    },
    radnoVrijeme: [
      "PON - ZATVORENO",
      "UTO - PET - 11:00 - 17:00",
      "SUB - NED - 11:00 - 19:00",
    ],
    latlong: { Latitude: 45.265002, Longitude: 15.224932 },
  },
  {
    mjesto: "PIROVAC",
    adresa: "KRALJA KREŠIMIRA IV 2",
    period: {
      od: "03.08.2020.",
      do: "16.08.2020.",
    },
    radnoVrijeme: [
      "PON - ZATVORENO",
      "UTO - NED - 09:00 - 16:00"
    ],
    latlong: { Latitude: 43.821555, Longitude: 15.665767 },
  },
  {
    mjesto: "SEGET DONJI",
    adresa: "HRVATSKIH ŽRTAVA 80",
    period: {
      od: "27.07.2020.",
      do: "06.09.2020",
    },
    radnoVrijeme: [
      "PON - NED 09:00 - 21:00"
    ],
    latlong: { Latitude: 43.519235, Longitude: 16.232901 },
  },
];

const displayOffices = (offices) => {
  const table = document.querySelector("table");
  const tbody = document.createElement("tbody");
  table.appendChild(tbody);
  offices.forEach((office) => {
    const tr = document.createElement("tr");
    tbody.appendChild(tr);
    for (key in office) {
      if (key == "period") {
        const td = document.createElement("td");
        tr.appendChild(td);
        td.innerHTML = office[key].od + " - " + office[key].do;
      } else if (key == "latlong") {
        return null;
      } else {
        const td = document.createElement("td");
        tr.appendChild(td);
        td.innerHTML = office[key];
      }
    }
  });
};

displayOffices(offices);

function initMap() {
  const hrvatska = { lat: 45.1, lng: 15.2 };
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 7,
    center: hrvatska,
  });

  var infowindow = new google.maps.InfoWindow();

  var marker, i;

  for (i = 0; i < offices.length; i++) {
    console.log(offices[i].latlong.Latitude);
    marker = new google.maps.Marker({
      position: new google.maps.LatLng(offices[i].latlong.Latitude, offices[i].latlong.Longitude),
      map: map,
      icon: "images/map-marker.png"
    });

    google.maps.event.addListener(
      marker,
      "click",
      (function (marker, i) {
        return function () {
          infowindow.setContent(`<h3>${offices[i].mjesto}</h3><p>${offices[i].adresa}</p><ul><li>${offices[i].radnoVrijeme[0]}</li><li>${offices[i].radnoVrijeme[1]}</li><li>${offices[i].radnoVrijeme[2]}</li></ul>`);
          infowindow.open(map, marker);
        };
      })(marker, i)
    );
  }
}

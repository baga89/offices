const automatClubs = [
  {
    // naziv: "AK CRYSTAL PALACE",
    mjesto: "RIJEKA",
    adresa: "TRG 111. BRIGADE HRVATSKE VOJSKE BB",
    tip: "AUTOMAT KLUB",
    ikona: "images/map-marker-red.svg",
    period: ["-"],
    radnoVrijeme: ["PON - NED: 00:00 - 24:00"],
    latlong: { latitude: 45.326405, longitude: 14.440543 }
  },
  {
    // naziv: "AK SV. IVAN ZELINA",
    mjesto: "SV. IVAN ZELINA",
    adresa: "ANTE STARČEVIĆA 5",
    tip: "AUTOMAT KLUB",
    ikona: "images/map-marker-red.svg",
    period: ["-"],
    radnoVrijeme: ["PON - NED: 00:00 - 24:00"],
    latlong: { latitude: 45.959788, longitude: 16.242315 }
  },
  {
    // naziv: "AK OSIJEK",
    mjesto: "OSIJEK",
    adresa: "TRG BANA JOSIPA JELAČIĆA 18",
    tip: "AUTOMAT KLUB",
    ikona: "images/map-marker-red.svg",
    period: ["-"],
    radnoVrijeme: ["PON - NED: 00:00 - 24:00"],
    latlong: { latitude: 45.555710, longitude: 18.720186 }
  },
  {
    // naziv: "AK SVETA KLARA",
    mjesto: "ZAGREB",
    adresa: "UTINJSKA ULICA BB",
    tip: "AUTOMAT KLUB",
    ikona: "images/map-marker-red.svg",
    period: ["-"],
    radnoVrijeme: ["PON - NED: 00:00 - 24:00"],
    latlong: { latitude: 45.766317, longitude: 15.959129 }
  },
  {
    // naziv: "AK JOKER SPLIT",
    mjesto: "SPLIT",
    adresa: "PUT BRODARICE 6",
    tip: "AUTOMAT KLUB",
    ikona: "images/map-marker-red.svg",
    period: ["-"],
    radnoVrijeme: ["PON - NED: 00:00 - 24:00"],
    latlong: { latitude: 43.519504, longitude: 16.446007 }
  },
  {
    // naziv: "AK ČAKOVEC",
    mjesto: "ČAKOVEC",
    adresa: "TOMAŠA GORIČANCA 1",
    tip: "AUTOMAT KLUB",
    ikona: "images/map-marker-red.svg",
    period: ["-"],
    radnoVrijeme: ["PON - NED: 00:00 - 24:00"],
    latlong: { latitude: 46.379744, longitude: 16.442906 }
  },
  {
    // naziv: "AK MARTI RIJEKA",
    mjesto: "RIJEKA",
    adresa: "MARTINKOVAC 131",
    tip: "AUTOMAT KLUB",
    ikona: "images/map-marker-red.svg",
    period: ["-"],
    radnoVrijeme: ["PON - NED: 00:00 - 24:00"],
    latlong: { latitude: 45.353019, longitude: 14.363955 }
  },
  {
    // naziv: "AK VINKOVCI",
    mjesto: "VINKOVCI",
    adresa: "HANSA DIETRICHA GENSCHERA 24",
    tip: "AUTOMAT KLUB",
    ikona: "images/map-marker-red.svg",
    period: ["-"],
    radnoVrijeme: ["PON - NED: 00:00 - 24:00"],
    latlong: { latitude: 45.278494, longitude: 18.797182 }
  },
  {
    // naziv: "AK POPOVAČA",
    mjesto: "POPOVAČA",
    adresa: "ZAGREBAČKA CESTA 13",
    tip: "AUTOMAT KLUB",
    ikona: "images/map-marker-red.svg",
    period: ["-"],
    radnoVrijeme: ["PON - NED: 00:00 - 24:00"],
    latlong: { latitude: 45.572033, longitude: 16.626152 }
  },
  {
    // naziv: "AK NEDELIŠĆE",
    mjesto: "NEDELIŠĆE",
    adresa: "MARTINA VILJEVCA 2A",
    tip: "AUTOMAT KLUB",
    ikona: "images/map-marker-red.svg",
    period: ["-"],
    radnoVrijeme: ["PON - NED: 00:00 - 24:00"],
    latlong: { latitude: 46.376176, longitude: 16.378653 }
  },
  // {
  //   naziv: "AK BENKOVAC",
  //   mjesto: "BENKOVAC",
  //   adresa: "KRALJA DMITRA ZVONIMIRA 4",
  //   tip: "AUTOMAT KLUB",
  //   ikona: "images/map-marker-red.svg",
  //   period: ["-"],
  //   radnoVrijeme: ["PON - NED: 00:00 - 24:00"],
  //   latlong: { latitude: 44.033129, longitude: 15.617172 }
  // },
  // {
  //   naziv: "AK MAKARSKA",
  //   mjesto: "MAKARSKA",
  //   adresa: "SHOPING MALL \"OSEJAVE\"",
  //   tip: "AUTOMAT KLUB",
  //   ikona: "images/map-marker-red.svg",
  //   period: ["-"],
  //   radnoVrijeme: ["PON - NED: 00:00 - 24:00"],
  //   latlong: { latitude: 43.291251, longitude: 17.025033 }
  // },
  {
    // naziv: "AK PULA",
    mjesto: "PULA",
    adresa: "TOMASINIJEVA UL.34",
    tip: "AUTOMAT KLUB",
    ikona: "images/map-marker-red.svg",
    period: ["-"],
    radnoVrijeme: ["PON - NED: 00:00 - 24:00"],
    latlong: { latitude: 44.855897, longitude: 13.838314 }
  },
  {
    // naziv: "AK ĐAKOVO",
    mjesto: "ĐAKOVO",
    adresa: "ULICA FRANJE RAČKOG 95",
    tip: "AUTOMAT KLUB",
    ikona: "images/map-marker-red.svg",
    period: ["-"],
    radnoVrijeme: ["PON - NED: 00:00 - 24:00"],
    latlong: { latitude: 45.310733, longitude: 18.397967 }
  },
  {
    // naziv: "AK DONJI MIHOLJAC",
    mjesto: "DONJI MIHOLJAC",
    adresa: "AUGUSTA ŠENOE 1",
    tip: "AUTOMAT KLUB",
    ikona: "images/map-marker-red.svg",
    period: ["-"],
    radnoVrijeme: ["PON - NED: 00:00 - 24:00"],
    latlong: { latitude: 45.759109, longitude: 18.164611 }
  },
];

const offices = [
  {
    mjesto: "Zagreb",
    adresa: "BENCEKOVIĆEVA 31",
    tip: "POSLOVNICA",
    ikona: "images/map-marker-blue.svg",
    period: ["27.07.2020. - 23.08.2020."],
    radnoVrijeme: [
      "PON: ZATVORENO",
      "UTO - PET: 11:00 - 17:00",
      "SUB - NED: 11:00 - 19:00",
    ],
    latlong: { latitude: 45.783759, longitude: 15.961341 },
  },
  {
    mjesto: "Zagreb",
    adresa: "ZAGREBAČKA 185",
    tip: "POSLOVNICA",
    ikona: "images/map-marker-blue.svg",
    period: ["10.08.2020. - 23.08.2020."],
    radnoVrijeme: [
      "PON: 11:00 - 20:00",
      "UTO - SUB: 09:00 - 21:00",
      "NED: 09:00 - 20:00",
    ],
    latlong: { latitude: 45.801995, longitude: 15.918679 },
  },
  {
    mjesto: "Zagreb",
    adresa: "ŠUBIĆEVA 42",
    tip: "POSLOVNICA",
    ikona: "images/map-marker-blue.svg",
    period: ["27.07.2020. - 23.08.2020."],
    radnoVrijeme: [
      "PON: ZATVORENO",
      "UTO - PET: 11:00 - 17:00",
      "SUB - NED: 11:00 - 19:00",
    ],
    latlong: { latitude: 45.813363, longitude: 15.99624 },
  },
  {
    mjesto: "TRSTENIK NARTSKI",
    adresa: "ZAGREBAČKA ULICA 197",
    tip: "POSLOVNICA",
    ikona: "images/map-marker-blue.svg",
    period: ["privremeno rv od 12.07."],
    radnoVrijeme: [
      "PON: 11:00 - 20:00",
      "UTO - SUB: 09:00 - 21:00",
      "NED: 09:00 - 20:00",
    ],
    latlong: { latitude: 45.781002, longitude: 16.176434 },
  },
  {
    mjesto: "MARIJA BISTRICA",
    adresa: "ŠOPĆEV PROLAZ 20",
    tip: "POSLOVNICA",
    ikona: "images/map-marker-blue.svg",
    period: ["27.07.2020. - 23.08.2020."],
    radnoVrijeme: [
      "PON: ZATVORENO",
      "UTO - PET: 11:00 - 17:00",
      "SUB - NED: 11:00 - 19:00",
    ],
    latlong: { latitude: 46.005181, longitude: 16.116739 },
  },
  {
    mjesto: "IVANEC",
    adresa: "TRG HRVATSKIH IVANOVACA 9",
    tip: "POSLOVNICA",
    ikona: "images/map-marker-blue.svg",
    period: ["03.08.2020. - 23.08.2020."],
    radnoVrijeme: [
      "PON - ZATVORENO",
      "UTO - PET - 11:00 - 17:00",
      "SUB - NED - 11:00 - 19:00",
    ],
    latlong: { latitude: 46.223556, longitude: 16.124145 },
  },
  {
    mjesto: "NEDELIŠĆE",
    adresa: "TRG REPUBLIKE 24",
    tip: "POSLOVNICA",
    ikona: "images/map-marker-blue.svg",
    period: ["27.07.2020. - 23.08.2020."],
    radnoVrijeme: [
      "PON - ZATVORENO",
      "UTO - PET - 11:00 - 17:00",
      "SUB - NED - 11:00 - 19:00",
    ],
    latlong: { latitude: 46.376767, longitude: 16.385550 },
  },
  {
    mjesto: "PRELOG",
    adresa: "GLAVNA 49",
    tip: "POSLOVNICA",
    ikona: "images/map-marker-blue.svg",
    period: ["27.07.2020. - 23.08.2020."],
    radnoVrijeme: [
      "PON - ZATVORENO",
      "UTO - PET - 11:00 - 17:00",
      "SUB - NED - 11:00 - 19:00",
    ],
    latlong: { latitude: 46.337276, longitude: 16.616853 },
  },
  {
    mjesto: "DONJI KRALJEVEC",
    adresa: "KOLODVORSKA 33",
    tip: "POSLOVNICA",
    ikona: "images/map-marker-blue.svg",
    period: ["27.07.2020. - 23.08.2020."],
    radnoVrijeme: [
      "PON - ZATVORENO",
      "UTO - PET - 11:00 - 17:00",
      "SUB - NED - 11:00 - 19:00",
    ],
    latlong: { latitude: 46.367357, longitude: 16.649155 },
  },
  {
    mjesto: "DELNICE",
    adresa: "SUPILOVA 20",
    tip: "POSLOVNICA",
    ikona: "images/map-marker-blue.svg",
    period: ["27.07.2020. - 23.08.2020."],
    radnoVrijeme: [
      "PON - ZATVORENO",
      "UTO - PET - 11:00 - 17:00",
      "SUB - NED - 11:00 - 19:00",
    ],
    latlong: { latitude: 45.394536, longitude: 14.799820 },
  },
  {
    mjesto: "VRSAR",
    adresa: "OBALA MARŠALA TITA 1 A",
    tip: "POSLOVNICA",
    ikona: "images/map-marker-blue.svg",
    period: ["27.07.2020. - 23.08.2020."],
    radnoVrijeme: [
      "PON - ZATVORENO",
      "UTO - PET - 11:00 - 17:00",
      "SUB - NED - 11:00 - 19:00",
    ],
    latlong: { latitude: 45.162191, longitude: 13.600452 },
  },
  {
    mjesto: "VIŠKOVO",
    adresa: "STUPARI 26 A",
    tip: "POSLOVNICA",
    ikona: "images/map-marker-blue.svg",
    period: ["27.07.2020. - 23.08.2020."],
    radnoVrijeme: [
      "PON - ZATVORENO",
      "UTO - PET - 11:00 - 17:00",
      "SUB - NED - 11:00 - 19:00",
    ],
    latlong: { latitude: 45.365646, longitude: 14.397843 },
  },
  {
    mjesto: "OGULIN",
    adresa: "VLADIMIRA NAZORA 11",
    tip: "POSLOVNICA",
    ikona: "images/map-marker-blue.svg",
    period: ["27.07.2020. - 23.08.2020."],
    radnoVrijeme: [
      "PON - ZATVORENO",
      "UTO - PET - 11:00 - 17:00",
      "SUB - NED - 11:00 - 19:00",
    ],
    latlong: { latitude: 45.265002, longitude: 15.224932 },
  },
  {
    mjesto: "PIROVAC",
    adresa: "KRALJA KREŠIMIRA IV 2",
    tip: "POSLOVNICA",
    ikona: "images/map-marker-blue.svg",
    period: ["03.08.2020. - 16.08.2020."],
    radnoVrijeme: [
      "PON - ZATVORENO",
      "UTO - NED - 09:00 - 16:00"
    ],
    latlong: { latitude: 43.821555, longitude: 15.665767 },
  },
  {
    mjesto: "SEGET DONJI",
    adresa: "HRVATSKIH ŽRTAVA 80",
    tip: "POSLOVNICA",
    ikona: "images/map-marker-blue.svg",
    period: ["27.07.2020. - 06.09.2020."],
    radnoVrijeme: [
      "PON - NED 09:00 - 21:00"
    ],
    latlong: { latitude: 43.519235, longitude: 16.232901 },
  },
  {
    mjesto: "KAŠTEL GOMILICA",
    adresa: "FRANJE TUĐMANA 50",
    tip: "POSLOVNICA",
    ikona: "images/map-marker-blue.svg",
    period: ["27.07.2020. - 23.08.2020."],
    radnoVrijeme: [
      "PON - ZATVORENO",
      "UTO - NED - 09:00 - 16:00"
    ],
    latlong: { latitude: 43.554409, longitude: 16.361914 },
  },
  {
    mjesto: "SPLIT",
    adresa: "MOSTARSKA 73",
    tip: "POSLOVNICA",
    ikona: "images/map-marker-blue.svg",
    period: ["27.07.2020. - 23.08.2020."],
    radnoVrijeme: [
      "PON - ZATVORENO",
      "UTO - NED - 09:00 - 16:00"
    ],
    latlong: { latitude: 43.523675, longitude: 16.471613 },
  },
  {
    mjesto: "SPLIT",
    adresa: "DOMOVINSKOG RATA 58",
    tip: "POSLOVNICA",
    ikona: "images/map-marker-blue.svg",
    period: ["27.07.2020. - 23.08.2020."],
    radnoVrijeme: [
      "PON - ZATVORENO",
      "UTO - NED - 09:00 - 16:00"
    ],
    latlong: { latitude: 43.517873, longitude: 16.447036 },
  },
  {
    mjesto: "OSIJEK",
    adresa: "IVANA GUNDULIĆA 59 A",
    tip: "POSLOVNICA",
    ikona: "images/map-marker-blue.svg",
    period: ["20.07.2020. - 16.08.2020."],
    radnoVrijeme: [
      "PON - ZATVORENO",
      "UTO - PET - 11:00 - 17:00",
      "SUB - NED - 11:00 - 19:00"
    ],
    latlong: { latitude: 45.556076, longitude: 18.672687 },
  },
  {
    mjesto: "ZAGREB",
    adresa: "METALČEVA 3",
    tip: "POSLOVNICA",
    ikona: "images/map-marker-blue.svg",
    period: ["27.07.2020. - 23.08.2020."],
    radnoVrijeme: [
      "PON - ZATVORENO",
      "UTO - PET - 11:00 - 17:00",
      "SUB - NED - 11:00 - 19:00"
    ],
    latlong: { latitude: 45.806296, longitude: 15.952995 },
  },
  {
    mjesto: "SOLIN",
    adresa: "ULICA KRALJA ZVONIMIRA 103 A",
    tip: "POSLOVNICA",
    ikona: "images/map-marker-blue.svg",
    period: ["27.07.2020. - 09.08.2020."],
    radnoVrijeme: [
      "PON - ZATVORENO",
      "UTO - NED - 10:00 - 17:00",
    ],
    latlong: { latitude: 43.537810, longitude: 16.490920 },
  },
  {
    mjesto: "ZAGREB",
    adresa: "ČULINEČKA 54",
    tip: "POSLOVNICA",
    ikona: "images/map-marker-blue.svg",
    period: ["27.07.2020. - 23.08.2020."],
    radnoVrijeme: [
      "PON - ZATVORENO",
      "UTO - PET - 11:00 - 17:00",
      "SUB - NED - 11:00 - 19:00"
    ],
    latlong: { latitude: 45.823191, longitude: 16.063732 },
  },
  {
    mjesto: "GORNJE VRATNO",
    adresa: "VARAŽDINSKA 25c",
    tip: "POSLOVNICA",
    ikona: "images/map-marker-blue.svg",
    period:["27.07.2020. - 23.08.2020."],
    radnoVrijeme: [
      "PON - ZATVORENO",
      "UTO - PET - 11:00 - 17:00",
      "SUB - NED - 11:00 - 19:00"
    ],
    latlong: { latitude: 46.356589, longitude: 16.155032 },
  },
  {
    mjesto: "ČAKOVEC",
    adresa: "PARK RUDOLFA KROPEKA 1",
    tip: "POSLOVNICA",
    ikona: "images/map-marker-blue.svg",
    period: ["27.07.2020. - 23.08.2020."],
    radnoVrijeme: [
      "PON - ZATVORENO",
      "UTO - PET - 11:00 - 17:00",
      "SUB - NED - 11:00 - 19:00"
    ],
    latlong: { latitude: 46.388534, longitude: 16.439461 },
  },
  {
    mjesto: "OROSLAVJE",
    adresa: "ANDRIJE GREDIČAKA 12A",
    tip: "POSLOVNICA",
    ikona: "images/map-marker-blue.svg",
    period: ["27.07.2020. - 23.08.2020."],
    radnoVrijeme: [
      "PON - ZATVORENO",
      "UTO - PET - 11:00 - 17:00",
      "SUB - NED - 11:00 - 19:00"
    ],
    latlong: { latitude: 45.995241, longitude: 15.913992 },
  },
  // {
  //   mjesto: "KRAPINA",
  //   adresa: "J.J STROSSMAYERA 2",
  //   period: ["27.07.2020. - 23.08.2020."],
  //   radnoVrijeme: [
  //     "PON - ZATVORENO",
  //     "UTO - PET - 11:00 - 17:00",
  //     "SUB - NED - 11:00 - 19:00"
  //   ],
  //   latlong: { latitude: 45.995241, longitude: 15.913992 },
  // },
  {
    mjesto: "PREGRADA",
    adresa: "STJEPANA RADIĆA 10",
    tip: "POSLOVNICA",
    ikona: "images/map-marker-blue.svg",
    period: ["27.07.2020. - 23.08.2020."],
    radnoVrijeme: [
      "PON - ZATVORENO",
      "UTO - PET - 11:00 - 17:00",
      "SUB - NED - 11:00 - 19:00"
    ],
    latlong: { latitude: 46.163790, longitude: 15.750261 },
  },
  {
    mjesto: "KRIŽ",
    adresa: "ZAGREBAČKA 19",
    tip: "POSLOVNICA",
    ikona: "images/map-marker-blue.svg",
    period: ["privremeno rv od 12.07."],
    radnoVrijeme: [
      "PON - 11:00 - 20:00", 
      "UTO - SUB - 09:00 - 21:00", 
      "NED - 09:00 - 20:00"
    ],
    latlong: { latitude: 45.667815, longitude: 16.522239 },
  },
  {
    mjesto: "ZAGREB",
    adresa: "MEŠTROVIĆEV TRG 1B",
    tip: "POSLOVNICA",
    ikona: "images/map-marker-blue.svg",
    period: ["27.07.2020. - 23.08.2020."],
    radnoVrijeme: [
      "PON - ZATVORENO",
      "UTO - PET - 11:00 - 17:00",
      "SUB - NED - 11:00 - 19:00"
    ],
    latlong: { latitude: 45.779690, longitude: 15.995687 },
  },
  {
    mjesto: "CRIKVENICA",
    adresa: "FRANKOPANSKA 29",
    tip: "POSLOVNICA",
    ikona: "images/map-marker-blue.svg",
    period: ["27.07.2020. - 23.08.2020."],
    radnoVrijeme: [
      "PON - ZATVORENO",
      "UTO - PET - 11:00 - 17:00",
      "SUB - NED - 11:00 - 19:00"
    ],
    latlong: { latitude: 45.173015, longitude: 14.692975 },
  },
  {
    mjesto: "GORIČAN",
    adresa: "VRTNA 28",
    tip: "POSLOVNICA",
    ikona: "images/map-marker-blue.svg",
    period:["27.07.2020. - 23.08.2020."],
    radnoVrijeme: [
      "PON - ZATVORENO",
      "UTO - PET - 11:00 - 17:00",
      "SUB - NED - 11:00 - 19:00"
    ],
    latlong: { latitude: 46.385091, longitude: 16.689837 },
  },
  {
    mjesto: "ZAGREB",
    adresa: "Ulica Poljanice I 2",
    tip: "POSLOVNICA",
    ikona: "images/map-marker-blue.svg",
    period: ["27.07.2020. - 23.08.2020."],
    radnoVrijeme: [
      "PON - ZATVORENO",
      "UTO - PET - 11:00 - 17:00",
      "SUB - NED - 11:00 - 19:00"
    ],
    latlong: { latitude: 45.829323, longitude: 16.068964 },
  },
  {
    mjesto: "ZAGREB",
    adresa: "LANIŠTE 3B",
    tip: "POSLOVNICA",
    ikona: "images/map-marker-blue.svg",
    period: ["10.08.2020. - 23.08.2020."],
    radnoVrijeme: [
      "PON - ZATVORENO",
      "UTO - PET - 11:00 - 17:00",
      "SUB - NED - 11:00 - 19:00"
    ],
    latlong: { latitude: 45.774667, longitude: 15.948832 },
  },
  {
    mjesto: "IVANIĆ GRAD",
    adresa: "KRALJA PETRA KREŠIMIRA IV 20",
    tip: "POSLOVNICA",
    ikona: "images/map-marker-blue.svg",
    period: ["privremeno rv od 15.07."],
    radnoVrijeme: [
      "PON - ZATVORENO",
      "UTO - PET - 11:00 - 17:00",
      "SUB - NED - 11:00 - 19:00"
    ],
    latlong: { latitude: 45.707346, longitude: 16.393270 },
  },
  {
    mjesto: "SLAVONSKI BROD",
    adresa: "ANDRIJE ŠTAMPARA 26",
    tip: "POSLOVNICA",
    ikona: "images/map-marker-blue.svg",
    period: ["30.07.2020. - 26.08.2020."],
    radnoVrijeme: [
      "PON - ZATVORENO",
      "UTO - PET - 11:00 - 17:00",
      "SUB - NED - 11:00 - 19:00"
    ],
    latlong: { latitude: 45.153758, longitude: 18.023643 },
  },
  {
    mjesto: "SAMOBOR",
    adresa: "LJUDEVITA GAJA 9",
    tip: "POSLOVNICA",
    ikona: "images/map-marker-blue.svg",
    period: ["-"],
    radnoVrijeme: [
      "PON - ZATVORENO",
      "UTO - PET - 11:00 - 17:00",
      "SUB - NED - 11:00 - 19:00"
    ],
    latlong: { latitude: 45.156226, longitude: 18.017627 },
  },
  // {
  //   mjesto: "OKUČANI",
  //   adresa: "BL. ALOJZIJA STEPINCA 14",
  //   period: ["27.07.2020. - 23.08.2020."],
  //   radnoVrijeme: [
  //     "PON - ZATVORENO",
  //     "UTO - PET - 11:00 - 17:00",
  //     "SUB - NED - 11:00 - 19:00"
  //   ],
  //   latlong: { latitude: 45.156226, longitude: 18.017627 },
  // },
  {
    mjesto: "ZABOK",
    adresa: "MATIJE GUPCA 67",
    tip: "POSLOVNICA",
    ikona: "images/map-marker-blue.svg",
    period: ["27.07.2020. - 23.08.2020."],
    radnoVrijeme: [
      "PON - ZATVORENO",
      "UTO - PET - 11:00 - 17:00",
      "SUB - NED - 11:00 - 19:00"
    ],
    latlong: { latitude: 46.024330, longitude: 15.900916 },
  },
  {
    mjesto: "ZAGREB",
    adresa: "MAKSIMIRSKA 115",
    tip: "POSLOVNICA",
    ikona: "images/map-marker-blue.svg",
    period: ["27.07.2020. - 23.08.2020."],
    radnoVrijeme: [
      "PON - ZATVORENO",
      "UTO - PET - 11:00 - 17:00",
      "SUB - NED - 11:00 - 19:00"
    ],
    latlong: { latitude: 45.818764, longitude: 16.011571 },
  },
  {
    mjesto: "SESVETE",
    adresa: "KOBILJAČKA 43",
    tip: "POSLOVNICA",
    ikona: "images/map-marker-blue.svg",
    period: ["27.07.2020. - 23.08.2020."],
    radnoVrijeme: [
      "PON - ZATVORENO",
      "UTO - PET - 11:00 - 17:00",
      "SUB - NED - 11:00 - 19:00"
    ],
    latlong: { latitude: 45.824266, longitude: 16.154414 },
  },
  {
    mjesto: "RIJEKA",
    adresa: "TRG 111. BRIGADE HRVATSKE VOJSKE",
    tip: "POSLOVNICA",
    ikona: "images/map-marker-blue.svg",
    period: ["27.07.2020. - 09.08.2020."],
    radnoVrijeme: [
      "ZATVORENO"
    ],
    latlong: { latitude: 45.326481, longitude: 14.440447 },
  },
  {
    mjesto: "SPLIT",
    adresa: "KRALJA ZVONIMIRA 65",
    tip: "POSLOVNICA",
    ikona: "images/map-marker-blue.svg",
    period: ["27.07.2020. - 23.08.2020."],
    radnoVrijeme: [
      "PON - ZATVORENO",
      "UTO - NED - 09:00 - 16:00"
    ],
    latlong: { latitude: 43.505664, longitude: 16.449569 },
  },
  {
    mjesto: "BLATO",
    adresa: "1. ULICA 19",
    tip: "POSLOVNICA",
    ikona: "images/map-marker-blue.svg",
    period: ["-"],
    radnoVrijeme: [
      "REDOVNO RADNO VRIJEME"
    ],
    latlong: { latitude: 42.939471, longitude: 16.789653 },
  },
  {
    mjesto: "IMOTSKI",
    adresa: "ULICA KRALJA ZVONIMIRA 18",
    tip: "POSLOVNICA",
    ikona: "images/map-marker-blue.svg",
    period: ["27.07.2020. - 23.08.2020."],
    radnoVrijeme: [
      "PON - ZATVORENO",
      "UTO - NED - 09:00 - 16:00"
    ],
    latlong: { latitude: 43.445750, longitude: 17.219324 },
  },
  {
    mjesto: "VELIKA GORICA",
    adresa: "TRG STJEPANA RADIĆA 9",
    tip: "POSLOVNICA",
    ikona: "images/map-marker-blue.svg",
    period: ["27.07.2020. - 23.08.2020."],
    radnoVrijeme: [
      "PON - ZATVORENO",
      "UTO - PET - 11:00 - 17:00",
      "SUB - NED - 11:00 - 19:00"
    ],
    latlong: { latitude: 45.712277, longitude: 16.067521 },
  },
  {
    mjesto: "ŽMINJ",
    adresa: "UL. 9. RUJNA, 20",
    tip: "POSLOVNICA",
    ikona: "images/map-marker-blue.svg",
    period: ["27.07.2020. - 23.08.2020."],
    radnoVrijeme: [
      "PON - ZATVORENO",
      "UTO - PET - 11:00 - 17:00",
      "SUB - NED - 11:00 - 19:00"
    ],
    latlong: { latitude: 45.144222, longitude: 13.910094 },
  },
  {
    mjesto: "SISAK",
    adresa: "HRV. NARODNOG PREPORODA 54",
    tip: "POSLOVNICA",
    ikona: "images/map-marker-blue.svg",
    period: ["-"],
    radnoVrijeme: [
      "PON: 11:00 - 20:00",
      "UTO - SUB: 09:00 - 21:00",
      "NED: 09:00 - 20:00"
    ],
    latlong: { latitude: 45.456325, longitude: 16.378745 },
  },
  {
    mjesto: "SPLIT",
    adresa: "MATICE HRVATSKE 1",
    tip: "POSLOVNICA",
    ikona: "images/map-marker-blue.svg",
    period: ["-"],
    radnoVrijeme: [
      "PON: ZATVORENO",
      "UTO - ČET: 16:00 - 22:00",
      "PET - NED: 15:00 - 22:00"
    ],
    latlong: { latitude: 43.508560, longitude: 16.451144 },
  },
  {
    mjesto: "ŠIBENIK",
    adresa: "PUT GIMNAZIJE 2",
    tip: "POSLOVNICA",
    ikona: "images/map-marker-blue.svg",
    period: ["27.07.2020. - 23.08.2020."],
    radnoVrijeme: [
      "PON: ZATVORENO",
      "UTO - NED - 09:00 - 16:00"
    ],
    latlong: { latitude: 43.733932, longitude: 15.896085 },
  },
  {
    mjesto: "VUKOVAR",
    adresa: "UL. BANA JOSIPA JELAČIĆA 61",
    tip: "POSLOVNICA",
    ikona: "images/map-marker-blue.svg",
    period: ["27.07.2020. - 23.08.2020."],
    radnoVrijeme: [
      "PON: ZATVORENO",
      "UTO - PET - 11:00 - 17:00",
      "SUB - NED - 11:00 - 19:00"
    ],
    latlong: { latitude: 45.340894, longitude: 19.018051 },
  },
  {
    mjesto: "RIJEKA",
    adresa: "BARTOLA KAŠIĆA 14",
    tip: "POSLOVNICA",
    ikona: "images/map-marker-blue.svg",
    period: ["27.07.2020. - 23.08.2020."],
    radnoVrijeme: [
      "PON: ZATVORENO",
      "UTO - PET - 11:00 - 17:00",
      "SUB - NED - 11:00 - 19:00"
    ],
    latlong: { latitude: 45.402218, longitude: 14.383017 },
  },
  {
    mjesto: "BEDEKOVČINA",
    adresa: "STJEPANA RADIĆA 1",
    tip: "POSLOVNICA",
    ikona: "images/map-marker-blue.svg",
    period: ["-"],
    radnoVrijeme: [
      "PON: 11:00 - 20:00",
      "UTO - SUB: 09:00 - 21:00",
      "NED: 09:00 - 20:00"
    ],
    latlong: { latitude: 46.042038, longitude: 15.996669 },
  },
  ...automatClubs
];

// let test1 = offices.filter(office => office.mjesto == "ZAGREB");

const filterInput = document.getElementById("filterInput");

filterInput.addEventListener("keyup", function () {
  const filterInputValue = filterInput.value.toUpperCase();
  const tr = document.querySelectorAll('tbody tr');
  tr.forEach(tr => tr.style.display = [...tr.children].find(td => td.innerHTML.toUpperCase().includes(filterInputValue)) ? '' : 'none');
});



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
        td.innerHTML = office[key][0];
      } else if (!(key == "latlong" || key == "ikona")) {
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

  const infowindow = new google.maps.InfoWindow();

  let marker, i;

  for (i = 0; i < offices.length; i++) {
    marker = new google.maps.Marker({
      position: new google.maps.LatLng(offices[i].latlong.latitude, offices[i].latlong.longitude),
      map: map,
      icon: offices[i].ikona
    });

    google.maps.event.addListener(
      marker,
      "click",
      (function (marker, i) {
        return function () {
          infowindow.setContent(`
          <h3>${offices[i].tip} ${offices[i].mjesto}</h3>
          <p>${offices[i].adresa}</p>
          <ul>
            ${offices[i].radnoVrijeme.map(dan => `<li>${dan}</li>`).join("")}
          </ul>`);
          infowindow.open(map, marker);
        };
      })(marker, i)
    );
  }

  const legend = document.getElementById('legend');
  legend.innerHTML = `
    <h3>Legenda</h3>
    <p><img src="images/map-marker-red.svg" alt="Automat klub ikona"> - Automat Klub</p>
    <p><img src="images/map-marker-blue.svg" alt="Poslovnica ikona"> - Poslovnica</p>
    <span class="close-legend">&#10006;</span>`
  const closeLegend = document.querySelector(".close-legend");
  closeLegend.addEventListener("click", () => legend.style = "display: none");
  map.controls[google.maps.ControlPosition.LEFT_CENTER].push(legend);
}

const chooseLevelOfStudy = [
  {
    label: "Diploma (Polytechnic)",
    value: "diploma",
    chooseSystemOfStudy: [
      {
        label: "National Qualification",
        options: [
          {
            value: "ssc(vocational)",
            label: "SSC (vocational)",
          },
        ],
      },
    ],
  },
  {
    label: "Undergraduate/Bachelors",
    value: "bachelors",
    chooseSystemOfStudy: [
      {
        label: "National Qualification",
        options: [
          {
            value: "ssc/hsc(bangla)",
            label: "SSC/HSC (Bangla)",
          },
          {
            value: "ssc/hsc(english)",
            label: "SSC/HSC (English)",
          },
          {
            value: "dakhil/alim",
            label: "Dakhil/Alim",
          },
        ],
      },
      {
        label: "Internation Qualification",
        options: [
          {
            value: "o'level/a'level",
            label: "O'Level / A'Level",
          },
          {
            value: "sat",
            label: "SAT",
          },
          {
            value: "ib",
            label: "IB",
          },
          {
            value: "ap",
            label: "IB",
          },
        ],
      },
    ],
  },
  {
    label: "Postgraduate/ Masters",
    value: "masters",
    chooseSystemOfStudy: [
      {
        label: "Internation Qualification",
        options: [
          {
            value: "gmat",
            label: "GMAT (200-800",
          },
          {
            value: "gre",
            label: "GRE (260-340",
          },
        ],
      },
    ],
  },
];

export default chooseLevelOfStudy;

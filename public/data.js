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
        label: "National Qualifications",
        options: [
          {
            value: "ssc/hsc(bangla)",
            label: "SSC & HSC (Bangla)",
          },
          {
            value: "ssc/hsc(english)",
            label: "SSC & HSC (English)",
          },
          {
            value: "dakhil/alim",
            label: "Dakhil & Alim",
          },
        ],
      },
      {
        label: "Internationl Qualifications",
        options: [
          {
            value: "igcse/a'level",
            label: "IGCSE & A'Level",
            igcse: [
              {
                label: "Subject 1",
                value: "subject1",
                options: [
                  {
                    value: 5,
                    label: "A",
                  },
                  {
                    value: 4,
                    label: "B",
                  },
                  {
                    value: 3,
                    label: "C",
                  },
                  {
                    value: 2,
                    label: "D",
                  },
                ],
              },
              ,
              {
                label: "Subject 2",
                value: "subject2",
                options: [
                  {
                    value: 5,
                    label: "A",
                  },
                  {
                    value: 4,
                    label: "B",
                  },
                  {
                    value: 3,
                    label: "C",
                  },
                  {
                    value: 2,
                    label: "D",
                  },
                ],
              },

              {
                label: "Subject 3",
                value: "subject3",
                options: [
                  {
                    value: 5,
                    label: "A",
                  },
                  {
                    value: 4,
                    label: "B",
                  },
                  {
                    value: 3,
                    label: "C",
                  },
                  {
                    value: 2,
                    label: "D",
                  },
                ],
              },
              {
                label: "Subject 4",
                value: "subject4",
                options: [
                  {
                    value: 5,
                    label: "A",
                  },
                  {
                    value: 4,
                    label: "B",
                  },
                  {
                    value: 3,
                    label: "C",
                  },
                  {
                    value: 2,
                    label: "D",
                  },
                ],
              },
              {
                label: "Subject 5",
                value: "subject5",
                options: [
                  {
                    value: 5,
                    label: "A",
                  },
                  {
                    value: 4,
                    label: "B",
                  },
                  {
                    value: 3,
                    label: "C",
                  },
                  {
                    value: 2,
                    label: "D",
                  },
                ],
              },
            ],
            aLebel: [
              {
                label: "Subject 1",
                value: "aLebelSubject1",
                options: [
                  {
                    value: 5,
                    label: "A",
                  },
                  {
                    value: 4,
                    label: "B",
                  },
                  {
                    value: 3,
                    label: "C",
                  },
                  {
                    value: 2,
                    label: "D",
                  },
                ],
              },
              {
                label: "Subject 2",
                value: "aLebelSubject2",
                options: [
                  {
                    value: 5,
                    label: "A",
                  },
                  {
                    value: 4,
                    label: "B",
                  },
                  {
                    value: 3,
                    label: "C",
                  },
                  {
                    value: 2,
                    label: "D",
                  },
                ],
              },
            ],
          },
          {
            value: "sat",
            label: "SAT",
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
            value: "cgpa",
            label: "CGPA",
          },
          {
            value: "gre",
            label: "GRE",
          },
          {
            value: "gmat",
            label: "GMAT",
          },
        ],
      },
    ],
  },
];

export default chooseLevelOfStudy;

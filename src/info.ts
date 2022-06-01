import {
  MdMailOutline,
  MdOutlineVolunteerActivism,
  MdWorkOutline,
  MdOutlinePeopleAlt,
} from "react-icons/md"
import {
  SiAmazonaws,
  SiAsciidoctor,
  SiCss3,
  SiDocker,
  SiExpo,
  SiFigma,
  SiFirebase,
  SiGatsby,
  SiGit,
  SiHtml5,
  SiJava,
  SiMysql,
  SiNextdotjs,
  SiPython,
  SiReact,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
  SiVisualstudiocode,
} from "react-icons/si"
import { langInfo } from "../lib/types"
import { BsLinkedin, BsGithub, BsGlobe } from "react-icons/bs"
const info: { en: langInfo; no: langInfo } = {
  en: {
    lang: "en",
    profile: {
      name: "Sondre Alfnes",
      role: "Developer",
    },
    info: {
      about: {
        title: "Profile",
        text: "I am a 20 year old student from Nittedal. I am now in the 1th year of the NTNU bachelor in Informatics. I am a very social person and like to collaborate on projects.",
      },
      contact: {
        title: "Details",
        adress: ["Eirik Jarls gate 2", "7030, Trondheim"],
        phone: "+47 454 54 820",
        links: [
          {
            Icon: MdMailOutline,
            link: "mailto:sondre.alfnes@gmail.com",
            text: "sondre.alfnes@gmail.com",
          },
          {
            Icon: BsLinkedin,
            link: "https://www.linkedin.com/in/sondre-alfnes-2243331b3/",
            text: "Sondre Alfnes",
          },
          {
            Icon: BsGithub,
            link: "https://github.com/sondrealf",
            text: "Sondrealf",
          },
          {
            Icon: BsGlobe,
            link: "https://www.alfnes.dev/",
            text: "URL hjemmeside",
          },
        ],
      },
      skills: [
        {
          title: "Frontend",
          techs: [
            SiCss3,
            SiGatsby,
            SiHtml5,
            SiJava,
            SiNextdotjs,
            SiReact,
            SiTailwindcss,
            SiTypescript,
          ],
        },
        /*
        {
          title: "Backend / UI less",
          techs: [SiGraphql, SiJava, SiNodedotjs, SiPython],
        },
        {
          title: "Database",
          techs: [SiFirebase, SiMongodb, SiMysql, SiPostgresql],
        },
        */
        {
          title: "Development eviroment",
          techs: [SiGit, SiVisualstudiocode],
        },
        {
          title: "Other",
          techs: [SiFigma,SiVercel,],
        },
      ],
    },
    content: {
      education: [
        {
          title: "Bachelor in Information technology",
          location: "Norwegian University of Science and Technology",
          positions: [
            {
              timerange: "August 2021 - Current",
              description: "Bachelor's degree programme, 3 years, Trondheim",
            },
          ],
        },
        {
          title: "General Studies with Stem field subjects",
          location: "Bjertnes vgs - Highschool",
          positions: [
            {
              timerange: "August 2019 - June 2021",
              description: "3 years, Nittedal",
            },
          ],
        }
      ],
      experience: [
        {
          title: "Work Experience",
          Icon: MdWorkOutline,
          locations: [
            {
              title: "PostNord Stralfors AB",
              location: "Oslo",
              positions: [
                {
                  timerange: "Desember 2020 - August 2021",
                  description: "Machine operator",
                  text: "I was a machine operator at PostNord Stralfors AB. During which, I maintenaned and was responsible for repair of the enveloping machine.",
                },
              ],
            },
          ],
        },
        {
          title: "Voluntary Work and other Experiences",
          Icon: MdOutlineVolunteerActivism,
          locations: [
            {
              title: "Student organization, Online",
              location: "NTNU",
              positions: [
                {
                  timerange: "September 2021 - Current",
                  description: "Member - Operation and Development committee (Dotkom)",
                  text: "I am responsible for the development and maintenance of the website (online.ntnu.no).",
                }
              ],
            },
          ],
        },
        {
          title: "References",
          Icon: MdOutlinePeopleAlt,
          locations: [
            {
              title: "",
              location: "",
              positions: [
                {
                  timerange: "",
                  description: "liste|Thomas Snellingen (Shift manger for PostNord Stralfors AB) Tlf: +47 452 51 109",
                  text: "",
                }
              ],
            },
          ],
        },
      ],
      projects: [
        {
          image: {
            src: "onlinelogo",
            alt: "Online logo",
          },
          title: "Online Student Organization Website",
          githubLink: "https://github.com/dotkom/galactic-thunderdome-x",
          text: "A website project for the new online.ntnu.no page.",
        },
      
        {
          image: {
            src: "me",
            alt: "Me",
          },
          website: {
            link: "https://www.alfnes.dev/",
            text: "webpage",
          },
          title: "My website",
          githubLink: "https://github.com/sondrealf/portfolio-side",
          text: "A website about me as a person and what I do",
        },
        {
          image: {
            src: "more",
            alt: "More picture",
          },
          title: "More projects",
          githubLink: "https://github.com/sondrealf",
          text: "My github profile",
        },
        {
          image: {
            src: "me",
            alt: "Me",
          },
          website: {
            link: "https://cv.alfnes.dev/",
            text: "webpage",
          },
          title: "This website",
          githubLink: "https://github.com/sondrealf/cv",
          text: "Its this CV page",
        },
      ],
    },
  },
  no: {
    lang: "no",
    profile: {
      name: "Sondre Alfnes",
      role: "Utvikler",
    },
    info: {
      about: {
        title: "Profil",
        text: "Jeg er en 20 år gammel student fra Nittedal. Jeg går nå 1. året på NTNU bachelor i Informatikk. Jeg er en veldig sosial person og liker godt å samarbeide på prosjekter.",
      },
      contact: {
        title: "Detaljer",
        adress: ["Eirik Jarls gate 2", "7030, Trondheim"],
        phone: "+47 454 54 820",
        links: [
          {
            Icon: MdMailOutline,
            link: "mailto:sondre.alfnes@gmail.com",
            text: "sondre.alfnes@gmail.com",
          },
          {
            Icon: BsLinkedin,
            link: "https://www.linkedin.com/in/sondre-alfnes-2243331b3/",
            text: "Sondre Alfnes",
          },
          {
            Icon: BsGithub,
            link: "https://github.com/sondrealf",
            text: "Sondrealf",
          },
          {
            Icon: BsGlobe,
            link: "https://www.alfnes.dev/",
            text: "URL hjemmeside",
          },
        ],
      },
      skills: [
        {
          title: "Frontend",
          techs: [
            SiCss3,
            SiGatsby,
            SiHtml5,
            SiJava,
            SiNextdotjs,
            SiReact,
            SiTailwindcss,
            SiTypescript,
          ],
        },
        /*
        {
          title: "Backend / UI less",
          techs: [SiGraphql, SiJava, SiNodedotjs, SiPython],
        },
        {
          title: "Database",
          techs: [SiFirebase, SiMongodb, SiMysql, SiPostgresql],
        },
        */
        {
          title: "Development eviroment",
          techs: [SiGit, SiVisualstudiocode],
        },
        {
          title: "Other",
          techs: [SiFigma, SiVercel],
        },
      ],
    },
    content: {
      education: [
        {
          title: "Bachelor i Informatikk",
          location: "Norges teknisk-naturvitenskapelige universitet",
          positions: [
            {
              timerange: "August 2021 - Nå",
              description: "Bachelorprogram, 3-årig, Trondheim",
            },
          ],
        },
        {
          title: "Studiespessialisering med realfag",
          location: "Bjertnes vgs - Videregående skole",
          positions: [
            {
              timerange: "August 2019 - Juni 2021",
              description: "3 år, Nittedal",
            },
          ],
        }
      ],
      experience: [
        {
          title: "Arbeids erfaring",
          Icon: MdWorkOutline,
          locations: [
            {
              title: "PostNord Stralfors AB",
              location: "Oslo",
              positions: [
                {
                  timerange: "Desember 2020 - August 2021",
                  description: "Maskinoperatør",
                  text: "Jeg var en maskinopperatør på PostNord Stralfors AB. Jobben min var å vedlikeholde og fikse konfluteringsmaskiner.",
                },
              ],
            },
          ],
        },
        {
          title: "Frivillig arbeid",
          Icon: MdOutlineVolunteerActivism,
          locations: [
            {
              title: "Online Linjeforening",
              location: "NTNU",
              positions: [
                {
                  timerange: "September 2021 - Nå",
                  description: "Medlem - Drifts- og utviklingskomiteen (Dotkom)",
                  text: "Jeg er ansvarlig for utvikling og vedlikehold av nettsiden (online.ntnu.no).",
                }
              ],
            },
          ],
        },
        {
          title: "Refferanse",
          Icon: MdOutlinePeopleAlt,
          locations: [
            {
              title: "",
              location: "",
              positions: [
                {
                  timerange: "",
                  description: "liste|Thomas Snellingen (Skiftleder til PostNord Stralfors AB) Tlf: +47 452 51 109",
                  text: "",
                }
              ],
            },
          ],
        },
      ],
      projects: [
        {
          image: {
            src: "onlinelogo",
            alt: "Online logo",
          },
          title: "Online Student Organization Website",
          githubLink: "https://github.com/dotkom/galactic-thunderdome-x",
          text: "Et nettside prosjekt for den nye online.ntnu.no siden.",
        },
      
        {
          image: {
            src: "me",
            alt: "Me",
          },
          website: {
            link: "https://www.alfnes.dev/",
            text: "webpage",
          },
          title: "Min hjemmeside",
          githubLink: "https://github.com/sondrealf/portfolio-side",
          text: "En nettside om meg som en person og hva jeg gjør",
        },
        {
          image: {
            src: "more",
            alt: "More picture",
          },
          title: "Flere prosjekter",
          githubLink: "https://github.com/sondrealf",
          text: "Min guthub profil",
        },
        {
          image: {
            src: "me",
            alt: "Me",
          },
          website: {
            link: "https://cv.alfnes.dev/",
            text: "webpage",
          },
          title: "Denne siden",
          githubLink: "https://github.com/sondrealf/cv",
          text: "Denne CV nettsiden",
        },
      ],
    },
  },
}

export default info

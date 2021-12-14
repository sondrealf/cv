import {
  MdMailOutline,
  MdOutlineVolunteerActivism,
  MdWorkOutline,
} from "react-icons/md"
import { FaTerminal } from "react-icons/fa"
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
  SiGraphql,
  SiHtml5,
  SiJava,
  SiKubuntu,
  SiLinux,
  SiMongodb,
  SiMysql,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiPython,
  SiReact,
  SiTailwindcss,
  SiTerraform,
  SiTypescript,
  SiVisualstudiocode,
} from "react-icons/si"
import { langInfo } from "../lib/types"
import { BsLinkedin, BsGithub, BsGlobe } from "react-icons/bs"
const info: { en: langInfo; no: langInfo } = {
  en: {
    lang: "en",
    profile: {
      name: "Johan August Østbye",
      role: "Developer",
    },
    info: {
      about: {
        title: "Profile",
        text: "I am a 23 year old student from Nesodden. I am now in the 4th year of the NTNU master's in Informatics with a focus on databases and search. I am a very social person and like to collaborate on projects.",
      },
      contact: {
        title: "Details",
        adress: ["Nyborgbakken 8", "1458, Fjellstrand"],
        phone: "+47 913 01 594",
        links: [
          {
            Icon: MdMailOutline,
            link: "mailto:johan.august@outlook.com",
            text: "Johan.August@outlook.com",
          },
          {
            Icon: BsLinkedin,
            link: "https://www.linkedin.com/in/johan-august-%C3%B8stbye-6b0669192/",
            text: "Johan August Østbye",
          },
          {
            Icon: BsGithub,
            link: "https://github.com/JohanAOstbye",
            text: "JohanAOstbye",
          },
          {
            Icon: BsGlobe,
            link: "https://johanaostbye.github.io",
            text: "johanaostbye.github.io",
          },
        ],
      },
      skills: [
        {
          title: "Frontend",
          techs: [
            SiCss3,
            SiExpo,
            SiGatsby,
            SiHtml5,
            SiJava,
            SiNextdotjs,
            SiReact,
            SiTailwindcss,
            SiTypescript,
          ],
        },
        {
          title: "Backend / UI less",
          techs: [SiGraphql, SiJava, SiNodedotjs, SiPython],
        },
        {
          title: "Database",
          techs: [SiFirebase, SiMongodb, SiMysql, SiPostgresql],
        },
        {
          title: "Development eviroment",
          techs: [SiGit, SiKubuntu, SiLinux, FaTerminal, SiVisualstudiocode],
        },
        {
          title: "Other",
          techs: [SiAmazonaws, SiAsciidoctor, SiDocker, SiFigma, SiTerraform],
        },
      ],
    },
    content: {
      education: [
        {
          title: "Master of Science in Informatics",
          location: "Norwegian University of Science and Technology",
          positions: [
            {
              timerange: "August 2021 - Current",
              description:
                "Databases and Search - Master's degree programme, 2 years, Trondheim",
            },
          ],
        },
        {
          title: "Bachelor in Information technology",
          location: "Norwegian University of Science and Technology",
          positions: [
            {
              timerange: "August 2017 - June 2021",
              description: "Bachelor's degree programme, 2 years, Trondheim",
            },
          ],
        },
      ],
      experience: [
        {
          title: "Work Experience",
          Icon: MdWorkOutline,
          locations: [
            {
              title: "Superinstruktørene AS",
              location: "Nesodden",
              positions: [
                {
                  timerange: "June 2021 - August 2021",
                  description: "Head instructor",
                  text: "Assembled the academic part of a course for primary school students together with academically responsible manager from Superinstruktørene",
                },
              ],
            },
            {
              title: "Spisskammerset AS",
              location: "Nesodden, Fagerstrand",
              positions: [
                {
                  timerange: "2016 - 2020",
                  description: "Delivery driver, waiter, helping chef",
                  text: "Derlivered catering food and equipment i Oslo and Viken. If needed i stepped in as waiter or helping chef. On a daily basis i was the contactpoint for the customers.",
                },
              ],
            },
          ],
        },
        {
          title: "Voluntary Work Experience",
          Icon: MdOutlineVolunteerActivism,
          locations: [
            {
              title: "Student organization, Online",
              location: "NTNU",
              positions: [
                {
                  timerange: "March 2019 - March 2020",
                  description: "Deputy head - Academic courses committee",
                  text: "Accompany and assist the leader in sustaining the committees purpose: Activly work to stimulate the students' academic interests and offer academic-related courses.",
                },
                {
                  timerange: "March 2020 - November 2021",
                  description:
                    "Representative from Academic courses committee - Banking and finance committee",
                  text: "Assist the committee in keeping track of the available funds and plan future spending to be able to adapt according to the students' needs",
                },
                {
                  timerange: "November 2021 - Current",
                  description:
                    "Project leader - Digitization of Banking and finance committee",
                  text: "Project leader and owner of the project that is supposed to digitalize all the necessary parts of the Banking and finance committee",
                },
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
          website: {
            link: "https://faktura.online.ntnu.no/",
            text: "webpage",
          },
          title: "Invoice info",
          githubLink: "https://github.com/JohanAOstbye/invoiceinfo",
          text: "A website for collecting invoice information from companies that the Student organization, Online collaborates with",
        },
        {
          image: {
            src: "taco",
            alt: "Taco picture",
          },
          website: {
            link: "https://tacomanager.vercel.app/",
            text: "webpage",
          },
          title: "Tacomanager",
          githubLink: "https://github.com/JohanAOstbye/tacomanager",
          text: "A website to keep track of who will be attending tacofridays in the house",
        },
        {
          image: {
            src: "me",
            alt: "Me",
          },
          website: {
            link: "https://johanaostbye.github.io/me/",
            text: "webpage",
          },
          title: "My website",
          githubLink: "https://github.com/JohanAOstbye/tacomanager",
          text: "A website about me as a person and what I do",
        },
        {
          image: {
            src: "more",
            alt: "More picture",
          },
          title: "More projects",
          githubLink: "https://github.com/JohanAOstbye",
          text: "The rest of my projects such as this CV are on my github profile",
        },
      ],
    },
  },
  no: {
    lang: "no",
    profile: {
      name: "Johan August Østbye",
      role: "Utvikler",
    },
    info: {
      about: {
        title: "Profil",
        text: "Jeg er en 23 år gammel student fra Nesodden. Jeg går nå 4. året på NTNU master i Informatikk med retning databaser og søk. Jeg er en veldig sosial person og liker godt å samarbeide på prosjekter.",
      },
      contact: {
        title: "Detaljer",
        adress: ["Nyborgbakken 8", "1458, Fjellstrand"],
        phone: "+47 913 01 594",
        links: [
          {
            Icon: MdMailOutline,
            link: "mailto:johan.august@outlook.com",
            text: "Johan.August@outlook.com",
          },
          {
            Icon: BsLinkedin,
            link: "https://www.linkedin.com/in/johan-august-%C3%B8stbye-6b0669192/",
            text: "Johan August Østbye",
          },
          {
            Icon: BsGithub,
            link: "https://github.com/JohanAOstbye",
            text: "JohanAOstbye",
          },
          {
            Icon: BsGlobe,
            link: "https://johanaostbye.github.io",
            text: "johanaostbye.github.io",
          },
        ],
      },
      skills: [
        {
          title: "Frontend",
          techs: [
            SiCss3,
            SiExpo,
            SiGatsby,
            SiHtml5,
            SiJava,
            SiNextdotjs,
            SiReact,
            SiTailwindcss,
            SiTypescript,
          ],
        },
        {
          title: "Backend / Uten UI",
          techs: [SiGraphql, SiJava, SiNodedotjs, SiPython],
        },
        {
          title: "Databaser",
          techs: [SiFirebase, SiMongodb, SiMysql, SiPostgresql],
        },
        {
          title: "Development eviroment",
          techs: [SiGit, SiKubuntu, SiLinux, FaTerminal, SiVisualstudiocode],
        },
        {
          title: "Andre",
          techs: [SiAmazonaws, SiAsciidoctor, SiDocker, SiFigma, SiTerraform],
        },
      ],
    },
    content: {
      education: [
        {
          title: "Master i Informatikk",
          location: "Norges teknisk-naturvitenskapelige universitet",
          positions: [
            {
              timerange: "August 2021 - Nå",
              description: "Databaser og søk - Masterprogram 2-årig, Trondheim",
            },
          ],
        },
        {
          title: "Bachelor i Informatikk",
          location: "Norges teknisk-naturvitenskapelige universitet",
          positions: [
            {
              timerange: "August 2017 - Juni 2021",
              description: "Bachelorprogram, 3-årig, Trondheim",
            },
          ],
        },
      ],
      experience: [
        {
          title: "Arbeids erfaring",
          Icon: MdWorkOutline,
          locations: [
            {
              title: "Superinstruktørene AS",
              location: "Nesodden",
              positions: [
                {
                  timerange: "Juni 2021 - August 2021",
                  description: "Hovedinstruktør",
                  text: "Satt sammen den faglige delen av et kurs for grunnskoleelever sammen med faglig ansvarlig leder fra Superinstruktørene",
                },
              ],
            },
            {
              title: "Spisskammerset AS",
              location: "Nesodden, Fagerstrand",
              positions: [
                {
                  timerange: "2016 - 2020",
                  description: "Sjåfør, servitør, hjelpekokk",
                  text: "Levert serveringsmat og utstyr i Oslo og Viken. Om nødvendig hjalp jeg til som servitør eller hjelpekokk. Til daglig var jeg kontaktpunkt for kundene.",
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
                  timerange: "Mars 2019 - Mars 2020",
                  description: "Nestleder - Fag- og kurskomiteen",
                  text: "Bitså lederen med å opprettholde komiteens formål: Aktivt arbeide for å stimulere studentenes faglige interesser og tilby faglig relaterte kurs",
                },
                {
                  timerange: "Mars 2020 - November 2021",
                  description:
                    "Økonomiansvarlig, Fag- og kurskomiteen - Bank- og økonomikomiteen",
                  text: "Bistå komiteen med å holde oversikt over tilgjengelige midler og planlegge fremtidige utgifter for å kunne tilpasse seg studentenes behov",
                },
                {
                  timerange: "November 2021 - Nå",
                  description:
                    "Prosjektleder - Digitalisering av Bank- og økonomikomiteen",
                  text: "Prosjektleder og eier av prosjektet som skal digitalisere alle nødvendige deler av Bank- og økonomikomiteen",
                },
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
          website: {
            link: "https://faktura.online.ntnu.no/",
            text: "nettside",
          },
          title: "Invoice info",
          githubLink: "https://github.com/JohanAOstbye/invoiceinfo",
          text: "En nettside for å hente inn fakturainformasjon fra bedrifter som Online Linjeforening sammarbeider med",
        },
        {
          image: {
            src: "taco",
            alt: "Taco picture",
          },
          website: {
            link: "https://tacomanager.vercel.app/",
            text: "nettside",
          },
          title: "Tacomanager",
          githubLink: "https://github.com/JohanAOstbye/tacomanager",
          text: "En nettside for å holde styr på hvem som skal være med på tacokveld i kollektivet",
        },
        {
          image: {
            src: "me",
            alt: "Me",
          },
          website: {
            link: "https://johanaostbye.github.io/me/",
            text: "nettside",
          },
          title: "Min portofolio",
          githubLink: "https://github.com/JohanAOstbye/tacomanager",
          text: "En nettside om meg som person og hva jeg gjør",
        },
        {
          image: {
            src: "more",
            alt: "...",
          },
          title: "Flere prosjekter",
          githubLink: "https://github.com/JohanAOstbye",
          text: "Resten av prosjektene som for eksempel denne cv'en ligger på min github profil",
        },
      ],
    },
  },
}

export default info

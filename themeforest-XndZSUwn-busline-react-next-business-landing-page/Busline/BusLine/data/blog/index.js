import { faGavel } from "@fortawesome/free-solid-svg-icons";
import {
  faLightbulb,
  faCalendarAlt,
} from "@fortawesome/free-regular-svg-icons";
import Img1 from "../../public/assets/images/blog/blog1.png";
import Img2 from "../../public/assets/images/blog/blog2.png";
import Img3 from "../../public/assets/images/blog/blog3.png";

const BlogData = [
  {
    id: 1,
    img: Img1,
    Icon: faLightbulb,
    title: "Prêt étudiant",
    subtitle: "Williamson",
    subcontent: "Web designer",
    content: "Un prêt étudiant peut aider à payer les études post-bac",
  },
  {
    id: 2,
    img: Img2,
    Icon: faCalendarAlt,
    title: "Achat voiture",
    subtitle: "Miranda Roy",
    subcontent: "Web developer",
    content:
      "Utilisez notre prêt Auto et calculez les paiements pendant la durée de votre prêt",
  },
  {
    id: 3,
    img: Img3,
    Icon: faGavel,
    title: "Equipement maison",
    subtitle: "Steve Thomas",
    subcontent: "Web developer",
    content:
      "Votre maison est une partie importante de votre vie. Obtenez votre prêt de rénovation",
  },
];

export default BlogData;

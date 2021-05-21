import React from "react";
import styled from "styled-components";
import AboutInfo from "./AboutInfo";

function AboutInfoBox(props) {
  const AboutInfoDiv = styled.div`
    width: 95%;
    height: 50%;
    padding: 20px;
    margin-left: 2.5%;
    @media screen and (max-width: 768px) {
      width: 100%;
      margin-left: unset;
      height: unset;
      padding: unset;
    }
  `;
  const InfoData = [
    {
      img: "/assets/img/cat/Balinese.jpg",
      name: "Balinese Cat",
      about:
        "The Balinese is a long-haired breed of domestic cat with Siamese-style point coloration and sapphire-blue eyes. The Balinese is also known as the purebred long-haired Siamese, since it originated as a natural mutation of that breed and hence is essentially the same cat with a medium-length silky coat and a distinctively plumed tail.",
    },
    {
      img: "/assets/img/cat/DevonRex.jpg",
      name: "DevonRex",
      about:
        "The Devon Rex is a breed of intelligent, tall-eared, short-haired cat that emerged in England during the late 1950s. They are known for their slender bodies, wavy coat, and large ears. This breed of cat is capable of learning difficult tricks but can be hard to motivate.",
    },
    {
      img: "/assets/img/cat/LaPerm.jpg",
      name: "LaPerm",
      about:
        "The LaPerm is a rex breed which originated in the United States and is now present in many other countries worldwide. The breed is genetically unique and not related to any other rex cat varieties, having a dominant gene causing their curly coats. They have an elegant and athletic build and are affectionate, active, and outgoing in character.",
    },
    {
      img: "/assets/img/cat/Manx.jpg",
      name: "Manx Cat",
      about:
        "Manx are prized as skilled hunters, and thus have often been sought by farmers with rodent problems, and been a preferred ship's cat breed. They are said to be social, tame and active. An old local term for the cats on their home island is stubbin or rumpy. Manx have been exhibited in cat shows since the 1800s, with the first known breed standard published in 1903.",
    },
    {
      img: "/assets/img/cat/NorwegianForest.jpg",
      name: "Norwegian Forest Cat",
      about:
        "The Norwegian Forest cat (Norwegian: Norsk skogkatt or Norsk skaukatt) is a breed of domestic cat originating in Northern Europe. This natural breed is adapted to a very cold climate, with a top coat of glossy, long, water-shedding hair and a woolly undercoat for insulation. It is a big, strong cat, similar to the Maine Coon breed, with long legs, bushy tail, and sturdy body.",
    },
    {
      img: "/assets/img/cat/Ragamuffin.jpg",
      name: "Ragamuffin",
      about:
        "The Ragamuffin is a breed of domestic cat. It was once considered to be a variant of the Ragdoll cat but was established as a separate breed in 1994. Ragamuffins are notable for their friendly personalities and thick, rabbit-like fur. Much like the ragdoll, they are also one of the laziest breeds, because of this they should be kept as indoor pets.",
    },
    {
      img: "/assets/img/cat/Ragdoll.jpg",
      name: "Ragdoll",
      about:
        "The Ragdoll is a cat breed with a color point coat and blue eyes. They are large and muscular semi-longhair cats with a soft and silky coat. Developed by American breeder Ann Baker in the 1960s, they are best known for their docile and placid temperament and affectionate nature.",
    },
    {
      img: "/assets/img/cat/RussianBlue.jpg",
      name: "RussianBlue",
      about:
        "The Russian Blue is a naturally occurring breed that may have originated in the port of Arkhangelsk in Russia. They are also sometimes called Archangel Blues. It is believed that sailors took Russian Blues from the Archangel Isles to Great Britain and Northern Europe in the 1860s.",
    },
  ];

  const DataRender = InfoData.map((props, key) => {
    return (
      <AboutInfo
        img={props.img}
        name={props.name}
        about={props.about}
        key={key}
      />
    );
  });
  return <AboutInfoDiv>{DataRender}</AboutInfoDiv>;
}

export default AboutInfoBox;

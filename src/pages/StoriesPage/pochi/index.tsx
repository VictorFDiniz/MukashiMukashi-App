import React from "react";
import Swiper from "react-native-swiper";
import { ScrollView } from "react-native";
import {
  ContainerStyle,
  StoryContainer,
  TextStyleStorie,
  TextContainerStorie,
  ImageStyle,
} from "../Styles/styles";

interface StoryItem {
  id: string;
  source: any;
  text: string;
}

const stories: StoryItem[] = [
  {
    id: "story1",
    source: require("../../../assets/img/o-bom-e-o-mau-velhinho-01.jpg"),
    text: "Há muito tempo atrás existiu um lugar onde vivia um gentil velhinho. O velhinho tinha um cachorro que se chamava pochi. Um dia pochi começou a latir no quintal e o velhino foi ver o que estava acontecendo.",
  },
  {
    id: "story2",
    source: require("../../../assets/img/o-bom-e-o-mau-velhinho-02.jpg"),
    text: "Pochi guiou o velhinho até uma amorera, quando o velhino a cortou uma grande quantidade de dinheiro saiu de repente dela.",
  },
  {
    id: "story3",
    source: require("../../../assets/img/o-bom-e-o-mau-velhinho-03.jpg"),
    text: 'Do lado do bom velhinho vivia um mau velhinho. O velhino do lado queria se tornar rico por conta disso estava com inveja "Deixe que eu também fique com pochi", pediu ao bom velhino.',
  },
  {
    id: "story4",
    source: require("../../../assets/img/o-bom-e-o-mau-velhinho-04.jpg"),
    text: 'Quando estavam juntos o mau velhinho disse a pochi "Vamos, eu também quero que encontre dinheiro para mim, não vai ser bom para você se não encontrar", mas pochi ficou apenas o encarando. "Rápido, encontre! Se não encontrar eu farei isso", o mau velhino pegou um pedaço de pau e bateu em pochi, pochi fugiu para o campo e começou a latir.',
  },
  {
    id: "story5",
    source: require("../../../assets/img/o-bom-e-o-mau-velhinho-05.jpg"),
    text: '"então é aí que o dinheiro está, não é?", o mau velhino foi ao lugar onde pochi estava latindo, mas em vez de dinheiro o que saiu foram apenas pedaços de tigelas e vasos. O velho com raiva bateu em pochi até ele morrer.',
  },
  {
    id: "story6",
    source: require("../../../assets/img/o-bom-e-o-mau-velhinho-06.jpg"),
    text: 'O bom velhinho preocupado foi a casa do mau velhinho para pegar pochi de volta "Aquele cachorro ruim não está mais aqui, ele morreu depois que bati nele por ter me mordido", sem escolha o bom velhinho foi até o túmulo de pochi para rezar.',
  },
  {
    id: "story7",
    source: require("../../../assets/img/o-bom-e-o-mau-velhinho-07.jpg"),
    text: "De repente uma árvore nasceu a partir do túmulo de pochi e se tornou grande rapidamente. O bom velhino a cortou e com ela fez um usu, nesse usu ele fez mochi, de onde saiu uma grande quantidade de dinheiro.",
  },
  {
    id: "story8",
    source: require("../../../assets/img/o-bom-e-o-mau-velhinho-08.jpg"),
    text: "O velhinho do lado quando soube disso, pediu novamente que o bom velhinho emprestasse o usu, mas do mochi dele novamente sairam apenas pedaços de tigelas e vasos. Com raiva queimou o usu.",
  },
  {
    id: "story9",
    source: require("../../../assets/img/o-bom-e-o-mau-velhinho-09.jpg"),
    text: 'O bom velhinho foi pegar o seu usu de volta quando "Hum!, queimei aquele usu inútil", disse o mau velhinho. O bom velhinho sem escolha pegou as cinzas do usu queimado e foi embora.',
  },
  {
    id: "story10",
    source: require("../../../assets/img/o-bom-e-o-mau-velhinho-10.jpg"),
    text: 'Um tempo depois, o bom velhinho subiu até o topo de uma cerejeira e exclamou enquanto jogava as cinzas do usu "Que floresçam as árvores mortas! Que floresçam as árvores mortas!" Magicamente as árvores que estavam mortas até então floresceram de uma só vez. Um homem rico que passava se alegrou vendo o que havia acontecido e ofereceu muitas riquezas ao bom velhino.',
  },
  {
    id: "story11",
    source: require("../../../assets/img/o-bom-e-o-mau-velhinho-11.jpg"),
    text: 'Vendo isso, o mau velhinho pegou o resto das cinzas, subiu na árvore e enquanto o homem rico estava fascinado exclamou lançando as cinzas do usu "Tenho raiva de flores, sake e peixe!" Nem ao menos uma árvore floresceu, e as cinzas entraram nos olhos do homem rico que zangado pegou o mau velhinho e o levou preso.',
  },
];

export const StoriesPage: React.FunctionComponent = () => {
  return (
    <>
      <ContainerStyle>
        <Swiper loop={false} showsPagination={false}>
          {stories.map((story) => (
            <ScrollView key={story.id}>
              <StoryContainer>
                <ImageStyle source={story.source} />
                <TextContainerStorie>
                  <TextStyleStorie>{story.text}</TextStyleStorie>
                </TextContainerStorie>
              </StoryContainer>
            </ScrollView>
          ))}
        </Swiper>
      </ContainerStyle>
    </>
  );
};

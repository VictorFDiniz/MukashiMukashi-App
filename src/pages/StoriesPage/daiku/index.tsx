import React from "react";
import { ScrollView } from "react-native";
import Swiper from "react-native-swiper";
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
    source: require("../../../assets/img/o-carpinteiro-e-o-demonio-01.jpg"),
    text: "Há muito tempo atrás existiu uma aldeia onde fluía um rio, ele fluía fazendo um barulho estrondoso. Para as pessoas da aldeia era sempre uma luta para atravessá-lo.",
  },
  {
    id: "story2",
    source: require("../../../assets/img/o-carpinteiro-e-o-demonio-02.jpg"),
    text: "Os aldeões tentaram diversas vezes construir uma ponte mas ela sempre era varrida pelo rio.",
  },
  {
    id: "story3",
    source: require("../../../assets/img/o-carpinteiro-e-o-demonio-03.jpg"),
    text: 'Então eles foram pedir a Hikone o melhor carpinteiro da aldeia para que construísse uma ponte. "Senhor Hikone, poderia de alguma forma construir uma ponte para o rio? Todos que tentaram falharam, só podemos contar com sua ajuda", disse um aldeão.',
  },
  {
    id: "story4",
    source: require("../../../assets/img/o-carpinteiro-e-o-demonio-04.jpg"),
    text: 'Hikone decidiu ir até o rio para pensar. "Que correnteza incrível, construir uma ponte em uma correnteza tão forte assim não vai ser fácil. Mesmo assim, se de alguma forma eu não tiver uma boa ideia as pessoas da aldeia vão ser pegas pelo rio.',
  },
  {
    id: "story5",
    source: require("../../../assets/img/o-carpinteiro-e-o-demonio-05.jpg"),
    text: 'Hikone estava pensando em alguma forma de construir a ponte quando de repente de dentro do rio algo surgiu "HAA, um demônio!!", Hikone se assustou e tentou fugir.',
  },
  {
    id: "story6",
    source: require("../../../assets/img/o-carpinteiro-e-o-demonio-06.jpg"),
    text: '"Ei, não fuja! A proposito o que estava murmurando enquanto olhava para o rio? Mesmo estando assustado Hikone respondeu "Bem... eu estava me perguntando como poderia construir uma ponte para esse rio mas não fui capaz de pensar em nada". "Construir uma ponte? Isso é impossível. Apenas eu posso construir mas não posso fazer isso para humanos", retrucou o demônio.',
  },
  {
    id: "story7",
    source: require("../../../assets/img/o-carpinteiro-e-o-demonio-07.jpg"),
    text: '"Mas se não houver ponte as pessoas da vila vão ter problemas, você não poderia ajudar de alguma forma?", Pediu Hikone. "Posso construir, mas em troca pode me dar seus dois olhos?"',
  },
  {
    id: "story8",
    source: require("../../../assets/img/o-carpinteiro-e-o-demonio-08.jpg"),
    text: '"Não, seria um problema, ficaria sem enxergar nada." "Então, adivinhe meu nome. Se acertar não vai precisar me dar seus olhos. Venha aqui novamente daqui três dias, se conseguir acertar vou construir a ponte." Logo após dizer isso o demônio desapareceu no rio.',
  },
  {
    id: "story9",
    source: require("../../../assets/img/o-carpinteiro-e-o-demonio-09.jpg"),
    text: 'Hikone voltou para casa para pensar. "Qual será o nome do demônio? Oniyoshi, Onijo, Onihei? Hum... Não faço a mínima ideia." Hikone pensou durante os três dias mas por mais que pensasse não conseguia chegar em uma resposta. "Se continuar assim não vou ter escolha, para ajudar as pessoas da vila vou precisar dar em troca meus olhos para o demônio."',
  },
  {
    id: "story10",
    source: require("../../../assets/img/o-carpinteiro-e-o-demonio-10.jpg"),
    text: 'Nesse momento do lado de fora de sua casa Hikone ouviu crianças cantando "O demônio Onigoku gosta de olhos ♪♪ dos olhos do carpinteiro Hikone ♪♪" "Então é isso, Onigoku. Esse é o nome dele!"',
  },
  {
    id: "story11",
    source: require("../../../assets/img/o-carpinteiro-e-o-demonio-11.jpg"),
    text: 'Hikone foi para o rio, e de repente o demônio surgiu na sua frente "Ei, descobriu meu nome?" "É... onijo?" "Errado!" "Então, onihei?" "Errado!" "Então é onihachi." "Errado de novo, já foram três tentativas é melhor desistir. Não vai conseguir acertar, vamos me dê seus olhos."',
  },
  {
    id: "story12",
    source: require("../../../assets/img/o-carpinteiro-e-o-demonio-12.jpg"),
    text: 'Depois de dizer isso o demônio estendeu as mãos para Hikone que rapidamente disse gritando "Seu nome é Oniroku!!"',
  },
  {
    id: "story13",
    source: require("../../../assets/img/o-carpinteiro-e-o-demonio-13.jpg"),
    text: '"HAAA" Imediatamente após dizer o seu nome o demônio foi engolido pelo rio e desapareceu.',
  },
  {
    id: "story14",
    source: require("../../../assets/img/o-carpinteiro-e-o-demonio-14.jpg"),
    text: "Algum tempo depois de o demônio ter desaparecido uma bela ponte surgiu no rio, desta forma uma ponte foi construída e os aldeões se alegraram.",
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

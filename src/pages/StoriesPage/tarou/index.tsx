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
    source: require("../../../assets/img/urashima-taro-01.jpg"),
    text: "Há muito tempo, existiu um jovem pescador conhecido como Urashima Taro. Um dia, enquanto estava na praia, Taro viu algumas crianças maltratando uma tartaruga. Sentindo compaixão, ele disse: — É uma pena maltratarem essa pequena tartaruga. Vou dar esse peixe a vocês para que a deixem ir.",
  },
  {
    id: "story2",
    source: require("../../../assets/img/urashima-taro-02.jpg"),
    text: "Taro ajudou a tartaruga, oferecendo-lhes o peixe que havia pescado naquele dia. — Está tudo bem agora, voltem para o mar disse Taro, devolvendo a pequena tartaruga às águas.",
  },
  {
    id: "story3",
    source: require("../../../assets/img/urashima-taro-03.jpg"),
    text: "Alguns dias depois, Taro estava pescando em seu barco quando ouviu uma voz chamando-o: — Taro, Taro. Ao olhar, viu uma grande tartaruga ao lado de seu barco. — Eu sou a mãe da tartaruga que você ajudou. Em gratidão, vou levá-lo ao palácio do rei dragão. Por favor, suba em minhas costas, disse a tartaruga.",
  },
  {
    id: "story4",
    source: require("../../../assets/img/urashima-taro-04.jpg"),
    text: "Surpreso, Taro respondeu: — Vai me levar para um palácio!? Se é assim, vamos, só não posso demorar muito. — Taro subiu nas costas da tartaruga, que mergulhou mais e mais fundo no mar. Após algum tempo de mergulho, eles avistaram um grande palácio.",
  },
  {
    id: "story5",
    source: require("../../../assets/img/urashima-taro-05.jpg"),
    text: "Havia um portão vermelho decorado com peixes e uma linda princesa em pé, sozinha. — Senhor Taro, seja muito bem-vindo. Muito obrigada por ter salvo a tartaruga. Vamos, entre por favor — disse a princesa. Taro foi conduzido a um grande salão, onde uma festa começou. Diversos peixes, como baiacus, linguados e atuns, apresentaram-lhe uma dança espetacular.",
  },
  {
    id: "story6",
    source: require("../../../assets/img/urashima-taro-06.jpg"),
    text: "Assim, Taro perdeu a noção do tempo se divertindo muito no palácio do rei dragão. Mas um dia, ele sonhou com sua casa e sua mãe lavando roupa. Esse sonho despertou em Taro uma saudade profunda de seu lar.",
  },
  {
    id: "story7",
    source: require("../../../assets/img/urashima-taro-07.jpg"),
    text: "Ele foi até a princesa e disse: — Já faz sete dias que estou no palácio e logo retornarei para casa. Muito obrigado pelo tempo que passei aqui. A princesa respondeu: — Eu queria que ficasse aqui para sempre, mas como não há escolha, leve esta caixa com você e prometa não abri-la de jeito nenhum. Taro recebeu a caixa da princesa e subiu novamente nas costas da grande tartaruga para voltar para casa.",
  },
  {
    id: "story8",
    source: require("../../../assets/img/urashima-taro-08.jpg"),
    text: "Ao chegar na praia e olhar ao redor, sentiu que algo estava estranho. Aquela era sua aldeia, mas o caminho e as casas estavam diferentes do que ele se lembrava. Taro perguntou a um aldeão que passava: — Sabe onde é a casa de Urashima Taro? O aldeão respondeu: — Urashima Taro? Não conheço, mas já ouvi falar que há 100 anos um jovem com esse nome partiu para o mar e nunca mais voltou.",
  },
  {
    id: "story9",
    source: require("../../../assets/img/urashima-taro-09.jpg"),
    text: "— Tudo o que passei foram apenas sete dias no palácio do rei dragão, mas aqui se passaram cem anos. Taro ficou triste e sem saber o que fazer. Lembrou-se então da caixa que havia recebido, mas esqueceu-se do aviso da princesa e abriu-a. De repente, uma fumaça branca saiu da caixa, envolvendo Taro. Seu cabelo tornou-se branco como a neve, uma longa barba branca cresceu em seu rosto, suas costas se curvaram e ele se tornou um velho.",
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

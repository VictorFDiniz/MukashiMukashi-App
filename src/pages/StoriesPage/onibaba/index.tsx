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
    source: require("../../../assets/img/a-bruxa-e-o-monge-01.jpg"),
    text: 'Existiu um templo onde vivia um jovem monge, um dia seu mestre disse a ele para que fosse na próxima vila do outro lado da montanha "Na montanha existe uma bruxa que come pessoas por isso leve esses três ofuda com você. Se fizer um desejo eles irão realizá-lo".',
  },
  {
    id: "story2",
    source: require("../../../assets/img/a-bruxa-e-o-monge-02.jpg"),
    text: 'Enquanto o monge caminhava pelo caminho da montanha ele passou por uma velhinha que estava sentada ao lado do caminho "senhor monge, senhor monge. Poderia me ajudar? Eu estava voltando para casa mas meu pé começou a doer e não pude mais caminhar", disse a velhinha.',
  },
  {
    id: "story3",
    source: require("../../../assets/img/a-bruxa-e-o-monge-03.jpg"),
    text: 'O monge resolveu ajudar e puxou a mão da velhina. "Ali! Ali!", dizia ela mostrando o caminho para o monge. O caminho levava mais e mais para dentro da montanha.',
  },
  {
    id: "story4",
    source: require("../../../assets/img/a-bruxa-e-o-monge-04.jpg"),
    text: 'Dessa forma, finalmente chegaram em um casa na montanha "Obrigada. Mas logo vai anoitecer e o caminho a noite é perigoso, então fique aqui essa noite", disse a velhinha. O monge sem ter muita escolha, aceitou o convite.',
  },
  {
    id: "story5",
    source: require("../../../assets/img/a-bruxa-e-o-monge-05.jpg"),
    text: 'No meio da noite o monge acordou, foi quando escutou o som de algo sendo afiado. Quando espinhou o quarto ao lado por um buraco na parede, viu que a gentil velhinha havia se transformado em uma bruxa e estava afiando uma faca. "Com certeza, ela vai me comer", pensou ele.',
  },
  {
    id: "story6",
    source: require("../../../assets/img/a-bruxa-e-o-monge-06.jpg"),
    text: '"Vovó, vovó. Preciso ir ao banheiro", disse o monge chamando a velhinha. "Tudo bem, mas para não se perder vou amarrar essa corda em você", a bruxa pegou uma corda e amarrou na cintura do monge.',
  },
  {
    id: "story7",
    source: require("../../../assets/img/a-bruxa-e-o-monge-07.jpg"),
    text: 'Quando o monge chegou no banheiro, ele dessamarrou a corda da sua cintura e amarrou em um pilar junto com um dos ofuda que seu mestre havia dado "Por favor, para tudo que aquela bruxa disser responda, sim", e então o monge fugiu escondido.',
  },
  {
    id: "story8",
    source: require("../../../assets/img/a-bruxa-e-o-monge-08.jpg"),
    text: '"Ainda no banheiro, senhor monge?" Quando a bruxa chamou, o pilar respondeu "Sim!". "Ainda no banheiro, senhor monge??", e novamente o pilar respondeu "Sim!". Nesse tempo o monge já tinha conseguido fugir para longe.',
  },
  {
    id: "story9",
    source: require("../../../assets/img/a-bruxa-e-o-monge-09.jpg"),
    text: 'Até que finalmente a bruxa percebeu que o monge não estava no banheiro e começou a persegui-lo. Correndo rapidamente, logo a bruxa avistou o monge. Quando faltava apenas um pouco para as mãos da bruxa alcançarem o monge, ele soltou outro ofuda e disse "Por favor, faça um grande rio!"',
  },
  {
    id: "story10",
    source: require("../../../assets/img/a-bruxa-e-o-monge-10.jpg"),
    text: "De repente, diante dos olhos da bruxa um grande rio surgiu. A bruxa precisou atravessar o rio nadando, por conta disso o monge pôde novamente fugir para longe.",
  },
  {
    id: "story11",
    source: require("../../../assets/img/a-bruxa-e-o-monge-11.jpg"),
    text: 'Tendo atravessado o rio, a bruxa voltou a perseguir o monge. Quando as mãos da bruxa estavam perto de alcançar as costas do monge, ele soltou o último ofuda dizendo "Por favor, faça uma grande montanha de areia!" De repente, uma grande montanha de areia surgiu e a bruxa caiu deslizando sem conseguir persegui-lo.',
  },
  {
    id: "story12",
    source: require("../../../assets/img/a-bruxa-e-o-monge-12.jpg"),
    text: 'E então, o monge correu para o templo e disse para seu mestre "Mestre, mestre. A bruxa está atrás de mim!!" "Certo, se esconda no guarda-roupas!"',
  },
  {
    id: "story13",
    source: require("../../../assets/img/a-bruxa-e-o-monge-13.jpg"),
    text: 'Logo após o monge se esconder dentro do guarda-roupas, a bruxa pulou para dentro do templo "Olá, monge velho. Seu discípulo fugiu para cá, não foi?" "Não, ninguém fugiu para cá." "Mentiroso, se disser mais uma mentira você vai ser o primeiro que vou comer!"',
  },
  {
    id: "story14",
    source: require("../../../assets/img/a-bruxa-e-o-monge-14.jpg"),
    text: '"Tudo bem, então vamos fazer uma aposta, se eu perder não vou me importar em ser comido. Você consegue tomar a forma de um feijão? Aquela coisa tão pequena. Até para você é algo impossível, não é?" Dito isso, a bruxa respondeu "O quê, um feijão? Isso é muito fácil." Ela começou a girar no ar e rapidamente foi ficando cada vez menor até se transformar em um pequeno feijão.',
  },
  {
    id: "story15",
    source: require("../../../assets/img/a-bruxa-e-o-monge-15.jpg"),
    text: "Vendo isso o monge sem pensar duas vezes estendeu sua mão até o feijão, o colocou na boca e o comeu.",
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

import React from "react";
import { FlatList, Dimensions, TouchableOpacity } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { useNavigation } from "@react-navigation/native";
import { ContainerStyle, ImageContainer, ImageStyle } from "./styles";

interface ImageItem {
  id: string;
  source: any;
  storyPath: string;
}

interface ScreenNavigationProp {
  navigate: (screen: string, params?: any) => void;
}

const windowWidth = Dimensions.get("window").width;

export const Home: React.FunctionComponent = () => {
  const navigation = useNavigation<ScreenNavigationProp>();

  const images: ImageItem[] = [
    {
      id: "1",
      source: require("../../assets/img/urashima-taro.jpg"),
      storyPath: "TarouStoriesPage",
    },
    {
      id: "2",
      source: require("../../assets/img/o-carpinteiro-e-o-demonio.jpg"),
      storyPath: "DaikuStoriesPage",
    },
    {
      id: "3",
      source: require("../../assets/img/o-bom-e-o-mau-velhinho.jpg"),
      storyPath: "PochiStoriesPage",
    },
    {
      id: "4",
      source: require("../../assets/img/a-bruxa-e-o-monge.jpg"),
      storyPath: "OnibabaStoriesPage",
    },
  ];

  const renderImageItem = ({ item }: { item: ImageItem }) => (
    <TouchableOpacity onPress={() => handleImagePress(item.storyPath)}>
      <ImageContainer>
        <ImageStyle
          source={item.source}
          style={{ width: windowWidth / 2 - RFValue(24), resizeMode: "cover" }}
        />
      </ImageContainer>
    </TouchableOpacity>
  );

  const handleImagePress = (storyPath: string) => {
    const screenName = `${storyPath}`;
    navigation.navigate(screenName);
  };

  return (
    <>
      <ContainerStyle>
        <FlatList
          data={images}
          keyExtractor={(item) => item.id}
          renderItem={renderImageItem}
          numColumns={2}
        />
      </ContainerStyle>
    </>
  );
};

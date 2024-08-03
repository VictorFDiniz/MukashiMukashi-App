import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";
import { Dimensions } from "react-native";

const windowWidth = Dimensions.get("window").width;

export const ContainerStyle = styled.View`
  flex: 1;
  background-color: #eff1ed;
  padding-top: 5%;
`;

export const StoryContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const ImageStyle = styled.Image`
  height: ${RFValue(350)}px;
  width: ${windowWidth * 0.9}px;
`;

export const TextContainerStorie = styled.View`
  padding: ${RFValue(16)}px;
`;

export const TextStyleStorie = styled.Text`
  text-align: left;
  font-size: ${RFValue(22)}px;
  line-height: ${RFValue(28)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
`;

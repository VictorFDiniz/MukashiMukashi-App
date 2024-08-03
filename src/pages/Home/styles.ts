import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

export const ContainerStyle = styled.View`
  flex: 1;
  background-color: #eff1ed;
  align-items: center;
  padding-top: ${RFValue(16)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
`;

export const ImageContainer = styled.View`
  margin: ${RFValue(8)}px;
  border-radius: ${RFValue(16)}px;
  overflow: hidden;
`;

export const ImageStyle = styled.Image`
  height: ${RFValue(140)}px;
`;

import 'react-native-gesture-handler';

import React from 'react';
import {
  useFonts,
  ComicNeue_300Light,
  ComicNeue_300Light_Italic,
  ComicNeue_400Regular,
  ComicNeue_400Regular_Italic,
  ComicNeue_700Bold,
  ComicNeue_700Bold_Italic,
} from '@expo-google-fonts/comic-neue';
import {Routes} from './src/pages/Routes';
import {NavigationContainer} from '@react-navigation/native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import { ThemeProvider } from 'styled-components';
import theme from './context/global/styles/theme';
import { ActivityIndicator } from 'react-native';

const App: React.FunctionComponent = () => {

  const [fontsLoaded] = useFonts({
    ComicNeue_300Light,
    ComicNeue_300Light_Italic,
    ComicNeue_400Regular,
    ComicNeue_400Regular_Italic,
    ComicNeue_700Bold,
    ComicNeue_700Bold_Italic,
  });

  if (!fontsLoaded) {
    return <ActivityIndicator />;
  }

  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <NavigationContainer>
        <ThemeProvider theme={theme}>
          <Routes />
        </ThemeProvider>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
};

export default App;

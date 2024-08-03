import React from "react";
import { Home } from "../Home";
import { NavigationBar } from "./drawer.routes";

import { StoriesPage as TarouStoriesPage } from "../StoriesPage/tarou";
import { StoriesPage as PochiStoriesPage } from "../StoriesPage/pochi";
import { StoriesPage as OnibabaStoriesPage } from "../StoriesPage/onibaba";
import { StoriesPage as DaikuStoriesPage } from "../StoriesPage/daiku";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export const PagesRoute: React.FunctionComponent = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }} >
      <Stack.Screen
        name="FirstPage"
        component={Home}
      />
      <Stack.Screen name="TarouStoriesPage" component={TarouStoriesPage} />
      <Stack.Screen name="PochiStoriesPage" component={PochiStoriesPage} />
      <Stack.Screen name="OnibabaStoriesPage" component={OnibabaStoriesPage} />
      <Stack.Screen name="DaikuStoriesPage" component={DaikuStoriesPage} />
    </Stack.Navigator>
  );
};

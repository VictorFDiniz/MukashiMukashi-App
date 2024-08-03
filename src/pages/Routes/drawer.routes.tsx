import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Article } from "../SideBarMenu/Article";
import { Feed } from "../SideBarMenu/Feed";
import { PagesRoute } from "./stack.routes";
import { CustomDrawer } from "../../../components/CustomDrawer";
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Home } from "../Home";

const Drawer = createDrawerNavigator();

export const NavigationBar: React.FunctionComponent = () => {
  return (
    <Drawer.Navigator drawerContent={props => <CustomDrawer {...props} />}>
      <Drawer.Screen name="Home" component={PagesRoute} options={{
          drawerIcon: ({color}) => (
            <Ionicons name="home" size={22} color={color} />
          ),
        }} />
      <Drawer.Screen name="Share" component={Feed} options={{
          drawerIcon: ({color}) => (
            <Ionicons name="share" size={22} color={color} />
          ),
        }} />
    </Drawer.Navigator>
  );
};

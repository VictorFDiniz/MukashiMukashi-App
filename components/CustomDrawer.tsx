import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import Ionicons from 'react-native-vector-icons/Ionicons';

export const CustomDrawer = (props: DrawerContentComponentProps) => {
  return (
    <View style={{flex: 1}}>
      <DrawerContentScrollView
        {...props}>
        <View style={{flex: 1, backgroundColor: '#fff', paddingTop: 10}}>
          <DrawerItemList {...props} />
        </View>
      </DrawerContentScrollView>
      <View style={{padding: 20, borderTopWidth: 1, borderTopColor: '#ccc'}}>
        <TouchableOpacity onPress={() => {}} style={{paddingVertical: 20}}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Ionicons name="settings" size={22} />
            <Text
              style={{
                fontSize: 15,
                fontFamily: 'Roboto-Medium',
                marginLeft: 5,
              }}>
              Settings
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

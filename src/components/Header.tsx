import React from "react";
import { StyleSheet, Text, View } from "react-native";
import colors from "../themes/colors";
import { globalStyles } from "../styles/globals";
import lod from 'lodash'


export default function Header() {
  const {header, title, user} = lod.merge({}, globalStyles, headerStyle)

  return (
    <View style={header}>
      <Text style={title}>Arcarius</Text>
      <View style={user}></View>
    </View>
  );
}

const headerStyle = StyleSheet.create({
  header: {
    backgroundColor: colors.bg800,
    padding: 16,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
    
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    color: colors.text, 
  },

  user: {
    width: 40,
    height: 40,
    borderWidth: 3,
    borderStyle: "solid",
    borderColor: colors.action,
    borderRadius: '50%',
  }
});


import React from "react";
import { View, Text, StyleSheet } from 'react-native';

export default function Footer() {
  return (
    <View style={footerStyles.footer}>
      <View style={footerStyles.container}>
        <View style={footerStyles.leftF}>
          <Text style={footerStyles.text}>Ajuda ao Cliente</Text>
        </View>
        <View style={footerStyles.centerF}>
          <Text style={footerStyles.text}>Instagram</Text>
        </View>
        <View style={footerStyles.rightF}>
          <Text style={footerStyles.text}>Comunidade</Text>
        </View>
      </View>
    </View>
  );
}

const footerStyles = StyleSheet.create({
  footer: {
    backgroundColor: '#294B29', // 
    paddingVertical: 50,
    marginBottom: 0,
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  leftF: {
    width: '33%',
    alignSelf: 'center',
    textAlign: 'left',
  },
  centerF: {
    width: '33%',
    alignSelf: 'center',
    textAlign: 'center',
  },
  rightF: {
    width: '33%',
    alignSelf: 'center',
    fontSize: 35,
    textAlign: 'center',
  },
  text: {
    color: '#FFF', // Cor do texto alterada para corresponder ao projeto
    fontWeight: '800',
  },
});

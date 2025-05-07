import { StyleSheet, View } from "react-native";
import NavegacaoInferior from "../components/NavegacaoInferior";
import { globalStyles } from "../styles/globals";
import Card from "../components/Card";

export default function Home() {
  return (
    <View style={globalStyles.container}>
      <View style={HomeStyle.cardsGroup}>
        <Card typeCard="saldo" />
        
      </View>

      <NavegacaoInferior />
    </View>
  );
}

const HomeStyle = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   backgroundColor: '#111',
  //   padding: 16,
  //   justifyContent: 'space-between',
  // },

  cardsGroup: {
    marginTop: 32,
  },
});

import React from "react";
import { View, Text, StyleSheet } from "react-native";
import colors from "../themes/colors";

type TypeCard = "saldo" | "entrada" | "saida";

interface CardProps {
  typeCard: TypeCard;
}

export default function Card({ typeCard }: CardProps) {
  const dados = getDadosCard(typeCard);

  return (
    <View style={CardStyles.card}>
      <Text style={CardStyles.title}>{dados?.title}</Text>
      <Text style={CardStyles.text}>R${dados?.value}</Text>
    </View>
  );
}

const CardStyles = StyleSheet.create({
  card: {
    backgroundColor: colors.bg800,
    borderRadius: 8,
    padding: 16,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: colors.bg700
  },
  title: {
    color: colors.text,
    fontSize: 20,
    fontWeight: 600
  },
  text: {
    color: colors.text,
    fontSize: 24,
  }
 
  
});

function getDadosCard(typeCard: TypeCard) {
  const tiposDados = [
    {
      type: "saldo",
      title: "Saldo",
      value: "150",
    },
    {
      type: "entrada",
      title: "Entrada",
      value: "150",
    },
    {
      type: "saida",
      title: "Saída",
      value: "50",
    },
  ];

  const dataType = tiposDados.find((data) => {
    if ((data.type = typeCard)) {
      return {
        title: data.title,
        value: data.value,
      };
    }

    return {};
  });

  return dataType;
}

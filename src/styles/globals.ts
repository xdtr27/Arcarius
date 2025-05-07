import { StyleSheet } from "react-native";
import colors from "../themes/colors";
import { fonts } from "../themes/fonts";







export const globalStyles = StyleSheet.create({
    container: {
        flex: 1,
        paddingInline: 24,
        backgroundColor: colors.bg900,
        color: colors.text,
    },
    text: {
        fontFamily: fonts.inter400,
    },
    title: {
        fontFamily: fonts.inter700,
    }
})
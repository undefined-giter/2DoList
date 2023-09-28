import { StyleSheet } from "react-native";

export const s = StyleSheet.create({
    btn: {
        position: 'absolute',
        bottom: 60,
        right: 20,
        width: 120,
        backgroundColor: 'blue',
        borderRadius: 10,
        paddingVertical: 10,
        alignItems: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,

        elevation: 10,
    },
    txt: {
        color: "#2f76e5",
        fontWeight: 'bold',
    }
})
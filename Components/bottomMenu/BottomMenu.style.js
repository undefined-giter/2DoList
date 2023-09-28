import { StyleSheet } from "react-native";

export const s = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        backgroundColor: 'blue',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,

        elevation: 10,
    },
    btn: {
        flex: 1,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
    }
})
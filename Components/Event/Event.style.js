import { StyleSheet } from "react-native";

export const s = StyleSheet.create({
    event: {
        elevation: 6,
        backgroundColor: '#eee',
        marginTop: 30,
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 5,
        padding: 10,
        marginHorizontal: 30,
    },
    highBar: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    name: {
        fontWeight: 'bold',
    },
    img: {
        marginBottom: -5,
        height: 15,
        width: 15,
    },
    lowBar: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    }
})
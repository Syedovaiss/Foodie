import { Dimensions, StyleSheet } from "react-native";

const { width } = Dimensions.get('window')
export const SplashStyle = StyleSheet.create({
    container: {
        flex: 1,
    },
    appLogo: {
        alignItems: 'center',
        flex: 1,
        marginTop: 200
    },
    bottomView: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        flexDirection: 'row',
        alignItems: 'flex-start'
    },
    splashBurger01: {
        marginLeft: -70,
        top: width * 0.2,
        zIndex: 1,
    },
    splashBurger02: {
        zIndex:2,
    }
});

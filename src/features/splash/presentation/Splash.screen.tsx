import {Image, View } from "react-native"
import { SplashStyle } from "./Splash.styles"
import AppLogo from "../../../assets/AppLogo"
import LinearGradient from "react-native-linear-gradient"

export const SplashScreen = () => {
    return (
        <LinearGradient colors={['#FF939B', '#EF2A39']}
            locations={[0, 0.3, 1]}
            style={SplashStyle.container}
        >
            <View style={SplashStyle.appLogo}>
                <AppLogo />

                <View style={SplashStyle.bottomView}>
                    <Image source={require('../../../assets/SplashBurger02.png')} style={SplashStyle.splashBurger02} />
                    <Image source={require('../../../assets/SplashBurger01.png')} style={SplashStyle.splashBurger01} />
                </View>
            </View>
        </LinearGradient>

    )
}
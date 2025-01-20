import { createStackNavigator } from "@react-navigation/stack";
import { SplashScreen } from "../features/splash/presentation/Splash.screen";

export const AppStack = createStackNavigator({
    screens:{
        "Splash": SplashScreen
    }
})
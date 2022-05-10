import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import {useEffect, useState} from "react";
import { useKeepAwake } from 'expo-keep-awake';

import HomeScreen from "./src/screens/HomeScreen";
import ComponentsScreen from "./src/screens/ComponentsScreen";
import ListScreen from "./src/screens/ListScreen";
import Imagescreen from "./src/screens/ImageScreen";
import CounterScreen from "./src/screens/CounterScreen";
import Namescreen from "./src/screens/NameScreen";
import ColorScreen from "./src/screens/ColorScreen";
import ColorAdjuster from "./src/screens/ColorAdjuster";

// import Expo Font module 
// import useFonts hook  
// import AppLoading helper 
//https://docs.expo.io/versions/latest/sdk/app-loading/
import AppLoading  from "expo-app-loading";
import * as Font from "expo-font";

//UI Kitten
import * as eva from '@eva-design/eva';
import { ApplicationProvider, Layout, Text } from '@ui-kitten/components';


//Native base
import { NativeBaseProvider, extendTheme } from 'native-base';


//magnus
import {  ThemeProvider } from 'react-native-magnus';



const theme = extendTheme({
  fontConfig: {
    Poppins: {
      100: {
        normal: 'Poppins_Regular',
        italic: 'Poppins_Regular',
      },
      200: {
        normal: 'Poppins_Regular',
        italic: 'Poppins_Regular',
      },
      300: {
        normal: 'Poppins_Regular',
        italic: 'Poppins_Regular',
      },
      400: {
        normal: 'Poppins_Regular',
        italic: 'Poppins_Regular',
      },
      500: {
        normal: 'Poppins_Medium',
      },
      600: {
        normal: 'Poppins_Medium',
        italic: 'Poppins_Medium',
      },
      // Add more variants
      //   700: {
      //     normal: 'Roboto-Bold',
      //   },
      //   800: {
      //     normal: 'Roboto-Bold',
      //     italic: 'Roboto-BoldItalic',
      //   },
      //   900: {
      //     normal: 'Roboto-Bold',
      //     italic: 'Roboto-BoldItalic',
      //   },
    },
  },

  // Make sure values below matches any of the keys in `fontConfig`
  fonts: {
    heading: 'Poppins',
    body: 'Poppins',
    mono: 'Poppins',
  },
});



const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Components: ComponentsScreen,
    List: ListScreen,
    Images: Imagescreen,
    Counter: CounterScreen,
    Name: Namescreen,
    Colors: ColorScreen,
    Adjustor: ColorAdjuster
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "App",
    },
  }
);
const RootApp = createAppContainer(navigator);

const App = () => {
  // the same as Font.loadAsync , the hook returns  true | error 
  const [isLoaded,setIsLoaded] = useState(false);
  useKeepAwake();
  const loadFonts = async()=>{
    try{
      let isLoad = await Font.loadAsync({
        // add as many fonts as you want here .... 
        Poppins_Regular: require("./assets/fonts/Poppins-Regular.ttf"),
        Poppins_Medium: require("./assets/fonts/Poppins-Medium.ttf"),
        Poppins_Bold: require("./assets/fonts/Poppins-Bold.ttf"),
      });
      setIsLoaded(true);
      console.log("success")
    }catch(e){
      console.log(e);
    }

  }

  useEffect(()=>{
    loadFonts();
  }, [])

  useEffect(()=>{
    console.log(isLoaded);
  })


  if (!isLoaded) {
      return <AppLoading />;
  }
  // from the custom App we return the component we assigned to RootApp.
  return( 
    <ThemeProvider>
    <NativeBaseProvider theme={theme}>
    {/* <ApplicationProvider {...eva} theme={eva.light}> */}
       <RootApp /> 
    {/* </ApplicationProvider> */}
    </NativeBaseProvider>
    </ThemeProvider>
  );

}

export default App;


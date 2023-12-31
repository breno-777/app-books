import { StatusBar } from "expo-status-bar";
import React from "react";
import Collections from "./src/screens/Collections";
import { NativeBaseProvider } from "native-base";
import { THEME } from "./src/styles/theme";

import {
  useFonts,
  Lato_400Regular,
  Lato_700Bold,
} from "@expo-google-fonts/lato";
import NavBar from "./src/components/NavBar";
import BookDetails from "./src/screens/Details";
import { Router } from "./src/routes";

export default function App() {
  let [fontsLoaded] = useFonts({
    Lato_400Regular,
    Lato_700Bold,
  });

  return (
    <NativeBaseProvider theme={THEME}>
      <StatusBar translucent style="dark" />
      {fontsLoaded ? <Router /> : console.log("Erro ao carregar Font")}
    </NativeBaseProvider>
  );
}

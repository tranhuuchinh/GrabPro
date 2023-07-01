import { useFonts } from "@expo-google-fonts/poppins";
import {
  Poppins_300Light,
  Poppins_400Regular,
  Poppins_600SemiBold,
  Poppins_500Medium,
  Poppins_700Bold,
} from "@expo-google-fonts/poppins";

export function useCustomFonts() {
  let [fontsLoaded] = useFonts({
    Poppins_300Light,
    Poppins_400Regular,
    Poppins_600SemiBold,
    Poppins_500Medium,
    Poppins_700Bold,
  });

  return fontsLoaded;
}

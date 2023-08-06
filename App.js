import {
  SafeAreaView,
  Switch,
  Text,
  View,
  StatusBar,
} from "react-native";
import { useColorScheme } from "nativewind";
import ProductsList from "./components/ProductsList";

export default function App () {
  const { colorScheme, toggleColorScheme } = useColorScheme();

  return (
    <SafeAreaView className="flex-1 items-center justify-center bg-gray-200 dark:bg-black">
      <StatusBar style={colorScheme === "dark" ? "light" : "dark"} />
      <View className={"flex-row w-full justify-between px-6 py-0"} style={{ paddingTop: StatusBar.currentHeight }}>
        <Text className="dark:text-white text-2xl font-bold">
          New collection
        </Text>
        <Switch value={colorScheme === "dark"} onChange={toggleColorScheme} />
      </View>
      <ProductsList />
    </SafeAreaView>
  );
}

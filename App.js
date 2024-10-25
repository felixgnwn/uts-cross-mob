import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Ionicons from "react-native-vector-icons/Ionicons";

import { TransactionProvider } from "./utils/TransactionContext";

// Import screens
import HomeScreen from "./screens/Home/HomeScreen";
import PulsaDataScreen from "./screens/Home/PulsaDataScreen";
import PulsaDataPackageScreen from "./screens/Home/PulsaDataPackageScreen";
import ListrikScreen from "./screens/Home/ListrikScreen";
import ListrikPackageScreen from "./screens/Home/ListrikPackageScreen";
import BPJSScreen from "./screens/Home/BPJSScreen";
import BPJSPackageScreen from "./screens/Home/BPJSPackageScreen";
import HistoryScreen from "./screens/HistoryScreen";
import ProfileScreen from "./screens/ProfileScreen";
import ConfirmationTransactionScreen from "./screens/ConfirmationTransactionScreen";
import PinPage from "./screens/PinPage";
import TransactionResult from "./screens/TransactionResult";
import TransactionDetailScreen from "./screens/TransactionDetailScreen";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function MainTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Beranda") {
            iconName = focused ? "home" : "home-outline";
          } else if (route.name === "Riwayat") {
            iconName = focused ? "time" : "time-outline";
          } else if (route.name === "Profil") {
            iconName = focused ? "person" : "person-outline";
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "#0000ff",
        tabBarInactiveTintColor: "gray",
      })}
    >
      <Tab.Screen
        name="Beranda"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Riwayat"
        component={HistoryScreen}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Profil"
        component={ProfileScreen}
        options={{ headerShown: false }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <TransactionProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Main"
            component={MainTabs}
            options={{ headerShown: false }}
          />

          {/* Transaction Screens */}
          <Stack.Screen
            name="PulsaData"
            component={PulsaDataScreen}
            options={{ title: "Pulsa / Data" }}
          />
          <Stack.Screen name="Listrik" component={ListrikScreen} />
          <Stack.Screen name="BPJS" component={BPJSScreen} />

          {/* Package Screens */}
          <Stack.Screen
            name="PulsaDataPackage"
            component={PulsaDataPackageScreen}
            options={{ title: "Harga Pulsa / Data" }}
          />
          <Stack.Screen
            name="ListrikPackage"
            component={ListrikPackageScreen}
            options={{ title: "Harga Listrik" }}
          />
          <Stack.Screen
            name="BPJSPackage"
            component={BPJSPackageScreen}
            options={{ title: "Harga BPJS" }}
          />

          <Stack.Screen
            name="ConfirmationTransaction"
            component={ConfirmationTransactionScreen}
            options={{ title: "Konfirmasi Transaksi" }}
          />
          <Stack.Screen
            name="PinPage"
            component={PinPage}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="TransactionResult"
            component={TransactionResult}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="TransactionDetail"
            component={TransactionDetailScreen}
            options={{ title: "Detail Transaksi" }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </TransactionProvider>
  );
}

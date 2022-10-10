import { createDrawerNavigator } from "@react-navigation/drawer";
import { Pressable } from "react-native";
import Layout from "../components/Layout";
import { Text, View } from "../components/Themed";
import OrderScreen from "./OrderScreen";

export default function ProfileScreen({navigation}) {
    return(
        <>
            <Layout />
            <Pressable onPress={() => navigation.push('Orders')}>
                <Text>Заказы</Text>
            </Pressable>
        </>
    )
}
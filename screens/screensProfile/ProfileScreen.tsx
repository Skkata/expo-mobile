import { createDrawerNavigator } from "@react-navigation/drawer";
import { Dimensions, Pressable, StyleSheet, ScrollView } from 'react-native';
import { Directions} from "react-native-gesture-handler";
import { Value } from "react-native-reanimated";
import Layout from "../../components/Layout";
import { Text, View } from "../../components/Themed";
import OrderScreen from "../OrderScreen";
import Chat_svg from "../assets/icons/chat.svg";
import Avatar_svg from "../assets/icons/Avatar.svg";
import Certificate_svg from "../assets/icons/sertificate.svg";
import Help_svg from "../assets/icons/help.svg";
import PromoCod_svg from "../assets/icons/promo_cod.svg";
import Store from "../assets/icons/store.svg";
import { SvgUri } from "react-native-svg";
import { NavigationContainerProps } from "@react-navigation/native";
import React from "react";

type PropsProfileMenu = {
    navigation:NavigationContainerProps
}
const ProfileMenu = ({navigation})=>{
    const  mas_menu = [
        {
            menu_caption: 'Ввести промокод',
            screen: 'Promocode'
        },
        {
            menu_caption: 'Сообщения',
            screen: 'Message'
        },
        {
            menu_caption: 'Мои заказы',
            screen: 'Orders'
        },
        {
            menu_caption: 'Сертификаты',
            screen: ''
        },
        {
            menu_caption: 'Истории',
            screen: 'History'
        },
        {
            menu_caption: 'Обратный связь',
            screen: ''
        },
        {
            menu_caption: 'О приложении',
            screen: 'Application'
        },
    ]
    
    return mas_menu.map((value,index) =>{
        return(
            
                <Pressable key={index} onPress={()=>{
                    navigation.navigate(mas_menu[index].screen)
                }} style={styles.button_menu}>
                        
                        <View style={styles.menu_img}/>
                        <View style={styles.menu_design}>
                            <Text style={styles.menu_header}>
                                {value.menu_caption}
                            </Text>

                        </View>
                        
                </Pressable>
            
        )
        
    }) 
}

export default function ProfileScreen({navigation}) {
    
    return(
        
            <>
                <Layout />
                <ScrollView style={styles.profile_scroll}>
                    <Pressable  style={styles.button_profil}>
                        
                        <View style={styles.profil_img}/>
                        <View style={styles.profil_design}>
                            <Text style={styles.profil_name_user}>
                                Юша Алтай
                            </Text>
                            <Text style={styles.profil_name}>
                                Профиль
                            </Text>
                        </View>
                    </Pressable>

                    <View style={styles.fons_menu}>
        {/* тут кнопка мой город */}
                        <Pressable style={styles.button_city}>
                            
                            <View style={styles.city_img}/>
                            <View style={styles.city_design}>
                                <Text style={styles.city_header}>
                                    Мой город
                                </Text>

                                <Text style={styles.city_description}>
                                    Абакан
                                </Text>
                            </View>
                            
                        </Pressable>
                        <View style={styles.menu_profile}>
                            <ProfileMenu 
                            navigation = {navigation}/>
                        </View>
                        

                        
                    </View>
                </ScrollView>
            </>
        
        
    )
}


const styles = StyleSheet.create({
    profile_scroll:{
        height: 1000
    },
    button_profil:{
        height: 110,
        width: Dimensions.get("window").width,
        display: "flex",
        flexDirection: "row",
        borderBottomColor: "black ",
        borderWidth:1 
    },
    profil_img:{
        width: "30%",
        backgroundColor: "blue"
    },
    profil_design:{
        display:"flex",
        flexDirection: "column",
        justifyContent:"center",
        width: "70%",
       
    },
    profil_name_user:{
        fontSize: 20,
        marginLeft:10
        
    },
    profil_name: {
        fontSize: 13,
        marginLeft: 10
    },
    

    //тут меню начинается 
    fons_menu:{
        height: Dimensions.get("window").height,
    },
    //* тут кнопка мой город *
    button_city:{
        display: "flex",
        flexDirection: "row",
        height: 80,
        width: Dimensions.get("window").width,
        
    },
    city_img:{
        width:"30%",
        backgroundColor: "blue"
    },
    city_design:{
        display: "flex",
        flexDirection: "column",
        justifyContent:"center",
        width: "70%"
        
    },
    city_header:{
        marginLeft: 10
    },
    city_description:{
        fontSize:11,
        marginLeft:10
    },
    
//тут начинается вв
    menu_profile:{
        height: 1000
    },
    button_menu:{
        display: "flex",
        flexDirection: "row",
        height: 59,
        width: Dimensions.get("window").width,
    },
    
    menu_img:{
        width:"30%",
        backgroundColor: "blue"
    },
    menu_design:{
        display: "flex",
        flexDirection: "column",
        justifyContent:"center",
        width: "70%"
        
    },
    menu_header:{
        marginLeft: 10
    },
    
})
//onPress={() => navigation.push('Orders')}
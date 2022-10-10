import {Dimensions, StyleSheet, TouchableOpacity} from 'react-native';
import { Text, View } from "./Themed";


export default function Header() {
    return(
        <View style={style.header}>
            <Text style={style.logotype}>TELIVERY</Text>
            {/* <TouchableOpacity 
                // onPress={() => navigation.push('Profile')}
            >
                <ProfileSVGIcon width={30} height={30}/>
            </TouchableOpacity> */}
        </View>
    )
};

const style = StyleSheet.create({
    header: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: Dimensions.get('window').width,
        height: 80,
        paddingTop: 25,
        paddingLeft: 10,
        paddingRight: 15,
        backgroundColor: '#fff'
    },
    logotype: {
        fontSize: 20,
        fontWeight: '600',
        letterSpacing: 3,
    }
})
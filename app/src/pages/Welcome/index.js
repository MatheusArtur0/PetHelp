import React from "react";
import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity
} from 'react-native';

import { StatusBar } from 'react-native';

import * as Animatable from 'react-native-animatable'

import {useNavigation} from '@react-navigation/native'

import i18n from "../../utils/i18n";
import { useTranslation } from "react-i18next";

export default function Welcome() {
    const navigation = useNavigation();
    const {t, i18n} = useTranslation();

    const changeLanguage = value => {
        i18n.changeLanguage(value)
    }

    return (
        <View style={styles.container}>

            <View style={styles.language}>
                <TouchableOpacity
                onPress={ () => changeLanguage('en') }
                style={[
                    styles.langButton, {
                        borderColor: 'FFFF',
                        borderRadius: 50,
                        width: '40%'
                    }
                ]}
                >
                    <Text style={styles.langText}>Inglês</Text>
                </TouchableOpacity>

                <TouchableOpacity
                onPress={ () => changeLanguage('pt') }
                style={[
                    styles.langButton, {
                        borderColor: 'FFFF',
                        borderRadius: 50,
                        width: '40%'
                    }
                ]}
                >
                    <Text style={styles.langText}>Português (Brasil)</Text>
                </TouchableOpacity>
            </View>

        
            <View style={styles.containerLogo}>
                <Animatable.Image
                    animation="flipInY"
                    source={require('../../assets/logo.png')}
                    style={{ width: '60%' }}
                    resizeMode="contain"
                />
            </View>

            <Animatable.View delay={800} animation="fadeInUp" style={styles.containerForm}>
                <Text style={styles.title}>{t('Na jornada da adoção, não apenas salvamos vidas, mas também encontramos nossa própria redenção. Adote um animal e escreva uma história de amor e compaixão que ecoará para sempre.')}</Text>
                <Text style={styles.text}>{t('Faça o login para começar essa nova história!')}</Text>

                <TouchableOpacity 
                style={styles.button}
                onPress={() => navigation.navigate('SignIn')}
                >
                    <Text style={styles.buttonText}>{t('Acessar')}</Text>
                </TouchableOpacity>
            </Animatable.View>


        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: '#294B29'
    },
    languages:{
        flexDirection: 'row',
        alignSelf:'center',

        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        top: StatusBar.currentHeight ? StatusBar.currentHeight + 18 : StatusBar.currentHeight + 58,
    },
    langButton:{
        borderWidth: 1,
        padding: 4,
        borderRadius: 4,
        marginRight: 4, 
        marginLeft: 4,
    },
    langText:{
        marginRight: 4,
        marginLeft: 4,
        color: '#FFF'
    },
    containerLogo:{
        flex: 2,
        backgroundColor: '#294B29',
        justifyContent: 'center',
        alignItems: 'center',
    },
    containerForm: {
        flex: 1, 
        backgroundColor: '#FFF',
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        paddingStart: '5%',
        paddingEnd: '5%'
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        marginTop: 28,
        marginBottom: 12,
        bottom: '0%'
    },
    text: {
        color: '#a1a1a1'
    },
    button: {
        position: 'absolute',
        backgroundColor: '#294B29',
        borderRadius: 50,
        paddingVertical: 8,
        width: '60%',
        alignSelf: 'center',
        bottom: '15%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonText: {
        fontSize: 18,
        color: '#FFF',
        fontWeight: 'bold'
    }
})
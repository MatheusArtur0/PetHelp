import React from "react";
import {View,
        Text, 
        StyleSheet,
        TextInput,
        TouchableOpacity,
        Image
        } from 'react-native';

import * as Animatable from 'react-native-animatable'

import {useNavigation} from '@react-navigation/native'

import i18n from "../../utils/i18n";
import { useTranslation } from "react-i18next";

export default function SignIn() {
    const navigation = useNavigation();
    const {t, i18n} = useTranslation();

    const changeLanguage = value => {
        i18n.changeLanguage(value)
    }

    return (
        <><View style={styles.containerLogo}>
            <Animatable.Image
                animation="flipInY"
                source={require('../../assets/logo.png')}
                style={{ width: '50%' }}
                resizeMode="center" />
        </View>
        
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

            <Animatable.View animation="fadeInLeft" delay={500} style={styles.containerHeader}>
                <Text style={styles.message}> {t('Bem-vindo')} (a) </Text>
            </Animatable.View>

            <Animatable.View animation="fadeInUp" style={styles.containerForm}>
                <Text style={styles.title}>{t('Email')}</Text>
                <TextInput
                    placeholder={t('Digite um email...')}
                    style={styles.input} />

                    <Text style={styles.title}>{t('Senha')}</Text>
                    <TextInput
                        placeholder={t('Sua senha')}
                        style={styles.input} />

                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>{t('Acessar')}</Text>
                    </TouchableOpacity>

                    <TouchableOpacity 
                    style={styles.buttonRegister}
                    onPress={() => navigation.navigate('Register')}
                    >
                        <Text style={styles.registerText}>{t('Não possui uma conta? Cadastre-se')}</Text>
                    </TouchableOpacity>

                </Animatable.View>

            </View></>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: '#294B29'
    },
    containerLogo:{
        flex:0.5,
        backgroundColor: '#294B29',
        justifyContent:'center',
        alignItems: 'center',
    },
    containerHeader:{
        marginTop: '14%',
        marginBottom: '8%',
        paddingStart: '5%',
    },
    message:{
        fontSize: 28,
        fontWeight: 'bold',
        color:'#FFF'
    },
    containerForm:{
        backgroundColor: '#FFF',
        flex:1,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        paddingStart: '5%',
        paddingEnd: '5%'
    },
    title:{
        fontSize: 20,
        marginTop: 28,
    },
    input:{
        borderBottomWidth: 1,
        height: 40,
        marginBottom: 12,
        fontSize: 16,
    },
    button:{
        backgroundColor: '#294B29',
        width: '100%',
        borderRadius: 4,
        paddingVertical: 8,
        marginTop: 14,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonText:{
        color: '#FFF',
        fontSize: 18,
        fontWeight: 'bold'
    },
    buttonRegister:{
        marginTop: 14,
        alignSelf: 'center',
    },
    registerText:{
        color: '#a1a1a1'
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
    }
})
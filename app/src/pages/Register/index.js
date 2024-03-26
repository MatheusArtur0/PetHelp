import React, { useTransition } from "react";
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

export default function Register() {w
    const navigation = useNavigation();
    const {t, i18n} = useTranslation();

    return (
        <><View style={styles.containerLogo}>
            <Animatable.Image
                animation="flipInY"
                source={require('../../assets/logo.png')}
                style={{ width: '50%' }}
                resizeMode="center" />
        </View>
        
        <View style={styles.container}>
            <Animatable.View animation="fadeInLeft" delay={500} style={styles.containerHeader}>
                <Text style={styles.message}> {t('Cadastre-se')} </Text>
            </Animatable.View>

            <Animatable.View animation="fadeInUp" style={styles.containerForm}>
                <Text style={styles.title}>{t('Email de acesso')}</Text>
                    <TextInput
                        placeholder="Digite um email..."
                        style={styles.input} />

                <Text style={styles.title}>{t('Senha')}</Text>
                    <TextInput
                        placeholder="Sua senha"
                        style={styles.input} />

                <Text style={styles.title}>{t('Número para contato')}</Text>
                    <TextInput
                        placeholder="Ex: (55) 0 1234-5678"
                        style={styles.input} />

                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>{t('Cadastrar')}</Text>
                    </TouchableOpacity>

                    <TouchableOpacity 
                    style={styles.buttonRegister}
                    onPress={() => navigation.navigate('SignIn')}
                    >
                        <Text style={styles.registerText}>{t('Já possui uma conta? Acesse já!')}</Text>
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
    }
})
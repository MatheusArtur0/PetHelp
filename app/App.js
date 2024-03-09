import { StatusBar } from 'expo-status-bar';
import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.formTitle}>PET HELP</Text>
      <TextInput style={styles.formInput}
      placeholder = "Informe o E-mail"
      keyboardType = "E-mail address"
      autoCapitalize = "none"
      autoComplete = "E-mail"
      />
      <TextInput style={styles.formInput}/>
      <Pressable style={styles.formButton}>
        <Text style={styles.textButton}>Entrar</Text>
      </Pressable>
      <View style={styles.subContainer}>
        <Pressable style={styles.subButton}>
          <Text style={styles.subTextButton}>Esqueci a senha</Text>
        </Pressable>
        <Pressable style={styles.subButton}>
          <Text style={styles.subTextButton}>Cadastrar</Text>
        </Pressable>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

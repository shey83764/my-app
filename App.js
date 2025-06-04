import React from 'react';
import {
  StyleSheet,
  Pressable,
  Text,
  View,
  Image,
  Button,
  Alert,
} from 'react-native';

// Importar imagen local
import icon from './assets/icon.png'; // Asegúrate de que esta ruta sea correcta

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>¡Bienvenido a mi App!</Text>

      {/* Imagen local */}
      <Image source={icon} style={styles.image} />

      <Pressable
        onPress={() => {}}
        style={({ pressed }) => [
          {
            backgroundColor: pressed ? 'rgb(210, 230, 255)' : 'white',
          },
          styles.wrapperCustom,
        ]}
      >
        {({ pressed }) => (
          <Text style={{ fontSize: pressed ? 35 : 16 }}>
            {pressed ? '¡Presionado!' : 'Presióname'}
          </Text>
        )}
      </Pressable>

      <Button
        title="Haz clic aquí"
        onPress={() => alert('Botón presionado')}
        color="#841584"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFBFA3',
    alignItems: 'left',
    justifyContent: 'center',
    padding: 20,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 40,
  },
  image: {
    width: 100,
    height: 100,
    marginBottom:20,
  },
  wrapperCustom: {
    padding: 40,
    borderRadius: 10,
    marginBottom: 50,
  },
});

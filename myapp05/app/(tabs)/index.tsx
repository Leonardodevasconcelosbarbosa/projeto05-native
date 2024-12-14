import React from 'react';
import { View, Text, ImageBackground, StyleSheet } from 'react-native';

export default function WelcomeScreen() {
  return (
    
    <ImageBackground 
      source={{ uri: 'https://tse1.mm.bing.net/th?id=OIP.n2u4DPDnRseUDU3dOBx_hAHaLF&pid=Api&P=0&h=500' }} 
      style={styles.backgroundImage}
    >
    <View style={styles.overlay}>
        <Text style={styles.welcomeText}>Bem-vindo ao App!</Text>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
    
    
    
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)', 
    padding: 20,
    borderRadius: 10,
  },
  welcomeText: {
    fontSize: 24,
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

import React from 'react';
import { StatusBar } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import AppNavigator from './navigation/AppNavigator'; // Importa tu AppNavigator que maneja las pantallas
import { AuthProvider } from './context/AuthContext'; // Importa el contexto de autenticación

// Si decides usar fuentes personalizadas, descomenta este bloque
/*
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';

const [fontsLoaded] = useFonts({ 
  'Poppins-Regular': require('./assets/fonts/Poppins-Regular.ttf'),
  'Poppins-Bold': require('./assets/fonts/Poppins-Bold.ttf'),
  // Añade otras fuentes si es necesario
});

if (!fontsLoaded) {
  return <AppLoading />;
}
*/

export default function App() {
  return (
    <SafeAreaProvider>
      {/* Configuración de la barra de estado */}
      <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />
      
      {/* Proveedor de autenticación para gestionar el estado global del usuario */}
      <AuthProvider>
        {/* El contenedor de navegación */}
        <AppNavigator />
      </AuthProvider>
    </SafeAreaProvider>
  );
}

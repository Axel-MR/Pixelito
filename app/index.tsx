import React, { useRef, useEffect } from 'react';
import { Animated, StyleSheet, TouchableOpacity, Image, ImageBackground, View } from 'react-native';
import { Link } from 'expo-router'; // Cambiamos useRouter por Link
import GifAnimation from '../components/GifAnimation';

const Index = () => {
  const scaleValue = useRef(new Animated.Value(1)).current;

  // Configuración de la animación
  useEffect(() => {
    const animation = Animated.loop(
      Animated.sequence([
        Animated.timing(scaleValue, {
          toValue: 1.2,
          duration: 200,
          useNativeDriver: true,
        }),
        Animated.timing(scaleValue, {
          toValue: 1,
          duration: 200,
          useNativeDriver: true,
        }),
      ])
    );

    animation.start(); // Iniciar la animación

    return () => animation.stop(); // Detener la animación al desmontar el componente
  }, []);

  return (
    <ImageBackground
      source={require('../assets/images/otras/LP_backgound.png')}
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.container}>
        {/* Logo de Pixelito */}
        <Image
          source={require('../assets/images/otras/pixelito_logo.png')}
          style={styles.logo}
          resizeMode="contain"
        />

        {/* Botón para crear avatar */}
        <Link href="/avatar" asChild>
          <TouchableOpacity style={styles.buttonContainer}>
            <Animated.View style={{ transform: [{ scale: scaleValue }] }}>
              <Image
                source={require('../assets/images/otras/crear_avatar.png')}
                style={styles.buttonImage}
                resizeMode="contain"
              />
            </Animated.View>
          </TouchableOpacity>
        </Link>

        {/* Botón de Apóyanos */}
        <Link href="/apoyanos" asChild>
          <TouchableOpacity style={styles.supportButton}>
            <Image
              source={require('../assets/images/otras/apoyanos.png')}
              style={styles.supportButtonImage}
              resizeMode="contain"
            />
          </TouchableOpacity>
        </Link>

        {/* Animación del GIF */}
        <GifAnimation loop={true} style={styles.gifsize} />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'transparent',
    paddingVertical: 15,
    paddingHorizontal: 0,
  },
  logo: {
    width: 250,
    height: 250,
    marginTop: 20,
  },
  buttonContainer: {
    marginTop: 20,
    alignItems: 'center',
    width: '100%',
  },
  buttonImage: {
    width: 400,
    height: 130,
  },
  supportButton: {
    marginTop: 35,
    alignItems: 'center',
    width: '100%',
  },
  supportButtonImage: {
    width: 300,
    height: 70,
  },
  gifsize: {
    marginTop: -30, // Ajusta el margen superior si es necesario
    width: 20, // Ancho deseado del GIF
    height: 20, // Alto deseado del GIF
    resizeMode: 'contain', // Asegura que el GIF se ajuste al tamaño sin distorsión
  },
});

export default Index;
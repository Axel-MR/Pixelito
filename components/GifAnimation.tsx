import React, { useState, useEffect } from 'react';
import { View, Image, StyleSheet, ImageSourcePropType, ImageBackground } from 'react-native';

interface GifAnimationProps {
  loop?: boolean;
}

const GifAnimation: React.FC<GifAnimationProps> = ({ loop = true }) => {
  const frames: ImageSourcePropType[] = [
    require('../assets/images/jardingif/jardin1.png'),
    require('../assets/images/jardingif/jardin2.png'),
    require('../assets/images/jardingif/jardin3.png'),
    require('../assets/images/jardingif/jardin4.png'),
    require('../assets/images/jardingif/jardin5.png'),
    require('../assets/images/jardingif/jardin6.png'),
    require('../assets/images/jardingif/jardin7.png'),
    require('../assets/images/jardingif/jardin8.png'),
    require('../assets/images/jardingif/jardin9.png'),
    require('../assets/images/jardingif/jardin10.png'),
    require('../assets/images/jardingif/jardin11.png'),
    require('../assets/images/jardingif/jardin12.png'),
    require('../assets/images/jardingif/jardin13.png'),
    require('../assets/images/jardingif/jardin14.png'),
    require('../assets/images/jardingif/jardin15.png'),
    require('../assets/images/jardingif/jardin16.png'),
    require('../assets/images/jardingif/jardin17.png'),
    require('../assets/images/jardingif/jardin18.png'),
    require('../assets/images/jardingif/jardin19.png'),
    require('../assets/images/jardingif/jardin20.png'),
    require('../assets/images/jardingif/jardin21.png'),
    require('../assets/images/jardingif/jardin22.png'),
    require('../assets/images/jardingif/jardin23.png'),
    require('../assets/images/jardingif/jardin24.png'),
    require('../assets/images/jardingif/jardin25.png'),
    require('../assets/images/jardingif/jardin26.png'),
    require('../assets/images/jardingif/jardin27.png'),
    require('../assets/images/jardingif/jardin28.png'),
  ];

  // Duración de los frames (ya reducida para mayor velocidad)
  const frameDurations: number[] = [
    262.5, 150, 150, 150, 50, 112.5, 150, 150, 150, 150, 150, 50,
    50, 56.25, 150, 150, 50, 150, 150, 150, 150, 150, 150, 150,
    50, 150, 150, 9000, // Último frame con duración reducida
  ];

  const [currentFrame, setCurrentFrame] = useState(0);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    
    const animate = () => {
      const currentDuration = frameDurations[currentFrame];
      
      timeoutId = setTimeout(() => {
        if (currentFrame === frames.length - 1) {
          // Si es el último frame, espera la duración completa antes de reiniciar
          if (loop) {
            setCurrentFrame(0);
          }
        } else {
          setCurrentFrame(currentFrame + 1);
        }
      }, currentDuration);
    };

    animate();

    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [currentFrame, loop]);

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../assets/images/otras/pergamino.png')}
        style={styles.pergamino}
        resizeMode="contain"
      >
        <View style={styles.gifContainer}>
          <Image
            source={frames[currentFrame]}
            style={styles.image}
            resizeMode="contain"
          />
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 300, // Tamaño intermedio: 300x300
    height: 300, // Tamaño intermedio: 300x300
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
  },
  pergamino: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  gifContainer: {
    width: '70%', // Ajustar el tamaño del contenedor del GIF
    height: '70%', // Ajustar el tamaño del contenedor del GIF
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
  },
});

export default GifAnimation;
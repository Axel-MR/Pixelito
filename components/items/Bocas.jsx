import React, { useState } from 'react';
import { TouchableOpacity, Image, View, StyleSheet, ScrollView, ImageBackground } from 'react-native';

const Bocas = ({ onSelect }) => {
  const [colorSeleccionado, setColorSeleccionado] = useState('base');
  const [imagenSeleccionada, setImagenSeleccionada] = useState(null);

  const imagenesPorColor = {
    base: [
      require('../../assets/images/Bocas/Boca_01.png'),
      require('../../assets/images/Bocas/Boca_02.png'),
      require('../../assets/images/Bocas/Boca_03.png'),
      require('../../assets/images/Bocas/Boca_04.png'),
      require('../../assets/images/Bocas/Boca_05.png'),
      require('../../assets/images/Bocas/Boca_06.png'),
      require('../../assets/images/Bocas/Boca_07.png'),
      require('../../assets/images/Bocas/Boca_08.png'),
      require('../../assets/images/Bocas/Boca_09.png'),
      require('../../assets/images/Bocas/Boca_10.png'),
      require('../../assets/images/Bocas/Boca_11.png'),
      require('../../assets/images/Bocas/Boca_12.png'),
      require('../../assets/images/Bocas/Boca_13.png'),
      require('../../assets/images/Bocas/Boca_14.png'),
      require('../../assets/images/Bocas/Boca_15.png'),
      require('../../assets/images/Bocas/Boca_16.png'),
    ],
    amarillo: [
      require('../../assets/images/Bocas/Boca__Amarillo_01.png'),
      require('../../assets/images/Bocas/Boca__Amarillo_02.png'),
      require('../../assets/images/Bocas/Boca__Amarillo_03.png'),
      require('../../assets/images/Bocas/Boca__Amarillo_04.png'),
      require('../../assets/images/Bocas/Boca__Amarillo_05.png'),
      require('../../assets/images/Bocas/Boca__Amarillo_06.png'),
      require('../../assets/images/Bocas/Boca__Amarillo_07.png'),
      require('../../assets/images/Bocas/Boca__Amarillo_08.png'),
      require('../../assets/images/Bocas/Boca__Amarillo_09.png'),
      require('../../assets/images/Bocas/Boca__Amarillo_10.png'),
      require('../../assets/images/Bocas/Boca__Amarillo_11.png'),
      require('../../assets/images/Bocas/Boca__Amarillo_12.png'),
      require('../../assets/images/Bocas/Boca__Amarillo_13.png'),
      require('../../assets/images/Bocas/Boca__Amarillo_14.png'),
      require('../../assets/images/Bocas/Boca__Amarillo_15.png'),
      require('../../assets/images/Bocas/Boca__Amarillo_16.png'),
    ],
    azul: [
      require('../../assets/images/Bocas/Boca__Azul_01.png'),
      require('../../assets/images/Bocas/Boca__Azul_02.png'),
      require('../../assets/images/Bocas/Boca__Azul_03.png'),
      require('../../assets/images/Bocas/Boca__Azul_04.png'),
      require('../../assets/images/Bocas/Boca__Azul_05.png'),
      require('../../assets/images/Bocas/Boca__Azul_06.png'),
      require('../../assets/images/Bocas/Boca__Azul_07.png'),
      require('../../assets/images/Bocas/Boca__Azul_08.png'),
      require('../../assets/images/Bocas/Boca__Azul_09.png'),
      require('../../assets/images/Bocas/Boca__Azul_10.png'),
      require('../../assets/images/Bocas/Boca__Azul_11.png'),
      require('../../assets/images/Bocas/Boca__Azul_12.png'),
      require('../../assets/images/Bocas/Boca__Azul_13.png'),
      require('../../assets/images/Bocas/Boca__Azul_14.png'),
      require('../../assets/images/Bocas/Boca__Azul_15.png'),
      require('../../assets/images/Bocas/Boca__Azul_16.png'),
    ],
    azul_claro: [
      require('../../assets/images/Bocas/Boca__Azul_Claro_01.png'),
      require('../../assets/images/Bocas/Boca__Azul_Claro_02.png'),
      require('../../assets/images/Bocas/Boca__Azul_Claro_03.png'),
      require('../../assets/images/Bocas/Boca__Azul_Claro_04.png'),
      require('../../assets/images/Bocas/Boca__Azul_Claro_05.png'),
      require('../../assets/images/Bocas/Boca__Azul_Claro_06.png'),
      require('../../assets/images/Bocas/Boca__Azul_Claro_07.png'),
      require('../../assets/images/Bocas/Boca__Azul_Claro_08.png'),
      require('../../assets/images/Bocas/Boca__Azul_Claro_09.png'),
      require('../../assets/images/Bocas/Boca__Azul_Claro_10.png'),
      require('../../assets/images/Bocas/Boca__Azul_Claro_11.png'),
      require('../../assets/images/Bocas/Boca__Azul_Claro_12.png'),
      require('../../assets/images/Bocas/Boca__Azul_Claro_13.png'),
      require('../../assets/images/Bocas/Boca__Azul_Claro_14.png'),
      require('../../assets/images/Bocas/Boca__Azul_Claro_15.png'),
      require('../../assets/images/Bocas/Boca__Azul_Claro_16.png'),
    ],
    morado: [
      require('../../assets/images/Bocas/Boca__Morada_01.png'),
      require('../../assets/images/Bocas/Boca__Morada_02.png'),
      require('../../assets/images/Bocas/Boca__Morada_03.png'),
      require('../../assets/images/Bocas/Boca__Morada_04.png'),
      require('../../assets/images/Bocas/Boca__Morada_05.png'),
      require('../../assets/images/Bocas/Boca__Morada_06.png'),
      require('../../assets/images/Bocas/Boca__Morada_07.png'),
      require('../../assets/images/Bocas/Boca__Morada_08.png'),
      require('../../assets/images/Bocas/Boca__Morada_09.png'),
      require('../../assets/images/Bocas/Boca__Morada_10.png'),
      require('../../assets/images/Bocas/Boca__Morada_11.png'),
      require('../../assets/images/Bocas/Boca__Morada_12.png'),
      require('../../assets/images/Bocas/Boca__Morada_13.png'),
      require('../../assets/images/Bocas/Boca__Morada_14.png'),
      require('../../assets/images/Bocas/Boca__Morada_15.png'),
      require('../../assets/images/Bocas/Boca__Morada_16.png'),
    ],
    rojo: [
      require('../../assets/images/Bocas/Boca__Roja_01.png'),
      require('../../assets/images/Bocas/Boca__Roja_02.png'),
      require('../../assets/images/Bocas/Boca__Roja_03.png'),
      require('../../assets/images/Bocas/Boca__Roja_04.png'),
      require('../../assets/images/Bocas/Boca__Roja_05.png'),
      require('../../assets/images/Bocas/Boca__Roja_06.png'),
      require('../../assets/images/Bocas/Boca__Roja_07.png'),
      require('../../assets/images/Bocas/Boca__Roja_08.png'),
      require('../../assets/images/Bocas/Boca__Roja_09.png'),
      require('../../assets/images/Bocas/Boca__Roja_10.png'),
      require('../../assets/images/Bocas/Boca__Roja_11.png'),
      require('../../assets/images/Bocas/Boca__Roja_12.png'),
      require('../../assets/images/Bocas/Boca__Roja_13.png'),
      require('../../assets/images/Bocas/Boca__Roja_14.png'),
      require('../../assets/images/Bocas/Boca__Roja_15.png'),
      require('../../assets/images/Bocas/Boca__Roja_16.png'),
    ],
    verde: [
      require('../../assets/images/Bocas/Boca__Verde_01.png'),
      require('../../assets/images/Bocas/Boca__Verde_02.png'),
      require('../../assets/images/Bocas/Boca__Verde_03.png'),
      require('../../assets/images/Bocas/Boca__Verde_04.png'),
      require('../../assets/images/Bocas/Boca__Verde_05.png'),
      require('../../assets/images/Bocas/Boca__Verde_06.png'),
      require('../../assets/images/Bocas/Boca__Verde_07.png'),
      require('../../assets/images/Bocas/Boca__Verde_08.png'),
      require('../../assets/images/Bocas/Boca__Verde_09.png'),
      require('../../assets/images/Bocas/Boca__Verde_10.png'),
      require('../../assets/images/Bocas/Boca__Verde_11.png'),
      require('../../assets/images/Bocas/Boca__Verde_12.png'),
      require('../../assets/images/Bocas/Boca__Verde_13.png'),
      require('../../assets/images/Bocas/Boca__Verde_14.png'),
      require('../../assets/images/Bocas/Boca__Verde_15.png'),
      require('../../assets/images/Bocas/Boca__Verde_16.png'),
    ],
    rosa: [
      require('../../assets/images/Bocas/Boca__Rosa_01.png'),
      require('../../assets/images/Bocas/Boca__Rosa_02.png'),
      require('../../assets/images/Bocas/Boca__Rosa_03.png'),
      require('../../assets/images/Bocas/Boca__Rosa_04.png'),
      require('../../assets/images/Bocas/Boca__Rosa_05.png'),
      require('../../assets/images/Bocas/Boca__Rosa_06.png'),
      require('../../assets/images/Bocas/Boca__Rosa_07.png'),
      require('../../assets/images/Bocas/Boca__Rosa_08.png'),
      require('../../assets/images/Bocas/Boca__Rosa_09.png'),
      require('../../assets/images/Bocas/Boca__Rosa_10.png'),
      require('../../assets/images/Bocas/Boca__Rosa_11.png'),
      require('../../assets/images/Bocas/Boca__Rosa_12.png'),
      require('../../assets/images/Bocas/Boca__Rosa_13.png'),
      require('../../assets/images/Bocas/Boca__Rosa_14.png'),
      require('../../assets/images/Bocas/Boca__Rosa_15.png'),
      require('../../assets/images/Bocas/Boca__Rosa_16.png'),
    ],
  };

  const handleColorChange = (color) => {
    setColorSeleccionado(color);
    setImagenSeleccionada(null);
  };

  const handleImagePress = (imagen) => {
    if (imagenSeleccionada === imagen) {
      setImagenSeleccionada(null);
      onSelect(null, 'Bocas');
    } else {
      setImagenSeleccionada(imagen);
      onSelect(imagen, 'Bocas');
    }
  };

  const ImageCard = ({ imagen }) => (
    <TouchableOpacity onPress={() => handleImagePress(imagen)}>
      <View style={styles.cardContainer}>
        <ImageBackground
          source={require('../../assets/images/otras/fondo_items.png')}
          style={styles.card}
          resizeMode="cover"
        >
          <Image source={imagen} style={styles.image} />
        </ImageBackground>
        {imagenSeleccionada === imagen && <View style={styles.selectionOverlay} />}
      </View>
    </TouchableOpacity>
  );

  const ColorButton = ({ color, activeColor, inactiveColor }) => (
    <TouchableOpacity
      style={[
        styles.circleButton,
        { borderColor: inactiveColor },
        colorSeleccionado === color && { backgroundColor: activeColor, borderColor: inactiveColor },
      ]}
      onPress={() => handleColorChange(color)}
    />
  );

  return (
    <ImageBackground 
      source={require('../../assets/images/otras/fondo_elementos.png')}
      style={styles.container}
    >
      <View style={styles.buttonsContainer}>
        <ColorButton color="base" activeColor="#de774e" inactiveColor="#c76d44" />
        <ColorButton color="amarillo" activeColor="#FFD700" inactiveColor="#DAA520" />
        <ColorButton color="azul" activeColor="#0000FF" inactiveColor="#000080" />
        <ColorButton color="azul_claro" activeColor="#87CEEB" inactiveColor="#4682B4" />
        <ColorButton color="morado" activeColor="#800080" inactiveColor="#4B0082" />
        <ColorButton color="rojo" activeColor="#FF0000" inactiveColor="#8B0000" />
        <ColorButton color="verde" activeColor="#008000" inactiveColor="#006400" />
        <ColorButton color="rosa" activeColor="#FF69B4" inactiveColor="#C71585" />
      </View>

      <View style={styles.safeContainer}>
        <ScrollView 
          style={styles.scrollContainer}
          contentContainerStyle={styles.imagesScrollContainer}
        >
          <View style={styles.imagesContainer}>
            {imagenesPorColor[colorSeleccionado]?.map((imagen, index) => (
              <ImageCard key={index} imagen={imagen} />
            ))}
          </View>
        </ScrollView>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  safeContainer: {
    paddingTop: 40, // Espacio para los botones de colores
    flex: 1,
  },
  buttonsContainer: {
    flexDirection: 'row',
    position: 'absolute',
    top: 10,
    right: 20,
    zIndex: 1,
    backgroundColor: 'transparent',
  },
  circleButton: {
    width: 24, // Reducido a 24px como en Pieles
    height: 24, // Reducido a 24px para mantener proporción
    borderRadius: 12, // La mitad del ancho/alto
    marginLeft: 5,
    borderWidth: 3,
    backgroundColor: 'transparent',
  },
  scrollContainer: {
    flex: 1,
    maxHeight: 300, // Mantiene la altura máxima
  },
  imagesScrollContainer: {
    paddingTop: 10,
    paddingBottom: 20,
  },
  imagesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    paddingTop: 0, // Eliminado el margen superior extra
  },
  cardContainer: {
    position: 'relative',
    width: 75,
    height: 75,
    margin: 5,
  },
  card: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    overflow: 'hidden',
  },
  image: {
    width: 75,
    height: 75,
    resizeMode: 'contain',
    transform: [{ scale: 2 }], // Mantenido el zoom original
  },
  selectionOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: '#d6e0e4',
    opacity: 0.5,
    borderRadius: 10,
    borderColor: '#6fc5d0',
    borderWidth: 2,
  },
});

export default Bocas;
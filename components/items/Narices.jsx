import React, { useState } from "react"
import { View, TouchableOpacity, Image, StyleSheet, ScrollView, ImageBackground } from "react-native"

const Narices = ({ onSelect }) => {
  const [colorSeleccionado, setColorSeleccionado] = useState("base")
  const [imagenSeleccionada, setImagenSeleccionada] = useState(null)

  const imagenesPorColor = {
    base: [
      require("../../assets/images/Narices/Nariz_01.png"),
      require("../../assets/images/Narices/Nariz_02.png"),
      require("../../assets/images/Narices/Nariz_03.png"),
      require("../../assets/images/Narices/Nariz_04.png"),
      require("../../assets/images/Narices/Nariz_05.png"),
      require("../../assets/images/Narices/Nariz_06.png"),
      require("../../assets/images/Narices/Nariz_07.png"),
      require("../../assets/images/Narices/Nariz_08.png"),
    ],
    izq: [
      require("../../assets/images/Narices/Nariz_izq_01.png"),
      require("../../assets/images/Narices/Nariz_izq_02.png"),
      require("../../assets/images/Narices/Nariz_izq_03.png"),
      require("../../assets/images/Narices/Nariz_izq_04.png"),
      require("../../assets/images/Narices/Nariz_izq_05.png"),
      require("../../assets/images/Narices/Nariz_izq_06.png"),
      require("../../assets/images/Narices/Nariz_izq_07.png"),
      require("../../assets/images/Narices/Nariz_izq_08.png"),
    ],
    der: [
      require("../../assets/images/Narices/Nariz_der_01.png"),
      require("../../assets/images/Narices/Nariz_der_02.png"),
      require("../../assets/images/Narices/Nariz_der_03.png"),
      require("../../assets/images/Narices/Nariz_der_04.png"),
      require("../../assets/images/Narices/Nariz_der_05.png"),
      require("../../assets/images/Narices/Nariz_der_06.png"),
      require("../../assets/images/Narices/Nariz_der_07.png"),
      require("../../assets/images/Narices/Nariz_der_08.png"),
    ],
    sep: [
      require("../../assets/images/Narices/Nariz_sep_01.png"),
      require("../../assets/images/Narices/Nariz_sep_02.png"),
      require("../../assets/images/Narices/Nariz_sep_03.png"),
      require("../../assets/images/Narices/Nariz_sep_04.png"),
      require("../../assets/images/Narices/Nariz_sep_05.png"),
      require("../../assets/images/Narices/Nariz_sep_06.png"),
      require("../../assets/images/Narices/Nariz_sep_07.png"),
      require("../../assets/images/Narices/Nariz_sep_08.png"),
    ],
    are: [
      require("../../assets/images/Narices/Nariz_are_01.png"),
      require("../../assets/images/Narices/Nariz_are_02.png"),
      require("../../assets/images/Narices/Nariz_are_03.png"),
      require("../../assets/images/Narices/Nariz_are_04.png"),
      require("../../assets/images/Narices/Nariz_are_05.png"),
      require("../../assets/images/Narices/Nariz_are_06.png"),
      require("../../assets/images/Narices/Nariz_are_07.png"),
      require("../../assets/images/Narices/Nariz_are_08.png"),
    ],
  }

  const handleColorChange = (color) => {
    setColorSeleccionado(color)
    setImagenSeleccionada(null)
  }

  const handleImagePress = (imagen) => {
    if (imagenSeleccionada === imagen) {
      setImagenSeleccionada(null)
      onSelect(null, "Narices")
    } else {
      setImagenSeleccionada(imagen)
      onSelect(imagen, "Narices")
    }
  }

  const ImageCard = ({ imagen }) => (
    <TouchableOpacity onPress={() => handleImagePress(imagen)}>
      <View style={styles.cardContainer}>
        <ImageBackground
          source={require("../../assets/images/otras/fondo_items.png")}
          style={styles.card}
          resizeMode="cover"
        >
          <Image source={imagen} style={styles.image} />
        </ImageBackground>
        {imagenSeleccionada === imagen && <View style={styles.selectionOverlay} />}
      </View>
    </TouchableOpacity>
  )

  const ColorButton = ({ color, activeColor, inactiveColor }) => (
    <TouchableOpacity
      style={[
        styles.circleButton,
        { borderColor: inactiveColor },
        colorSeleccionado === color && { backgroundColor: activeColor, borderColor: inactiveColor },
      ]}
      onPress={() => handleColorChange(color)}
    />
  )

  return (
    <ImageBackground source={require("../../assets/images/otras/fondo_elementos.png")} style={styles.container}>
      <View style={styles.buttonsContainer}>
        <ColorButton color="base" activeColor="#8e650e" inactiveColor="#795200" />
        <ColorButton color="izq" activeColor="#cac7c6" inactiveColor="#b3b3b3" />
        <ColorButton color="der" activeColor="#bcb4af" inactiveColor="#a49f9d" />
        <ColorButton color="sep" activeColor="#6d5d52" inactiveColor="#42342c" />
        <ColorButton color="are" activeColor="#746d68" inactiveColor="#151311" />
      </View>

      <View style={styles.safeContainer}>
        <ScrollView style={styles.scrollContainer} contentContainerStyle={styles.imagesScrollContainer}>
          <View style={styles.imagesContainer}>
            {imagenesPorColor[colorSeleccionado]?.map((imagen, index) => (
              <ImageCard key={index} imagen={imagen} />
            ))}
          </View>
        </ScrollView>
      </View>
    </ImageBackground>
  )
}

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

export default Narices
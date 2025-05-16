import React, { useState } from "react"
import { TouchableOpacity, Image, View, StyleSheet, ScrollView, ImageBackground } from "react-native"

const Ropas = ({ onSelect }) => {
  const [colorSeleccionado, setColorSeleccionado] = useState("color1")
  const [imagenSeleccionada, setImagenSeleccionada] = useState(null)

  const imagenesPorColor = {
    color1: [
      require("../../assets/images/Ropas/Ropa_Color_01_01.png"),
      require("../../assets/images/Ropas/Ropa_Color_01_02.png"),
      require("../../assets/images/Ropas/Ropa_Color_01_03.png"),
      require("../../assets/images/Ropas/Ropa_Color_01_04.png"),
      require("../../assets/images/Ropas/Ropa_Color_01_05.png"),
      require("../../assets/images/Ropas/Ropa_Color_01_06.png"),
      require("../../assets/images/Ropas/Ropa_Color_01_07.png"),
      require("../../assets/images/Ropas/Ropa_Color_01_08.png"),
      require("../../assets/images/Ropas/Ropa_Color_01_09.png"),
      require("../../assets/images/Ropas/Ropa_Color_01_10.png"),
      require("../../assets/images/Ropas/Ropa_Color_01_11.png"),
      require("../../assets/images/Ropas/Ropa_Color_01_12.png"),
      require("../../assets/images/Ropas/Ropa_Color_01_13.png"),
      require("../../assets/images/Ropas/Ropa_Color_01_14.png"),
      require("../../assets/images/Ropas/Ropa_Color_01_15.png"),
      require("../../assets/images/Ropas/Ropa_Color_01_16.png"),
    ],
    
    color2: [
      require("../../assets/images/Ropas/Ropa_Color_02_01.png"),
      require("../../assets/images/Ropas/Ropa_Color_02_02.png"),
      require("../../assets/images/Ropas/Ropa_Color_02_03.png"),
      require("../../assets/images/Ropas/Ropa_Color_02_04.png"),
      require("../../assets/images/Ropas/Ropa_Color_02_05.png"),
      require("../../assets/images/Ropas/Ropa_Color_02_06.png"),
      require("../../assets/images/Ropas/Ropa_Color_02_07.png"),
      require("../../assets/images/Ropas/Ropa_Color_02_08.png"),
      require("../../assets/images/Ropas/Ropa_Color_02_09.png"),
      require("../../assets/images/Ropas/Ropa_Color_02_10.png"),
      require("../../assets/images/Ropas/Ropa_Color_02_11.png"),
      require("../../assets/images/Ropas/Ropa_Color_02_12.png"),
      require("../../assets/images/Ropas/Ropa_Color_02_13.png"),
      require("../../assets/images/Ropas/Ropa_Color_02_14.png"),
      require("../../assets/images/Ropas/Ropa_Color_02_15.png"),
      require("../../assets/images/Ropas/Ropa_Color_02_16.png"),
    ],
    
    color3: [
      require("../../assets/images/Ropas/Ropa_Color_03_01.png"),
      require("../../assets/images/Ropas/Ropa_Color_03_02.png"),
      require("../../assets/images/Ropas/Ropa_Color_03_03.png"),
      require("../../assets/images/Ropas/Ropa_Color_03_04.png"),
      require("../../assets/images/Ropas/Ropa_Color_03_05.png"),
      require("../../assets/images/Ropas/Ropa_Color_03_06.png"),
      require("../../assets/images/Ropas/Ropa_Color_03_07.png"),
      require("../../assets/images/Ropas/Ropa_Color_03_08.png"),
      require("../../assets/images/Ropas/Ropa_Color_03_09.png"),
      require("../../assets/images/Ropas/Ropa_Color_03_10.png"),
      require("../../assets/images/Ropas/Ropa_Color_03_11.png"),
      require("../../assets/images/Ropas/Ropa_Color_03_12.png"),
      require("../../assets/images/Ropas/Ropa_Color_03_13.png"),
      require("../../assets/images/Ropas/Ropa_Color_03_14.png"),
      require("../../assets/images/Ropas/Ropa_Color_03_15.png"),
      require("../../assets/images/Ropas/Ropa_Color_03_16.png"),
    ],
    color4: [
      require("../../assets/images/Ropas/Ropa_Color_04_01.png"),
      require("../../assets/images/Ropas/Ropa_Color_04_02.png"),
      require("../../assets/images/Ropas/Ropa_Color_04_03.png"),
      require("../../assets/images/Ropas/Ropa_Color_04_04.png"),
      require("../../assets/images/Ropas/Ropa_Color_04_05.png"),
      require("../../assets/images/Ropas/Ropa_Color_04_06.png"),
      require("../../assets/images/Ropas/Ropa_Color_04_07.png"),
      require("../../assets/images/Ropas/Ropa_Color_04_08.png"),
      require("../../assets/images/Ropas/Ropa_Color_04_09.png"),
      require("../../assets/images/Ropas/Ropa_Color_04_10.png"),
      require("../../assets/images/Ropas/Ropa_Color_04_11.png"),
      require("../../assets/images/Ropas/Ropa_Color_04_12.png"),
      require("../../assets/images/Ropas/Ropa_Color_04_13.png"),
      require("../../assets/images/Ropas/Ropa_Color_04_14.png"),
      require("../../assets/images/Ropas/Ropa_Color_04_15.png"),
      require("../../assets/images/Ropas/Ropa_Color_04_16.png"),
    ],
    color5: [
      require("../../assets/images/Ropas/Ropa_Color_05_01.png"),
      require("../../assets/images/Ropas/Ropa_Color_05_02.png"),
      require("../../assets/images/Ropas/Ropa_Color_05_03.png"),
      require("../../assets/images/Ropas/Ropa_Color_05_04.png"),
      require("../../assets/images/Ropas/Ropa_Color_05_05.png"),
      require("../../assets/images/Ropas/Ropa_Color_05_06.png"),
      require("../../assets/images/Ropas/Ropa_Color_05_07.png"),
      require("../../assets/images/Ropas/Ropa_Color_05_08.png"),
      require("../../assets/images/Ropas/Ropa_Color_05_09.png"),
      require("../../assets/images/Ropas/Ropa_Color_05_10.png"),
      require("../../assets/images/Ropas/Ropa_Color_05_11.png"),
      require("../../assets/images/Ropas/Ropa_Color_05_12.png"),
      require("../../assets/images/Ropas/Ropa_Color_05_13.png"),
      require("../../assets/images/Ropas/Ropa_Color_05_14.png"),
      require("../../assets/images/Ropas/Ropa_Color_05_15.png"),
      require("../../assets/images/Ropas/Ropa_Color_05_16.png"),
    ],
    color6: [
      require("../../assets/images/Ropas/Ropa_Color_06_01.png"),
      require("../../assets/images/Ropas/Ropa_Color_06_02.png"),
      require("../../assets/images/Ropas/Ropa_Color_06_03.png"),
      require("../../assets/images/Ropas/Ropa_Color_06_04.png"),
      require("../../assets/images/Ropas/Ropa_Color_06_05.png"),
      require("../../assets/images/Ropas/Ropa_Color_06_06.png"),
      require("../../assets/images/Ropas/Ropa_Color_06_07.png"),
      require("../../assets/images/Ropas/Ropa_Color_06_08.png"),
      require("../../assets/images/Ropas/Ropa_Color_06_09.png"),
      require("../../assets/images/Ropas/Ropa_Color_06_10.png"),
      require("../../assets/images/Ropas/Ropa_Color_06_11.png"),
      require("../../assets/images/Ropas/Ropa_Color_06_12.png"),
      require("../../assets/images/Ropas/Ropa_Color_06_13.png"),
      require("../../assets/images/Ropas/Ropa_Color_06_14.png"),
      require("../../assets/images/Ropas/Ropa_Color_06_15.png"),
      require("../../assets/images/Ropas/Ropa_Color_06_16.png"),
      
    ],
  }

  const handleColorChange = (color) => {
    setColorSeleccionado(color)
    setImagenSeleccionada(null)
  }

  const handleImagePress = (imagen) => {
    if (imagenSeleccionada === imagen) {
      setImagenSeleccionada(null)
      onSelect(null, "Ropas")
    } else {
      setImagenSeleccionada(imagen)
      onSelect(imagen, "Ropas")
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
        <ColorButton color="color1" activeColor="#FFD700" inactiveColor="#B8860B" />
        <ColorButton color="color2" activeColor="#1E90FF" inactiveColor="#104E8B" />
        <ColorButton color="color3" activeColor="#32CD32" inactiveColor="#228B22" />
        <ColorButton color="color4" activeColor="#a14242" inactiveColor="#8e2f2f" />
        <ColorButton color="color5" activeColor="#9932CC" inactiveColor="#4B0082" />
        <ColorButton color="color6" activeColor="#e26eb5." inactiveColor="#d03f97" />
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
    paddingTop: 50,
    flex: 1,
  },
  buttonsContainer: {
    flexDirection: 'row',
    position: 'absolute',
    top: 10,
    right: 10,
    zIndex: 1,
  },
  circleButton: {
    width: 25,
    height: 25,
    borderRadius: 12.5,
    marginLeft: 5,
    borderWidth: 3,
    backgroundColor: 'transparent',
  },
  scrollContainer: {
    flex: 1,
    maxHeight: 300,
  },
  imagesScrollContainer: {
    paddingTop: 10,
    paddingBottom: 20,
  },
  imagesContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    marginTop: 20,
  },
  cardContainer: {
    position: "relative",
    width: 75,
    height: 75,
    margin: 5,
  },
  card: {
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    overflow: "hidden",
  },
  image: {
    width: 75,
    height: 75,
    resizeMode: "contain",
  },
  selectionOverlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "#d0e8f2",
    opacity: 0.5,
    borderRadius: 10,
    borderColor: "#007d7d",
    borderWidth: 2,
  },
})

export default Ropas


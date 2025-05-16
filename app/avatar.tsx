"use client"

import { useState, useRef, useEffect } from "react"
import {
  View,
  ScrollView,
  TouchableOpacity,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  Alert,
  Modal,
  ImageBackground,
  SafeAreaView,
  StatusBar,
} from "react-native"
import ViewShot from "react-native-view-shot"
import * as MediaLibrary from "expo-media-library"
import Pieles from "../components/items/Pieles"
import Bocas from "../components/items/Bocas"
import Bellos from "../components/items/Bellos"
import Ojos from "../components/items/Ojos"
import Cejas from "../components/items/Cejas"
import Narices from "../components/items/Narices"
import Mejillas from "../components/items/Mejillas"
import Manchas from "../components/items/Manchas"
import Ropas from "../components/items/Ropas"
import Cabellos from "../components/items/Cabellos"

// Importa las imágenes de fondo específicamente
import avatarFondoImage from "../assets/images/otras/avatar_fondo.png";
import previewFondoImage from "../assets/images/otras/preview_fondo.png";
import fondoCategoriaImage from "../assets/images/otras/fondo_categoria.png";
import iconGuardarImage from "../assets/images/icons/guardar.png";
import iconCancelarImage from "../assets/images/icons/cancelar.png";

// Importa los iconos de categorías estáticamente
import iconPiel from "../assets/images/icons/piel.png";
import iconBoca from "../assets/images/icons/boca.png";
import iconBellos from "../assets/images/icons/bellos.png";
import iconOjos from "../assets/images/icons/ojos.png";
import iconCejas from "../assets/images/icons/cejas.png";
import iconNariz from "../assets/images/icons/nariz.png";
import iconMejillas from "../assets/images/icons/mejillas.png";
import iconManchas from "../assets/images/icons/manchas.png";
import iconRopa from "../assets/images/icons/ropa.png";
import iconCabello from "../assets/images/icons/cabello.png";

// Import the ad modules conditionally to prevent errors if not available
let InterstitialAd, AdEventType, TestIds
try {
  ;({ InterstitialAd, AdEventType, TestIds } = require("react-native-google-mobile-ads"))
} catch (error) {
  console.warn("Google Mobile Ads module not available:", error.message)
}

const adUnitId = __DEV__ ? TestIds?.INTERSTITIAL || "test-id" : "ca-app-pub-9234222225080015/8242098892"

// Crear una instancia del anuncio intersticial solo si el módulo está disponible
const interstitialAd = InterstitialAd ? InterstitialAd.createForAdRequest(adUnitId) : null

const { width, height } = Dimensions.get("window")
// Reducir el tamaño del avatar para dejar más espacio para los elementos
const AVATAR_SIZE = Math.min(width, height) * 0.7

// Check if running in development mode
const __DEV__ = process.env.NODE_ENV === "development"

const Avatar = () => {
  const [selectedCategory, setSelectedCategory] = useState("Pieles")
  const [selectedImages, setSelectedImages] = useState({
    Pieles: null,
    Bocas: null,
    Bellos: [],
    Ojos: null,
    Cejas: null,
    Narices: null,
    Mejillas: [],
    Manchas: [],
    Ropas: null,
    Cabellos: null,
  })
  const [hairColor, setHairColor] = useState("negro")
  const [modalVisible, setModalVisible] = useState(false)
  const [capturedImage, setCapturedImage] = useState(null)
  const viewShotRef = useRef()
  const [adLoaded, setAdLoaded] = useState(false)

  // Cargar anuncio al iniciar el componente solo si el módulo está disponible
  useEffect(() => {
    if (!interstitialAd) return

    const unsubscribeLoaded = interstitialAd.addAdEventListener(AdEventType.LOADED, () => {
      setAdLoaded(true)
    })

    const unsubscribeClosed = interstitialAd.addAdEventListener(AdEventType.CLOSED, () => {
      // Cuando el anuncio se cierre, cargar otro para la próxima vez
      setAdLoaded(false)
      interstitialAd.load()
    })

    // Cargar el anuncio inicial
    interstitialAd.load()

    // Limpiar los listeners cuando se desmonte el componente
    return () => {
      unsubscribeLoaded && unsubscribeLoaded()
      unsubscribeClosed && unsubscribeClosed()
    }
  }, [])

  const handleImageSelect = (imageSrc, category) => {
    if (category === "Mejillas" || category === "Bellos" || category === "Manchas") {
      setSelectedImages((prevImages) => ({
        ...prevImages,
        [category]: imageSrc,
      }))
    } else {
      setSelectedImages((prevImages) => ({
        ...prevImages,
        [category]: imageSrc,
      }))
    }
  }

  const resetImages = () => {
    Alert.alert("Confirmar borrado", "¿Estás seguro que deseas comenzar nuevo?", [
      {
        text: "Cancelar",
        style: "cancel",
      },
      {
        text: "Borrar",
        onPress: () => {
          setSelectedImages({
            Pieles: null,
            Bocas: null,
            Bellos: [],
            Ojos: null,
            Cejas: null,
            Narices: null,
            Mejillas: [],
            Manchas: [],
            Ropas: null,
            Cabellos: null,
          })
          setSelectedCategory("Pieles")
        },
        style: "destructive",
      },
    ])
  }

  const renderCategoryImages = () => {
    switch (selectedCategory) {
      case "Pieles":
        return <Pieles onSelect={(imageSrc) => handleImageSelect(imageSrc, "Pieles")} />
      case "Bocas":
        return <Bocas onSelect={(imageSrc) => handleImageSelect(imageSrc, "Bocas")} />
      case "Bellos":
        return <Bellos onSelect={(imageSrc) => handleImageSelect(imageSrc, "Bellos")} />
      case "Ojos":
        return <Ojos onSelect={(imageSrc) => handleImageSelect(imageSrc, "Ojos")} />
      case "Cejas":
        return <Cejas onSelect={(imageSrc) => handleImageSelect(imageSrc, "Cejas")} />
      case "Narices":
        return <Narices onSelect={(imageSrc) => handleImageSelect(imageSrc, "Narices")} />
      case "Mejillas":
        return <Mejillas onSelect={(imageSrc) => handleImageSelect(imageSrc, "Mejillas")} />
      case "Manchas":
        return <Manchas onSelect={(imageSrc) => handleImageSelect(imageSrc, "Manchas")} />
      case "Ropas":
        return <Ropas onSelect={(imageSrc) => handleImageSelect(imageSrc, "Ropas")} />
      case "Cabellos":
        return (
          <Cabellos selectedCategory={hairColor} onSelect={(imageSrc) => handleImageSelect(imageSrc, "Cabellos")} />
        )
      default:
        return null
    }
  }

  const captureImage = async () => {
    try {
      const uri = await viewShotRef.current.capture({
        format: "jpg",
        quality: 1,
        result: "tmpfile",
        width: AVATAR_SIZE,
        height: AVATAR_SIZE,
      })
      setCapturedImage(uri)
      setModalVisible(true)
    } catch (error) {
      console.error("Error al capturar la imagen:", error)
      Alert.alert("Error", "No se pudo capturar la imagen. Por favor, inténtalo de nuevo.")
    }
  }

  const saveImage = async () => {
    try {
      const { status } = await MediaLibrary.requestPermissionsAsync()
      if (status !== "granted") {
        Alert.alert("Permiso denegado", "No se puede guardar el avatar sin los permisos necesarios.")
        return
      }

      await MediaLibrary.saveToLibraryAsync(capturedImage)

      // Cerrar el modal primero
      setModalVisible(false)

      // Mostrar el anuncio si está cargado y disponible
      if (adLoaded && interstitialAd) {
        interstitialAd.show()
      } else {
        // Si el anuncio no está cargado, intentar cargarlo de nuevo si está disponible
        if (interstitialAd) interstitialAd.load()
        // Mostrar mensaje de éxito de todos modos
        Alert.alert("Éxito", "La imagen se ha guardado en tu galería.")
      }
    } catch (error) {
      console.error("Error al guardar la imagen:", error)
      Alert.alert("Error", "No se pudo guardar la imagen. Por favor, inténtalo de nuevo.")
    }
  }

  // Usar las importaciones estáticas para los iconos
  const CATEGORIES = [
    { name: "Pieles", icon: iconPiel },
    { name: "Bocas", icon: iconBoca },
    { name: "Bellos", icon: iconBellos },
    { name: "Ojos", icon: iconOjos },
    { name: "Cejas", icon: iconCejas },
    { name: "Narices", icon: iconNariz },
    { name: "Mejillas", icon: iconMejillas },
    { name: "Manchas", icon: iconManchas },
    { name: "Ropas", icon: iconRopa },
    { name: "Cabellos", icon: iconCabello },
  ]

  const renderAvatarLayers = () => {
    const layerOrder = [
      "Pieles",
      "Manchas",
      "Mejillas",
      "Narices",
      "Ojos",
      "Cejas",
      "Bocas",
      "Bellos",
      "Ropas",
      "Cabellos",
    ]
    return layerOrder.map((category) => {
      const images = selectedImages[category]
      if (Array.isArray(images)) {
        return images.map((image, index) => (
          <Image
            key={`${category}-${index}`}
            source={image}
            style={[styles.previewImage, { zIndex: layerOrder.indexOf(category) + 1 }]}
          />
        ))
      } else if (images) {
        return (
          <Image
            key={category}
            source={images}
            style={[styles.previewImage, { zIndex: layerOrder.indexOf(category) + 1 }]}
          />
        )
      }
      return null
    })
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" />
      <ImageBackground source={avatarFondoImage} style={styles.backgroundImage}>
        <View style={styles.container}>
          {/* Avatar Preview - Reducido en tamaño */}
          <View style={styles.previewContainer}>
            <ViewShot ref={viewShotRef} options={{ format: "jpg", quality: 1 }} style={styles.avatarContainer}>
              <Image source={previewFondoImage} style={styles.previewBackground} />
              {renderAvatarLayers()}
            </ViewShot>
          </View>

          {/* Categorías - Reducido el margen */}
          <View style={styles.categoryContainer}>
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              style={styles.categoryScrollView}
              contentContainerStyle={{ paddingRight: 10 }}
            >
              {CATEGORIES.map((category) => (
                <TouchableOpacity
                  key={category.name}
                  style={[styles.categoryButton, selectedCategory === category.name && styles.selectedCategoryButton]}
                  onPress={() => setSelectedCategory(category.name)}
                >
                  <ImageBackground source={fondoCategoriaImage} resizeMode="cover" style={styles.categoryBackground}>
                    <Image source={category.icon} style={styles.categoryIcon} />
                  </ImageBackground>
                </TouchableOpacity>
              ))}
              <TouchableOpacity style={[styles.categoryButton, { marginLeft: 10 }]} onPress={captureImage}>
                <ImageBackground source={fondoCategoriaImage} resizeMode="cover" style={styles.categoryBackground}>
                  <Image source={iconGuardarImage} style={styles.categoryIcon} />
                </ImageBackground>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.categoryButton, { marginLeft: 10 }]} onPress={resetImages}>
                <ImageBackground source={fondoCategoriaImage} resizeMode="cover" style={styles.categoryBackground}>
                  <Image source={iconCancelarImage} style={styles.categoryIcon} />
                </ImageBackground>
              </TouchableOpacity>
            </ScrollView>
          </View>

          {/* Items Container - Aumentado en altura */}
          <View style={styles.itemsContainer}>
            <ScrollView style={styles.itemsScrollView}>{renderCategoryImages()}</ScrollView>
          </View>

          {/* Modal */}
          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => setModalVisible(false)}
          >
            <View style={styles.modalContainer}>
              <View style={styles.modalContent}>
                <Text style={styles.modalTitle}>Descargar Avatar</Text>
                {capturedImage && <Image source={{ uri: capturedImage }} style={styles.modalImage} />}
                <View style={styles.modalButtonContainer}>
                  <TouchableOpacity style={styles.modalButton} onPress={() => setModalVisible(false)}>
                    <Text style={styles.modalButtonText}>Cancelar</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.modalButton} onPress={saveImage}>
                    <Text style={styles.modalButtonText}>Guardar</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </Modal>
        </View>
      </ImageBackground>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
  container: {
    flex: 1,
    // Reducir el padding superior para subir todo
    paddingTop: 5,
  },
  previewContainer: {
    // Reducir la altura para dejar más espacio
    height: AVATAR_SIZE,
    justifyContent: "center",
    alignItems: "center",
    // Reducir el margen inferior
    marginBottom: 5,
  },
  avatarContainer: {
    width: AVATAR_SIZE,
    height: AVATAR_SIZE,
    justifyContent: "center",
    alignItems: "center",
    // Reducir el margen superior
    marginTop: 10,
  },
  previewBackground: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
  previewImage: {
    width: "100%",
    height: "100%",
    position: "absolute",
    resizeMode: "contain",
  },
  categoryContainer: {
    // Reducir el margen inferior
    marginBottom: 2,
  },
  categoryScrollView: {
    flexGrow: 0,
    // Reducir los márgenes
    marginBottom: 5,
    paddingHorizontal: 10,
    marginTop: 5,
  },
  categoryButton: {
    marginHorizontal: 5, // Reducir el margen horizontal
    borderRadius: 5,
    overflow: "hidden",
  },
  categoryBackground: {
    // Asegurar que el fondo tenga un tamaño adecuado
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  categoryIcon: {
    width: 40, // Reducir ligeramente el tamaño
    height: 40,
    resizeMode: "contain",
  },
  selectedCategoryButton: {
    borderWidth: 2,
    borderColor: "blue",
  },
  itemsContainer: {
    // Aumentar la altura para mostrar más elementos
    height: height * 0.75,
    marginHorizontal: 10,
    borderRadius: 15,
    overflow: "hidden",
    // Añadir un margen inferior para evitar que se corte
    marginBottom: 10,
  },
  itemsScrollView: {
    flex: 1,
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    backgroundColor: "white",
    borderRadius: 10,
    padding: 20,
    alignItems: "center",
    width: "80%",
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  modalImage: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  modalButtonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  modalButton: {
    backgroundColor: "blue",
    padding: 10,
    borderRadius: 5,
    margin: 5,
  },
  modalButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default Avatar
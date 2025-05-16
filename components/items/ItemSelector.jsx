import React, { useState } from 'react';
import { TouchableOpacity, Image, View, StyleSheet, ScrollView, ImageBackground, Text } from 'react-native';

// Imágenes de fondo
const fondoElementos = require('../../assets/images/otras/fondo_elementos.png');
const fondoItems = require('../../assets/images/otras/fondo_items.png');

const ItemSelector = ({ 
  categoria, 
  onSelect, 
  imageMap, 
  colorInicial = 'negro',
  escalaImagen = 1,
  coloresPersonalizados = null
}) => {
  const [colorSeleccionado, setColorSeleccionado] = useState(colorInicial);
  const [imagenSeleccionada, setImagenSeleccionada] = useState(null);

  // Definición de colores para los botones (por defecto)
  const COLORES = coloresPersonalizados || [
    { id: 'negro', activeColor: '#3b3436', inactiveColor: '#191717' },
    { id: 'rojo', activeColor: '#a92847', inactiveColor: '#950628' },
    { id: 'cafe', activeColor: '#c18300', inactiveColor: '#bc9440' },
    { id: 'marron', activeColor: '#5b3c11', inactiveColor: '#281802' },
    { id: 'naranja', activeColor: '#d36529', inactiveColor: '#c44500' },
    { id: 'blanco', activeColor: '#b8ceba', inactiveColor: '#657166' },
    { id: 'ambar', activeColor: '#e1ca8a', inactiveColor: '#c3a26a' },
    { id: 'azul', activeColor: '#28b9d8', inactiveColor: '#056b88' },
    { id: 'verde', activeColor: '#4b975a', inactiveColor: '#255e24' },
    { id: 'rosa', activeColor: '#d665ac', inactiveColor: '#8c1658' },
    { id: 'morrado', activeColor: '#7c41ae', inactiveColor: '#5e1a87' },
  ];

  const handleColorChange = (color) => {
    setColorSeleccionado(color);
    setImagenSeleccionada(null);
    onSelect && onSelect(null, categoria);
  };

  const handleImagePress = (imagen) => {
    // Si la imagen ya está seleccionada, la deseleccionamos
    if (imagenSeleccionada === imagen) {
      setImagenSeleccionada(null);
      onSelect && onSelect(null, categoria);
    } else {
      // Seleccionamos la nueva imagen
      setImagenSeleccionada(imagen);
      onSelect && onSelect([imagen], categoria); // Mantenemos el formato de array para compatibilidad
    }
  };

  const isSelected = (imagen) => imagenSeleccionada === imagen;

  const ImageCard = ({ imagen }) => (
    <TouchableOpacity onPress={() => handleImagePress(imagen)}>
      <View style={styles.cardContainer}>
        <ImageBackground
          source={fondoItems}
          style={[
            styles.card,
            isSelected(imagen) && styles.selectedCard
          ]}
          resizeMode="cover"
        >
          <Image source={imagen} style={[styles.image, { transform: [{ scale: escalaImagen }] }]} />
        </ImageBackground>
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

  // Obtener las imágenes para el color seleccionado
  const imagenesCargadas = imageMap[colorSeleccionado] || [];

  return (
    <ImageBackground 
      source={fondoElementos}
      style={styles.container}
    >
      {/* Botones de colores posicionados absolutamente en la parte superior derecha */}
      <View style={styles.buttonsContainer}>
        {COLORES.map(color => (
          <ColorButton 
            key={color.id}
            color={color.id} 
            activeColor={color.activeColor} 
            inactiveColor={color.inactiveColor} 
          />
        ))}
      </View>

      {/* Contenedor seguro con padding superior para evitar solapamiento con los botones */}
      <View style={styles.safeContainer}>
        <ScrollView 
          style={styles.scrollContainer}
          contentContainerStyle={styles.imagesScrollContainer}
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.imagesContainer}>
            {imagenesCargadas.length > 0 ? (
              imagenesCargadas.map((imagen, index) => (
                <ImageCard key={index} imagen={imagen} />
              ))
            ) : (
              <Text style={styles.noImagesText}>
                No hay imágenes disponibles para este color
              </Text>
            )}
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
    width: 24, // Tamaño reducido
    height: 24,
    borderRadius: 12,
    marginLeft: 5,
    borderWidth: 3,
    backgroundColor: 'transparent',
  },
  scrollContainer: {
    flex: 1,
    maxHeight: 300, // Limita la altura
  },
  imagesScrollContainer: {
    paddingTop: 10,
    paddingBottom: 20,
  },
  imagesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
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
  selectedCard: {
    borderWidth: 2,
    borderColor: '#00bcd4',
  },
  image: {
    width: 75,
    height: 75,
    resizeMode: 'contain',
  },
  noImagesText: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginTop: 20,
    width: '100%',
  }
});

export default ItemSelector;
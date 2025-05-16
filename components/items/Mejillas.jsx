import React, { useState } from 'react';
import { TouchableOpacity, Image, View, Text, StyleSheet, ScrollView, ImageBackground } from 'react-native';

const Mejillas = ({ onSelect }) => {
  const [selectedImages, setSelectedImages] = useState([]);

  const images = [
    { src: require('../../assets/images/Mejillas/Mejilla_01.png'), id: 'Mejilla_01' },
    { src: require('../../assets/images/Mejillas/Mejilla_02.png'), id: 'Mejilla_02' },
    { src: require('../../assets/images/Mejillas/Mejilla_03.png'), id: 'Mejilla_03' },
    { src: require('../../assets/images/Mejillas/Mejilla_04.png'), id: 'Mejilla_04' },
    { src: require('../../assets/images/Mejillas/Mejilla_05.png'), id: 'Mejilla_05' },
    { src: require('../../assets/images/Mejillas/Mejilla_06.png'), id: 'Mejilla_06' },
    { src: require('../../assets/images/Mejillas/Mejilla_07.png'), id: 'Mejilla_07' },
    { src: require('../../assets/images/Mejillas/Mejilla_08.png'), id: 'Mejilla_08' },
    { src: require('../../assets/images/Mejillas/Mejilla_09.png'), id: 'Mejilla_09' },
    { src: require('../../assets/images/Mejillas/Mejilla_10.png'), id: 'Mejilla_10' },
    { src: require('../../assets/images/Mejillas/Mejilla_11.png'), id: 'Mejilla_11' },
    { src: require('../../assets/images/Mejillas/Mejilla_12.png'), id: 'Mejilla_12' },
  ];

  const handleSelect = (image) => {
    let newSelectedImages = [...selectedImages];
    const imageIndex = newSelectedImages.findIndex(img => img.id === image.id);

    if (imageIndex !== -1) {
      newSelectedImages = newSelectedImages.filter(img => img.id !== image.id);
    } else {
      if (newSelectedImages.length >= 2) {
        newSelectedImages.shift();
      }
      newSelectedImages.push(image);
    }

    setSelectedImages(newSelectedImages);
    onSelect(newSelectedImages.map(img => img.src));
  };

  const getSelectionOrder = (imageId) => {
    const index = selectedImages.findIndex(img => img.id === imageId);
    return index + 1;
  };

  return (
    <ImageBackground 
      source={require('../../assets/images/otras/fondo_elementos.png')}
      style={styles.container}
    >
      <View style={styles.safeContainer}>
        <ScrollView 
          style={styles.scrollContainer}
          contentContainerStyle={styles.imagesScrollContainer}
        >
          <View style={styles.imagesContainer}>
            {images.map((image, index) => (
              <TouchableOpacity 
                key={image.id} 
                onPress={() => handleSelect(image)}
              >
                <View style={styles.cardContainer}>
                  <ImageBackground
                    source={require('../../assets/images/otras/fondo_items.png')}
                    style={[
                      styles.card,
                      getSelectionOrder(image.id) > 0 && styles.selectedCard,
                    ]}
                    resizeMode="cover"
                  >
                    <Image source={image.src} style={styles.categoryImage} />
                  </ImageBackground>
                  {getSelectionOrder(image.id) > 0 && (
                    <View style={styles.selectionBadge}>
                      <Text style={styles.selectionBadgeText}>
                        {getSelectionOrder(image.id)}
                      </Text>
                    </View>
                  )}
                </View>
              </TouchableOpacity>
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
    paddingTop: 50,
    flex: 1,
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
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginTop: 20,
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
    borderColor: '#00bcd4',
    borderWidth: 2,
  },
  categoryImage: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
    transform: [{ scale: 2 }],
  },
  selectionBadge: {
    position: 'absolute',
    top: -5,
    right: -5,
    backgroundColor: '#00bcd4',
    borderRadius: 10,
    width: 20,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1,
  },
  selectionBadgeText: {
    color: 'white',
    fontSize: 12,
    fontWeight: 'bold',
  },
});

export default Mejillas;

import React, { useState, useEffect } from 'react';
import { TouchableOpacity, Image, View, StyleSheet, ScrollView, ImageBackground } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const STORAGE_KEY = 'selectedSkinImage';

const Pieles = ({ onSelect }) => {
  const [tipoSeleccionado, setTipoSeleccionado] = useState('base');
  const [imagenSeleccionada, setImagenSeleccionada] = useState(null);
  const [cargando, setCargando] = useState(true);

  const imagenesPorTipo = {
    base: [
      require('../../assets/images/Pieles/Piel_01.png'),
      require('../../assets/images/Pieles/Piel_02.png'),
      require('../../assets/images/Pieles/Piel_03.png'),
      require('../../assets/images/Pieles/Piel_04.png'),
      require('../../assets/images/Pieles/Piel_05.png'),
      require('../../assets/images/Pieles/Piel_06.png'),
      require('../../assets/images/Pieles/Piel_07.png'),
      require('../../assets/images/Pieles/Piel_08.png'),
      require('../../assets/images/Pieles/Piel_09.png'),
      require('../../assets/images/Pieles/Piel_10.png'),
      require('../../assets/images/Pieles/Piel_11.png'),
      require('../../assets/images/Pieles/Piel_12.png'),
    ],
    vitiligo: [
      require('../../assets/images/Pieles/Piel_Vitiligo_01.png'),
      require('../../assets/images/Pieles/Piel_Vitiligo_02.png'),
      require('../../assets/images/Pieles/Piel_Vitiligo_03.png'),
      require('../../assets/images/Pieles/Piel_Vitiligo_04.png'),
      require('../../assets/images/Pieles/Piel_Vitiligo_05.png'),
      require('../../assets/images/Pieles/Piel_Vitiligo_06.png'),
      require('../../assets/images/Pieles/Piel_Vitiligo_07.png'),
      require('../../assets/images/Pieles/Piel_Vitiligo_08.png'),
      require('../../assets/images/Pieles/Piel_Vitiligo_09.png'),
      require('../../assets/images/Pieles/Piel_Vitiligo_10.png'),
      require('../../assets/images/Pieles/Piel_Vitiligo_11.png'),
      require('../../assets/images/Pieles/Piel_Vitiligo_12.png'),
    ],
    ficticio: [
      require('../../assets/images/Pieles/Piel_Fic_01.png'),
      require('../../assets/images/Pieles/Piel_Fic_02.png'),
      require('../../assets/images/Pieles/Piel_Fic_03.png'),
      require('../../assets/images/Pieles/Piel_Fic_04.png'),
      require('../../assets/images/Pieles/Piel_Fic_05.png'),
      require('../../assets/images/Pieles/Piel_Fic_06.png'),
      require('../../assets/images/Pieles/Piel_Fic_07.png'),
      require('../../assets/images/Pieles/Piel_Fic_08.png'),
      require('../../assets/images/Pieles/Piel_Fic_09.png'),
      require('../../assets/images/Pieles/Piel_Fic_10.png'),
      require('../../assets/images/Pieles/Piel_Fic_11.png'),
      require('../../assets/images/Pieles/Piel_Fic_12.png'),
    ],
    ficticioVit: [
      require('../../assets/images/Pieles/Piel_Fic_Vic_01.png'),
      require('../../assets/images/Pieles/Piel_Fic_Vic_02.png'),
      require('../../assets/images/Pieles/Piel_Fic_Vic_03.png'),
      require('../../assets/images/Pieles/Piel_Fic_Vic_04.png'),
      require('../../assets/images/Pieles/Piel_Fic_Vic_05.png'),
      require('../../assets/images/Pieles/Piel_Fic_Vic_06.png'),
      require('../../assets/images/Pieles/Piel_Fic_Vic_07.png'),
      require('../../assets/images/Pieles/Piel_Fic_Vic_08.png'),
      require('../../assets/images/Pieles/Piel_Fic_Vic_09.png'),
      require('../../assets/images/Pieles/Piel_Fic_Vic_10.png'),
      require('../../assets/images/Pieles/Piel_Fic_Vic_11.png'),
      require('../../assets/images/Pieles/Piel_Fic_Vic_12.png'),
    ],
  };

  // Función para encontrar la imagen por su ruta
  const encontrarImagenPorRuta = (ruta) => {
    // Convertir la ruta a string para comparar
    const rutaString = ruta.toString();
    
    // Buscar en todos los tipos de piel
    for (const tipo in imagenesPorTipo) {
      const imagen = imagenesPorTipo[tipo].find(img => 
        img.toString() === rutaString
      );
      if (imagen) {
        // Si encontramos la imagen, también actualizamos el tipo seleccionado
        setTipoSeleccionado(tipo);
        return imagen;
      }
    }
    return null;
  };

  // Cargar la selección guardada o usar el valor por defecto
  useEffect(() => {
    const cargarSeleccionGuardada = async () => {
      try {
        const seleccionGuardada = await AsyncStorage.getItem(STORAGE_KEY);
        
        if (seleccionGuardada) {
          // Intentar encontrar la imagen guardada en nuestras colecciones
          const imagenEncontrada = encontrarImagenPorRuta(JSON.parse(seleccionGuardada));
          if (imagenEncontrada) {
            setImagenSeleccionada(imagenEncontrada);
            onSelect(imagenEncontrada, 'Pieles');
          } else {
            // Si no se encuentra la imagen guardada, usar la primera por defecto
            setImagenSeleccionada(imagenesPorTipo.base[0]);
            onSelect(imagenesPorTipo.base[0], 'Pieles');
          }
        } else {
          // Primera vez, seleccionar la primera piel por defecto
          setImagenSeleccionada(imagenesPorTipo.base[0]);
          onSelect(imagenesPorTipo.base[0], 'Pieles');
        }
      } catch (error) {
        console.error('Error al cargar la selección guardada:', error);
        // En caso de error, usar la primera piel por defecto
        setImagenSeleccionada(imagenesPorTipo.base[0]);
        onSelect(imagenesPorTipo.base[0], 'Pieles');
      } finally {
        setCargando(false);
      }
    };

    cargarSeleccionGuardada();
  }, []);

  const handleTipoChange = (tipo) => {
    setTipoSeleccionado(tipo);
    // No reseteamos la imagen seleccionada al cambiar de tipo
  };

  const handleImagePress = async (imagen) => {
    if (imagenSeleccionada === imagen) {
      setImagenSeleccionada(null);
      onSelect(null, 'Pieles');
      // Eliminar la selección guardada
      await AsyncStorage.removeItem(STORAGE_KEY);
    } else {
      setImagenSeleccionada(imagen);
      onSelect(imagen, 'Pieles');
      // Guardar la selección
      try {
        await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(imagen.toString()));
      } catch (error) {
        console.error('Error al guardar la selección:', error);
      }
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
          <Image source={imagen} style={styles.categoryImage} />
        </ImageBackground>
        {imagenSeleccionada === imagen && <View style={styles.selectionOverlay} />}
      </View>
    </TouchableOpacity>
  );

  const TipoButton = ({ tipo, activeColor, inactiveColor }) => (
    <TouchableOpacity
      style={[
        styles.circleButton,
        { borderColor: inactiveColor },
        tipoSeleccionado === tipo && { backgroundColor: activeColor, borderColor: inactiveColor },
      ]}
      onPress={() => handleTipoChange(tipo)}
    />
  );

  // Si está cargando, puedes mostrar un indicador de carga o simplemente retornar null
  if (cargando) {
    return null; // O un componente de carga
  }

  return (
    <ImageBackground 
      source={require('../../assets/images/otras/fondo_elementos.png')}
      style={styles.container}
    >
      {/* Botones de tipo posicionados absolutamente en la parte superior derecha */}
      <View style={styles.buttonsContainer}>
        <TipoButton
          tipo="base"
          activeColor="#8B4513"
          inactiveColor="#4A2608"
        />
        <TipoButton
          tipo="vitiligo"
          activeColor="#F5DEB3"
          inactiveColor="#c3b19b"
        />
        <TipoButton 
          tipo="ficticio"
          activeColor="#ff5956"
          inactiveColor="#e23d2e"
        />
        <TipoButton 
          tipo="ficticioVit"
          activeColor="#d75431"
          inactiveColor="#fe68b4"
        />
      </View>

      {/* Contenedor seguro con padding superior para evitar solapamiento con los botones */}
      <View style={styles.safeContainer}>
        <ScrollView 
          style={styles.scrollContainer}
          contentContainerStyle={styles.imagesScrollContainer}
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.imagesContainer}>
            {imagenesPorTipo[tipoSeleccionado]?.map((imagen, index) => (
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
    paddingTop: 40, // Espacio para los botones de tipo
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
    width: 24, // Reducido a 24px como mencionaste
    height: 24, // Reducido a 24px para mantener proporción
    borderRadius: 12, // La mitad del ancho/alto
    marginLeft: 5,
    borderWidth: 3,
    backgroundColor: 'transparent',
  },
  scrollContainer: {
    flex: 1,
    maxHeight: 300, // Limita la altura como en el ejemplo de Ojos
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
  categoryImage: {
    width: 75,
    height: 75,
    resizeMode: 'contain',
    transform: [{ scale: 1 }], // Volvemos al zoom original de 1
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

export default Pieles;
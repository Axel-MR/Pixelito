import React, { useState, useRef } from 'react';
import { StyleSheet, Text, TouchableOpacity, ImageBackground, View, Modal, TextInput, Image, Animated, Linking } from 'react-native';
import { WebView } from 'react-native-webview';
import { useFonts } from 'expo-font';
import { Link } from 'expo-router'; // Importa Link desde expo-router

const Apoyanos = () => {
  const [infoModalVisible, setInfoModalVisible] = useState(false);
  const [paypalModalVisible, setPaypalModalVisible] = useState(false);
  const [amount, setAmount] = useState('');
  const [showWebView, setShowWebView] = useState(false);

  const [fontsLoaded] = useFonts({
    'VT323-Regular': require('../assets/fonts/VT323-Regular.ttf'),
  });

  const shakeAnimation = useRef(new Animated.Value(0)).current;

  // Función para crear la animación de agitación
  const startShake = () => {
    shakeAnimation.setValue(0);
    Animated.sequence([
      Animated.timing(shakeAnimation, {
        toValue: 10,
        duration: 100,
        useNativeDriver: true,
      }),
      Animated.timing(shakeAnimation, {
        toValue: -10,
        duration: 100,
        useNativeDriver: true,
      }),
      Animated.timing(shakeAnimation, {
        toValue: 10,
        duration: 100,
        useNativeDriver: true,
      }),
      Animated.timing(shakeAnimation, {
        toValue: 0,
        duration: 100,
        useNativeDriver: true,
      }),
    ]).start();
  };

  if (!fontsLoaded) {
    return <View style={styles.container}><Text>Cargando...</Text></View>;
  }

  const validateAmount = () => {
    const numAmount = parseFloat(amount);
    if (isNaN(numAmount) || numAmount <= 0) {
      alert('Por favor ingresa una cantidad válida mayor a 0');
      return false;
    }
    return true;
  };

  const generatePayPalHTML = () => {
    return `
      <html>
        <head>
          <style>
            body, input, button {
              font-family: 'VT323-Regular', monospace;
            }
          </style>
        </head>
        <body>
          <form id="paypalForm" action="https://www.paypal.com/cgi-bin/webscr" method="post">
            <input type="hidden" name="cmd" value="_donations" />
            <input type="hidden" name="business" value="jardinonirico@gmail.com" />
            <input type="hidden" name="amount" value="${amount}" />
            <input type="hidden" name="currency_code" value="MXN" />
            <input type="hidden" name="return" value="tuapp://donacion/completada" />
            <input type="hidden" name="cancel_return" value="tuapp://donacion/cancelada" />
          </form>
          <script>
            document.getElementById("paypalForm").submit();
          </script>
        </body>
      </html>
    `;
  };

  const handleNavigationStateChange = (navState) => {
    if (navState.url.includes('Pixelito://donacion/')) {
      setPaypalModalVisible(false);
      setShowWebView(false);
      setAmount('');
      
      if (navState.url.includes('/completada')) {
        alert('¡Gracias por tu donación!');
      } else if (navState.url.includes('/cancelada')) {
        alert('Donación cancelada');
      }
    }
  };

  const handleInstagramPress = async () => {
    const url = 'https://www.instagram.com/jardinonirico/';
    const supported = await Linking.canOpenURL(url);
    if (supported) {
      await Linking.openURL(url);
    } else {
      console.error('No se puede abrir el enlace:', url);
    }
  };

  return (
    <ImageBackground
      source={require('../assets/images/otras/Apoyanos_fondo.png')}
      style={styles.background}
      resizeMode="cover"
    >
      <View style={[styles.container, styles.defaultFont]}>
        <Text style={styles.titleText}>Cualquier Apoyo Es Valioso</Text>

        {/* Modal de Información */}
        <Modal
          visible={infoModalVisible}
          animationType="fade"
          transparent={true}
          onRequestClose={() => setInfoModalVisible(false)}
        >
          <View style={styles.modalOverlay}>
            <View style={styles.infoModalContainer}>
              <Text style={styles.modalTitle}>Dibujante y Programador @jardinonirico</Text>
              <Text style={styles.modalText}>
                A través de mis dos mayores pasiones creé esta app que espero disfrutes mucho ♡
              </Text>
              <View style={styles.grendelImageContainer}>
                <Image
                  source={require('../assets/images/otras/Grendel.png')}
                  style={styles.grendelIamge}
                  resizeMode="contain"
                />
              </View>
              <Text style={styles.sideText}>
                Más de 1300 ilustraciones hechas manualmente y miles de líneas de código hacen posible este proyecto {"\n"}
              </Text>
              <Text style={styles.modalText}>
                ♡ Agradezco mucho que estés aquí. Tu apoyo es invaluable ♡
              </Text>
              <TouchableOpacity
                style={styles.infoCloseButton}
                onPress={() => setInfoModalVisible(false)}
              >
                <Text style={styles.closeButtonText}>Gracias ;)</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>

        {/* Modal de PayPal */}
        <Modal 
          visible={paypalModalVisible} 
          animationType="slide" 
          transparent={false}
        >
          <View style={styles.paypalModalContainer}>
            {showWebView && (
              <WebView
                source={{ html: generatePayPalHTML() }}
                onNavigationStateChange={handleNavigationStateChange}
                startInLoadingState={true}
                javaScriptEnabled={true}
                domStorageEnabled={true}
              />
            )}
            <TouchableOpacity 
              style={styles.paypalCloseButton} 
              onPress={() => {
                setPaypalModalVisible(false);
                setShowWebView(false);
                setAmount('');
              }}
            >
              <Text style={[styles.closeButtonText, styles.defaultFont]}>Cancelar</Text>
            </TouchableOpacity>
          </View>
        </Modal>

        {/* Imagen de información que abre el modal */}
        <TouchableOpacity 
          onPress={() => setInfoModalVisible(true)}
          style={styles.infoImageContainer}
        >
          <Image
            source={require('../assets/images/otras/info.png')}
            style={styles.infoImage}
            resizeMode="contain"
          />
        </TouchableOpacity>

        <View style={styles.inputContainer}>
          <Text style={styles.currencySymbol}>$</Text>
          <TextInput
            style={[styles.input, styles.defaultFont]}
            placeholder="Cantidad a donar   (MXN)"
            value={amount}
            onChangeText={setAmount}
            keyboardType="decimal-pad"
            placeholderTextColor="#666"
          />
        </View>

        <TouchableOpacity 
          style={styles.donateButton} 
          onPress={() => {
            if (validateAmount()) {
              setShowWebView(true);
              setPaypalModalVisible(true);
            }
          }}
        >
          <Text style={[styles.buttonText, styles.defaultFont]}>Donar con PayPal</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={startShake}>
          <Animated.Image
            source={require('../assets/images/otras/payaso.png')}
            style={[
              styles.payasoIamge,
              {
                transform: [
                  {
                    translateX: shakeAnimation
                  }
                ]
              }
            ]}
            resizeMode="contain"
          />
        </TouchableOpacity>

        <TouchableOpacity onPress={handleInstagramPress}>
          <Text style={styles.bottomText}>Quejas y sugerencias en @jardinonirico en Instagram</Text>
        </TouchableOpacity>

        <Link href="/" asChild>
          <TouchableOpacity style={styles.backButton}>
            <Image
              source={require('../assets/images/otras/back.png')}
              style={styles.backImage}
              resizeMode="contain"
            />
          </TouchableOpacity>
        </Link>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  defaultFont: {
    fontFamily: 'VT323-Regular',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  background: {
    flex: 1,
    width: '100%',
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  infoModalContainer: {
    backgroundColor: 'white',
    borderRadius: 15,
    padding: 20,
    width: '80%',
    maxHeight: '70%',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  modalTitle: {
    fontSize: 24,
    fontFamily: 'VT323-Regular',
    marginBottom: 20,
    textAlign: 'center',
  },
  modalText: {
    fontSize: 18,
    fontFamily: 'VT323-Regular',
    textAlign: 'center',
    marginBottom: 20,
  },
  bottomText: {
    fontSize: 18,
    fontFamily: 'VT323-Regular',
    textAlign: 'center',
    marginBottom: 20,
    color: 'white',
    marginTop: 20,
  },
  sideText: {
    fontSize: 18,
    fontFamily: 'VT323-Regular',
    textAlign: 'left',
    marginBottom: 20,
  },
  infoImageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 25,
  },
  infoImage: {
    width: 50,
    height: 50,
  },
  payasoIamge: {
    width: 150,
    height: 150,
    marginTop: 30,
  },
  grendelImageContainer: {
    justifyContent: 'center', 
    alignItems: 'center',
  },
  grendelIamge: {
    width: 80,
    height: 80,
    marginBottom: 10,
    justifyContent: 'center',
  },
  paypalModalContainer: {
    flex: 1,
    marginTop: 0,
  },
  donateButton: {
    backgroundColor: '#0070ba',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 8,
    elevation: 3,
  },
  buttonText: {
    color: 'white',
    fontSize: 22,
  },
  infoCloseButton: {
    backgroundColor: '#e74c3c',
    padding: 10,
    borderRadius: 8,
    alignSelf: 'center',
    minWidth: 100,
  },
  paypalCloseButton: {
    backgroundColor: '#e74c3c',
    padding: 15,
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
  closeButtonText: {
    color: 'white',
    fontSize: 16,
    fontFamily: 'VT323-Regular',
    textAlign: 'center',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    borderRadius: 8,
    padding: 5,
    width: '80%',
    padding: 10, 
  },
  currencySymbol: {
    fontSize: 20,
    fontFamily: 'VT323-Regular',
    paddingHorizontal: 10,
    color: '#333',
  },
  input: {
    flex: 1,
    fontSize: 18,
    padding: 10,
    color: '#333',
  },
  titleText: {
    fontSize: 44,
    fontFamily: 'VT323-Regular',
    color: 'white',
    marginBottom: 30,
    textAlign: 'center',
  },
  backButton: {
    position: 'absolute',
    marginTop: 180,
    top: 20, // Cambia "bottom" por "top"
    left: 20, // Cambia "right" por "left"
  },
  backImage: {
    width: 40,
    height: 40,
  },
});

export default Apoyanos;
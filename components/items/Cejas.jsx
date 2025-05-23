import React from 'react';
import ItemSelector from './ItemSelector';
// Definición de colores personalizados para las cejas
const COLORES_CEJAS = [
  { id: 'negro', activeColor: '#3b3436', inactiveColor: '#191717' },
  { id: 'rojo', activeColor: '#a92847', inactiveColor: '#950628' },
  { id: 'cafe', activeColor: '#c18300', inactiveColor: '#bc9440' },
  { id: 'marron', activeColor: '#5b3c11', inactiveColor: '#281802' },
  { id: 'naranja', activeColor: '#f57c00', inactiveColor: '#db6b00' },
  { id: 'blanco', activeColor: '#e6e6e6', inactiveColor: '#bfbfbf' },
  { id: 'ambar', activeColor: '#e1ca8a', inactiveColor: '#c3a26a' },
  { id: 'azul', activeColor: '#28b9d8', inactiveColor: '#056b88' },
  { id: 'morrado', activeColor: '#7c509a', inactiveColor: '#5a3872' },
  { id: 'rosa', activeColor: '#ff80ab', inactiveColor: '#ff4081' },
  { id: 'verde', activeColor: '#388e3c', inactiveColor: '#2e7d32' },
];

// Mapa de imágenes para las cejas
const cejasImageMap = {
  negro: [
    require("../../assets/images/Cejas/Ceja_Negras_01.png"),
    require("../../assets/images/Cejas/Ceja_Negras_02.png"),
    require("../../assets/images/Cejas/Ceja_Negras_03.png"),
    require("../../assets/images/Cejas/Ceja_Negras_04.png"),
    require("../../assets/images/Cejas/Ceja_Negras_05.png"),
    require("../../assets/images/Cejas/Ceja_Negras_06.png"),
    require("../../assets/images/Cejas/Ceja_Negras_07.png"),
    require("../../assets/images/Cejas/Ceja_Negras_08.png"),
    require("../../assets/images/Cejas/Ceja_Negras_09.png"),
    require("../../assets/images/Cejas/Ceja_Negras_10.png"),
    require("../../assets/images/Cejas/Ceja_Negras_11.png"),
    require("../../assets/images/Cejas/Ceja_Negras_12.png"),
    require("../../assets/images/Cejas/Ceja_Negras_13.png"),
    require("../../assets/images/Cejas/Ceja_Negras_14.png"),
    require("../../assets/images/Cejas/Ceja_Negras_15.png"),
    require("../../assets/images/Cejas/Ceja_Negras_16.png"),
  ],
  rojo: [
    require("../../assets/images/Cejas/Ceja_Rojas_01.png"),
    require("../../assets/images/Cejas/Ceja_Rojas_02.png"),
    require("../../assets/images/Cejas/Ceja_Rojas_03.png"),
    require("../../assets/images/Cejas/Ceja_Rojas_04.png"),
    require("../../assets/images/Cejas/Ceja_Rojas_05.png"),
    require("../../assets/images/Cejas/Ceja_Rojas_06.png"),
    require("../../assets/images/Cejas/Ceja_Rojas_07.png"),
    require("../../assets/images/Cejas/Ceja_Rojas_08.png"),
    require("../../assets/images/Cejas/Ceja_Rojas_09.png"),
    require("../../assets/images/Cejas/Ceja_Rojas_10.png"),
    require("../../assets/images/Cejas/Ceja_Rojas_11.png"),
    require("../../assets/images/Cejas/Ceja_Rojas_12.png"),
    require("../../assets/images/Cejas/Ceja_Rojas_13.png"),
    require("../../assets/images/Cejas/Ceja_Rojas_14.png"),
    require("../../assets/images/Cejas/Ceja_Rojas_15.png"),
    require("../../assets/images/Cejas/Ceja_Rojas_16.png"),
  ],
  cafe: [
    require("../../assets/images/Cejas/Ceja_Cafes_01.png"),
    require("../../assets/images/Cejas/Ceja_Cafes_02.png"),
    require("../../assets/images/Cejas/Ceja_Cafes_03.png"),
    require("../../assets/images/Cejas/Ceja_Cafes_04.png"),
    require("../../assets/images/Cejas/Ceja_Cafes_05.png"),
    require("../../assets/images/Cejas/Ceja_Cafes_06.png"),
    require("../../assets/images/Cejas/Ceja_Cafes_07.png"),
    require("../../assets/images/Cejas/Ceja_Cafes_08.png"),
    require("../../assets/images/Cejas/Ceja_Cafes_09.png"),
    require("../../assets/images/Cejas/Ceja_Cafes_10.png"),
    require("../../assets/images/Cejas/Ceja_Cafes_11.png"),
    require("../../assets/images/Cejas/Ceja_Cafes_12.png"),
    require("../../assets/images/Cejas/Ceja_Cafes_13.png"),
    require("../../assets/images/Cejas/Ceja_Cafes_14.png"),
    require("../../assets/images/Cejas/Ceja_Cafes_15.png"),
    require("../../assets/images/Cejas/Ceja_Cafes_16.png"),
  ],
  marron: [
    require("../../assets/images/Cejas/Ceja_Marrones_01.png"),
    require("../../assets/images/Cejas/Ceja_Marrones_02.png"),
    require("../../assets/images/Cejas/Ceja_Marrones_03.png"),
    require("../../assets/images/Cejas/Ceja_Marrones_04.png"),
    require("../../assets/images/Cejas/Ceja_Marrones_05.png"),
    require("../../assets/images/Cejas/Ceja_Marrones_06.png"),
    require("../../assets/images/Cejas/Ceja_Marrones_07.png"),
    require("../../assets/images/Cejas/Ceja_Marrones_08.png"),
    require("../../assets/images/Cejas/Ceja_Marrones_09.png"),
    require("../../assets/images/Cejas/Ceja_Marrones_10.png"),
    require("../../assets/images/Cejas/Ceja_Marrones_11.png"),
    require("../../assets/images/Cejas/Ceja_Marrones_12.png"),
    require("../../assets/images/Cejas/Ceja_Marrones_13.png"),
    require("../../assets/images/Cejas/Ceja_Marrones_14.png"),
    require("../../assets/images/Cejas/Ceja_Marrones_15.png"),
    require("../../assets/images/Cejas/Ceja_Marrones_16.png"),
  ],
  blanco: [
    require("../../assets/images/Cejas/Ceja_Blancas_01.png"),
    require("../../assets/images/Cejas/Ceja_Blancas_02.png"),
    require("../../assets/images/Cejas/Ceja_Blancas_03.png"),
    require("../../assets/images/Cejas/Ceja_Blancas_04.png"),
    require("../../assets/images/Cejas/Ceja_Blancas_05.png"),
    require("../../assets/images/Cejas/Ceja_Blancas_06.png"),
    require("../../assets/images/Cejas/Ceja_Blancas_07.png"),
    require("../../assets/images/Cejas/Ceja_Blancas_08.png"),
    require("../../assets/images/Cejas/Ceja_Blancas_09.png"),
    require("../../assets/images/Cejas/Ceja_Blancas_10.png"),
    require("../../assets/images/Cejas/Ceja_Blancas_11.png"),
    require("../../assets/images/Cejas/Ceja_Blancas_12.png"),
    require("../../assets/images/Cejas/Ceja_Blancas_13.png"),
    require("../../assets/images/Cejas/Ceja_Blancas_14.png"),
    require("../../assets/images/Cejas/Ceja_Blancas_15.png"),
    require("../../assets/images/Cejas/Ceja_Blancas_16.png"),
  ],
  morrado: [
    require("../../assets/images/Cejas/Ceja_Morradas_01.png"),
    require("../../assets/images/Cejas/Ceja_Morradas_02.png"),
    require("../../assets/images/Cejas/Ceja_Morradas_03.png"),
    require("../../assets/images/Cejas/Ceja_Morradas_04.png"),
    require("../../assets/images/Cejas/Ceja_Morradas_05.png"),
    require("../../assets/images/Cejas/Ceja_Morradas_06.png"),
    require("../../assets/images/Cejas/Ceja_Morradas_07.png"),
    require("../../assets/images/Cejas/Ceja_Morradas_08.png"),
    require("../../assets/images/Cejas/Ceja_Morradas_09.png"),
    require("../../assets/images/Cejas/Ceja_Morradas_10.png"),
    require("../../assets/images/Cejas/Ceja_Morradas_11.png"),
    require("../../assets/images/Cejas/Ceja_Morradas_12.png"),
    require("../../assets/images/Cejas/Ceja_Morradas_13.png"),
    require("../../assets/images/Cejas/Ceja_Morradas_14.png"),
    require("../../assets/images/Cejas/Ceja_Morradas_15.png"),
    require("../../assets/images/Cejas/Ceja_Morradas_16.png"),
  ],
  naranja: [
    require("../../assets/images/Cejas/Ceja_Naranjas_01.png"),
    require("../../assets/images/Cejas/Ceja_Naranjas_02.png"),
    require("../../assets/images/Cejas/Ceja_Naranjas_03.png"),
    require("../../assets/images/Cejas/Ceja_Naranjas_04.png"),
    require("../../assets/images/Cejas/Ceja_Naranjas_05.png"),
    require("../../assets/images/Cejas/Ceja_Naranjas_06.png"),
    require("../../assets/images/Cejas/Ceja_Naranjas_07.png"),
    require("../../assets/images/Cejas/Ceja_Naranjas_08.png"),
    require("../../assets/images/Cejas/Ceja_Naranjas_09.png"),
    require("../../assets/images/Cejas/Ceja_Naranjas_10.png"),
    require("../../assets/images/Cejas/Ceja_Naranjas_11.png"),
    require("../../assets/images/Cejas/Ceja_Naranjas_12.png"),
    require("../../assets/images/Cejas/Ceja_Naranjas_13.png"),
    require("../../assets/images/Cejas/Ceja_Naranjas_14.png"),
    require("../../assets/images/Cejas/Ceja_Naranjas_15.png"),
    require("../../assets/images/Cejas/Ceja_Naranjas_16.png"),
  ],
  rosa: [
    require("../../assets/images/Cejas/Ceja_Rosa_01.png"),
    require("../../assets/images/Cejas/Ceja_Rosa_02.png"),
    require("../../assets/images/Cejas/Ceja_Rosa_03.png"),
    require("../../assets/images/Cejas/Ceja_Rosa_04.png"),
    require("../../assets/images/Cejas/Ceja_Rosa_05.png"),
    require("../../assets/images/Cejas/Ceja_Rosa_06.png"),
    require("../../assets/images/Cejas/Ceja_Rosa_07.png"),
    require("../../assets/images/Cejas/Ceja_Rosa_08.png"),
    require("../../assets/images/Cejas/Ceja_Rosa_09.png"),
    require("../../assets/images/Cejas/Ceja_Rosa_10.png"),
    require("../../assets/images/Cejas/Ceja_Rosa_11.png"),
    require("../../assets/images/Cejas/Ceja_Rosa_12.png"),
    require("../../assets/images/Cejas/Ceja_Rosa_13.png"),
    require("../../assets/images/Cejas/Ceja_Rosa_14.png"),
    require("../../assets/images/Cejas/Ceja_Rosa_15.png"),
    require("../../assets/images/Cejas/Ceja_Rosa_16.png"),
  ],
  verde: [
    require("../../assets/images/Cejas/Ceja_Verdes_01.png"),
    require("../../assets/images/Cejas/Ceja_Verdes_02.png"),
    require("../../assets/images/Cejas/Ceja_Verdes_03.png"),
    require("../../assets/images/Cejas/Ceja_Verdes_04.png"),
    require("../../assets/images/Cejas/Ceja_Verdes_05.png"),
    require("../../assets/images/Cejas/Ceja_Verdes_06.png"),
    require("../../assets/images/Cejas/Ceja_Verdes_07.png"),
    require("../../assets/images/Cejas/Ceja_Verdes_08.png"),
    require("../../assets/images/Cejas/Ceja_Verdes_09.png"),
    require("../../assets/images/Cejas/Ceja_Verdes_10.png"),
    require("../../assets/images/Cejas/Ceja_Verdes_11.png"),
    require("../../assets/images/Cejas/Ceja_Verdes_12.png"),
    require("../../assets/images/Cejas/Ceja_Verdes_13.png"),
    require("../../assets/images/Cejas/Ceja_Verdes_14.png"),
    require("../../assets/images/Cejas/Ceja_Verdes_15.png"),
    require("../../assets/images/Cejas/Ceja_Verdes_16.png"),
  ],
  ambar: [
    require("../../assets/images/Cejas/Ceja_Ambar_01.png"),
    require("../../assets/images/Cejas/Ceja_Ambar_02.png"),
    require("../../assets/images/Cejas/Ceja_Ambar_03.png"),
    require("../../assets/images/Cejas/Ceja_Ambar_04.png"),
    require("../../assets/images/Cejas/Ceja_Ambar_05.png"),
    require("../../assets/images/Cejas/Ceja_Ambar_06.png"),
    require("../../assets/images/Cejas/Ceja_Ambar_07.png"),
    require("../../assets/images/Cejas/Ceja_Ambar_08.png"),
    require("../../assets/images/Cejas/Ceja_Ambar_09.png"),
    require("../../assets/images/Cejas/Ceja_Ambar_10.png"),
    require("../../assets/images/Cejas/Ceja_Ambar_11.png"),
    require("../../assets/images/Cejas/Ceja_Ambar_12.png"),
    require("../../assets/images/Cejas/Ceja_Ambar_13.png"),
    require("../../assets/images/Cejas/Ceja_Ambar_14.png"),
    require("../../assets/images/Cejas/Ceja_Ambar_15.png"),
    require("../../assets/images/Cejas/Ceja_Ambar_16.png"),
  ],
  azul: [
    require("../../assets/images/Cejas/Ceja_Azul_01.png"),
    require("../../assets/images/Cejas/Ceja_Azul_02.png"),
    require("../../assets/images/Cejas/Ceja_Azul_03.png"),
    require("../../assets/images/Cejas/Ceja_Azul_04.png"),
    require("../../assets/images/Cejas/Ceja_Azul_05.png"),
    require("../../assets/images/Cejas/Ceja_Azul_06.png"),
    require("../../assets/images/Cejas/Ceja_Azul_07.png"),
    require("../../assets/images/Cejas/Ceja_Azul_08.png"),
    require("../../assets/images/Cejas/Ceja_Azul_09.png"),
    require("../../assets/images/Cejas/Ceja_Azul_10.png"),
    require("../../assets/images/Cejas/Ceja_Azul_11.png"),
    require("../../assets/images/Cejas/Ceja_Azul_12.png"),
    require("../../assets/images/Cejas/Ceja_Azul_13.png"),
    require("../../assets/images/Cejas/Ceja_Azul_14.png"),
    require("../../assets/images/Cejas/Ceja_Azul_15.png"),
    require("../../assets/images/Cejas/Ceja_Azul_16.png"),
  ],
};

const Cejas = ({ onSelect }) => {
  return (
    <ItemSelector
      categoria="Cejas"
      onSelect={onSelect}
      imageMap={cejasImageMap}
      colorInicial="negro"
      escalaImagen={1.5} // Mantenemos el zoom original de 1.5
      coloresPersonalizados={COLORES_CEJAS} // Usamos los colores personalizados
    />
  );
};

export default Cejas;
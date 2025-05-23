import React from 'react';
import ItemSelector from './ItemSelector';
 const ojosImageMap = {
    negro: [
      require('../../assets/images/Ojos/Ojo_Negros_01.png'),
      require('../../assets/images/Ojos/Ojo_Negros_02.png'),
      require('../../assets/images/Ojos/Ojo_Negros_03.png'),
      require('../../assets/images/Ojos/Ojo_Negros_04.png'),
      require('../../assets/images/Ojos/Ojo_Negros_05.png'),
      require('../../assets/images/Ojos/Ojo_Negros_06.png'),
      require('../../assets/images/Ojos/Ojo_Negros_07.png'),
      require('../../assets/images/Ojos/Ojo_Negros_08.png'),
      require('../../assets/images/Ojos/Ojo_Negros_09.png'),
      require('../../assets/images/Ojos/Ojo_Negros_10.png'),
      require('../../assets/images/Ojos/Ojo_Negros_11.png'),
      require('../../assets/images/Ojos/Ojo_Negros_12.png'),
      require('../../assets/images/Ojos/Ojo_Negros_13.png'),
      require('../../assets/images/Ojos/Ojo_Negros_14.png'),
      require('../../assets/images/Ojos/Ojo_Negros_15.png'),
      require('../../assets/images/Ojos/Ojo_Negros_16.png'),
    ],
    rojo: [
      require('../../assets/images/Ojos/Ojo_Rojos_01.png'),
      require('../../assets/images/Ojos/Ojo_Rojos_02.png'),
      require('../../assets/images/Ojos/Ojo_Rojos_03.png'),
      require('../../assets/images/Ojos/Ojo_Rojos_04.png'),
      require('../../assets/images/Ojos/Ojo_Rojos_05.png'),
      require('../../assets/images/Ojos/Ojo_Rojos_06.png'),
      require('../../assets/images/Ojos/Ojo_Rojos_07.png'),
      require('../../assets/images/Ojos/Ojo_Rojos_08.png'),
      require('../../assets/images/Ojos/Ojo_Rojos_09.png'),
      require('../../assets/images/Ojos/Ojo_Rojos_10.png'),
      require('../../assets/images/Ojos/Ojo_Rojos_11.png'),
      require('../../assets/images/Ojos/Ojo_Rojos_12.png'),
      require('../../assets/images/Ojos/Ojo_Rojos_13.png'),
      require('../../assets/images/Ojos/Ojo_Rojos_14.png'),
      require('../../assets/images/Ojos/Ojo_Rojos_15.png'),
      require('../../assets/images/Ojos/Ojo_Rojos_16.png'),
    ],

    cafe: [
      require('../../assets/images/Ojos/Ojo_Cafe_01.png'),
      require('../../assets/images/Ojos/Ojo_Cafe_02.png'),
      require('../../assets/images/Ojos/Ojo_Cafe_03.png'),
      require('../../assets/images/Ojos/Ojo_Cafe_04.png'),
      require('../../assets/images/Ojos/Ojo_Cafe_05.png'),
      require('../../assets/images/Ojos/Ojo_Cafe_06.png'),
      require('../../assets/images/Ojos/Ojo_Cafe_07.png'),
      require('../../assets/images/Ojos/Ojo_Cafe_08.png'),
      require('../../assets/images/Ojos/Ojo_Cafe_09.png'),
      require('../../assets/images/Ojos/Ojo_Cafe_10.png'),
      require('../../assets/images/Ojos/Ojo_Cafe_11.png'),
      require('../../assets/images/Ojos/Ojo_Cafe_12.png'),
      require('../../assets/images/Ojos/Ojo_Cafe_13.png'),
      require('../../assets/images/Ojos/Ojo_Cafe_14.png'),
      require('../../assets/images/Ojos/Ojo_Cafe_15.png'),
      require('../../assets/images/Ojos/Ojo_Cafe_16.png'),
    ],
    marron: [
      require('../../assets/images/Ojos/Ojo_Marron_01.png'),
      require('../../assets/images/Ojos/Ojo_Marron_02.png'),
      require('../../assets/images/Ojos/Ojo_Marron_03.png'),
      require('../../assets/images/Ojos/Ojo_Marron_04.png'),
      require('../../assets/images/Ojos/Ojo_Marron_05.png'),
      require('../../assets/images/Ojos/Ojo_Marron_06.png'),
      require('../../assets/images/Ojos/Ojo_Marron_07.png'),
      require('../../assets/images/Ojos/Ojo_Marron_08.png'),
      require('../../assets/images/Ojos/Ojo_Marron_09.png'),
      require('../../assets/images/Ojos/Ojo_Marron_10.png'),
      require('../../assets/images/Ojos/Ojo_Marron_11.png'),
      require('../../assets/images/Ojos/Ojo_Marron_12.png'),
      require('../../assets/images/Ojos/Ojo_Marron_13.png'),
      require('../../assets/images/Ojos/Ojo_Marron_14.png'),
      require('../../assets/images/Ojos/Ojo_Marron_15.png'),
      require('../../assets/images/Ojos/Ojo_Marron_16.png'),
    ],
    ambar: [
      require('../../assets/images/Ojos/Ojo_Ambar_01.png'),
      require('../../assets/images/Ojos/Ojo_Ambar_02.png'),
      require('../../assets/images/Ojos/Ojo_Ambar_03.png'),
      require('../../assets/images/Ojos/Ojo_Ambar_04.png'),
      require('../../assets/images/Ojos/Ojo_Ambar_05.png'),
      require('../../assets/images/Ojos/Ojo_Ambar_06.png'),
      require('../../assets/images/Ojos/Ojo_Ambar_07.png'),
      require('../../assets/images/Ojos/Ojo_Ambar_08.png'),
      require('../../assets/images/Ojos/Ojo_Ambar_09.png'),
      require('../../assets/images/Ojos/Ojo_Ambar_10.png'),
      require('../../assets/images/Ojos/Ojo_Ambar_11.png'),
      require('../../assets/images/Ojos/Ojo_Ambar_12.png'),
      require('../../assets/images/Ojos/Ojo_Ambar_13.png'),
      require('../../assets/images/Ojos/Ojo_Ambar_14.png'),
      require('../../assets/images/Ojos/Ojo_Ambar_15.png'),
      require('../../assets/images/Ojos/Ojo_Ambar_16.png'),
    ],
    azul: [
      require('../../assets/images/Ojos/Ojo_Azul_01.png'),
      require('../../assets/images/Ojos/Ojo_Azul_02.png'),
      require('../../assets/images/Ojos/Ojo_Azul_03.png'),
      require('../../assets/images/Ojos/Ojo_Azul_04.png'),
      require('../../assets/images/Ojos/Ojo_Azul_05.png'),
      require('../../assets/images/Ojos/Ojo_Azul_06.png'),
      require('../../assets/images/Ojos/Ojo_Azul_07.png'),
      require('../../assets/images/Ojos/Ojo_Azul_08.png'),
      require('../../assets/images/Ojos/Ojo_Azul_09.png'),
      require('../../assets/images/Ojos/Ojo_Azul_10.png'),
      require('../../assets/images/Ojos/Ojo_Azul_11.png'),
      require('../../assets/images/Ojos/Ojo_Azul_12.png'),
      require('../../assets/images/Ojos/Ojo_Azul_13.png'),
      require('../../assets/images/Ojos/Ojo_Azul_14.png'),
      require('../../assets/images/Ojos/Ojo_Azul_15.png'),
      require('../../assets/images/Ojos/Ojo_Azul_16.png'),
    ],
    verde: [
      require('../../assets/images/Ojos/Ojo_Verde_01.png'),
      require('../../assets/images/Ojos/Ojo_Verde_02.png'),
      require('../../assets/images/Ojos/Ojo_Verde_03.png'),
      require('../../assets/images/Ojos/Ojo_Verde_04.png'),
      require('../../assets/images/Ojos/Ojo_Verde_05.png'),
      require('../../assets/images/Ojos/Ojo_Verde_06.png'),
      require('../../assets/images/Ojos/Ojo_Verde_07.png'),
      require('../../assets/images/Ojos/Ojo_Verde_08.png'),
      require('../../assets/images/Ojos/Ojo_Verde_09.png'),
      require('../../assets/images/Ojos/Ojo_Verde_10.png'),
      require('../../assets/images/Ojos/Ojo_Verde_11.png'),
      require('../../assets/images/Ojos/Ojo_Verde_12.png'),
      require('../../assets/images/Ojos/Ojo_Verde_13.png'),
      require('../../assets/images/Ojos/Ojo_Verde_14.png'),
      require('../../assets/images/Ojos/Ojo_Verde_15.png'),
      require('../../assets/images/Ojos/Ojo_Verde_16.png'),
    ],
    rosa: [
      require('../../assets/images/Ojos/Ojo_Rosa_01.png'),
      require('../../assets/images/Ojos/Ojo_Rosa_02.png'),
      require('../../assets/images/Ojos/Ojo_Rosa_03.png'),
      require('../../assets/images/Ojos/Ojo_Rosa_04.png'),
      require('../../assets/images/Ojos/Ojo_Rosa_05.png'),
      require('../../assets/images/Ojos/Ojo_Rosa_06.png'),
      require('../../assets/images/Ojos/Ojo_Rosa_07.png'),
      require('../../assets/images/Ojos/Ojo_Rosa_08.png'),
      require('../../assets/images/Ojos/Ojo_Rosa_09.png'),
      require('../../assets/images/Ojos/Ojo_Rosa_10.png'),
      require('../../assets/images/Ojos/Ojo_Rosa_11.png'),
      require('../../assets/images/Ojos/Ojo_Rosa_12.png'),
      require('../../assets/images/Ojos/Ojo_Rosa_13.png'),
      require('../../assets/images/Ojos/Ojo_Rosa_14.png'),
      require('../../assets/images/Ojos/Ojo_Rosa_15.png'),
      require('../../assets/images/Ojos/Ojo_Rosa_16.png'),
    ],
    morrado: [
      require('../../assets/images/Ojos/Ojo_Morrado_01.png'),
      require('../../assets/images/Ojos/Ojo_Morrado_02.png'),
      require('../../assets/images/Ojos/Ojo_Morrado_03.png'),
      require('../../assets/images/Ojos/Ojo_Morrado_04.png'),
      require('../../assets/images/Ojos/Ojo_Morrado_05.png'),
      require('../../assets/images/Ojos/Ojo_Morrado_06.png'),
      require('../../assets/images/Ojos/Ojo_Morrado_07.png'),
      require('../../assets/images/Ojos/Ojo_Morrado_08.png'),
      require('../../assets/images/Ojos/Ojo_Morrado_09.png'),
      require('../../assets/images/Ojos/Ojo_Morrado_10.png'),
      require('../../assets/images/Ojos/Ojo_Morrado_11.png'),
      require('../../assets/images/Ojos/Ojo_Morrado_12.png'),
      require('../../assets/images/Ojos/Ojo_Morrado_13.png'),
      require('../../assets/images/Ojos/Ojo_Morrado_14.png'),
      require('../../assets/images/Ojos/Ojo_Morrado_15.png'),
      require('../../assets/images/Ojos/Ojo_Morrado_16.png'),
    ],
    naranja: [
      require('../../assets/images/Ojos/Ojo_Naranja_01.png'),
      require('../../assets/images/Ojos/Ojo_Naranja_02.png'),
      require('../../assets/images/Ojos/Ojo_Naranja_03.png'),
      require('../../assets/images/Ojos/Ojo_Naranja_04.png'),
      require('../../assets/images/Ojos/Ojo_Naranja_05.png'),
      require('../../assets/images/Ojos/Ojo_Naranja_06.png'),
      require('../../assets/images/Ojos/Ojo_Naranja_07.png'),
      require('../../assets/images/Ojos/Ojo_Naranja_08.png'),
      require('../../assets/images/Ojos/Ojo_Naranja_09.png'),
      require('../../assets/images/Ojos/Ojo_Naranja_10.png'),
      require('../../assets/images/Ojos/Ojo_Naranja_11.png'),
      require('../../assets/images/Ojos/Ojo_Naranja_12.png'),
      require('../../assets/images/Ojos/Ojo_Naranja_13.png'),
      require('../../assets/images/Ojos/Ojo_Naranja_14.png'),
      require('../../assets/images/Ojos/Ojo_Naranja_15.png'),
      require('../../assets/images/Ojos/Ojo_Naranja_16.png'),
    ],
    blanco: [
      require('../../assets/images/Ojos/Ceja_Blanco_01.png'),
      require('../../assets/images/Ojos/Ceja_Blanco_02.png'),
      require('../../assets/images/Ojos/Ceja_Blanco_03.png'),
      require('../../assets/images/Ojos/Ceja_Blanco_04.png'),
      require('../../assets/images/Ojos/Ceja_Blanco_05.png'),
      require('../../assets/images/Ojos/Ceja_Blanco_06.png'),
      require('../../assets/images/Ojos/Ceja_Blanco_07.png'),
      require('../../assets/images/Ojos/Ceja_Blanco_08.png'),
      require('../../assets/images/Ojos/Ceja_Blanco_09.png'),
      require('../../assets/images/Ojos/Ceja_Blanco_10.png'),
      require('../../assets/images/Ojos/Ceja_Blanco_11.png'),
      require('../../assets/images/Ojos/Ceja_Blanco_12.png'),
      require('../../assets/images/Ojos/Ceja_Blanco_13.png'),
      require('../../assets/images/Ojos/Ceja_Blanco_14.png'),
      require('../../assets/images/Ojos/Ceja_Blanco_15.png'),
      require('../../assets/images/Ojos/Ceja_Blanco_16.png'),
    ],
  };
  

const Ojos = ({ onSelect }) => {
  return (
    <ItemSelector
      categoria="Ojos"
      onSelect={onSelect}
      imageMap={ojosImageMap}
      colorInicial="negro"
      escalaImagen={2} // Usando la misma escala que en el ejemplo de Bocas
    />
  );
};

export default Ojos;
import React from 'react';
import { Image } from 'react-native';

import { styles } from '../../styles';

export const Imagen = ({ uri }) => {
  return <Image style={styles.image} source={{ uri }} />;
};

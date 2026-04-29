import React, { useEffect, useRef } from 'react';
import { TouchableOpacity, Animated, StyleSheet } from 'react-native';

// Componente de switch (botão liga/desliga) com animação deslizante
const BotaoLigaDesliga = ({ ligado = false, aoAlternar }) => {
  const posicaoBolinha = useRef(new Animated.Value(ligado ? 22 : 2)).current;
  const animacaoCor = useRef(new Animated.Value(ligado ? 1 : 0)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.spring(posicaoBolinha, {
        toValue: ligado ? 22 : 2,
        useNativeDriver: true,
        tension: 80,
        friction: 8,
      }),
      Animated.timing(animacaoCor, {
        toValue: ligado ? 1 : 0,
        duration: 200,
        useNativeDriver: false,
      }),
    ]).start();
  }, [ligado]);

  const corFundo = animacaoCor.interpolate({
    inputRange: [0, 1],
    outputRange: ['#B0BEC5', '#00A651'],
  });

  return (
    <TouchableOpacity activeOpacity={0.8} onPress={aoAlternar}>
      <Animated.View style={[estilos.trilho, { backgroundColor: corFundo }]}>
        <Animated.View
          style={[estilos.bolinha, { transform: [{ translateX: posicaoBolinha }] }]}
        />
      </Animated.View>
    </TouchableOpacity>
  );
};

const estilos = StyleSheet.create({
  trilho: {
    width: 48,
    height: 26,
    borderRadius: 13,
    justifyContent: 'center',
  },
  bolinha: {
    width: 22,
    height: 22,
    borderRadius: 11,
    backgroundColor: '#ffffff',
    elevation: 2,
  },
});

export default BotaoLigaDesliga;

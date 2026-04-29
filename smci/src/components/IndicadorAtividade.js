import React, { useEffect, useRef } from 'react';
import { View, Animated, Easing, StyleSheet } from 'react-native';

// Componente que exibe uma engrenagem girando quando a máquina está ligada
const IndicadorAtividade = ({ ativa = true, tamanho = 26, cor = '#00A651' }) => {
  const animacaoRotacao = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (!ativa) {
      animacaoRotacao.setValue(0);
      return;
    }

    // Animação de rotação contínua (loop infinito)
    const girando = Animated.loop(
      Animated.timing(animacaoRotacao, {
        toValue: 1,
        duration: 2000,
        easing: Easing.linear,
        useNativeDriver: true,
      })
    );

    girando.start();
    return () => girando.stop();
  }, [ativa]);

  // Converte 0-1 em graus de rotação
  const rotacao = animacaoRotacao.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  // Medidas da engrenagem baseadas no tamanho recebido
  const tamanhoExterno = tamanho;
  const tamanhoInterno = tamanho * 0.42;
  const espessuraDente = tamanho * 0.22;
  const corAtual = ativa ? cor : '#cccccc';

  return (
    <Animated.View
      style={[
        estilos.container,
        {
          width: tamanhoExterno,
          height: tamanhoExterno,
          transform: [{ rotate: rotacao }],
        },
      ]}
    >
      {/* Corpo circular da engrenagem */}
      <View
        style={[
          estilos.corpoEngrenagem,
          {
            width: tamanhoExterno,
            height: tamanhoExterno,
            borderRadius: tamanhoExterno / 2,
            borderWidth: espessuraDente,
            borderColor: corAtual,
          },
        ]}
      />

      {/* Furo central da engrenagem */}
      <View
        style={[
          estilos.furoCentral,
          {
            width: tamanhoInterno,
            height: tamanhoInterno,
            borderRadius: tamanhoInterno / 2,
            backgroundColor: '#ffffff',
          },
        ]}
      />

      {/* Dente horizontal da engrenagem */}
      <View
        style={[
          estilos.dente,
          {
            width: tamanhoExterno + espessuraDente * 1.2,
            height: espessuraDente,
            backgroundColor: corAtual,
            borderRadius: 2,
          },
        ]}
      />

      {/* Dente vertical da engrenagem */}
      <View
        style={[
          estilos.dente,
          {
            width: espessuraDente,
            height: tamanhoExterno + espessuraDente * 1.2,
            backgroundColor: corAtual,
            borderRadius: 2,
          },
        ]}
      />

      {/* Dente diagonal (45°) */}
      <View
        style={[
          estilos.dente,
          {
            width: tamanhoExterno + espessuraDente * 1.2,
            height: espessuraDente,
            backgroundColor: corAtual,
            borderRadius: 2,
            transform: [{ rotate: '45deg' }],
          },
        ]}
      />

      {/* Dente diagonal (-45°) */}
      <View
        style={[
          estilos.dente,
          {
            width: tamanhoExterno + espessuraDente * 1.2,
            height: espessuraDente,
            backgroundColor: corAtual,
            borderRadius: 2,
            transform: [{ rotate: '-45deg' }],
          },
        ]}
      />
    </Animated.View>
  );
};

const estilos = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  corpoEngrenagem: {
    position: 'absolute',
    backgroundColor: 'transparent',
  },
  furoCentral: {
    position: 'absolute',
    zIndex: 2,
  },
  dente: {
    position: 'absolute',
    zIndex: 1,
  },
});

export default IndicadorAtividade;

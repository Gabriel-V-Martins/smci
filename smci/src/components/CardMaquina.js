import React, { useEffect, useRef } from 'react';
import { View, Text, TouchableOpacity, Animated, StyleSheet } from 'react-native';
import estilosGlobais from '../styles/estilosGlobais';
import IndicadorAtividade from './IndicadorAtividade';
import BotaoLigaDesliga from './BotaoLigaDesliga';

// Componente personalizado que encapsula lógica e estilo de cada card de máquina
const CardMaquina = ({ maquina, aoAlternar, aoAbrirAlerta }) => {
  const { id, nome, status, ligada, alerta } = maquina;

  const animacaoOpacidade = useRef(new Animated.Value(0)).current;

  // Animação de entrada do card
  useEffect(() => {
    Animated.timing(animacaoOpacidade, {
      toValue: 1,
      duration: 400,
      useNativeDriver: true,
    }).start();
  }, []);

  // Retorna os estilos corretos conforme o status da máquina
  const obterEstiloStatus = () => {
    if (status === 'OPERANDO') {
      return {
        estiloTexto: estilosGlobais.statusOperando,
        estiloBolinha: estilosGlobais.bolinhaOperando,
        corIndicador: '#00A651',
      };
    }
    if (status === 'ALERTA') {
      return {
        estiloTexto: estilosGlobais.statusAlerta,
        estiloBolinha: estilosGlobais.bolinhaAlerta,
        corIndicador: '#F57C00',
      };
    }
    return {
      estiloTexto: estilosGlobais.statusParado,
      estiloBolinha: estilosGlobais.bolinhaParado,
      corIndicador: '#C62828',
    };
  };

  const estiloStatus = obterEstiloStatus();
  const temAlerta = alerta !== null;

  const estiloLargura = temAlerta ? { width: '100%', marginBottom: 0 } : {};

  const conteudoCard = (
    <Animated.View
      style={[
        estilosGlobais.cardMaquina,
        temAlerta && estilosGlobais.cardMaquinaAlerta,
        { opacity: animacaoOpacidade },
        estiloLargura,
      ]}
    >
      {/* Badge de alerta (!) no canto superior direito */}
      {temAlerta && (
        <View style={estilosLocais.badgeAlerta}>
          <Text style={estilosLocais.textoBadgeAlerta}>!</Text>
        </View>
      )}

      {/* Nome da máquina */}
      <Text style={estilosGlobais.nomeMaquina} numberOfLines={2}>
        {nome}
      </Text>

      {/* Linha de status com bolinha colorida */}
      <View style={estilosGlobais.linhaStatus}>
        <View style={[estilosGlobais.bolinhaStatus, estiloStatus.estiloBolinha]} />
        <Text style={[estilosGlobais.textoStatus, estiloStatus.estiloTexto]}>
          {status}
        </Text>
      </View>

      {/* Indicador de atividade (engrenagem girando) */}
      <View style={estilosGlobais.areaIndicador}>
        <IndicadorAtividade
          ativa={ligada}
          tamanho={26}
          cor={estiloStatus.corIndicador}
        />
      </View>

      {/* Switch liga/desliga */}
      <View style={estilosGlobais.linhaSwitch}>
        <Text style={estilosGlobais.labelSwitch}>Switch</Text>
        <BotaoLigaDesliga ligado={ligada} aoAlternar={() => aoAlternar(id)} />
      </View>
    </Animated.View>
  );

  // Card com alerta vira botão clicável para abrir o modal
  if (temAlerta) {
    return (
      <TouchableOpacity
        onPress={() => aoAbrirAlerta(maquina)}
        activeOpacity={0.9}
        style={{ width: '48%', marginBottom: 10 }}
      >
        {conteudoCard}
      </TouchableOpacity>
    );
  }

  return conteudoCard;
};

const estilosLocais = StyleSheet.create({
  badgeAlerta: {
    position: 'absolute',
    top: 8,
    right: 8,
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: '#F57C00',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1,
  },
  textoBadgeAlerta: {
    color: '#ffffff',
    fontSize: 12,
    fontWeight: 'bold',
  },
});

export default CardMaquina;

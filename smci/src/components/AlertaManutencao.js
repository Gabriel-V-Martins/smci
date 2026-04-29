import React, { useState, useRef, useEffect } from 'react';
import {
  View,
  Text,
  Modal,
  TextInput,
  TouchableOpacity,
  Animated,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import estilosGlobais from '../styles/estilosGlobais';

// Modal que aparece quando uma máquina tem alerta de manutenção
const AlertaManutencao = ({ visivel, maquina, aoConfirmar, aoIgnorar }) => {
  const [observacoes, setObservacoes] = useState('');
  const animacaoEscala = useRef(new Animated.Value(0.85)).current;
  const animacaoOpacidade = useRef(new Animated.Value(0)).current;

  // Anima a entrada/saída do modal
  useEffect(() => {
    if (visivel) {
      setObservacoes('');
      Animated.parallel([
        Animated.spring(animacaoEscala, {
          toValue: 1,
          tension: 70,
          friction: 8,
          useNativeDriver: true,
        }),
        Animated.timing(animacaoOpacidade, {
          toValue: 1,
          duration: 250,
          useNativeDriver: true,
        }),
      ]).start();
    } else {
      animacaoEscala.setValue(0.85);
      animacaoOpacidade.setValue(0);
    }
  }, [visivel]);

  const handleConfirmar = () => {
    aoConfirmar({ maquina, observacoes });
    setObservacoes('');
  };

  const handleIgnorar = () => {
    aoIgnorar();
    setObservacoes('');
  };

  if (!maquina) return null;

  return (
    <Modal visible={visivel} transparent animationType="none" statusBarTranslucent>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{ flex: 1 }}
      >
        <Animated.View
          style={[estilosGlobais.fundoModal, { opacity: animacaoOpacidade }]}
        >
          <Animated.View
            style={[
              estilosGlobais.caixaModal,
              { transform: [{ scale: animacaoEscala }] },
            ]}
          >
            {/* Ícone de aviso */}
            <View style={estilosGlobais.areaIconeModal}>
              <View style={estilosGlobais.fundoIconeModal}>
                <Text style={estilosGlobais.iconeModal}>⚠️</Text>
              </View>
            </View>

            {/* Título do alerta */}
            <Text style={estilosGlobais.tituloModal}>ALERTA DE MANUTENÇÃO</Text>

            {/* Descrição do problema */}
            <Text style={estilosGlobais.mensagemModal}>
              {maquina.alerta?.mensagem}
            </Text>

            {/* Campo de observações do supervisor */}
            <View style={estilosGlobais.caixaObservacoes}>
              <Text style={estilosGlobais.labelObservacoes}>
                Observações do Supervisor:
              </Text>
              <TextInput
                style={estilosGlobais.inputObservacoes}
                value={observacoes}
                onChangeText={setObservacoes}
                multiline
                placeholder="Digite suas observações..."
                placeholderTextColor="#aaaaaa"
              />
            </View>

            {/* Botões de ação */}
            <View style={estilosGlobais.linhaBotoesModal}>
              <TouchableOpacity
                style={estilosGlobais.botaoConfirmar}
                onPress={handleConfirmar}
              >
                <Text style={estilosGlobais.textoBotaoConfirmar}>
                  CONFIRMAR LEITURA
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={estilosGlobais.botaoIgnorar}
                onPress={handleIgnorar}
              >
                <Text style={estilosGlobais.textoBotaoIgnorar}>IGNORAR</Text>
              </TouchableOpacity>
            </View>
          </Animated.View>
        </Animated.View>
      </KeyboardAvoidingView>
    </Modal>
  );
};

export default AlertaManutencao;

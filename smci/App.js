
//=========================
// Gabriel Vinicius Martins
//=========================

import React, { useState, useCallback } from 'react';
import { View, Text, ScrollView, StatusBar, SafeAreaView } from 'react-native';

// Estilos importados do arquivo externo (não definidos aqui)
import estilosGlobais from './src/styles/estilosGlobais';

// Componentes personalizados
import CardMaquina from './src/components/CardMaquina';
import AlertaManutencao from './src/components/AlertaManutencao';

// Dados das máquinas e setores
import { SUPERVISOR, SETORES } from './src/data/dadosIndustriais';

export default function App() {
  const [setores, setSetores] = useState(SETORES);
  const [maquinaComAlerta, setMaquinaComAlerta] = useState(null);
  const [modalVisivel, setModalVisivel] = useState(false);

  // Alterna o estado ligada/desligada de uma máquina
  const aoAlternarMaquina = useCallback((idMaquina) => {
    setSetores((listaAnterior) =>
      listaAnterior.map((setor) => ({
        ...setor,
        maquinas: setor.maquinas.map((maq) => {
          if (maq.id !== idMaquina) return maq;
          const novoEstado = !maq.ligada;
          return {
            ...maq,
            ligada: novoEstado,
            status: novoEstado ? 'OPERANDO' : 'PARADO',
          };
        }),
      }))
    );
  }, []);

  // Abre o modal de alerta para a máquina clicada
  const aoAbrirAlerta = useCallback((maquina) => {
    setMaquinaComAlerta(maquina);
    setModalVisivel(true);
  }, []);

  // Confirma leitura do alerta e remove o alerta da máquina
  const aoConfirmarAlerta = useCallback(({ maquina }) => {
    setSetores((listaAnterior) =>
      listaAnterior.map((setor) => ({
        ...setor,
        maquinas: setor.maquinas.map((maq) =>
          maq.id === maquina.id ? { ...maq, alerta: null } : maq
        ),
      }))
    );
    setModalVisivel(false);
    setMaquinaComAlerta(null);
  }, []);

  // Fecha o modal sem fazer nenhuma ação
  const aoIgnorarAlerta = useCallback(() => {
    setModalVisivel(false);
    setMaquinaComAlerta(null);
  }, []);

  return (
    <SafeAreaView style={estilosGlobais.tela}>
      <StatusBar backgroundColor="#002660" barStyle="light-content" />

      {/* Cabeçalho com logo, título e supervisor */}
      <View style={estilosGlobais.cabecalho}>
        <View style={estilosGlobais.logoSenai}>
          <Text style={estilosGlobais.textoLogoSenai}>SENAI</Text>
        </View>
        <Text style={estilosGlobais.tituloCabecalho}>
          SMCI - Monitoramento Industrial
        </Text>
        <View style={estilosGlobais.caixaSupervisor}>
          <Text style={estilosGlobais.labelSupervisor}>Supervisor Ativo:</Text>
          <Text style={estilosGlobais.nomeSupervisor}>{SUPERVISOR.nome}</Text>
        </View>
      </View>

      {/* Lista de setores e máquinas em grade */}
      <ScrollView
        contentContainerStyle={estilosGlobais.conteudoScroll}
        showsVerticalScrollIndicator={false}
      >
        {setores.map((setor) => (
          <View key={setor.id} style={estilosGlobais.containerSetor}>
            <Text style={estilosGlobais.tituloSetor}>
              SETOR: {setor.nome}
            </Text>

            {/* Grade de 2 colunas com os cards das máquinas */}
            <View style={estilosGlobais.gradeSetor}>
              {setor.maquinas.map((maquina) => (
                <CardMaquina
                  key={maquina.id}
                  maquina={maquina}
                  aoAlternar={aoAlternarMaquina}
                  aoAbrirAlerta={aoAbrirAlerta}
                />
              ))}
            </View>
          </View>
        ))}
      </ScrollView>

      {/* Modal de alerta de manutenção */}
      <AlertaManutencao
        visivel={modalVisivel}
        maquina={maquinaComAlerta}
        aoConfirmar={aoConfirmarAlerta}
        aoIgnorar={aoIgnorarAlerta}
      />
    </SafeAreaView>
  );
}

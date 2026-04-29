import { StyleSheet } from 'react-native';

// Largura de cada card: divide a tela em 2 colunas com margens


const estilosGlobais = StyleSheet.create({
  // Tela principal
  tela: {
    flex: 1,
    backgroundColor: '#f0f0f0',
  },

  // Cabeçalho azul
  cabecalho: {
    backgroundColor: '#003B8E',
    paddingTop: 48,
    paddingBottom: 16,
    paddingHorizontal: 16,
  },
  logoSenai: {
    backgroundColor: '#ffffff',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 4,
    alignSelf: 'center',
    marginBottom: 8,
  },
  textoLogoSenai: {
    color: '#003B8E',
    fontSize: 22,
    fontWeight: 'bold',
    letterSpacing: 2,
  },
  tituloCabecalho: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  caixaSupervisor: {
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.5)',
    borderRadius: 6,
    paddingHorizontal: 12,
    paddingVertical: 6,
  },
  labelSupervisor: {
    color: 'rgba(255,255,255,0.7)',
    fontSize: 12,
  },
  nomeSupervisor: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },

  // Conteúdo da lista rolável
  conteudoScroll: {
    paddingBottom: 30,
  },

  // Cada setor (Usinagem, Pintura...)
  containerSetor: {
    marginTop: 16,
    marginHorizontal: 16,
  },
  tituloSetor: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#222222',
    marginBottom: 12,
    letterSpacing: 1,
  },
  gradeSetor: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },

  // Card de cada máquina
  cardMaquina: {
    width: '48%',
    backgroundColor: '#ffffff',
    borderRadius: 10,
    padding: 12,
    borderWidth: 1,
    borderColor: '#dddddd',
    elevation: 2,
    marginBottom: 10,
  },
  cardMaquinaAlerta: {
    borderColor: '#F57C00',
    borderWidth: 2,
  },
  nomeMaquina: {
    fontSize: 13,
    fontWeight: 'bold',
    color: '#222222',
    marginBottom: 4,
  },

  // Status da máquina
  linhaStatus: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  bolinhaStatus: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginRight: 4,
  },
  textoStatus: {
    fontSize: 12,
    fontWeight: '600',
  },
  statusOperando: {
    color: '#00A651',
  },
  statusParado: {
    color: '#C62828',
  },
  statusAlerta: {
    color: '#F57C00',
  },
  bolinhaOperando: {
    backgroundColor: '#00A651',
  },
  bolinhaParado: {
    backgroundColor: '#C62828',
  },
  bolinhaAlerta: {
    backgroundColor: '#F57C00',
  },

  // Área do indicador de atividade (engrenagem)
  areaIndicador: {
    alignItems: 'center',
    marginBottom: 8,
    minHeight: 30,
    justifyContent: 'center',
  },

  // Switch liga/desliga
  linhaSwitch: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 4,
  },
  labelSwitch: {
    color: '#666666',
    fontSize: 12,
  },

  // Fundo escuro do modal
  fundoModal: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },

  // Caixa branca do modal
  caixaModal: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    padding: 24,
    width: '100%',
    elevation: 10,
  },
  areaIconeModal: {
    alignItems: 'center',
    marginBottom: 16,
  },
  fundoIconeModal: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#FFF3E0',
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconeModal: {
    fontSize: 30,
  },
  tituloModal: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#222222',
    marginBottom: 12,
  },
  mensagemModal: {
    fontSize: 14,
    color: '#555555',
    textAlign: 'center',
    lineHeight: 22,
    marginBottom: 16,
  },

  // Campo de observações do supervisor
  caixaObservacoes: {
    borderWidth: 1.5,
    borderColor: '#003B8E',
    borderRadius: 6,
    paddingHorizontal: 12,
    paddingVertical: 8,
    marginBottom: 20,
  },
  labelObservacoes: {
    color: '#003B8E',
    fontSize: 12,
    marginBottom: 4,
  },
  inputObservacoes: {
    fontSize: 14,
    color: '#222222',
    minHeight: 40,
    textAlignVertical: 'top',
  },

  // Botões do modal
  linhaBotoesModal: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  botaoConfirmar: {
    flex: 1,
    backgroundColor: '#003B8E',
    borderRadius: 8,
    paddingVertical: 12,
    alignItems: 'center',
    marginRight: 6,
  },
  textoBotaoConfirmar: {
    color: '#ffffff',
    fontSize: 13,
    fontWeight: 'bold',
  },
  botaoIgnorar: {
    flex: 1,
    backgroundColor: '#dddddd',
    borderRadius: 8,
    paddingVertical: 12,
    alignItems: 'center',
    marginLeft: 6,
  },
  textoBotaoIgnorar: {
    color: '#555555',
    fontSize: 13,
    fontWeight: 'bold',
  },
});

export default estilosGlobais;

// Dados do supervisor ativo
export const SUPERVISOR = {
  nome: 'MARCOS SILVA',
  matricula: 'SUP-0047',
  turno: 'A',
};

// Lista de setores com suas máquinas
export const SETORES = [
  {
    id: 'usinagem',
    nome: 'USINAGEM',
    maquinas: [
      {
        id: 'T01',
        nome: 'Torno CNC - T01',
        status: 'OPERANDO',
        ligada: true,
        alerta: {
          mensagem: 'Máquina Torno CNC - T01 requer inspeção preventiva imediatamente. Verifique o nível de óleo.',
          tipo: 'manutencao',
        },
      },
      {
        id: 'F03',
        nome: 'Fresa Industrial - F03',
        status: 'OPERANDO',
        ligada: true,
        alerta: null,
      },
      {
        id: 'F02',
        nome: 'Fiasa Industrial - F02',
        status: 'OPERANDO',
        ligada: true,
        alerta: null,
      },
      {
        id: 'F05',
        nome: 'Liso Industrial - F05',
        status: 'OPERANDO',
        ligada: true,
        alerta: null,
      },
    ],
  },
  {
    id: 'pintura',
    nome: 'PINTURA',
    maquinas: [
      {
        id: 'TP01',
        nome: 'Torno Pintura - T01',
        status: 'PARADO',
        ligada: false,
        alerta: null,
      },
      {
        id: 'FP02',
        nome: 'Fresa Pintura - F02',
        status: 'OPERANDO',
        ligada: true,
        alerta: null,
      },
      {
        id: 'CP03',
        nome: 'Cabine Pintura - C03',
        status: 'OPERANDO',
        ligada: true,
        alerta: null,
      },
      {
        id: 'EP04',
        nome: 'Estufa Pintura - E04',
        status: 'ALERTA',
        ligada: true,
        alerta: {
          mensagem: 'Estufa E04 com temperatura acima do limite operacional. Verifique o sistema de ventilação.',
          tipo: 'temperatura',
        },
      },
    ],
  },
  {
    id: 'montagem',
    nome: 'MONTAGEM FINAL',
    maquinas: [
      {
        id: 'RM01',
        nome: 'Robô Montagem - R01',
        status: 'OPERANDO',
        ligada: true,
        alerta: null,
      },
      {
        id: 'PM02',
        nome: 'Prensa Hidráulica - P02',
        status: 'OPERANDO',
        ligada: true,
        alerta: null,
      },
      {
        id: 'EM03',
        nome: 'Esteira Montagem - E03',
        status: 'PARADO',
        ligada: false,
        alerta: {
          mensagem: 'Esteira E03 parou inesperadamente. Verificar sensor de presença na posição 7.',
          tipo: 'falha',
        },
      },
      {
        id: 'QC04',
        nome: 'Controle Qualidade - Q04',
        status: 'OPERANDO',
        ligada: true,
        alerta: null,
      },
    ],
  },
];

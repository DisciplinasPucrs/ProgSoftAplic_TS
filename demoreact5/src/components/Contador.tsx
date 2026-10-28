import { useReducer } from 'react';

interface ContadorEstado {
  contagem: number;
}

type AcaoTipo = { tipo: 'incremento'; valor: number } | { tipo: 'descremento' };

function reducer(estado: ContadorEstado, acao: AcaoTipo): ContadorEstado {
  switch (acao.tipo) {
    case 'incremento':
      return { contagem: estado.contagem + acao.valor };
    case 'descremento':
      return { contagem: estado.contagem - 1 };
    default:
      throw new Error('Tipo de ação inválida.');
  }
}

export function Contador() {
  const estadoInicial: ContadorEstado = { contagem: 0 };
  const [estado, dispatch] = useReducer(reducer, estadoInicial);

  const handleClickMais = () => {
    dispatch({ tipo: 'incremento', valor: 2 });
  };

  const handleClickMenos = () => {
    dispatch({ tipo: 'descremento' });
  };

  return (
    <>
      <button onClick={handleClickMais}>+</button>
      <button onClick={handleClickMenos}>-</button>
      <span>contagem = {estado.contagem}</span>
    </>
  );
}

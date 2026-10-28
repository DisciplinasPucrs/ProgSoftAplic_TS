import { useState } from 'react';

export function Contador() {
  const [contagem, setContagem] = useState(0);

  const handleClick = () => {
    setContagem((valorAtual) => valorAtual + 1);
  };

  return (
    <>
      <button onClick={handleClick}>Clique Aqui</button>
      <span>Clicou: {contagem}</span>
    </>
  );
}

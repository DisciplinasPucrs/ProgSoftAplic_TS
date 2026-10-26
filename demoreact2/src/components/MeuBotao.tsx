export function MeuBotao() {
  const handleClick = () => {
    alert('Clicou o botão!');
  };

  return (
    <button id="bt1" onClick={handleClick}>
      Clique Aqui
    </button>
  );
}

interface AloMundoColoridoProps {
  nome: string;
  cor?: string;
}

export function AloMundoColorido(props: Readonly<AloMundoColoridoProps>) {
  const nome = props.nome;
  const corTexto = props.cor ?? 'black';
  return <h1 style={{ color: corTexto }}>Alô, {nome}!</h1>;
}

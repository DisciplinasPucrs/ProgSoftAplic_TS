interface AloMundoProps {
  nome: string;
}

export function AloMundo(props: Readonly<AloMundoProps>) {
  const nome = props.nome;
  return <h1>Alô, {nome}!</h1>;
}

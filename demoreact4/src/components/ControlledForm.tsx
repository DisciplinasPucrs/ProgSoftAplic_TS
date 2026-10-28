import { useState, type ChangeEventHandler, type SubmitEventHandler } from 'react';

interface FormData {
  nome: string;
  jedi: boolean;
}

export function ControlledForm() {
  const [formData, setFormData] = useState<FormData>({ nome: '', jedi: false });

  const handleOnChange: ChangeEventHandler<HTMLInputElement> = (
    event
  ) => {
    setFormData({
      ...formData,
      nome: event.target.value,
    });
  };

  const handleOnChange2: React.ChangeEventHandler<HTMLInputElement> = (
    event
  ) => {
    setFormData({
      ...formData,
      jedi: event.target.checked,
    });
  };

  const handleSubmit: SubmitEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    console.log(`nome=${formData.nome}`);
    console.log(`jedi=${formData.jedi}`);
  };

  return (
    <>
      <h1>Controlled:</h1>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <label>
            <p>Nome:</p>
            <input
              type="text"
              name="nome"
              value={formData.nome}
              onChange={handleOnChange}
            />
          </label>
          <label>
            <p>Jedi:</p>
            <input
              type="checkbox"
              name="jedi"
              checked={formData.jedi}
              onChange={handleOnChange2}
            />
          </label>
        </fieldset>
        <button type="submit">Enviar</button>
      </form>
    </>
  );
}

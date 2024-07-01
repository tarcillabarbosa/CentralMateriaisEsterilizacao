'use client';

import { useState } from 'react';

const CadastroForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    nome: '',
    descricao: 'Material Cirúrgico', // valor padrão
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // try{
    //   const response = await fetch('http://localhost:8000/api/cadastro', {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify(formData),
    //   });

    //   if (response.ok) {
    //     const result = await response.json();
    //     onSubmit(result.message);
    //   } else {
    //     onSubmit('Erro ao realizar o cadastro.');
    //   }
    // } catch (error) {
    //   console.error('Erro ao cadastrar produto:', error);
    // }
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Nome:</label>
        <input
          type="text"
          name="nome"
          value={formData.nome}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Descrição:</label>
        <select
          name="descricao"
          value={formData.descricao}
          onChange={handleChange}
        >
          <option value="Material Cirúrgico">Material Cirúrgico</option>
          <option value="Material de Procedimento Padrão">
            Material de Procedimento Padrão
          </option>
          <option value="Material Descartável">Material Descartável</option>
        </select>
      </div>
      <button type="submit">Cadastrar</button>
    </form>
  );
};

export { CadastroForm };

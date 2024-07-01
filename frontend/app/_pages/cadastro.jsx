// import { useState } from 'react';
// import { CadastroForm } from '../_components/cadastroForm';
// import { EtapasHigienizacao } from '../_components/etapasHigienizacao';

// const Cadastro = () => {
//   const [message, setMessage] = useState('');

//   const handleSubmit = async (data) => {
//     const response = await fetch('/api/cadastro', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(data),
//     });

//     if (response.ok) {
//       setMessage('Cadastro realizado com sucesso!');
//     } else {
//       setMessage('Erro ao realizar o cadastro.');
//     }
//   };

//   return (
//     <div>
//       <h1>Cadastro de Objeto</h1>
//       <CadastroForm onSubmit={handleSubmit} />
//       {message && <p>{message}</p>}
//       <EtapasHigienizacao />
//     </div>
//   );
// };

// export { Cadastro };

import { useState } from 'react';
import { CadastroForm } from '../_components/cadastroForm';
import { EtapasHigienizacao } from '../_components/etapasHigienizacao';
import { Header } from '../_components/header';

const Cadastro = () => {
  const [message, setMessage] = useState('');

  const handleSubmit = async (data) => {
    try{
      const response = await fetch('http://localhost:8000/api/cadastro', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        const result = await response.json();
        setMessage('Cadastro realizado com sucesso!');
      } else {
        setMessage('Erro ao realizar o cadastro.');
      }
    } catch (error) {
      console.error('Erro ao cadastrar produto:', error);
      setMessage('Erro ao realizar o cadastro.');
    }
  };

  return (
    <div style={styles.container}>
      <Header />
      <main style={styles.main}>
        <h1>Cadastro de Objeto</h1>
        <CadastroForm onSubmit={handleSubmit} />
        {message && <p>{message}</p>}
        <EtapasHigienizacao />
      </main>
    </div>
  );
};

const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    lineHeight: 1.6,
  },
  main: {
    padding: '20px',
  },
};

export { Cadastro };

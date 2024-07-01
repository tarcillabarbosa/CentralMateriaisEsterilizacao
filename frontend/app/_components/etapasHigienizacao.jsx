'use client';

import { useState, useEffect } from 'react';

const etapas = [
  { nome: 'Lavagem com sabão neutro', duracao: 2 }, 
  { nome: 'Molho com Amônia Quartenária', duracao: 240 }, 
  { nome: 'Autoclave', duracao: 120 }, 
  { nome: 'Embalar', duracao: 5 }, 
];

const EtapasHigienizacao = () => {
  const [etapaAtual, setEtapaAtual] = useState(0);
  const [tempoRestante, setTempoRestante] = useState(etapas[0].duracao * 60); // segundos
  const [etapasConcluidas, setEtapasConcluidas] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setTempoRestante((prev) => {
        if (prev > 0) {
          return prev - 1;
        } else {
          return 0;
        }
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (tempoRestante === 0 && etapaAtual < etapas.length - 1) {
      setEtapasConcluidas((prev) => [...prev, etapas[etapaAtual].nome]);
      setEtapaAtual((prev) => prev + 1);
      setTempoRestante(etapas[etapaAtual + 1].duracao * 60);
    }
  }, [tempoRestante, etapaAtual]);

  const formatarTempo = (segundos) => {
    const minutos = Math.floor(segundos / 60);
    const segs = segundos % 60;
    return `${minutos}m ${segs}s`;
  };

  return (
    <div>
      <h2>Etapas de Higienização</h2>
      <ul>
        {etapas.map((etapa, index) => (
          <li
            key={index}
            style={{
              textDecoration: etapasConcluidas.includes(etapa.nome) ? 'line-through' : 'none',
              fontWeight: etapaAtual === index ? 'bold' : 'normal',
              color: etapaAtual === index ? 'blue' : 'black',
            }}
          >
            {etapa.nome} - {etapa.duracao} minutos
          </li>
        ))}
      </ul>
      <h3>Etapa Atual: <span style={{fontWeight: 'bold', color: 'blue'}}>{etapas[etapaAtual].nome}</span></h3>
      <p>Tempo Restante: {formatarTempo(tempoRestante)}</p>
    </div>
  );
};

export { EtapasHigienizacao };

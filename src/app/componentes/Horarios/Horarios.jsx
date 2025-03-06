import React from "react";
import styles from './Horarios.module.css';

const HorariosFuncionamento = () => {
  return (
    <div id="horarios" className={styles.container_principal}>
      <div className={styles.container}>
        <h1 className={styles.titulo}>HORÁRIOS DE FUNCIONAMENTO</h1>
        <div className={styles.tabela}>
          {[
            { dia: "SEGUNDA", horario: "FECHADO", fechado: true },
            { dia: "TERÇA", horario: "09:00 - 22:00" },
            { dia: "QUARTA", horario: "09:00 - 22:00" },
            { dia: "QUINTA", horario: "09:00 - 22:00" },
            { dia: "SEXTA", horario: "09:00 - 22:00" },
            { dia: "SÁBADO", horario: "12:00 - 22:00" },
            { dia: "DOMINGO", horario: "12:00 - 22:00" },
          ].map(({ dia, horario, fechado }, index) => (
            <div key={index} className={styles.container_dia}>
              <span className={styles.dia}>{dia}</span>
              <span className={styles.linha}></span>
              <span className={fechado ? styles.fechado : styles.horario}>{horario}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HorariosFuncionamento;

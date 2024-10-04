import React from 'react';
import { PieChart, Pie, Cell } from 'recharts';
import "../assets/styles/cercle.css"


const score = 0.3;

function Cercle() {
  // Préparer les données pour le graphique Pie
  const data = [
    { name: 'Score', value: score * 100 },    // Partie représentant le score
    { name: 'Restant', value: (1 - score) * 100 } // Partie représentant le reste (100% - score)
  ];

  // Couleurs pour le score et le reste
  const COLORS = ['#FF0000', '#F0F0F0']; // Rouge pour le score, gris clair pour le reste

  return (
    <div className='cercle'>
      {/* Titre positionné en haut à gauche */}
      <h2>Score</h2>

      {/* Graphique demi-cercle */}
      <PieChart width={200} height={150}>
        <Pie
          data={data}
          cx="50%"
          cy="100%"          /* Centre le cercle en bas du conteneur */
          startAngle={180}   /* Commence à gauche */
          endAngle={0}       /* Termine à droite pour un demi-cercle */
          innerRadius={70}    /* Rayon interne */
          outerRadius={80}    /* Rayon externe */
          dataKey="value"
          cornerRadius={10}  /* Arrondir les bords de l'arc */
          stroke="none"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>

      {/* Texte centré dans le demi-cercle */}
      <div className='texte'>
        <span style={{ fontSize: '24px', fontWeight: 'bold' }}>{`${score * 100}%`}</span>
        <br />
        <span style={{ fontSize: '14px', fontWeight: 'normal', color: '#888' }}>de votre objectif</span>
      </div>
    </div>
  );
}

export default Cercle;

import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

// Données de l'utilisateur avec userId: 12
const userActivityData = [
  {
    "day": "2020-07-01",
    "kilogram": 70,
    "calories": 240
    },
    {
    "day": "2020-07-02",
    "kilogram": 69,
    "calories": 220
    },
    {
    "day": "2020-07-03",
    "kilogram": 70,
    "calories": 280
    },
    {
    "day": "2020-07-04",
    "kilogram": 70,
    "calories": 500
    },
    {
    "day": "2020-07-05",
    "kilogram": 69,
    "calories": 160
    },
    {
    "day": "2020-07-06",
    "kilogram": 69,
    "calories": 162
    },
    {
    "day": "2020-07-07",
    "kilogram": 69,
    "calories": 390
    }
];

function Barre() {
  return (
    <div style={{ width: '100%', height: 400 }}>
      {/* Conteneur du titre et de la légende */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px' }}>
        {/* Titre positionné à gauche */}
        <h2 style={{ margin: 0 }}>Activité quotidienne</h2>
      </div>
      <ResponsiveContainer width="100%" height={400}>
      <BarChart
        data={userActivityData}
        margin={{
          top: 20, right: 30, left: 20, bottom: 5,
        }}
        barGap={5}  // Ajoute un espacement de 5px entre les barres
      >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            dataKey="day"
            tickFormatter={(day) => {
              const date = new Date(day);
              const dayOfMonth = String(date.getDate()).padStart(2, '0');
              return dayOfMonth;
            }}
          />
          <YAxis orientation="right"/>
          <Tooltip />
          <Legend verticalAlign="top" align="right"  wrapperStyle={{ padding: '10px' }} />
          {/* Barre pour le poids en kilogrammes */}
          <Bar dataKey="kilogram" fill="#282D30" name="Poids (kg)"  radius={[10, 10, 0, 0]} barSize={15}/>
          {/* Barre pour les calories brûlées */}
          <Bar dataKey="calories" fill="#E60000" name="Calories brûlées (KCal)"  radius={[10, 10, 0, 0]} barSize={15}/>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default Barre;
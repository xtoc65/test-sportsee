import React from 'react';
import { LineChart, Line, XAxis, Tooltip, ResponsiveContainer } from 'recharts';
import "../assets/styles/courbes.css";

const data = [
  { "day": 1, "sessionLength": 30 },
  { "day": 2, "sessionLength": 40 },
  { "day": 3, "sessionLength": 50 },
  { "day": 4, "sessionLength": 30 },
  { "day": 5, "sessionLength": 30 },
  { "day": 6, "sessionLength": 50 },
  { "day": 7, "sessionLength": 50 }
];

// Correspondance pour les jours de la semaine
const daysOfWeek = ['L', 'M', 'M', 'J', 'V', 'S', 'D'];

function CustomTooltip({ payload, active }) {
  if (active && payload && payload.length) {
    return (
      <div style={{ backgroundColor: 'white', padding: '5px 10px', borderRadius: '5px' }}>
        <p>{`${payload[0].value} min`}</p>
      </div>
    );
  }
  return null;
}

function Courbe() {
  return (
    <div className='courbe'>
      <h2>
        Durée moyenne des sessions
      </h2>

      <ResponsiveContainer width="100%" height="90%">
        <LineChart data={data}>
          <XAxis
            dataKey="day"
            tickFormatter={(day) => daysOfWeek[day - 1]}
            tick={{ fill: 'white' }}
            axisLine={false}
            tickLine={false}
            padding={{ left: 5, right: 5 }} // Ajoute la marge de 5px avant L et après D
          />
          <Tooltip content={<CustomTooltip />} />
          <Line
            type="monotone"
            dataKey="sessionLength"
            stroke="white"
            strokeWidth={2}
            dot={{ r: 5, stroke: 'white', strokeWidth: 2, fill: 'white' }} // Points sur la courbe
            activeDot={(props) => (
              <circle
                cx={props.cx}
                cy={props.cy}
                r={8}
                stroke="darkgray"
                strokeWidth={2}
                fill="darkgray"
              />
            )} // Point actif uniquement sur le point survolé
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default Courbe;

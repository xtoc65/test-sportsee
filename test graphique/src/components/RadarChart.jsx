import { ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, Radar } from 'recharts';
import "../assets/styles/radar.css"

const rawData = [
  {
    "kind": {
      "1": "Cardio",
      "2": "Énergie",
      "3": "Endurance",
      "4": "Force",
      "5": "Vitesse",
      "6": "Intensité"
    }
  },
  {
    "value": 200,
    "kind": 1
  },
  {
    "value": 240,
    "kind": 2
  },
  {
    "value": 80,
    "kind": 3
  },
  {
    "value": 80,
    "kind": 4
  },
  {
    "value": 220,
    "kind": 5
  },
  {
    "value": 110,
    "kind": 6
  }
];

// Transformation des données pour remplacer les "kind" numériques par leur nom associé
const kindMapping = rawData[0].kind;
const data = rawData.slice(1).map(item => ({
  ...item,
  kind: kindMapping[item.kind] // Remplacer le numéro par le texte correspondant
}));

function RadarCharts() {
  return (
    <div className='radar'>
      <ResponsiveContainer width="100%" height="80%">
        <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
          <PolarGrid radialLines={false} stroke="#fff" />
          <PolarAngleAxis dataKey="kind" stroke="#fff" tickSize={10} />
          <Radar name="Performance" dataKey="value" stroke="red" fill="red" fillOpacity={0.6} />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default RadarCharts;

import Calorie from "../assets/calorie.png"
import Proteines from "../assets/protein.png"
import Glucide from "../assets/glucides.png"
import Lipides from "../assets/lipides.png"
import "../assets/styles/information.css"

const Data = [
    {
      "keyData": {
        "calorieCount": 2500,
        "proteinCount": 90,
        "carbohydrateCount": 150,
        "lipidCount": 120
      }
    }
];

function Information() {
    const { calorieCount, proteinCount, carbohydrateCount, lipidCount } = Data[0].keyData;

    return (
        <div className="info">
            <div className="info-item">
               <img src={Calorie} alt="Logo Calorie" />
                <div>
                    <p>{calorieCount}KCal</p> 
                    <h5>Calories</h5>
                </div>
            </div>
            <div className="info-item">
                <img src={Proteines} alt="Logo Proteines" />
                <div>
                    <p>{proteinCount}g</p> 
                    <h5>Proteines</h5>
                </div>
            </div>
            <div className="info-item">
                <img src={Glucide} alt="Logo Glucide" />
                <div>
                    <p>{carbohydrateCount}g</p>
                    <h5>Glucides</h5>
                </div>
            </div>
            <div className="info-item">
                <img src={Lipides} alt="Logo Lipides" />
                <div>
                    <p>{lipidCount}g</p>
                    <h5>Lipides</h5>
                </div>
            </div>
        </div>
    )
}

export default Information
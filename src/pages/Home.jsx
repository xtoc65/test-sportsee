import { useEffect, useState } from 'react';
import Barre from "../components/Barre";
import Courbe from "../components/Courbe"
import RadarChart from "../components/RadarChart";
import Cercle from "../components/Cercle";
import Information from "../components/Information"
import Aside from "../components/Aside";
import "../assets/styles/home.css"

function Home() {
    const [userActivityData, modifierUserActivity] = useState([1]) 
    function handleUserActivity(activity){
        modifierUserActivity(activity.data.sessions)
    }
    function handleError(){
        console.log(("Erreur"));
    }
    useEffect(() => {
    fetch("http://localhost:3000/user/18/activity")
        .then(response => response.json())
        .then(handleUserActivity)
        .catch(handleError) 
    },[])
    return (
        <div>
            <Aside />
            <main>
                <div>
                    <h1>Bonjour Toto</h1>
                    <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
                </div>
                <section>
                    <article>
                        <div className="chart full-width">
                        <Barre activities={userActivityData}/>
                        </div>
                        {/* Conteneur pour les trois graphiques sur la même ligne */}
                        <div className="charts-row">
                        <div className="chart">
                            <Courbe />
                        </div>
                        <div className="chart">
                            <RadarChart />
                        </div>
                        <div className="chart">
                            <Cercle />
                        </div>
                        </div>
                    </article>
                    {/* Informations supplémentaires */}
                    <Information className="information" />
                </section>   
            </main>
        </div>
    )
}

export default Home
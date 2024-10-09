import { useEffect, useState } from 'react';
import Barre from "../components/Barre";
import Courbe from "../components/Courbe"
import RadarChart from "../components/RadarChart";
import Cercle from "../components/Cercle";
import Information from "../components/Information"
import Aside from "../components/Aside";
import "../assets/styles/home.css"

function Home() {
    const [userActivityData, modifierUserActivity] = useState([]) 

    useEffect(() => {
    fetch("http://localhost:3000/user/18/activity")
        .then(response => response.json())
        .then((activity) => {
            modifierUserActivity(activity.data.sessions)
        })
    },[])

    const [userAverageData, modifierUserAverage] = useState([]) 

    useEffect(() => {
    fetch("http://localhost:3000/user/18/average-sessions")
        .then(response => response.json())
        .then((average) => {
            modifierUserAverage(average.data.sessions)
        })
    },[])

    const [userPerformanceData, modifierUserPerformance] = useState([]) 

    useEffect(() => {
    fetch("http://localhost:3000/user/18/performance")
        .then(response => response.json())
        .then((performance) => {
            modifierUserPerformance(performance.data)
        })
    },[])

    const [userScoreData, modifierUserScore] = useState([]) 

    useEffect(() => {
    fetch("http://localhost:3000/user/18")
        .then(response => response.json())
        .then((score) => {
            modifierUserScore(score.data.score)
        })
    },[])

    const [userInformationData, modifierUserInformation] = useState([1]) 

    useEffect(() => {
    fetch("http://localhost:3000/user/18")
        .then(response => response.json())
        .then((score) => {
            modifierUserInformation(score.data.keyData)
        })
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
                                <Courbe average={userAverageData}/>
                            </div>
                            <div className="chart">
                                {userPerformanceData.data && <RadarChart performance={userPerformanceData}/>}
                            </div>
                            <div className="chart">
                                <Cercle score={userScoreData}/>
                            </div>
                        </div>
                    </article>
                    {/* Informations supplémentaires */}
                    <Information className="information" information={userInformationData}/>
                </section>   
            </main>
        </div>
    )
}

export default Home
import Barre from "../components/Barre";
import Courbe from "../components/Courbe"
import RadarChart from "../components/RadarChart";
import Cercle from "../components/Cercle";
import Information from "../components/Information"
import Aside from "../components/Aside";
import "../assets/styles/home.css"

function Home() {
    return (
        <div>
            <Aside />
            <main>
                <div>
                    <h1>Bonjour</h1>
                    <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
                </div>
                <section>
                    <article>
                        <div className="chart full-width">
                        <Barre />
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
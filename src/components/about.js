import React from 'react';
import me from './logos/meTemp.png'
import './styles.css'

const about = () => {
        return(
    <section class="page-section bg-primary text-white mb-0" id="about">
            <div class="container">
                <h2 class="page-section-heading text-center text-uppercase text-white">About</h2>
                <div class="divider-custom divider-light">
                    <div class="divider-custom-line"></div>
                    <div class="divider-custom-line"></div>
                </div>
                <div class="row">
                    <div class=""><p class="lead">Footcentage uses poisson distribution to determine the probability of football games.
                     Based on data from the previous season aswell as the current ongoing season, I attempt to predict the outcome of upcoming matches,
                     in addition the exact score. The calculations currently are based on home/away goals, in the future i would like to expand the algorithm
                     using weights for certain paramaters like shoots on target and possession of the ball as well as players data to get better understanding of the strength of a team.</p></div>
                </div>
                <br></br>
                <h1 class="text-center text-uppercase text-white">The table</h1>
                <div class="divider-custom divider-light">
                    <div class="divider-custom-line"></div>
                    <div class="divider-custom-line"></div>
                </div>
                <div class="text-center">
                    <div><p class="lead">Winning chances is the sum of all possible probabilties of a Home/Away team to win.</p></div>
                    <div><p class="lead">The Draw chances is the sum of all possible probabilties of a Draw.</p></div>
                    <div><p class="lead">The most likely result is the max probability from the goal probability matrix.</p></div>
                    <div><p class="lead">At times the most likely result could be a draw while the final match prediction would predict a win
                                         to a certain team, this is due to the sum of all possible winning probabilities being greater than the sum
                                        of all possible draws.</p></div>
                </div>
                <br></br>
                <h1 class="text-center text-uppercase text-white">About me</h1>
                <div class="divider-custom divider-light">
                    <div class="divider-custom-line"></div>
                    <div class="divider-custom-line"></div>
                </div>
                <div class="text-center">
                    <div><p class="lead">My name is Daniel Larionov, I am a software engineering graduate. Ive built this web-project to enrich my coding ability
                                        during quarantine and practice full-stack programing.</p></div>
                    <div><p class="lead"><img alt='me' src={me}/></p></div>
                </div>
            </div>
    </section>
    );
}
export default about;

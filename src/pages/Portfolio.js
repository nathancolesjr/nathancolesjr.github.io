import React from 'react'
import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css'

function Portfolio() {
    return (
        <div>
                <Video video="https://youtu.be/j2EI0QqPM9o" name="Nathan Coles Jr | 2023 Director's Reel" featured={true}/>
                <div className='portfolioGrid'>
                <Video video="https://youtu.be/9O6WXdV6O6w" name="ItsKaz - Sierra"/>
                <Video video="https://youtu.be/bxGatYWD9SM" name="ItsKaz - Pretty To Me"/>
                <Video video="https://youtu.be/9E1QpZEMc1Y" name="zvch - Element (OG Version)"/>
                <Video video="https://youtu.be/8lIFKY3rLbo" name="zvch - Focus"/>
                <Video video="https://youtu.be/7k33OA0bAcM" name="weluvmax - Hooters"/>
                <Video video="https://youtu.be/pBd6fgJe7vs" name="ItsKaz - & WakeUpWill - Rev It!"/>
                <Video video="https://youtu.be/HiGa4kSyqVI" name="g3urin - Medusa"/>
                <Video video="https://youtu.be/LfYk-rbA9KE" name="ItsKaz - Tequila Onna Island"/>
                <Video video="https://youtu.be/Zv48hEFqWA4" name="zvch - Polur feat. g3urin"/>
                <Video video="xCTjTPsmhCI" name="zvch - Element"/>
                <Video video="e2Atkthjg2o" name="ItsKaz - Sorry 4 It"/>
                <Video video="ubUTJd881mw" name="weluvmax - 30 Coats"/>
                <Video video="MVB5nhlEE_g" name="ItsKaz - Die Nvr"/>
                <Video video="PE6oYeqBcdE" name="weluvmax - Red Mini Coop"/>
                <Video video="sDSR_v_K8cE" name="Doxycodone - London Bridges"/>
                <Video video="Ehji3GWqdPk" name="2019 - 2022 Music Video Reel"/>
                <Video video="DqKvuDxJsqQ" name="weluvmax - Lucky Freestyle"/>
                <Video video="5wasJ5kpFvU" name="weluvmax - REDREDRED"/>
                <Video video="wu6dyASmPyo" name="Will Metty - Nemesis"/>
                <Video video="Z9HmSaJ68G8" name="NyTheKid - Down Bad"/>
                <Video video="VEtgpuTourY" name="weluvmax & Doxycodone (feat. Will Metty) - DRIP DRIP"/>
                <Video video="ichVAc6HOcE" name="Will Metty & Doxycodone - Slide Thru"/>
                <Video video="HLfFhD88JMo" name="Will Metty & Doxycodone - Nonsensical Rap"/>
                <Video video="3fi1sDTPlIo" name="GoddessK - Big Boss"/>
                <Video video="R4_uOy4dqhI" name="CTP $coop & PBN Majji - Never Fail"/>
                <Video video="it9mq8rlKAE" name="NyTheKid - Style"/>
                <Video video="xOLbhg9JFoI" name="NyTheKid - Wookies"/>
                <Video video="YXAUqchVDvM" name="I Need Summo"/>
                <Video video="Twwrqpxh72k" name="Cash A Check (feat. CTP $coop) - PBN Majji"/>
                <Video video="DiTSQDdMAn0" name="DXEAM - Kickstarter"/>
                <Video video="T0y5K0nHB8E" name="Intro - MariFromDa2"/>
            </div>
        </div>
    )

    function Video(props) {
        var video = props.video.replace('https://youtu.be/','');
        return (
            <div className='videoBox'>
                <div className='videoBoxContainer'>
                    {/* <iframe width="560" height="315" src={"https://www.youtube.com/embed/" + video} title="YouTube video player" 
                    frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    allowfullscreen></iframe> */}
                    <LiteYouTubeEmbed id={video} title={props.name}/>
                    <span>{props.name}</span>
                </div>
            </div>
        )
    }

}

export default Portfolio

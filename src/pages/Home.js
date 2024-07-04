import React from 'react'
import '../styles/Home.css';
import Portfolio from './Portfolio';

function Home() {
    return (
        <div className='home'>
            <div className='main'>
                {/* <div className='header'>
                    <h1>Nathan Coles Jr.</h1>
                    <h2>Music Video Director.</h2>
                </div> */}
                <Portfolio/>
                {/* <div className='content'>
                    <div className='newvideo'>
                        <h3>Newest Video</h3>
                        <iframe width="250" height="250" src="https://www.youtube.com/embed/PE6oYeqBcdE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    </div>
                </div> */}
            </div>
        </div>
    )
}

export default Home

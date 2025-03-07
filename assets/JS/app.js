// React import
import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

// React komponenta koja renderira sadržaj
function App() {
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToBottom = () => {
        window.scrollTo({
            top: document.documentElement.scrollHeight,
            behavior: 'smooth',
        });
    };

    return (
        <main>
            <section className="intro">
                <div className="overlay-img"></div>
                <img
                    src="/assets/img/index-front-page.png"
                    className="ship"
                    loading="lazy"
                    alt="Yolo ship"
                    style={{ transform: `translateY(${scrollY * 0.5}px)` }}
                />
                <div className="intro-anim">
                    <div className="intro-title">
                        <h1>Live your dream, Escape the routine.</h1>
                        <button className="intro-btn">START EXPLORING</button>
                    </div>

                    <div className="intro-img">
                        <img
                            src="/assets/img/Scroller.png"
                            alt="scroller"
                            width="15.5px"
                            height="26px"
                            onClick={scrollToBottom}  // Klikom na scroller prebacuje na dno stranice
                            style={{ cursor: 'pointer' }} // Promjena kursora
                        />
                        <button className="intro-img-btn">
                            <img
                                src="/assets/img/index-front-page.png"
                                loading="lazy"
                                alt="Inquire button"
                            />
                            INQUIRE NOW
                        </button>
                    </div>
                </div>
            </section>

        </main>



    );
}

// Renderiranje React aplikacije
ReactDOM.render(<App />, document.getElementById('root'));

// Skrolanje na dno stranice putem JS (ako nije u Reactu)
/*document.getElementById('scroller').addEventListener('click', function () {
    window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: 'smooth',
    });
});*/





/*window.addEventListener('scroll', function () {
const height = window.scrollY;

document.querySelector('.intro').style.transform = `translateY(${height * 1})px)`;
document.querySelector('.intro-title').style.transform = `translateY(${height * 0.5}px)`;

const offAnimate = document.querySelector(".about-yolo-sec");

setTimeout(() => {
    offAnimate.classList.add('animate-me');
}, 400);



});*/
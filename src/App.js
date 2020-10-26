import React, { useState } from "react";
import "./App.css";
import sai from "./images/sai.jpg";
import krishna from "./images/krishna.jpg";
import iscon from "./images/iscon.jpg";
import shiv from "./images/shiv.jpg";
import shiva1 from "./images/shiva1.jpeg";
import hanuman from "./images/hanuman.jpg";
import ganesha from "./images/ganesha.jpg";
import kashi from "./images/kashi.jpg";

function App() {
  const [onLink, setOnLink] = useState(null);
  const viedoLinks = {
    0: {
      iframe: false,
      img_url: sai,
      alt: "sai",
      link: "https://www.sai.org.in/en/sai-video-popup",
      footer_text: "શ્રી સાંઇબાબા સંસ્થા ટ્રસ્ટ लाइव दर्शन",
    },
    1: {
      iframe: false,
      img_url: krishna,
      alt: "krishna",
      link: "https://www.ranchhodraiji.org/LiveDarshan",
      footer_text: "શ્રી રણછોડરાયજી મંદિર लाइव दर्शन",
    },
    2: {
      iframe: true,
      img_url: iscon,
      alt: "iscon",
      link: "https://www.youtube.com/embed/mynfxVCO6EM?autoplay=1",
      footer_text: "इस्कॉन मंदिर वृंदावन से लाइव दर्शन",
    },
    3: {
      iframe: true,
      img_url: shiv,
      alt: "shiv",
      link: "https://www.youtube.com/embed/qaGdIUmwHuw?autoplay=1",
      footer_text: "श्री सोमनाथ मंदिर के लाइव दर्शन",
    },
    4: {
      iframe: true,
      img_url: hanuman,
      alt: "hanuman",
      link: "https://www.youtube.com/embed/Dgddzqdhrqs?autoplay=1",
      footer_text: "શ્રી કષ્ટભંજન દેવ મંદિર लाइव दर्शन",
    },
    5: {
      iframe: true,
      img_url: ganesha,
      alt: "ganesha",
      link: "https://www.youtube.com/embed/C41rCWMzql4?autoplay=1",
      footer_text: "सिद्धिविनायक मंदिर के लाइव दर्शन",
    },
    6: {
      iframe: true,
      img_url: shiva1,
      alt: "shiva1",
      link: "https://www.youtube.com/embed/cMvZDohNMJs?autoplay=1",
      footer_text: "महाकालेश्वर मंदिर के लाइव दर्शन",
    },
    7: {
      iframe: true,
      img_url: kashi,
      alt: "kashi",
      link: "https://www.youtube.com/embed/LJOkBTnr-DI?autoplay=1",
      footer_text: "श्री काशी विश्वनाथ मंदिर से लाइव दर्शन",
    },
  };

  const onRedirect = (viedo) => {
    if (viedo.iframe) {
      window.scrollTo(0, 0);
      setOnLink(viedo);
    } else {
      window.location.href = viedo.link;
    }
  };

  return (
    <>
      <header className="root header">
        <div className="live-button">Live</div>
      </header>
      <div className="header__text">
        {/* eslint-disable-next-line jsx-a11y/no-distracting-elements */}
        <marquee>જીવંત દર્શન જોવા માટે છબીઓ પર ક્લિક કરો</marquee>
      </div>
      <section>
        {onLink && (
          <iframe
            title="hi"
            width="100%"
            height="274"
            src={onLink.link}
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        )}
        <ul className="grid-container">
          {Object.values(viedoLinks).map((viedo) => (
            <li>
              <img
                src={viedo.img_url}
                alt={viedo.alt}
                onClick={() => onRedirect(viedo)}
              />
              <span>{viedo.footer_text}</span>
            </li>
          ))}
        </ul>
      </section>
      <footer className="root">
        <a href="https://wa.me/+918866669302?text=Hi,Mehul">
          Contact me : +91 88666-69302
        </a>
      </footer>
    </>
  );
}

export default App;

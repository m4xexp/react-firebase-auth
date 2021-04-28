import React from "react";
import "../static/SCSS/home_style.scss";
import moonBg from "../static/Images/moon.png";
import starsBg from "../static/Images/stars.png";
import mountainBehind from "../static/Images/mountains_behind.png";
import mountainFront from "../static/Images/mountains_front.png";

function Home() {
  const [ofset, setOfset] = React.useState();

  const handleScroll = () => {
    setOfset(window.pageYOffset);
  };

  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <nav className="nav-bar" style={{ top: ofset * 0.5 + "px" }}>
        <a href="#logo" className="logo">
          TheMoon
        </a>
        <ul>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="/signup">Login</a>
          </li>
        </ul>
      </nav>
      <section className="paralax">
        <img
          src={starsBg}
          alt="star-img"
          id="star"
          style={{ left: ofset * 0.25 + "px" }}
        />
        <img
          src={moonBg}
          alt="moon-img"
          id="moon"
          style={{ top: ofset * 1.05 + "px" }}
        />
        <img
          src={mountainBehind}
          alt="mountains-behind-img"
          id="mountains-behind"
          style={{ top: ofset * 0.5 + "px" }}
        />
        <h2
          id="text-themoon"
          style={{
            marginRight: ofset * 4 + "px",
            marginTop: ofset * 1.5 + "px",
          }}
        >
          To The Moon
        </h2>
        <a href="#explore" id="btn" style={{ marginTop: ofset * 1.5 + "px" }}>
          Explore
        </a>
        <img
          src={mountainFront}
          alt="mountains-front-img"
          id="mountains-front"
          style={{ top: ofset * 0 + "px" }}
        />
      </section>
      <div className="lorem">
        <h1>The Moon</h1>
        <p>
          The <strong>Moon</strong> is Earth's only proper natural satellite. At
          one-quarter the diameter of Earth (comparable to the width of
          Australia),[13] it is the largest natural satellite in the Solar
          System relative to the size of its planet,[f] and the fifth largest
          satellite in the Solar System overall (larger than any dwarf planet).
          Orbiting Earth at an average lunar distance of 384,400 km (238,900
          mi),[14] or about 30 times Earth's diameter, its gravitational
          influence is the main driver of Earth's tides and slightly lengthens
          Earth's day. The Moon is classified as a planetary-mass object and a
          differentiated rocky body, and lacks any significant atmosphere,
          hydrosphere, or magnetic field. Its surface gravity is about one-sixth
          of Earth's (0.1654 g); Jupiter's moon Io is the only satellite in the
          Solar System known to have a higher surface gravity and density.{" "}
          <br /> <br /> The Moon's orbit around Earth has a sidereal period of
          27.3 days, and a synodic period of 29.5 days. The synodic period
          drives its lunar phases, which form the basis for the months of a
          lunar calendar. The Moon is tidally locked to Earth, which means that
          the length of a full rotation of the Moon on its own axis (a lunar
          day) is the same as the synodic period, resulting in its same side
          (the near side) always facing Earth. That said, 59% of the total lunar
          surface can be seen from Earth through shifts in perspective (its
          libration).[15] <br /> <br /> The near side of the Moon is marked by
          dark volcanic maria ("seas"), which fill the spaces between bright
          ancient crustal highlands and prominent impact craters. The lunar
          surface is relatively non-reflective, with a reflectance just slightly
          brighter than that of worn asphalt. However, because it reflects
          direct sunlight, is contrasted by the relatively dark sky, and has a
          large apparent size when viewed from Earth, the Moon is the brightest
          celestial object in Earth's sky after the Sun. The Moon's apparent
          size is nearly the same as that of the Sun, allowing it to cover the
          Sun almost completely during a total solar eclipse. <br /> <br /> The
          first manmade object to reach the Moon was the Soviet Union's Luna 2
          uncrewed spacecraft in 1959; this was followed by the first successful
          soft landing by Luna 9 in 1966. The only human lunar missions to date
          have been those of the United States' NASA Apollo program, which
          conducted the first crewed lunar orbiting mission with Apollo 8 in
          1968. Beginning with Apollo 11, six human landings took place between
          1969 and 1972. These and later uncrewed missions returned lunar rocks
          which have been used to develop a detailed geological understanding of
          the Moon's origins, internal structure, and subsequent history; the
          most widely accepted origin explanation posits that the Moon formed
          about 4.51 billion years ago, not long after Earth, out of the debris
          from a giant impact between the planet and a hypothesized Mars-sized
          body called Theia. <br />
          <br /> Both the Moon's natural prominence in the earthly sky and its
          regular cycle of phases as seen from Earth have provided cultural
          references and influences for human societies and cultures throughout
          history. Such cultural influences can be found in language, calendar
          systems, art, and mythology.
        </p>
      </div>
    </>
  );
}

export default Home;

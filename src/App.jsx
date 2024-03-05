import { useState } from "react";
import { useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [quoteInfo, setQuoteInfo] = useState({});
  const [randomGradient, setRandomGradient] = useState({});

  const getRandomGradientClass = () => {
    const gradientClasses = [
      "primary",
      "secondary",
      "success",
      "danger",
      "warning",
      "info",
    ];
    const randomIndex = Math.floor(Math.random() * gradientClasses.length);

    setRandomGradient(gradientClasses[randomIndex]);
  };

  const getQuote = () => {
    fetch("https://api.quotable.io/random")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setQuoteInfo({
          text: data.content,
          author: data.author,
        });
      })
      .catch((error) => {
        console.log("Error fetching", error);
      });
  };

  const handleClick = () => {
    getQuote();
    getRandomGradientClass();
  };
  useEffect(() => {
    getQuote();
    getRandomGradientClass();
  }, []);

  return (
    <>
      <div
        className={`row align-items-center bg-${randomGradient}`}
        style={{ height: "100vh" }}
      >
        <div className="col-sm-10 mb-3 mb-sm-0 mx-auto">
          <div id="quote-box" className="card bg-light">
            <div className="card-body">
              <p
                style={{ fontSize: "32px" }}
                id="text"
                className={`card-text text-${randomGradient}`}
              >
                <span>
                  <i className="fa fa-quote-left"></i>{" "}
                </span>
                {quoteInfo.text}
              </p>
              <h5 id="author" className={`card-text text-${randomGradient}`}>
                -{quoteInfo.author}
              </h5>
            </div>
            <div className="row align-top justify-content-evenly">
              <div className="col-4 text-center">
                <button
                  type="button"
                  className={`btn twitter-logo bg-${randomGradient}`}
                >
                  <a
                    target="_blank"
                    href={
                      "https://twitter.com/intent/post?hashtags=quotes&related=freecodecamp&text=" +
                      "twitter.com/intent/tweet"
                    }
                    id="tweet-quote"
                  >
                    <i
                      className="fab fa-twitter"
                      style={{ fontSize: "32px", color: "white" }}
                    ></i>
                  </a>
                </button>
              </div>
              <div className="col-2"></div>
              <div className="col-6 text-center">
                <button
                  type="button"
                  className={`btn bg-${randomGradient}`}
                  id="new-quote"
                  onClick={handleClick}
                >
                  New Quote
                </button>
              </div>
            </div>
            <br></br>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

// import { useState } from 'react'
// import { useEffect} from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//    const [quoteInfo, setQuoteInfo] = useState({})

//    const getQuote = () =>{
//       fetch('https://api.quotable.io/random')
//       .then((response) =>{
//         return response.json()
//       })
//       .then((data) =>{
//         setQuoteInfo({
//           text: data.content,
//           author: data.author
//         })
//       })
//       .catch((error) => {
//         console.log('Error fetching', error)
//       })
//     }

//   useEffect(() =>{
//     getQuote()
//   }, [])

//   return (
//     <>
//       <div className="row align-items-center" style={{height: '100vh'}}>
//         <div className="col-sm-8 mb-3 mb-sm-0 mx-auto">
//           <div className="card " style={{height: '50vh'}}>
//             <div id="quote-box" className="card-body mx-auto">
//               <p id="text" className="card-text">{quoteInfo.text}</p>
//               <h1 id="author" className="card-title">{quoteInfo.author}</h1>
//               <button id="new-quote" onClick={getQuote}></button>
//               <a target="_blank" href={'https://twitter.com/intent/post?hashtags=quotes&related=freecodecamp&text=' + 'twitter.com/intent/tweet'} id="tweet-quote"><i className="fab fa-twitter"></i></a>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   )
// }

// export default App

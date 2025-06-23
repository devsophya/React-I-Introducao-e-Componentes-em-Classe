import React from "react";
import { Navbar } from "./components/Navbar/Navbar";

import "./styles/App.css";
import { Article } from "./components/Article/Article";

import article1Img from './assets/images/article1.png';
import article2Img from './assets/images/article2.png';
import article3Img from './assets/images/article3.png';
import { Counter } from "./components/Counter/Counter";

class App extends React.Component {
  render() {
    return (
      <>
        <Navbar />

          {/*<Counter />*/}

       <section id="articles">
          <Article
            title="Designing Dashboards"
            provider="NASA"
            description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor
            mollitia commodi modi, facilis iusto impedit omnis aut ducimus quasi
            reiciendis quam aspernatur velit laboriosam eligendi maiores!
            Debitis facere nobis temporibus."
            thumbnail={article1Img}
          />

          <Article
            title="Vibrant Portraits of 2020"
            provider="SpaceNews"
            description="In voluptatem molestiae et porro beatae sit omnis sint ut autem 
            excepturi ut possimus blanditiis? Vel numquam labore cum consequuntur 
            voluptatibus aut voluptatem molestias non fuga voluptas et quasi consectetur."
            thumbnail={article2Img}
          />

          <Article
            title="36 Days of Malayalam type"
            provider="Spaceflight Now"
            description="Eu ac id sollicitudin ipsum blandit urna cursus conubia nunc felis ac,
             nisi semper porttitor elementum luctus dictumst ut etiam dictumst. 
             suscipit aptent potenti, viverra. "
             thumbnail={article3Img}
          />

          <Article
            title="Designing Dashboards"
            provider="NASA"
            description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor
            mollitia commodi modi, facilis iusto impedit omnis aut ducimus quasi
            reiciendis quam aspernatur velit laboriosam eligendi maiores!
            Debitis facere nobis temporibus."
            thumbnail={article1Img}
          />
        </section> 
      </>
    );
  }
}

export default App;

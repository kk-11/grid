import { Card } from "./components";
import { bulb, burger, chair, fire, fish, moon, smoke } from "./assets";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <Card
        subtitle="valtech_"
        title="front-end"
        src={bulb}
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam quam ante, euismod tristique ligula nec, gravida hendrerit orci. Vivamus nec turpis dui."
      />
      <Card
        subtitle="ROME"
        title="italy"
        src={burger}
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam quam ante, euismod tristique ligula nec, gravida hendrerit orci. Vivamus nec turpis dui."
      />
      <Card
        subtitle="BERLIN"
        title="germany"
        src={chair}
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam quam ante, euismod tristique ligula nec, gravida hendrerit orci. Vivamus nec turpis dui."
      />
      <Card
        subtitle="MADRID"
        title="spain"
        src={fire}
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam quam ante, euismod tristique ligula nec, gravida hendrerit orci. Vivamus nec turpis dui."
      />
      <Card
        subtitle="PARIS"
        title="france"
        src={fish}
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam quam ante, euismod tristique ligula nec, gravida hendrerit orci. Vivamus nec turpis dui."
      />
      <Card
        subtitle="AMSTERDAM"
        title="netherlands"
        src={moon}
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam quam ante, euismod tristique ligula nec, gravida hendrerit orci. Vivamus nec turpis dui."
      />
      <Card
        subtitle="LONDON"
        title="united kingdom"
        src={smoke}
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam quam ante, euismod tristique ligula nec, gravida hendrerit orci. Vivamus nec turpis dui."
      />
    </div>
  );
}

export default App;

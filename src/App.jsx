import Header from "./Header";
import CoreConcept from "./components/CoreConcept";
import componentsImg from "./assets/components.png";

function App() {
  return (
    <div>
      <Header />

      <main>
        <section id={"core-concepts"}>
          <h2>Core Concepts</h2>
          <ul>
            <CoreConcept
              title={"Components"}
              description={"The core UI building block."}
              image={componentsImg}
            />
            <CoreConcept />
            <CoreConcept />
          </ul>
        </section>
        <h2>Time to get started!</h2>
      </main>
    </div>
  );
}

export default App;

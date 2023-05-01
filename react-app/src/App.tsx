import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";

function App() {
  let items = ["New York", "San Francisco", "Los Angeles", "San Diego"];

  const handleSelectedItem = (item: string) => {
    console.log(`clicked on ${item}`);
  };
  return (
    <div>
      <h1>Some Application</h1>
      <Alert>
        Select your <strong>favorite</strong> city
      </Alert>
      <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={handleSelectedItem}
      />
    </div>
  );
}

export default App;

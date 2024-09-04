import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button/Button";
import ListGroup from "./components/ListGroup/ListGroup";
import Like from "./components/Like";

function App() {
  const [alertState, setAlertState] = useState(false);

  let items = ["AAA", "BBB", "CCC", "DDD"];

  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  return (
    <div>
      {alertState && (
        <Alert onClose={() => setAlertState(false)}>Hello World</Alert>
      )}
      <Button color="secondary" onClick={() => setAlertState(true)}>
        Click me!
      </Button>

      <Like onClick={() => console.log("dupa")}></Like>

      <ListGroup
        items={items}
        heading="Random"
        onSelectItem={handleSelectItem}
      />
    </div>
  );
}
export default App;

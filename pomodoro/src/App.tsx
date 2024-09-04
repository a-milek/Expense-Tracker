import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";
import ListGroup from "./components/ListGroup";

function App() {
  const [alertState, setAlertState] = useState(false);
  let items = ["AAA", "BBB", "CCC", "DDD"];

  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  const handleClickedButton = () => {
    console.log("aaaa");
  };
  return (
    <div>
      {alertState && (
        <Alert onClose={() => setAlertState(false)}>Hello World</Alert>
      )}
      <Button color="dark" onClick={() => setAlertState(true)}>
        Click me!
      </Button>
      <ListGroup
        items={items}
        heading="Random"
        onSelectItem={handleSelectItem}
      />
    </div>
  );
}
export default App;

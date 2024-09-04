import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button/Button";
import ListGroup from "./components/ListGroup/ListGroup";
import Like from "./components/Like";
import { produce } from "immer";
import NavBar from "./components/NavBar";
import Cart from "./components/Cart";

function App() {
  const [game, setGame] = useState({
    id: 1,
    player: {
      name: "John",
    },
  });

  const handleGameClick = () => {
    setGame({
      ...game,
      player: { ...game.player, name: "Bob" },
    });
  };

  //sharing states between components
  const [cartItems, setCartItems] = useState([
    "Product1",
    "Milk",
    "Egg",
    "egg2",
  ]);

  //updating objects in array
  const [bugs, setBugs] = useState([
    { id: 1, title: "Bug 1", fixed: false },
    { id: 2, title: "Bug 2", fixed: false },
  ]);

  const handleBugClick = () => {
    //setBugs(bugs.map((bug) => (bug.id === 1 ? { ...bug, fixed: true } : bug))); before immer
    setBugs(
      produce((draft) => {
        const bug = draft.find((bug) => bug.id === 1);
        if (bug) {
          bug.fixed = true;
        }
      })
    );
  };

  //updating an array
  const [tags, setTags] = useState(["happy", "cheerful"]);
  const handleArrayCLick = () => {
    //add
    setTags([...tags, "exciting"]);
    //remove
    setTags(tags.filter((tag) => tag !== "happy"));
    //update
    setTags(tags.map((tag) => (tag === "happy" ? "happiness" : tag)));
  };

  //modifying objects inside objects
  const [customer, setCustomer] = useState({
    name: "John",
    adress: {
      city: "Warszawa",
      zipCode: 12345,
    },
  });

  const handleCustomerClick = () => {
    setCustomer({
      ...customer,
      adress: { ...customer.adress, zipCode: 13579 },
    });
  };
  //

  const [drink, setDrink] = useState({
    title: "Mojito",
    price: 4,
  });

  const handleDrinkClick = () => {
    setDrink({ ...drink, price: 6 });
  };

  const [alertState, setAlertState] = useState(false);

  let items = ["AAA", "BBB", "CCC", "DDD"];

  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  return (
    <div>
      <div>
        {alertState && (
          <Alert onClose={() => setAlertState(false)}>Hello World</Alert>
        )}
        <Button color="secondary" onClick={() => setAlertState(true)}>
          Click me!
        </Button>
      </div>
      <hr />
      <div>
        <Like onClick={() => console.log("like clicked")}></Like>
      </div>
      <hr />
      <div>
        <ListGroup
          items={items}
          heading="Random"
          onSelectItem={handleSelectItem}
        />
      </div>
      <hr />
      <div>
        {drink.price}
        <Button color="primary" onClick={() => handleDrinkClick()}>
          Drink Button
        </Button>
      </div>
      <hr />
      <div>
        {bugs.map((bug) => (
          <p key={bug.id}>
            {bug.title} {bug.fixed ? "Fixed" : "New"}
          </p>
        ))}
        <Button color="primary" onClick={() => handleBugClick()}>
          Bug Button
        </Button>
      </div>
      <hr />
      <div>
        <NavBar cartItemsCount={cartItems.length} />
        <Cart cartItems={cartItems} onClear={() => setCartItems([])} />
      </div>
      <hr />

      <div>{game.player.name}</div>
      <Button color="danger" onClick={() => handleGameClick()}>
        AAAAAAA
      </Button>
    </div>
  );
}
export default App;

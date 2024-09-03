import ListGroup from "./components/ListGroup";

function App() {
  let items = ["AAA", "BBB", "CCC", "DDD"];

  const handleSelectItem = (item: string) => {
    console.log(item);
  };
  return (
    <div>
      <ListGroup
        items={items}
        heading="Random"
        onSelectItem={handleSelectItem}
      />
    </div>
  );
}
export default App;

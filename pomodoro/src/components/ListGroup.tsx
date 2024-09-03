import { useState } from "react";
interface ListGroupProps {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}

function ListGroup({ items, heading, onSelectItem }: ListGroupProps) {
  //statehook cmponent has data or state that can change overtime
  const [activeId, setActiveId] = useState(-1);
  //   arr[0]; //variable (activeId)
  //   arr[1]; //updater function
  //Event Handler

  return (
    <>
      <h1>{heading}</h1>
      {items.length == 0 && <p>No item found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              activeId === index ? "list-group-item active" : "list-group-item"
            }
            key={item}
            onClick={() => {
              setActiveId(index);
              onSelectItem(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}
export default ListGroup;

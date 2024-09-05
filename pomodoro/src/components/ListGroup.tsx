import { useState } from "react";
import "./ListGroup.css";
import styled from "styled-components";

//local styles using styled
const List = styled.ul`
  list-style: none;
  padding: 0;
`;

const ListItem = styled.li<ListItemProps>`
  padding: 5px 0;
  background: ${(props) => (props.active ? "pink" : "none")};
`;
interface ListItemProps {
  active: boolean;
}
interface ListGroupProps {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}

function ListGroup({ items, heading, onSelectItem }: ListGroupProps) {
  //statehook cmponent has data or state that can change overtime
  const [activeId, setActiveId] = useState(0);
  //   arr[0]; //variable (activeId)
  //   arr[1]; //updater function
  //Event Handler

  return (
    <>
      <h1>{heading}</h1>
      {items.length == 0 && <p>No item found</p>}
      <List>
        {items.map((item, index) => (
          <ListItem
            active={index === activeId}
            key={item}
            onClick={() => {
              setActiveId(index);
              onSelectItem(item);
            }}
          >
            {item}
          </ListItem>
        ))}
      </List>
    </>
  );
}
export default ListGroup;

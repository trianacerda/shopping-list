import { useReducer } from 'react';
import AddItem from '../../components/AddItem/AddItem';
import ItemList from '../../components/ItemList/ItemList';

const firstListItems = [
  { id: 0, text: 'candy🍬', completed: false },
  { id: 1, text: 'butter🧈', completed: false },
  { id: 2, text: 'bread🍞', completed: false },
  { id: 3, text: 'plants🪴', completed: false },
  { id: 4, text: 'cookies🍪', completed: false },
];

function itemsReducer(items, action) {
  switch (action.type) {
    case 'added': {
      return [
        ...items,
        {
          id: action.id,
          text: action.text,
          done: false,
        },
      ];
    }
    case 'changed': {
      return items.map((item) => {
        if (item.id === action.description.id) {
          return action.description;
        }
        return item;
      });
    }
    case 'deleted': {
      return items.filter((item) => item.id !== action.id);
    }
    default: {
      throw Error(`not sure about this action: ${action.type}`);
    }
  }
}

export default function ShoppingList() {
  const [items, dispatch] = useReducer(itemsReducer, firstListItems);

  const handleAddItem = (text) => {
    dispatch({
      type: 'added',
      id: items.length,
      text,
    });
  };

  const handleChangeItem = (description) => {
    dispatch({
      type: 'changed',
      description,
    });
  };

  const handleDeleteItem = (descriptionId) => {
    dispatch({
      type: 'deleted',
      id: descriptionId,
    });
  };

  return (
    <>
      <h1>My Precious Shopping List</h1>
      <AddItem onAddItem={handleAddItem} />
      <ItemList
        items={items}
        onChangeItem={handleChangeItem}
        onDeleteItem={handleDeleteItem}
      />
    </>
  );
}

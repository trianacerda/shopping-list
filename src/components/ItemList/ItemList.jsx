import Item from '../Item/Item';

export default function ItemList({ items, onChangeItem, onDeleteItem }) {
  return (
    <>
      <ul>
        {items.map((item) => {
          <li key={item.id}>
            <Item item={item} onChange={onChangeItem} onDelete={onDeleteItem} />
          </li>;
        })}
      </ul>
    </>
  );
}

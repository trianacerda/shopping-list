import SingleItem from '../SingleItem/SingleItem';

export default function ItemList({ items, onChangeItem, onDeleteItem }) {
  console.log('itemlist', items);
  return (
    <>
      hello from itemList
      <ul>
        {items.map((item) => {
          <li key={item.id}>
            <SingleItem
              item={item}
              onChange={onChangeItem}
              onDelete={onDeleteItem}
            />
          </li>;
        })}
      </ul>
    </>
  );
}

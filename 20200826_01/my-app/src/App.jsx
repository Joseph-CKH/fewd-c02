import logo from './logo.svg';
import style from './components/item'


function App() {
    const itemList = [
       {
            name: 'apple',
            price: 0,
            type: 'food'
        },
       {
            name: 'car',
            price: 0,
            type: 'car'
        },
       {
            name: 'ice-cream',
            price: 0,
            type: 'food'
        }
      ]

      const typeList = []
      for(const item of itemList){
        if(typeList.includes(item.type)){
          continue
        }
      
      }
  return (
    <div className="App">
      {itemList.map(Item => <Item name={item.name} price={item.price} type={item.type}>
    </div>
  );
}

export default App;

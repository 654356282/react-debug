import React, { useEffect, useState } from "react";

let key = 0;
function createData() {
  const data = {
    key,
    value: key + "_data",
  };
  key++;
  return data;
}
const initData = new Array(4).fill("").map(createData);

const App = () => {
  const [list, setList] = useState([]);

  useEffect(() => {
    setList(initData);
  }, []);

  function handleAdd() {
    setList((list) => list.concat(createData()));
  }

  function handleDelete() {
    setList((list) => {
      return list.slice(0, 1).concat(list.slice(2));
    });
  }

  function handleMove() {
    const item = list[1];
    list.splice(1, 1);
    setList([...list, item]);
  }

  return (
    <div>
      <ul>
        {list.map((item) => {
          const { key, value } = item;

          return <li key={key}>{value}</li>;
        })}
      </ul>
      <button onClick={handleAdd}>+1</button>
      <button onClick={handleDelete}>-1</button>
      <button onClick={handleMove}>move</button>
    </div>
  );
};

export default App;

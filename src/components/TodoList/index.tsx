import { createElement, useState } from 'rax';
import AddItem from './addItem';
import './index.css';
import Item from './item';

function renderTodoList() {
  const originList = [
    { title: 'do rax', isDone: true },
    { title: 'leetcode', isDone: false },
    { title: 'study render', isDone: false },
  ];
  const [listData, setlistData] = useState(originList);
  // 添加
  function handleAdd(text) {
    let list = JSON.parse(JSON.stringify(listData));
    list.push({ title: text, isDone: false });
    setlistData(list);
  }
  // 完成
  function handleDone(index: number) {
    let list = JSON.parse(JSON.stringify(listData));
    list[index].isDone = !list[index].isDone;
    setlistData(list);
  }
  // 删除
  function handleDelete(index: number) {
    let list = JSON.parse(JSON.stringify(listData));
    list.splice(index, 1);
    setlistData(list);
  }
  return (
    <div>
      <AddItem handleAdd={handleAdd} />
      <ul className="list">
        {listData.map((item, index) => (
          <Item
            propsData={Object.assign(item, { index: index })}
            handleClick={handleDone}
            handleDelete={handleDelete}
            key={index}
          />
        ))}
      </ul>
    </div>
  );
}

export default renderTodoList;

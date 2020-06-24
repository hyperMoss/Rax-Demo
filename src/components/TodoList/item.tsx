import { createElement } from 'rax';
import './index.css';

interface ItemProps {
  propsData: {
    isDone: boolean;
    title: string;
    index: number;
  };
  handleClick;
  handleDelete;
}

export default (props: ItemProps) => {
  const { title, index } = props.propsData;
  const { handleClick, handleDelete } = props;

  let { isDone } = props.propsData;
  const myStyle = {
    textDecoration: isDone ? 'line-through' : 'none',
  };
  return (
    <li className="item">
      {index}
      <span style={myStyle}>{title}</span>
      <span>
        {' '}
        <button
          onClick={() => {
            handleClick(index);
          }}
        >
          {isDone ? '取消' : '完成'}
        </button>
        <button onClick={() => handleDelete(index)}>删除</button>
      </span>
    </li>
  );
};

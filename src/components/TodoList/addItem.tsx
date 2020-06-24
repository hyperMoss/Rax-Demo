import { createElement, useState } from 'rax';
import TextInput from 'rax-textinput';

interface InputProps {
  handleAdd;
}

export default (props: InputProps) => {
  const [addText, setaddText] = useState('');
  const { handleAdd } = props;
  const maxlengrth = 8;
  function addNewTodo() {
    if (addText.length) {
      handleAdd(addText);
      setaddText('');
    }
  }
  return (
    <form
      onSubmit={() => {
        addNewTodo();
      }}
    >
      <label for="new-todo">标题：</label>
      <TextInput
        type="text"
        placeholder="请输入待办事项"
        maxLength={maxlengrth}
        style={{
          borderWidth: 1,
          borderColor: '#dddddd',
          borderStyle: 'solid'
        }}
        id="new-todo"
        value={addText}
        onChangeText={text => setaddText(text)}
      />
      <input type="submit" value="提交" />
    </form>
  );
};

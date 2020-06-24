import { createElement } from 'rax';
import Text from 'rax-text';
import View from 'rax-view';
import Logo from '../../components/Logo';
import TodoList from '../../components/TodoList';
import './index.css';


export default function Home() {
  return (
    <View className="home">
      <Logo uri="//gw.alicdn.com/tfs/TB1MRC_cvb2gK0jSZK9XXaEgFXa-1701-1535.png" />
      <Text className="title">Welcome to Your Rax App</Text>
      <Text className="info">More information about Rax</Text>
      <Text className="info">Visit https://rax.js.org</Text>
      <TodoList />
    </View>
  );
}

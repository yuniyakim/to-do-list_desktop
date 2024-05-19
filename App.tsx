import {useState, Profiler} from 'react';
import {ScrollView, Text} from 'react-native';
import {ToDoForm} from './src/components/to-do-form/to-do-form';
import {ToDoList} from './src/components/to-do-list/to-do-list';
import {ToDo} from './src/types/interfaces';
import {styles} from './src/styles/styles';

export const App = () => {
  const [toDos, setToDos] = useState<ToDo[]>([]);

  const addToDo = (toDo: ToDo): ToDo[] => {
    const newToDos = [toDo, ...toDos];
    setToDos(newToDos);
    return newToDos;
  };

  const onRender = (_id: string, _phase: 'mount' | 'update', actualDuration: number, _baseDuration: number, _startTime: number, _commitTime: number) => {
    console.log(actualDuration)
    // const platform = 'macos';
    // const url = 'http://192.168.67.1:5555/add';
    // fetch(url, {
    //   method: 'POST',
    //   headers: {
    //     'Accept': 'application/json',
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify({app: 'desktop', platform: platform, time: actualDuration, device: 'Apple MacBook Air'})
    // });
  }

  return (
    <Profiler id="App" onRender={onRender}>
      <ScrollView contentContainerStyle={styles.toDo_list_app_container}>
        <Text style={styles.toDo_list_app_title}>ToDo List</Text>
        <ToDoForm addToDo={addToDo} />
        <ToDoList toDos={toDos} setToDos={setToDos} />
      </ScrollView>
    </Profiler>
  );
};

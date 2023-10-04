import {ToDoItem} from '../to-do-item/to-do-item';
import {ToDo, ToDoListProps} from '../../types/interfaces';
import {View} from 'react-native';
import {styles} from '../../styles/styles';

export const ToDoList = ({toDos, setToDos}: ToDoListProps) => {
  const completeToDo = (id: number): ToDo[] => {
    const updatedToDos = toDos.map(toDo => {
      if (toDo.id === id) {
        toDo.completed = !toDo.completed;
      }
      return toDo;
    });
    setToDos(updatedToDos);
    return updatedToDos;
  };

  const deleteToDo = (id: number): ToDo[] => {
    setToDos(toDos.filter(toDo => toDo.id !== id));
    return toDos.filter(toDo => toDo.id !== id);
  };

  return (
    <View style={styles.toDo_list_container}>
      {toDos.map(toDo => (
        <ToDoItem
          key={toDo.id}
          toDo={toDo}
          completeToDo={completeToDo}
          deleteToDo={deleteToDo}
        />
      ))}
    </View>
  );
};

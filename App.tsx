import React, {useState} from 'react';
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

  return (
    <ScrollView contentContainerStyle={styles.toDo_list_app_container}>
      <Text style={styles.toDo_list_app_title}>ToDo List</Text>
      <ToDoForm addToDo={addToDo} />
      <ToDoList toDos={toDos} setToDos={setToDos} />
    </ScrollView>
  );
};

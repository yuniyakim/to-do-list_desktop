import {Pressable, Switch, Text, View} from 'react-native';
import {ToDoItemProps} from '../../types/interfaces';
import {styles} from '../../styles/styles';

export const ToDoItem = ({toDo, completeToDo, deleteToDo}: ToDoItemProps) => {
  const handleComplete = () => {
    completeToDo(toDo.id);
  };

  const handleDelete = () => {
    deleteToDo(toDo.id);
  };

  return (
    <View style={styles.toDo_container}>
      <Switch
        style={styles.toDo_checkbox}
        onValueChange={handleComplete}
        value={toDo.completed}></Switch>
      <View style={styles.toDo_content}>
        <Text
          style={
            toDo.completed
              ? styles.toDo_content_completed
              : styles.toDo_content_uncompleted
          }>
          {toDo.content}
        </Text>
      </View>
      <Pressable style={styles.toDo_delete_button} onPress={handleDelete}>
        <Text style={styles.toDo_button_content}>Delete</Text>
      </Pressable>
    </View>
  );
};

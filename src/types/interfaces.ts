import {TextStyle, ViewStyle} from 'react-native';

export interface ToDo {
  id: number;
  content: string;
  completed: boolean;
}

export interface ToDoItemProps {
  toDo: ToDo;
  completeToDo: (id: number) => ToDo[];
  deleteToDo: (id: number) => ToDo[];
}

export interface ToDoListProps {
  toDos: ToDo[];
  setToDos: React.Dispatch<React.SetStateAction<ToDo[]>>;
}

export interface ToDoFormProps {
  addToDo: (toDo: ToDo) => ToDo[];
}

export interface Style {
  toDo_list_app_container: ViewStyle;
  toDo_list_app_title: TextStyle;
  toDo_form: ViewStyle;
  toDo_list_container: ViewStyle;
  toDo_input: ViewStyle;
  toDo_add_button: ViewStyle;
  toDo_delete_button: ViewStyle;
  toDo_button_content: TextStyle;
  toDo_container: ViewStyle;
  toDo_checkbox: ViewStyle;
  toDo_content: ViewStyle;
  toDo_content_uncompleted: TextStyle;
  toDo_content_completed: TextStyle;
}

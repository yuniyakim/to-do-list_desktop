import { StyleSheet } from 'react-native';
import { Style } from '../types/interfaces';

export const styles = StyleSheet.create<Style>({
  toDo_list_app_container: {
    backgroundColor: 'rgb(255, 255, 255)',
    fontSize: 16,
    minHeight: '100%',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    lineHeight: 1.5,
    fontWeight: '400',
    paddingTop: 32,
  },

  toDo_list_app_title: {
    fontSize: 48,
    fontWeight: '700',
    color: 'rgb(0, 0, 0)',
  },

  toDo_form: {
    display: 'flex',
    flexDirection: 'row',
    alignContent: 'stretch',
    flexShrink: 1,
    alignItems: 'center',
    marginBottom: 16,
    height: 48,
    width: '100%',
    paddingLeft: 16,
    paddingRight: 16,
  },

  toDo_list_container: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    paddingLeft: 16,
    paddingRight: 16,
  },

  toDo_input: {
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: 'rgb(222, 222, 222)',
    borderRadius: 8,
    backgroundColor: 'white',
    color: 'rgb(0, 0, 0)',
    fontSize: 16,
    height: 32,
    flexGrow: 1,
    display: 'flex',
    flexShrink: 1,
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 5,
  },

  toDo_add_button: {
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: 'rgb(222, 222, 222)',
    borderRadius: 16,
    width: 'auto',
    height: 32,
    paddingTop: 6,
    paddingRight: 16,
    paddingBottom: 6,
    paddingLeft: 16,
    backgroundColor: 'rgb(0, 170, 100)',
    marginLeft: 16,
  },

  toDo_delete_button: {
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: 'rgb(222, 222, 222)',
    borderRadius: 16,
    width: 'auto',
    height: 32,
    paddingTop: 6,
    paddingRight: 16,
    paddingBottom: 6,
    paddingLeft: 16,
    backgroundColor: 'rgb(255, 0, 0)',
    marginLeft: 'auto',
  },

  toDo_button_content: {
    color: 'rgb(255, 255, 255)',
  },

  toDo_container: {
    display: 'flex',
    flexDirection: 'row',
    flexShrink: 1,
    borderStyle: 'solid',
    borderTopWidth: 1,
    borderTopColor: 'rgb(222, 222, 222)',
    borderBottomWidth: 1,
    borderBottomColor: 'rgb(222, 222, 222)',
    alignItems: 'center',
    minHeight: 48,
    maxWidth: '100%',
    justifyContent: 'flex-end',
    gap: 16,
  },

  toDo_checkbox: {
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: 'rgb(222, 222, 222)',
    borderRadius: 16,
  },

  toDo_content: {
    minHeight: 48,
    display: 'flex',
    flexShrink: 1,
    justifyContent: 'center',
    flexDirection: 'column',
    paddingTop: 6,
    paddingBottom: 6,
  },

  toDo_content_uncompleted: {
    color: 'rgb(0, 0, 0)',
  },

  toDo_content_completed: {
    color: 'rgb(0, 0, 0)',
    textDecorationLine: 'line-through',
  },
})

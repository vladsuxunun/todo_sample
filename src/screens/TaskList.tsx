import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList, SafeAreaView } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { addTask, completeTask, deleteTask } from '../../store/Tasks/taskSlice';
import TaskItem from '../screens/TaskItem';
import { selectTasks } from '../../store/Selectors/taskSelector.ts';

const TaskList: React.FC = () => {
  const dispatch = useDispatch();
  const tasks = useSelector(selectTasks);
  console.log(tasks);
  const [newTaskText, setNewTaskText] = useState('');

  const handleAddTask = () => {
    if (newTaskText.trim() !== '') {
      dispatch(addTask(newTaskText));
      setNewTaskText('');
    }
  };

  const handleCompleteTask = (id: number) => {
    dispatch(completeTask(id));
  };

  const handleDeleteTask = (id: number) => {
    dispatch(deleteTask(id));
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1, padding: 20 }}>
        <Text style={{ fontSize: 20, marginBottom: 10 }}>Task List</Text>
        <View style={{ flexDirection: 'row', marginBottom: 10 }}>
          <TextInput
            style={{ flex: 1, marginRight: 10, padding: 5, borderWidth: 1 }}
            placeholder="Enter task"
            value={newTaskText}
            onChangeText={text => setNewTaskText(text)}
          />
          <Button title="Add Task" onPress={handleAddTask} />
        </View>
        <FlatList
          data={tasks}
          keyExtractor={item => item.id.toString()}
          renderItem={({ item }) => (
            <TaskItem
              item={item}
              handleDeleteTask={handleDeleteTask}
              handleCompleteTask={handleCompleteTask}
            />
          )}
        />
      </View>
    </SafeAreaView>
  );
};

export default TaskList;

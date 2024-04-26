import { View, Text, TouchableOpacity } from "react-native";
import CheckBox from '@react-native-community/checkbox';
import React from 'react';

const TaskItem = ({ item , handleCompleteTask, handleDeleteTask }) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 5,
        borderRadius: 5,
        borderWidth: 1,
        paddingVertical : 15,
        justifyContent: 'space-between',

        backgroundColor: item.completed ? 'green' : 'white',
        borderColor: !item.completed ? 'grey' : 'green',
      }}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <CheckBox
          style={{marginLeft: 5}}
          value={item.completed}
          onValueChange={() => handleCompleteTask(item.id)}
        />
        <Text
          style={{
            marginLeft: 10,
            textDecorationLine: item.completed ? 'line-through' : 'none',
          }}>
          {item.text}
        </Text>
      </View>
      <View style={{marginRight: 5}}>
        <TouchableOpacity
          onPress={() => handleDeleteTask(item.id)}
          style={{}}>
          <Text style={{color: 'red'}}>Delete</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default TaskItem;

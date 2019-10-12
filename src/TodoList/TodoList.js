import React, { useState } from "react";
import styled from "styled-components/native";
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  View
} from "react-native";

const getUniqueId = () =>
  `${Math.random()
    .toString(36)
    .substr(2, 9)}`;

const TodoListView = styled.View`
  margin-top: 30px;
  padding: 20px;
`;

const textColor = "#333";

const ChecklistInput = styled.TextInput`
  border-color: #ddd;
  border-radius: 5px;
  border-width: 1px;
  color: ${textColor};
  font-size: 16px;
  margin-bottom: 10px;
  padding: 10px;
`;

const Checklist = styled.View`
  margin-bottom: 20px;
`;

const ChecklistItem = styled.Text`
  color: ${textColor};
  font-size: 16px;
  padding: 5px 10px;
`;

const TodoList = () => {
  const [newItemText, setNewItemText] = useState("");
  const [items, setItems] = useState([]);

  return (
    <TodoListView>
      <ChecklistInput
        autoFocus
        blurOnSubmit={false}
        onSubmitEditing={() => {
          if (newItemText) {
            const newItem = { text: newItemText, id: getUniqueId() };
            setItems([...items, newItem]);
          }
          setNewItemText("");
        }}
        onChangeText={setNewItemText}
        value={newItemText}
        placeholder="New item"
      />

      <Checklist>
        {items.map(item => (
          <ChecklistItem key={item.id}>{item.text}</ChecklistItem>
        ))}
      </Checklist>
    </TodoListView>
  );
};

export default TodoList;

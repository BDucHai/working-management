import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";

const UserModal = (props: {
  id: number;
  name: string;
  position: string;
  handleSelectIncrease: (id: number) => void;
  handleSelectDecrease: (id: number) => void;
}) => {
  const [isSelected, setIsSelected] = useState(false);
  function handleSelected() {
    if (isSelected) {
      props.handleSelectDecrease(props.id);
    } else {
      props.handleSelectIncrease(props.id);
    }
    setIsSelected((isSelected) => !isSelected);
  }
  return (
    <TouchableOpacity
      onPress={handleSelected}
      className={`${
        isSelected ? "bg-blue-200" : " bg-slate-300"
      } px-4 py-2 mb-2`}>
      <Text className="font-semibold">{props.name}</Text>
      <Text className="font-extralight">{props.position}</Text>
    </TouchableOpacity>
  );
};

export default UserModal;

import React, { useRef, useState, useEffect } from "react";
import {
  NativeSyntheticEvent,
  Platform,
  TextInput,
  TextInputKeyPressEventData,
  View,
} from "react-native";

const OTPInput = ({ length, disabled, value, onChange }) => {
  const [localState, setLocalState] = useState(
    [...new Array(length)].map((item, index) => ({ index, value: "" }))
  );
  const inputRefs = useRef([]);

  const onChangeValue = (text, index) => {
    setLocalState((prevState) =>
      prevState.map((item) => {
        if (item.index === index) {
          return {
            index,
            value: `${item.value}${text}`,
          };
        }

        return {
          index: item.index,
          value: item.value,
        };
      })
    );
    const newValue = value.map((item, valueIndex) => {
      if (valueIndex === index) {
        return text;
      }

      return item;
    });

    onChange(newValue);
  };

  const clearLocalState = () => {
    setLocalState(
      [...new Array(length)].map((item, index) => ({ index, value: "" }))
    );
  };

  const handleChange = (text, index) => {
    onChangeValue(text, index);

    if (text.length !== 0) {
      return inputRefs?.current[index + 1]?.focus();
    }

    return inputRefs?.current[index - 1]?.focus();
  };

  const handleKeyPress = (event, index) => {
    const { nativeEvent } = event;

    if (nativeEvent.key === "Backspace") {
      return handleChange("", index);
    }

    if (value[index].length === 1) {
      return handleChange(nativeEvent.key, index);
    }
  };

  useEffect(() => {
    const longValue = localState.find((item) => item.value.length === length);

    if (longValue) {
      onChange(longValue.value.split(""));
    }
  }, [localState]);

  return (
    <View
      style={{
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
      }}
    >
      {[...new Array(length)].map((item, index) => (
        <TextInput
          ref={(ref) => {
            if (ref && !inputRefs.current.includes(ref)) {
              inputRefs.current = [...inputRefs.current, ref];
            }
          }}
          key={index}
          maxLength={1}
          value={value[index]}
          contextMenuHidden
          testID="OTPInput"
          editable={!disabled}
          style={{
            width: 45,
            height: 55,
            fontSize: 24,
            color: "black",
            fontWeight: "700",
            textAlign: "center",
            backgroundColor: "white",
            borderRadius: 10,
            ...Platform.select({
              ios: {
                shadowColor: "gray",
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.2,
                shadowRadius: 2,
              },
              android: {
                elevation: 4,
              },
            }),
          }}
          onBlur={clearLocalState}
          keyboardType="number-pad"
          onChangeText={(text) => handleChange(text, index)}
          onKeyPress={(event) => handleKeyPress(event, index)}
        />
      ))}
    </View>
  );
};

export default OTPInput;

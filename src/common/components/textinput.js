import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import { colors } from "../theme";

const ModeratedTextInput = ({
    placeholder,
    maxLength = 100,
    onChangeText,
    value,
    validateInput,
    errorMessage,
    style,
}) => {
    const [inputValue, setInputValue] = useState(value || "");
    const [error, setError] = useState(null);

    const handleChange = (text) => {
        if (text.length <= maxLength) {
            setInputValue(text);
            if (validateInput) {
                const validationError = validateInput(text);
                setError(validationError);
            }
            onChangeText && onChangeText(text);
        }
    };

    return (
        <View style={[styles.container, style]}>
            <TextInput
                style={[styles.input, error ? styles.errorInput : null]}
                placeholder={placeholder}
                value={inputValue}
                onChangeText={handleChange}
                maxLength={maxLength}
            />
            <View style={styles.info}>
                <Text style={styles.counter}>
                    {inputValue.length}/{maxLength}
                </Text>
                {error && <Text style={styles.errorText}>{errorMessage || error}</Text>}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginBottom: 20,
    },
    input: {
        borderWidth: 1,
        borderColor: colors.black,
        borderRadius: 8,
        padding: 10,
        fontSize: 16,
        color: "#333",
        backgroundColor: colors.white
    },
    errorInput: {
        borderColor: "red",
    },
    info: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 5,
    },
    counter: {
        fontSize: 12,
        color: "#666",
    },
    errorText: {
        fontSize: 12,
        color: "red",
    },
});

export default ModeratedTextInput;

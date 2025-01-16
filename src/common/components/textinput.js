import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import { colors } from "../theme";

const ModeratedTextInput = ({
    placeholder,
    maxLength,
    onChangeText,
    value,
    validateInput,
    errorMessage,
    style,
    numberOfLines = 1,
    keyboardType,
    numeric = false, // Add numeric prop
}) => {
    const [inputValue, setInputValue] = useState(value || "");
    const [error, setError] = useState(null);

    const handleChange = (text) => {
        // Check for numeric restriction
        if (numeric && /[^0-9]/.test(text)) {
            return; // Ignore non-numeric characters
        }

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
                style={[
                    styles.input,
                    error ? styles.errorInput : null,
                    numberOfLines > 1 ? styles.multiLineInput : null,
                ]}
                placeholder={placeholder}
                value={inputValue}
                onChangeText={handleChange}
                maxLength={maxLength}
                multiline={numberOfLines > 1}
                numberOfLines={numberOfLines}
                keyboardType={numeric ? "numeric" : keyboardType} // Set keyboardType based on numeric prop
                textAlignVertical={numberOfLines > 1 ? "top" : "auto"}
            />
            <View style={styles.info}>
                {error && <Text style={styles.errorText}>{errorMessage || error}</Text>}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginBottom: 10,
    },
    input: {
        borderWidth: 1,
        borderColor: colors.black,
        borderRadius: 8,
        padding: 10,
        fontSize: 16,
        color: "#333",
        backgroundColor: colors.white,
    },
    errorInput: {
        borderColor: "red",
    },
    info: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 5,
    },
    errorText: {
        fontSize: 12,
        color: "red",
    },
    multiLineInput: {
        textAlignVertical: "top",
    },
    label: {
        color: colors.black,
        marginBottom: 5,
    },
});

export default ModeratedTextInput;

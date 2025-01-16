import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';

const DropDown = ({ placeholder, items, setItems, value, setValue,open, setOpen }) => {

    return (
        <View style={styles.container}>
            <DropDownPicker
                open={open}
                value={value}
                items={items}
                setOpen={setOpen}
                setValue={setValue}
                setItems={setItems}
                placeholder={placeholder}
                style={styles.dropdown}
                dropDownContainerStyle={styles.dropdownContainer}
                listMode="SCROLLVIEW"
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        zIndex: 1000,
    },
    dropdown: {
        marginVertical: 10,
    },
    dropdownContainer: {
        zIndex: 1000,
    },
});

export default DropDown;
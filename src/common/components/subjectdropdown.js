import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import DropDown from './DropDown'; // Assuming this is the path to your DropDown component.

const SubjectDropdown = () => {
    const [items, setItems] = useState([]);
    const [value, setValue] = useState(null);
    const [open, setOpen] = useState(false);
    const [selectedId, setSelectedId] = useState(null);

    const response = [
        { subject_code: "TEL", subject_id: 1, subject_name: "telugu" },
        { subject_code: "HE", subject_id: 2, subject_name: "hindi" },
        { subject_code: "ENG", subject_id: 3, subject_name: "ENGLISH" },
        { subject_code: "MAT", subject_id: 4, subject_name: "MATH" },
        { subject_code: "PYC", subject_id: 5, subject_name: "physics" },
        { subject_code: "CHE", subject_id: 6, subject_name: "chemistry" },
        { subject_code: "SOC", subject_id: 8, subject_name: "social" }
    ];

    // Map response data to dropdown items format
    React.useEffect(() => {
        const formattedItems = response.map(item => ({
            label: item.subject_name,
            value: item.subject_id,
        }));
        setItems(formattedItems);
    }, []);

    // Update selectedId whenever a value is selected
    React.useEffect(() => {
        if (value !== null) {
            const selectedObject = response.find(item => item.subject_id === value);
            if (selectedObject) {
                setSelectedId(selectedObject.subject_id);
            }
        }
    }, [value]);

    return (
        <View style={styles.container}>
            <Text style={styles.label}>Select a Subject:</Text>
            <DropDown
                placeholder="Select a subject"
                items={items}
                setItems={setItems}
                value={value}
                setValue={setValue}
                open={open}
                setOpen={setOpen}
            />
            {selectedId && <Text style={styles.selectedText}>Selected Subject ID: {selectedId}</Text>}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        justifyContent: 'center',
    },
    label: {
        fontSize: 16,
        marginBottom: 10,
    },
    selectedText: {
        marginTop: 20,
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default SubjectDropdown;

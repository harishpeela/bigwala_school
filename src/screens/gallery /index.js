import React, { useState } from "react";
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity, Modal } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { colors } from "../../common/theme";
import { styles } from "./styles";
import { Header } from "../../common/components/header";
import { ANNOUNCEMENTS, REPORT_CARD, STUDENT, TEACHER, VIDEO } from "../../constants/image_const";

const Gallery = ({ navigation }) => {

    const [modalVisible, setModalVisible] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);

    const openImage = (uri) => {
        setSelectedImage(uri);
        setModalVisible(true);
    };

    const renderImage = ({ item }) => {
        console.log('Image URI:', item.uri);
        return (
            <TouchableOpacity onPress={() => openImage(item.uri)}>
                <Image source={item.uri} style={styles.image} />
            </TouchableOpacity>
        );
    };

    const galleryImages = [
        { id: '1', uri: TEACHER },
        { id: '2', uri: STUDENT },
        { id: '3', uri: VIDEO },
        { id: '4', uri: ANNOUNCEMENTS },

    ];

    return (
        <LinearGradient colors={[colors.primaryColor, colors.secondaryColor]} style={styles.linearGradient}>
            <Header title={"Gallery "} navigation={navigation} />
            <FlatList
                data={galleryImages}
                renderItem={renderImage}
                keyExtractor={(item) => item.id}
                numColumns={2}
                contentContainerStyle={styles.list}
                showsVerticalScrollIndicator={false}
            />

            <Modal visible={modalVisible} transparent={true}>
                <View style={styles.modalContainer}>
                    <TouchableOpacity
                        style={styles.closeButton}
                        onPress={() => setModalVisible(false)}
                    >
                        <Text style={styles.closeText}>Close</Text>
                    </TouchableOpacity>
                    <Image source={selectedImage} style={styles.fullImage} />
                </View>
            </Modal>
        </LinearGradient>
    )
}
export default Gallery;
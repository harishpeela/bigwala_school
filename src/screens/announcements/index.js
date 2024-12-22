import React from "react";
import { View, Text, TouchableOpacity, FlatList, Button, Platform } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { colors } from "../../common/theme";
import { styles } from "./styles";
import { Header } from "../../common/components/header";
import Sound from 'react-native-sound';

Sound.setCategory('Playback');

const Announcements = ({ navigation }) => {
    // Function to play a local sound file
    const playLocalSound = () => {
        const sound = new Sound(
            Platform.OS === 'ios' ? 'example.mp3' : 'example',
            Sound.MAIN_BUNDLE,
            (error) => {
                if (error) {
                    console.log('Failed to load sound', error);
                    return;
                }
                sound.play((success) => {
                    if (success) {
                        console.log('Sound played successfully');
                    } else {
                        console.log('Playback failed due to audio decoding errors');
                    }
                    sound.release();
                });
            }
        );
    };

    const playRemoteSound = () => {
        const sound = new Sound(
            'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
            null,
            (error) => {
                if (error) {
                    console.log('Failed to load remote sound', error);
                    return;
                }

                sound.play((success) => {
                    if (success) {
                        console.log('Remote sound played successfully');
                    } else {
                        console.log('Remote playback failed');
                    }
                    sound.release();
                });
            }
        );
    };

    return (
        <LinearGradient colors={[colors.primaryColor, colors.secondaryColor]} style={styles.linearGradient}>
            <Header title={"Announcements"} navigation={navigation} />
            <View style={{ margin: 20 }}>
                <Button title="Play Local Sound" onPress={playLocalSound} />
                <View style={{ height: 20 }} />
                <Button title="Play Remote Sound" onPress={playRemoteSound} />
            </View>
        </LinearGradient>
    );
};

export default Announcements;

import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


export default function App() {
    return (
      <View style={styles.container}>
          <Text style={styles.textstyle}>날씨앱</Text>
      </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "flex-end",
        paddingHorizontal: 30,
        paddingVertical: 100,
        backgroundColor: "#FDF"
    },
    textstyle:{
        color: "#2c2c2c",
        fontSize: 30,
    }
});
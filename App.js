import { StatusBar } from "expo-status-bar";
import React, { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import * as Notifications from "expo-notifications";
import * as Permissions from "expo-permissions";
export default function App() {
  const [visible, setVisible] = React.useState(false);
  React.useEffect(() => {
    const subscription = Notifications.addNotificationReceivedListener(
      (response) => {
        setVisible(true);
      }
    );
    return () => subscription.remove();
  }, []);

  //ExponentPushToken[iWPGjLKL-vRThXhbT26dVQ]
  return (
    <View style={styles.container}>
      {visible && (
        <View
          style={{
            position: "absolute",
            top: 40,
            backgroundColor: "green",
            width: "90%",
            height: 100,
            borderRadius: 10,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text style={{ color: "white", fontSize: 15 }}>
            Nouvelle notification
          </Text>
        </View>
      )}

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

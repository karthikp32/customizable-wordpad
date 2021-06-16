import * as React from 'react';
import { StyleSheet,  Button } from 'react-native';
import BouncyCheckbox from "react-native-bouncy-checkbox";
import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { Col, Row, Grid } from "react-native-easy-grid";

export default function CustomKeys(props: any) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Custom Keys</Text>
      <View style={[styles.container, {flex: 1, alignSelf: 'stretch', flexDirection: 'row'}]}>
        <View style={{ flex: 3, alignSelf: 'stretch', backgroundColor: "#000"  }} >
          <Text style={styles.button}>
            Delete Previous Word
          </Text>
          <Text style={styles.button}>
            Delete Previous Sentence
          </Text>
          <Text style={styles.button}>
            Hop Forward One Word
          </Text>
          <Text style={styles.button}>
            Hop Back One Word
          </Text>
          <Text style={styles.button}>
            Highlight
          </Text>
        </View>
        <View style={{ flex: 3, alignSelf: 'stretch', backgroundColor: "#000"  }} >
          <BouncyCheckbox
            size={20}
            fillColor="green"
            unfillColor="#FFFFFF"
            text="Install"
            iconStyle={{ borderColor: "green" }}
            textStyle={{ fontFamily: "JosefinSans-Regular", textAlign: 'center', borderWidth: 5  }}
            onPress={(isChecked?: boolean) => {}}
          />
          <BouncyCheckbox
            size={20}
            fillColor="green"
            unfillColor="#FFFFFF"
            text="Install"
            iconStyle={{ borderColor: "green" }}
            textStyle={{ fontFamily: "JosefinSans-Regular", textAlign: 'center', borderWidth: 5  }}
            onPress={(isChecked?: boolean) => {}}
          />
          <BouncyCheckbox
            size={20}
            fillColor="green"
            unfillColor="#FFFFFF"
            text="Install"
            iconStyle={{ borderColor: "green" }}
            textStyle={{ fontFamily: "JosefinSans-Regular", textAlign: 'center', borderWidth: 5  }}
            onPress={(isChecked?: boolean) => {}}
          />
          <BouncyCheckbox
            size={20}
            fillColor="green"
            unfillColor="#FFFFFF"
            text="Install"
            iconStyle={{ borderColor: "green" }}
            textStyle={{ fontFamily: "JosefinSans-Regular", textAlign: 'center', borderWidth: 5  }}
            onPress={(isChecked?: boolean) => {}}
          />
          <BouncyCheckbox
            size={20}
            fillColor="green"
            unfillColor="#FFFFFF"
            text="Install"
            iconStyle={{ borderColor: "green" }}
            textStyle={{ fontFamily: "JosefinSans-Regular", textAlign: 'center', borderWidth: 5  }}
            onPress={(isChecked?: boolean) => {}}
          />
          <View style={styles.update}>
            <View style={{ flex: 1, alignSelf: 'stretch', backgroundColor: "#000"  }} />
            <View style={{ flex: 1, alignSelf: 'stretch', backgroundColor: "#000"  }} >
              <Button
                onPress={updateCustomKeysInstalled}
                title="Update Custom Keys"
                color="#808080"
                accessibilityLabel="Learn more about this blue button"
              />
            </View>
            <View style={{ flex: 1, alignSelf: 'stretch', backgroundColor: "#000"  }} />
          </View>
        </View>
        <View style={{ flex: 3, alignSelf: 'stretch', backgroundColor: "#000"  }} >
          <BouncyCheckbox
            size={20}
            fillColor="red"
            unfillColor="#FFFFFF"
            text="Uninstall"
            iconStyle={{ borderColor: "red" }}
            textStyle={{ fontFamily: "JosefinSans-Regular", textAlign: 'center', borderWidth: 5 }}
            onPress={(isChecked?: boolean) => {}}
          />
          <BouncyCheckbox
            size={20}
            fillColor="red"
            unfillColor="#FFFFFF"
            text="Uninstall"
            iconStyle={{ borderColor: "red" }}
            textStyle={{ fontFamily: "JosefinSans-Regular", textAlign: 'center', borderWidth: 5  }}
            onPress={(isChecked?: boolean) => {}}
          />
          <BouncyCheckbox
            size={20}
            fillColor="red"
            unfillColor="#FFFFFF"
            text="Uninstall"
            iconStyle={{ borderColor: "red" }}
            textStyle={{ fontFamily: "JosefinSans-Regular", textAlign: 'center', borderWidth: 5  }}
            onPress={(isChecked?: boolean) => {}}
          />
          <BouncyCheckbox
            size={20}
            fillColor="red"
            unfillColor="#FFFFFF"
            text="Uninstall"
            iconStyle={{ borderColor: "red" }}
            textStyle={{ fontFamily: "JosefinSans-Regular", textAlign: 'center', borderWidth: 5  }}
            onPress={(isChecked?: boolean) => {}}
          />
          <BouncyCheckbox
            size={20}
            fillColor="red"
            unfillColor="#FFFFFF"
            text="Uninstall"
            iconStyle={{ borderColor: "red" }}
            textStyle={{ fontFamily: "JosefinSans-Regular", textAlign: 'center', borderWidth: 5  }}
            onPress={(isChecked?: boolean) => {}}
          />
        </View>
      </View>

      {/* <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <EditScreenInfo path="/screens/TabTwoScreen.tsx" /> */}
    </View>
  );
}

const updateCustomKeysInstalled = () => {

}

const showCustomKeyScreen = (pressEvent: any) => {
  console.log(pressEvent);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  button: {
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center',
    borderWidth: 5,
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  update: {
    width: '60%',
    height: '60%',
  }
});

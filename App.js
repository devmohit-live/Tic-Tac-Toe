import React from "react";
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
  Modal
} from "react-native";
import { Entypo } from "@expo/vector-icons";
import { Button } from "native-base";

var items = new Array(9).fill("empty");
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isCross: false,
      winMesaage: "",
      modalVisible: false
    };
  }

  setModalVisible = visible => {
    this.setState({ modalVisible: visible });
  };

  winGame = () => {
    if (items[0] != "empty" && items[0] == items[1] && items[1] == items[2]) {
      this.setState({
        winMesaage: (items[0] ? "Circle" : "Cross").concat(" Wins !")
      });
      this.setModalVisible(true);
    } else if (
      items[3] != "empty" &&
      items[3] == items[4] &&
      items[4] == items[5]
    ) {
      this.setState({
        winMesaage: (items[3] ? "Circle" : "Cross").concat(" Wins !")
      });
      this.setModalVisible(true);
    } else if (
      items[6] != "empty" &&
      items[6] == items[7] &&
      items[6] == items[8]
    ) {
      this.setState({
        winMesaage: (items[6] ? "Circle" : "Cross").concat(" Wins !")
      });
      this.setModalVisible(true);
    } else if (
      items[0] != "empty" &&
      items[0] == items[3] &&
      items[0] == items[6]
    ) {
      this.setState({
        winMesaage: (items[0] ? "Circle" : "Cross").concat(" Wins !")
      });
      this.setModalVisible(true);
    } else if (
      items[1] != "empty" &&
      items[1] == items[4] &&
      items[1] == items[7]
    ) {
      this.setState({
        winMesaage: (items[1] ? "Circle" : "Cross").concat(" Wins !")
      });
      this.setModalVisible(true);
    } else if (
      items[2] != "empty" &&
      items[2] == items[8] &&
      items[2] == items[5]
    ) {
      this.setState({
        winMesaage: (items[2] ? "Circle" : "Cross").concat(" Wins !")
      });
      this.setModalVisible(true);
    } else if (
      items[4] != "empty" &&
      items[0] == items[4] &&
      items[0] == items[8]
    ) {
      this.setState({
        winMesaage: (items[0] ? "Circle" : "Cross").concat(" Wins !")
      });
      this.setModalVisible(true);
    } else if (
      items[6] != "empty" &&
      items[6] == items[4] &&
      items[6] == items[2]
    ) {
      this.setState({
        winMesaage: (items[6] ? "Circle" : "Cross").concat(" Wins !")
      });
      this.setModalVisible(true);
    } else if (
      items[0] != "empty" &&
      items[1] != "empty" &&
      items[2] != "empty" &&
      items[3] != "empty" &&
      items[4] != "empty" &&
      items[5] != "empty" &&
      items[6] != "empty" &&
      items[7] != "empty" &&
      items[8] != "empty"
    ) {
      this.setState({
        winMesaage: " DRAW!! "
      });
      this.setModalVisible(true);
    }
  };

  drawItem = itemNumber => {
    if (items[itemNumber] === "empty") {
      //cehing if not touched previously
      items[itemNumber] = this.state.isCross; //setting it cicle (iscross=false by default)
      //setting move for second players ir changing iscross from false to true ie both the players shoud'nt get same thing (cross or circle)
      this.setState({ isCross: !items[itemNumber] }); //oppsoite of previous player if it was cross now it is circle
    }

    //check for win
    this.winGame();
  };

  chosseItemIcon = itemNumber => {
    if (items[itemNumber] !== "empty") {
      return items[itemNumber] ? "circle" : "cross";
    }
    return "pencil";
  };

  chosseItemColor = itemNumber => {
    if (items[itemNumber] !== "empty") {
      return items[itemNumber] ? "#FF2768" : "green";
    }
    return "black";
  };

  resetGame = () => {
    items.fill("empty");
    this.setState({ winMesaage: "" });
    // forceupdate to the component
    this.setModalVisible(!this.state.modalVisible);
    this.forceUpdate();
  };

  render() {
    return (
      <View style={styles.container}>
        <Image
          source={require("./assets/128.png")}
          style={{ width: 128, height: 128 }}
        ></Image>
        <Text
          style={{
            margin: 15,
            color: "purple",
            fontWeight: "bold",
            fontSize: 30,
            marginBottom: 15
          }}
        >
          LearnCodeOnline Game
        </Text>
        <View style={styles.grid}>
          <View style={styles.row}>
            <View style={styles.item}>
              <TouchableOpacity
                onPress={() => {
                  this.drawItem(0);
                }}
              >
                <Entypo
                  name={this.chosseItemIcon(0)}
                  size={50}
                  color={this.chosseItemColor(0)}
                />
              </TouchableOpacity>
            </View>
            <View style={styles.item}>
              <TouchableOpacity
                onPress={() => {
                  this.drawItem(1);
                }}
              >
                <Entypo
                  name={this.chosseItemIcon(1)}
                  size={50}
                  color={this.chosseItemColor(1)}
                />
              </TouchableOpacity>
            </View>
            <View style={styles.item}>
              <TouchableOpacity
                onPress={() => {
                  this.drawItem(2);
                }}
              >
                <Entypo
                  name={this.chosseItemIcon(2)}
                  size={50}
                  color={this.chosseItemColor(2)}
                />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.row}>
            <View style={styles.item}>
              <TouchableOpacity
                onPress={() => {
                  this.drawItem(3);
                }}
              >
                <Entypo
                  name={this.chosseItemIcon(3)}
                  size={50}
                  color={this.chosseItemColor(3)}
                />
              </TouchableOpacity>
            </View>
            <View style={styles.item}>
              <TouchableOpacity
                onPress={() => {
                  this.drawItem(4);
                }}
              >
                <Entypo
                  name={this.chosseItemIcon(4)}
                  size={50}
                  color={this.chosseItemColor(4)}
                />
              </TouchableOpacity>
            </View>
            <View style={styles.item}>
              <TouchableOpacity
                onPress={() => {
                  this.drawItem(5);
                }}
              >
                <Entypo
                  name={this.chosseItemIcon(5)}
                  size={50}
                  color={this.chosseItemColor(5)}
                />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.row}>
            <View style={styles.item}>
              <TouchableOpacity
                onPress={() => {
                  this.drawItem(6);
                }}
              >
                <Entypo
                  name={this.chosseItemIcon(6)}
                  size={50}
                  color={this.chosseItemColor(6)}
                />
              </TouchableOpacity>
            </View>
            <View style={styles.item}>
              <TouchableOpacity
                onPress={() => {
                  this.drawItem(7);
                }}
              >
                <Entypo
                  name={this.chosseItemIcon(7)}
                  size={50}
                  color={this.chosseItemColor(7)}
                />
              </TouchableOpacity>
            </View>
            <View style={styles.item}>
              <TouchableOpacity
                onPress={() => {
                  this.drawItem(8);
                }}
              >
                <Entypo
                  name={this.chosseItemIcon(8)}
                  size={50}
                  color={this.chosseItemColor(8)}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
        {/* <Text style={styles.winMessage}>{this.state.winMesaage}</Text> */}

        <Modal
          // style={styles.container}
          animationType="slide"
          transparent={false}
          visible={this.state.modalVisible}
          // onRequestClose={() => {
          //   Alert.alert("Modal has been closed.");
          // }}
        >
          <View
            style={{
              flex: 1,
              alignContent: "center",
              justifyContent: "center"
            }}
          >
            <View style={styles.container}>
              <Image source={require("./assets/mascot.png")}></Image>
              <Text style={styles.winMessage}>{this.state.winMesaage}</Text>
              <Button
                full
                rounded
                primary
                style={styles.btn}
                onPress={this.resetGame}
              >
                <Text style={styles.btntext}> OK </Text>
              </Button>
            </View>
          </View>
        </Modal>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#CFEED1"
  },
  grid: {},
  row: {
    flexDirection: "row"
  },
  item: {
    borderWidth: 2,
    borderColor: "#000",
    padding: 30
  },
  btn: {
    margin: 20,
    padding: 10
  },
  winMessage: {
    fontSize: 25,
    fontWeight: "bold",
    alignItems: "center",
    justifyContent: "center",
    color: "purple"
  },
  btntext: {
    color: "#fff",
    fontWeight: "bold"
  }
});

// #01CBC6

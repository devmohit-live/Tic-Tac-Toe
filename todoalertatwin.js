import React from "react";
import { View, StyleSheet, Text, TouchableOpacity, Alert } from "react-native";
import { Entypo } from "@expo/vector-icons";

var items = new Array(9).fill("empty");
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isCross: false,
      winMesaage: ""
    };
  }

  winGame = () => {
    if (items[0] != "empty" && items[0] == items[1] && items[0] == items[2]) {
      this.setState({
        winMesaage: (items[0] ? "Circle" : "Cross").concat(" Wins !")
      });
      this.showAlert();
    } else if (
      items[3] != "empty" &&
      items[3] == items[4] &&
      items[4] == items[5]
    ) {
      this.setState({
        winMesaage: (items[3] ? "Circle" : "Cross").concat(" Wins !")
      });
      this.showAlert();
    } else if (
      items[6] != "empty" &&
      items[6] == items[7] &&
      items[4] == items[8]
    ) {
      this.setState({
        winMesaage: (items[6] ? "Circle" : "Cross").concat(" Wins !")
      });
      this.showAlert();
    } else if (
      items[0] != "empty" &&
      items[0] == items[3] &&
      items[0] == items[6]
    ) {
      this.setState({
        winMesaage: (items[0] ? "Circle" : "Cross").concat(" Wins !")
      });
      this.showAlert();
    } else if (
      items[1] != "empty" &&
      items[1] == items[4] &&
      items[1] == items[7]
    ) {
      this.setState({
        winMesaage: (items[1] ? "Circle" : "Cross").concat(" Wins !")
      });
      this.showAlert();
    } else if (
      items[2] != "empty" &&
      items[2] == items[8] &&
      items[2] == items[5]
    ) {
      this.setState({
        winMesaage: (items[2] ? "Circle" : "Cross").concat(" Wins !")
      });
      this.showAlert();
    } else if (
      items[4] != "empty" &&
      items[0] == items[4] &&
      items[0] == items[8]
    ) {
      this.setState({
        winMesaage: (items[0] ? "Circle" : "Cross").concat(" Wins !")
      });
      this.showAlert();
    } else if (
      items[6] != "empty" &&
      items[6] == items[4] &&
      items[6] == items[2]
    ) {
      this.setState({
        winMesaage: (items[6] ? "Circle" : "Cross").concat(" Wins !")
      });
      this.showAlert();
    }
  };
  showAlert = () => {
    Alert.alert(
      "Congratulations!!",
      <Text> {this.state.winMesaage}</Text>,
      [
        {
          text: "OK",
          onPress: () => this.resetGame
          // style: "btn"
        }
      ],
      { cancelable: false }
    );

    // this.resetGame();
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
      return items[itemNumber] ? "red" : "green";
    }
    return "black";
  };

  resetGame = () => {
    items.fill("empty");
    this.setState({ winMesaage: "" });
    // forceupdate to the component
    forceUpdate();
  };

  render() {
    return (
      <View style={styles.container}>
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
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
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
  btn: {},
  winstyle: {
    fontSize: 25,
    color: "#000",
    fontWeight: "bold"
  }
});

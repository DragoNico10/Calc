import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Platform,
  StatusBar,
  SafeAreaView,
} from 'react-native';
//import { DrawerActions } from '@react-navigation/native';
import { RFValue } from 'react-native-responsive-fontsize';
import MaterialCommunityIcons from '@expo/vector-icons';
//var TinyDB = require('tinydb');
//test_db = new TinyDB('../UserData.json');

let val1, val2;

export default class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      operation: ' ',
      result: 0,
      totalOperation: [],
    };
  }
  calculate() {
    let result = this.state.totalOperation[0];
    let tempNum;
    let tempOp;
    for (let val of this.state.totalOperation) {
      if (val == '÷' || val == '×' || val == '-' || val == '+') {
        tempOp = val;
      } else {
        if (!tempNum) {
          tempNum = val;
        } else {
          switch (tempOp) {
            case '÷': {
              result+=(tempNum/val)
              break;
            }
            case '×': {
              result+=(tempNum*val)
              break;
            }
            case '-': {
              result-=val
              break;
            }
            case '+': {
              result+=val
              break;
            }
            default:
              break;
          }
        }
      }
    }
    this.setState({ totalOperation: [], result: result });
  }
  render() {
    return (
      <View style={styles.mainView}>
        <SafeAreaView style={styles.safeArea} />
        <View style={styles.text}>
          <Text style={styles.operationText}>{this.state.operation}</Text>
          <Text style={styles.resultText}>{this.state.result}</Text>
          <TouchableOpacity
            style={styles.menuButton}
            onPress={() =>{}
            }>
            <MaterialCommunityIcons
              name={'menu'}
              color={'black'}
              size={RFValue(60)}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.buttons}>
          <View style={styles.row}>
            <TouchableOpacity style={styles.specialButton}>
              <MaterialCommunityIcons
                name={'percent-outline'}
                color={'black'}
                size={RFValue(80)}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.specialButton}
              onPress={() => {
                this.setState({ operation: '0' });
              }}>
              <Text style={{ fontSize: RFValue(65) }}>CE</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.specialButton}
              onPress={() => {
                this.setState({ operation: ' ', result: '0', totalOperation:[]});
              }}>
              <Text style={{ fontSize: RFValue(65) }}>C</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.specialButton}
              onPress={() => {
                let num = '' + this.state.result;
                num = num.substr(0, num.length - 1);

                this.setState({
                  result: num == '' ? 0 : +num,
                });
              }}>
              <MaterialCommunityIcons
                name={'backspace-outline'}
                color={'black'}
                size={RFValue(80)}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.row}>
            <TouchableOpacity style={styles.specialButton}>
              <Text style={{ fontSize: RFValue(55) }}>⅟×</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.specialButton}>
              <MaterialCommunityIcons
                name={'format-superscript'}
                color={'black'}
                size={RFValue(80)}
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.specialButton}>
              <MaterialCommunityIcons
                name={'square-root'}
                color={'black'}
                size={RFValue(70)}
              />
              <Text
                style={{
                  fontSize: RFValue(50),
                  position: 'absolute',
                  bottom: RFValue(17.5),
                  left: RFValue(3),
                }}>
                ²
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.specialButton}
              onPress={() => {
                if (this.state.result !== '0') {
                  this.state.totalOperation.push(this.state.result, '÷');
                  this.setState({
                    operation: this.state.totalOperation,
                    result: 0,
                  });
                }
              }}>
              <MaterialCommunityIcons
                name={'division'}
                color={'black'}
                size={RFValue(80)}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.row}>
            <TouchableOpacity
              style={styles.numberButton}
              onPress={() => {
                let num = '' + this.state.result;
                num === '0' ? (num = '7') : (num = num + '7');
                this.setState({ result: +num });
              }}>
              <MaterialCommunityIcons
                name={'numeric-7'}
                color={'black'}
                size={RFValue(80)}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.numberButton}
              onPress={() => {
                let num = '' + this.state.result;
                num === '0' ? (num = '8') : (num = num + '8');
                this.setState({ result: +num });
              }}>
              <MaterialCommunityIcons
                name={'numeric-8'}
                color={'black'}
                size={RFValue(80)}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.numberButton}
              onPress={() => {
                let num = '' + this.state.result;
                num === '0' ? (num = '9') : (num = num + '9');
                this.setState({ result: +num });
              }}>
              <MaterialCommunityIcons
                name={'numeric-9'}
                color={'black'}
                size={RFValue(80)}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.specialButton}
              onPress={() => {
                if (this.state.result !== '0') {
                  this.state.totalOperation.push(this.state.result, '×');
                  this.setState({
                    operation: this.state.totalOperation,
                    result: 0,
                  });
                }
              }}>
              <MaterialCommunityIcons
                name={'close'}
                color={'black'}
                size={RFValue(80)}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.row}>
            <TouchableOpacity
              style={styles.numberButton}
              onPress={() => {
                let num = '' + this.state.result;
                num === '0' ? (num = '4') : (num = num + '4');
                this.setState({ result: +num });
              }}>
              <MaterialCommunityIcons
                name={'numeric-4'}
                color={'black'}
                size={RFValue(80)}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.numberButton}
              onPress={() => {
                let num = '' + this.state.result;
                num === '0' ? (num = '5') : (num = num + '5');
                this.setState({ result: +num });
              }}>
              <MaterialCommunityIcons
                name={'numeric-5'}
                color={'black'}
                size={RFValue(80)}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.numberButton}
              onPress={() => {
                let num = '' + this.state.result;
                num === '0' ? (num = '6') : (num = num + '6');
                this.setState({ result: +num });
              }}>
              <MaterialCommunityIcons
                name={'numeric-6'}
                color={'black'}
                size={RFValue(80)}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.specialButton}
              onPress={() => {
                if (this.state.result !== '0') {
                  this.state.totalOperation.push(this.state.result, '-');
                  this.setState({
                    operation: this.state.totalOperation,
                    result: 0,
                  });
                }
              }}>
              <MaterialCommunityIcons
                name={'minus'}
                color={'black'}
                size={RFValue(80)}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.row}>
            <TouchableOpacity
              style={styles.numberButton}
              onPress={() => {
                let num = '' + this.state.result;
                num === '0' ? (num = '1') : (num = num + '1');
                this.setState({ result: +num });
              }}>
              <MaterialCommunityIcons
                name={'numeric-1'}
                color={'black'}
                size={RFValue(80)}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.numberButton}
              onPress={() => {
                let num = '' + this.state.result;
                num === '0' ? (num = '2') : (num = num + '2');
                this.setState({ result: +num });
              }}>
              <MaterialCommunityIcons
                name={'numeric-2'}
                color={'black'}
                size={RFValue(80)}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.numberButton}
              onPress={() => {
                let num = '' + this.state.result;
                num === '0' ? (num = '3') : (num = num + '3');
                this.setState({ result: +num });
              }}>
              <MaterialCommunityIcons
                name={'numeric-3'}
                color={'black'}
                size={RFValue(80)}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.specialButton}
              onPress={() => {
                if (this.state.result !== '0') {
                  this.state.totalOperation.push(this.state.result, '+');
                  this.setState({
                    operation: this.state.totalOperation,
                    result: 0,
                  });
                }
              }}>
              <MaterialCommunityIcons
                name={'plus'}
                color={'black'}
                size={RFValue(80)}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.row}>
            <TouchableOpacity style={styles.numberButton}>
              <MaterialCommunityIcons
                name={'plus-minus-variant'}
                color={'black'}
                size={RFValue(80)}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.numberButton}
              onPress={() => {
                let num = '' + this.state.result;
                num === '0' ? (num = '0') : (num = num + '0');
                this.setState({ result: +num });
              }}>
              <MaterialCommunityIcons
                name={'numeric-0'}
                color={'black'}
                size={RFValue(80)}
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.numberButton}>
              <Text style={{ fontSize: RFValue(60) }}>.</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.equalButton}
              onPress={() => {
                this.state.totalOperation.push(this.state.result);
                this.calculate();
              }}>
              <MaterialCommunityIcons
                name={'equal'}
                color={'black'}
                size={RFValue(80)}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  numberButton: {
    width: '23%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    backgroundColor: '#fafafa',
  },
  specialButton: {
    width: '23%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    backgroundColor: '#f0f0f0',
  },
  equalButton: {
    width: '23%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    backgroundColor: '#b4b4df',
  },
  mainView: {
    height: '100%',
    backgroundColor: '#e6e6e6',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    backgroundColor: '#e6e6e6',
    height: '15%',
  },
  safeArea: {
    height: StatusBar.currentHeight ? StatusBar.currentHeight : 0,
  },
  text: {
    alignItems: 'flex-end',
    //justifyContent:'center',
    marginBottom: -10,
  },
  resultText: {
    fontSize: RFValue(50),
    marginTop: -10,
  },
  operationText: {
    fontSize: RFValue(15),
  },
  menuButton: {
    position: 'absolute',
    alignSelf: 'flex-start',
  },
  buttons: {
    justifyContent: 'space-evenly',
    height: Platform.OS == 'android' || Platform.OS == 'ios' ? '87%' : '90%',
  },
});

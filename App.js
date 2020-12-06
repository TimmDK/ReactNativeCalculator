import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Vibration } from 'react-native';

const AppButton = ({ onPress, title, style }) => (
    <TouchableOpacity onPress={onPress} style={styles.AppButtonContainer}>
        <Text style={styles.AppButtonText}>{title}</Text>
    </TouchableOpacity>
)

// const buttons = ['C', '/', 7, 8, 9, '*', 4, 5, 6, '-', 1, 2, 3, '+', 0, '.', '=']
const buttons = [7, 8, 9, '/', 4, 5, 6, '*', 1, 2, 3, '+', '.', 0, 'C', '-', '=']

var fixedWidth = 200

class App extends Component{
    constructor(props){
        super(props)
        
        this.state = {
            calculator: '',
            operator: '',
            newNum: 0,
            curNum: '',
        }
    }

    handleInput(toUse){
        if(toUse == '/' || toUse == '+' || toUse == '-' || toUse == '*'){
            this.setState({newNum: parseFloat(this.state.curNum)})
            this.setState({curNum: 0})
            this.setState({operator: toUse})
            Vibration.vibrate(35);
        }else if(toUse == "C"){
            this.setState({newNum: 0})
            this.setState({curNum: "0"})
            this.setState({operator: ''})
            Vibration.vibrate(35);
        }
        else if(toUse == "="){
            this.setState({curNum: eval(this.state.newNum + this.state.operator + this.state.curNum)})
            Vibration.vibrate(35);
            if(this.curNum == this.state.curNum){
                this.setState({curNum: this.state.curNum.toString()})
            }
            
            //this.setState({curNum: parseInt(this.state.newNum + this.state.operator + this.state.curNum)})
        }
        else{
            Vibration.vibrate(35);
            if(this.state.curNum == "0")
            {
                this.setState({curNum: toUse})
            }
            else{
                var temp = this.state.curNum.toString() + toUse
                this.setState({curNum: temp})
            }
            
        }
    }

    render(){
        return(
            <View style={styles.container}>
                <View style={styles.resultContainer}>
                    <Text style={styles.resultText}>{this.state.curNum}</Text>
                </View>
                <View style={styles.calcButtonContainer}>
                    {buttons.map((button) =>
                    <TouchableOpacity key={button} style={styles.calcButton} onPress={() => this.handleInput(button)}>
                        <Text style={styles.calcButtonText}>{button}</Text>
                    </TouchableOpacity>
                    )}
                </View>
                <StatusBar style="auto" />
            </View>

            
    )}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  calcButtonContainer:{
    width: '100%',
    height: '30%',
    flexDirection: 'row',
    flexWrap: 'wrap',
},
calcButton:{
    borderColor: 'black',
    borderWidth: 1,
    backgroundColor: '#8ba8d6',
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: '24%',
    minHeight: '54%',
    flex: 2,
},
calcButtonText: {
    color: "#000",
    fontSize: 25
  },
  resultContainer: {
    width: "100%",
    height: "20%",
    backgroundColor: "black",
    alignContent: "flex-end",
    justifyContent: 'flex-end',
  },
  resultText:{
      maxHeight: 100,
      color: "#00bde3",
      margin: 20,
      fontSize: 50,
      fontWeight: "bold",
  }
})

export default App





{/* <View style={{flexDirection: "row", width: fixedWidth, backgroundColor: "red"}}>
                    <Text style={{flex:1, textAlign:"center"}}>{this.state.calculator}</Text>
                </View>
                <View style={{flexDirection: "row", width: fixedWidth, backgroundColor: "pink"}}>
                    <AppButton onPress={() => this.doSomething()} title="7" />
                    <AppButton onPress={() => this.doSomething(this.title)} title="8" />
                    <AppButton onPress={() => this.doSomething(this.title)} title="9" />
                    <AppButton onPress={() => this.doSomething(this.title)} title="+" />
                </View>
                <View style={{flexDirection: "row", width: fixedWidth, backgroundColor: "lightblue"}}>
                    <AppButton title="4" />
                    <AppButton title="5" />
                    <AppButton title="6" />
                    <AppButton title="-" />
                </View>
                <View style={{flexDirection: "row", width: fixedWidth, backgroundColor: "purple"}}>
                    <AppButton title="1" />
                    <AppButton title="2" />
                    <AppButton title="3" />
                    <AppButton title="x" />
                </View>
                <View style={{flexDirection: "row", width: fixedWidth, backgroundColor: "grey"}}>
                    <AppButton title="0" />
                    <AppButton title="." />
                    <AppButton title="=" />
                    <AppButton title="/" />
                </View> */}
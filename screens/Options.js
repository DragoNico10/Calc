import React,{Component} from 'react'
import {View,Text, TouchableOpacity, StyleSheet} from 'react-native'
import MaterialCommunityIcons from '@expo/vector-icons'
import {RFValue} from 'react-native-responsive-fontsize'
import {DrawerActions} from '@react-navigation/native'

export default class Options extends Component{
  constructor(props){
    super(props)
  }
  render(){
    return(
      <View>
      <Text>
        Options
      </Text>
      <TouchableOpacity style={styles.menuButton} onPress={()=>this.props.navigation.dispatch(DrawerActions.toggleDrawer())}>
            <MaterialCommunityIcons name={'menu'} color={'black'} size={RFValue(50)}/>
          </TouchableOpacity>
      </View>
    )
  }
}

const styles=StyleSheet.create({
  menuButton:{
    position:'absolute',
    alignSelf:'flex-start'
  }
})
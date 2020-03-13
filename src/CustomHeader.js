import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';


export class CustomHeader extends Component {
  render() {
    return (
          <View style={{ flexDirection: 'row', height: 60, borderBottomWidth: 1, borderColor: '#BEBEBE'}}>
            <View style={{ flex: 1, justifyContent: "center"}}>
              {/* <Image style={{ width: 30, height: 30, marginLeft: 5 }}
                source={IMG.ICON_MENU}
                resizeMode="contain" /> */}
            </View>      
            <View style={{ flex: 2, justifyContent: "center"}}>
              <Text style={{ textAlign: 'center',fontSize:18,fontWeight:"bold"}}>{this.props.title}</Text>
            </View>
            <View style={{ flex: 1 }}></View>
          </View>
        );
  }
}

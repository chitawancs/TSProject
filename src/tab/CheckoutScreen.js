import React, { Component } from 'react';
import { Text, View, SafeAreaView, Button, TextInput } from 'react-native';

export class CheckoutScreen extends Component {
  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <View style={{ flex: 1, marginTop: 10 }}>
          {/* name */}
          <Text style={{ marginLeft: 5 }} >Full Name</Text>
          <TextInput
            placeholder="Enter Your Name"
            underlineColorAndroid='transparent'
            maxLength={20}
            style={{ margin: 5, height: 40, borderColor: 'gray', borderWidth: 1, backgroundColor: "#fff" }}>
            Chitawan Duangsai
          </TextInput>

          {/* phone */}
          <Text style={{ marginLeft: 5 }} >Phone Number</Text>
          <TextInput
            placeholder="Enter Your Phone Number"
            underlineColorAndroid='transparent'
            keyboardType={'numeric'}
            maxLength={10}
            style={{ margin: 5, height: 40, borderColor: 'gray', borderWidth: 1, backgroundColor: "#fff" }}>
            0812345678
          </TextInput>

          {/* email */}
          <Text style={{ marginLeft: 5 }} >E-mail address</Text>
          <TextInput
            placeholder="Enter Your E-mail"
            underlineColorAndroid='transparent'
            keyboardType={'email-address'}
            maxLength={32}
            style={{ margin: 5, height: 40, borderColor: 'gray', borderWidth: 1, backgroundColor: "#fff" }}>
            meeh1234@gmail.com
          </TextInput>

          {/* address */}
          <Text style={{ marginLeft: 5 }} >Address</Text>
          <TextInput
            style={{
              height: 100,
              margin: 5,
              padding: 1,
              borderColor: "gray",
              borderWidth: 1,
              backgroundColor: "#fff"
            }}
            multiline={true}
            maxLength={108}
            placeholder="Enter Your Address"> 1234 New Petchaburi Rd. Makkasan Ratchathewi Bangkok 10400
            </TextInput>

          <View style={{ margin: 10 }}>
            <Button
              onPress={() => this.props.navigation.navigate('TyOrder')}
              title="Next"
              color="#191970"
            />
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

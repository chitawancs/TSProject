import React, { Component } from 'react';
import { Modal, Text, View, StyleSheet, FlatList, Button, Image } from 'react-native';
import DATA from '../data/order.json'
import { IMG } from '../constants/img'
import { StackActions } from '@react-navigation/native';

export class TyOrderScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      item: [],
      show: false
    };
  }
  // flatlist
  renderRe = ({ item }) => {
    return (
      <View style={{ backgroundColor: "#fff" }} >
        <View style={{ width: "100%", flexDirection: "row", justifyContent: "space-between" }}>
          <Text>x{item.count} {item.name}</Text>
          <Text style={{ fontSize: 16, color: "blue" }}>{item.total} ฿</Text></View>
      </View>
    )
  };

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: "#fff"}}>

        <View style={{ borderBottomWidth: 1, backgroundColor: "#fff", margin: 20 }}>
          <Text style={{ color: "#D4AF37", fontSize: 18 }}>My Order</Text>
          <Text>OrderID: {DATA.orderData.sourceOrderId}</Text>
          <Text>Date: {DATA.orderData.date} </Text>

          {/* list item */}
          <FlatList style={styles.container}
            horizontal={false}
            data={DATA.orderData.items}
            renderItem={this.renderRe}
            keyExtractor={item => item.id}
            keyExtractor={(item, index) => index.toString()}
          />

          <View style={{ width: "100%", flexDirection: "row", justifyContent: "space-between" }}>
            <Text>Delivery</Text>
            <Text style={{ fontSize: 16, color: "blue" }} >40 ฿</Text>
          </View>

          <View style={{ width: "100%", flexDirection: "row", justifyContent: "space-between" }}>
            <Text>Total</Text>
            <Text style={{ fontSize: 16, color: "blue" }} >{DATA.orderData.totalAll} ฿</Text>
          </View>
          <Text></Text>
        </View>

        <View style={{ backgroundColor: "#fff", margin: 20 }}>
          <Text style={{ color: "#D4AF37", fontSize: 18 }} >Deliver to</Text>
          <Text>{DATA.orderData.shipTo.name}</Text>
          <Text>{DATA.orderData.shipTo.email}</Text>
          <Text>{DATA.orderData.shipTo.phone}</Text>
          <Text>{DATA.orderData.shipTo.address}</Text>
          <Text></Text>
          <Button color="#191970" title="confirm" onPress={() => { this.setState({ show: true }) }}></Button>
        </View>

        {/* thank sceen */}
        <Modal
          transparent={true}
          visible={this.state.show}
        >
          <View style={{ backgroundColor: "#000000aa", flex: 1 }}>
            <View style={{ backgroundColor: "#fff", flex: 1, marginVertical: 200, marginHorizontal: 30, padding: 40, borderRadius: 5 }}>
              <View style={{ backgroundColor: "#fff", borderBottomWidth: 1, borderColor: "gray", alignItems: "center" }}>
                <Image style={{ width: 100, height: 100, marginBottom: 10 }}
                  source={IMG.TY}
                  resizeMode="contain" />
                <Text>Hey {DATA.orderData.shipTo.name},</Text>
                <Text>Thanks for your purchase.</Text>
                <Text></Text>
              </View>
              <Text>Date: {DATA.orderData.date} </Text>

              <View style={{ width: "100%", flexDirection: "row", justifyContent: "space-between" }}>
                <Text>Total</Text>
                <Text style={{ fontSize: 16, color: "blue" }} >{DATA.orderData.totalAll} ฿</Text>
              </View>
              <View style={{ width: "100%", flexDirection: "row", justifyContent: "space-between" }}>
                <Text>Order ID</Text>
                <Text style={{ fontSize: 16, color: "blue" }} >#{DATA.orderData.sourceOrderId}</Text>
              </View>
              <Text></Text>
              <Button color="#191970" title="OK" onPress={() => { this.setState({ show: false }); this.props.navigation.navigate('Home'); this.props.navigation.dispatch(StackActions.popToTop()); }}
              ></Button>
            </View>
          </View>
        </Modal>
        
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
  },  
});
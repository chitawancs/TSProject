import React, { Component } from 'react';
import { Text, View, SafeAreaView, Image, StyleSheet, FlatList, Button } from 'react-native';
import { CustomHeader } from '../index'
import DATA from '../data/cart.json'

export class CartScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      item: []
    }
  }
  // item flatlist
  renderRe = ({ item }) => {
    return (
      <View style={styles.card}>
        <Image style={styles.cardImage} source={{ uri: item.img }} />
        <View style={styles.container2}>
          <Text style={styles.cardText}>{item.name}</Text>
          <View style={{ width: "100%", flexDirection: "row", justifyContent: "space-between" }}>
            <Text style={styles.cardText}>x{item.count}</Text>
            <Text style={styles.blue}>{item.total} ฿</Text></View>
        </View>
      </View>
    )
  };

  render() {
    return (
      <SafeAreaView style={{ flex: 1, }}>
        <CustomHeader title="MyCart"></CustomHeader>
        {/* view of list */}
        <View style={{ flex: 0.7, backgroundColor: "#fff" }} >
          <FlatList style={styles.container}
            horizontal={false}
            data={DATA.items}
            renderItem={this.renderRe}
            keyExtractor={item => item.id}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>

        <View style={{ flex: 0.3, backgroundColor: "#fff" }} >
          <View style={{ flex: 1, backgroundColor: "#E4E8E8", margin:10}}>
            
            <View style={{ flexDirection: "row", justifyContent: "space-between", backgroundColor: "#E4E8E8", margin:10}}>
              <Text>Sub Total</Text>
              <Text style={styles.blue}>{DATA.total} ฿</Text>
            </View>

            <View style={{ borderBottomColor: "#000", borderBottomWidth: 1, flexDirection: "row", justifyContent: "space-between", backgroundColor: "#E4E8E8", margin:10}}>
              <Text >Delivery</Text>
              <Text style={styles.blue}>40 ฿</Text>

            </View>
            <View style={{ flexDirection: "row", justifyContent: "space-between", backgroundColor: "#E4E8E8", margin:10}}>
              <Text >Total</Text>
              <Text style={styles.blue}>{DATA.totalAll} ฿</Text>

            </View >
            <View>
              <Button
                onPress={() => this.props.navigation.navigate('Checkout')}
                title="Checkout"
                color="#191970"
              />
            </View>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  blue:{
    fontSize: 16, 
    color: "blue"
  },
  container: {
    backgroundColor: "#fff",
  },
  container2: {
    alignItems: "flex-start",
    justifyContent: "space-between",
    flex: 0.5,
    marginTop: 10,
    marginBottom: 10,
    marginRight: 10,
    marginLeft: 10,
    backgroundColor: "#fff"
  },
  cardText: {
    fontSize: 14,
  },
  card: {
    flexDirection: 'row',
    backgroundColor: "#fff",
    marginTop: 5,
    marginBottom: 5,
    marginLeft: "2%",
    width: "96%",
    elevation: 10,
    borderRadius: 2
  },
  cardImage: {
    borderColor: "gray",
    borderWidth: 1,
    flex: 0.5,
    marginTop: "2%",
    marginBottom: "2%",
    marginLeft: "2%",
    height: 110
  }
});
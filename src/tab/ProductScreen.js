import React, { Component } from 'react';
import { Text, View, SafeAreaView, Image, TouchableOpacity, StyleSheet, FlatList, Button} from 'react-native';
import { CustomHeader } from '../index'
import DATA from '../data/product.json'

export class ProductScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      item: []
    }
  }
  // FlatList
  renderRe = ({ item }) => {
    return (
      <TouchableOpacity style={styles.card}>
        <Image style={styles.cardImage} source={{ uri: item.img }}/>
        <View style={styles.container2}>
          <Text style={styles.cardText}>{item.name}</Text>
          <Text style={styles.cardText}>{item.price} ฿</Text>
          <Button onPress={() => this.props.navigation.navigate('Crat')}
            title="ADD TO CART"
            color="#191970"
          />
        </View>
      </TouchableOpacity>
    )
  };

  render() {
    return (
      <SafeAreaView style={{ flex: 1, }}>
        <CustomHeader title="Product"></CustomHeader>

        {/* list product */}
        <FlatList style={styles.container}
          horizontal={false}
          data={DATA}
          renderItem={this.renderRe}
          keyExtractor={item => item.id}
          keyExtractor={(item, index) => index.toString()}
        />

      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
  },
  container2: {
    alignItems: "flex-start",
    justifyContent: "center",
    flex: 0.5,
    marginTop: "2%",
    marginBottom: "2%",
    marginRight: "2%",
    marginLeft: "2%",
    backgroundColor: "#fff"
  },
  cardText: {
    fontSize: 17,
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
    flex: 0.5,
    marginTop: "2%",
    marginBottom: "2%",
    marginLeft: "2%",
    width: "100%",
    height: 150
  }
});

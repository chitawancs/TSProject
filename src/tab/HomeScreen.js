import React, { Component } from 'react';
import { Text, View, SafeAreaView, StyleSheet, Image, TouchableOpacity, FlatList, Button, Alert } from 'react-native';
import { CustomHeader } from '../index'
import { BackgroundCarousel } from "./BackgroundCarousel";
import DATAP from '../data/popular.json'
import DATAR from '../data/recom.json'

const images = [
  "https://sv1.picz.in.th/images/2020/03/09/Qd6gPS.jpg",
  "https://sv1.picz.in.th/images/2020/03/09/Qd6jd9.jpg",
  "https://sv1.picz.in.th/images/2020/03/09/Qd6vbe.jpg",
  "https://sv1.picz.in.th/images/2020/03/09/QdnNry.jpg"
];

export class HomeScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      item: []
    }
  }

  renderRe = ({ item }) => {
    return (
      <TouchableOpacity style={styles.card} >
        <Image style={styles.cardImage} source={{ uri: item.img }} />
        <View style={styles.dis}>
          <Text style={{ fontSize: 12, marginLeft: 5, textAlign: 'center' }}>{item.name}</Text>
          <Text style={{ fontSize: 12, marginLeft: 5, }}>{item.price} ฿</Text>
          <Button
            title="Add to Cart"
            color="#191970"
            onPress={() => this.props.navigation.navigate('Crat')}
          />
        </View>
      </TouchableOpacity>
    )
  };

  render() {
    return (
      <SafeAreaView style={{ flex: 1, }}>
        <CustomHeader title="Home" />
        <View style={styles.autusc}>
          <BackgroundCarousel images={images} />
        </View>
        <View style={styles.listview}>
          {/* Popular */}
          <View style={styles.popview}>
            <Text style={{ fontWeight: "bold", fontSize: 16, color: "gray", marginLeft: 5 }}>Popular</Text>
            <View style={styles.item}>
              <FlatList style={styles.container}
                horizontal={true}
                data={DATAP}
                renderItem={this.renderRe}
                keyExtractor={item => item.id}
                keyExtractor={(item, index) => index.toString()}
              />
            </View>
          </View>
          {/* Recommended */}
          <View style={styles.popview}>
            <Text style={{ fontWeight: "bold", fontSize: 16, color: "gray", marginLeft: 5 }}>Recommended for you</Text>
            <View style={styles.item}>
              <FlatList style={styles.container}
                horizontal={true}
                data={DATAR}
                renderItem={this.renderRe}
                keyExtractor={item => item.id}
                keyExtractor={(item, index) => index.toString()}
              />
            </View>
          </View>

        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  autusc: {
    flex: 0.3,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff"
  },
  listview: {
    flex: 0.7,
    backgroundColor: "#fff"
  },
  popview: {
    flex: 0.5,
    backgroundColor: "#fff"
  },
  dis: {
    alignItems: "center",
    flex: 0.4,
    backgroundColor: "#fff",
  },
  item: {
    flex: 1,
    backgroundColor: "#fff",
    flexDirection: 'row',
  },
  card: {
    width: 150,
    borderWidth: 4,
    borderColor: "gray",
    backgroundColor: "#fff",
    marginTop: 5,
    marginBottom: 5,
    marginRight: 5,
    marginLeft: 5,
    borderRadius: 8
  },
  cardImage: {
    flex: 0.5,
    width: "100%",
    height: 150
  }
});
import React, { Component } from 'react';
import { Text, View, SafeAreaView, Dimensions } from 'react-native';
import { CustomHeader } from '../index'
import { LineChart } from "react-native-chart-kit";

export class ReportScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }
  render() {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
        <CustomHeader title="Report" />

        <View style={{ flex: 1, marginTop: 10 }}>
          <Text style={{ textAlign: 'center', fontSize: 16, fontWeight: "bold" }}> Report of March</Text>
          <LineChart
            data={{
              labels: ["PD1", "PD2", "PD3", "PD4", "PD5", "PD6", "PD7", "PDd8", "PD9", "PD10"],
              datasets: [
                {
                  data: [4, 32, 45, 39, 28, 22, 31, 19, 17, 41]
                },
              ],
            }}
            width={Dimensions.get('window').width}
            height={255}
            fromZero={true}
            yAxisSuffix={" EA"}
            chartConfig={{
              backgroundColor: "#e26a00",
              backgroundGradientFrom: "#191970",
              backgroundGradientTo: "#ffa726",
              strokeWidth: 5,
              decimalPlaces: 0, // optional, defaults to 2dp
              color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
              labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            }}
            style={{
              marginVertical: 8,
              borderRadius: 1,
              borderWidth: 1
            }}
          />
          <View style={{ margin: 10, borderBottomWidth: 1, borderBottomColor: "gray" }}>
            <View style={{ width: "100%", flexDirection: "row", justifyContent: "space-between" }}>
              <Text>PD1 : SAINT LAURENT Men's Sneaker W Side Logo</Text>
              <Text style={{ color: "blue" }} >4 EA</Text>
            </View>
            <View style={{ width: "100%", flexDirection: "row", justifyContent: "space-between" }}>
              <Text>PD2 : ADIDAS Ladies Black FLB Runner</Text>
              <Text style={{ color: "blue" }} >32 EA</Text>
            </View>
            <View style={{ width: "100%", flexDirection: "row", justifyContent: "space-between" }}>
              <Text>PD3 : ADIDAS Ladies Black Adilette Slides</Text>
              <Text style={{ color: "blue" }} >45 EA</Text>
            </View>
            <View style={{ width: "100%", flexDirection: "row", justifyContent: "space-between" }}>
              <Text>PD4 : Adidas Ladies Sambarose Clear Orange</Text>
              <Text style={{ color: "blue" }} >39 EA</Text>
            </View>
            <View style={{ width: "100%", flexDirection: "row", justifyContent: "space-between" }}>
              <Text>PD5 : Puma Alteration Kurve Men's Black</Text>
              <Text style={{ color: "blue" }} >28 EA</Text>
            </View>
            <View style={{ width: "100%", flexDirection: "row", justifyContent: "space-between" }}>
              <Text>PD6 : Puma X Ader Error Men's White Low Top</Text>
              <Text style={{ color: "blue" }} >22 EA</Text>
            </View>
            <View style={{ width: "100%", flexDirection: "row", justifyContent: "space-between" }}>
              <Text>PD7 : Puma Capri Bradley Theodore</Text>
              <Text style={{ color: "blue" }} >31 EA</Text>
            </View>
            <View style={{ width: "100%", flexDirection: "row", justifyContent: "space-between" }}>
              <Text>PD8 : New Balance Men's CM878</Text>
              <Text style={{ color: "blue" }} >19 EA</Text>
            </View>
            <View style={{ width: "100%", flexDirection: "row", justifyContent: "space-between" }}>
              <Text>PD9 : New Balance Men's 997H</Text>
              <Text style={{ color: "blue" }} >17 EA</Text>
            </View>
            <View style={{ width: "100%", flexDirection: "row", justifyContent: "space-between" }}>
              <Text>PD10 : Adidas Yung-1 Men's Red</Text>
              <Text style={{ color: "blue" }} >41 EA</Text>
            </View>
            <Text />
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

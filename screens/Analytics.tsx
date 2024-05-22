import {View, Text, TouchableOpacity, ScrollView} from 'react-native';
import React from 'react';
import Navbar from '../components/Navbar';
import {LogOut, User, Wallet} from 'lucide-react-native';
import {BarChart, LineChart, PieChart} from 'react-native-gifted-charts';
const renderDot = color => {
  return (
    <View
      style={{
        height: 10,
        width: 10,
        borderRadius: 5,
        backgroundColor: color,
        marginRight: 10,
      }}
    />
  );
};
const renderTitle = () => {
  return (
    <View style={{marginVertical: 30}}>
      <Text
        style={{
          color: 'white',
          fontSize: 20,
          fontWeight: 'bold',
          textAlign: 'center',
        }}>
        Budget Usage
      </Text>
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          marginTop: 24,
        }}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <View
            style={{
              height: 12,
              width: 12,
              borderRadius: 6,
              backgroundColor: '#177AD5',
              marginRight: 8,
            }}
          />
          <Text
            style={{
              width: 150,
              height: 16,
              color: 'lightgray',
            }}>
            Budget Limit
          </Text>
        </View>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <View
            style={{
              height: 12,
              width: 12,
              borderRadius: 6,
              backgroundColor: '#ED6665',
              marginRight: 8,
            }}
          />
          <Text
            style={{
              width: 150,
              height: 16,
              color: 'lightgray',
            }}>
            Budget Usage
          </Text>
        </View>
      </View>
    </View>
  );
};
const renderLegendComponent = () => {
  return (
    <>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          marginBottom: 10,
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            width: 120,
            marginRight: 20,
          }}>
          {renderDot('#006DFF')}
          <Text style={{color: 'white'}}>Food: 47%</Text>
        </View>
        <View style={{flexDirection: 'row', alignItems: 'center', width: 150}}>
          {renderDot('#8F80F3')}
          <Text style={{color: 'white'}}>Transportation: 16%</Text>
        </View>
      </View>
      <View style={{flexDirection: 'row', justifyContent: 'center'}}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            width: 150,
            marginRight: 20,
          }}>
          {renderDot('#3BE9DE')}
          <Text style={{color: 'white'}}>Entertainment: 40%</Text>
        </View>
        <View style={{flexDirection: 'row', alignItems: 'center', width: 120}}>
          {renderDot('#FF7F97')}
          <Text style={{color: 'white'}}>Cinema: 3%</Text>
        </View>
      </View>
    </>
  );
};
export default function Analytics({navigation}: {navigation: any}) {
  const pieData = [
    {
      value: 47,
      color: '#009FFF',
      gradientCenterColor: '#006DFF',
      focused: true,
    },
    {value: 40, color: '#93FCF8', gradientCenterColor: '#3BE9DE'},
    {value: 16, color: '#BDB2FA', gradientCenterColor: '#8F80F3'},
    {value: 3, color: '#FFA5BA', gradientCenterColor: '#FF7F97'},
  ];
  const lineData = [
    {value: 0, dataPointText: '0'},
    {value: 20, dataPointText: '20'},
    {value: 18, dataPointText: '18'},
    {value: 40, dataPointText: '40'},
    {value: 36, dataPointText: '36'},
    {value: 60, dataPointText: '60'},
    {value: 54, dataPointText: '54'},
    {value: 85, dataPointText: '85'},
  ];
  const barData = [
    {
      value: 40,
      label: 'Food',
      spacing: 2,
      labelWidth: 30,
      labelTextStyle: {color: 'gray'},
      frontColor: '#177AD5',
    },
    {value: 20, frontColor: '#ED6665'},
    {
      value: 50,
      label: 'Transportation',
      spacing: 2,
      labelWidth: 30,
      labelTextStyle: {color: 'gray'},
      frontColor: '#177AD5',
    },
    {value: 40, frontColor: '#ED6665'},
    {
      value: 75,
      label: 'Health',
      spacing: 2,
      labelWidth: 30,
      labelTextStyle: {color: 'gray'},
      frontColor: '#177AD5',
    },
    {value: 25, frontColor: '#ED6665'},
    {
      value: 30,
      label: 'Cinema',
      spacing: 2,
      labelWidth: 30,
      labelTextStyle: {color: 'gray'},
      frontColor: '#177AD5',
    },
    {value: 20, frontColor: '#ED6665'},
  ];
  return (
    <ScrollView className="flex-1 relative bg-[#CEC7FD]">
      <View className="flex h-40  relative items-start">
        <View className="w-full bg-zinc-300  h-full items-start pt-8 px-6 justify-between flex-row ">
          <View className="flex-row items-center justify-center">
            <Wallet className="text-zinc-800 mr-1" />
            <Text className="text-2xl text-zinc-950 font-bold">ManyMony</Text>
          </View>
          <View className="flex-row items-center justify-center">
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Home');
              }}
              className="w-fit flex-row items-center mr-1 border-zinc-950 justify-center px-2 py-1 rounded-md border">
              <LogOut className="text-zinc-950" />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Home');
              }}
              className="w-fit flex-row items-center border-zinc-950 justify-center px-2 py-1 rounded-md border">
              <User className="text-zinc-950" />
            </TouchableOpacity>
          </View>
        </View>
        <Navbar navigation={navigation} />
      </View>
      <Text className="text-3xl text-left w-full px-6 text-zinc-700 font-bold mt-3">
        Analytics
      </Text>
      <View className="w-full  mx-auto justify-center items-center ">
        {/* <Text className="w-full flex mx-auto bg-[#232B5D] "> */}
        <View className="flex w-4/5 rounded-lg mt-4 mx-auto items-start mb-4 justify-center bg-[#232B5D] p-4">
          <Text style={{color: 'white', fontSize: 16, fontWeight: 'bold'}}>
            Budgets
          </Text>
          <View className="justify-center items-center w-full  p-4 bg-[#232B5D] ">
            <PieChart
              data={pieData}
              donut
              showGradient
              sectionAutoFocus
              radius={90}
              innerRadius={60}
              innerCircleColor={'#232B5D'}
              centerLabelComponent={() => {
                return (
                  <View
                    style={{
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <Text
                      style={{
                        fontSize: 22,
                        color: 'white',
                        fontWeight: 'bold',
                      }}>
                      47%
                    </Text>
                    <Text style={{fontSize: 14, color: 'white'}}>Food</Text>
                  </View>
                );
              }}
            />
          </View>
          {renderLegendComponent()}
        </View>
        {/* </Text> */}
        <View className="w-full justify-center  items-center  mx-auto">
          <View className="w-4/5 justify-center  mx-auto items-center rounded-lg bg-[#232B5D] ">
            <Text className="text-white text-center mb-4">
              Budget Usage in 2024 Amount Spent in $ Month
            </Text>
            <LineChart
              initialSpacing={0}
              data={lineData}
              spacing={40}
              textColor1="yellow"
              textShiftY={-8}
              textShiftX={-10}
              textFontSize={13}
              thickness={5}
              hideRules
              hideYAxisText
              yAxisColor="#0BA5A4"
              showVerticalLines
              verticalLinesColor="rgba(14,164,164,0.5)"
              xAxisColor="#0BA5A4"
              color="#0BA5A4"
            />
          </View>
        </View>
        <View className="w-4/5 justify-center my-4  items-center  mx-auto rounded-lg bg-[#232B5D]">
          <Text>({renderTitle()})</Text>
          <BarChart
            data={barData}
            barWidth={8}
            spacing={36}
            roundedTop
            roundedBottom
            hideRules
            xAxisThickness={0}
            yAxisThickness={0}
            yAxisTextStyle={{color: 'gray'}}
            noOfSections={3}
            maxValue={75}
          />
        </View>
      </View>
    </ScrollView>
  );
}

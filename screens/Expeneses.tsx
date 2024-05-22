import {View, Text, TouchableOpacity, FlatList} from 'react-native';
import React from 'react';
import {LogOut, User, Wallet} from 'lucide-react-native';
import Navbar from '../components/Navbar';

export default function Expeneses({navigation}: {navigation: any}) {
  return (
    <View className="h-screen items-center justify-center bg-[#CEC7FD]">
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
        Expenses
      </Text>
      <FlatList
        data={[
          {name: 'Food', amount: 200, percentage: 21, date: '21.02.2021'},
          {name: 'Transport', amount: 300, percentage: 33, date: '21.02.2021'},
          {
            name: 'Entertainment',
            amount: 400,
            percentage: 61,
            date: '21.02.2021',
          },
          {name: 'Cinema', amount: 500, percentage: 71, date: '21.02.2021'},
          {name: 'Cinema', amount: 500, percentage: 71, date: '21.02.2021'},
          {name: 'Cinema', amount: 500, percentage: 71, date: '21.02.2021'},
          {name: 'Cinema', amount: 500, percentage: 71, date: '21.02.2021'},
          {name: 'Cinema', amount: 500, percentage: 71, date: '21.02.2021'},
          {name: 'Cinema', amount: 500, percentage: 71, date: '21.02.2021'},
          {name: 'Cinema', amount: 500, percentage: 71, date: '21.02.2021'},
        ]}
        renderItem={({item}) => (
          <TouchableOpacity className="relative flex m-2 h-20 w-72 ">
            <View className="relative flex w-full h-full">
              <View className="max-w-sm px-4 pt-2 w-full justify-between h-full bg-indigo-950/40 rounded-xl overflow-hidden shadow-lg">
                <View className="flex flex-row w-full justify-between">
                  <Text className="font-bold text-xl mb-2">{item.name}</Text>
                  <Text className="text-zinc-300 text-lg">${item.amount}</Text>
                </View>

                <View className="mb-2">
                  <Text>{item.date}</Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>
        )}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item, index) => index.toString()}></FlatList>
    </View>
  );
}

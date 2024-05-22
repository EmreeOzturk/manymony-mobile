import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import React from 'react';
import {Album, LogOut, User, Wallet} from 'lucide-react-native';
import Navbar from '../components/Navbar';

export default function Budgets({navigation}: {navigation: any}) {
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
        Budgets
      </Text>
      <FlatList
        data={[
          {name: 'Food', amount: 200, percentage: 21, categories: 'Groceries'},
          {name: 'Transport', amount: 300, percentage: 33, categories: 'Car'},
          {
            name: 'Entertainment',
            amount: 400,
            percentage: 61,
            categories: 'Cinema',
          },
          {name: 'Cinema', amount: 500, percentage: 71, categories: 'Cinema'},
        ]}
        renderItem={({item}) => (
          <TouchableOpacity className="relative flex m-2 h-44 w-52 ">
            <View className="relative flex w-full">
              <View className="max-w-sm px-4 py-4 w-full h-full  bg-indigo-950/40 rounded-xl overflow-hidden shadow-lg">
                <Text className="absolute top-0 right-0 px-3 py-3 rounded-bl-2xl border-zinc-600/40 border-l border-b  text-xs font-bold bg-zinc-900 text-zinc-300">
                  {item.percentage}%
                </Text>
                <View className="w-12 h-12 rounded-xl bg-zinc-900 p-2 flex items-center justify-center mb-2">
                  <Album className="w-10 h-10 object-cover text-zinc-300" />
                </View>
                <Text className="font-bold text-xl mb-2">{item.name}</Text>
                <Text className="text-zinc-300 text-lg">${item.amount}</Text>
                <View className="flex items-end justify-start mt-6 gap-2">
                  <View className="bg-slate-400  rounded-full ">
                    <Text className="px-4 py-0.5 text-sm">
                      {item.categories}
                    </Text>
                  </View>
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

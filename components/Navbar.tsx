import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {Home, PieChart, Wallet, Receipt} from 'lucide-react-native';

export default function Navbar({navigation}: {navigation: any}) {
  return (
    <View className="absolute flex justify-between px-6 mt-2 items-center flex-row top-20 h-12 w-full  left-0 right-0">
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Appscreen');
        }}
        className="justify-center items-center border-b-2 pb-2">
        <Home className="text-zinc-800" />
        <Text className="text-zinc-800">Overview</Text>
      </TouchableOpacity>
      <View className="h-10 w-0.5 bg-slate-900" />
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Budgets');
        }}
        className="justify-center items-center border-b-2 pb-2">
        <Wallet className="text-zinc-800" />
        <Text className="text-zinc-800">Budgets</Text>
      </TouchableOpacity>
      <View className="h-10 w-0.5 bg-slate-900" />
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Expenses');
        }}
        className="justify-center items-center border-b-2 pb-2">
        <Receipt className="text-zinc-800" />
        <Text className="text-zinc-800">Expenses</Text>
      </TouchableOpacity>
      <View className="h-10 w-0.5 bg-slate-900" />
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Analytics');
        }}
        className="justify-center items-center border-b-2 pb-2">
        <PieChart className="text-zinc-800" />
        <Text className="text-zinc-800">Analytics</Text>
      </TouchableOpacity>
    </View>
  );
}

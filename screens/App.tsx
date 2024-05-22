import {View, Text, TouchableOpacity, ScrollView} from 'react-native';
import React from 'react';
import {LogOut, Wallet, User} from 'lucide-react-native';
import OverviewCards from '../components/OverviewCards';
import RecentExpensesOverview from '../components/RecentExpensesOverview';
import RecentBudgets from '../components/RecentBudgets';
import Navbar from '../components/Navbar';

export default function App({navigation}: {navigation: any}) {
  return (
    <ScrollView className="flex-1 relative bg-[#CEC7FD]">
      <View className="flex h-64  relative items-start">
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

      <View className="-mt-24 px-6">
        <Text className="text-3xl text-left px-4 text-zinc-700 font-bold">
          Overview
        </Text>
        <OverviewCards />
        <Text className="text-3xl text-left px-4 text-zinc-700 font-bold">
          Recent Expenses
        </Text>
        <RecentExpensesOverview />
        <Text className="text-3xl text-left px-4 text-zinc-700 font-bold mt-3">
          Recent Budgets
        </Text>
        <RecentBudgets />
      </View>
    </ScrollView>
  );
}

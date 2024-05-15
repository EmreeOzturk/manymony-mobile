import {View, Text} from 'react-native';
import React from 'react';
import RecentExpense from './RecentExpense';

export default function RecentExpensesOverview() {
  return (
    <View className="justify-center items-center rounded-lg px-4 w-full">
      <RecentExpense title="Food" amount={20} date="12/12/2021" />
      <RecentExpense title="Transport" amount={10} date="12/12/2021" />
      <RecentExpense title="Food" amount={20} date="12/12/2021" />
      <RecentExpense title="Transport" amount={10} date="12/12/2021" />
    </View>
  );
}

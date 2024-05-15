import {View} from 'react-native';
import React from 'react';
import RecentBudget from './RecentBudget';
export default function RecentBudgets() {
  return (
    <View className="justify-center items-center rounded-lg px-4 w-full">
      <RecentBudget title="Food" icon="ShoppingCart" percentage={21} />
      <RecentBudget title="Transport" icon="Car" percentage={33} />
      <RecentBudget title="Entertainment" icon="Film" percentage={61} />
    </View>
  );
}

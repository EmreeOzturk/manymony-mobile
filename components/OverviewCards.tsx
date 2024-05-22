import {View} from 'react-native';
import React from 'react';
import OverviewCard from './OverviewCard';

export default function OverviewCards() {
  return (
    <View className="flex-row bg justify-center w-full h-32 mb-4">
      <OverviewCard amount={5500} title="Total Budget" icon={'TrendingUp'} />
      <OverviewCard amount={1500} title="Total Expense" icon={'TrendingDown'} />
    </View>
  );
}

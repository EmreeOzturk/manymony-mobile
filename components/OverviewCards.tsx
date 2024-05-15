import {View} from 'react-native';
import React from 'react';
import OverviewCard from './OverviewCard';

export default function OverviewCards() {
  return (
    <View className="flex-row justify-center w-full h-32 mb-4">
      <OverviewCard amount={2500} title="Total Income" icon={'TrendingUp'} />
      <OverviewCard amount={1500} title="Total Expense" icon={'TrendingDown'} />
      <OverviewCard amount={5500} title="Total Budget" icon={'Wallet'} />
    </View>
  );
}

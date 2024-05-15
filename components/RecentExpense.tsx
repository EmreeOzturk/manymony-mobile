import {View, Text} from 'react-native';
import React from 'react';

export default function RecentExpense({
  title,
  amount,
  date,
}: {
  title: string;
  amount: number;
  date: string;
}) {
  return (
    <View className="h-20 flex-row bg-zinc-950/80 rounded-lg my-1 w-full justify-between px-8 items-center py-2">
      <View className="justify-center items-start gap-2">
        <Text className="text-zinc-300 text-lg font-bold">{title}</Text>
        <Text className="text-zinc-600 text-base font-bold">{date}</Text>
      </View>
      <View>
        <Text className="text-zinc-100 text-lg font-bold">${amount}</Text>
      </View>
    </View>
  );
}

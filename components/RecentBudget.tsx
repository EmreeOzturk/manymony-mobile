import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {icons} from 'lucide-react-native';
export default function RecentBudget({
  title,
  icon,
  percentage,
}: {
  title: string;
  icon: string;
  percentage: number;
}) {
  const LucideIcon = icons[icon];
  return (
    <TouchableOpacity className="flex-row  items-center my-1 justify-center h-14 px-8 bg-zinc-950/80 rounded-xl w-full">
      <View className="flex-row items-center justify-center w-14">
        <View className="py-2 rounded-lg ">
          <LucideIcon className="text-zinc-400" />
        </View>
        <Text className="text-zinc-300 text-base font-bold ml-1">{title}</Text>
      </View>
      <View className="flex-1 w-full flex-row mx-8 justify-center items-center ">
        <View className="bg-zinc-700 mr-2 w-full h-2 rounded-lg">
          <View
            className="bg-emerald-600 h-2 rounded-lg"
            style={{width: `${percentage}%`}}></View>
        </View>
        <Text className="font-bold text-zinc-300">{percentage}%</Text>
      </View>
      <View>
        <Text className="text-zinc-400/90  font-bold">View</Text>
      </View>
    </TouchableOpacity>
  );
}

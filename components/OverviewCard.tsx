import {View, Text} from 'react-native';
import React from 'react';
import {icons} from 'lucide-react-native';
type OverviewCardProps = {
  title: string;
  amount: number;
  icon: React.ReactNode;
};

const OverviewCard: React.FC<OverviewCardProps> = ({title, amount, icon}) => {
  const LucideIcon = icons[icon];
  return (
    <View className="items-center rounded-md mx-1 border border-indigo-400/40 bg-indigo-900/80 justify-center px-2">
      <View className="bg-zinc-700/80 rounded-full p-2">
        <LucideIcon
          className={`${
            icon === 'TrendingUp'
              ? 'text-emerald-400'
              : icon === 'TrendingDown'
              ? 'text-red-400'
              : 'text-sky-400'
          }`}
        />
      </View>
      <Text className="text-zinc-300 text-base font-bold">{title}</Text>
      <Text className="text-zinc-400 font-bold">${amount}</Text>
    </View>
  );
};

export default OverviewCard;

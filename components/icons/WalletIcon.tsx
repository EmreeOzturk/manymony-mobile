import React from 'react';
import {View} from 'react-native';
import {Wallet} from 'lucide-react-native';

export default function WalletIcon() {
  return (
    <View>
      <Wallet className="text-zinc-800" size={40} />
    </View>
  );
}

import {View, Text, Image, TouchableHighlight} from 'react-native';
import React from 'react';
import WalletIcon from '../components/icons/WalletIcon';

export default function HomeScreen({navigation}: any) {
  return (
    <View className="flex-1 px-4 bg-[#C7FDCD] justify-center items-center">
      {/* <View className="flex flex-row items-center gap-2 justify-start w-full px-4 mb-4">
        <WalletIcon />
        <Text className="text-3xl font-bold text-emerald-600">ManyMony</Text>
      </View> */}
      <Text className="text-5xl font-bold w-full px-4 text-zinc-800 mb-4 text-left">
        Take control your <Text className="text-emerald-600">money</Text>
      </Text>
      <View className="w-full flex items-start justify-start px-4">
        <TouchableHighlight
          activeOpacity={0.7}
          underlayColor="#0000001a"
          onPress={() => {
            navigation.navigate('Register');
          }}>
          <Text className="bg-zinc-800 text-[#C7FDCD] text-xl w-fit text-center rounded-md px-6 py-4">
            Get Started
          </Text>
        </TouchableHighlight>
      </View>
      <Image source={require('../assets/homeasset.png')} />

      <TouchableHighlight
        onPress={() => {
          navigation.navigate('Login');
        }}
        activeOpacity={0.7}
        underlayColor="#eaeaea1a">
        <Text className="font-bold text-base w-full">
          Already have an account?{' '}
          <Text className="underline font-extrabold">Log in</Text>
        </Text>
      </TouchableHighlight>
    </View>
  );
}

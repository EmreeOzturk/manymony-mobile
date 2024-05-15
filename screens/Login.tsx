import {View, Text, TextInput, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {Mail, KeyRound, ChevronLeft} from 'lucide-react-native';
export default function Login({navigation}: {navigation: any}) {
  return (
    <View className="flex-1 bg-[#C7FDCD] justify-start items-center">
      <View className="flex-row w-full items-center justify-start px-4 py-4">
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Home');
          }}
          className="flex-row items-center justify-center">
          <ChevronLeft className="text-2xl text-zinc-800" />
          <Text>Back</Text>
        </TouchableOpacity>
      </View>
      <View className="flex-grow-[1] w-full items-center justify-start py-4">
        <Text className="text-4xl text-left w-full px-4 font-bold text-zinc-800">
          Let's get started
        </Text>
        <Text className="text-left w-full px-4 text-zinc-600">
          We're happy to see you again, enter your email and password to login
        </Text>
        <View className="w-52 h-44 mt-4 flex items-center justify-center object-contain">
          <Image
            source={require('../assets/2.png')}
            className="object-cover w-full h-full"
          />
        </View>
      </View>
      <View className="flex-grow-[5]  pt-10 relative bg-white shadow-2xl w-full items-center justify-start rounded-t-[30px]">
        <View className="w-4/5 relative mt-4">
          <Text className="bg-white  text-emerald-400 text-sm absolute -top-3 left-4 px-2 z-10">
            Email Address
          </Text>
          <View className="w-full flex-row items-center justify-start border px-4 border-emerald-400 rounded-lg">
            <Mail className="text-2xl text-zinc-600" />
            <TextInput className="w-full" placeholder="yourmail@gmail.com" />
          </View>
        </View>
        <View className="w-4/5  relative mt-6 ">
          <Text className="bg-white text-emerald-400 text-sm absolute -top-3 left-4 px-2 z-10">
            Password
          </Text>
          <View className="w-full flex-row items-center justify-start border px-4 border-emerald-400 rounded-lg">
            <KeyRound className="text-2xl text-zinc-600" />
            <TextInput className="w-full" placeholder="***********" />
          </View>
        </View>
        <View className="w-4/5 mt-2 text-zinc-950">
          <TouchableOpacity>
            <Text className="text-left text-emerald-600">Forgot Password?</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Register');
            }}>
            <Text className="text-left text-emerald-600">Create Account</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Appscreen');
            }}>
            <Text className="bg-[#C7FDCD] text-zinc-700 text-base w-full rounded-lg py-2 mt-4 text-center">
              Login
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

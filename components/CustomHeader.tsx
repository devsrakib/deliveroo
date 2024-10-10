/* eslint-disable import/order */
import React, { useRef } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, TextInput } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Colors } from '@/constants/Colors';
import { Ionicons } from '@expo/vector-icons';
import { Fonts } from '@/constants/Fonts';
import { Link } from 'expo-router';
import BottomSheet from './BottomSheet';
import { BottomSheetModal } from '@gorhom/bottom-sheet';

const SearchBar = () => (
  <View style={styles.searchContainer}>
    <View style={styles.searchSection}>
      <View style={styles.searchField}>
        <Ionicons name="search" size={20} color={Colors.medium} />
        <TextInput style={styles.input} placeholder="Search" />
      </View>
      <Link href="/" asChild>
        <TouchableOpacity style={styles.optionsButton}>
          <Ionicons name="options-outline" size={20} color={Colors.primary} />
        </TouchableOpacity>
      </Link>
    </View>
  </View>
);

const CustomHeader = () => {
  const bottomSheetRef = useRef<BottomSheetModal>(null);
  const openModal = () => {
    bottomSheetRef.current?.present();
  };
  return (
    <SafeAreaView style={styles.safeArea}>
      <BottomSheet ref={bottomSheetRef} />
      <View style={styles.container}>
        <TouchableOpacity onPress={() => openModal()}>
          <Image style={styles.logo} source={require('@/assets/Images/bike.jpeg')} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.titleContainer} onPress={() => openModal()}>
          <Text style={styles.title}>Delivery . now</Text>
          <View style={styles.subTitleCon}>
            <Text style={styles.subtitle}>Dhaka, Bangladesh</Text>
            <Ionicons name="chevron-down" size={20} color={Colors.primary} />
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.profileButton}>
          <Ionicons name="person-outline" size={20} color={Colors.primary} />
        </TouchableOpacity>
      </View>
      <SearchBar />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: '#fff',
    flex: 1,
  },
  container: {
    height: 60,
    backgroundColor: Colors.white,
    flexDirection: 'row',
    gap: 20,
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  logo: {
    width: 30,
    height: 30,
    borderRadius: 50,
  },
  titleContainer: {
    flex: 1,
  },
  title: {
    fontSize: Fonts.large,
    color: Colors.medium,
  },
  subTitleCon: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  subtitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  profileButton: {
    backgroundColor: Colors.lightGray,
    padding: 10,
    borderRadius: 50,
  },
  searchContainer: { height: 60, backgroundColor: Colors.white },
  searchSection: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    gap: 10,
  },
  searchField: {
    flex: 1,
    backgroundColor: Colors.lightGray,
    borderRadius: 6,
    justifyContent: 'center',
    height: 40,
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  input: {
    color: Colors.mediumDark,
    flex: 1,
  },
  optionsButton: {
    width: 36,
    height: 36,
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default CustomHeader;

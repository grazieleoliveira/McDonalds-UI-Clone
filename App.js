import React, { Component } from 'react'
import {
  StyleSheet,
  TouchableOpacity,
  View,
  ScrollView,
  Image,
  TextInput,
  SafeAreaView,
  Text,
  SectionList,
  FlatList
} from 'react-native'
import Feather from 'react-native-vector-icons/MaterialCommunityIcons'
import { Divider } from 'react-native-paper';

import Onboarding from './components/Onboarding'


Feather.loadFont();

class App extends Component {

  render() {
    return (

      <View style={styles.container}>
        <SafeAreaView>
          <View style={styles.headerWrapper}>
            <Feather name="menu" size={32} color={'#FFF'} />

            <Image source={require('./assets/images/mclogo.png')} style={styles.logoImage} resizeMode="contain"/>


            <Image source={require('./assets/images/coupons.png')} style={styles.couponImage} resizeMode="contain" />

          </View>
          <Divider style={styles.divider}/>
        </SafeAreaView>
        <Onboarding/>
        <SafeAreaView style={styles.columnWrapper}>
          <View style={styles.rowItem}>
            <Image source={require('./assets/images/delivery-man.png')} style={[styles.listImage, {tintColor: '#FFF'}]} resizeMode="contain"/>
            <Text style={styles.listText}>McDelivery</Text>


          </View>
          <Divider style={styles.dividerItem}/>
          <View style={styles.rowItem}>
            <Image source={require('./assets/images/take-away.png')} style={[styles.listImage, {tintColor: '#FFF'}]} resizeMode="contain"/>
            <Text style={styles.listText}>Méqui Sem Fila</Text>


          </View>
          <Divider style={styles.dividerItem}/>
          <View style={styles.rowItem}>
            <Image source={require('./assets/images/coupons.png')} style={[styles.listImage, {tintColor: '#FFF'}]} resizeMode="contain"/>
            <Text style={styles.listText}>Cupons</Text>
          </View>
        </SafeAreaView>
      </View>

    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#C70007',
    flex: 1,

  },

  headerWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    paddingTop: 25,
    paddingBottom: 5,
    alignItems: 'center',
  },

  columnWrapper: {
    flex: 0.15 ,
  },

  rowItem: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    paddingVertical: 40,
    paddingHorizontal: 30,

    alignItems: 'center',
  },

  logoImage: {
    width: 25,
    height: 25, 

  },

  couponImage: {
    width: 25,
    height: 25,
    transform: [{rotate: '90deg'}],
    tintColor: '#FFF'
  },

  divider: {
    height: 2,
    shadowColor: '#000',
    opacity: 0.5,

  },

  dividerItem: {
    height: 1,
    backgroundColor: '#FFF'

  },

  listImage: {
    width: 50,
    height: 50,
    marginRight: 25,
  },

  listText: {
    fontSize: 20,
    color: "#FFF",
    fontWeight: 'bold',
  }

})

export default App;
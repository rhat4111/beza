import React from 'react';
import {withNavigation} from 'react-navigation';
import {
  Image,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  useWindowDimensions,
} from 'react-native';
import responsiveStyle from './styles';
import {STYLES} from '@/themes';

const Home = ({navigation}) => {
  const layout = useWindowDimensions();
  const styles = responsiveStyle(layout);

  return (
    <ScrollView style={styles('container')}>
      <View style={styles('pageContainer')}>
        <View style={styles('headerContainer')}>
          <Image source={require('../../assets/images/logo.png')} />
          <View style={styles('notification')}>
            <Image source={require('../../assets/images/icons/bell.png')} />
            <View style={styles('dot')}></View>
          </View>
        </View>
        <View style={styles('welcomeContainer')}>
          <Text style={styles('title')}>Welcome</Text>
          <Text style={styles('name')}>John Doe</Text>
          <View style={styles('balance')}>
            <View
              style={[
                STYLES.FlexRow,
                STYLES.JustifyBetween,
                STYLES.ItemsCenter,
                {marginBottom: 16},
              ]}>
              <Text style={styles('label')}>Available Balance</Text>
              <Text style={styles('unit')}>ETH</Text>
            </View>
            <Text style={styles('value')}>500,000</Text>
          </View>
        </View>
        <View style={styles('paymentContainer')}>
          <Text style={styles('paymentTitle')}>Buy Now , Pay Later !</Text>
          <TextInput
            style={[styles('textInput'), {marginBottom: 12}]}
            placeholder="Enter Bill No"
          />
          <Text style={styles('guzogoTxt')}>GuzoGo Bill</Text>
          <TextInput
            style={[styles('textInput'), {marginBottom: 40}]}
            placeholder="Bill Amount"
          />
          <TouchableOpacity
            style={styles('successButtonStyle')}
            onPress={() => navigation.navigate('Payment')}>
            <Text style={styles('successButtonTextStyle')}>Pay Now !</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default withNavigation(Home);

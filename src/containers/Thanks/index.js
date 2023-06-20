import React from 'react';
import {withNavigation} from 'react-navigation';
import {
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  useWindowDimensions,
} from 'react-native';
import {STYLES} from '@/themes';
import responsiveStyle from './styles';

const Thanks = ({navigation}) => {
  const layout = useWindowDimensions();
  const styles = responsiveStyle(layout);

  return (
    <ScrollView style={styles('container')}>
      <View style={styles('pageContainer')}>
        <View style={styles('header')}>
          <Image
            source={require('../../assets/images/success.png')}
            style={styles('image')}
          />
          <Text style={styles('priceTxt')}>ETB3,000</Text>
        </View>
        <Text style={styles('successfulTxt')}>Transaction Successful</Text>
        <View style={styles('guzogoContainer')}>
          <Text style={styles('guzogoTitle')}>
            GuzoGo Bill has been paid !{' '}
          </Text>
          <View style={styles('formControl')}>
            <Text style={styles('formLabelTxt')}>Transaction ID</Text>
            <Text style={styles('formValueTxt')}>1578571</Text>
          </View>
          <View style={styles('formControl')}>
            <Text style={styles('formLabelTxt')}>Plan</Text>
            <Text style={styles('formValueTxt')}>3 Month</Text>
          </View>
          <View style={styles('formControl')}>
            <Text style={styles('formLabelTxt')}>Payment Start Date</Text>
            <Text style={styles('formValueTxt')}>
              Jan 21 , 2022 , AT 11 : 00 AM
            </Text>
          </View>
        </View>
        <View style={styles('downloadContainer')}>
          <TouchableOpacity
            style={[STYLES.FlexRow, STYLES.JustifyEnd, STYLES.FlexEnd]}>
            <Text style={styles('downloadTxt')}>Download Receipt</Text>
            <Image source={require('../../assets/images/icons/pdf.png')} />
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={styles('successButtonStyle')}
          onPress={() => navigation.navigate('Home')}>
          <Text style={styles('successButtonTextStyle')}>Back to Home</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default withNavigation(Thanks);

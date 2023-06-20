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
import PaymentCard from '@/components/PaymentCard';
import responsiveStyle from './styles';

const Payment = ({navigation}) => {
  const layout = useWindowDimensions();
  const styles = responsiveStyle(layout);
  const payments = [
    {
      id: 1,
      period: 3,
      price: 'ETB 1,000',
      startAt: 'February 30',
    },
    {
      id: 2,
      period: 6,
      price: 'ETB 2,000',
      startAt: 'February 30',
    },
    {
      id: 3,
      period: 9,
      price: 'ETB 3,000',
      startAt: 'February 30',
    },
    {
      id: 4,
      period: 12,
      price: 'ETB 3,000',
      startAt: 'February 30',
    },
  ];

  return (
    <ScrollView style={styles('container')}>
      <TouchableOpacity onPress={() => navigation.navigate('Home')}>
        <Image source={require('../../assets/images/icons/back.png')} />
      </TouchableOpacity>
      <Text style={styles('titleTxt')}>Choose Payment Plan </Text>
      <View style={{paddingBottom: 60}}>
        {payments.map(payment => {
          return (
            <View style={styles('paymentCardContainer')}>
              <PaymentCard {...payment} />
            </View>
          );
        })}
      </View>
    </ScrollView>
  );
};

export default withNavigation(Payment);

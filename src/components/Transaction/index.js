import React from 'react';
import {Image, Text, View, useWindowDimensions} from 'react-native';
import {COLORS, STYLES} from '@/themes';
import responsiveStyle from './styles';

const Transaction = data => {
  const layout = useWindowDimensions();
  const styles = responsiveStyle(layout);

  return (
    <View style={styles('container')}>
      <View style={[STYLES.FlexRow, STYLES.ItemsCenter]}>
        <View
          style={[
            styles('statusContainer'),
            {
              backgroundColor:
                data.status === 'success'
                  ? COLORS.LIGHT_SUCCESS
                  : COLORS.LIGHT_WARNING,
            },
          ]}>
          {data.status === 'success' && (
            <Image source={require('../../assets/images/icons/check.png')} />
          )}
          {data.status === 'pending' && (
            <Image source={require('../../assets/images/icons/order.png')} />
          )}
        </View>
        <View>
          <Text style={styles('nameTxt')}>{data.name}</Text>
          <Text style={styles('timeTxt')}>{data.time}</Text>
        </View>
      </View>
      <Text style={styles('priceTxt')}>{data.price}</Text>
    </View>
  );
};

export default Transaction;

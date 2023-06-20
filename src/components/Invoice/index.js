import React from 'react';
import {
  Image,
  Text,
  TouchableOpacity,
  View,
  useWindowDimensions,
} from 'react-native';
import {COLORS, STYLES} from '@/themes';
import responsiveStyle from './styles';

const Invoice = data => {
  const layout = useWindowDimensions();
  const styles = responsiveStyle(layout);

  return (
    <View style={styles('container')}>
      <View style={styles('header')}>
        <View style={styles('avatarContainer')}>
          <Image source={require('../../assets/images/icons/invoice.png')} />
        </View>
        <View style={styles('detailInfo')}>
          <View style={[STYLES.FlexRow, STYLES.JustifyBetween]}>
            <Text style={styles('headerTxt')}>{data.name}</Text>
            <Text
              style={[
                styles('headerTxt'),
                {
                  color:
                    data.status === 'paid' ? COLORS.SUCCESS : COLORS.DANGER,
                },
              ]}>
              {data.status.toUpperCase()}
            </Text>
          </View>
          <Text style={styles('dateTxt')}>Date: {data.date}</Text>
          <Text style={styles('dateTxt')}>Due Date: {data.dueDate}</Text>
        </View>
      </View>
      <View style={styles('footer')}>
        <TouchableOpacity style={styles('downloadContainer')}>
          <Text style={styles('downloadTxt')}>Download Invoice</Text>
          <Image source={require('../../assets/images/icons/download.png')} />
        </TouchableOpacity>
        <View style={[STYLES.ItemsEnd]}>
          <Text style={styles('amountLabelTxt')}>Total Amount</Text>
          <Text style={styles('amountTxt')}>{data.amount}</Text>
        </View>
      </View>
    </View>
  );
};

export default Invoice;

import React from 'react';
import {Text, TouchableOpacity, View, useWindowDimensions} from 'react-native';
import {COLORS} from '@/themes';
import responsiveStyle from './styles';

const Tab = ({tabs, active, onChange}) => {
  const layout = useWindowDimensions();
  const styles = responsiveStyle(layout);

  return (
    <View style={styles('container')}>
      <View style={styles('tabContainer')}>
        {tabs.map(tab => (
          <TouchableOpacity
            style={[
              styles('tab'),
              {
                backgroundColor:
                  active === tab.id ? COLORS.SUCCESS : COLORS.WHITE,
              },
            ]}
            onPress={() => onChange(tab.id)}>
            <Text
              style={[
                styles('tabTxt'),
                {
                  color: active === tab.id ? COLORS.WHITE : COLORS.SUCCESS,
                },
              ]}>
              {tab.name}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default Tab;

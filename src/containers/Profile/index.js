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
import responsiveStyle from './styles';

const Profile = ({navigation}) => {
  const layout = useWindowDimensions();
  const styles = responsiveStyle(layout);

  return (
    <ScrollView style={styles('container')}>
      <View style={styles('pageContainer')}>
        <View style={styles('header')}>
          <TouchableOpacity
            style={styles('power')}
            onPress={() => navigation.navigate('Home')}>
            <Image source={require('../../assets/images/icons/power.png')} />
          </TouchableOpacity>
          <Text style={styles('pageTitleTxt')}>Profile</Text>
          <View style={styles('profileCard')}>
            <View style={styles('avatarContainer')}>
              <Image
                source={require('../../assets/images/avatar.png')}
                style={styles('avatarImage')}
              />
            </View>
            <Text style={styles('nameTxt')}>Martha Alex</Text>
            <Text style={styles('joinAt')}>Member since Jan 20,2022</Text>
            <Text style={styles('phone')}>+251-921-45-7856</Text>
          </View>
        </View>
        <View style={styles('body')}>
          <Text style={styles('aboutTitleTxt')}>About Beza</Text>
          <Text style={styles('aboutDescriptionTxt')}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry’s standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default withNavigation(Profile);

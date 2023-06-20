import {createStackNavigator} from 'react-navigation-stack';
import MainNavigator from './main-navigator';
import Thanks from '@/containers/Thanks';
import Payment from '@/containers/Payment';

const AuthNavConfig = {
  initialRouteName: 'Payment',
  header: null,
  headerMode: 'none',
};

const RouteConfigs = {
  Main: MainNavigator,
  Thanks: Thanks,
  Payment: Payment,
};

const AuthNavigator = createStackNavigator(RouteConfigs, AuthNavConfig);

export default AuthNavigator;

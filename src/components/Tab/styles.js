import CreateResponsiveStyle from '@/constants/ResponsiveStyle';
import {COLORS} from '@/themes';

export default CreateResponsiveStyle(
  {
    container: {
      flex: 1,
      padding: 5,
    },
    tabContainer: {
      flexDirection: 'row',
      backgroundColor: COLORS.WHITE,
      borderRadius: 100,
      shadowColor: '#000000',
      shadowOpacity: 16,
      shadowRadius: 100,
      elevation: 3,
      padding: 7,
    },
    tab: {
      flex: 1,
      height: 44,
      borderRadius: 100,
      alignItems: 'center',
      justifyContent: 'center',
    },
    tabTxt: {
      fontFamily: 'Montserrat-ExtraBold',
      fontSize: 20,
    },
  },
  {
    tabContainer: {
      padding: 5,
    },
    tab: {
      height: 36,
    },
    tabTxt: {
      fontSize: 16,
    },
  },
);

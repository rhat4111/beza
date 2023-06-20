import CreateResponsiveStyle from '@/constants/ResponsiveStyle';
import {COLORS} from '@/themes';

export default CreateResponsiveStyle(
  {
    container: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    statusContainer: {
      width: 40,
      height: 40,
      borderRadius: 40,
      justifyContent: 'center',
      alignItems: 'center',
      marginRight: 18,
    },
    priceTxt: {
      fontFamily: 'Montserrat-Medium',
      fontSize: 22,
      color: COLORS.SUCCESS,
    },
    nameTxt: {
      fontFamily: 'Montserrat-Bold',
      fontSize: 20,
      color: COLORS.SUCCESS,
      marginBottom: 4,
    },
    timeTxt: {
      fontFamily: 'Montserrat-Regular',
      fontSize: 15,
      color: COLORS.SUCCESS,
    },
  },
  {
    statusContainer: {
      width: 32,
      height: 32,
      marginRight: 12,
    },
    priceTxt: {
      fontSize: 16,
    },
    nameTxt: {
      fontSize: 16,
      marginBottom: 2,
    },
    timeTxt: {
      fontSize: 12,
    },
  },
);

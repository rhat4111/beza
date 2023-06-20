import CreateResponsiveStyle from '@/constants/ResponsiveStyle';
import {COLORS} from '@/themes';

export default CreateResponsiveStyle(
  {
    container: {
      flex: 1,
      backgroundColor: COLORS.WHITE,
      paddingTop: 44,
      paddingLeft: 32,
      paddingRight: 32,
    },
    titleTxt: {
      textAlign: 'center',
      fontFamily: 'Montserrat-Bold',
      fontSize: 25,
      color: COLORS.SUCCESS,
      marginTop: 44,
      marginBottom: 62,
    },
    paymentCardContainer: {
      marginBottom: 20,
    },
  },
  {
    container: {
      paddingTop: 20,
      paddingLeft: 20,
      paddingRight: 20,
    },
    titleTxt: {
      fontSize: 22,
      marginTop: 20,
      marginBottom: 20,
    },
    paymentCardContainer: {
      marginBottom: 12,
    },
  },
);

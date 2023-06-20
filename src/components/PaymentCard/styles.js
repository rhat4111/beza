import CreateResponsiveStyle from '@/constants/ResponsiveStyle';
import {COLORS} from '@/themes';

export default CreateResponsiveStyle(
  {
    container: {
      flex: 1,
      paddingTop: 32,
      paddingLeft: 24,
      paddingRight: 32,
      paddingBottom: 12,
      borderWidth: 2,
      borderColor: COLORS.SUCCESS,
      borderRadius: 15,
    },
    periodTxt: {
      fontFamily: 'Montserrat-ExtraBold',
      fontSize: 29,
      color: COLORS.SUCCESS,
    },
    priceContainer: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'flex-end',
      marginBottom: 12,
    },
    priceLabelTxt: {
      fontFamily: 'Montserrat-Regular',
      fontSize: 15,
      color: COLORS.SUCCESS,
    },
    priceValueTxt: {
      fontFamily: 'Montserrat-ExtraBold',
      fontSize: 15,
      color: COLORS.BLACK,
    },
    dateContainer: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'flex-end',
    },
    dateLabelTxt: {
      fontFamily: 'Montserrat-Regular',
      fontSize: 15,
      color: COLORS.SUCCESS,
    },
    dateValueTxt: {
      fontFamily: 'Montserrat-BoldItalic',
      fontSize: 15,
      color: COLORS.SUCCESS,
    },
  },
  {
    container: {
      paddingTop: 20,
      paddingLeft: 20,
      paddingRight: 20,
      borderWidth: 2,
    },
    periodTxt: {
      fontSize: 24,
    },
    priceContainer: {
      marginBottom: 6,
    },
  },
);

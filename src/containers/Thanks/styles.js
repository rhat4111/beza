import CreateResponsiveStyle from '@/constants/ResponsiveStyle';
import {COLORS} from '@/themes';

export default CreateResponsiveStyle(
  {
    container: {
      flex: 1,
    },
    pageContainer: {
      flex: 1,
      backgroundColor: COLORS.WHITE,
      paddingTop: 36,
      paddingLeft: 32,
      paddingRight: 32,
      paddingBottom: 64,
    },
    header: {
      display: 'flex',
      alignItems: 'center',
      position: 'relative',
      marginBottom: 26,
    },
    image: {
      marginLeft: 12,
    },
    priceTxt: {
      position: 'absolute',
      fontFamily: 'Montserrat-ExtraBold',
      fontSize: 16,
      color: COLORS.BLACK,
      bottom: 18,
    },
    successfulTxt: {
      textAlign: 'center',
      fontFamily: 'Montserrat-Bold',
      fontSize: 25,
      color: COLORS.SUCCESS,
      marginBottom: 42,
    },
    guzogoContainer: {
      marginBottom: 32,
    },
    guzogoTitle: {
      fontFamily: 'Montserrat-Medium',
      fontSize: 20,
      color: COLORS.SUCCESS,
      marginBottom: 16,
    },
    formControl: {
      marginBottom: 16,
    },
    formLabelTxt: {
      fontFamily: 'Montserrat-Medium',
      fontSize: 20,
      color: COLORS.LIGHT,
      marginBottom: 7,
    },
    formValueTxt: {
      fontFamily: 'Montserrat-ExtraBold',
      fontSize: 20,
      color: COLORS.SUCCESS,
    },
    downloadContainer: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'flex-end',
      alignItems: 'center',
      marginBottom: 112,
    },
    downloadTxt: {
      fontFamily: 'Montserrat-Bold',
      fontSize: 20,
      color: COLORS.SUCCESS,
      marginRight: 16,
    },
    successButtonStyle: {
      flex: 1,
      backgroundColor: COLORS.SUCCESS,
      height: 70,
      borderRadius: 15,
      justifyContent: 'center',
      alignItems: 'center',
      borderWidth: 2,
      borderColor: '#E6E6E7',
    },
    successButtonTextStyle: {
      color: COLORS.WHITE,
      fontFamily: 'Montserrat-Medium',
      fontSize: 20,
    },
  },
  {
    pageContainer: {
      paddingTop: 0,
      paddingLeft: 20,
      paddingRight: 20,
      paddingBottom: 30,
    },
    header: {
      marginBottom: 0,
    },
    priceTxt: {
      fontSize: 24,
      bottom: 30,
    },
    successfulTxt: {
      fontSize: 20,
      marginBottom: 36,
    },
    guzogoContainer: {
      marginBottom: 20,
    },
    guzogoTitle: {
      fontSize: 16,
      marginBottom: 16,
    },
    formControl: {
      marginBottom: 16,
    },
    formLabelTxt: {
      fontSize: 14,
      marginBottom: 5,
    },
    formValueTxt: {
      fontSize: 16,
    },
    downloadContainer: {
      alignItems: 'center',
      marginBottom: 60,
    },
    downloadTxt: {
      fontSize: 14,
      marginRight: 12,
    },
    successButtonStyle: {
      height: 55,
    },
    successButtonTextStyle: {
      fontSize: 16,
    },
  },
);

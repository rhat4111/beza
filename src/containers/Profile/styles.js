import CreateResponsiveStyle from '@/constants/ResponsiveStyle';
import {COLORS} from '@/themes';

export default CreateResponsiveStyle(
  {
    container: {
      flex: 1,
      backgroundColor: COLORS.WHITE,
    },
    pageContainer: {
      paddingBottom: 40,
    },
    header: {
      paddingTop: 80,
      paddingLeft: 32,
      paddingRight: 32,
      height: 410,
      backgroundColor: COLORS.SUCCESS,
      position: 'relative',
      zIndex: 99,
    },
    power: {
      position: 'absolute',
      top: 16,
      right: 32,
    },
    pageTitleTxt: {
      textAlign: 'center',
      fontFamily: 'Montserrat-ExtraBold',
      fontSize: 35,
      color: COLORS.WHITE,
    },
    profileCard: {
      position: 'absolute',
      left: 32,
      right: 32,
      bottom: -60,
      borderRadius: 25,
      borderWidth: 0.5,
      borderColor: COLORS.WHITE,
      shadowColor: '#22782153',
      shadowRadius: 25,
      elevation: 20,
      backgroundColor: COLORS.SUCCESS,
      alignItems: 'center',
      paddingTop: 40,
      paddingBottom: 40,
      paddingLeft: 16,
      paddingRight: 16,
    },
    avatarContainer: {
      padding: 7.5,
      backgroundColor: COLORS.WHITE,
      borderRadius: 200,
      marginBottom: 10,
    },
    avatarImage: {
      borderRadius: 2000,
    },
    nameTxt: {
      fontFamily: 'Montserrat-Medium',
      fontSize: 25,
      color: COLORS.WHITE,
      marginBottom: 8,
    },
    joinAt: {
      fontFamily: 'Montserrat-Light',
      fontSize: 12,
      color: COLORS.WHITE,
      marginBottom: 10,
    },
    phone: {
      fontFamily: 'Montserrat-Light',
      fontSize: 12,
      color: COLORS.WHITE,
    },
    body: {
      backgroundColor: COLORS.WHITE,
      paddingTop: 115,
      paddingLeft: 32,
      paddingRight: 32,
    },
    aboutTitleTxt: {
      fontFamily: 'Montserrat-SemiBold',
      fontSize: 25,
      color: COLORS.SUCCESS,
      marginBottom: 8,
    },
    aboutDescriptionTxt: {
      fontFamily: 'Montserrat-Light',
      fontSize: 17,
      color: COLORS.SUCCESS,
    },
  },
  {
    header: {
      paddingTop: 50,
      paddingLeft: 20,
      paddingRight: 20,
      height: 300,
    },
    power: {
      top: 16,
      right: 16,
    },
    pageTitleTxt: {
      fontSize: 28,
    },
    profileCard: {
      left: 20,
      right: 20,
      bottom: -40,
      borderRadius: 16,
      shadowRadius: 20,
      elevation: 10,
      paddingTop: 20,
      paddingBottom: 20,
    },
    avatarContainer: {
      padding: 5,
      marginBottom: 10,
    },
    avatarImage: {
      borderRadius: 2000,
      width: 100,
      height: 100
    },
    nameTxt: {
      fontSize: 20,
      marginBottom: 0,
    },
    joinAt: {
      fontSize: 12,
      marginBottom: 0,
    },
    body: {
      paddingTop: 60,
      paddingLeft: 20,
      paddingRight: 20,
    },
    aboutTitleTxt: {
      fontSize: 20,
    },
    aboutDescriptionTxt: {
      fontSize: 14,
    },
  },
);

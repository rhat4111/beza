import CreateResponsiveStyle from '@/constants/ResponsiveStyle';
import {COLORS} from '@/themes';

export default CreateResponsiveStyle(
  {
    container: {
      flex: 1,
      backgroundColor: COLORS.WHITE,
    },
    pageContainer: {
      paddingTop: 30,
    },
    header: {
      paddingLeft: 20,
      paddingRight: 20,
      marginBottom: 24,
    },
    body: {
      paddingLeft: 25,
      paddingRight: 25,
    },
    transactions: {
      paddingTop: 6,
    },
    transactionGroup: {
      marginBottom: 27,
    },
    transactionTitleTxt: {
      fontFamily: 'Montserrat-Medium',
      fontSize: 20,
      marginBottom: 27,
      color: COLORS.SUCCESS,
    },
    transactionItem: {
      marginBottom: 20,
    },
    invoiceItem: {
      marginBottom: 38,
    },
  },
  {
    pageContainer: {
      paddingTop: 20,
    },
    header: {
      paddingLeft: 12,
      paddingRight: 12,
      marginBottom: 18,
    },
    body: {
      paddingLeft: 20,
      paddingRight: 20,
    },
    transactionGroup: {
      marginBottom: 16,
    },
    transactionTitleTxt: {
      fontSize: 16,
      marginBottom: 16,
    },
    transactionItem: {
      marginBottom: 16,
    },
    invoiceItem: {
      marginBottom: 20,
    },
  },
);

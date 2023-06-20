import React, {useState} from 'react';
import {withNavigation} from 'react-navigation';
import {ScrollView, Text, View, useWindowDimensions} from 'react-native';
import Tab from '@/components/Tab';
import Transaction from '@/components/Transaction';
import Invoice from '@/components/Invoice';
import responsiveStyle from './styles';

const History = ({navigation}) => {
  const layout = useWindowDimensions();
  const styles = responsiveStyle(layout);
  const [selectedTab, setSelectedTab] = useState('transactions');
  const tabs = [
    {id: 'transactions', name: 'Transactions'},
    {id: 'invoices', name: 'Invoices'},
  ];
  const transactions = [
    {
      date: 'Today',
      items: [
        {
          id: 1,
          name: 'Abel Berhanu',
          time: '10 Oct, 8 : 25 AM',
          price: 'ETB2,000',
          status: 'success',
        },
        {
          id: 2,
          name: 'Abel Berhanu',
          time: '10 Oct, 8 : 25 AM',
          price: 'ETB1190,000',
          status: 'pending',
        },
        {
          id: 3,
          name: 'Abel Berhanu',
          time: '10 Oct, 8 : 25 AM',
          price: 'ETB2,000',
          status: 'success',
        },
      ],
    },
    {
      date: 'Yesterday',
      items: [
        {
          id: 4,
          name: 'Abel Berhanu',
          time: '10 Oct, 8 : 25 AM',
          price: 'ETB32,003',
          status: 'success',
        },
        {
          id: 5,
          name: 'Abel Berhanu',
          time: '10 Oct, 8 : 25 AM',
          price: 'ETB400',
          status: 'pending',
        },
        {
          id: 6,
          name: 'Abel Berhanu',
          time: '10 Oct, 8 : 25 AM',
          price: 'ETB1,000',
          status: 'success',
        },
        {
          id: 7,
          name: 'Abel Berhanu',
          time: '10 Oct, 8 : 25 AM',
          price: 'ETB5,00',
          status: 'pending',
        },
        {
          id: 8,
          name: 'Abel Berhanu',
          time: '10 Oct, 8 : 25 AM',
          price: 'ETB32,003',
          status: 'success',
        },
        {
          id: 9,
          name: 'Abel Berhanu',
          time: '10 Oct, 8 : 25 AM',
          price: 'ETB400',
          status: 'pending',
        },
      ],
    },
  ];
  const invoices = [
    {
      id: 1,
      name: 'Invoice #12676',
      date: 'Jan 20 , 2022',
      dueDate: 'Jan 20 , 2022',
      status: 'paid',
      amount: 'ETB14,000',
    },
    {
      id: 2,
      name: 'Invoice #12676',
      date: 'Jan 20 , 2022',
      dueDate: 'Jan 20 , 2022',
      status: 'overdue',
      amount: 'ETB14,000',
    },
    {
      id: 3,
      name: 'Invoice #12676',
      date: 'Jan 20 , 2022',
      dueDate: 'Jan 20 , 2022',
      status: 'paid',
      amount: 'ETB14,000',
    },
  ];
  const handleChange = id => {
    setSelectedTab(id);
  };

  return (
    <ScrollView style={styles('container')}>
      <View style={styles('pageContainer')}>
        <View style={styles('header')}>
          <Tab tabs={tabs} active={selectedTab} onChange={handleChange} />
        </View>
        <View style={styles('body')}>
          {selectedTab === 'transactions' && (
            <View style={styles('transactions')}>
              {transactions.map((transaction, index) => {
                return (
                  <View style={styles('transactionGroup')} key={index}>
                    <Text style={styles('transactionTitleTxt')}>
                      {transaction.date}
                    </Text>
                    <View>
                      {transaction.items.map(child => {
                        return (
                          <View
                            key={child.id}
                            style={styles('transactionItem')}>
                            <Transaction {...child} />
                          </View>
                        );
                      })}
                    </View>
                  </View>
                );
              })}
            </View>
          )}
          {selectedTab === 'invoices' && (
            <View>
              {invoices.map(invoice => {
                return (
                  <View
                    style={styles('invoiceContainer')}
                    key={invoice.id}
                    style={styles('invoiceItem')}>
                    <Invoice {...invoice} />
                  </View>
                );
              })}
            </View>
          )}
        </View>
      </View>
    </ScrollView>
  );
};

export default withNavigation(History);

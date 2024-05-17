import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';


const User_notification_campaign6 = () => {
  
    const data = [
        { label: 'Item 1', value: '1' },
        { label: 'Item 2', value: '2' },
        { label: 'Item 3', value: '3' },
        { label: 'Item 4', value: '4' },
        { label: 'Item 5', value: '5' },
        { label: 'Item 6', value: '6' },
        { label: 'Item 7', value: '7' },
        { label: 'Item 8', value: '8' },
      ];
    
        const [value, setValue] = useState(null);
        const [isFocus, setIsFocus] = useState(false);

    
        return (
          <View style={styles.container}>
            <Dropdown
              style={[styles.dropdown, isFocus && { borderColor:'#8E8E9366' }]}
              placeholderStyle={styles.placeholderStyle}
              selectedTextStyle={styles.selectedTextStyle}
              inputSearchStyle={styles.inputSearchStyle}
              iconStyle={styles.iconStyle}
              data={data}
              search
              maxHeight={300}
              labelField="label"
              valueField="value"
              placeholder={!isFocus ? 'pick a category' : '...'}
              searchPlaceholder="Search..."
              value={value}
              onFocus={() => setIsFocus(true)}
              onBlur={() => setIsFocus(false)}
              onChange={item => {
                setValue(item.value);
                setIsFocus(false);
              }}
              
            />
          </View>
        );

}

export default User_notification_campaign6


const styles = StyleSheet.create({
    container: {
      backgroundColor: '#F2F3FD',
      paddingHorizontal:20,
      marginTop:20
    },
    dropdown: {
      height: 50,
      borderColor: '#8E8E9366',
      borderWidth:1,
      borderRadius: 8,
      paddingHorizontal: 8,
    },
    icon: {
      marginRight: 5,
    },
    label: {
      position: 'absolute',
      backgroundColor: 'white',
      left: 22,
      top: 8,
      zIndex: 999,
      paddingHorizontal: 8,
      fontSize: 14,
      fontFamily:"archivo"
    },
    placeholderStyle: {
      fontSize: 14,
      fontFamily:"archivo",
      lineHeight:16,
      color:"#3C3C4399",
      fontWeight:"500"
    },
    selectedTextStyle: {
      fontSize: 14,
      fontFamily:"archivo",
      color:"#3C3C4399",
      lineHeight:16,
      fontWeight:"500"
    },
    iconStyle: {
      width: 20,
      height: 20,
    },
    inputSearchStyle: {
      height: 40,
      fontSize: 16,
    },
  });
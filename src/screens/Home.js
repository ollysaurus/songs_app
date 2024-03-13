import * as React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';
import {SafeAreaView,SafeAreaProvider,SafeAreaInsetsContext,useSafeAreaInsets,} from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';

export default function Home() {
    const engsort = () => console.log("English Sorted");
    const tagsort = () => console.log("Tagalog Sorted");
    const navigation = useNavigation();

    React.useLayoutEffect(() => {
        navigation.setOptions({
            headerSearchBarOptions: {
                placeHolder: "Search"
            }
        })
    }, [navigation]);

    return(
     
           
            <ScrollView contentContainerStyle={styles.container}>
            <View style={styles.sortbuttonscontainer}>
              <TouchableOpacity style={styles.engbuttons} onPress={engsort}>
                <Text style={styles.sortbuttonstexts}>ENGLISH</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.tagbuttons} onPress={tagsort}>
                 <Text style={styles.sortbuttonstexts}>TAGALOG</Text>
              </TouchableOpacity>
            </View>
           </ScrollView>
        
    )
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'gray',
      alignItems: 'center',
      //justifyContent: 'center'
      padding: 10
    },
    sortbuttonscontainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    engbuttons:{
      backgroundColor: 'maroon',
      alignItems: 'center',
      justifyContent: 'center',
      height: 65,
      width: 150,
      borderRadius: 5,
      top: 75,
      right: 10
    },
    tagbuttons:{
        backgroundColor: 'maroon',
        alignItems: 'center',
        justifyContent: 'center',
        height: 65,
        width: 150,
        borderRadius: 5,
        top: 75,
        left: 10
      },
    sortbuttonstexts:{
      color: '#d4d6d6',
      fontWeight: 'bold',
      letterSpacing: 1.7,
      fontSize: 25
    }
  });
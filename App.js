import { StatusBar } from 'expo-status-bar';
import {StyleSheet, Text, View, ScrollView, SafeAreaView} from "react-native";

export default function App() {
  return (
      <SafeAreaView>
      <ScrollView style = {styles.scrollView}>
        <View style={styles.container}>
          <Text>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus enim erat, vestibulum vel, aliquam a, posuere eu, velit. Quisque porta. Morbi imperdiet, mauris ac auctor dictum, nisl ligula egestas nulla, et sollicitudin sem purus in lacus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos hymenaeos. Praesent vitae arcu tempor neque lacinia pretium. Aliquam erat volutpat. Phasellus faucibus molestie nisl. Nulla non lectus sed nisl molestie malesuada. Curabitur bibendum justo non orci.

            Nullam eget nisl. Sed vel lectus. Donec odio tempus molestie, porttitor ut, iaculis quis, sem. Nullam rhoncus aliquam metus. Duis risus. Duis bibendum, lectus ut viverra rhoncus, dolor nunc faucibus libero, eget facilisis enim ipsum id lacus. Aliquam in lorem sit amet leo accumsan lacinia. Integer pellentesque quam vel velit. Aenean vel massa quis mauris vehicula lacinia. Nulla turpis magna, cursus sit amet, suscipit a, interdum id, felis. In laoreet, magna id viverra tincidunt, sem odio bibendum justo, vel imperdiet sapien wisi sed libero. Donec ipsum massa, ullamcorper in, auctor et, scelerisque sed, est. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Nulla turpis magna, cursus sit amet, suscipit a, interdum id, felis. Aliquam erat volutpat. Curabitur ligula sapien, pulvinar a vestibulum quis, facilisis vel sapien.

            Praesent dapibus. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Nam quis nulla. Quisque porta. Maecenas lorem. Fusce tellus odio, dapibus id fermentum quis, suscipit id erat. Phasellus rhoncus. Etiam dictum tincidunt diam. Cras pede libero, dapibus nec, pretium sit amet, tempor quis. Praesent id justo in neque elementum ultrices. Integer lacinia. Cras pede libero, dapibus nec, pretium sit amet, tempor quis. Nam sed tellus id magna elementum tincidunt. Nulla quis diam. Nulla est.

            Nulla pulvinar eleifend sem. Pellentesque arcu. Fusce nibh. Aenean fermentum risus id tortor. Maecenas lorem. Praesent in mauris eu tortor porttitor accumsan. Sed ac dolor sit amet purus malesuada congue. Donec iaculis gravida nulla. Phasellus enim erat, vestibulum vel, aliquam a, posuere eu, velit. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Praesent vitae arcu tempor neque lacinia pretium. Nulla quis diam. Donec quis nibh at felis congue commodo. Mauris metus. Morbi scelerisque luctus velit. Quisque porta. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Fusce dui leo, imperdiet in, aliquam sit amet, feugiat eu, orci. Etiam commodo dui eget wisi.

            Nullam feugiat, turpis at pulvinar vulputate, erat libero tristique tellus, nec bibendum odio risus sit amet ante. Curabitur sagittis hendrerit ante. Curabitur bibendum justo non orci. Maecenas aliquet accumsan leo. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Pellentesque arcu. Etiam bibendum elit eget erat. Aenean fermentum risus id tortor. Sed ac dolor sit amet purus malesuada congue. Nullam feugiat, turpis at pulvinar vulputate, erat libero tristique tellus, nec bibendum odio risus sit amet ante. Cras elementum.</Text>
          <StatusBar style="auto" />
        </View>
      </ScrollView>
      </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  scrollView: {
    marginHorizontal: 20,
  },

});

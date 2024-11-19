import React from "react";
import { View, Text, TouchableOpacity, Share } from "react-native";
import styles from "./Style";
export default function ResultImc(props){
 const onShare = async () => {
 const result = await Share.share({
 message: "Meu IMC é: " + props.resultImc,
 })
 }
 return(
 <View style={styles.resultImc}>
 <View style = {styles.boxsharebutton}>
 <Text style={styles.information}>{props.messageResultImc}</Text>
 <Text style={styles.numberImc}>{props.resultImc}</Text>
 <TouchableOpacity
 onPress={onShare}
 style={styles.resultImc}>
 <Text style={styles.shared}>Share</Text>
 </TouchableOpacity>
 </View>
 </View>
 );
}
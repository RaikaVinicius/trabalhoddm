import React, { useState } from "react";
import { TextInput,
 View,
 Text,
 TouchableOpacity,
 Vibration,
 Pressable,
 Keyboard,
 } from "react-native"
import ResultImc from "./ResultImc/Index";
import styles from "./Style";
export default function Form(){
 const [height, setHeight] = useState(null)
 const [weight, setWeight] = useState(null)
 const [messageImc, setMessageImc] = useState("preencha o peso e altura");
 const [imc, setImc] = useState(null)
 const [textButton, setTextButton] = useState("Calcular IMC")
 const [erroMessage, setErroMessage] = useState(null)
 function imcCalculator(){
 let heightFormat = height.replace(",",".")
 return setImc((weight/(heightFormat*heightFormat)).toFixed(2))
 }
 function verificationIMC(){

 if(imc == null){
 Vibration.vibrate();
 setErroMessage("Campo Obrigatório!!!")
 }
 }
 function validationImc(){
 if(weight != null && height != null){
 imcCalculator()
 setHeight(null)
 setWeight(null)
 setMessageImc(" imc é igual: ")
 setTextButton("Calcular Novamente")
 setErroMessage(null)

 }
 else{
 verificationIMC()
 setImc(null)
 setTextButton("Calcular")
 setMessageImc("Preencha peso e Altura")
 }


 }
 return(
 <View style={styles.formContext}>
 {imc == null ?
 <Pressable onPress={Keyboard.dismiss} style={styles.form}>
 <Text style={styles.formLabel}>Altura</Text>
 <Text style={styles.erroMessage}>{erroMessage}</Text>
 <TextInput style={styles.input}
 onChangeText={setHeight}
 value={height}
 placeholder="EX. 1.75"
 keyboardType="numeric"
 ></TextInput>
 <Text style={styles.formLabel}>Peso</Text>
 <Text style={styles.erroMessage}>{erroMessage}</Text>
 <TextInput style={styles.input}
 onChangeText={setWeight}
 value={weight}
 placeholder="EX. 75.365"
 keyboardType="numeric"
 ></TextInput>
 <TouchableOpacity
 style={styles.buttomCalculator}
 onPress={() => {
 validationImc()
 }}
 >
 <Text style={styles.textButtonCalculator}>{textButton}</Text>
 </TouchableOpacity>
 </Pressable>
 :
 <View style={styles.exhibitionResultImc}>
 <ResultImc messageResultImc={messageImc} resultImc={imc}/>
 <TouchableOpacity
 style={styles.buttomCalculator}
 onPress={() => {
 validationImc()
 }}
 >
 <Text style={styles.textButtonCalculator}>{textButton}</Text>
 </TouchableOpacity>
 </View>
 }
 </View>
 );
}
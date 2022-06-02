import { Ionicons } from '@expo/vector-icons';
import { useState } from "react";
import { Keyboard, KeyboardAvoidingView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Task from './Components/Task';

export default function App() {
  const[task, setTask] = useState(" ")
  const[taskArr, setTaskArr] = useState([])
  const[done, setDone] = useState(false)
  
  
  const addTaskHandel = ()=>{
    
    setTaskArr([...taskArr, task])
    setTask(null)
    Keyboard.dismiss()
    
  }

  const deletTask = (index)=>{
     const taskArrCopy = [...taskArr]
     taskArrCopy.splice(index,1)
     setTaskArr(taskArrCopy)
  }

  const complateTask= (index)=>{
      done? setDone(false) : setDone(true)
  }

  return (
    <View style={styles.container}>
      {/* Today's task */}
      <View style={styles.taskWrapper}>
          <Text style={styles.title}>Today's Task</Text>
          <View style={styles.item}>
          
        {/* This is where task go */}
        <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        {taskArr.map((item,index)=>{
          return <Task key={index} doneans={done} done={()=>complateTask()} delet={()=>deletTask()} index={index} item={item}  />
        })}
        <View style={styles.invinsibleView}></View>
        </ScrollView>
      
      </View>
      </View>

        {/* write a task hear */}
        <KeyboardAvoidingView style={styles.inputAndBtn}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      
    >
            {/* Task writeing input */}
      <TextInput placeholder="Add Your Task..." value={task} onChangeText={text=>setTask(text)} style={styles.textInput} />

              {/* Task submit button */}
      <TouchableOpacity style={styles.submitbtn} onPress={()=>addTaskHandel()}>
          
          <Ionicons name="add-circle" size={52} color="#05AD1B" />
      </TouchableOpacity>

    </KeyboardAvoidingView>

      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8E8E8', 
    
  },
  taskWrapper:{
    paddingTop: 80,
    paddingHorizontal: 20,
    
  },
title:{
  fontSize:30,
  fontWeight:'bold'
},
inputAndBtn:{
  position:'absolute',
  bottom:30,
  left:15,
  right:15,
  flex:1,
  flexDirection:'row',
  justifyContent:'space-around',
  alignItems:'center',
  
},
textInput:{
  padding:7,
  height:50,
  width:"73%",
  backgroundColor:"#fff",
  borderRadius:50,
  borderColor:"#93A2AF",
  borderWidth:2,
  
  
},
submitbtn:{
  
  
  height:50,
  width:50,
  // backgroundColor:"#fff",
  justifyContent:'center',
  alignItems:'center',
},
scrollView:{
  height:"90%",
},
invinsibleView:{
height:200,
}
  
});

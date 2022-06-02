import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

// export class Task extends Component {
  const Task =(props)=>{
   
    return (
        <View
        style={styles.mainTask}
        // onPress={onPress}
      >
          <View style={styles.rekAndText}>
              {/* delet */}
          <View style={styles.taskRek}>
          <TouchableOpacity
        style={styles.button}
        onPress={props.delet}
      >
        <MaterialIcons  name="delete-forever" size={30} color="#FF0000" />
      </TouchableOpacity>
          
          </View>
          
          {/* Main task item */}
          
        <Text style={styles.text}>
        
        {`${props.index+1}. ${props.item}`}
        
        </Text>
      
        
          </View>
          {/* Right side O  logo */}
          
          <TouchableOpacity
        // style={styles.taskO}
        style={props.doneans ? styles.taskO : styles.task1}
        onPress={props.done}

        
      >
          
          <Ionicons name="ios-checkmark-circle" size={24} color="#6463C6" />
          </TouchableOpacity>
          
          
          
          
          </View>
    )
  
}

const styles= StyleSheet.create({
mainTask:{
    padding: 15,
 backgroundColor:"#fff",
 marginVertical:10,
 borderRadius:10,
 flexDirection:'row',
 alignItems:'center',
 justifyContent: 'space-between'
},
rekAndText:{
    flexDirection: 'row',
    alignItems:'center',
    // maxWidth:"80%",
    // flexWrap:'wrap',
},
taskRek:{
    // height:24,
    // width:24,
    padding:2,
    // backgroundColor:"#E8E8E8",
    borderRadius:7,
    marginRight:10,

},
text:{
    fontSize:16,
    maxWidth:"80%",
    flexWrap:'wrap',
},
taskO:{
    
    borderColor:"#F05E00",
    borderWidth:2,
    // borderRadius:5,
    marginRight:10,
    padding:2,
},
task1:{
  borderColor:"black",
  borderWidth:2,
  marginRight:10,
    padding:2,
}

})

export default Task
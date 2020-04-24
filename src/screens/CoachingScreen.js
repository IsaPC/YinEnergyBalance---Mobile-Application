import React, { Component } from 'react';
import {
    View, Text, TextInput, ImageBackground, Image, KeyboardAvoidingView, Button, SafeAreaView,
    
} from 'react-native';
import StyleSheet from './styles/styles';
import TouchableOpacity from './styles/touch';
import { ScrollView } from 'react-native-gesture-handler';
import {RecyclerViewBackedScrollView} from 'react-native';
class CoachingScreen extends Component {
    state = {
        text: "",
        todo: []
      }
      addTodo= () => {
        var newTodo = this.state.text;
        var arr = this.state.todo;
        arr.push(newTodo);
        this.setState({todo: arr, text: ""});
      }
      deleteTodo = (t) =>{
        var arr = this.state.todo;
        var pos = arr.indexOf(t);
        arr.splice(pos,1)
        this.setState({todo: arr});
      }
      renderTodos = () =>{
        return this.state.todo.map(t=>{
          return (
            <Text 
              key={t}
              onPress={()=>this.deleteTodo(t)}
              >{t}</Text>
              )
          })
      }
    static navigationOptions = {
        title: 'Coaching Notes',
    };
    render () {
        return (
            <View>
                 
                  <Text style= {styles.textStyle}> 
        Yin Energy Balance
      </Text>
      <Image
                  source={require('./image/yin2.jpg')}
                  style={{alignSelf: 'center', width: 410, marginTop: 10}}
                > 
                </Image>

                


                <Text style={styles.titleStyle}>
                Yin Yoga
                </Text>
                <Text> Private, weekly, face-to-face in Dandenong or your venue, 75 minute sessions
A combination of physical body stretches with relaxation/meditation/contemplation.</Text>


    <Text style={styles.titleStyle}>
    UNBRIDLED.EMBODIED.LIVING COACHING
    </Text>
    <Text>A unique, one-on-one coaching journey over three months.  Face-to-face in Dandenong or online anywhere in the world. </Text>

          <Text style={styles.noteStyle}>Notes</Text> 
        
          
             <View style={styles.viewStyle}> 
             
             <TextInput 
              style={styles.inputStyle} 
              onChangeText={(text)=>this.setState({text})}
              value = {this.state.text}
            />
       <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <Button
          title= "Add note"
          color= "green"
          onPress= {this.addTodo}
      />
        {this.renderTodos()}
        </ScrollView>
    </SafeAreaView>
          </View>
          
            
       

            </View>   
            
        );
        

    }
}
const styles = {
    textStyle: {
        color: 'black',
        fontWeight: 'bold', 
        fontSize: 25, 
        backgroundColor: 'lightgreen', 
        textAlign: 'center', 
        justifyContent: 'center',
        
    },
    titleStyle: {
        color: 'black',
        fontWeight: 'bold', 
        fontSize: 20,
    },
    noteStyle: {
        color: 'black',
        fontWeight: 'bold', 
        fontSize: 15, 
    
    },
    inputStyle: {
        color: 'black',
        fontWeight: 'bold', 
        fontSize: 15, 
        borderWidth: 1, 
        padding:20, 
        margin: 1, 
        
    },
    scrollView: {
        backgroundColor: 'lightgreen',
        marginHorizontal: 20,
    }


}



export default CoachingScreen;
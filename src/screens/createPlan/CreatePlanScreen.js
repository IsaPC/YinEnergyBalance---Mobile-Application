import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

const CreatePlanScreen = props => {

    console.log('render home');

    return (
        <View style={styles.screen}>
            <Text>Create Plan Screen</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: "center",
        alignSelf: 'center'
    }
});

export default CreatePlanScreen;


///// OLD CODE ///////
//TODO refactor code
// Isaac
// import React, { useState } from 'react'
// import { StyleSheet, View, Text, StatusBar , Image, TextInput } from 'react-native'
// import { TouchableOpacity } from 'react-native-gesture-handler';

// function CreatePlan() {
//     {/* State */}
//     const [title, setTitle] = useState('');

//     //array to save plan infomation
//     const [plans, setPlans] = useState([]);

//     addImage = () => {
//         console.log('add image');
//     }


//   return ( // load the JSX
//     <View style={styles.container}>
//         <View style={styles.containimage}>
//             <View style={styles.box1}>
//                 <Image source={require("../../assets/emptyImage.png")} style={styles.styledimage} />
//             </View>
//             <View style={styles.box2}>
//                 <Text>box2</Text>
//                 <TouchableOpacity onPress={addImage /*button */}>
//                     <Image source={require("../../assets/Gallery.png")} style={styles.addphoto} />
//                 </TouchableOpacity>
//             </View>
//         </View>

//         <View style={styles.containtitle}>
//             <TextInput
//                 placeholder='Input title'
//                 placeholderTextColor='black'
//                 style={styles.titleinput}
//                 onChangeText={(value) => setTitle(value)} 
//                 onPress={console.log('typed in title')}
//             />
//         </View>
//         <View style={styles.containdesc}>
//             <TextInput  /*TODO scroll above keyboard */
//                         /* TODO, replace with markdown if time allows */
//                 placeholder='description' 
//                 multiline
//                 placeholderTextColor='black'
//                 style={styles.descinput}
//                 onChangeText={(value) => setTitle(value)} 
//                 onPress={console.log('typed in description')}               
//             />
//         </View>

//     </View>
//   );
// }

// // styles for JSX
// const styles = StyleSheet.create({
//     container: { // TODO use a global setting
//         flex: 1,
//         flexDirection: 'column',
//         backgroundColor: 'white',
//         padding: 0,
//         margin: 0

//     },
//     containimage: {
//         padding: 0,
//         margin: 0,
//         backgroundColor: 'green',
//         padding: 10,
//         flex: 1.5,
//         flexDirection: 'row',
//     },
//         box1: {
//             backgroundColor: 'brown',
//             flex: 3,
//             padding: 1,
//         },
//             styledimage: {
//                 backgroundColor: 'rgb(238, 238, 238)',
//                 alignSelf: 'center',
//                 width: 270,
//                 height: 270,
//                 borderRadius: 270 / 2,
//             },
//         box2: {
//             backgroundColor: 'gray',
//             padding: 10,
//             flex: 1,
//             flexDirection: 'column'
//         },
//             addphoto: {
//                 alignSelf: 'center',
//                 width: 60,
//                 height: 60,
//                 borderRadius: 60 / 8,
//             },
//     containtitle: {
//         backgroundColor: 'red',
//         padding: 10,
//         flex: 0.5,
        
//     },
//         titleinput: { 
//             fontSize: 35,
//             textAlignVertical: 'top', 
//             color: 'black', 
//             alignSelf: 'center',
//             borderWidth: 1,
//             borderColor: 'black',
//             padding: 8,
//             margin: 10,
//             backgroundColor: 'rgb(238, 238, 238)',
//             borderRadius: 10,
//         },
//     containdesc: {
//         backgroundColor: 'blue',
//         padding: 10, 
//         flex: 1,
//     },
//         descinput: { /*TODO scroll above keyboard */

//             /*size */
//             flex: 1,
//             borderColor: 'black',

//             /*font */
//             fontSize: 20,
//             color: 'black', /* TODO figure out why it's not black */
           
//             /*desc color */
//             backgroundColor: 'rgb(238, 238, 238)',
//             borderWidth: 1,
//             borderRadius: 10,
            
//         },
// })

// // export function
// export default CreatePlan;
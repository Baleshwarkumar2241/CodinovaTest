import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StatusBar,
  StyleSheet,
  View,
  Dimensions,
  Text,
} from 'react-native';
import React, {useState} from 'react';
import InputText from '../Compnents/InputText';
import CustomBtn from '../Compnents/CustomBtn';
import AsyncStorage from '@react-native-async-storage/async-storage';
const AddEmpScreen = ({navigation}) => {
  const [fName, setFName] = useState('');
  const [lName, setLName] = useState('');
  const [email, setEmail] = useState('');
  const [jobTitle, setJobTitle] = useState('');
  const [salary, setSalary] = useState('');

  
  const [fNameError, setFNameError] = useState('');
  const [lNameError, setLNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [jobTitleError, setJobTitleError] = useState('');
  const [salaryError, setSalaryError] = useState('');



  const handleLogin = async () => {
    try {
      if (!fName || !lName ||  !email  || !jobTitle ||  !salary ) {
        setFNameError(!fName ? "Please Enter First Name!" : fNameError);
        setLNameError(!lName ? "Please Enter Last Name Field!" : lNameError);
        setEmailError(!email ? "Please Enter Email Field!" : emailError);
        setJobTitleError(!jobTitle ? "Please Enter Job Title Field!" : jobTitleError);
        setSalaryError(!salary ? "Please Enter Salary Field!" : salaryError);
        console.log("objectew3232");
      } else {
        console.log("object");
        const data = {
          fname: fName,
          Lname: lName,
          email: email,
          JobTitle: jobTitle,
          Salary: salary,
        };

        let showList = [];
        const storedData = await AsyncStorage.getItem('showList');
        if (storedData) {
          showList = JSON.parse(storedData);
          const entryExists = showList.some(
            entry =>
              entry.fname.trim() === fName.trim() &&
              entry.Lname.trim() === lName.trim(),
          );
          if (entryExists) {
            alert('Entry already exists');
            return;
          }
        }
        showList.push(data);
        await AsyncStorage.setItem('showList', JSON.stringify(showList));

        setFName('');
        setLName('');
        setJobTitle('');
        setSalary('');
        setEmail('');
        navigation.navigate('DrawerScreen');
      }

    } catch (error) {
      console.error('Error saving data: ', error);
    }
  };
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={'#fff'} barStyle="dark-content" />
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? null : null}
        style={styles.container}
        keyboardVerticalOffset={Platform.OS == 'android' ? 25 : null}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          nestedScrollEnabled={true}
          contentContainerStyle={styles.scrollView}>
          <View style={{paddingVertical: '10%'}}>
            <Text
              style={{
                fontSize: 22,
                fontWeight: 800,
                color: 'green',
                alignSelf: 'center',
              }}>
              Enter Employee details
            </Text>
          </View>
          <View
            style={{
              marginBottom: 10,
              marginHorizontal: 8,
            }}>
            <InputText
              value={fName}
                error={fNameError}
              onChangeText={text => {
                setFName(text)
                setFNameError("")
              }}
              lableName="First Name"
            />
            <InputText
              value={lName}
                error={lNameError}
              onChangeText={text => {
                setLName(text);
                setLNameError("")
              }}
              lableName="Last Name"
            />
            <InputText
              value={email}
                error={emailError}
              onChangeText={text => {
                setEmail(text);
                setEmailError("")
              }}
              lableName="Email"
            />
            <InputText
              value={jobTitle}
                error={jobTitleError}
              onChangeText={text => {
                setJobTitle(text);
                setJobTitleError("")
              }}
              lableName="Job Title"
            />
            <InputText
              value={salary}
              error={salaryError}
              onChangeText={text => {
                setSalary(text);
                setSalaryError("")
              }}
              lableName="Salary"
              isNumber={true}
            />
          </View>
          <CustomBtn
            title={'Save'}
            onPress={handleLogin}
            style={styles.button}
            textstyle={styles.textButton}
          />
        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  );
};

export default AddEmpScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    paddingTop: '5%',
  },
  button: {
    alignSelf: 'center',
    backgroundColor: 'green',
    marginTop: '7%',
  },
  textButton: {
    fontSize: 16,
    fontWeight: '900',
  },
});

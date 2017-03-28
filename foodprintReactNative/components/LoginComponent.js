import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import { Container, Content, Button, Form, Item, Input, Label } from 'native-base';
import {Image} from 'react-native';

const styles = {
  container:{
    backgroundColor: '#f6e49c',
    flex: 1,
  },
  logo: {
    width: 150,
    height: 150,
    marginTop: 20,
    marginLeft: 90
  },
  mainForm: {
    margin: 40,
    marginTop: 50
  },
  loginButton: {
    marginTop: 45,
    marginBottom: 30,
    marginRight: 40,
    marginLeft: 40,
    backgroundColor: '#FC8A67'
  },
  signUpButton: {
    backgroundColor: '#1BB001',
    marginRight: 40,
    marginLeft: 40
  },
  input: {
    color: '#505050',
  }
};


export default function LoginComponent (props) {

  return (
      <Container>
        <Content style={styles.container}>
          <Image style={styles.logo} source={require('../img/FoodPrint.png')}  />
          <Form style={styles.mainForm}>
            <Item stackedLabel>
                <Label>Email</Label>
                <Input onChangeText={(text) => props.updateEmail(text)} />
            </Item>
            <Item stackedLabel>
                <Label>Password</Label>
                <Input name="pass" secureTextEntry={true} onChangeText={(text) => props.updatePassword(text)} />
            </Item>
            <Button style={styles.loginButton} block info onPress={() => props.doLogin()}><Label>Login</Label></Button>

            <Button style={styles.signUpButton} block onPress={Actions.signup}><Label>Sign Up</Label></Button>
          </Form>
        </Content>
      </Container>
  )
}

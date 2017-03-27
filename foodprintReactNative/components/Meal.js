import React, { Component } from 'react';
import { Image, Text as RNText, View, TouchableOpacity, StyleSheet } from 'react-native';
import {Container, Content, Card, CardItem, Body, Text, Badge, Button, Thumbnail, Footer} from 'native-base';
import { Col, Row, Grid } from "react-native-easy-grid";
import axios from 'axios';



const styles = StyleSheet.create({
  heading: {
    fontSize: 10,
    color:'#000'
  },
  tableText: {
    fontSize: 15,
    color:'#000'
  }
});


export default function Meal (props) {


    return (
      <Container style={{marginTop: 10, marginBottom: 60}}>
        <Content >
          <Card>
            <CardItem>
              <Body>
                <Thumbnail style={{width: 300, height: 300, margin: 10}} square source={{uri: props.meal.photoUrl}} />
              <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
                {props.meal.tags.map((foodTag, i) =>{
                  return (
                  <TouchableOpacity key={i} onPress={()=> props.handleTagClick(foodTag)}>
                    <Badge   style={{margin: 5, backgroundColor: '#6dd06f'}}><RNText>{foodTag}</RNText></Badge>
                  </TouchableOpacity>
                )})
                }
              </View>
              </Body>
            </CardItem>
          </Card>
          <Card>
            <CardItem>
              <Body>
                <RNText style={{fontWeight: 'bold', fontSize: 25, color:'#000'}}>Nutrition Facts</RNText>
                 <Grid>
                 <Col>
                    <Row><RNText>  </RNText></Row>
                    <Row><RNText style={styles.tableText}>Calories</RNText></Row>
                    <Row><RNText style={styles.tableText}>Total fat</RNText></Row>
                    <Row><RNText style={styles.tableText}>Saturated fat</RNText></Row>
                    <Row><RNText style={styles.tableText}>Cholesterol</RNText></Row>
                    <Row><RNText style={styles.tableText}>Sodium</RNText></Row>
                    <Row><RNText style={styles.tableText}>Carbohydrates</RNText></Row>
                     <Row><RNText style={styles.tableText}>Sugars</RNText></Row>
                    <Row><RNText style={styles.tableText}>Protein</RNText></Row>
                 </Col>
                 <Col>
                 <Row><RNText style={styles.heading}>Amount per Serving</RNText></Row>
                    <Row><RNText style={styles.tableText}>{ props.meal.nutritionalTable.calories.toFixed(0)}</RNText></Row>
                    <Row><RNText style={styles.tableText}>{ props.meal.nutritionalTable.total_fat.toFixed(0)}g</RNText></Row>
                    <Row><RNText style={styles.tableText}>{ props.meal.nutritionalTable.saturated_fat.toFixed(0)}g</RNText></Row>
                    <Row><RNText style={styles.tableText}>{ props.meal.nutritionalTable.cholesterol.toFixed(0)}mg</RNText></Row>
                    <Row><RNText style={styles.tableText}>{ props.meal.nutritionalTable.sodium.toFixed(0)}mg</RNText></Row>
                    <Row><RNText style={styles.tableText}>{ props.meal.nutritionalTable.total_carbohydrate.toFixed(0)}g</RNText></Row>
                    <Row><RNText style={styles.tableText}>{ props.meal.nutritionalTable.sugars.toFixed(0)}g</RNText></Row>
                    <Row><RNText style={styles.tableText}>{ props.meal.nutritionalTable.protein.toFixed(0)}g</RNText></Row>
                 </Col>
                 <Col>
                   <Row><RNText style={styles.heading}>% Daily Value</RNText></Row>
                  <Row><RNText style={styles.tableText}>{(100 * props.meal.nutritionalTable.calories / 2000).toFixed(0)}%</RNText></Row>
                  <Row><RNText style={styles.tableText}>{(100 * props.meal.nutritionalTable.total_fat / 65).toFixed(0)}%</RNText></Row>
                  <Row><RNText style={styles.tableText}>{(100 * props.meal.nutritionalTable.saturated_fat / 20).toFixed(0)}%</RNText></Row>
                  <Row><RNText style={styles.tableText}>{(100 * props.meal.nutritionalTable.cholesterol / 300).toFixed(0)}%</RNText></Row>
                  <Row><RNText style={styles.tableText}>{(100 * props.meal.nutritionalTable.sodium / 2400).toFixed(0)}%</RNText></Row>
                  <Row><RNText style={styles.tableText}>{(100 * props.meal.nutritionalTable.total_carbohydrate / 300).toFixed(0)}%</RNText></Row>
                  <Row><RNText style={styles.tableText}>--</RNText></Row>
                  <Row><RNText style={styles.tableText}>--</RNText></Row>
                 </Col>
                 </Grid>
              </Body>
            </CardItem>
          </Card>
        </Content>
      </Container>
    )
}

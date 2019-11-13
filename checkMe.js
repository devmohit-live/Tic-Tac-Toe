import React from 'react';
import { StyleSheet,Image } from 'react-native';
import { Container, Content, Card, Text, CardItem, Thumbnail,  Button, Icon, Left, Body, Right } from 'native-base';
import { AppLoading, Font } from 'expo';

export default class App extends React.Component {
 
  constructor(props) {
    super(props);
    this.state = { isloading: true };
  }



  async componentWillMount() {
    await Expo.Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf")
    });
    this.setState({ isloading: false });
  } 

 
  render() {
    if (this.state.isloading) {
      return <AppLoading />;
    }

  return (
     <Container>
     <Content>
       <Card>
         <CardItem>
           <Left>
             <Thumbnail source={{uri: 'https://scontent.fdel29-1.fna.fbcdn.net/v/t1.0-9/53926394_2104335493016973_3554484701894803456_n.jpg?_nc_cat=103&_nc_oc=AQmBBzaMqmjbyTH6pV5sQrUKWmpsYRvTq8bt1xlbc3ei0tZWVAd92dAGk5vAfQakmCs&_nc_ht=scontent.fdel29-1.fna&oh=cfda4410e055791f1785fb79f30916cc&oe=5E647184'}} />
             <Body>
               <Text>Mohit Singh</Text>
               <Text note>Coder | Learner</Text>
             </Body>
           </Left>
         </CardItem>
         <CardItem cardBody>
           <Image source={{uri: 'https://scontent.fdel29-1.fna.fbcdn.net/v/t1.0-9/65124088_2268163786634142_5257229283872473088_n.jpg?_nc_cat=103&_nc_oc=AQnvNdDSzhE7glnuXK3QATIRSWLuxZXrWPZHdSh_PC3WUiC7DqdEEr-1yKNS0qTAwpg&_nc_ht=scontent.fdel29-1.fna&oh=ce625684941ea82fe496d2c6441ec13d&oe=5E622DEF'}} style={{height: 200, width: null, flex: 1}}/>
         </CardItem>
         <CardItem>
           <Left>
             <Button transparent>
               <Icon active name="thumbs-up" />
               <Text>12 Likes</Text>
             </Button>
           </Left>
           <Body>
             <Button transparent>
               <Icon active name="chatbubbles" />
               <Text>4 Comments</Text>
             </Button>
           </Body>
           <Right>
             <Text>11h ago</Text>
           </Right>
         </CardItem>
       </Card>
     </Content>
   </Container>
  );
}
}

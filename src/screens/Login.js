import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Dimensions,
  ScrollView,
  TouchableOpacity,
  Text,

} from 'react-native';
import {Card, Title, TextInput} from 'react-native-paper';
import {useSelector, useDispatch} from 'react-redux';
import {addnote, deletenote} from '../redux/notesApp';
import AppIntroSlider from 'react-native-app-intro-slider';
import {ImageBackground} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Header from '../components/Header';
import GovernmentLogin from '../components/GovernmentLogin';
import {Lub} from '../components/Lub';

const slides = [
  {
    key: 'one',
    text: 'Umów się na wideokonferencję z\n pracownikami BOK',
    image: require('../assets/MicrosoftTeams-image-13.png'),
  },
  {
    key: 'two',
    text: 'Umów się na wideokonferencję z\n pracownikami BOK',
    image: require('../assets/TEF-ads.jpeg'),
  },
  {
    key: 'three',
    text: 'Umów się na wideokonferencję z\n pracownikami BOK',
    image: require('../assets/foto_ADS.jpeg'),
  },
];
const windowHeight = Dimensions.get('window').height;

function Login({navigation}) {
  const notes = useSelector(state => state);
  const dispatch = useDispatch();
  const addNote = note => dispatch(addnote(note));
  const deleteNote = id => dispatch(deletenote(id));
  const [isPasswordSecure, setIsPasswordSecure] = useState(true);

  _renderItem = ({item}) => {
    if (item != undefined)
      return (
        <ImageBackground source={item.image} style={styles.sliderbg}>
          <View
            style={{backgroundColor: 'rgba(197,197,197,0.5)', height: '100%'}}>
            <Text style={styles.text1}>{item.text}</Text>
            <Text style={styles.text2}>{item.text}</Text>
          </View>
        </ImageBackground>
      );
  };
  _renderNextButton = () => {
    return (
      <View style={styles.arrow}>
        <Icon name="md-chevron-forward-sharp" color="white" size={24} />
      </View>
    );
  };
  _renderpreviousButton = () => {
    return (
      <View>
        <Icon
          style={styles.arrow}
          name="md-chevron-back-sharp"
          color="white"
          size={24}
        />
      </View>
    );
  };

  return (
    <>
      <Header />
      <ScrollView>
        <View style={{height: windowHeight * 0.25, marginHorizontal: 10}}>
          <AppIntroSlider
            style={styles.appIntroSlider}
            renderItem={this._renderItem}
            data={slides}
            showPrevButton
            dotClickEnabled={true}
            doneLabel={null}
            dotStyle={{backgroundColor: 'rgba(0, 0, 0, .3),', marginTop: 15}}
            activeDotStyle={{backgroundColor: '#FFf', marginTop: 15}}
            renderNextButton={this._renderNextButton}
            renderPrevButton={this._renderpreviousButton}
          />
        </View>
        <Card style={styles.card}>
          <Card.Content>
            <Title style={styles.title}>LOGOWANIE</Title>

            <TextInput style={styles.username} placeholder="Login" />

            <TextInput
              secureTextEntry={isPasswordSecure}
              style={styles.password}
              right={
                <TextInput.Icon
                  name={() => (
                    <Icon
                      name={isPasswordSecure ? 'md-eye-off' : 'md-eye'}
                      size={28}
                      color={'black'}
                    />
                  )}
                  onPress={() => {
                    isPasswordSecure
                      ? setIsPasswordSecure(false)
                      : setIsPasswordSecure(true);
                  }}
                />
              }
              placeholder="Hasio"
            />
            <Text style={styles.remembertext}>nie pamiętasz hasła?</Text>
            <TouchableOpacity style={styles.login}>
              <Text style={{color: 'white'}}>zaloguj się</Text>
            </TouchableOpacity>
            <Lub />
            <GovernmentLogin />
          </Card.Content>
        </Card>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  titleContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  card: {
    marginHorizontal: 10,
    marginTop: 10,
  },

  username: {
    marginTop: 20,
    height: 40,
    justifyContent: 'center',
  },
  password: {
    marginTop: 15,
    height: 45,
    justifyContent: 'center',
  },

  title: {
    fontSize: 20,
    color: '#0078A5',
    textAlign: 'center',
  },
  remembertext: {
    fontSize: 10,
    color: '#0078A5',
    textAlign: 'right',
    marginTop: 20,
    textDecorationLine: 'underline',
  },
  login: {
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    backgroundColor: '#B95129',
  },

  slide: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 320,
    height: 320,
    marginTop: 32,
  },
  text1: {
    paddingTop: 10,
    fontSize: 20,
    color: 'white',
    textAlign: 'center',
    paddingTop: 25,
  },
  text2: {
    fontSize: 18,
    color: 'white',
    textAlign: 'center',
    paddingTop: 10,
  },

  sliderbg: {
    height: windowHeight * 0.25,
    resizeMode: 'contain',
  },
  appIntroSlider: {
    height: windowHeight * 0.25,
  },
  arrow: {
    width: 40,
    height: 40,
  },
  listTitle: {
    fontSize: 20,
  },
  separator: {
    flex: 1,
    padding: 20,
  },
});

export default Login;

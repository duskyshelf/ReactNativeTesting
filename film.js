'use strict';
import React, {
  AppRegistry,
  Component,
  Image,
  ListView,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class Film extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    var styles = this.props.style;
    var movie = this.props.movie;
    return (
      <View style={styles.container}>
        <Image source={{uri: movie.posters.thumbnail}} style={styles.thumbnail}/>
        <View style={styles.rightContainer} >
          <Text style={styles.title}>{movie.title}</Text>
          <Text style={styles.year}>{movie.year}</Text>
        </View>
      </View>
    );
  }

}

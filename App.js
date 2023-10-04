import React, { useState } from 'react';
import { View, Button, Text,StyleSheet } from 'react-native';

const ColorChangingBox1 = () => {
  const [isColorChanged, setColorChanged] = useState(false);
  const [text1Color, setText1Color] = useState('green');
  const [text2Color, setText2Color] = useState('red');
  const [text3Color, setText3color] = useState('black');
  const [text4Color, setText4color] = useState('blue');

  const toggleColor1 = () => {
    setColorChanged(!isColorChanged);
    setText1Color(text1Color === 'green' ? 'yellow' : 'green');
  };

  const toggleColor2 = () => {
    setColorChanged(!isColorChanged);

    setText2Color(text2Color === 'red' ? 'green' : 'red');
  };

  const toggleColor3 = () => {
    setColorChanged(!isColorChanged);
    setText3color(text3Color === 'black' ? 'red' : 'black');
  };

  const toggleColor4 = () => {
    setColorChanged(!isColorChanged);
    setText4color(text4Color === 'red' ? 'green ' : 'red');
  };

  return (
    <View style={{ flex: 1, flexDirection: 'column' }}>
      {/* Top Section for Buttons */}
      <View style={{ flex: 1, backgroundColor: 'lightyellow', justifyContent: 'center', alignItems: 'center' }}>
        <Button title="Button 1" onPress={toggleColor1} />
      </View>
      <View style={{ flex: 1, backgroundColor: 'lightyellow', justifyContent: 'center', alignItems: 'center' }}>
        <Button title="Button 2" onPress={toggleColor2} />
      </View>
      <View style={{ flex: 1, backgroundColor: 'lightyellow', justifyContent: 'center', alignItems: 'center' }}>
        <Button title="Button 3" onPress={toggleColor3} />
      </View>
      <View style={{ flex: 1, backgroundColor: 'lightyellow', justifyContent: 'center', alignItems: 'center' }}>
        <Button title="Button 4" onPress={toggleColor4} />
      </View>


      <View style={{ flex: 1, flexDirection: 'row' }}>
        <View style={[styles.textContainer, { backgroundColor: text1Color }]}>
          <Text style={styles.boxText}>Text1</Text>
        </View>

        <View style={[styles.textContainer, { backgroundColor: text2Color }]}>
          <Text style={styles.boxText}>Text2</Text>
        </View>
      </View>

      <View style={{ flex: 1, flexDirection: 'row' }}>
        <View style={[styles.textContainer, { backgroundColor: text3Color }]}>
          <Text style={styles.boxText}>Text3</Text>
        </View>

        <View style={[styles.textContainer, { backgroundColor: text4Color }]}>
          <Text style={styles.boxText}>Text4</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  textContainer: {
    flex: 1,
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  boxText: {
    fontSize: 20,
    color: 'white', 
  },
});

export default ColorChangingBox1;
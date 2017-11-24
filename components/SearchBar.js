import React from 'react';
import { StyleSheet, Text, TextInput, Button, View } from 'react-native';

class SearchBar extends React.Component {
    state = { term: '' }

    render () {
        return (
            <View style={styles.container}>
                <Text>Open up App.js to start working on your app!</Text>
                <TextInput
                    style={ styles.inputs }
                    value={ this.state.term }
                    onChangeText={ term => this.setState({ term }) }
                />
                <Button
                    style={ styles.button }
                    onPress={() => console.log( this.state.term )}
                    title="Search"
                />
            </View>
        )
    }
}

export default SearchBar;

const styles = StyleSheet.create({
    inputs: {

    },
    container: {
        flex: 1,
        padding: 70,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
import React, { Component} from 'react';
import { View, Text, Alert } from 'react-native';
import {connect} from 'react-redux';
import {emailChanged, passwordChanged, loginUser} from '../actions';
import {Card, CardSection, Input, Button, Spinner} from './common';

class LoginForm extends Component {
    onEmailChange(text) {
        this.props.emailChanged(text);
    }
    
    onButtonPress() {
        const {email, password} = this.props;
        this.props.loginUser({email, password});
    }

    renderError() {
        if (this.props.error) {
            return (
                <View style={{backgroundColor:'white'}}>
                    <Text style={Styles.errorTextS}>
                        {this.props.error}
                    </Text>
                </View>
            );
        }
    }

    onPasswordChange(text) {
        this.props.passwordChanged(text);
    }

    renderButton() {
        if( this.props.loading) {
            return <Spinner size="large" />
        }
        return (
            <Button
            onPress={this.onButtonPress.bind(this)}
            >
                Log in
            </Button>
        );
    }

    render() {
        return(
            <Card>
                <CardSection>
                    <Input 
                        label="Email"
                        placeholder="Your Email pls <3 "
                        onChangeText={this.onEmailChange.bind(this)}
                        value={this.props.email}
                    />
                </CardSection>

                <CardSection>
                    <Input 
                        secureTextEntry
                        label="password"
                        placeholder="password"
                        onChangeText={this.onPasswordChange.bind(this)}
                        value={this.props.password}
                    />
                </CardSection>

                    {this.renderError()}

                <CardSection>
                    {this.renderButton()}
                </CardSection>
            </Card>
        );
    }
}

const Styles = {
    errorTextS: {
        fontSize: 20,
        alignSelf: 'center',
        color: 'red'
    }
}

const mapStateToProps = ({auth}) => {
    const { email, password, error, loading } = auth;
    return {
        email, password, error, loading
    };
};

export default connect(mapStateToProps, {emailChanged, passwordChanged, loginUser})(LoginForm);

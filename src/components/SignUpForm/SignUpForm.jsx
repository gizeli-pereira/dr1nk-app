import {
  Button,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Card,
  Input,
} from '@chakra-ui/react'
import { Component } from 'react';
import { signUp } from '../../utilities/users-service';

export default class SignUpForm extends Component {
  state = {
    name: '',
    email: '',
    password: '',
    confirm: '',
    error: ''
  };

  handleChange = (evt) => {
    this.setState({
      [evt.target.name]: evt.target.value,
      error: ''
    });
  };

  handleSubmit = async (evt) => {
    evt.preventDefault();
    try {
      const { name, email, password } = this.state;
      const formData = { name, email, password };
      // The promise returned by the signUp service
      // method will resolve to the user object included
      // in the payload of the JSON Web Token (JWT)
      const user = await signUp(formData);
      this.props.setUser(user);
    } catch {
      // An error occurred
      // Probably due to a duplicate email
      this.setState({ error: 'Sign Up Failed - Try Again' });
    }
  };

  render() {
    const disable = this.state.password !== this.state.confirm;
    return (
      <div>
        <div className="form-container">
          <Card
            className="form-container"
            p={8}
            my={6}
            bgGradient='linear(to-r, pink.200, purple.200)'
            sm='200px'
          >
            <FormControl>
              <form autoComplete="off" onSubmit={this.handleSubmit}>
                <FormLabel>Name</FormLabel>
                <Input type="text" name="name" value={this.state.name} onChange={this.handleChange} required />
                <FormLabel>Email</FormLabel>
                <Input type="email" name="email" value={this.state.email} onChange={this.handleChange} required />
                <FormLabel>Password</FormLabel>
                <Input type="password" name="password" value={this.state.password} onChange={this.handleChange} required />
                <FormLabel>Confirm</FormLabel>
                <Input type="password" name="confirm" value={this.state.confirm} onChange={this.handleChange} required />
                <br />
                <Button
                  ml={6} mt={6} mb={6}
                  bgColor='purple.500'
                  color='white'
                  borderRadius={20} type="submit" disabled={disable}>SIGN UP</Button>
              </form>
            </FormControl>
          </Card>
        </div>
        <p className="error-message">&nbsp;{this.state.error}</p>
      </div>
    );
  }
}
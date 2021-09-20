import axios from 'axios';
import { generateBackendURL } from '../routes';
import TokenService from '../tokenService';

class SessionController {
  static async login(username, password) {
    const response = await axios.post(generateBackendURL('/auth/signin'), {
      username,
      password,
    });
    TokenService.setUser(response.data);
  }

  static async signup(username, password, email) {
    const response = await axios.post(generateBackendURL('/auth/signup'), {
      username,
      password,
      email,
    });
    TokenService.setUser(response.data);
  }

  static async refreshtoken() {
    const refreshtoken = TokenService.getLocalRefreshToken();
    const response = await axios.post(generateBackendURL('/api/auth/refreshtoken'), {
      refreshtoken,
    });
    TokenService.setUser(response.data);
  }

  static async autenticado() {
    const token = TokenService.getLocalAccessToken();
    const response = await axios.get(generateBackendURL('/api/test/user'), {
      token,
    });
    return response;
  }
}

export default SessionController;

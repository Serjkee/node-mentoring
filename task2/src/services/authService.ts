const jwt = require('jsonwebtoken')

class AuthService {
  authenticate({username, password}) {
    return jwt.sign({ username, password }, 'secret', { expiresIn: 60 * 60 });
  }
}

export default new AuthService();

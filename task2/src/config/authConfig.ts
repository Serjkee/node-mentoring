const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const passport = require('passport');
const jwt = require('jsonwebtoken');


import UserModel from '../models/user';

const opts: any = {}
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = 'secret';

export const passportUserAuth = new JwtStrategy(opts,function (payload, done) {
  UserModel.findOne({where: {id: payload.username}})
    .then((user) => user ? done(null, user) : done(null, false))
    .catch(err => done(err))
  }
)

export const userAuth = passport.authenticate('jwt', {session: false});

const verifyJwt = token => {
  return jwt.verify(token, 'secret', function (err, verifiedJwt) {
    if (err) {
      return err;
    } else {
      return verifiedJwt;
    }
  });
}

const checkTokenValidation = (req, res, next) => {
  const jwtToken = (req.headers.authorization).split(' ')[1];
  const verifiedJwt = verifyJwt(jwtToken);
  if (!verifiedJwt.username) {
    res.status(403);
    res.send({ error: 'Token is invalid' });
  } else {
    next();
  }
}

export const verifyRouteAndJwtMiddleware = (req, res, next) => {
  const adminRoute = new RegExp(/\/login/);
  const isAdminRoute = adminRoute.test(req.url);
  if (isAdminRoute) {
    return next();
  }

  if (req.headers.authorization && !isAdminRoute) {
    checkTokenValidation(req, res, next);
  } else {
    res.status(401);
    res.send({ error: 'Is not authorized' });
  }
}

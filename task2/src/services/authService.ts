const JwtStrategy = require('passport-jwt').Strategy;
const  ExtractJwt = require('passport-jwt').ExtractJwt;
const passport = require('passport');

import UserModel from '../models/user';

const opts: any = {}
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = 'secret';
opts.issuer = 'accounts.examplesoft.com';
opts.audience = 'yoursite.net';

export const passportUserAuth = new JwtStrategy(opts, function (jwt_payload, done) {
  console.log(jwt_payload);
  done(null, jwt_payload);
  // UserModel.findOne({where: {id: jwt_payload.sub}}).then((user = null) => done(null, user) ).catch(err => done(err, null));
})

export const userAuth = passport.authenticate('jwt', { session: false });

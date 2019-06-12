import googleAppAuth from './googleOauth2';

let passport = require('passport');
let GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
let newReq = require('request');

// Creates a Passport configuration for Google
class GooglePassport {

    userId: string;
    displayName: string;
    email: string;
    clientId: string;
    secretId: string;

    constructor() {
        this.clientId = googleAppAuth.id;
        this.secretId = googleAppAuth.secret;

        passport.use(new GoogleStrategy({
            clientID: this.clientId,
            clientSecret: this.secretId,
            callbackURL: "/auth/google/callback",
            profileFields: ['id', 'displayName', 'emails']
        },
            (accessToken, refreshToken, profile, done) => {
                process.nextTick(() => {
                    this.userId = profile.id;
                    this.displayName = profile.displayName;
                    this.email = profile.emails[0].value;
                    var newUser = {
                        emailAddress: profile.emails[0].value,
                        userName: profile.displayName,
                        password: "null",
                        userType: 1,
                    };

                    newReq.get("http://localhost:8080/login/" + newUser.emailAddress, {}, (err, resp, body) => {
                        if (body == "null") {
                            console.log("not find, now create a user");
                            newReq.post("http://localhost:8080/foodie",
                                {
                                    json: newUser
                                },
                                (err1, resp1, body1) => {
                                    console.log("create: " + resp1.statusCode);
                                });
                        }
                    });
                    return done(null, profile);
                })
            }
        ));

        passport.serializeUser(function (user, done) {
            done(null, user);
        });

        passport.deserializeUser(function (user, done) {
            done(null, user);
        });
    }
}
export default GooglePassport;
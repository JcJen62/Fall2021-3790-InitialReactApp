# Example Congress React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Steps to get auth working

1 Don't redirect "/" to "/welcome" page.  Just have Welcome component linked to "/" route.
2 Make sure SignupForm history pushes to "/" instead of "/welcome"
3 Same thing with LoginForm
4 Make sure you delete the user object using your Netlify dashboard before you try to create a new one.
5 Remember to delete the localStorage keys that Netlify Identity created if you need to test new user signup/creation.
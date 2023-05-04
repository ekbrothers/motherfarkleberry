const contentful = require('contentful');

const client = contentful.createClient({
  space: 'h0l6prpyjirh',
  accessToken: 'Ea951yfGqTM3i3rA7Y0ac2kV4MBj7uFlBq1p1k0mMsM',
});

module.exports = client;

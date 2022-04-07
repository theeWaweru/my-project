module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'dad099a89be6f38d4062e8a93c106a12'),
  },
});

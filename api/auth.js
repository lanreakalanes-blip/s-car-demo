export default function handler(req, res) {
  const clientId = process.env.OAUTH_CLIENT_ID;
  const redirectUri = `https://github.com/login/oauth/authorize?client_id=${clientId}&scope=repo,user`;
  res.redirect(redirectUri);
}
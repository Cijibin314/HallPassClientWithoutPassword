function openGoogleLoginPopup() {
  // Replace these with your actual client ID and redirect URI
  var clientId = '639047990456-94arvdhfleq94ereo1jq32g5u0sjqjjm.apps.googleusercontent.com';
  var redirectUri = 'https://cijibin314.github.io';

  // Construct the Google OAuth URL
  var googleOAuthUrl = 'https://accounts.google.com/o/oauth2/v2/auth?' +
      'client_id=' + encodeURIComponent(clientId) +
      '&redirect_uri=' + encodeURIComponent(redirectUri) +
      '&response_type=code' +
      '&scope=email profile openid';

  // Open the Google OAuth URL in a new window
  var popup = window.open(googleOAuthUrl, '_blank', 'width=600,height=600');
  if (!popup) {
      alert('Please allow popups for this website');
  }
}
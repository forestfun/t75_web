// Store redirection functionality
function redirectToStore() {
    // URLs for your app on different stores
    const androidPlayStoreUrl = 'https://play.google.com/store/apps/details?id=YOUR_ANDROID_APP_ID';
    const iOSAppStoreUrl = 'https://apps.apple.com/app/YOUR_IOS_APP_ID';

    // Detect the user's device
    const userAgent = navigator.userAgent.toLowerCase();
    const isAndroid = /android/.test(userAgent);
    const isIOS = /ipad|iphone|ipod/.test(userAgent);

    // Redirect based on device
    if (isAndroid) {
        window.location.href = androidPlayStoreUrl;
    } else if (isIOS) {
        window.location.href = iOSAppStoreUrl;
    } else {
        // For desktop users, you might want to show both options or redirect to a landing page
        alert('Please visit us on your mobile device to download the app!');
    }
}
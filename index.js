// Create custom alert element
function createCustomAlert() {
    const alertContainer = document.createElement('div');
    alertContainer.className = 'fixed inset-0 flex items-center justify-center z-50 animate-fade-in';

    // Backdrop
    const backdrop = document.createElement('div');
    backdrop.className = 'absolute inset-0 bg-black/70 backdrop-blur-sm';
    backdrop.onclick = () => alertContainer.remove();

    // Alert box
    const alertBox = document.createElement('div');
    alertBox.className = 'relative bg-white text-black p-8 rounded-2xl shadow-2xl max-w-md mx-4 animate-scale-in';

    // Content
    alertBox.innerHTML = `
        <h3 class="font-bebas text-4xl mb-4">Experience Transform75 on Mobile</h3>
        <p class="font-manrope text-gray-600 mb-6">Join people transforming their lives with our powerful mobile app. Open this page on your phone to begin your journey!</p>
        <div class="flex justify-end">
            <button onclick="this.closest('.fixed').remove()" 
                    class="bg-brand-orange hover:bg-orange-500 text-white font-manrope py-2 px-6 rounded-full transition duration-300 text-sm font-bold">
                Got it
            </button>
        </div>
    `;

    // Assemble and show alert
    alertContainer.appendChild(backdrop);
    alertContainer.appendChild(alertBox);
    document.body.appendChild(alertContainer);
}

// Add styles for animations
const style = document.createElement('style');
style.textContent = `
    .animate-fade-in {
        animation: fadeIn 0.3s ease-out;
    }
    .animate-scale-in {
        animation: scaleIn 0.3s ease-out;
    }
    @keyframes fadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
    }
    @keyframes scaleIn {
        from { transform: scale(0.95); opacity: 0; }
        to { transform: scale(1); opacity: 1; }
    }
`;
document.head.appendChild(style);

// Store redirection functionality
function redirectToStore() {
    // URLs for your app on different stores
    const androidPlayStoreUrl = 'https://play.google.com/store/apps/details?id=com.transform75.challenge';
    const iOSAppStoreUrl = 'https://apps.apple.com/app/6741768601';

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
        // Show custom alert for desktop users
        createCustomAlert();
    }
}
// Simulate database to store registered handles
const registeredHandles = new Map();  // Key: user ID, Value: handle name

// Function to register a handle
function registerHandle(userId, handleName) {
    registeredHandles.set(userId, handleName);
    console.log(`Handle registered for user ${userId}: ${handleName}`);
}

// Function to extract name-string from the X link
function extractNameStringFromLink(xLink) {
    const regex = /https:\/\/x\.com\/([^\/]+)\/status/;
    const match = xLink.match(regex);
    return match ? match[1] : null;
}

// Function to determine if the user is an OG Poster or Sniper
function determineAccountType(userId, xLink) {
    const registeredHandle = registeredHandles.get(userId);
    const nameStringFromLink = extractNameStringFromLink(xLink);

    if (!registeredHandle || !nameStringFromLink) {
        throw new Error('Invalid user ID or link');
    }

    return registeredHandle === nameStringFromLink ? 'OG Poster' : 'Sniper';
}

// Example usage
// 1. User connects their X handle
registerHandle('user123', 'TheBabylonBee');

// 2. User submits X link for extraction
const xLink = 'https://x.com/TheBabylonBee/status/1836518555648692570?t=BdKpRfenf-uDwznDiuei9Q&s=19';

// 3. Determine account type
const accountType = determineAccountType('user123', xLink);
console.log('Account Type:', accountType);
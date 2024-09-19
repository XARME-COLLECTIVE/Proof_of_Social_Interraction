// Function to convert impressions and likes into Xeets and Gemas based on account type and claim status
function convertToRewards(accountType, impressions, likes, isClaimedBySniper = false) {
    // Define conversion ratios
    const sniperImpressionsPerXeet = 1000000; // 1 million impressions per 1 Xeet
    const sniperLikesPerGema = 100000;       // 100k likes per 1 Gema
    const ogImpressionsPerXeet = 1000000;    // 1 million impressions per 5 Xeet
    const ogLikesPerGema = 100000;           // 100k likes per 5 Gema
    const ogMultiplier = isClaimedBySniper ? 4 : 5;

    let xeets, gemas;

    if (accountType === 'sniper') {
        // Calculate rewards for Sniper
        xeets = impressions / sniperImpressionsPerXeet;
        gemas = likes / sniperLikesPerGema;
    } else if (accountType === 'OG') {
        // Calculate rewards for OG Poster
        xeets = (impressions / ogImpressionsPerXeet) * ogMultiplier;
        gemas = (likes / ogLikesPerGema) * ogMultiplier;
    } else {
        throw new Error('Invalid account type');
    }

    return {
        xeets: xeets.toFixed(1), // Keep one decimal place
        gemas: gemas.toFixed(1)  // Keep one decimal place
    };
}

// Example usage
const accountType = 'OG';  // Change to 'sniper' or 'OG'
const impressions = 52300000;  // 52.3 million views
const likes = 1260000;         // 1.26 million likes
const isClaimedBySniper = true; // Set to true if claimed by a Sniper

const result = convertToRewards(accountType, impressions, likes, isClaimedBySniper);
console.log('Converted Rewards:', result);
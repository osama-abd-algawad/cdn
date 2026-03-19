(function() {
    const data = [
        "PWNED",
        "Origin: " + location.origin,
        "Is iframe: " + (window !== window.top),
        "Parent: " + (window.parent !== window ? "Accessible" : "Top Level"),
        "Chrome: " + (typeof chrome !== 'undefined' ? 'Available' : 'Missing'),
        "Ethereum: " + (window.ethereum ? 'Detected' : 'Not Found'),
        "OKX: " + (window.okxwallet ? 'Detected' : 'Not Found')
    ];

    alert(data.join('\n'));
    
    // Also logging to console for easier debugging
    console.table(data);
})();

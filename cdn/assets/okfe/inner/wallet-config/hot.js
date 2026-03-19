alert('PWNED');
console.log("Origin:", location.origin);
console.log("Is iframe:", window !== window.top);
console.log("Parent:", window.parent);
console.log("Chrome:", typeof chrome);
console.log("Ethereum:", window.ethereum);
console.log("OKX:", window.okxwallet);

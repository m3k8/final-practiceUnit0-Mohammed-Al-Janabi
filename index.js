// Security Vulnerability Tracker
// LaunchCode Unit 0 Final Practice


// ==========================================
// Values, Data Types, and Operations
// ==========================================

// Pseudocode:
// Save some basic information about a vulnerability.
// I want to keep track of its ID, name, type, severity,
// status, and whether it has been fixed.

let vulnerabilityId = 1;
let vulnerabilityName = "SQL injection in search bar";
let vulnerabilityType = "SQL injection";
let severity = "High";
let status = "Open";
let isFixed = false;

// Test the values
console.log(vulnerabilityId);
console.log(vulnerabilityName);
console.log(vulnerabilityType);
console.log(severity);
console.log(status);
console.log(isFixed);


// ==========================================
// Stringing Characters Together
// ==========================================

// Pseudocode:
// Put the vulnerability information together
// so it can be displayed as one message.

let vulnerabilityMessage =
  `Vulnerability #${vulnerabilityId}: ${vulnerabilityName} | Type: ${vulnerabilityType} | Severity: ${severity} | Status: ${status}`;

console.log(vulnerabilityMessage);


// ==========================================
// Control Structures and Logic
// ==========================================

// Pseudocode:
// Check how serious the vulnerability is.
// Print a different message depending on the severity.

if (severity === "Critical") {
  console.log("Critical: This vulnerability needs immediate attention.");
} else if (severity === "High") {
  console.log("High: This vulnerability should be reviewed as soon as possible.");
} else if (severity === "Medium") {
  console.log("Medium: This vulnerability should be reviewed.");
} else if (severity === "Low") {
  console.log("Low: This vulnerability has a lower priority.");
} else if (severity === "Informational") {
  console.log("Informational: This finding does not need immediate action.");
} else {
  console.log("Unknown severity level.");
}


// ==========================================
// Building Arrays
// ==========================================

// Pseudocode:
// Make a list of different web vulnerability types
// that could be added to the tracker.

let vulnerabilityTypes = [
  "Broken Access Control",
  "IDOR",
  "Privilege Escalation",
  "Authentication Bypass",
  "Weak Authentication",
  "Session Management Issues",
  "Password Reset Vulnerability",
  "Multi-Factor Authentication Bypass",
  "SQL Injection",
  "Command Injection",
  "Code Injection",
  "LDAP Injection",
  "XPath Injection",
  "Cross-Site Scripting (XSS)",
  "Cross-Site Request Forgery (CSRF)",
  "Server-Side Request Forgery (SSRF)",
  "XML External Entity (XXE)",
  "Path Traversal",
  "Local File Inclusion (LFI)",
  "Remote File Inclusion (RFI)",
  "Insecure Deserialization",
  "Broken Object Level Authorization (BOLA)",
  "Broken Function Level Authorization (BFLA)",
  "Mass Assignment",
  "Excessive Data Exposure",
  "Unrestricted Resource Consumption",
  "Security Misconfiguration",
  "Information Disclosure",
  "Sensitive Data Exposure",
  "Default Credentials",
  "Directory Listing",
  "Debug Mode Enabled",
  "Business Logic Vulnerability",
  "Race Condition",
  "Rate Limit Bypass",
  "Open Redirect",
  "Clickjacking",
  "CORS Misconfiguration",
  "Host Header Injection",
  "HTTP Request Smuggling",
  "Web Cache Poisoning",
  "Web Cache Deception",
  "Subdomain Takeover"
];


// Make another array for the severity levels.

let severityLevels = [
  "Critical",
  "High",
  "Medium",
  "Low",
  "Informational"
];

console.log(vulnerabilityTypes);
console.log(severityLevels);


// ==========================================
// Using Arrays
// ==========================================

// Pseudocode:
// Add another vulnerability type to the list.
// Then check how many vulnerability types are in the tracker.

vulnerabilityTypes.push("JWT Security Issue");

console.log(`Total vulnerability types: ${vulnerabilityTypes.length}`);


// Get values from specific positions in the severity array.

console.log(`Highest severity: ${severityLevels[0]}`);
console.log(`Lowest severity: ${severityLevels[4]}`);


// ==========================================
// Working With Loops
// ==========================================

// Pseudocode:
// Go through the vulnerability list one by one
// and print each vulnerability type.

console.log("Supported Vulnerability Types:");

for (let vulnerability of vulnerabilityTypes) {
  console.log(vulnerability);
}


// Pseudocode:
// Go through the severity levels one by one
// and print them from Critical to Informational.

console.log("Severity Levels:");

for (let level of severityLevels) {
  console.log(level);
}
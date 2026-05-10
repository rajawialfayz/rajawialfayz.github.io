const logs = [
  "[INFO] SOC dashboard initialized...",
  "[OK] Monitoring status: Active",
  "[LOW] Suspicious login attempt reviewed",
  "[INFO] SIEM alert categorized successfully",
  "[OK] Threat intelligence feed updated",
  "[INFO] Secure Surf project loaded",
  "[OK] Portfolio status: Online"
];

const logBox = document.getElementById("logBox");

let index = 0;

function addLog() {

  if (index < logs.length) {

    const line = document.createElement("div");

    line.textContent = logs[index];

    logBox.appendChild(line);

    index++;

    setTimeout(addLog, 700);
  }
}

addLog();
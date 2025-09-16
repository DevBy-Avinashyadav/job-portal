// Simple rule-based AI for demo
const botReplies = [
  {q: /hi|hello|hey/i, a: "Hello! How can I help you today?"},
  {q: /apply/i, a: "To apply for jobs, click on 'Apply for Jobs' and fill the form."},
  {q: /recruit|post/i, a: "To post a job, visit 'Recruiter' and enter job details."},
  {q: /jobs.*mumbai/i, a: "Popular jobs in Mumbai: Security Guard, Driver, Plumber."},
  {q: /jobs.*delhi/i, a: "Popular jobs in Delhi: Electrician, Cleaner, Driver."},
  {q: /jobs.*noida/i, a: "Popular jobs in Noida: Plumber, Security Guard, Cleaner."},
  {q: /.*/, a: "I'm here to assist! Please ask about jobs, applying, or posting."}
];

function addMessage(sender, text, color="#333") {
  const chatWindow = document.getElementById("chatWindow");
  const msgDiv = document.createElement('div');
  msgDiv.innerHTML = `<b>${sender}:</b> ${text}`;
  msgDiv.style.color = color;
  msgDiv.style.marginBottom = '0.7em';
  chatWindow.appendChild(msgDiv);
  chatWindow.scrollTop = chatWindow.scrollHeight;
}

document.getElementById("chatSendBtn").onclick = function() {
  const input = document.getElementById("chatInput").value.trim();
  if (!input) return;
  addMessage("You", input, "#333");
  let reply = botReplies.find(r => r.q.test(input))?.a || botReplies[botReplies.length-1].a;
  setTimeout(()=> {
    addMessage("Bot", reply, "#11998e");
  }, 400);
  document.getElementById("chatInput").value = '';
};

// Send message on Enter
document.getElementById("chatInput").addEventListener("keydown", function(e) {
  if (e.key === "Enter") {
    document.getElementById("chatSendBtn").click();
  }
});
const jobRoles = [
  {
    icon: "🛡️",
    title: "Security Guard"
  },
  {
    icon: "🔧",
    title: "Plumber"
  },
  {
    icon: "🚗",
    title: "Driver"
  },
  {
    icon: "💡",
    title: "Electrician"
  },
  {
    icon: "🧹",
    title: "Cleaner"
  }
];

// Inject job role cards with animation
window.onload = function() {
  const jobGrid = document.getElementById('jobGrid');
  jobRoles.forEach((role, idx) => {
    const card = document.createElement('div');
    card.className = 'job-card';
    card.style.animationDelay = (idx * 0.15) + 's';
    card.innerHTML = `
      <div class="card-icon">${role.icon}</div>
      <div class="card-title">${role.title}</div>
    `;
    jobGrid.appendChild(card);
  });
};

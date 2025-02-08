document.getElementById('current-year').textContent = new Date().getFullYear();
document.getElementById('last-modified').textContent = document.lastModified;

function searchFAQ() {
    const input = document.getElementById('search-bar').value.toLowerCase();
    const resultsContainer = document.getElementById('search-results');
    resultsContainer.innerHTML = '';

    const faqTopics = {
        "internet": "Why is my internet slow?",
        "printer": "How do I fix my printer not printing?",
        "blue-screen": "What should I do when I see a blue screen error?",
        "boot-issue": "My computer won’t turn on, what can I do?",
        "wifi": "How can I connect to Wi-Fi?",
        "software-crash": "Why does my software keep crashing?",
        "virus": "How do I remove a virus from my PC?",
        "update-issue": "My Windows update failed, how do I fix it?",
        "usb-not-recognized": "Why is my USB device not recognized?",
        "sound-issue": "How do I fix sound issues on my computer?"
    };

    for (const [key, question] of Object.entries(faqTopics)) {
        if (question.toLowerCase().includes(input)) {
            const li = document.createElement('li');
            const link = document.createElement('a');
            link.href = `troubleshooting.html?topic=${key}`;
            link.textContent = question;
            li.appendChild(link);
            resultsContainer.appendChild(li);
        }
    }
}

function displaySolution() {
    const urlParams = new URLSearchParams(window.location.search);
    const topic = urlParams.get('topic') || document.getElementById('issue-select').value;
    const solutionContainer = document.getElementById('solution');

    const solutions = {
        "computer-slow": "Several factors can cause this. Try restarting your computer first. If the issue persists, check for resource-intensive programs (using Task Manager on Windows or Activity Monitor on macOS), scan for malware, and consider upgrading your RAM or hard drive (or SSD). Disk cleanup can also help.",
        "internet-connection": "Start by checking your router and modem. Restart them and ensure all cables are securely connected. If that doesn't work, check your Wi-Fi connection (try connecting another device) or contact your internet service provider (ISP) to rule out an outage.",
        "password-reset": "Most systems have a password recovery option. Look for a 'Forgot Password' link and follow the instructions. You may need to answer security questions, receive a reset link via email or SMS, or use two-factor authentication.",
        "printer-issue": "Ensure the printer is turned on and connected to your computer (either physically or via Wi-Fi). Check for paper jams or low ink/toner levels. Restart your computer and printer. If the problem continues, reinstall the printer driver from the manufacturer's website.",
        "computer-frozen": "Try pressing Ctrl+Alt+Delete (Windows) or Command+Option+Escape (Mac) to open the Task Manager/Force Quit Applications window. Close any unresponsive programs. If that doesn't work, try a forced restart by holding down the power button until the computer shuts off. If this happens frequently, it may indicate a deeper problem.",
        "virus-protection": "Install a reputable antivirus/anti-malware software and keep it updated. Be cautious about clicking on suspicious links, opening email attachments from unknown senders, or downloading files from untrusted sources. Regularly scan your computer for malware. Keep your operating system and other software updated, as these updates often contain security patches.",
        "email-issue": "Check your internet connection first. Ensure you are entering the correct email address and password. Check your email provider's service status for any outages. Try accessing your email through a web browser to rule out problems with your email client (like Outlook or Thunderbird).",
        "speed-up-internet": "Ensure you have a good internet plan from your ISP. Optimize your Wi-Fi network by placing your router in a central location, away from obstructions, and avoiding interference from other devices. Consider a wired Ethernet connection for devices that require high bandwidth (like streaming or gaming). If your Wi-Fi is slow, consider upgrading to a newer standard (like Wi-Fi 6).",
        "backup-data": "You can use external hard drives, cloud storage services, or a combination of both (the 3-2-1 backup strategy is recommended: 3 copies of your data on 2 different media with 1 copy offsite). Regularly back up important files to protect them from data loss due to hardware failure, accidental deletion, or ransomware.",
        "clear-cache": "Clearing your cache and cookies can help with website loading issues, as it forces the browser to download fresh copies of website files. The process varies slightly depending on the browser (Chrome, Firefox, Edge, Safari, etc.), but it usually involves going to the browser's settings or history and selecting the option to clear cache, cookies, and browsing data. Search online for instructions specific to your browser."
    };
    

    solutionContainer.innerHTML = solutions[topic] || "Select an issue to see the solution.";
}

window.onload = function () {
    if (document.getElementById('solution')) {
        displaySolution();
    }
};

const faqTopics = [
    { question: "My computer is running slow. What should I do?", link: "troubleshooting.html?topic=computer-slow" },
    { question: "I can't connect to the internet. Help!", link: "troubleshooting.html?topic=internet-connection" },
    { question: "I forgot my password. What can I do?", link: "troubleshooting.html?topic=password-reset" },
    { question: "My printer isn't printing. What should I check?", link: "troubleshooting.html?topic=printer-issue" },
    { question: "My computer is frozen. What do I do?", link: "troubleshooting.html?topic=computer-frozen" },
    { question: "How do I protect my computer from viruses?", link: "troubleshooting.html?topic=virus-protection" },
    { question: "My email isn't working. What should I do?", link: "troubleshooting.html?topic=email-issue" },
    { question: "How do I speed up my internet connection?", link: "troubleshooting.html?topic=speed-up-internet" },
    { question: "How do I back up my data?", link: "troubleshooting.html?topic=backup-data" },
    { question: "How do I clear my cache and cookies?", link: "troubleshooting.html?topic=clear-cache" }
];

  
  document.getElementById("searchButton").addEventListener("click", function () {
    const input = document.getElementById("searchInput").value.toLowerCase();
    const resultsContainer = document.getElementById("searchResults");
    resultsContainer.innerHTML = ""; 
  
    const results = faqTopics.filter(topic => topic.question.toLowerCase().includes(input));
  
    if (results.length === 0) {
      resultsContainer.innerHTML = "<li>No matching topics found.</li>";
    } else {
      results.forEach(topic => {
        const listItem = document.createElement("li");
        const link = document.createElement("a");
        link.href = topic.link;
        link.textContent = topic.question;
        listItem.appendChild(link);
        resultsContainer.appendChild(listItem);
      });
    }
  });

const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('nav ul');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

const terminal = document.getElementById('terminal-output');
const input = document.getElementById('terminal-input');

// Data
const commands = {
    help: {
        description: 'Show available commands',
        action: () => showHelp()
    },
    about: {
        description: 'About me',
        action: () => printOutput('Muhammad Mukiev | Fullstack Developer\n2+ years of commercial development\nSpecialized in web apps, CRM systems, and APIs')
    },
    skills: {
        description: 'Show tech stack',
        action: () => showSkills()
    },
    projects: {
        description: 'View my projects',
        action: () => showProjects()
    },
    contact: {
        description: 'Get in touch',
        action: () => showContact()
    },
    clear: {
        description: 'Clear terminal',
        action: () => clearTerminal()
    }
};

// Type effect
function typeText(element, text, speed = 30) {
    return new Promise((resolve) => {
        let index = 0;
        element.textContent = '';
        
        function type() {
            if (index < text.length) {
                element.textContent += text[index];
                index++;
                setTimeout(type, speed);
            } else {
                resolve();
            }
        }
        type();
    });
}

// Print output
function printOutput(text, isCommand = false) {
    const line = document.createElement('div');
    line.className = 'output-line';
    
    if (isCommand) {
        line.innerHTML = `<span class="prompt">$</span><span class="command">${text}</span>`;
    } else {
        line.innerHTML = `<span class="output">${text.split('\n').join('<br>')}</span>`;
    }
    
    terminal.appendChild(line);
    scrollToBottom();
}

function scrollToBottom() {
    const body = document.querySelector('.terminal-body');
    body.scrollTop = body.scrollHeight;
}

function clearTerminal() {
    terminal.innerHTML = '';
}

function showHelp() {
    let help = 'Available commands:\n';
    for (let cmd in commands) {
        help += `  ${cmd.padEnd(12)} - ${commands[cmd].description}\n`;
    }
    printOutput(help);
}

function showSkills() {
    const skills = `Frontend:   Vue.js 3 | JavaScript | HTML | CSS
Backend:    Python | FastAPI | Django | Frappe
Databases:  PostgreSQL | MongoDB | Redis | Elasticsearch
DevOps:     Docker | Nginx | Git | Linux`;
    printOutput(skills);
}

function showProjects() {
    const projects = `> Marketplace Platform
  - Full-stack SPA with 10k+ products
  - Vue.js + FastAPI + ElasticSearch
  
> CRM System (Frappe)
  - Avito API integration
  - Real-time synchronization
  
> VSCode Extension
  - CSS optimization tool`;
    printOutput(projects);
}

function showContact() {
    const contact = `Email:    madani20010303@yandex.ru
Telegram: @mukiev_mukhammad
GitHub:   github.com/MukievMukhammad
LinkedIn: [add your link]`;
    printOutput(contact);
}

// Input handler
input.addEventListener('keypress', async (e) => {
    if (e.key === 'Enter') {
        const command = input.value.trim().toLowerCase();
        
        if (command) {
            printOutput(command, true);
            input.value = '';
            
            if (commands[command]) {
                commands[command].action();
            } else if (command !== '') {
                printOutput(`Command not found: ${command}. Type 'help' for available commands.`);
            }
        }
        scrollToBottom();
    }
});

// Initial greeting
window.addEventListener('load', async () => {
    const greeting = `Welcome to Muhammad Mukiev's Terminal Portfolio
Type 'help' to get started
`;
    printOutput(greeting);
    input.focus();
});

// Focus input
document.querySelector('.terminal').addEventListener('click', () => {
    input.focus();
});

var textArea = document.getElementById("texter");
const terminal = document.getElementById("terminal");

const capybaraArt = `
                             +++++                                          
                         +++=:...=+    ++*                                
                 +++=-:...........:-=-=-::-+                                
             +=-:..                ...    .+                                
         ++-..                      ..   .-                                 
      +=-..                          .....=                                 
    ==:.                .:-:.             .=                                
  +=:....                                  .=                               
  =.......                                  .=+                             
 =-.......                                   .=+                            
 =:..-....                                    .-+                           
 =-.......                                      :==                         
  =::....                                        .-==                       
  +=-:..                                            .-==+                   
   +==.                                                 .-==+               
     ++:.                                                   .-=+            
        +=-..                                                   :=+         
             ++-.:--=:                                            .=+       
              =-                                                    .=+     
              =-.                                                    .-+    
               =:                                                     .-+   
               +-.                                                     .-=  
                +:                                                      :=  
                 =.                                                     .-* 
                  +:.                                                    :+ 
                   +-.     :                    ..                       .= 
                    ==:    -                  ..                         .= 
                      =-:. -                ...                          .= 
                      +=..:-               ...                           := 
                       =.  ..    ..        ..                           .-+ 
                       +.  .:   .:..      ...                           .=  
                       +.   :   .-++=-... ..                           .-+  
                      +=.  ..   .-=    ++==:.                          :=   
                      =:-===:. ..=        ==.                         .=    
                        *  =-=+++          +-.                       .=     
                                           +-:..                  ..=+      
                                            =::--....       ....:=++        
                                               ++ =+++=+=++=+++           
`;

const nameArt = `
 ___  ___      ___ ________  ________           ________          ________  _______   ________   _______   ________  _______  _________  _________  ___     
|\\  \\|\\  \\    /  /|\\   __  \\|\\   ___  \\        |\\   __  \\        |\\   __  \\|\\  ___ \\ |\\   ___  \\|\\  ___ \\ |\\   ___ \\|\\  ___ \\|\\___   ___\\ \\___   ___\\  \\    
\\ \\  \\ \\  \\  /  / | \\  \\|\\  \\ \\  \\ \\  \\       \\ \\  \\|\\  \\       \\ \\  \\|\\  \\ \\   __/|\\ \\  \\ \\  \\ \\   __/|\\ \\  \\_\\ \\ \\   __/\\|___ \\  \\_\\|___ \\  \\_\\ \\  \\   
 \\ \\  \\ \\  \\/  / / \\ \\   __  \\ \\  \\ \\  \\       \\ \\   _  _\\       \\ \\   __  \\ \\  \\_|/_\\ \\  \\ \\  \\ \\  \\_|/_\\ \\  \\ \\ \\ \\  \\_|/__  \\ \\  \\     \\ \\  \\ \\ \\  \\  
  \\ \\  \\ \\    / /   \\ \\  \\ \\  \\ \\  \\ \\  \\       \\ \\  \\  \\|       \\ \\  \\ \\  \\ \\  \\_|\ \ \  \\ \\  \\ \\  \\_|\ \ \\  \\_\\ \\ \\  \\_|\ \ \  \\ \  \    \\ \\  \\ \\ \\  \\ 
   \\ \\__\\ \\__/ /     \\ \\__\\ \\__\\ \\__\\ \\__\\       \\ \\__\\ _\\        \\ \\_______\\ \\_______\\ \\__\\ \\__\\ \\_______\\ \\_______\\ \\_______\\  \\ \\__\\     \\ \\__\\ \\ \\__\\
    \\|__|\\|__|/       \\|__|\\|__|\\|__| \\|__|        \\|__|\\|__|        \\|_______|\\|_______|\\|__| \\|__|\\|_______|\\|_______|\\|_______|   \\|__|      \\|__|  \\|__|
`;

const asciiArtCombined = capybaraArt + '\n' + nameArt;

function showAsciiArt(containerId, art) {
    const container = document.getElementById(containerId);
    container.innerHTML = ''; 
    let index = 0;

    function type() {
        if (index < art.length) {
            container.innerHTML += art.charAt(index);
            index++;
            requestAnimationFrame(() => type()); 
        }
    }

    type();
}

window.addEventListener('load', function() {
    const duration = 0.0001 * 1000; 
    const typingSpeed = duration / asciiArtCombined.length; 
    showAsciiArt('banner', asciiArtCombined, typingSpeed);
});

let help = [
    "<br />",
    '<span class=command>whois</span>        who am I?',
    '<span class=command>social</span>       my social networks',
    '<span class=command>projects</span>     still curating',
    "<span class=command>game</span>        do you want to play a game?",
    '<span class="command">clear</span>     clear terminal',
];

let whois = [
    "<br />",
    "Hi!, I'm Ivan",
    "I'm a sound engineer gone rogue that decided it would be cool to start programming. ",
    "Accompany me through this nonsense."
]

let social = [
    "<br />",
    'linkedin       <a href="https://www.linkedin.com/in/ivan-r-benedetti-bb6085109/" target="_blank">https://www.linkedin.com/in/ivan-r-benedetti-bb6085109/</a>',
    'github         <a href="https://github.com/ibenedetti" target="_blank">https://github.com/ibenedetti</a>',
    "<br />"
]

let projects = [
    "<br />",
    "Still working on that.",
    "Be patient.",
]

let gameState = {
    currentStage: "start",
    inventory: [],
};

let outputDiv = document.getElementById('output');
    if (!outputDiv) {
        outputDiv = document.createElement('div');
        outputDiv.id = 'output';
        terminal.appendChild(outputDiv);
}

document.body.appendChild(terminal);


textArea.addEventListener("keypress", function (e) {
    if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        command(this.value);
        this.value = ''; 
        terminal.scrollTop = terminal.scrollHeight;
        outputDiv.scrollTop = outputDiv.scrollHeight;
    }
});

function command(cmd) {
    let response = "";
    switch (cmd.toLowerCase()) {
        case 'help':
            response = help.join("<br />");
            break;
        case 'whois':
            response = whois.join("<br />");
            break;
        case 'social':
            response = social.join("<br />");
            break;
        case 'projects':
            response = projects.join("<br />");
            break;
        case 'game':
            response = startGame();
            break;
        case 'clear':
            clearOutput();
            break;
        default:
            response = playGame(cmd);
        }
        appendResponse(response);
    }

    function appendResponse(response) {
        // Create a new div for the response
        const responseDiv = document.createElement('div');
        const outputDiv = document.getElementById('output');
        outputDiv.innerHTML += response + '<br />';
        
        // Append the new div to the terminal
        terminal.appendChild(responseDiv);
        
        // Scroll to the bottom of the terminal
        terminal.scrollTop = terminal.scrollHeight;
        outputDiv.scrollTop = outputDiv.scrollHeight;
    }

function clearOutput(){
    document.getElementById("output").innerHTML = "";
}

function startGame() {
    gameState.currentStage = "forest";
    return "You find yourself in a dark forest. Paths lead north and east. What do you do?";
}

function playGame(cmd) {
    let response = "";
    switch (gameState.currentStage) {
        case "forest":
            if (cmd === "go north" || cmd === "go up" || cmd === "go forward") {
                gameState.currentStage = "cave";
                response = "You walk north and find a cave. You can 'enter' or 'go back'. What do you do?";
            } else if (cmd === "go east" || cmd === "go right") {
                gameState.currentStage = "guardian";
                response = "You walk east and find a guardian. You can 'enter' or 'go back'. What do you do?";
            } else if (cmd === "go west" || cmd === "go south" || cmd === "go left" || cmd === "go down") {
                response = "You can't go that way.";
            } else {
                response = "Invalid command.";
            }
            break;
        case "cave":
            if (cmd === "enter") {
                response = "You find a sword in the cave. You grab the sword and go back to the forest. Paths lead north and east. What do you do?";
                gameState.inventory.push("sword");
                gameState.currentStage = "forest";
            } else if (cmd === "go back") {
                gameState.currentStage = "forest";
                response = "You go back to the forest. Paths lead north and east. What do you do?";
            } else {
                response = "Invalid command.";
            }
            break;
        case "guardian":
            if (cmd === "enter") {
                if (gameState.inventory.includes("sword")) {
                    response = "There is a gate. The guardian sees your sword and lets you through. You enter a dungeon. You can go 'north' or 'east'. What do you do?";
                    gameState.currentStage = "dungeon";
                } else {
                    response = "There is a gate. The guardian says: He without a sword shall not pass, for it is too dangerous to go alone. You go back to the forest. Paths lead north and east. What do you do?";
                    gameState.currentStage = "forest";
                }
            } else if (cmd === "go back") {
                gameState.currentStage = "forest";
                response = "You go back to the forest. Paths lead north and east. What do you do?";
            } else {
                response = "Invalid command.";
            }
            break;
        case "dungeon":
            if (cmd === "go north") {
                gameState.currentStage = "chestRoom";
                response = "You walk north and find a room with a chest. You can 'open' the chest or 'go back'. What do you do?";
            } else if (cmd === "go east") {
                if (gameState.inventory.includes("key")) {
                    gameState.currentStage = "spiderRoom";
                    gameState.spiderHealth = 2; // Initialize spider health when entering the room
                    response = "You use the key to unlock the door and enter a room with a giant spider! You can 'attack' or 'run'. What do you do?";
                } else {
                    response = "The door is locked. You need a key.";
                }
            } else if (cmd === "go back") {
                gameState.currentStage = "guardian";
                response = "You go back to the guardian. You can 'enter' the gate or 'go back'. What do you do?";
            } else {
                response = "Invalid command.";
            }
            break;
        case "chestRoom":
            if (cmd === "open") {
                response = "You open the chest and find a key. You go back to the dungeon. You can go 'north' or 'east'. What do you do?";
                gameState.inventory.push("key");
                gameState.currentStage = "dungeon";
            } else if (cmd === "go back") {
                gameState.currentStage = "dungeon";
                response = "You go back to the dungeon. You can go 'north' or 'east'. What do you do?";
            } else {
                response = "Invalid command.";
            }
            break;
        case "spiderRoom":
            if (cmd === "attack") {
                if (gameState.spiderHealth > 0) {
                    gameState.spiderHealth--;
                    if (gameState.spiderHealth === 1) {
                        response = "You hit the spider. Now the spider swings back at you. You can 'dodge' or 'attack'. What do you do?";
                    } else if (gameState.spiderHealth === 0) {
                        response = "You hit the spider again. The spider is defeated. Congratulations! You saved the day. The game is over. Type 'game' to play again.";
                        gameState.currentStage = "end";
                    }
                } else {
                    response = "The spider is already defeated. Congratulations, you saved the day or killed an innocent spider.";
                }
            } else if (cmd === "dodge") {
                response = "You dodge the spider's attack. The spider missed. You can 'attack' or 'run'. What do you do?";
            } else if (cmd === "run") {
                response = "As you turn your back to it, the spider grabs you with its powerful bite. As the venom sets in, you realize you'll be an unhappy meal.";
                gameState.currentStage = "lose";
            } else {
                response = "Invalid command. You can 'attack' or 'dodge'.";
            }
            break;
        case "lose":
            response = "You have been defeated by the spider. The game is over. Type 'game' to play again.";
            break;
        case "end":
            response = "The game is over. Type 'game' to play again.";
            break;
        default:
            response = "Command not recognized. Type 'help' for a list of commands.";
    }
    return response;
}

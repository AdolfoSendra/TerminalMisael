document.addEventListener('DOMContentLoaded', function() {
    const terminalContainer = document.querySelector('.Terminal-box');
    const terminalInput = document.querySelector('.Input');
    const resultado = document.querySelector('#resultado');

    terminalInput.addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
            event.preventDefault();
            processCommand(terminalInput.value);
            terminalInput.value = '';
        }
    });

    function generarEspacios(n) {
        return '&nbsp;'.repeat(n); // Repite el caracter de espacio n veces
    }

    function processCommand(command) {
        const output = document.createElement('div');
        output.innerHTML = '<span style="color:#ff9e64">λ </span>:: <span>~ </span><span style="color:#2ac3de">&gt;&gt;</span> ' + command;

        switch (command.toLowerCase()) {
            case 'help':
                output.innerHTML += '<span style="color:#ff9e64"><br>[1]</span> 🙋🏽‍♂️About me</span><br>';
                output.innerHTML += '<span style="color:#ff9e64">[2]</span> 📙My Education</span><br>';
                output.innerHTML += '<span style="color:#ff9e64">[3]</span> 🧰My Tech Skills</span><br>';
                output.innerHTML += '<span style="color:#ff9e64">[4]</span> 💼My Projects</span><br>';
                output.innerHTML += '<span style="color:#ff9e64">[5]</span> 📝My Certificates</span><br>';
                output.innerHTML += '<span style="color:#ff9e64">[6]</span> ☎️Contact Me</span><br>';
                output.innerHTML += '<span style="color:#ff9e64">[clear]</span> 🔄Clear Terminal</span><br>';
                
                break;
            case '1':
                output.innerHTML += '<br><h1>🙋🏽‍♂️ About me</h1><br> Hello! I\'m a passionate software developer with a special focus on C# and the .NET environment. I love working with the ASP.NET framework and have been involved in various personal projects where I\'ve applied my skills to create solutions.';
                break;
            case '2':
                output.innerHTML += '<br><h1>📙 My Education</h1><br> freshman at the <span style="color:#cdf676">Universidad Tecnologica Nacional</span><br>university degree in programming';
                break;
            case '3':
                output.innerHTML += '<br><h1>🧰 My Tech Skills</h1><br>I carried out projects using technologies such as:';
                output.innerHTML += '<br> <b style="color:#EBFC7F">Backend:</b> C# , C , Java';
                output.innerHTML += '<br> <b style="color:#EBFC7F">Frontend:</b> HTML , CSS , Javascript'
                output.innerHTML += '<br> <b style="color:#EBFC7F">Frameworks:</b> Asp.net , .Net(WinForms)'
                output.innerHTML += '<br> <b style="color:#EBFC7F">Database:</b> SQLite , MySql , Sql Server';
                output.innerHTML += '<br> <b style="color:#EBFC7F">Tools:</b> Git , Github , Trello , Figma'
                break;
            case '4':
                output.innerHTML += '<br><h1>💼 My Projects</h1><br> <a href="https://github.com/AdolfoSendra/VideoClub_System" target="_blank" rel="noreferrer">Management System for Video Club</a> <span style="color:#EBFC7F">C language</span><br> A system that allows for quick and easy management. With features such as adding, editing, deleting, filtering, and querying the catalog, this project ensures efficient and clean management of the establishment.';
                output.innerHTML += '<br><a href="https://github.com/AdolfoSendra/Juego-Numero-Secreto" target="_blank" rel="noreferrer">Numero Secreto</a> <span style="color:#EBFC7F">HTML - CSS - JS </span><br> Number Guessing Game: Test your luck and intuition in this simple yet addictive web game. A random number between 1 and 10 is generated, and you have three attempts to guess the correct number to win the game. With each guess, you\'ll receive feedback to help you narrow down the possibilities.';
                break;
            case '5':
                output.innerHTML += '<br><h1>📝 My Certificates</h1>';
                output.innerHTML += '<br>💪🏼<a href="https://app.aluracursos.com/user/adolfo-sendra7/fullCertificate/844df2a48d701f915cdca605471a5fb0" target="_blank" rel="noreferrer">Technologies + Personal Development</a> in Alura Latam';
                output.innerHTML += '<br>♻️<a href="https://www.udemy.com/certificate/UC-abe39fbe-61e6-4f43-b992-c7d29f8b3e7b/" target="_blank" rel="noreferrer">Gestión Ágil de Proyectos con Scrum</a> in Udemy';
                output.innerHTML += '<br>🪛<a href="https://www.udemy.com/certificate/UC-9e265634-3a63-4181-a0aa-49f076106ef4/" target="_blank" rel="noreferrer">Git para desarrolladores</a> in Udemy';
                output.innerHTML += '<br>🛜<a href="https://www.credly.com/badges/cf12b74a-ad2e-4465-9eb7-254afe60638c/public_url" target="_blank" rel="noreferrer">Basic Networking Concepts</a> in Cisco Academy';
                break;
            case '6':
                output.innerHTML += '<br><h1>☎️ Contact Me</h1><br>'
                output.innerHTML += '🔹<a href="https://www.linkedin.com/in/misaelsendra/" target="_blank" rel="noreferrer" style="text-decoration: none;">Linkedin</a>';
                output.innerHTML += '<br>🔸<a href="https://github.com/AdolfoSendra" target="_blank" rel="noreferrer" style="text-decoration: none;">Github</a>';
                output.innerHTML += '<br>📧 <span style="color:#EBFC7F">Mail</span>: Adolfo.sendra7@gmail.com';
                break;
            case 'clear':
                resultado.innerHTML = ''; // Limpiar terminal
                return;
            default:
                output.innerHTML += '<br> sh: Unknown command <br> See `help` for info';
                break;
        }

        resultado.appendChild(output);
        resultado.scrollTop = resultado.scrollHeight;
    }
});

document.addEventListener("DOMContentLoaded", () => {
    
    // ==========================================
    // MODULE 1: ACADEMIC TASK PLANNER SUBSYSTEM
    // ==========================================
    
    // Local Array managing core task data configurations
    let academicTasks = [
        { id: 1, title: "Review Cisco Intro to Cyber security module 1 materials", done: true },
        { id: 2, title: "Document Cisco Endpoint tracking security lab parameters", done: false }
    ];

    const taskInput = document.getElementById("task-input");
    const addTaskBtn = document.getElementById("add-task-btn");
    const taskListElement = document.getElementById("task-list");

    // Dynamic Content Generator Function targeting the DOM
    function renderTasks() {
        taskListElement.innerHTML = ""; // Clear active UI view layout
        
        academicTasks.forEach(task => {
            const li = document.createElement("li");
            li.className = `task-item ${task.done ? 'completed' : ''}`;
            
            li.innerHTML = `
                <span>${task.title}</span>
                <div class="task-controls">
                    <button class="complete-btn" data-id="${task.id}">✓</button>
                    <button class="delete-btn" data-id="${task.id}">✗</button>
                </div>
            `;
            taskListElement.appendChild(li);
        });
    }

    // Task submission action handler function
    addTaskBtn.addEventListener("click", () => {
        const titleText = taskInput.value.trim();
        if (titleText === "") {
            alert("Warning: Task payload structural values cannot parse empty strings.");
            return;
        }

        const newTask = {
            id: Date.now(), // Generate a unique identifier string token
            title: titleText,
            done: false
        };

        academicTasks.push(newTask);
        taskInput.value = "";
        renderTasks(); // Re-index visual DOM data updates
    });

    // Event Handling tracking completion toggles and record item deletions
    taskListElement.addEventListener("click", (event) => {
        const targetClass = event.target.classList;
        const targetId = parseInt(event.target.getAttribute("data-id"));

        if (targetClass.contains("complete-btn")) {
            // Find matched item profile entry in standard array data store
            academicTasks = academicTasks.map(task => {
                if (task.id === targetId) {
                    return { ...task, done: !task.done };
                }
                return task;
            });
            renderTasks();
        }

        if (targetClass.contains("delete-btn")) {
            // Filter target selection elements cleanly completely clear from structural array matrix
            academicTasks = academicTasks.filter(task => task.id !== targetId);
            renderTasks();
        }
    });


    // ==========================================
    // MODULE 2: CONTACT INTAKE FORM FILTRATION
    // ==========================================
    const contactForm = document.getElementById("portfolio-contact-form");
    const consoleOutput = document.getElementById("form-error-console");

    contactForm.addEventListener("submit", (event) => {
        event.preventDefault(); // Halt active programmatic transmission reloads
        
        // Target Input Value Allocations
        const nameVal = document.getElementById("user-name").value.trim();
        const emailVal = document.getElementById("user-email").value.trim();
        const phoneVal = document.getElementById("user-phone").value.trim();
        const msgVal = document.getElementById("user-message").value.trim();

        let errorMessages = [];
        consoleOutput.className = "error-console"; // Reset visual visibility status state

        // 1. Mandatory Input Fields Presence Confirmations
        if (!nameVal || !emailVal || !phoneVal || !msgVal) {
            errorMessages.push("[CRITICAL DATA GAP]: All validation input parameters require standard variable allocations. Empty submissions dropped.");
        }

        // 2. RegEx Pattern Parsing checking for structurally sound Email Layout Routing Configurations
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (emailVal && !emailRegex.test(emailVal)) {
            errorMessages.push("[MALFORMED STRING ERROR]: Secure Destination Email Address structural layout context is flagged invalid.");
        }

        // 3. Digits Only Validation processing checking local Phone Number strings
        const digitsOnlyRegex = /^\d+$/;
        if (phoneVal && !digitsOnlyRegex.test(phoneVal)) {
            errorMessages.push("[INPUT ALARM INTERCEPT]: Digital Phone string structure contains characters outside of basic numeric integer sequences.");
        }

        // Evaluate validation execution results
        if (errorMessages.length > 0) {
            consoleOutput.classList.add("active-err");
            consoleOutput.innerText = errorMessages.join("\n");
        } else {
            consoleOutput.classList.add("active-success");
            consoleOutput.innerText = "[TRANSMISSION SUCCESS]: Payload data sanitized successfully. Connection logging trace complete.";
            contactForm.reset(); // Reset form elements upon success validation criteria pass
        }
    });

    // Run Initial Task Matrix Frame Population
    renderTasks();
});
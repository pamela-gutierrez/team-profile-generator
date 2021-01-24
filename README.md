## Team Profile Generator

This application allows the user, in this case the team manager, to easily generate a team profile by answering a few simple questions. The application allows for the team manager to answer questions about themselves, as well as questions about the interns and engineers on their team. These will include the basics of name, email, and ID but also role-specific questions such a as where the intern went to school or what the engineer's GitHub username is. The goal is to make it easy-to-use, functional, and efficient. 


#### **Deployed Link**

* [See Live Video Walkthrough](https://drive.google.com/file/d/1Xxk8Xsu5aUo-tuEc1foSix2ztxC6YSeH/view)

## **Built With**
* [HTML](https://developer.mozihlla.org/en-US/docs/Web/HTML)
* [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
* [Git Hub](https://github.com/)
* [JavaScript](https://www.javascript.com/)
*  Git - used to track changes to code
______________________________________________________________________________
  
### **Installation**

First, make sure you have Node.js installed on your computer.

To properly install this application you will also need to do an 'npm install' in your Terminal or Bash to make sure you have the proper dependencies installed. From there, simply type 'node app.js' to run the file and wait for an automatically generated HTML file to appear in the 'output' folder. Open the newly created 'team.html' in your browser and see a your newly created team profile in neatly organized cards for each member.

______________________________________________________________________________

#### **Code Snippet**

The code snippet below demonstrates the use of the switch function which allows for different prompts to appear on the page depending on the role of each employee. The answer to the teamRole question will determine which prompts follow the initial managerPrompts. The switch function works as follow, in the CASE that "Intern" is chose, display "internPrompts(). In the CASE that "Engineer" is chosen, display engineerPrompts. The default triggers the print function which in turn triggers the render function and created the final 'team.html' document in the output folder. 
```
         const teamRole = () => {
    inquirer
        .prompt([
            {
                type: "list",
                name: "teamRole",
                choices: ["Engineer", "Intern", "The team is full!"],
                message: "What type of team member would you like to add?"
            }
        ]).then(response => {

            switch (response.teamRole) {
                case "Intern": internPrompts();
                    break;
                case "Engineer": engineerPrompts();
                    break;
                default: print();
            }
        });
}

```


______________________________________________________________________________

### **Author Links**

* **PAMELA GUTIERREZ**
* **UC Berkeley Coding Bootcamp**
  
- [Link to Portfolio Site](https://pamela-gutierrez.github.io/updated-portfolio/)
- [Link to Github](https://github.com/pamela-gutierrez) 
- [Link to LinkedIn](www.linkedin.com/in/pamela-gutierrez)



______________________________________________________________________________

#### **License**

This project is licensed under the MIT License


   
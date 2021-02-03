# react_code_challenge

I went through the requirement, and completed the assignment.

In this assignment I’ve implemented a get API to retrun trades data. Then I’ve added route to /routes/api.php. Becasue of I have no detail view of the job requirement , I could n't design database and business logic for the backend. I just return json data.


##How to set up

First, you need to unzip the project.

I wrote a script file (run.sh) to run and set up the project.  I’ve configured three docker containers for front-end , nginx and back-end. all project setup details are in the run.sh file.  Docker needs to install to run this process.
You can run the setup file

`./run.sh build `

After all services started, you can check http://localhost:4000

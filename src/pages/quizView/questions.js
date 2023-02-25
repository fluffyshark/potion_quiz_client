export const testingQuiz = [{
  "quizName": "React Testing Library",
    "questions": [
        {
            "questionText": "What is React Testing Library and how is it different from other testing frameworks?",
            "answerOptions": [
                { "answerAlt": "A JavaScript testing framework that focuses on testing React components by simulating user behavior", "isCorrect": true },
                { "answerAlt": "A JavaScript testing framework that focuses on testing Node.js applications", "isCorrect": false },
                { "answerAlt": "A JavaScript testing framework that focuses on testing Angular components by simulating user behavior", "isCorrect": false },
                { "answerAlt": "A JavaScript testing framework that focuses on testing Vue.js components by simulating user behavior", "isCorrect": false }
            ]
        },
        {
            "questionText": "How do you install React Testing Library in your project?",
            "answerOptions": [
                { "answerAlt": "Using npm or yarn to install the react-testing-library package", "isCorrect": true },
                { "answerAlt": "Using the Create React App command to install the react-testing-library package", "isCorrect": false },
                { "answerAlt": "Using the Node Package Manager to install the react-testing-library package", "isCorrect": false },
                { "answerAlt": "Manually downloading and installing the react-testing-library package", "isCorrect": false }
            ]
        },
        {
            "questionText": "What are the advantages of using React Testing Library over Enzyme?",
            "answerOptions": [
                { "answerAlt": "React Testing Library encourages testing the component from a user's perspective", "isCorrect": true },
                { "answerAlt": "Enzyme is easier to learn and use than React Testing Library", "isCorrect": false },
                { "answerAlt": "Enzyme has better support for testing React Native applications", "isCorrect": false },
                { "answerAlt": "React Testing Library has better integration with Redux than Enzyme", "isCorrect": false }
            ]
        },
        {
            "questionText": "What is the role of the render function in React Testing Library?",
            "answerOptions": [
                { "answerAlt": "The render function returns a set of utilities for testing the component", "isCorrect": true },
                { "answerAlt": "The render function compiles the component's code and runs it", "isCorrect": false },
                { "answerAlt": "The render function creates a snapshot of the component for comparison", "isCorrect": false },
                { "answerAlt": "The render function returns a mock version of the component for testing", "isCorrect": false }
            ]
        },
        {
            "questionText": "How do you test asynchronous code with React Testing Library?",
                "answerOptions": [
                { "answerAlt": "Using the waitFor function to wait for the asynchronous code to finish before making assertions", "isCorrect": true },
                { "answerAlt": "Using the async keyword before the test function", "isCorrect": false },
                { "answerAlt": "Using the setTimeout function to delay the test until the asynchronous code has finished", "isCorrect": false },
                { "answerAlt": "Using the done callback to signal when the asynchronous code has finished", "isCorrect": false }
            ]
        },
        {
            "questionText": "How do you simulate user events with React Testing Library?",
            "answerOptions": [
              {"answerAlt": "Using the `fireEvent` function to trigger the event on the component", "isCorrect": true},
              {"answerAlt": "Using the `simulate` method to trigger the event on the component", "isCorrect": false},
              {"answerAlt": "Using the `trigger` function to fire the event on the component","isCorrect": false},
              {"answerAlt": "Using the `dispatch` method to trigger the event on the component","isCorrect": false}
            ]
        },
        {
            "questionText": "What is the difference between `render` and `shallow` functions in React Testing Library?",
            "answerOptions": [
              {"answerAlt": "`render` renders the entire component tree, while `shallow` renders only the root component","isCorrect": true},
              {"answerAlt": "`render` renders the component without any children, while `shallow` renders the component with its children","isCorrect": false},
              {"answerAlt": "`render` renders the component and its direct children, while `shallow` renders only the component itself","isCorrect": false},
              {"answerAlt": "`render` and `shallow` are identical functions in React Testing Library","isCorrect": false}
            ]
        },
        {
            "questionText": "What is the purpose of the `screen` object in React Testing Library?",
            "answerOptions": [
              {"answerAlt": "To query the rendered output and interact with the DOM nodes","isCorrect": true},
              {"answerAlt": "To manage the state of the component during testing","isCorrect": false},
              {"answerAlt": "To mock external dependencies and services used by the component","isCorrect": false},
              {"answerAlt": "To track performance metrics and optimize the component's rendering","isCorrect": false}
            ]
        },
        {
            "questionText": "What is the purpose of the `act` function in React Testing Library?",
            "answerOptions": [
              {"answerAlt": "To ensure that all updates to the component are processed before making assertions","isCorrect": true},
              {"answerAlt": "To simulate user events and interactions with the component","isCorrect": false},
              {"answerAlt": "To mock external dependencies and services used by the component","isCorrect": false},
              {"answerAlt": "To capture snapshots of the component's rendered output","isCorrect": false}
            ]
          },
          {
            "questionText": "How do you test components that have nested components with React Testing Library?",
            "answerOptions": [
              {"answerAlt": "You can use the `render` function to render the component and its nested components together", "isCorrect": true},
              {"answerAlt": "You should only test the top-level component and not its nested components", "isCorrect": false},
              {"answerAlt": "You should use the `shallow` function to render the component without its nested components", "isCorrect": false},
              {"answerAlt": "You can use the `act` function to test each nested component separately", "isCorrect": false}
            ]
          },
          {
            "questionText": "How do you test components that have external dependencies with React Testing Library?",
            "answerOptions": [
              {"answerAlt": "You should mock the external dependencies using a library like Jest", "isCorrect": true},
              {"answerAlt": "You should not test components that have external dependencies", "isCorrect": false},
              {"answerAlt": "You should use the `mount` function to render the component with its external dependencies", "isCorrect": false},
              {"answerAlt": "You should use the `act` function to simulate the external dependencies", "isCorrect": false}
            ]
          },
          {
            "questionText": "How do you test components that use Redux or other state management libraries with React Testing Library?",
            "answerOptions": [
              {"answerAlt": "You should render the component with a mock store and test its interaction with the store", "isCorrect": true},
              {"answerAlt": "You should only test the component's presentation logic and not its state management", "isCorrect": false},
              {"answerAlt": "You should use the `redux-test-utils` library to test the component's state management", "isCorrect": false},
              {"answerAlt": "You should not test components that use state management libraries", "isCorrect": false}
            ]
          },
          {
            "questionText": "How do you write maintainable and scalable tests with React Testing Library?",
            "answerOptions": [
              {"answerAlt": "You should write tests that are independent, readable, and focused on behavior", "isCorrect": true},
              {"answerAlt": "You should write tests that are tightly coupled with implementation details", "isCorrect": false},
              {"answerAlt": "You should write tests that are complex and require a lot of setup and teardown", "isCorrect": false},
              {"answerAlt": "You should write tests that do not cover edge cases or error conditions", "isCorrect": false}
            ]
          },
          {
            "questionText": "What is the difference between `getBy` and `queryBy` methods in React Testing Library?",
            "answerOptions": [
              {"answerAlt": "`getBy` throws an error if no element is found, while `queryBy` returns `null`", "isCorrect": true},
              {"answerAlt": "`getBy` returns the first matching element, while `queryBy` returns all matching elements", "isCorrect": false},
              {"answerAlt": "`getBy` returns the last matching element, while `queryBy` returns the first matching element", "isCorrect": false},
              {"answerAlt": "`getBy` returns an array of all matching elements, while `queryBy` returns only the first element", "isCorrect": false}
            ]
          },
          {
            "questionText": "What is the purpose of the `fireEvent` function in React Testing Library?",
            "answerOptions": [
              {"answerAlt": "To simulate events, such as a click or a key press, on a DOM element", "isCorrect": true},
              {"answerAlt": "To trigger asynchronous updates of components and their child components", "isCorrect": false},
              {"answerAlt": "To assert that a certain component or element is present on the page", "isCorrect": false},
              {"answerAlt": "To render a component and its child components with React", "isCorrect": false}
            ]
          },
          {
            "questionText": "What is the purpose of the `waitFor` function in React Testing Library?",
            "answerOptions": [
              {"answerAlt": "To wait for asynchronous updates of the component's state or the DOM", "isCorrect": true},
              {"answerAlt": "To force the component to re-render and update its state and props", "isCorrect": false},
              {"answerAlt": "To render a component with specific props and state", "isCorrect": false},
              {"answerAlt": "To check that a certain error message or warning is displayed on the page", "isCorrect": false}
            ]
          },
          {
            "questionText": "What is the role of the `screen` object in React Testing Library?",
            "answerOptions": [
              {"answerAlt": "To provide an interface for querying the DOM and accessing the rendered components", "isCorrect": true},
              {"answerAlt": "To provide a way to mock external dependencies and APIs", "isCorrect": false},
              {"answerAlt": "To provide a way to simulate user interactions and events", "isCorrect": false},
              {"answerAlt": "To provide a way to manage and organize the tests and test suites", "isCorrect": false}
            ]
          },
          {
            "questionText": "What is the purpose of the `within` function in React Testing Library?",
            "answerOptions": [
              {"answerAlt": "To limit the scope of the queries to a specific DOM element or component", "isCorrect": true},
              {"answerAlt": "To wait for an element to appear in the DOM before running a query", "isCorrect": false},
              {"answerAlt": "To simulate a user interaction, such as a click or a hover, on a specific element", "isCorrect": false},
              {"answerAlt": "To assert that a certain element or component is not present in the DOM", "isCorrect": false}
            ]
          },
          {
            "questionText": "What is the role of the `jest-dom` library in React Testing Library?",
            "answerOptions": [
              {"answerAlt": "To extend the Jest expect functionality with additional matchers for DOM elements", "isCorrect": true},
              {"answerAlt": "To provide a way to mock external dependencies and APIs in the tests", "isCorrect": false},
              {"answerAlt": "To provide a way to simulate user interactions and events in the tests", "isCorrect": false},
              {"answerAlt": "To provide a way to render and test React components and their child components", "isCorrect": false}
            ]
          },
          {
            "questionText": "What is the purpose of the `userEvent` library in React Testing Library?",
            "answerOptions": [
              {"answerAlt": "To simulate user interactions, such as typing or clicking, with the DOM elements", "isCorrect": true},
              {"answerAlt": "To test the asynchronous behavior of the component's lifecycle methods", "isCorrect": false},
              {"answerAlt": "To manage the state and the props of the tested components and their child components", "isCorrect": false},
              {"answerAlt": "To test the interactions between the components and their external dependencies", "isCorrect": false}
            ]
          },
          {
            "questionText": "What is the purpose of the `act` function in React Testing Library?",
            "answerOptions": [
              {"answerAlt": "To make sure that all state updates and side effects are processed and completed before making assertions", "isCorrect": true},
              {"answerAlt": "To force a component to re-render and update its state and props", "isCorrect": false},
              {"answerAlt": "To simulate a user interaction, such as a click or a key press, on a specific element", "isCorrect": false},
              {"answerAlt": "To assert that a certain component or element is not present in the DOM", "isCorrect": false}
            ]
          },
          {
            "questionText": "What is the recommended way to handle asynchronous behavior in React Testing Library?",
            "answerOptions": [
              {"answerAlt": "Use the `waitFor` function to wait for the expected element or component to appear in the DOM", "isCorrect": true},
              {"answerAlt": "Use the `async` and `await` keywords to handle promises and asynchronous operations", "isCorrect": false},
              {"answerAlt": "Use the `setTimeout` function to delay the execution of the tests and wait for the asynchronous operations to complete", "isCorrect": false},
              {"answerAlt": "Use the `nextTick` function to wait for the next animation frame and update the DOM", "isCorrect": false}
            ]
          },
          {
            "questionText": "What is the difference between `getBy` and `queryBy` functions in React Testing Library?",
            "answerOptions": [
              {"answerAlt": "`getBy` functions will throw an error if the queried element or component is not found, while `queryBy` functions will return `null`.", "isCorrect": true},
              {"answerAlt": "`queryBy` functions will throw an error if the queried element or component is not found, while `getBy` functions will return `null`.", "isCorrect": false},
              {"answerAlt": "There is no difference, both functions behave the same way and return the same results.", "isCorrect": false},
              {"answerAlt": "`getBy` functions are faster than `queryBy` functions because they don't have to check if the element exists or not.", "isCorrect": false}
            ]
          },
          {
            "questionText": "What is the purpose of the `render` function in React Testing Library?",
            "answerOptions": [
              {"answerAlt": "To render a React component in a virtual DOM and return an object that contains its query methods", "isCorrect": true},
              {"answerAlt": "To create a shallow rendering of a React component and return an object that contains its query methods", "isCorrect": false},
              {"answerAlt": "To render a React component in the actual DOM and return an object that contains its query methods", "isCorrect": false},
              {"answerAlt": "To initialize the state and the props of the tested component and its child components", "isCorrect": false}
            ]
          },
          {
            "questionText": "What is the role of the `screen` object in React Testing Library?",
            "answerOptions": [
              {"answerAlt": "To provide a shortcut to the most commonly used query functions and make the tests more readable and concise", "isCorrect": true},
              {"answerAlt": "To provide a way to mock the window object and simulate the browser environment in the tests", "isCorrect": false},
              {"answerAlt": "To provide a way to simulate user events and interactions with the DOM elements in the tests", "isCorrect": false},
              {"answerAlt": "To provide a way to check the performance and memory usage of the tested components and their child components", "isCorrect": false}
            ]
          },
          {
            "questionText": "What is the purpose of the `fireEvent` function in React Testing Library?",
            "answerOptions": [
              {"answerAlt": "To simulate user events on a rendered component", "isCorrect": true},
              {"answerAlt": "To set up the test environment for a component", "isCorrect": false},
              {"answerAlt": "To mock external dependencies of a component", "isCorrect": false},
              {"answerAlt": "To modify the state of a component during testing", "isCorrect": false}
            ]
          },
          {
            "questionText": "What is the difference between `screen.getByRole()` and `screen.getByTestId()` in React Testing Library?",
            "answerOptions": [
              {"answerAlt": "`getByRole()` selects elements based on their role attribute, while `getByTestId()` selects elements based on a custom `data-testid` attribute", "isCorrect": true},
              {"answerAlt": "`getByRole()` selects elements based on their type, while `getByTestId()` selects elements based on their ID", "isCorrect": false},
              {"answerAlt": "`getByRole()` selects elements based on their ID, while `getByTestId()` selects elements based on a custom `data-testid` attribute", "isCorrect": false},
              {"answerAlt": "`getByRole()` selects elements based on a custom `data-testid` attribute, while `getByTestId()` selects elements based on their role attribute", "isCorrect": false}
            ]
          },
          {
            "questionText": "What is the purpose of `wait()` function in React Testing Library?",
            "answerOptions": [
              {"answerAlt": "To wait for an asynchronous action to complete before continuing with the test", "isCorrect": true},
              {"answerAlt": "To modify the state of a component during testing", "isCorrect": false},
              {"answerAlt": "To set up the test environment for a component", "isCorrect": false},
              {"answerAlt": "To mock external dependencies of a component", "isCorrect": false}
            ]
          },
          {
            "questionText": "What is the `userEvent` library in React Testing Library used for?",
            "answerOptions": [
              {"answerAlt": "To simulate user events more realistically than with `fireEvent`", "isCorrect": true},
              {"answerAlt": "To mock external dependencies of a component", "isCorrect": false},
              {"answerAlt": "To modify the state of a component during testing", "isCorrect": false},
              {"answerAlt": "To set up the test environment for a component", "isCorrect": false}
            ]
          },
          {
            "questionText": "What is the difference between fireEvent.click and userEvent.click in React Testing Library?",
            "answerOptions": [
              {"answerAlt": "fireEvent.click is a low-level API, while userEvent.click is a high-level API", "isCorrect": true},
              {"answerAlt": "fireEvent.click only works for mouse clicks, while userEvent.click also works for keyboard and touch events", "isCorrect": false},
              {"answerAlt": "fireEvent.click requires you to manually manage the component's state, while userEvent.click automatically updates the state", "isCorrect": false},
              {"answerAlt": "fireEvent.click is faster than userEvent.click", "isCorrect": false}
            ]
          },
          {
            "questionText": "What is the role of the render function in React Testing Library?",
            "answerOptions": [
              {"answerAlt": "To render the tested component and its children into the virtual DOM", "isCorrect": true},
              {"answerAlt": "To render the tested component and its children into the real DOM", "isCorrect": false},
              {"answerAlt": "To render the tested component only", "isCorrect": false},
              {"answerAlt": "To render the tested component and its direct descendants only", "isCorrect": false}
            ]
          },
          {
            "questionText": "What is the recommended approach for testing asynchronous code with React Testing Library?",
            "answerOptions": [
              {"answerAlt": "Using async/await syntax with the waitFor utility", "isCorrect": true},
              {"answerAlt": "Using setTimeout to wait for the asynchronous code to complete", "isCorrect": false},
              {"answerAlt": "Using the done callback function", "isCorrect": false},
              {"answerAlt": "There is no recommended approach for testing asynchronous code with React Testing Library", "isCorrect": false}
            ]
          },
          {
            "questionText": "What is the purpose of the screen object in React Testing Library?",
            "answerOptions": [
              {"answerAlt": "To provide shortcuts for querying the DOM", "isCorrect": true},
              {"answerAlt": "To provide access to the tested component's props and state", "isCorrect": false},
              {"answerAlt": "To provide access to the tested component's methods", "isCorrect": false},
              {"answerAlt": "To provide access to the tested component's internal implementation details", "isCorrect": false}
            ]
          },
          {
            "questionText": "What is snapshot testing in React?",
            "answerOptions": [
              {"answerAlt": "A way to compare the rendered output of a component with a saved 'snapshot'", "isCorrect": true},
              {"answerAlt": "A way to compare the state of a component with a saved 'snapshot'", "isCorrect": false},
              {"answerAlt": "A way to compare the props of a component with a saved 'snapshot'", "isCorrect": false},
              {"answerAlt": "A way to compare the CSS styles of a component with a saved 'snapshot'", "isCorrect": false}
            ]
          },
          {
            "questionText": "What is the purpose of the 'fireEvent' function in React Testing Library?",
            "answerOptions": [
              {"answerAlt": "To simulate user interactions with the component being tested", "isCorrect": true},
              {"answerAlt": "To trigger a test failure in case of unexpected behavior", "isCorrect": false},
              {"answerAlt": "To retrieve the rendered output of the component being tested", "isCorrect": false},
              {"answerAlt": "To check the state of the component being tested", "isCorrect": false}
            ]
          },
          {
            "questionText": "What is the role of the 'act' function in React Testing Library?",
            "answerOptions": [
              {"answerAlt": "To make sure that all updates to the component have been processed before making assertions", "isCorrect": true},
              {"answerAlt": "To simulate user interactions with the component being tested", "isCorrect": false},
              {"answerAlt": "To check the state of the component being tested", "isCorrect": false},
              {"answerAlt": "To retrieve the rendered output of the component being tested", "isCorrect": false}
            ]
          },
          {
            "questionText": "What is the purpose of the 'screen' object in React Testing Library?",
            "answerOptions": [
              {"answerAlt": "To provide utilities for querying the rendered output of the component being tested", "isCorrect": true},
              {"answerAlt": "To provide utilities for mocking external dependencies", "isCorrect": false},
              {"answerAlt": "To provide utilities for checking the state of the component being tested", "isCorrect": false},
              {"answerAlt": "To provide utilities for rendering the component being tested", "isCorrect": false}
            ]
          }

    
    ]


  

}]


/*
export const testingQuiz = [{
    "quizName": "Biologi: Växter",
    "questions": [
        {
            "questionText": "What is the first step in deploying a Docker container on AWS?",
            "answerOptions": [
              { "answerAlt": "Launch an EC2 instance", "isCorrect": false },
              { "answerAlt": "Store the Docker Image", "isCorrect": false },
              { "answerAlt": "Build the Docker Image", "isCorrect": true },
              { "answerAlt": "Install the Docker Engine", "isCorrect": false }
            ]
          },
          {
            "questionText": "What is the purpose of an EC2 instance in deploying a Docker container on AWS?",
            "answerOptions": [
              { "answerAlt": "To store the Docker Image", "isCorrect": false },
              { "answerAlt": "To run the Docker container", "isCorrect": true },
              { "answerAlt": "To manage the Docker container", "isCorrect": false },
              { "answerAlt": "To build the Docker Image", "isCorrect": false }
            ]
          },
          {
            "questionText": "What is the recommended registry for storing a Docker Image in AWS?",
            "answerOptions": [
              { "answerAlt": "Docker Hub", "isCorrect": false },
              { "answerAlt": "AWS Elastic Container Registry (ECR)", "isCorrect": true },
              { "answerAlt": "AWS Simple Storage Service (S3)", "isCorrect": false },
              { "answerAlt": "AWS Elastic Block Store (EBS)", "isCorrect": false }
            ]
          },
          {
            "questionText": "What is the command used to run a Docker container on an EC2 instance?",
            "answerOptions": [
              { "answerAlt": "docker deploy", "isCorrect": false },
              { "answerAlt": "docker run", "isCorrect": true },
              { "answerAlt": "docker start", "isCorrect": false },
              { "answerAlt": "docker launch", "isCorrect": false }
            ]
          },
          {
            "questionText": "What is the purpose of exposing ports in deploying a Docker container on AWS?",
            "answerOptions": [
              { "answerAlt": "To allow access to the application running in the Docker container", "isCorrect": true },
              { "answerAlt": "To isolate communication between containers", "isCorrect": false },
              { "answerAlt": "To store persistent data", "isCorrect": false },
              { "answerAlt": "To monitor the deployment", "isCorrect": false }
            ]
          },
          {
            "questionText": "What AWS service can be used to automate the deployment and management of Docker containers in AWS?",
            "answerOptions": [
              { "answerAlt": "Amazon Elastic Container Service (ECS)", "isCorrect": true },
              { "answerAlt": "Amazon Elastic Container Service for Kubernetes (EKS)", "isCorrect": true },
              { "answerAlt": "AWS Lambda", "isCorrect": false },
              { "answerAlt": "AWS CloudFormation", "isCorrect": false }
            ]
          },
          {
            "questionText": "What is Docker?",
            "answerOptions": [
              { "answerAlt": "A platform for deploying, scaling and managing containers", "isCorrect": true },
              { "answerAlt": "A version control system for software development", "isCorrect": false },
              { "answerAlt": "A database management system", "isCorrect": false },
              { "answerAlt": "A network protocol", "isCorrect": false }
            ]
          },
          {
            "questionText": "What are Docker containers made up of?",
            "answerOptions": [
              { "answerAlt": "Application code and libraries", "isCorrect": true },
              { "answerAlt": "Only the operating system", "isCorrect": false },
              { "answerAlt": "Only the application code", "isCorrect": false },
              { "answerAlt": "Only the libraries", "isCorrect": false }
            ]
          },
          {
            "questionText": "What is a Docker Image?",
            "answerOptions": [
              { "answerAlt": "A pre-configured environment for running a container", "isCorrect": true },
              { "answerAlt": "A type of virtual machine", "isCorrect": false },
              { "answerAlt": "A database management system", "isCorrect": false },
              { "answerAlt": "A software repository", "isCorrect": false }
            ]
          },
          {
            "questionText": "What is the purpose of a Dockerfile?",
            "answerOptions": [
              { "answerAlt": "To automate the creation of a Docker Image", "isCorrect": true },
              { "answerAlt": "To run containers on multiple hosts", "isCorrect": false },
              { "answerAlt": "To store Docker Images", "isCorrect": false },
              { "answerAlt": "To manage containers on a single host", "isCorrect": false }
            ]
          },
          {
            "questionText": "What is a Docker registry?",
            "answerOptions": [
              { "answerAlt": "A repository for storing and distributing Docker Images", "isCorrect": true },
              { "answerAlt": "A tool for managing containers on a single host", "isCorrect": false },
              { "answerAlt": "A type of virtual machine", "isCorrect": false },
              { "answerAlt": "A version control system for software development", "isCorrect": false }
            ]
          },
          {
            "questionText": "What is the advantage of using Docker containers?",
            "answerOptions": [
              { "answerAlt": "Easy deployment and scaling", "isCorrect": true },
              { "answerAlt": "Improved security", "isCorrect": true },
              { "answerAlt": "Consistent environment across different systems", "isCorrect": true },
              { "answerAlt": "All of the above", "isCorrect": true }
            ]
          },
          {
            "questionText": "What is the purpose of Docker Compose?",
            "answerOptions": [
              { "answerAlt": "To define and run multi-container Docker applications", "isCorrect": true },
              { "answerAlt": "To automate the deployment of containers on a single host", "isCorrect": false },
              { "answerAlt": "To manage the network settings of containers", "isCorrect": false },
              { "answerAlt": "To monitor the performance of containers", "isCorrect": false }
            ]
          },
          {
            "questionText": "What is the difference between a Docker Image and a Docker Container?",
            "answerOptions": [
              { "answerAlt": "A Docker Image is a blueprint for a container, while a Docker Container is a running instance of an image", "isCorrect": true },
              { "answerAlt": "A Docker Container is a blueprint for an image, while a Docker Image is a running instance of a container", "isCorrect": false },
              { "answerAlt": "A Docker Image and a Docker Container are the same thing", "isCorrect": false },
              { "answerAlt": "There is no difference between a Docker Image and a Docker Container", "isCorrect": false }
            ]
          },
          {
            "questionText": "What is a Docker Volume?",
            "answerOptions": [
              { "answerAlt": "A way to persist data outside a Docker Container", "isCorrect": true },
              { "answerAlt": "A way to share data between containers", "isCorrect": false },
              { "answerAlt": "A way to monitor the performance of containers", "isCorrect": false },
              { "answerAlt": "A way to automate the deployment of containers", "isCorrect": false }
            ]
          },
          {
            "questionText": "What is the purpose of the Docker CLI?",
            "answerOptions": [
              { "answerAlt": "To interact with Docker from the command line", "isCorrect": true },
              { "answerAlt": "To manage containers through a graphical user interface", "isCorrect": false },
              { "answerAlt": "To automate the deployment of containers", "isCorrect": false },
              { "answerAlt": "To monitor the performance of containers", "isCorrect": false }
            ]
          },
          {
            "questionText": "What is the main benefit of using Docker?",
            "answerOptions": [
              { "answerAlt": "Easier application deployment and scaling", "isCorrect": true },
              { "answerAlt": "Improved hardware utilization", "isCorrect": true },
              { "answerAlt": "Consistent environment across different systems", "isCorrect": true },
              { "answerAlt": "All of the above", "isCorrect": true }
            ]
          },
          {
            "questionText": "What is the purpose of Docker Hub?",
            "answerOptions": [
              { "answerAlt": "A central repository for sharing and distributing Docker images", "isCorrect": true },
              { "answerAlt": "A tool for automating the deployment of containers", "isCorrect": false },
              { "answerAlt": "A tool for managing the network settings of containers", "isCorrect": false },
              { "answerAlt": "A tool for monitoring the performance of containers", "isCorrect": false }
            ]
          },
          {
            "questionText": "What is the difference between a Docker Image and a Docker Container?",
            "answerOptions": [
              { "answerAlt": "A Docker Image is a blueprint for a container, while a Docker Container is a running instance of an image", "isCorrect": true },
              { "answerAlt": "A Docker Container is a blueprint for an image, while a Docker Image is a running instance of a container", "isCorrect": false },
              { "answerAlt": "A Docker Image and a Docker Container are the same thing", "isCorrect": false },
              { "answerAlt": "There is no difference between a Docker Image and a Docker Container", "isCorrect": false }
            ]
          },
          {
            "questionText": "What is the purpose of Docker volumes?",
            "answerOptions": [
              { "answerAlt": "To persist data outside of a Docker Container", "isCorrect": true },
              { "answerAlt": "To share data between containers", "isCorrect": false },
              { "answerAlt": "To monitor the performance of containers", "isCorrect": false },
              { "answerAlt": "To automate the deployment of containers", "isCorrect": false }
            ]
          },
          {
            "questionText": "What is the purpose of the Docker command-line interface (CLI)?",
            "answerOptions": [
              { "answerAlt": "To interact with Docker from the command line", "isCorrect": true },
              { "answerAlt": "To manage containers through a graphical user interface", "isCorrect": false },
              { "answerAlt": "To automate the deployment of containers", "isCorrect": false },
              { "answerAlt": "To monitor the performance of containers", "isCorrect": false }
            ]
          },
          {
            "questionText": "What is Docker and how does it work?",
            "answerOptions": [
              { "answerAlt": "Docker is a platform for developers and sysadmins to develop, deploy, and run applications with containers. Docker containers are lightweight and portable encapsulations of an application and its dependencies, allowing for easy and consistent deployment on different systems.", "isCorrect": true },
              { "answerAlt": "Docker is a virtualization technology that allows multiple applications to run on a single physical server.", "isCorrect": false },
              { "answerAlt": "Docker is a cloud-based platform for deploying and managing web applications.", "isCorrect": false },
              { "answerAlt": "Docker is a containerization tool for data storage and management.", "isCorrect": false }
            ]
          },
          {
            "questionText": "What are the benefits of using Docker containers?",
            "answerOptions": [
              { "answerAlt": "Easy deployment and scaling", "isCorrect": true },
              { "answerAlt": "Improved security and isolation", "isCorrect": true },
              { "answerAlt": "Consistent environment across development and production", "isCorrect": true },
              { "answerAlt": "Reduced resource usage compared to traditional virtual machines", "isCorrect": true }
            ]
          },
          {
            "questionText": "How does Docker differ from virtual machines?",
            "answerOptions": [
              { "answerAlt": "Docker containers share the host operating system, while virtual machines run on a separate guest operating system.", "isCorrect": true },
              { "answerAlt": "Docker containers are more resource-intensive than virtual machines.", "isCorrect": false },
              { "answerAlt": "Virtual machines provide better isolation and security than Docker containers.", "isCorrect": false },
              { "answerAlt": "Docker containers cannot run graphical applications, while virtual machines can.", "isCorrect": false }
            ]
          },
          {
            "questionText": "What are the differences between a Docker image and a Docker container?",
            "answerOptions": [
              { "answerAlt": "A Docker image is a static, immutable snapshot of a container, while a Docker container is a running instance of an image.", "isCorrect": true },
              { "answerAlt": "A Docker container is a static, immutable snapshot of an image, while a Docker image is a running instance of a container.", "isCorrect": false },
              { "answerAlt": "Docker images and containers are the same thing.", "isCorrect": false },
              { "answerAlt": "Docker images are used for data storage, while containers are used for application deployment.", "isCorrect": false }
            ]
          },
          {
            "questionText": "How do you create and run a Docker container?",
            "answerOptions": [
              { "answerAlt": "By using the docker run command with the desired image", "isCorrect": true },
              { "answerAlt": "By manually building a new image from an existing image", "isCorrect": false },
              { "answerAlt": "By deploying a container from a YAML file", "isCorrect": false },
              { "answerAlt": "By using a container management platform such as Kubernetes", "isCorrect": false }
            ]
          },
          {
            "questionText": "What is the Docker Hub and how is it used?",
            "answerOptions": [
              { "answerAlt": "A central repository where developers can store and share Docker images", "isCorrect": true },
              { "answerAlt": "A service for managing the deployment of containers in production", "isCorrect": false },
              { "answerAlt": "A platform for hosting and managing source code repositories", "isCorrect": false },
              { "answerAlt": "A tool for automating the creation and management of Docker containers", "isCorrect": false }
            ]
          },
          {
            "questionText": "How can you use environment variables in a Docker container?",
            "answerOptions": [
              { "answerAlt": "By defining environment variables in the Dockerfile for the image", "isCorrect": false },
              { "answerAlt": "By passing environment variables to the docker run command when launching a container", "isCorrect": true },
              { "answerAlt": "By modifying the environment variables within the running container", "isCorrect": false },
              { "answerAlt": "By linking environment variables from other containers", "isCorrect": false }
            ]
          },
          {
            "questionText": "How do you link multiple Docker containers together?",
            "answerOptions": [
              { "answerAlt": "By using a container orchestration platform such as Kubernetes", "isCorrect": false },
              { "answerAlt": "By using environment variables to communicate between containers", "isCorrect": false },
              { "answerAlt": "By using Docker network drivers such as bridge or host", "isCorrect": false },
              { "answerAlt": "By using the --link option when launching containers with the docker run command", "isCorrect": true }
            ]
          },
          {
            "questionText": "How do you link multiple Docker containers together?",
            "answerOptions": [
              { "answerAlt": "By using a container orchestration platform such as Kubernetes", "isCorrect": false },
              { "answerAlt": "By using environment variables to communicate between containers", "isCorrect": false },
              { "answerAlt": "By using Docker network drivers such as bridge or host", "isCorrect": false },
              { "answerAlt": "By using the --link option when launching containers with the docker run command", "isCorrect": true }
            ]
          },
          {
            "questionText": "How do you manage data persistence in Docker containers?",
            "answerOptions": [
              { "answerAlt": "By using a data volume container", "isCorrect": false },
              { "answerAlt": "By using a bind mount to mount a host directory into the container", "isCorrect": true },
              { "answerAlt": "By using a network file system", "isCorrect": false },
              { "answerAlt": "By using a shared memory segment", "isCorrect": false }
            ]
          },
          {
            "questionText": "What is a Docker swarm and how does it work?",
            "answerOptions": [
              { "answerAlt": "A swarm is a group of Docker nodes that are used to manage the deployment and scaling of Docker containers", "isCorrect": true },
              { "answerAlt": "A swarm is a tool for automating the deployment of containers in production", "isCorrect": false },
              { "answerAlt": "A swarm is a tool for managing the lifecycle of containers", "isCorrect": false },
              { "answerAlt": "A swarm is a tool for monitoring the performance of containers", "isCorrect": false }
            ]
          },
          {
            "questionText": "How do you use Docker Compose to define and run multi-container applications?",
            "answerOptions": [
              { "answerAlt": "By using a YAML file to define the services, networks, and volumes for the application", "isCorrect": true },
              { "answerAlt": "By using a JSON file to define the services, networks, and volumes for the application", "isCorrect": false },
              { "answerAlt": "By using a shell script to define the services, networks, and volumes for the application", "isCorrect": false },
              { "answerAlt": "By using a graphical user interface to define the services, networks, and volumes for the application", "isCorrect": false }
            ]
          }
    ]
   
}]



/*

export const testingQuiz = [{
    "quizName": "Biologi: Växter",
    "questions": [
        {
            "questionText": "What is the first step in deploying a Docker container on AWS?",
            "answerOptions": [
              { "answerAlt": "Launch an EC2 instance", "isCorrect": false },
              { "answerAlt": "Store the Docker Image", "isCorrect": false },
              { "answerAlt": "Build the Docker Image", "isCorrect": true },
              { "answerAlt": "Install the Docker Engine", "isCorrect": false }
            ]
          },
          {
            "questionText": "What is the purpose of an EC2 instance in deploying a Docker container on AWS?",
            "answerOptions": [
              { "answerAlt": "To store the Docker Image", "isCorrect": false },
              { "answerAlt": "To run the Docker container", "isCorrect": true },
              { "answerAlt": "To manage the Docker container", "isCorrect": false },
              { "answerAlt": "To build the Docker Image", "isCorrect": false }
            ]
          },
          {
            "questionText": "What is the recommended registry for storing a Docker Image in AWS?",
            "answerOptions": [
              { "answerAlt": "Docker Hub", "isCorrect": false },
              { "answerAlt": "AWS Elastic Container Registry (ECR)", "isCorrect": true },
              { "answerAlt": "AWS Simple Storage Service (S3)", "isCorrect": false },
              { "answerAlt": "AWS Elastic Block Store (EBS)", "isCorrect": false }
            ]
          },
          {
            "questionText": "What is the command used to run a Docker container on an EC2 instance?",
            "answerOptions": [
              { "answerAlt": "docker deploy", "isCorrect": false },
              { "answerAlt": "docker run", "isCorrect": true },
              { "answerAlt": "docker start", "isCorrect": false },
              { "answerAlt": "docker launch", "isCorrect": false }
            ]
          },
          {
            "questionText": "What is the purpose of exposing ports in deploying a Docker container on AWS?",
            "answerOptions": [
              { "answerAlt": "To allow access to the application running in the Docker container", "isCorrect": true },
              { "answerAlt": "To isolate communication between containers", "isCorrect": false },
              { "answerAlt": "To store persistent data", "isCorrect": false },
              { "answerAlt": "To monitor the deployment", "isCorrect": false }
            ]
          },
          {
            "questionText": "What AWS service can be used to automate the deployment and management of Docker containers in AWS?",
            "answerOptions": [
              { "answerAlt": "Amazon Elastic Container Service (ECS)", "isCorrect": true },
              { "answerAlt": "Amazon Elastic Container Service for Kubernetes (EKS)", "isCorrect": true },
              { "answerAlt": "AWS Lambda", "isCorrect": false },
              { "answerAlt": "AWS CloudFormation", "isCorrect": false }
            ]
          },
          {
            "questionText": "What is Docker?",
            "answerOptions": [
              { "answerAlt": "A platform for deploying, scaling and managing containers", "isCorrect": true },
              { "answerAlt": "A version control system for software development", "isCorrect": false },
              { "answerAlt": "A database management system", "isCorrect": false },
              { "answerAlt": "A network protocol", "isCorrect": false }
            ]
          },
          {
            "questionText": "What are Docker containers made up of?",
            "answerOptions": [
              { "answerAlt": "Application code and libraries", "isCorrect": true },
              { "answerAlt": "Only the operating system", "isCorrect": false },
              { "answerAlt": "Only the application code", "isCorrect": false },
              { "answerAlt": "Only the libraries", "isCorrect": false }
            ]
          },
          {
            "questionText": "What is a Docker Image?",
            "answerOptions": [
              { "answerAlt": "A pre-configured environment for running a container", "isCorrect": true },
              { "answerAlt": "A type of virtual machine", "isCorrect": false },
              { "answerAlt": "A database management system", "isCorrect": false },
              { "answerAlt": "A software repository", "isCorrect": false }
            ]
          },
          {
            "questionText": "What is the purpose of a Dockerfile?",
            "answerOptions": [
              { "answerAlt": "To automate the creation of a Docker Image", "isCorrect": true },
              { "answerAlt": "To run containers on multiple hosts", "isCorrect": false },
              { "answerAlt": "To store Docker Images", "isCorrect": false },
              { "answerAlt": "To manage containers on a single host", "isCorrect": false }
            ]
          },
          {
            "questionText": "What is a Docker registry?",
            "answerOptions": [
              { "answerAlt": "A repository for storing and distributing Docker Images", "isCorrect": true },
              { "answerAlt": "A tool for managing containers on a single host", "isCorrect": false },
              { "answerAlt": "A type of virtual machine", "isCorrect": false },
              { "answerAlt": "A version control system for software development", "isCorrect": false }
            ]
          },
          {
            "questionText": "What is the advantage of using Docker containers?",
            "answerOptions": [
              { "answerAlt": "Easy deployment and scaling", "isCorrect": true },
              { "answerAlt": "Improved security", "isCorrect": true },
              { "answerAlt": "Consistent environment across different systems", "isCorrect": true },
              { "answerAlt": "All of the above", "isCorrect": true }
            ]
          },
          {
            "questionText": "What is the purpose of Docker Compose?",
            "answerOptions": [
              { "answerAlt": "To define and run multi-container Docker applications", "isCorrect": true },
              { "answerAlt": "To automate the deployment of containers on a single host", "isCorrect": false },
              { "answerAlt": "To manage the network settings of containers", "isCorrect": false },
              { "answerAlt": "To monitor the performance of containers", "isCorrect": false }
            ]
          },
          {
            "questionText": "What is the difference between a Docker Image and a Docker Container?",
            "answerOptions": [
              { "answerAlt": "A Docker Image is a blueprint for a container, while a Docker Container is a running instance of an image", "isCorrect": true },
              { "answerAlt": "A Docker Container is a blueprint for an image, while a Docker Image is a running instance of a container", "isCorrect": false },
              { "answerAlt": "A Docker Image and a Docker Container are the same thing", "isCorrect": false },
              { "answerAlt": "There is no difference between a Docker Image and a Docker Container", "isCorrect": false }
            ]
          },
          {
            "questionText": "What is a Docker Volume?",
            "answerOptions": [
              { "answerAlt": "A way to persist data outside a Docker Container", "isCorrect": true },
              { "answerAlt": "A way to share data between containers", "isCorrect": false },
              { "answerAlt": "A way to monitor the performance of containers", "isCorrect": false },
              { "answerAlt": "A way to automate the deployment of containers", "isCorrect": false }
            ]
          },
          {
            "questionText": "What is the purpose of the Docker CLI?",
            "answerOptions": [
              { "answerAlt": "To interact with Docker from the command line", "isCorrect": true },
              { "answerAlt": "To manage containers through a graphical user interface", "isCorrect": false },
              { "answerAlt": "To automate the deployment of containers", "isCorrect": false },
              { "answerAlt": "To monitor the performance of containers", "isCorrect": false }
            ]
          },
          {
            "questionText": "What is the main benefit of using Docker?",
            "answerOptions": [
              { "answerAlt": "Easier application deployment and scaling", "isCorrect": true },
              { "answerAlt": "Improved hardware utilization", "isCorrect": true },
              { "answerAlt": "Consistent environment across different systems", "isCorrect": true },
              { "answerAlt": "All of the above", "isCorrect": true }
            ]
          },
          {
            "questionText": "What is the purpose of Docker Hub?",
            "answerOptions": [
              { "answerAlt": "A central repository for sharing and distributing Docker images", "isCorrect": true },
              { "answerAlt": "A tool for automating the deployment of containers", "isCorrect": false },
              { "answerAlt": "A tool for managing the network settings of containers", "isCorrect": false },
              { "answerAlt": "A tool for monitoring the performance of containers", "isCorrect": false }
            ]
          },
          {
            "questionText": "What is the difference between a Docker Image and a Docker Container?",
            "answerOptions": [
              { "answerAlt": "A Docker Image is a blueprint for a container, while a Docker Container is a running instance of an image", "isCorrect": true },
              { "answerAlt": "A Docker Container is a blueprint for an image, while a Docker Image is a running instance of a container", "isCorrect": false },
              { "answerAlt": "A Docker Image and a Docker Container are the same thing", "isCorrect": false },
              { "answerAlt": "There is no difference between a Docker Image and a Docker Container", "isCorrect": false }
            ]
          },
          {
            "questionText": "What is the purpose of Docker volumes?",
            "answerOptions": [
              { "answerAlt": "To persist data outside of a Docker Container", "isCorrect": true },
              { "answerAlt": "To share data between containers", "isCorrect": false },
              { "answerAlt": "To monitor the performance of containers", "isCorrect": false },
              { "answerAlt": "To automate the deployment of containers", "isCorrect": false }
            ]
          },
          {
            "questionText": "What is the purpose of the Docker command-line interface (CLI)?",
            "answerOptions": [
              { "answerAlt": "To interact with Docker from the command line", "isCorrect": true },
              { "answerAlt": "To manage containers through a graphical user interface", "isCorrect": false },
              { "answerAlt": "To automate the deployment of containers", "isCorrect": false },
              { "answerAlt": "To monitor the performance of containers", "isCorrect": false }
            ]
          },
          {
            "questionText": "What is Docker and how does it work?",
            "answerOptions": [
              { "answerAlt": "Docker is a platform for developers and sysadmins to develop, deploy, and run applications with containers. Docker containers are lightweight and portable encapsulations of an application and its dependencies, allowing for easy and consistent deployment on different systems.", "isCorrect": true },
              { "answerAlt": "Docker is a virtualization technology that allows multiple applications to run on a single physical server.", "isCorrect": false },
              { "answerAlt": "Docker is a cloud-based platform for deploying and managing web applications.", "isCorrect": false },
              { "answerAlt": "Docker is a containerization tool for data storage and management.", "isCorrect": false }
            ]
          },
          {
            "questionText": "What are the benefits of using Docker containers?",
            "answerOptions": [
              { "answerAlt": "Easy deployment and scaling", "isCorrect": true },
              { "answerAlt": "Improved security and isolation", "isCorrect": true },
              { "answerAlt": "Consistent environment across development and production", "isCorrect": true },
              { "answerAlt": "Reduced resource usage compared to traditional virtual machines", "isCorrect": true }
            ]
          },
          {
            "questionText": "How does Docker differ from virtual machines?",
            "answerOptions": [
              { "answerAlt": "Docker containers share the host operating system, while virtual machines run on a separate guest operating system.", "isCorrect": true },
              { "answerAlt": "Docker containers are more resource-intensive than virtual machines.", "isCorrect": false },
              { "answerAlt": "Virtual machines provide better isolation and security than Docker containers.", "isCorrect": false },
              { "answerAlt": "Docker containers cannot run graphical applications, while virtual machines can.", "isCorrect": false }
            ]
          },
          {
            "questionText": "What are the differences between a Docker image and a Docker container?",
            "answerOptions": [
              { "answerAlt": "A Docker image is a static, immutable snapshot of a container, while a Docker container is a running instance of an image.", "isCorrect": true },
              { "answerAlt": "A Docker container is a static, immutable snapshot of an image, while a Docker image is a running instance of a container.", "isCorrect": false },
              { "answerAlt": "Docker images and containers are the same thing.", "isCorrect": false },
              { "answerAlt": "Docker images are used for data storage, while containers are used for application deployment.", "isCorrect": false }
            ]
          },
          {
            "questionText": "How do you create and run a Docker container?",
            "answerOptions": [
              { "answerAlt": "By using the docker run command with the desired image", "isCorrect": true },
              { "answerAlt": "By manually building a new image from an existing image", "isCorrect": false },
              { "answerAlt": "By deploying a container from a YAML file", "isCorrect": false },
              { "answerAlt": "By using a container management platform such as Kubernetes", "isCorrect": false }
            ]
          },
          {
            "questionText": "What is the Docker Hub and how is it used?",
            "answerOptions": [
              { "answerAlt": "A central repository where developers can store and share Docker images", "isCorrect": true },
              { "answerAlt": "A service for managing the deployment of containers in production", "isCorrect": false },
              { "answerAlt": "A platform for hosting and managing source code repositories", "isCorrect": false },
              { "answerAlt": "A tool for automating the creation and management of Docker containers", "isCorrect": false }
            ]
          },
          {
            "questionText": "How can you use environment variables in a Docker container?",
            "answerOptions": [
              { "answerAlt": "By defining environment variables in the Dockerfile for the image", "isCorrect": false },
              { "answerAlt": "By passing environment variables to the docker run command when launching a container", "isCorrect": true },
              { "answerAlt": "By modifying the environment variables within the running container", "isCorrect": false },
              { "answerAlt": "By linking environment variables from other containers", "isCorrect": false }
            ]
          },
          {
            "questionText": "How do you link multiple Docker containers together?",
            "answerOptions": [
              { "answerAlt": "By using a container orchestration platform such as Kubernetes", "isCorrect": false },
              { "answerAlt": "By using environment variables to communicate between containers", "isCorrect": false },
              { "answerAlt": "By using Docker network drivers such as bridge or host", "isCorrect": false },
              { "answerAlt": "By using the --link option when launching containers with the docker run command", "isCorrect": true }
            ]
          },
          {
            "questionText": "How do you link multiple Docker containers together?",
            "answerOptions": [
              { "answerAlt": "By using a container orchestration platform such as Kubernetes", "isCorrect": false },
              { "answerAlt": "By using environment variables to communicate between containers", "isCorrect": false },
              { "answerAlt": "By using Docker network drivers such as bridge or host", "isCorrect": false },
              { "answerAlt": "By using the --link option when launching containers with the docker run command", "isCorrect": true }
            ]
          },
          {
            "questionText": "How do you manage data persistence in Docker containers?",
            "answerOptions": [
              { "answerAlt": "By using a data volume container", "isCorrect": false },
              { "answerAlt": "By using a bind mount to mount a host directory into the container", "isCorrect": true },
              { "answerAlt": "By using a network file system", "isCorrect": false },
              { "answerAlt": "By using a shared memory segment", "isCorrect": false }
            ]
          },
          {
            "questionText": "What is a Docker swarm and how does it work?",
            "answerOptions": [
              { "answerAlt": "A swarm is a group of Docker nodes that are used to manage the deployment and scaling of Docker containers", "isCorrect": true },
              { "answerAlt": "A swarm is a tool for automating the deployment of containers in production", "isCorrect": false },
              { "answerAlt": "A swarm is a tool for managing the lifecycle of containers", "isCorrect": false },
              { "answerAlt": "A swarm is a tool for monitoring the performance of containers", "isCorrect": false }
            ]
          },
          {
            "questionText": "How do you use Docker Compose to define and run multi-container applications?",
            "answerOptions": [
              { "answerAlt": "By using a YAML file to define the services, networks, and volumes for the application", "isCorrect": true },
              { "answerAlt": "By using a JSON file to define the services, networks, and volumes for the application", "isCorrect": false },
              { "answerAlt": "By using a shell script to define the services, networks, and volumes for the application", "isCorrect": false },
              { "answerAlt": "By using a graphical user interface to define the services, networks, and volumes for the application", "isCorrect": false }
            ]
          }
    ]
   
}]

*/
# Tech for Better - Cocoon Kids Big Hug

## Installation

1. Install node modules: ``` run npm i ```

2. Start localhost: ``` npm run dev ```

## Tech Stack
- React with Nextjs
- aws amplify for authentication
- swr for data fetching
- vanilla css and material ui for components, design and user interface
- deployed on vercel
- data is stored in a db.json file, and we created an api endpoint and read the data using swr

## Introduction 
### What are you building?
Cocoon Kids Big Hug is a therapeutic service for children and young adults and parents.

### Why are you building it?
To help people understand their feelings better. 

## Project scope 
### What are you not building?
We're not building a platform that is used in schools for teachers to better unterstand the moods of the children they're teaching

We are not building a platform with effective sign-up for children under 13.

### How did you decide what features were important?
We listened to our Product Owner and listened to the feedback from the user research that we did on Design week.

## Project plan 
### How are you going to structure your sprints?
#### First Sprint
- Create the pages and functionality for two user groups
- Use Json object and endpoints
#### Second Sprint
- Implement simple auth
- Create mock-up page for parents/carers and schools/professional
- Add db (tbc)

### What order are you going to build in?
Start with the pages that we determined that they are going to be in the MVP and build the necessary components related to them.

### How did user research inform your plan?
It helped us refactor our wireframe and enhance existing ideas.


## Requirement analysis 

### How will you ensure your project is accessible to as many users as possible?
- we're following the guidance on the a11y checklist, so ensure that the project is accessible to as many users as possible
- we're using reach-ui which helps us build components which meet a lot of accessibility criteria

### Are there any legal or regulatory requirements you should consider?

- GDPR and T&C need to be in plain and simple language.
- Specific Auth requirements for minors are out of scope for this project


## Project learnings 

### Did your team work effectively?
we broke down tasks into smaller issues and assigned them to pairs or individual people. In that sense we worked effectively. We did not research some things enough (reach.ui) and therefor got stuck with some things. Also we discussed many things over and over again, without acutally researching what the best way to to things would be. 

### What would you do differently next time?

- Two days at the first week to research the tech we're going to use

- Plan data structure properly.

## Research and findings 

### What did you find out from user testing?
- The need to create different themes (images, colours) for the age-groups
- Keep the design clean and simple
- Describe emotions with both images and adjectives


## Project outcomes 


### Were your assumptions right or wrong?



## Recommendations and conclusions 

### What features would you prioritise to build next?
The Join/Go page. 
The parents page.
add functionality to parents page and schools page

### Was the project a success?

Yes, we managed to create our MVP and even beyond that managed to add authentication and extra pages. The project is a working website and can be used by the product owner for intended purposes of presenting her ideas to potential clients and people willing to fund her project. 

## Software Development Lifecycle stages 

### Planning 

#### What roles did your team take on?
Scrum - Karwan
UX/UI - Paz
DevOps - Lisa
QA - Abdullah

#### Explain the roles and responsibilities of all people working within the software development lifecycle, and how they relate to the project (K2)
##### QA 
- Monitor codecov and make sure test coverage is kept up
- Understand how to test pure functions, database queries, routes, DOM
- Understand how and when to use mocks
- Set up separate test database and destroy / build scripts
- Insist on clean and legible code
##### DevOps 
- Lead on setting up repo and file structure
- Make sure separation of concerns is considered
- Set up linting and check it works for everyone
- Set up deployment to Heroku and take ongoing responsibility
- set up environment variables for local and remote databases
##### Scrum Facilitator 
- Sprint planning
- Prioritise issues
- Break down larger issues into manageable chunks
- Lead standups and Sprint Planning
- Clear blockers
- Lead conversations with the Product Owner
- Listen to and mediate Product Owner needs
- Balance needs of the Product Owner with the needs of the Product Team
- Provide a daily rundown of work completed
- Lead Sprint Review
##### UX Lead 
- Advocate for the user
- Create a style guide
- Ensure design heuristics are followed
- Lead on project documentation
- Ensure regular attention is given to thorough documentation
- Consider all parts of the project documentation
- Provide support to the team in writing documentation
- Ensure completion of handover documentation for the Product Owner


#### Did these roles help your team work effectively?

#### Outline how teams work effectively to produce software and how to contribute appropriately (K6) Compare and contrast the requirements of a software development team, and how they would ensure that each member (including themselves) were able to make a contribution (K6)

### Analysis 

#### What might be the intended and unintended consequences of building this product? 
#### Intented
- Help children explore and understand their moods
- Give tips on what to do to improve one's mood

#### Unintented
- Make children overly aware of their mood
- Compare moods through time and be self-judgemental about own feelings 

### Design 

#### How did you plan a user experience?
- Clearly divide the flow of content per age groups
- Provide adequate content and design to different age-groups
- Safeguard access to inadequate content to young children

#### What technical decisions did you make?

- Server-render vs client-render vs both
- Relational or non-relational or no DB
- Self-hosted or platform-as-a-service
- Frontend first vs DB first


#### Did you create a technical specification?
Review methods of software design with reference to functional/technical specifications and apply a justified approach to software development (K11, S11, S12)



### Implementation/Build 

#### How did you ensure your code was good?
We where careful to use clear variable names and tried to write as little code as possible to create something that works. 

#### What interesting technical problems did you have to solve?
We put a lot of thought and consideration into how to store the data. We chose to go with a json file, simply because there is not loads of content and its simple to use. It was interesting to think about how to use the json file in a deployed project on vercel, and we considered many things, like creating a database, making a third party api, and creating our own api endpoint in the project. 

#### How did you debug issues that arose?
We had github issues for bugs, either opened by ourselves, our mentors or other cohort  members. We assigned issues by priority and worked through them. 

### Test 

#### How did you verify your project worked correctly?
We ran the project locally and manually checked for errors and bugs. 

### Deploy 
#### Where/how did you deploy your application?
We deployed the app on vercel. 

#### What problems did you encounter during deployment?
We deployed our app on vercel and our data is in a json file. To read from the json file we used a server-json package in development, which didn't work in production. It wasn't possible to deploy like this, so we created an api endpoint and used SWR (react hook to data fetching) to access the data, suitable for deployment. 

### Maintain 
#### Is it easy for someone make changes to the codebase?
We made sure to use clear variable name and write concise code, so it should be easy for someone else to make changes to the codebase

#### Could a new person quickly be onboarded to contribute?
Yes, despite of the big scope of the project the code is relatively clear and concise, the folder structure makes sense, and we separated components from pages.

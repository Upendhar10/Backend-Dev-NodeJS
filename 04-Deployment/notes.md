# Deployment

- Deployment refers to the process of making an application available for use to the users.
- This involves several steps, from transferring the application's code and assets to a server, to configuring the environment, to ensuring that the application runs correctly in its production environment.
- Deployment can be complex and involves various strategies and tools to ensure a smooth transition from development to production.
- This process can vary significantly depending on the complexity of the application, the deployment environment, and the specific requirements of the project.

## Key Aspects of Deployment

1. Preparation:

   - Build: Compiling the code, running tests, and packaging the application.
   - Dependencies: Ensuring all required libraries, frameworks, and other dependencies are installed.

2. Environment Configuration:

   - Environment Variables: Setting up environment-specific variables like database connection strings, API keys, etc.
   - Configuration Files: Adjusting configuration files for production settings.

3. Deployment Strategies:

   - Manual Deployment: Copying files manually to the server, configuring the environment, and starting the application.
   - Automated Deployment: Using scripts or tools to automate the deployment process, reducing the risk of human error.

4. Tools and Platforms:

   - Continuous Integration/Continuous Deployment (CI/CD): Tools like Jenkins, CircleCI, GitHub Actions, and GitLab CI/CD automate the build, test, and deployment processes.
   - Containerization: Using Docker to package applications and their dependencies into containers, ensuring consistency across environments.
   - Orchestration: Tools like Kubernetes manage and scale containerized applications.

5. Deployment Models:

   - On-Premises: Deploying applications on physical servers or virtual machines within an organization’s own data centers.
   - Cloud: Deploying applications on cloud platforms like AWS, Azure, Google Cloud, which provide scalability and various managed services.
   - Hybrid: A combination of on-premises and cloud deployments.

6. Release Management:

   - Blue-Green Deployment: Running two identical production environments, switching traffic between them to minimize downtime.
   - Canary Deployment: Gradually rolling out changes to a small subset of users before a full rollout.
   - Rolling Updates: Gradually updating instances of the application to ensure minimal downtime.

7. Monitoring and Logging:

   - Application Performance Monitoring (APM): Tools like New Relic, Datadog, and Prometheus to monitor the health and performance of applications.
   - Logging: Collecting and analyzing logs to diagnose issues, using tools like ELK Stack (Elasticsearch, Logstash, Kibana), Splunk, and Graylog.

8. Rollback Strategies:

   - Version Control: Keeping previous versions of the application to revert if necessary.
   - Database Rollbacks: Ensuring database changes can be reverted to maintain consistency.

## Deployment Environments

1. Development:

   - Where developers build and initially test the application.
   - Frequent deployments and changes occur here.

2. Staging:

   - A replica of the production environment used for final testing before deployment to production.
   - It allows for thorough testing in an environment similar to production.

3. Production:
   - The live environment where the application is available to end-users.
   - Deployments here need to be handled carefully to avoid downtime and ensure stability.

## Deployment Tools and Platforms

1. CI/CD Tools: Jenkins, Travis CI, CircleCI, GitHub Actions, GitLab CI
2. Containerization: Docker, Kubernetes
3. Infrastructure as Code: Terraform, Ansible, Chef, Puppet
4. Cloud Services: AWS (Elastic Beanstalk, ECS, EKS), Google Cloud (App Engine, GKE), Azure (App Service, AKS)
5. Platform as a Service (PaaS): Heroku, Firebase, DigitalOcean App Platform

## Steps in the Deployment Process

1. Code Commit and Merge:

   - Developers write code and commit it to a version control system (VCS) like Git.
   - Code is merged into a main branch (e.g., main or master).

2. Continuous Integration (CI):

   - Automated systems build the application and run tests to ensure code quality.
   - Build artifacts (e.g., binaries, Docker images) are created.

3. Artifact Storage:

   - Built artifacts are stored in artifact repositories like JFrog Artifactory, Nexus, or Docker Hub.

4. Continuous Deployment (CD):

   - Deployment scripts or tools automatically deploy the application to the target environment.
   - Configuration management tools (e.g., Ansible, Chef, Puppet) ensure the environment is correctly configured.

5. Infrastructure as Code (IaC):

   - Tools like Terraform, CloudFormation, and ARM templates manage and provision infrastructure in a declarative manner.

6. Deployment:

   - Application is deployed to servers, containers, or cloud services.
   - Environment-specific configurations are applied.

7. Post-Deployment:
   - Monitoring systems ensure the application is running correctly.
   - Logs are collected and analyzed for any issues.
   - Rollback procedures are ready in case of any critical issues.

---

---

## Environment Variables Configuration

- `Dotenv` is a zero-dependency module that loads environment variables from a .env file into process.env.
- Storing configuration in the environment separate from code is based on The Twelve-Factor App methodology.

#### Steps to configure :

1. npm i dotenv
2. import 'dotenv/config'
3. Create a .env file in the root of your project
4. Define the environment variables (in our case) PORT
5. Add those variables in the code, where they are required.

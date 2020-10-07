# Scalable Webhook Template - NodeJS

This template implements the Scalable Webhook pattern, including the source code
to get you started quickly. 

After you create a project from this template, change and extend it to fit your 
specific requirements.

To learn more about the Scalable Webhook pattern and how to use it, read our [blog post](https://www.altostra.com/blog/scalable-webhook) on the subject.

## Before you begin

### 1. Create a free Altostra account
To create an account, simply login to the [Altostra Web Console](https://app.altostra.com).

### 2. Install the Altostra CLI
```sh
npm i -g @altostra/cli
```

### 3. Connect an a AWS account 
To connect an AWS account, click on Connect Cloud Account in [Web Console settings](https://app.altostra.com/settings).

> If you don't wish to connect your account just yet, you can deploy to the [Playground](https://docs.altostra.com/reference/concepts/playground-environment.html) environment—in the tutorial below—that simulates the cloud without creating actual resources.

## Using the template

You have several options to get started with this template:
* Initialize a new project from the Altostra CLI and specify the template:
```sh
mkdir scalable-webhook
cd scalable-webhook
alto init --template scalable-webhook-nodejs
```

* Create a new project from the [Altostra Web Console](https://app.altostra.com/projects), you can select the `scalable-webhook-nodejs` template from the list.

* Apply the template to an existing Altostra project from Visual Studio Code by going to the Altostra view in the main toolbar and clicking on `scalable-webhook-nodejs` in the templates list.

## Deploying the project

Start by logging in from the Altostra CLI:
```sh
alto login
```

>The deployment process is simple and involves a few commands.  
>For more information on each command refer to the [Altostra CLI documentation](https://docs.altostra.com/reference/CLI/altostra-cli.html).

Create an [image](https://docs.altostra.com/howto/projects/deploy-project#create-a-project-image.html) of the project:
```sh
alto push v1.0
```

Deploy the image as a new [deployment](https://docs.altostra.com/reference/concepts/project-deployment.html) named `main` in the `Dev` environment:
```sh
alto deploy main:v1.0 --new Dev # omit "--new Dev" to update rather than create
```

## View the deployment status and details
You have two options, list the deployment details in the terminal or open the Web Console.

* Using the Altostra CLI:
```sh
alto deployments # list the deployments for the current project
```
```sh
alto deployments main # show details for the deployment "main"
```

* Using the Web Console:
```sh
alto console # will open the Web Console for the current project
```

## Modifying the project
To modify the project, you'll need to install the [Altostra Tools](https://marketplace.visualstudio.com/items?itemName=Altostra.altostra) extension for Visual Studio Code from the marketplace, or search for `Altostra Tools` in the VS Code extensions view.

## Template content

### Cloud resources
* REST-API
* Functions
* Message Queue
* Data Table

### Source files
The source files are located in the `functions` directory.

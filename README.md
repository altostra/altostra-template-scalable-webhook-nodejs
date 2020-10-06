# Scalable Webhook Template

Use this template to create a scalable webhook project.
You can then change and extend it to fit your requirements.

To learn more, read this [blog post](https://www.altostra.com/blog/scalable-webhook).

## Getting started

## Things you'll need for this tutorial
1. An Altostra Account (Don't have one yet? Just [login](https://app.altostra.com) here)
1. Altostra CLI installed (`npm i -g @altostra/cli` or [see docs](../reference/CLI/altostra-cli.html#installation))
1. Altostra Tools extension for Visual Studio Code ([VSCode Marketplace](https://marketplace.visualstudio.com/items?itemName=Altostra.altostra) or [see docs](../getting-started/installation.html#install-the-visual-studio-code-extension))
1. A connected AWS cloud account ( [Web Console settings](https://app.altostra.com/settings)  or [see docs](../getting-started/connect-your-accounts.html#connect-your-cloud-service-accounts))
1. An Environment connected to your AWS Account ([Web Console environments](https://app.altostra.com/environments) or [see docs](../howto/envs/manage-environments.html)) - We'll call it `Dev` for berevity, but you can pick any of your environments

To debug your function you'll also need to install SAM-CLI by following
[its installation instructions](https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/serverless-sam-cli-install.html).


## Using the template

You have several options to get started with this template.  
Either go to the Altostra Web Console and create a new project.  
When asked to use a template, select "static-website".

Alternatively, you can use the Altostra CLI to initialize a new project from the template by running:
```sh
$ alto init --template static-website
```

You can also apply the template to an existing Altostra project from Visual Studio Code by going
to the Altostra view in the main toolbar and clickign on "static-website" in the templates list.

### Project deployment

Run the following commands to create a deployment image of the project and deploy it as a new instance.

For more information on each command refer to the [Altostra CLI docs](https://docs.altostra.com/reference/CLI/altostra-cli.html).

1. Create an
[image](https://docs.altostra.com/howto/projects/deploy-project.html#create-a-project-image)
from the project:
```shell
$ altos push v1.0
```
2. Deploy the image to a new deployment named `main` in the `Dev` environment:
```shell
$ alto deploy main:v1.0 --new Dev
```
3. Manage the project in the Altostra Web Console:
```shell
$ alto console
```

> To update an existing deployment with new images just omit the `--new` flag and environment name:
> ```shell
> $ alto deploy main:v2.0
>```

## Cloud Resources
* REST-API
* Functions
* Message Queue
* Data Table

## Source Files
The sources are located in the `functions` directory.

## Running and debugging

To run the function locally you'll have to create a few resources by deploying the project, then:
1. Run `alto build`
1. Run `alto console`
1. Select the deployment
1. Click on the `Open in AWS Console` button of the latest version
1. Go to the `Resources` tab
1. Filter to `RequestsQueue01` and copy the *Physical ID* of the queue resource  
For brevity, we assume it is `https://sqs.my-queue`.
1. Filter to `RequestsTable01` and click on the *Physical ID* of the table resource
1. Copy its *Table name*  
For brevity, we assume it is called `RequestsTable01-1`.

To debug the `requests-processor` function, create a message payload by running
1. Run `sam local generate-event sqs receive-message > msg.json`
1. Edit `msg.json` with your favorite text editor.

### *Nix

#### Running

To run a local HTTP API that invokes the `requests-verifier` function run
```shell
QUEUE_REQUESTSQUEUE01="https://sqs.my-queue" sam local start-api -t sam-template.json
```

To run run the `requests-processor` function run
```shell
TABLE_REQUESTSTABLE01="RequestsTable01-1" sam local invoke -t sam-template.json \
--event msg.json RequestsProcessor01
```

#### Debugging
To debug the `requests-verifier` function run
```shell
QUEUE_REQUESTSQUEUE01="https://sqs.my-queue" sam local start-api -t sam-template.json -d 5000
```
After every call to the API, the function would load then wait until a debugger
would connect to `localhost:5000`.

To debug the `requests-processor` function run
```shell
TABLE_REQUESTSTABLE01="RequestsTable01-1" sam local invoke -t sam-template.json \
--event msg.json RequestsProcessor01  -d 5000
```

The function would load and wait for a debugger to connect `localhost:5000`.

### Windows PowerShell 

#### Running

To run a local HTTP API that invokes the `requests-verifier` function run
```shell
$ENV:QUEUE_REQUESTSQUEUE01="https://sqs.my-queue" 
sam local start-api -t sam-template.json
```

To run run the `requests-processor` function run
```shell
$ENV:TABLE_REQUESTSTABLE01="RequestsTable01-1" 
sam local invoke -t sam-template.json --event msg.json RequestsProcessor01
```

#### Debugging
To debug the `requests-verifier` function run
```shell
$ENV:QUEUE_REQUESTSQUEUE01="https://sqs.my-queue" 
sam local start-api -t sam-template.json -d 5000
```
After every call to the API, the function would load then wait until a debugger
would connect to `localhost:5000`.

To debug the `requests-processor` function run
```shell
$ENV:TABLE_REQUESTSTABLE01="RequestsTable01-1" 
sam local invoke -t sam-template.json --event msg.json RequestsProcessor01 -d 5000
```

The function would load and wait for a debugger to connect `localhost:5000`.

### Windows CMD

#### Running

To run a local HTTP API that invokes the `requests-verifier` function run
```shell
SET "QUEUE_REQUESTSQUEUE01=https://sqs.my-queue" 
sam local start-api -t sam-template.json
```

To run run the `requests-processor` function run
```shell
SET "TABLE_REQUESTSTABLE01=RequestsTable01-1" 
sam local invoke -t sam-template.json --event msg.json RequestsProcessor01
```

#### Debugging
To debug the `requests-verifier` function run
```shell
SET "QUEUE_REQUESTSQUEUE01=https://sqs.my-queue" 
sam local start-api -t sam-template.json -d 5000
```
After every call to the API, the function would load then wait until a debugger
would connect to `localhost:5000`.

To debug the `requests-processor` function run
```shell
SET "TABLE_REQUESTSTABLE01=RequestsTable01-1" 
sam local invoke -t sam-template.json --event msg.json RequestsProcessor01 -d 5000
```

The function would load and wait for a debugger to connect `localhost:5000`.

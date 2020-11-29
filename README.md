# the Byte app
Find the working version at:
http://thebyteapp-20201129204728-hostingbucket-prod.s3-website.eu-west-2.amazonaws.com/

## Description
This is an online shop for bits and bytes. 
Customers can see the current state of the 
memory, either in the native ones and zeroes
or in higher-order words such as bytes.

The purpose is to build a finite memory 
online storage unit, mostly for creating 
a sense of community, a place where people
come together to share their ideas and feelings 
through (very) small pieces of text.

Some may choose to use their acquired space
for advertising, by updating the contents 
of their cells with a link to a website,
others may want to express their love to 
another, by writing an ever-lasting declaration.
Whatever it may be, the storage is limited,
so customers are encouraged to make the 
most of it while it's still going.

## Requirements
From a technical point of view, there are 
some tasks users MUST be able to do:
1. see the current state of the memory
    1. as it is (higher-level representation)
    2. by alternating between bit / higher-level representations
2. change the current state of the memory
    1. either by buying new cells
        -- has high priority
        -- is instant
        -- is consistent
        -- fits in the limited memory
        -- forms new contiguous state
        -- accepts most popular payment methods
    2. or by altering the content of owned cells
        -- has lower priority
        -- propagates slowly
        -- supports different language / symbols (unicode standard)
3. see the default font, and the intended representation of the message
4. interact with the memory, by smoothly scrolling
5. if the user is an admin, access the admin panel

## Behind the byte
This is a full-stack project. Everything will be hosted in the cloud using AWS.

### AWS S3
As the content is static in principle, everything could be placed into
an S3 bucket. The problem then arises when a user changes the contents.
The expected number of times users update cells might be high.

### AWS Cognito
1. integrates nicely with AWS Amplify
2. provides the functionality we need: login and secure buying

### GraphQL with DynamoDB and Lambda Functions
1. frontend communicates easily with backend
2. byteId gives an index users can interact with
3. NoSQL DB for storing the bits
4. integrates with the others
5. easy way to process payments

### AWS Amplify
1. low cost for current purposes
2. automatic deployment from Github branch
3. under the hood uses AWS Cloud-Front to serve content
4. allows different environments
5. allows easy integration of special services, such as AWS Cognito used for authentication

## Technical issues to consider
- fixed memory, so constant database
- update page after performing action

## TODO
- load balancer
- CDN - cache data
- how to update cache fast
- prevent instant double buying
- buy & change bits in bulk

## Notes for developer
- check other shopping websites implementation
- figure out edge cases when buying after the end (if buying in bulk)
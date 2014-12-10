# mogy-mysql

MySQL query activity for [mogy](https://github.com/neyric/mogy).

## Installation

In your mogy project, install the dependency using npm :

    $ npm install mogy-mysql --save

To register the `mysql` activity to Amazon Simple Workflow :

    $ mogy register

## Config

In your mogy environment config file, under the `activities` key, add :

````json
"mysql": {
    "host"     : "localhost",
    "user"     : "user",
    "password" : "****",
    "database" : "project",
    "port": 8888
}
````

## Sample Decider Usage

````javascript
activity({
    name: 'myQuery',
    activity: 'mysql',
    input: {
        query: 'show tables'
    }
})
````

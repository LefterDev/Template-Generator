### Template Generator by Lefter

## Functionality

This is a simple template generator. The templates are fully customizable through the `Template.js` file which is located in the `classes` folder. Each template should follow the below structure:

```js
TemplateName {
    directoy: { folderName: { subFolderName: {} } }
    /*
    Folders are represented as objects as demostrated
    */,
    files: { fileName: fileContent }
    /*
    Files are represented as simple Object items.Filenames should have the appropiate extension included
    */
}
```

Files are dynamically generated. This means that if a `folderName` doesn't match a key or doesn't exist in the `files` subclass of the `Template` that is being generated then the script just ignores it and continues its process.

## Usage

```batch
:: To install required modules
npm install

:: To test the script run:
npm run test

```

## TODO
- Implement external handlers for directory creation/checks
- Transform it to cli script
- Add the option for github templates generation
- Many more to come...

## Closing notes

##### Don't forget to ⭐️ this project!

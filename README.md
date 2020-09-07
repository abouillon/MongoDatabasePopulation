# Instructions for Running

## Requirements
    * MongoDB 4.2.9 or newer
        You can use mongo -version in a command prompt to check your version
    * Git

## Dependencies
    * MongoDB 3.6.1 driver

## How to Run Scripts
    1. Install MongoDB 4.2.9 or newer on your system
    2. Add MongoDB to the system Path
        ### Edit Environment Variables Windows
            1. Press the Windows key
            2. Type env and choose "Edit System Environment Variables"
            3. Click the "Environment Variables" button at the bottom of the "Advanced" tab for the window that opens
            4. Click on Path under "System Variables"
            5. Click Edit
            6. Add a semi-colon after the very last entry in the path
            7. Add the path to your mongdb/bin folder
            8. Click OK
    3. git clone this repository
        * You can opt to use the Github Desktop app to make this easier
    4. open a Command Prompt in the folder this repository is cloned to
        There are three ways you can do this
            * Open folder, hold Shift, right click, and select Open Command Prompt Here
            * Hold Shift, right click on the folder, and select Open Command Prompt Here
            * Press the Windows key, type cmd, press Enter, then type cd <path to git directory here>, and press Enter
    5. Type npm install
        * This will install the mongoDB driver for NodeJS and all dependencies.
        * The version will be either 3.6.1, the latest patch (3.6.X), or the latest minor update(3.X.X)
    6. Open a second command prompt, type mongod, and press Enter to start the local server
    7. In the first command prompt type node db and press Enter
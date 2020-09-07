# Instructions for Running

## Requirements
    [MongoDB 4.2.9 or newer][1]
        * You can use mongo -version in a command prompt to check your version
    [Git][2]

## Dependencies
    MongoDB 3.6.1 driver

## How to Run Scripts
    1. Install git on your system
    2. Install MongoDB 4.2.9 or newer on your system
    3. In your C: drive create a folder named data, then create a folder named db inside of it.
    4. Clone this repository
        * git clone https://github.com/abouillon/MongoDatabasePopulation.git
        * You can opt to use the Github Desktop app to make this easier
    5. Open a Command Prompt in the folder for this repository
        * There are three ways you can do this
            * Open folder, hold Shift, right click, and select Open Command Prompt Here
            * Hold Shift, right click on the folder, and select Open Command Prompt Here
            * Press the Windows key, type cmd, press Enter, then type cd <path to git directory>, and press Enter
    6. Type npm install and press enter to install the dependecies
    7. Open a second command prompt, type cd <path to mongodb/bin>, press Enter, then type mongod and press Enter.
        * If you have MongoDB added to your System Path you can simply type mongod and press Enter
        * MongoDB must be running before you can run the scripts
    8. In the first command prompt type node db and press Enter
    9. After the connection closes type node viewDb and press Enter to view the contents of the database
        * Functionality is provided for displaying a single document from the database within the viewDb script

## Add MongoDB to the system Path
### Windows
    1. Press the Windows key
    2. Type env and choose "Edit System Environment Variables"
    3. Click the "Environment Variables" button at the bottom of the "Advanced" tab for the window that opens
    4. Click on Path under "System Variables"
    5. Click Edit
    6. Add a semi-colon after the very last entry in the path
    7. Add the path to your mongdb/bin folder
    8. Click OK

    [1]: https://www.mongodb.com/
    [2]: https://git-scm.com/
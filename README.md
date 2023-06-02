# PlanR festival UI

## Description

---

PlanR festival UI is used for user-interaction as the UI of a web-based robot arm photo robot or box-type photo robot

### Project breif

This project starts shooting through user interaction, converts the captured photos through an image conversion AI model(based on animeGAN) server and sends output signals to the cannon selphy CP1300 printer to sell photo cards. This project was used in Hanyang University Erica Spring Festival in 2023 and drew a lot of people's response

### Key features

- **Rendering & Capture** : Take camera stream from chrome via javascript and render video. Captures one frame being rendered and sends it to the server.
- **Rosnodejs :** It interacts between the robot server and the robot arm through npm rosnodejs, sends a signal to the robot arm through the event listener of the UI, and triggers the movement of the robot arm.
- **image convert using AI :** The image received from the main server is converted into a cartoon-like picture by passing it through animeGAN. The photo is sent back to the UI server.

## Installation

---

### Requirements

For development, you will only need Node.js 

**Node** 

- Node installation on Windows
    
    Just go on [official Node.js website](https://nodejs.org/) and download the installer. Also, be sure to have `git` available in your PATH, `npm` might need it (You can find git [here](https://git-scm.com/)).
    
- Node installation on Ubuntu
    
    You can install nodejs and npm easily with apt install, just run the following commands.
    
    ```
    $ sudo apt install nodejs
    $ sudo apt install npm
    $ pip install flask
    ```
    
- Other Operating Systems
    
    You can find more information about the installation on the [official Node.js website](https://nodejs.org/) and the [official NPM website](https://npmjs.org/).
    

If the installation was successful, you should be able to run the following command.

```
$ node --version
v16.15.1

$ npm --version
8.13.2
```

If you need to update `npm`, you can make it using `npm`! Cool right? After running the following command, just open again the command line and be happy.

```
$ npm install npm -g
```

After entire installations, you just run the following command in the dircetory where README.md is located.

`$ npm init`

### Getting Started

- **Nodejs & Flask**
    
    if you want to see the web conntected
    
    ```jsx
    //main_server
    $ node main_server/app.js
    
    //box_server
    $ node box_server/app.js
    
    //orin_server
    $ python3 orin_server/app.py
    ```
    

## Techiques and Tools

---

- **Main_server** : The existing AnimeGAN model was implemented in API form using Flask. If you send a post request with /convert with an image in the body, it will be saved in the database and AI-converted as a response.
- **Web Component :** While rendering the camera stream, one frame is sent to the server according to the signal, giving the effect of taking a picture.
- **Orin_server :** A GET request is sent to another nodejs server that communicates with the robot arm through rosnodejs to send a trigger for the robot arm to move.

## Architecture

---

All connections go through the router to the controller. The controller calls and executes different services depending on the type of request.

- server
    - src
        - controller
        - routes
        - service
            - cups
    - view
        - assets
        - css
        - scripts
        

## Support & License

---

### Browser support

we recommand running with the latest Chrome browser. Currently, the version of Chrome we used is **version 105.0.5195.125 (official build) (arm64)**. and it is not recommended to use too old versions.

### License

All copyrights belong to PlanR, a startup club at Hanyang University, and both commercial and non-commercial use can be used only by contacting my github or Hanyang University PlanR.

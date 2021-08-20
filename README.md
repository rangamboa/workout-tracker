# Workout Tracker 💪🏼

This application is a fitness tracker that can record and display workouts over a range of dates. The user can input their workout, picking from a pre-seeded group of exercises or creating their own. Stacking multiple workouts in a single day is also possible. The application can display the total workout statistics on easy-to-read charts and graphs.

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Table of Contents

  1. [Description](#description)
  2. [Installation](#installation)
  3. [Usage](#usage)
  4. [Contribution](#contribution)
  5. [Testing](#testing)
  6. [Questions](#questions)
  7. [Screenshots](#screenshots)
  8. [License](#license)
  
## Description

Fitness Tracker is coded using information seeded into a MongoDB database and managed with Mongoose. Route handling and data creation is handled with Express.js. As the deployed site is available through Heroku, the Mongo database has been set up with a MongoDB Atlas account.

## Installation

This project uses MongoDB, mongoose, morgan and Express.js. Install these packages if you do not have them on your local machine. 

## Usage

Remember to seed the database with ``npm run seed`` in the terminal before launching with  ``node .\server.js``. I used [Robo3T](https://robomongo.org/) to test the database, and [Insomnia](https://insomnia.rest) to visualize, test and troubleshoot routes.

## Contribution

Pleae feel free to contribute and always follow the [Contributor Covenant](http://contributor-covenant.org/version/1/3/0/):

* Fork the reposition
* Create a new branch (``git checkout -b improve-feature``)
* Make, add and commit the appropriate changes in the files
* Push to the branch (``git push origin improve-feature``)
* Create a Pull Request

Thanks!

## Testing

Testing of code was conducted in [Robo3T](https://robomongo.org), [Insomnia](https://insomnia.rest) and in-browser; error messages were parsed there and in the VS Code command line interface. I have not been able to get the $addFields stage of aggregation to work correctly, and will continue to work on that to get this build to 100% functionality.

## Questions

Please don't hesitate to reach out to me via [GitHub](https://github.com/rangamboa) or [email](mailto:rangamboa@gmail.com) if you've got any questions.
## Screenshots

![Screenshot 01](public/assets/images/screenshot-01.jpg 'screenshot')
![Screenshot 02](public/assets/images/screenshot-02.jpg 'screenshot')
![Screenshot 03](public/assets/images/screenshot-03.jpg 'screenshot')


## License

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

---
@2021 Ran Gamboa. ``- Thanks for reading!``
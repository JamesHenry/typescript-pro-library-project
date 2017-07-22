<h1 align="center">
<img width="40" valign="bottom" src="https://cloud.githubusercontent.com/assets/10656223/15247118/e71dc6a2-1909-11e6-9b90-ae86204f41c3.png">
TypeScript Pro: Final Library Project
</h1>
<h4 align="center">A micro library written from scratch to take advantage of the power of TypeScript</h4>

---

> This repo serves as the seed project for the TypeScript Pro course as well as the final solution in a separate branch, come and [learn TypeScript](https://courses.jameshenry.blog) from Fundamentals to Pro!

[Setup and install](#setup-and-install) |
[Course structure](#progression-through-the-course) |
[Resources](#resources)

## Setup and install

Fork this repo from inside GitHub so you can commit directly to your account, or simply download the `.zip` bundle with the contents inside.

#### Dependency installation

The key thing you will need before getting started is NodeJS itself. You can follow the steps below to set everything up (if you have done some of these already, skip to the next step where appropriate):

1. Download and install [NodeJS here](https://nodejs.org/en/download/) for your operating system (e.g. Windows, Linux, macOS etc).
2. Make sure you now have NodeJS and NPM install by running the following commands in your command-line application of choice to check their versions:

Node: `node -v`
NPM: `npm -v`

If you received a version number as a response to each of those commands then you have everything you need to get started, as we will be installing the other tools we need as we proceed through the course together.

#### A note on using yarn

At various points during the TypeScript Fundamentals and TypeScript Pro courses, we have used `yarn` as an alternative to `npm`. As with those videos, the choice between `yarn` and `npm` here is totally optional and either will give you what you need to complete this course.

If you interested in how to set up yarn, please check out the installation instructions they have created on their website: [yarn installation instructions](https://yarnpkg.com/lang/en/docs/install/).

At the time of recording, the differences between the yarn and npm CLI tools are smaller than ever, and it really comes down to personal preference. `npm` has the advantage that it comes pre-installed with NodeJS itself, so you can skip the installation of `yarn`, as long as you have `npm` available as described above.

## Progression through the course

Because the idea here is to build a node micro library in TypeScript from scratch, we will start on the `master` branch of this repo with just this README.md file and gradually build up all of our functionality, testing and tooling together step by step.

Each video will build linearly on the last and will be tied to a specific branch in this repo, which will are labelled and called out accordingly.

I recommend that you start at the same point that I do at the beginning of each video and try to follow along with all the steps in real time. You can re-watch the videos and take as much time as you need, and if you ever want to take a look at the source for where we get to at the end of a given video, you can check out the relevant branch. This will mean that you can always catch up, or skip ahead, or come back to particular sections as you need to.

## Resources

There are many resources used within this project and you can dive deep into why they exist and how to get the most out of them by visiting their dedicated documentation and training resources online:

* [TypeScript](http://www.typescriptlang.org/)
* [npm](https://www.npmjs.com/)
* [.gitignore generator](http://gitignore.io/)
* [jest](http://facebook.github.io/jest/)
* [prettier](https://prettier.io/)
* [husky](https://github.com/typicode/husky)
* [lint-staged](https://github.com/okonet/lint-staged)
* [rollup](https://rollupjs.org/)

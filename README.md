# stencil_ie_issue
Demo Project to reproduce [stencil issue 1113](https://github.com/ionic-team/stencil/issues/1113) on IE and Firefox

We have 3 components here:
* demo-child
* demo-parent-one , it depends on demo-child & uses it from inside
* demo-parent-two , it depends on demo-child & uses it from inside

## What is the issue ?

> All 3 components works as expected indepently on all browsers. When these components are included on same page using **component build scripts** and **selectors**, these works as expected on chrome browser but don't render on IE/Firefox.

## Steps to Reproduce

* Navigate to root directory of this project
* Run `yarn install` or `npm install`
* Once dependencies are installed Run `yarn start` or  `npm start`
* Open  [http://localhost:8080/](http://localhost:8080/) in chrome & IE

## Miscellaneous
> This issue doesn't seem to be related with nesetd components. It can be regenerated by simply including one component script more than once on same page. The component will stop rendering on IE/Firefox

## Results

### Chrome
![Chrome Result](https://github.com/rahulbhooteshwar/stencil_ie_issue/blob/master/docs/result_chrome.PNG "Chrome Result")

### IE
![IE Result](https://github.com/rahulbhooteshwar/stencil_ie_issue/blob/master/docs/result_ie.PNG "IE Result")



## Note:
Individual components are working fine on all browsers. It can be verified by following steps:
* Navigate to component root
* run `yarn build` or `npm run build`
* serve www/index.html in browser using any server (`npm i -g http-server` and then   `http-server www/index.html`)


import * as ons from 'onsenui';
import 'onsenui/css/onsen-css-components.css';
import 'onsenui/css/onsenui.css';
import * as React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import './../assets/scss/app.scss';
import './../assets/scss/icon-style.css';
import AppComponent from './pages/app';
import { initReduxStore, store } from './store/index';

initReduxStore((err: any, state: any) => {
  if (err) { } else {
    renderApp();

  }
});
let rootElement = document.getElementById('root');
function renderApp(): void {
  ons.ready(() => {
    ons.disableDeviceBackButtonHandler();
    document.addEventListener('backbutton', (e) => {
      if ((window as any).isAlertOrConfirmOpen) {
        return;

      }

    }
      , true);
    window.onerror = function (messageOrEvent, source, lineno, colno, error) {
      console.error(messageOrEvent, source, lineno, colno, error);
    };

    render(
      <div>
        <Provider store={store as any}>
          <AppComponent />
        </Provider>
      </div >, (rootElement as Element));
  });

}
function appLaunchedFromLink(eventData) {

}
declare const universalLinks;
document.addEventListener('deviceready', deviceReady, false);
function deviceReady() {
  //I get called when everything's ready for the plugin to be called!


  // bind deep linking in android
  if (universalLinks) {
    universalLinks.subscribe(null, appLaunchedFromLink);
  }
}

// prevent alerts from plugins
window.alert = (message) => {
  console.log('message', message);
};

function loadJS(url) {
  let script = document.createElement('script');
  script.type = 'text/javascript';
  script.async = true;
  script.defer = true;
  script.src = url;
  document.head.appendChild(script);
}

loadJS(' https://maps.googleapis.com/maps/api/js?key=AIzaSyDSo8kVS5Q-2YSGRxrK2LHTeSApG4SNnmU&libraries=places,maps');

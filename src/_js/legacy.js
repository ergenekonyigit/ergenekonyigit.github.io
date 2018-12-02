// Copyright 2018 Google Inc.
//
// Licensed under the Apache License, Version 2.0 (the “License”);
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
// <https://apache.org/licenses/LICENSE-2.0>.
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an “AS IS” BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

(function() {

  // Navigation toggle.
  var toggle = document.querySelector('#nav-toggle');
  toggle.addEventListener('click', (event) => {
    event.preventDefault();
    document.querySelector('header nav').classList.add('show');
    toggle.classList.add('hide');
  });

  // Install our service worker.
  if ('serviceWorker' in navigator) {
    addEventListener('load', () => {
      navigator.serviceWorker.register('/sw.js');
    });
  }

  // Remove UTM garbage from URLs, to make it less likely such links get shared.
  if (location.search.indexOf('utm_source') > -1) {
    // This site doesn’t use query string parameters anyway, so we can just
    // set the location to `location.pathname` directly.
    history.replaceState({}, '', location.pathname);
  }

  // Google Analytics.
  var UA_ID = 'UA-130273591-1';
  self.dataLayer = [];
  self.gtag = function() {
    self.dataLayer.push(arguments);
  };
  gtag('js', new Date());
  gtag('config', UA_ID, {
    'referrer': document.referrer.split('?')[0],
  });
  var firstScript = document.scripts[0];
  var scriptElement = document.createElement('script');
  scriptElement.src = 'https://www.googletagmanager.com/gtag/js?id=' + UA_ID;
  firstScript.parentNode.insertBefore(scriptElement, firstScript);

}());

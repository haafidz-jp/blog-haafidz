---
title: Lepkom Golang Pertemuan 6
date: '2021-06-30'
tags: ['golang']
draft: false
summary: Membahas Tentang auth pada Frameworks Polymer.
images: []
---

# Kodingan Lepkom Golang Pertemuan 6

Berikut ini adalah kodingan pertemuan 6 pada [vmlepkom](https://kursusvmlepkom.gunadarma.ac.id/) Gunadarma.

jadi file yang dibutuhkan sebagai berikut :

- main.go
- about-page.html
- login-page.html
- message-page.html
- my-app.html
- my-icons.html
- my-view404.html

```go:main.go
package main

import (
	"fmt"
	"log"
	"net/http"
)

func main() {
	port := 9000

	http.Handle("/", http.FileServer(http.Dir("polymer")))
	fmt.Printf("Server Berjalan pada port %d", port)
	log.Fatal(http.ListenAndServe(fmt.Sprintf(":%d", port), nil))
}
```

```html:about-page.html
<!--
@license
Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
-->

<link rel="import" href="../bower_components/polymer/polymer-element.html">
<link rel="import" href="shared-styles.html">

<dom-module id="about-page">
  <template>
    <style include="shared-styles">
      :host {
        display: block;

        padding: 10px;
      }
    </style>

    <div class="card">
      <h1>About</h1>
      <p>
        Nama: Haafidz Nurul Salim
      </p>
      <p>
        Kelas: 3IA23
      </p>


    </div>
  </template>

  <script>
    class aboutpage extends Polymer.Element {
      static get is() { return 'about-page'; }
    }
    window.customElements.define(aboutpage.is, aboutpage);
  </script>
</dom-module>
```

```html:login-page.html
<!--
@license
Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
-->

<link rel="import" href="../bower_components/polymer/polymer-element.html">
<link rel="import" href="shared-styles.html">

<dom-module id="login-page">
  <template>
    <style include="shared-styles">
      :host {
        display: block;

        padding: 10px;
      }
    </style>

    <div class="card">
      <div class="circle">1</div>
      <h1>Login</h1>
      <input type="text" name="username" value="{{username}}" on-input="handleChange" placeholder="Masukan Username">
      <input type="password" name="password" value="{{password}}" on-input="handleChange" placeholder="Ketik Password">
      <button on-click="handleSubmit">Submit </button>
    </div>
  </template>

  <script>
    class LoginPage extends Polymer.Element {
      static get is() { return 'login-page'; }
      static get properties() {
        return {
          username: String,
          password: String,
          isAdmin: {
            type: Boolean,
            notify: true
        }
      }
    }

    handleChange(e) {
      this[e.target.name] = e.target.value
    }

    handleSubmit(e) {
      if(this.username === "admin" && this.password === "admin") {
        this.isAdmin = true
        window.history.pushState({}, null, "/message-page")
        window.dispatchEvent(new CustomEvent("location-changed"))
        return
      }

      this.isAdmin = false
      alert("Mohon Login sebagai Admin untuk melihat Pesan!")
    }
  }

    window.customElements.define(LoginPage.is, LoginPage);
  </script>
</dom-module>
```

```html:message-page.html
<!--
@license
Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
-->

<link rel="import" href="../bower_components/polymer/polymer-element.html">
<link rel="import" href="../bower_components/polymer/lib/elements/dom-if.html">
<link rel="import" href="shared-styles.html">

<dom-module id="message-page">
  <template>
    <style include="shared-styles">
      :host {
        display: block;

        padding: 10px;
      }
    </style>

    <template is="dom-if" if="{{isAdmin}}">
      <div class="card">
        <h1>Ini pesan rahasianya</h1>
        <p>Jangan Kasih tau siapa siapa</p>
      </div>
    </template>
  </template>

  <script>
    class MessagePage extends Polymer.Element {
      static get is() { return 'message-page'; }
    }

    window.customElements.define(MessagePage.is, MessagePage);
  </script>
</dom-module>
```

```html:my-app.html
<!--
@license
Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
-->

<link rel="import" href="../bower_components/polymer/polymer-element.html">
<link rel="import" href="../bower_components/app-layout/app-drawer/app-drawer.html">
<link rel="import" href="../bower_components/app-layout/app-drawer-layout/app-drawer-layout.html">
<link rel="import" href="../bower_components/app-layout/app-header/app-header.html">
<link rel="import" href="../bower_components/app-layout/app-header-layout/app-header-layout.html">
<link rel="import" href="../bower_components/app-layout/app-scroll-effects/app-scroll-effects.html">
<link rel="import" href="../bower_components/app-layout/app-toolbar/app-toolbar.html">
<link rel="import" href="../bower_components/app-route/app-location.html">
<link rel="import" href="../bower_components/app-route/app-route.html">
<link rel="import" href="../bower_components/iron-pages/iron-pages.html">
<link rel="import" href="../bower_components/iron-selector/iron-selector.html">
<link rel="import" href="../bower_components/paper-icon-button/paper-icon-button.html">
<link rel="import" href="my-icons.html">

<link rel="lazy-import" href="login-page.html">
<link rel="lazy-import" href="message-page.html">
<link rel="lazy-import" href="about-page.html">
<link rel="lazy-import" href="my-view404.html">

<dom-module id="my-app">
  <template>
    <style>
      :host {
        --app-primary-color: #4285f4;
        --app-secondary-color: black;

        display: block;
      }

      app-drawer-layout:not([narrow]) [drawer-toggle] {
        display: none;
      }

      app-header {
        color: #fff;
        background-color: var(--app-primary-color);
      }

      app-header paper-icon-button {
        --paper-icon-button-ink-color: white;
      }

      .drawer-list {
        margin: 0 20px;
      }

      .drawer-list a {
        display: block;
        padding: 0 16px;
        text-decoration: none;
        color: var(--app-secondary-color);
        line-height: 40px;
      }

      .drawer-list a.iron-selected {
        color: black;
        font-weight: bold;
      }
    </style>

    <app-location
        route="{{route}}"
        url-space-regex="^[[rootPath]]">
    </app-location>

    <app-route
        route="{{route}}"
        pattern="[[rootPath]]:page"
        data="{{routeData}}"
        tail="{{subroute}}">
    </app-route>

    <app-drawer-layout fullbleed narrow="{{narrow}}">
      <!-- Drawer content -->
      <app-drawer id="drawer" slot="drawer" swipe-open="[[narrow]]">
        <app-toolbar>Menu</app-toolbar>
        <iron-selector selected="[[page]]" attr-for-selected="name" class="drawer-list" role="navigation">
          <a name="login-page" href="[[rootPath]]login-page">Login</a>
          <a name="message-page" href="[[rootPath]]message-page">Messages</a>
          <a name="about-page" href="[[rootPath]]about-page">About</a>
        </iron-selector>
      </app-drawer>

      <!-- Main content -->
      <app-header-layout has-scrolling-region>

        <app-header slot="header" condenses reveals effects="waterfall">
          <app-toolbar>
            <paper-icon-button icon="my-icons:menu" drawer-toggle></paper-icon-button>
            <div main-title>My App</div>
          </app-toolbar>
        </app-header>

        <iron-pages
            selected="[[page]]"
            attr-for-selected="name"
            fallback-selection="view404"
            role="main">
          <login-page is-admin="{{isAdmin}}" name="login-page"></login-page>
          <message-page is-admin="{{isAdmin}}" name="message-page"></message-page>
          <about-page name="about-page"></about-page>
          <my-view404 name="view404"></my-view404>
        </iron-pages>
      </app-header-layout>
    </app-drawer-layout>
  </template>

  <script>
    // Gesture events like tap and track generated from touch will not be
    // preventable, allowing for better scrolling performance.
    Polymer.setPassiveTouchGestures(true);

    class MyApp extends Polymer.Element {
      static get is() { return 'my-app'; }

      static get properties() {
        return {
          page: {
            type: String,
            reflectToAttribute: true,
            observer: '_pageChanged',
          },
          routeData: Object,
          subroute: Object,
          // This shouldn't be neccessary, but the Analyzer isn't picking up
          // Polymer.Element#rootPath
          rootPath: String,
          isAdmin: {
            type: Boolean,
            notify: true
          }
        };
      }

      static get observers() {
        return [
          '_routePageChanged(routeData.page)',
        ];
      }

      _routePageChanged(page) {
        // If no page was found in the route data, page will be an empty string.
        // Default to 'view1' in that case.
        this.page = page || 'login-page';

        // Close a non-persistent drawer when the page & route are changed.
        if (!this.$.drawer.persistent) {
          this.$.drawer.close();
        }
      }

      _pageChanged(page) {
        // Load page import on demand. Show 404 page if fails
        const resolvedPageUrl = this.resolveUrl(page + '.html');
        Polymer.importHref(
            resolvedPageUrl,
            null,
            this._showPage404.bind(this),
            true);
      }

      _showPage404() {
        this.page = 'view404';
      }
    }

    window.customElements.define(MyApp.is, MyApp);
  </script>
</dom-module>
```

```html:my-icons.html
<!--
@license
Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
-->

<link rel="import" href="../bower_components/polymer/polymer-element.html">
<link rel="import" href="../bower_components/app-layout/app-drawer/app-drawer.html">
<link rel="import" href="../bower_components/app-layout/app-drawer-layout/app-drawer-layout.html">
<link rel="import" href="../bower_components/app-layout/app-header/app-header.html">
<link rel="import" href="../bower_components/app-layout/app-header-layout/app-header-layout.html">
<link rel="import" href="../bower_components/app-layout/app-scroll-effects/app-scroll-effects.html">
<link rel="import" href="../bower_components/app-layout/app-toolbar/app-toolbar.html">
<link rel="import" href="../bower_components/app-route/app-location.html">
<link rel="import" href="../bower_components/app-route/app-route.html">
<link rel="import" href="../bower_components/iron-pages/iron-pages.html">
<link rel="import" href="../bower_components/iron-selector/iron-selector.html">
<link rel="import" href="../bower_components/paper-icon-button/paper-icon-button.html">
<link rel="import" href="my-icons.html">

<link rel="lazy-import" href="login-page.html">
<link rel="lazy-import" href="message-page.html">
<link rel="lazy-import" href="about-page.html">
<link rel="lazy-import" href="my-view404.html">

<dom-module id="my-app">
  <template>
    <style>
      :host {
        --app-primary-color: #4285f4;
        --app-secondary-color: black;

        display: block;
      }

      app-drawer-layout:not([narrow]) [drawer-toggle] {
        display: none;
      }

      app-header {
        color: #fff;
        background-color: var(--app-primary-color);
      }

      app-header paper-icon-button {
        --paper-icon-button-ink-color: white;
      }

      .drawer-list {
        margin: 0 20px;
      }

      .drawer-list a {
        display: block;
        padding: 0 16px;
        text-decoration: none;
        color: var(--app-secondary-color);
        line-height: 40px;
      }

      .drawer-list a.iron-selected {
        color: black;
        font-weight: bold;
      }
    </style>

    <app-location
        route="{{route}}"
        url-space-regex="^[[rootPath]]">
    </app-location>

    <app-route
        route="{{route}}"
        pattern="[[rootPath]]:page"
        data="{{routeData}}"
        tail="{{subroute}}">
    </app-route>

    <app-drawer-layout fullbleed narrow="{{narrow}}">
      <!-- Drawer content -->
      <app-drawer id="drawer" slot="drawer" swipe-open="[[narrow]]">
        <app-toolbar>Menu</app-toolbar>
        <iron-selector selected="[[page]]" attr-for-selected="name" class="drawer-list" role="navigation">
          <a name="login-page" href="[[rootPath]]login-page">Login</a>
          <a name="message-page" href="[[rootPath]]message-page">Messages</a>
          <a name="about-page" href="[[rootPath]]about-page">About</a>
        </iron-selector>
      </app-drawer>

      <!-- Main content -->
      <app-header-layout has-scrolling-region>

        <app-header slot="header" condenses reveals effects="waterfall">
          <app-toolbar>
            <paper-icon-button icon="my-icons:menu" drawer-toggle></paper-icon-button>
            <div main-title>My App</div>
          </app-toolbar>
        </app-header>

        <iron-pages
            selected="[[page]]"
            attr-for-selected="name"
            fallback-selection="view404"
            role="main">
          <login-page is-admin="{{isAdmin}}" name="login-page"></login-page>
          <message-page is-admin="{{isAdmin}}" name="message-page"></message-page>
          <about-page name="about-page"></about-page>
          <my-view404 name="view404"></my-view404>
        </iron-pages>
      </app-header-layout>
    </app-drawer-layout>
  </template>

  <script>
    // Gesture events like tap and track generated from touch will not be
    // preventable, allowing for better scrolling performance.
    Polymer.setPassiveTouchGestures(true);

    class MyApp extends Polymer.Element {
      static get is() { return 'my-app'; }

      static get properties() {
        return {
          page: {
            type: String,
            reflectToAttribute: true,
            observer: '_pageChanged',
          },
          routeData: Object,
          subroute: Object,
          // This shouldn't be neccessary, but the Analyzer isn't picking up
          // Polymer.Element#rootPath
          rootPath: String,
          isAdmin: {
            type: Boolean,
            notify: true
          }
        };
      }

      static get observers() {
        return [
          '_routePageChanged(routeData.page)',
        ];
      }

      _routePageChanged(page) {
        // If no page was found in the route data, page will be an empty string.
        // Default to 'view1' in that case.
        this.page = page || 'login-page';

        // Close a non-persistent drawer when the page & route are changed.
        if (!this.$.drawer.persistent) {
          this.$.drawer.close();
        }
      }

      _pageChanged(page) {
        // Load page import on demand. Show 404 page if fails
        const resolvedPageUrl = this.resolveUrl(page + '.html');
        Polymer.importHref(
            resolvedPageUrl,
            null,
            this._showPage404.bind(this),
            true);
      }

      _showPage404() {
        this.page = 'view404';
      }
    }

    window.customElements.define(MyApp.is, MyApp);
  </script>
</dom-module>
```

```html:my-view404.html
<!--
@license
Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
-->

<link rel="import" href="../bower_components/polymer/polymer-element.html">

<dom-module id="my-view404">
  <template>
    <style>
      :host {
        display: block;

        padding: 10px 20px;
      }
    </style>

    Oops you hit a 404. <a href="[[rootPath]]">Head back to home.</a>
  </template>

  <script>
    class MyView404 extends Polymer.Element {
      static get is() { return 'my-view404'; }
      static get properties() {
        return {
          // This shouldn't be neccessary, but the Analyzer isn't picking up
          // Polymer.Element#rootPath
          rootPath: String,
        };
      }
    }

    window.customElements.define(MyView404.is, MyView404);
  </script>
</dom-module>
```

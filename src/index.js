/* jshint browser: true, esversion: 5, asi: true */
/*globals Vue, uibuilder */
// @ts-nocheck
/*
  Copyright (c) 2019 Julian Knight (Totally Information)

  Licensed under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License.
  You may obtain a copy of the License at

  http://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software
  distributed under the License is distributed on an "AS IS" BASIS,
  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  See the License for the specific language governing permissions and
  limitations under the License.
*/
'use strict'

/** @see https://github.com/TotallyInformation/node-red-contrib-uibuilder/wiki/Front-End-Library---available-properties-and-methods */

// eslint-disable-next-line no-unused-vars
var app1 = new Vue({
    el: '#app',
    data: {
        Axial1Direct    : '',
        Axial2Direct    : '',
        Speed           : '',
        DiffExpDirect   : '',
        ECCDirect       : '',
        BRG1YDirect     : '',
        BRG1YGap        : '',
        BRG2YDirect     : '',
        BRG2YGap        : '',
        BRG3YDirect     : '',
        BRG3YGap        : '',
        BRG4YDirect     : '',
        BRG4YGap        : '',
        BRG1XDirect     : '',
        BRG1XGap        : '',
        BRG2XDirect     : '',
        BRG2XGap        : '',
        BRG3XDirect     : '',
        BRG3XGap        : '',
        BRG4XDirect     : '',
        BRG4XGap        : ''
    }, // --- End of data --- //
    computed: {

    }, // --- End of computed --- //
    methods: {
        hLastRcvd: function(){
            var msgRecvd = this.msgRecvd;

            alert(this.syntaxHighlight(msgRecvd));
        },
        // return formatted HTML version of JSON object
        syntaxHighlight: function(json) {
            json = JSON.stringify(json, undefined, 4)

            return json
        }, // --- End of syntaxHighlight --- //
    }, // --- End of methods --- //

    // Available hooks: init,mounted,updated,destroyed
    mounted: function(){
        uibuilder.start()

        var vueApp = this

        // Example of retrieving data from uibuilder
        vueApp.feVersion = uibuilder.get('version')
        uibuilder.onChange('msg', function(newVal){
            //console.info('[indexjs:uibuilder.onChange] msg received from Node-RED server:', newVal)

            switch (newVal.topic){
                case "Axial 1 - Direct":
                    vueApp.Axial1Direct = newVal
                    break;
                case "Axial 2 - Direct":
                    vueApp.Axial2Direct = newVal
                    break;
                case "Speed":
                    vueApp.Speed = newVal
                    break;
                case "Diff. Exp. - Direct":
                    vueApp.DiffExpDirect = newVal
                    break;
                case "ECC":
                    vueApp.ECC = newVal
                    break;
                case "BRG - 1Y - Direct":
                    vueApp.BRG1YDirect = newVal
                    break;
                case "BRG - 1Y - Gap":
                    vueApp.BRG1YGap = newVal
                    break;
                case "BRG - 2Y - Direct":
                    vueApp.BRG2YDirect = newVal
                    break;
                case "BRG - 2Y - Gap":
                    vueApp.BRG2YGap = newVal
                    break;
                case "BRG - 3Y - Direct":
                    vueApp.BRG3YDirect = newVal
                    break;
                case "BRG - 3Y - Gap":
                    vueApp.BRG3YGap = newVal
                    break;
                case "BRG - 4Y - Direct":
                    vueApp.BRG4YDirect = newVal
                    break;
                case "BRG - 4Y - Gap":
                    vueApp.BRG4YGap = newVal
                    break;
                case "BRG - 1X - Direct":
                    vueApp.BRG1XDirect = newVal
                    break;
                case "BRG - 1X - Gap":
                    vueApp.BRG1XGap = newVal
                    break;
                case "BRG - 2X - Direct":
                    vueApp.BRG2XDirect = newVal
                    break;
                case "BRG - 2X - Gap":
                    vueApp.BRG2XGap = newVal
                    break;
                case "BRG - 3X - Direct":
                    vueApp.BRG3XDirect = newVal
                    break;
                case "BRG - 3X - Gap":
                    vueApp.BRG3XGap = newVal
                    break;
                case "BRG - 4X - Direct":
                    vueApp.BRG4XDirect = newVal
                    break;
                case "BRG - 4X - Gap":
                    vueApp.BRG4XGap = newVal
                    break;
            }

            vueApp.msgRecvd = newVal
        })
    }
})


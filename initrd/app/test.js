// Copyright 2014 Runtime.JS project authors
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

(function() {
    "use strict";
    // isolate.env.stdout('', {x: 0, y: 0, clear: true});
    // isolate.env.stdout(' ', {x: 0, y: 0, repeat: 25 * 80});
    // isolate.env.stdout('', {x: 0, y: 0});

    isolate.env.stdout('test ok\n');

    // setTimeout(function() {
    //     console.log('timeout ok');
    // }, 2000);

    // isolate.exit(0);
})();
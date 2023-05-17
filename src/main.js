// const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');
// const currentTheme = localStorage.getItem('theme');

// if (currentTheme) {
//     document.documentElement.setAttribute('data-theme', currentTheme);

//     if (currentTheme === 'dark') {
//         toggleSwitch.checked = true;
//     }
// }

// function switchTheme(e) {
//     if (e.target.checked) {
//         document.documentElement.setAttribute('data-theme', 'dark');
//         localStorage.setItem('theme', 'dark');
//     }
//     else {
//         document.documentElement.setAttribute('data-theme', 'light');
//         localStorage.setItem('theme', 'light');
//     }
// }

// toggleSwitch.addEventListener('change', switchTheme, false);


// (function ($) {
//     "use strict";

//     $.fn.countUp = function (options) {

//         // Defaults
//         var settings = $.extend({
//             'time': 2000,
//             'delay': 10
//         }, options);

//         return this.each(function () {

//             // Store the object
//             var $this = $(this);
//             var $settings = settings;

//             var counterUpper = function () {
//                 if (!$this.data('counterupTo')) {
//                     $this.data('counterupTo', $this.text());
//                 }
//                 var time = parseInt($this.data("counter-time")) > 0 ? parseInt($this.data("counter-time")) : $settings.time;
//                 var delay = parseInt($this.data("counter-delay")) > 0 ? parseInt($this.data("counter-delay")) : $settings.delay;
//                 var divisions = time / delay;
//                 var num = $this.data('counterupTo');
//                 var nums = [num];
//                 var isComma = /[0-9]+,[0-9]+/.test(num);
//                 num = num.replace(/,/g, '');
//                 var isInt = /^[0-9]+$/.test(num);
//                 var isFloat = /^[0-9]+\.[0-9]+$/.test(num);
//                 var decimalPlaces = isFloat ? (num.split('.')[1] || []).length : 0;

//                 // Generate list of incremental numbers to display
//                 for (var i = divisions; i >= 1; i--) {

//                     // Preserve as int if input was int
//                     var newNum = parseInt(Math.round(num / divisions * i));

//                     // Preserve float if input was float
//                     if (isFloat) {
//                         newNum = parseFloat(num / divisions * i).toFixed(decimalPlaces);
//                     }

//                     // Preserve commas if input had commas
//                     if (isComma) {
//                         while (/(\d+)(\d{3})/.test(newNum.toString())) {
//                             newNum = newNum.toString().replace(/(\d+)(\d{3})/, '$1' + ',' + '$2');
//                         }
//                     }

//                     nums.unshift(newNum);
//                 }

//                 $this.data('counterup-nums', nums);
//                 $this.text('0');

//                 // Updates the number until we're done
//                 var f = function () {
//                     $this.text($this.data('counterup-nums').shift());
//                     if ($this.data('counterup-nums').length) {
//                         setTimeout($this.data('counterup-func'), delay);
//                     } else {
//                         delete $this.data('counterup-nums');
//                         $this.data('counterup-nums', null);
//                         $this.data('counterup-func', null);
//                     }
//                 };
//                 $this.data('counterup-func', f);

//                 // Start the count up
//                 setTimeout($this.data('counterup-func'), delay);
//             };

//             // Perform counts when the element gets into view
//             $this.waypoint(counterUpper, { offset: '100%', triggerOnce: true });
//         });

//     };

// })(jQuery);
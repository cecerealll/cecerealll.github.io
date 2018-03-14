(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

$('a').smoothScroll({
    offset: -80
});

$(function () {
    // Cache selectors
    // Cache selectors
    var lastId,
        topMenu = $("#top-menu"),
        topMenuHeight = topMenu.outerHeight() + 15,

    // All list items
    menuItems = topMenu.find("a"),

    // Anchors corresponding to menu items
    scrollItems = menuItems.map(function () {
        var item = $($(this).attr("href"));
        if (item.length) {
            return item;
        }
    });

    // Bind click handler to menu items
    // so we can get a fancy scroll animation
    menuItems.click(function (e) {
        var href = $(this).attr("href"),
            offsetTop = href === "#" ? 0 : $(href).offset().top - topMenuHeight + 1;
        $('html, body').stop().animate({
            scrollTop: offsetTop
        }, 300);
        e.preventDefault();
    });

    // Bind to scroll
    $(window).scroll(function () {
        // Get container scroll position
        var fromTop = $(this).scrollTop() + topMenuHeight;

        // Get id of current scroll item
        var cur = scrollItems.map(function () {
            if ($(this).offset().top < fromTop) return this;
        });
        // Get the id of the current element
        cur = cur[cur.length - 1];
        var id = cur && cur.length ? cur[0].id : "";

        if (lastId !== id) {
            lastId = id;
            // Set/remove active class
            menuItems.parent().removeClass("active").end().filter("[href='#" + id + "']").parent().addClass("active");
        }
    });
});

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJkZXYvc2NyaXB0cy9hcHAuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQ0FBLEVBQUUsR0FBRixFQUFPLFlBQVAsQ0FBb0I7QUFDaEIsWUFBUSxDQUFDO0FBRE8sQ0FBcEI7O0FBTUEsRUFBRSxZQUFVO0FBQ1I7QUFDQTtBQUNBLFFBQUksTUFBSjtBQUFBLFFBQ0ksVUFBVSxFQUFFLFdBQUYsQ0FEZDtBQUFBLFFBRUksZ0JBQWdCLFFBQVEsV0FBUixLQUF3QixFQUY1Qzs7QUFHSTtBQUNBLGdCQUFZLFFBQVEsSUFBUixDQUFhLEdBQWIsQ0FKaEI7O0FBS0k7QUFDQSxrQkFBYyxVQUFVLEdBQVYsQ0FBYyxZQUFZO0FBQ3BDLFlBQUksT0FBTyxFQUFFLEVBQUUsSUFBRixFQUFRLElBQVIsQ0FBYSxNQUFiLENBQUYsQ0FBWDtBQUNBLFlBQUksS0FBSyxNQUFULEVBQWlCO0FBQUUsbUJBQU8sSUFBUDtBQUFjO0FBQ3BDLEtBSGEsQ0FObEI7O0FBV0E7QUFDQTtBQUNBLGNBQVUsS0FBVixDQUFnQixVQUFVLENBQVYsRUFBYTtBQUN6QixZQUFJLE9BQU8sRUFBRSxJQUFGLEVBQVEsSUFBUixDQUFhLE1BQWIsQ0FBWDtBQUFBLFlBQ0ksWUFBWSxTQUFTLEdBQVQsR0FBZSxDQUFmLEdBQW1CLEVBQUUsSUFBRixFQUFRLE1BQVIsR0FBaUIsR0FBakIsR0FBdUIsYUFBdkIsR0FBdUMsQ0FEMUU7QUFFQSxVQUFFLFlBQUYsRUFBZ0IsSUFBaEIsR0FBdUIsT0FBdkIsQ0FBK0I7QUFDM0IsdUJBQVc7QUFEZ0IsU0FBL0IsRUFFRyxHQUZIO0FBR0EsVUFBRSxjQUFGO0FBQ0gsS0FQRDs7QUFTQTtBQUNBLE1BQUUsTUFBRixFQUFVLE1BQVYsQ0FBaUIsWUFBWTtBQUN6QjtBQUNBLFlBQUksVUFBVSxFQUFFLElBQUYsRUFBUSxTQUFSLEtBQXNCLGFBQXBDOztBQUVBO0FBQ0EsWUFBSSxNQUFNLFlBQVksR0FBWixDQUFnQixZQUFZO0FBQ2xDLGdCQUFJLEVBQUUsSUFBRixFQUFRLE1BQVIsR0FBaUIsR0FBakIsR0FBdUIsT0FBM0IsRUFDSSxPQUFPLElBQVA7QUFDUCxTQUhTLENBQVY7QUFJQTtBQUNBLGNBQU0sSUFBSSxJQUFJLE1BQUosR0FBYSxDQUFqQixDQUFOO0FBQ0EsWUFBSSxLQUFLLE9BQU8sSUFBSSxNQUFYLEdBQW9CLElBQUksQ0FBSixFQUFPLEVBQTNCLEdBQWdDLEVBQXpDOztBQUVBLFlBQUksV0FBVyxFQUFmLEVBQW1CO0FBQ2YscUJBQVMsRUFBVDtBQUNBO0FBQ0Esc0JBQ0ssTUFETCxHQUNjLFdBRGQsQ0FDMEIsUUFEMUIsRUFFSyxHQUZMLEdBRVcsTUFGWCxDQUVrQixhQUFhLEVBQWIsR0FBa0IsSUFGcEMsRUFFMEMsTUFGMUMsR0FFbUQsUUFGbkQsQ0FFNEQsUUFGNUQ7QUFHSDtBQUNKLEtBcEJEO0FBcUJILENBL0NEIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIiQoJ2EnKS5zbW9vdGhTY3JvbGwoe1xuICAgIG9mZnNldDogLTgwXG59KTtcblxuXG5cbiQoZnVuY3Rpb24oKXtcbiAgICAvLyBDYWNoZSBzZWxlY3RvcnNcbiAgICAvLyBDYWNoZSBzZWxlY3RvcnNcbiAgICB2YXIgbGFzdElkLFxuICAgICAgICB0b3BNZW51ID0gJChcIiN0b3AtbWVudVwiKSxcbiAgICAgICAgdG9wTWVudUhlaWdodCA9IHRvcE1lbnUub3V0ZXJIZWlnaHQoKSArIDE1LFxuICAgICAgICAvLyBBbGwgbGlzdCBpdGVtc1xuICAgICAgICBtZW51SXRlbXMgPSB0b3BNZW51LmZpbmQoXCJhXCIpLFxuICAgICAgICAvLyBBbmNob3JzIGNvcnJlc3BvbmRpbmcgdG8gbWVudSBpdGVtc1xuICAgICAgICBzY3JvbGxJdGVtcyA9IG1lbnVJdGVtcy5tYXAoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIGl0ZW0gPSAkKCQodGhpcykuYXR0cihcImhyZWZcIikpO1xuICAgICAgICAgICAgaWYgKGl0ZW0ubGVuZ3RoKSB7IHJldHVybiBpdGVtOyB9XG4gICAgICAgIH0pO1xuXG4gICAgLy8gQmluZCBjbGljayBoYW5kbGVyIHRvIG1lbnUgaXRlbXNcbiAgICAvLyBzbyB3ZSBjYW4gZ2V0IGEgZmFuY3kgc2Nyb2xsIGFuaW1hdGlvblxuICAgIG1lbnVJdGVtcy5jbGljayhmdW5jdGlvbiAoZSkge1xuICAgICAgICB2YXIgaHJlZiA9ICQodGhpcykuYXR0cihcImhyZWZcIiksXG4gICAgICAgICAgICBvZmZzZXRUb3AgPSBocmVmID09PSBcIiNcIiA/IDAgOiAkKGhyZWYpLm9mZnNldCgpLnRvcCAtIHRvcE1lbnVIZWlnaHQgKyAxO1xuICAgICAgICAkKCdodG1sLCBib2R5Jykuc3RvcCgpLmFuaW1hdGUoe1xuICAgICAgICAgICAgc2Nyb2xsVG9wOiBvZmZzZXRUb3BcbiAgICAgICAgfSwgMzAwKTtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH0pO1xuXG4gICAgLy8gQmluZCB0byBzY3JvbGxcbiAgICAkKHdpbmRvdykuc2Nyb2xsKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLy8gR2V0IGNvbnRhaW5lciBzY3JvbGwgcG9zaXRpb25cbiAgICAgICAgdmFyIGZyb21Ub3AgPSAkKHRoaXMpLnNjcm9sbFRvcCgpICsgdG9wTWVudUhlaWdodDtcblxuICAgICAgICAvLyBHZXQgaWQgb2YgY3VycmVudCBzY3JvbGwgaXRlbVxuICAgICAgICB2YXIgY3VyID0gc2Nyb2xsSXRlbXMubWFwKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlmICgkKHRoaXMpLm9mZnNldCgpLnRvcCA8IGZyb21Ub3ApXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH0pO1xuICAgICAgICAvLyBHZXQgdGhlIGlkIG9mIHRoZSBjdXJyZW50IGVsZW1lbnRcbiAgICAgICAgY3VyID0gY3VyW2N1ci5sZW5ndGggLSAxXTtcbiAgICAgICAgdmFyIGlkID0gY3VyICYmIGN1ci5sZW5ndGggPyBjdXJbMF0uaWQgOiBcIlwiO1xuXG4gICAgICAgIGlmIChsYXN0SWQgIT09IGlkKSB7XG4gICAgICAgICAgICBsYXN0SWQgPSBpZDtcbiAgICAgICAgICAgIC8vIFNldC9yZW1vdmUgYWN0aXZlIGNsYXNzXG4gICAgICAgICAgICBtZW51SXRlbXNcbiAgICAgICAgICAgICAgICAucGFyZW50KCkucmVtb3ZlQ2xhc3MoXCJhY3RpdmVcIilcbiAgICAgICAgICAgICAgICAuZW5kKCkuZmlsdGVyKFwiW2hyZWY9JyNcIiArIGlkICsgXCInXVwiKS5wYXJlbnQoKS5hZGRDbGFzcyhcImFjdGl2ZVwiKTtcbiAgICAgICAgfVxuICAgIH0pO1xufSkiXX0=

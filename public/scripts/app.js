(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

$('a').smoothScroll({
    offset: -80
});

$(function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJkZXYvc2NyaXB0cy9hcHAuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQ0FBLEVBQUUsR0FBRixFQUFPLFlBQVAsQ0FBb0I7QUFDaEIsWUFBUSxDQUFDO0FBRE8sQ0FBcEI7O0FBTUEsRUFBRSxZQUFVO0FBQ1I7QUFDQSxRQUFJLE1BQUo7QUFBQSxRQUNJLFVBQVUsRUFBRSxXQUFGLENBRGQ7QUFBQSxRQUVJLGdCQUFnQixRQUFRLFdBQVIsS0FBd0IsRUFGNUM7O0FBR0k7QUFDQSxnQkFBWSxRQUFRLElBQVIsQ0FBYSxHQUFiLENBSmhCOztBQUtJO0FBQ0Esa0JBQWMsVUFBVSxHQUFWLENBQWMsWUFBWTtBQUNwQyxZQUFJLE9BQU8sRUFBRSxFQUFFLElBQUYsRUFBUSxJQUFSLENBQWEsTUFBYixDQUFGLENBQVg7QUFDQSxZQUFJLEtBQUssTUFBVCxFQUFpQjtBQUFFLG1CQUFPLElBQVA7QUFBYztBQUNwQyxLQUhhLENBTmxCOztBQVdBO0FBQ0E7QUFDQSxjQUFVLEtBQVYsQ0FBZ0IsVUFBVSxDQUFWLEVBQWE7QUFDekIsWUFBSSxPQUFPLEVBQUUsSUFBRixFQUFRLElBQVIsQ0FBYSxNQUFiLENBQVg7QUFBQSxZQUNJLFlBQVksU0FBUyxHQUFULEdBQWUsQ0FBZixHQUFtQixFQUFFLElBQUYsRUFBUSxNQUFSLEdBQWlCLEdBQWpCLEdBQXVCLGFBQXZCLEdBQXVDLENBRDFFO0FBRUEsVUFBRSxZQUFGLEVBQWdCLElBQWhCLEdBQXVCLE9BQXZCLENBQStCO0FBQzNCLHVCQUFXO0FBRGdCLFNBQS9CLEVBRUcsR0FGSDtBQUdBLFVBQUUsY0FBRjtBQUNILEtBUEQ7O0FBU0E7QUFDQSxNQUFFLE1BQUYsRUFBVSxNQUFWLENBQWlCLFlBQVk7QUFDekI7QUFDQSxZQUFJLFVBQVUsRUFBRSxJQUFGLEVBQVEsU0FBUixLQUFzQixhQUFwQzs7QUFFQTtBQUNBLFlBQUksTUFBTSxZQUFZLEdBQVosQ0FBZ0IsWUFBWTtBQUNsQyxnQkFBSSxFQUFFLElBQUYsRUFBUSxNQUFSLEdBQWlCLEdBQWpCLEdBQXVCLE9BQTNCLEVBQ0ksT0FBTyxJQUFQO0FBQ1AsU0FIUyxDQUFWO0FBSUE7QUFDQSxjQUFNLElBQUksSUFBSSxNQUFKLEdBQWEsQ0FBakIsQ0FBTjtBQUNBLFlBQUksS0FBSyxPQUFPLElBQUksTUFBWCxHQUFvQixJQUFJLENBQUosRUFBTyxFQUEzQixHQUFnQyxFQUF6Qzs7QUFFQSxZQUFJLFdBQVcsRUFBZixFQUFtQjtBQUNmLHFCQUFTLEVBQVQ7QUFDQTtBQUNBLHNCQUNLLE1BREwsR0FDYyxXQURkLENBQzBCLFFBRDFCLEVBRUssR0FGTCxHQUVXLE1BRlgsQ0FFa0IsYUFBYSxFQUFiLEdBQWtCLElBRnBDLEVBRTBDLE1BRjFDLEdBRW1ELFFBRm5ELENBRTRELFFBRjVEO0FBR0g7QUFDSixLQXBCRDtBQXFCSCxDQTlDRCIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCIkKCdhJykuc21vb3RoU2Nyb2xsKHtcbiAgICBvZmZzZXQ6IC04MFxufSk7XG5cblxuXG4kKGZ1bmN0aW9uKCl7XG4gICAgLy8gQ2FjaGUgc2VsZWN0b3JzXG4gICAgdmFyIGxhc3RJZCxcbiAgICAgICAgdG9wTWVudSA9ICQoXCIjdG9wLW1lbnVcIiksXG4gICAgICAgIHRvcE1lbnVIZWlnaHQgPSB0b3BNZW51Lm91dGVySGVpZ2h0KCkgKyAxNSxcbiAgICAgICAgLy8gQWxsIGxpc3QgaXRlbXNcbiAgICAgICAgbWVudUl0ZW1zID0gdG9wTWVudS5maW5kKFwiYVwiKSxcbiAgICAgICAgLy8gQW5jaG9ycyBjb3JyZXNwb25kaW5nIHRvIG1lbnUgaXRlbXNcbiAgICAgICAgc2Nyb2xsSXRlbXMgPSBtZW51SXRlbXMubWFwKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBpdGVtID0gJCgkKHRoaXMpLmF0dHIoXCJocmVmXCIpKTtcbiAgICAgICAgICAgIGlmIChpdGVtLmxlbmd0aCkgeyByZXR1cm4gaXRlbTsgfVxuICAgICAgICB9KTtcblxuICAgIC8vIEJpbmQgY2xpY2sgaGFuZGxlciB0byBtZW51IGl0ZW1zXG4gICAgLy8gc28gd2UgY2FuIGdldCBhIGZhbmN5IHNjcm9sbCBhbmltYXRpb25cbiAgICBtZW51SXRlbXMuY2xpY2soZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgdmFyIGhyZWYgPSAkKHRoaXMpLmF0dHIoXCJocmVmXCIpLFxuICAgICAgICAgICAgb2Zmc2V0VG9wID0gaHJlZiA9PT0gXCIjXCIgPyAwIDogJChocmVmKS5vZmZzZXQoKS50b3AgLSB0b3BNZW51SGVpZ2h0ICsgMTtcbiAgICAgICAgJCgnaHRtbCwgYm9keScpLnN0b3AoKS5hbmltYXRlKHtcbiAgICAgICAgICAgIHNjcm9sbFRvcDogb2Zmc2V0VG9wXG4gICAgICAgIH0sIDMwMCk7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB9KTtcblxuICAgIC8vIEJpbmQgdG8gc2Nyb2xsXG4gICAgJCh3aW5kb3cpLnNjcm9sbChmdW5jdGlvbiAoKSB7XG4gICAgICAgIC8vIEdldCBjb250YWluZXIgc2Nyb2xsIHBvc2l0aW9uXG4gICAgICAgIHZhciBmcm9tVG9wID0gJCh0aGlzKS5zY3JvbGxUb3AoKSArIHRvcE1lbnVIZWlnaHQ7XG5cbiAgICAgICAgLy8gR2V0IGlkIG9mIGN1cnJlbnQgc2Nyb2xsIGl0ZW1cbiAgICAgICAgdmFyIGN1ciA9IHNjcm9sbEl0ZW1zLm1hcChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZiAoJCh0aGlzKS5vZmZzZXQoKS50b3AgPCBmcm9tVG9wKVxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9KTtcbiAgICAgICAgLy8gR2V0IHRoZSBpZCBvZiB0aGUgY3VycmVudCBlbGVtZW50XG4gICAgICAgIGN1ciA9IGN1cltjdXIubGVuZ3RoIC0gMV07XG4gICAgICAgIHZhciBpZCA9IGN1ciAmJiBjdXIubGVuZ3RoID8gY3VyWzBdLmlkIDogXCJcIjtcblxuICAgICAgICBpZiAobGFzdElkICE9PSBpZCkge1xuICAgICAgICAgICAgbGFzdElkID0gaWQ7XG4gICAgICAgICAgICAvLyBTZXQvcmVtb3ZlIGFjdGl2ZSBjbGFzc1xuICAgICAgICAgICAgbWVudUl0ZW1zXG4gICAgICAgICAgICAgICAgLnBhcmVudCgpLnJlbW92ZUNsYXNzKFwiYWN0aXZlXCIpXG4gICAgICAgICAgICAgICAgLmVuZCgpLmZpbHRlcihcIltocmVmPScjXCIgKyBpZCArIFwiJ11cIikucGFyZW50KCkuYWRkQ2xhc3MoXCJhY3RpdmVcIik7XG4gICAgICAgIH1cbiAgICB9KTtcbn0pIl19

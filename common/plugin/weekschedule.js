(function ($) {
  'use strict';

  var DayScheduleSelector = function (el, options) {
    this.$el = $(el);
    this.options = $.extend({}, DayScheduleSelector.DEFAULTS, options);
    this.render();
    this.attachEvents();
    this.$selectingStart = null;
  }

  DayScheduleSelector.DEFAULTS = {
    days        : [0, 1, 2, 3, 4, 5, 6],  // Sun - Sat
    startTime   : '00:00',                // HH:mm format
    endTime     : '24:00',                // HH:mm format
    interval    : 60,                     // minutes
    stringDays  : ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
    template    : '<div class="day-schedule-selector">'         +
                    '<table class="schedule-table">'            +
                      '<thead class="schedule-header"></thead>' +
                      '<tbody class="schedule-rows"></tbody>'   +
                    '</table>'                                  +
                  '<div>'
  };

  /**
   * Render the calendar UI
   * @public
   */
  DayScheduleSelector.prototype.render = function () {
    this.$el.html(this.options.template);
    this.renderHeader();
    this.renderRows();
  };

  /**
   * Render the calendar header
   * @public
   */
  DayScheduleSelector.prototype.renderHeader = function () {
    var stringDays = this.options.stringDays
      , days = this.options.days
      , html = '';

    $.each(days, function (i, _) { html += '<th class="selectallday" day="'+i+'"><a>' + (stringDays[i] || '') + '</a></th>'; });
    this.$el.find('.schedule-header').html('<tr><th>All</th>' + html + '</tr>');
  };

  /**
   * Render the calendar rows, including the time slots and labels
   * @public
   */
  DayScheduleSelector.prototype.renderRows = function () {
    var start = this.options.startTime
      , end = this.options.endTime
      , interval = this.options.interval
      , days = this.options.days
      , $el = this.$el.find('.schedule-rows');

    $.each(generateDates(start, end, interval), function (i, d) {
      var daysInARow = $.map(new Array(days.length), function (_, i) {
        return '<td class="time-slot" data-time="' + hhmm(d) + '" data-day="' + days[i] + '"></td>'
      }).join();

      daysInARow=daysInARow.replace(/,/g, '');
      $el.append('<tr><td class="time-label" hourmin="'+hhmm(d)+'"><a>' + hmmAmPm(d) + '</a></td>' + daysInARow + '</tr>');
    });
  };

  /**
   * Is the day schedule selector in selecting mode?
   * @public
   */
  DayScheduleSelector.prototype.isSelecting = function () {
    return !!this.$selectingStart;
  }

  DayScheduleSelector.prototype.select = function ($slot) { $slot.attr('data-selected', 'selected'); }
  DayScheduleSelector.prototype.deselect = function ($slot) { $slot.removeAttr('data-selected'); }

  function isSlotSelected($slot) { return $slot.is('[data-selected]'); }
  function isSlotSelecting($slot) { return $slot.is('[data-selecting]'); }
  function setdata(schedule) {
    var daynumber=0;
    var $el = $(this);
    $.each(schedule,function (index,theday) {
        $.each(theday.split(','),function (timeindex,timeslot) {
            var timestr = '';
            if(timeindex<10)
                timestr = '0';
            timestr += timeindex + ':00';
            if(timeslot==0)
                $el.find('.time-slot[data-day="' + daynumber + '"].time-slot[data-time="' + timestr + '"]').removeAttr('data-selected');
            else
                $el.find('.time-slot[data-day="' + daynumber + '"].time-slot[data-time="' + timestr + '"]').attr('data-selected', 'selected');
        });
        daynumber++; 
    });    
  }
  function getdata() {
    var $el = $(this);
    var schedule = {};
    for(var theday=0;theday<7;theday++) {
        var selectstr = '';
        for(var timeindex=0;timeindex<24;timeindex++) {
            var timestr = '';
            if(timeindex<10)
                timestr = '0';
            timestr += timeindex + ':00';
            if($el.find('.time-slot[data-day="' + theday + '"].time-slot[data-time="' + timestr + '"]').is('[data-selected]')) {
              if(selectstr != '')
                selectstr+=',1';
              else
                selectstr+='1';
            } else {
              if(selectstr != '')
                selectstr+=',0';
              else
                selectstr+='0';
            }
        }
        if(theday==0) schedule.sun = selectstr;
        if(theday==1) schedule.mon = selectstr;
        if(theday==2) schedule.tus = selectstr;
        if(theday==3) schedule.wen = selectstr;
        if(theday==4) schedule.thr = selectstr;
        if(theday==5) schedule.fri = selectstr;
        if(theday==6) schedule.sat = selectstr;
    } 
    return schedule;   
  }

  /**
   * Get the selected time slots given a starting and a ending slot
   * @private
   * @returns {Array} An array of selected time slots
   */
  function getSelection(plugin, $a, $b) {
    var $slots, small, large, temp;
    if (!$a.hasClass('time-slot') || !$b.hasClass('time-slot') ||
        ($a.data('day') != $b.data('day'))) { return []; }
    $slots = plugin.$el.find('.time-slot[data-day="' + $a.data('day') + '"]');
    small = $slots.index($a); large = $slots.index($b);
    if (small > large) { temp = small; small = large; large = temp; }
    return $slots.slice(small, large + 1);
  }

  DayScheduleSelector.prototype.attachEvents = function () {
    var plugin = this
      , options = this.options
      , $slots
      , mode = "selecting";

    this.$el.on('click', '.time-slot', function () {
      var day = $(this).data('day');
      if (!plugin.isSelecting()) {  // if we are not in selecting mode
        if (isSlotSelected($(this))) { 
          plugin.deselect($(this)); 
          plugin.$selectingStart = $(this);
          $(this).attr('data-selecting', 'unselecting');
          mode = "selected";
        } else {  // then start selecting
          plugin.$selectingStart = $(this);
          $(this).attr('data-selecting', 'selecting');
          mode = "selecting";
          //plugin.$el.find('.time-slot').attr('data-disabled', 'disabled');
          //plugin.$el.find('.time-slot[data-day="' + day + '"]').removeAttr('data-disabled');
        }
      } else {  // if we are in selecting mode
        //if (day == plugin.$selectingStart.data('day')) {  // if clicking on the same day column
          // then end of selection
          //plugin.$el.find('.time-slot[data-day="' + day + '"]').filter('[data-selecting]')
          if(mode=="selecting")
            plugin.$el.find('.time-slot').filter('[data-selecting]')
              .attr('data-selected', 'selected').removeAttr('data-selecting');
          else
            plugin.$el.find('.time-slot').filter('[data-selecting]')
              .removeAttr('data-selected').removeAttr('data-selecting');
          //plugin.$el.find('.time-slot').removeAttr('data-disabled');
          plugin.$el.trigger('selected.artsy.dayScheduleSelector', [getSelection(plugin, plugin.$selectingStart, $(this))]);
          plugin.$selectingStart = null;
        //}
      }
    });

    this.$el.on('mouseover', '.time-slot', function () {
      var $slots, day, start, end, temp,startday,endday,daystr="";
      if (plugin.isSelecting()) {  // if we are in selecting mode
        startday = plugin.$selectingStart.data('day');
        endday = $(this).data('day');
        //day = plugin.$selectingStart.data('day');
        if(Number(startday)>Number(endday)) {
          for(day=endday;day<=startday;day++) {
            if(daystr!="")
              daystr+=",";
            daystr+='.time-slot[data-day="'+day+'"]';
          }
        } else {
          for(day=startday;day<=endday;day++) {
            if(daystr!="")
              daystr+=",";
            daystr+='.time-slot[data-day="'+day+'"]';
          }
        }
        $slots = plugin.$el.find(daystr);
        $slots.filter('[data-selecting]').removeAttr('data-selecting');
        start = $slots.index(plugin.$selectingStart);
        end = $slots.index(this);
        if (end < 0) return;  // not hovering on the same column
        if (start > end) { temp = start; start = end; end = temp; }
        if(mode=="selecting")
          $slots.slice(start, end + 1).attr('data-selecting', 'selecting');
        else
          $slots.slice(start, end + 1).attr('data-selecting', 'unselecting');
      }
    });
    this.$el.on('click', '.selectallday', function () {
        plugin.$el.find('.time-slot[data-day="' + $(this).attr('day') + '"]').attr('data-selected', 'selected');
    });
    this.$el.on('click', '.time-label', function () {
        plugin.$el.find('.time-slot[data-time="' + $(this).attr('hourmin') + '"]').attr('data-selected', 'selected');
    });
};

  /**
   * Serialize the selections
   * @public
   * @returns {Object} An object containing the selections of each day, e.g.
   *    {
   *      0: [],
   *      1: [["15:00", "16:30"]],
   *      2: [],
   *      3: [],
   *      5: [["09:00", "12:30"], ["15:00", "16:30"]],
   *      6: []
   *    }
   */
  DayScheduleSelector.prototype.serialize = function () {
    var plugin = this
      , selections = {};

    $.each(this.options.days, function (_, v) {
      var start, end;
      start = end = false; selections[v] = [];
      plugin.$el.find(".time-slot[data-day='" + v + "']").each(function () {
        // Start of selection
        if (isSlotSelected($(this)) && !start) {
          start = $(this).data('time');
        }

        // End of selection (I am not selected, so select until my previous one.)
        if (!isSlotSelected($(this)) && !!start) {
          end = $(this).data('time');
        }

        // End of selection (I am the last one :) .)
        if (isSlotSelected($(this)) && !!start && $(this).is(".time-slot[data-day='" + v + "']:last")) {
          end = secondsSinceMidnightToHhmm(
            hhmmToSecondsSinceMidnight($(this).data('time')) + plugin.options.interval * 60);
        }

        if (!!end) { selections[v].push([start, end]); start = end = false; }
      });
    })
    return selections;
  };

  /**
   * Deserialize the schedule and render on the UI
   * @public
   * @param {Object} schedule An object containing the schedule of each day, e.g.
   *    {
   *      0: [],
   *      1: [["15:00", "16:30"]],
   *      2: [],
   *      3: [],
   *      5: [["09:00", "12:30"], ["15:00", "16:30"]],
   *      6: []
   *    }
   */
  DayScheduleSelector.prototype.deserialize = function (schedule) {
    var plugin = this, i;
    $.each(schedule, function(d, ds) {
      var $slots = plugin.$el.find('.time-slot[data-day="' + d + '"]');
      $.each(ds, function(_, s) {
        for (i = 0; i < $slots.length; i++) {
          if ($slots.eq(i).data('time') >= s[1]) { break; }
          if ($slots.eq(i).data('time') >= s[0]) { plugin.select($slots.eq(i)); }
        }
      })
    });
  };

  // DayScheduleSelector Plugin Definition
  // =====================================

  function Plugin(option) {
    return this.each(function (){
      var $this   = $(this)
        , data    = $this.data('artsy.dayScheduleSelector')
        , options = typeof option == 'object' && option;

      if (!data) {
        $this.data('artsy.dayScheduleSelector', (data = new DayScheduleSelector(this, options)));
      }
    })
  }

  $.fn.dayScheduleSelector = Plugin;
  $.fn.setdata = setdata;
  $.fn.getdata = getdata;

  /**
   * Generate Date objects for each time slot in a day
   * @private
   * @param {String} start Start time in HH:mm format, e.g. "08:00"
   * @param {String} end End time in HH:mm format, e.g. "21:00"
   * @param {Number} interval Interval of each time slot in minutes, e.g. 30 (minutes)
   * @returns {Array} An array of Date objects representing the start time of the time slots
   */
  function generateDates(start, end, interval) {
    var numOfRows = Math.ceil(timeDiff(start, end) / interval);
    return $.map(new Array(numOfRows), function (_, i) {
      // need a dummy date to utilize the Date object
      return new Date(new Date(2000, 0, 1, start.split(':')[0], start.split(':')[1]).getTime() + i * interval * 60000);
    });
  }

  /**
   * Return time difference in minutes
   * @private
   */
  function timeDiff(start, end) {   // time in HH:mm format
    // need a dummy date to utilize the Date object
    return (new Date(2000, 0, 1, end.split(':')[0], end.split(':')[1]).getTime() -
            new Date(2000, 0, 1, start.split(':')[0], start.split(':')[1]).getTime()) / 60000;
  }

  /**
   * Convert a Date object to time in H:mm format with am/pm
   * @private
   * @returns {String} Time in H:mm format with am/pm, e.g. '9:30am'
   */
  function hmmAmPm(date) {
    var hours = date.getHours()
      , minutes = date.getMinutes()
      // , ampm = hours >= 12 ? 'pm' : 'am';
      , ampm = hours >= 12 ? '' : '';
    return hours + ':' + ('0' + minutes).slice(-2) + ampm;
  }

  /**
   * Convert a Date object to time in HH:mm format
   * @private
   * @returns {String} Time in HH:mm format, e.g. '09:30'
   */
  function hhmm(date) {
    var hours = date.getHours()
      , minutes = date.getMinutes();
    return ('0' + hours).slice(-2) + ':' + ('0' + minutes).slice(-2);
  }

  function hhmmToSecondsSinceMidnight(hhmm) {
    var h = hhmm.split(':')[0]
      , m = hhmm.split(':')[1];
    return parseInt(h, 10) * 60 * 60 + parseInt(m, 10) * 60;
  }

  /**
   * Convert seconds since midnight to HH:mm string, and simply
   * ignore the seconds.
   */
  function secondsSinceMidnightToHhmm(seconds) {
    var minutes = Math.floor(seconds / 60);
    return ('0' + Math.floor(minutes / 60)).slice(-2) + ':' +
           ('0' + (minutes % 60)).slice(-2);
  }

  // Expose some utility functions
  window.DayScheduleSelector = {
    ssmToHhmm: secondsSinceMidnightToHhmm,
    hhmmToSsm: hhmmToSecondsSinceMidnight
  };

})(jQuery);

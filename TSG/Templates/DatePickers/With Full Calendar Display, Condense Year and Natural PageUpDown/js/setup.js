$A.import(["Animate", "DatePicker"], { defer: true }, function() {
  $A.setDatePicker({
    // Unique ID for the date picker instance
    // After instantiation, can be referenced using: var DC = $A("UniqueCalendarId");
    id: "UniqueCalendarId",

    // Icon triggering element
    toggle: $A.get("dateIcon"),

    // Native or simulated input element
    input: $A.get("date"),

    style: { position: "absolute", zIndex: 1, display: "none" },
    animate: {
      onRender: function(dc, wrapper, complete) {
        Velocity(wrapper, "transition.fadeIn", {
          complete: function() {
            complete();
          }
        });
      },
      onRemove: function(dc, wrapper, complete) {
        Velocity(wrapper, "transition.fadeOut", {
          complete: function() {
            complete();
          }
        });
      }
    },

    // Condense the year display by removing the year nav buttons
    condenseYear: true,

    // Draw the full calendar, including days in the previous and next months
    drawFullCalendar: true,

    // Set class for the calendar container
    className: "calendar"
  });
});

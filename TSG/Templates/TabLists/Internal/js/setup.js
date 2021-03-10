$A.import(["Animate", "TabList"], { defer: true }, function() {
  $A.setTabList('*[role="tablist"] *[role="tab"]', {
    style: { display: "none" },
    animate: {
      onRender: function(dc, wrapper, complete) {
        Velocity(wrapper, "transition.slideUpIn", {
          complete: function() {
            complete();
          }
        });
      },
      onRemove: function(dc, wrapper, complete) {
        Velocity(wrapper, "transition.slideUpOut", {
          complete: function() {
            complete();
          }
        });
      }
    },

    isToggle: false,
    toggleClass: "active",
    toggleHide: true
  });
});

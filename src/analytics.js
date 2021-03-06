import * as $ from "jquery";

const createAnalytics = () => {
  let counter = 0;
  const listener = () => counter++;
  $(document).on("click", listener);
  let destroyed = false;

  return {
    destroy: () => {
      $(document).off("click", listener);
      destroyed = true;
    },
    getClicks: () => {
      if (destroyed) {
        return `Analytics is destroyed. Total clicks = ${counter}`;
      }
      return counter;
    },
  };
};

window.analytics = createAnalytics();

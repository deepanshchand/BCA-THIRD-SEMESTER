// Animations removed: typing and reveal-on-scroll scripts intentionally omitted.

// Simple form stub
(function () {
  const form = document.querySelector("form");
  if (!form) return;
  form.addEventListener("submit", function (e) {
    if (!form.checkValidity()) {
      e.preventDefault();
      e.stopPropagation();
      form.classList.add("was-validated");
    } else {
      e.preventDefault();
      alert(
        "Thanks — this demo page does not send messages. Integrate a backend to enable this.",
      );
    }
  });
})();
// About section reveal & animate skill bars
(function () {
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const el = entry.target;
          el.querySelectorAll(".fade-up").forEach((n) =>
            n.classList.add("in-view"),
          );
          el.querySelectorAll(".feature-pill").forEach((n) =>
            n.classList.add("in-view"),
          );
          // animate small skill bars inside left column
          el.querySelectorAll(".skill-bar").forEach((bar) => {
            const target =
              bar.getAttribute("data-target") || bar.dataset.target || 0;
            bar.style.width = parseInt(target, 10) + "%";
          });
          // also animate progress bars in the right card
          el.querySelectorAll(".progress-bar[data-target]").forEach((pb) => {
            const t = pb.getAttribute("data-target");
            pb.style.width = (t || 0) + "%";
          });
          io.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.18 },
  );

  const about = document.querySelector("#about .about-card");
  if (about) io.observe(about);
})();

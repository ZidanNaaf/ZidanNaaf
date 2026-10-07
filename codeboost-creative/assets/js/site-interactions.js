(function () {
  var supportsHover = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------- Scroll progress (event-driven, 0 cost saat diam) ---------- */
  var scrollProgressBar = document.getElementById("scroll-progress-bar");
  function updateScrollProgress() {
    if (!scrollProgressBar) return;
    var scrollTop = window.scrollY || document.documentElement.scrollTop;
    var docHeight = document.documentElement.scrollHeight - window.innerHeight;
    var progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
    scrollProgressBar.style.width = progress + "%";
  }
  window.addEventListener("scroll", updateScrollProgress, { passive: true });
  window.addEventListener("resize", updateScrollProgress, { passive: true });
  updateScrollProgress();

  /* ---------- Scroll reveal (event-driven via observer) ---------- */
  var revealEls = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && !reduceMotion) {
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-in");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -60px 0px" }
    );
    revealEls.forEach(function (el) {
      io.observe(el);
    });
  } else {
    revealEls.forEach(function (el) {
      el.classList.add("is-in");
    });
  }

  if (!supportsHover) return;
  document.body.classList.add("has-custom-cursor");

  /* ---------- Cursor: ikut langsung tanpa loop (hanya saat mouse gerak) ---------- */
  var cursorDot = document.getElementById("cursor-dot");
  var cursorRing = document.getElementById("cursor-ring");
  var cursorPreview = document.getElementById("cursor-preview");
  var previewImg = cursorPreview ? cursorPreview.querySelector("img") : null;
  var previewCaption = cursorPreview ? cursorPreview.querySelector(".preview-caption") : null;

  window.addEventListener(
    "mousemove",
    function (e) {
      var t = "translate3d(" + e.clientX + "px," + e.clientY + "px,0) translate(-50%,-50%)";
      if (cursorDot) cursorDot.style.transform = t;
      if (cursorRing) cursorRing.style.transform = t;
      if (cursorPreview) {
        cursorPreview.style.transform =
          "translate3d(" + e.clientX + "px," + (e.clientY - 26) + "px,0) translate(-50%,-50%)";
      }
    },
    { passive: true }
  );

  document.addEventListener("pointerover", function (e) {
    var target = e.target;
    if (!(target instanceof Element)) return;

    var previewEl = target.closest("[data-cursor-preview], [data-cursor-label]");
    if (previewEl && cursorPreview) {
      var src = previewEl.getAttribute("data-cursor-preview");
      var label = previewEl.getAttribute("data-cursor-label");
      var caption = previewEl.getAttribute("data-cursor-caption");
      var previewCard = cursorPreview.querySelector(".preview-card");
      if (cursorRing) cursorRing.classList.add("is-preview");

      if (src) {
        previewImg.style.display = "";
        previewImg.src = src;
        var existingBadge = previewCard.querySelector(".preview-badge");
        if (existingBadge) existingBadge.remove();
      } else if (label) {
        previewImg.style.display = "none";
        var badge = previewCard.querySelector(".preview-badge");
        if (!badge) {
          badge = document.createElement("div");
          badge.className = "preview-badge";
          previewCard.insertBefore(badge, previewCaption);
        }
        badge.textContent = label;
      }
      if (previewCaption) previewCaption.textContent = caption || "Lihat Detail";
      cursorPreview.classList.add("is-visible");
      return;
    }

    if (target.closest("a, button, [role='button'], .glightbox")) {
      if (cursorRing) {
        cursorRing.classList.add("is-link");
        cursorRing.classList.remove("is-text");
      }
      return;
    }

    if (target.closest("h1, h2, h3, h4, p")) {
      if (cursorRing) {
        cursorRing.classList.add("is-text");
        cursorRing.classList.remove("is-link");
      }
    }
  });

  document.addEventListener("pointerout", function (e) {
    var target = e.target;
    if (!(target instanceof Element)) return;

    if (target.closest("[data-cursor-preview], [data-cursor-label]")) {
      if (cursorRing) cursorRing.classList.remove("is-preview");
      if (cursorPreview) cursorPreview.classList.remove("is-visible");
    }
    if (target.closest("a, button, [role='button'], .glightbox")) {
      if (cursorRing) cursorRing.classList.remove("is-link");
    }
    if (target.closest("h1, h2, h3, h4, p")) {
      if (cursorRing) cursorRing.classList.remove("is-text");
    }
  });

  document.addEventListener("mouseleave", function () {
    if (cursorDot) cursorDot.style.opacity = "0";
    if (cursorRing) cursorRing.style.opacity = "0";
  });
  document.addEventListener("mouseenter", function () {
    if (cursorDot) cursorDot.style.opacity = "";
    if (cursorRing) cursorRing.style.opacity = "";
  });
})();

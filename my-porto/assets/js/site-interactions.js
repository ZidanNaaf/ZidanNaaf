(function () {
  var supportsHover = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

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

  var blob1 = document.getElementById("blob-1");
  var blob2 = document.getElementById("blob-2");
  var blob3 = document.getElementById("blob-3");
  var cursorDot = document.getElementById("cursor-dot");
  var cursorRing = document.getElementById("cursor-ring");
  var cursorPreview = document.getElementById("cursor-preview");
  var previewImg = cursorPreview ? cursorPreview.querySelector("img") : null;
  var previewCaption = cursorPreview ? cursorPreview.querySelector(".preview-caption") : null;

  var mouseX = window.innerWidth / 2;
  var mouseY = window.innerHeight / 2;
  var blobX = 0, blobY = 0, blobTX = 0, blobTY = 0;
  var dotX = mouseX, dotY = mouseY, ringX = mouseX, ringY = mouseY;
  var lastMouseX = mouseX, lastMouseY = mouseY;
  var startTime = performance.now();

  if (supportsHover) {
    document.body.classList.add("has-custom-cursor");
  }

  window.addEventListener(
    "mousemove",
    function (e) {
      mouseX = e.clientX;
      mouseY = e.clientY;
      var relX = (e.clientX / window.innerWidth - 0.5) * 2;
      var relY = (e.clientY / window.innerHeight - 0.5) * 2;
      blobTX = relX * 70;
      blobTY = relY * 70;
    },
    { passive: true }
  );

  function tick(now) {
    var elapsed = (now - startTime) / 1000;

    if (!reduceMotion) {
      var driftX = Math.sin(elapsed * 0.25) * 22;
      var driftY = Math.cos(elapsed * 0.2) * 18;
      blobX += (blobTX - blobX) * 0.05;
      blobY += (blobTY - blobY) * 0.05;
      if (blob1) blob1.style.transform = "translate3d(" + (blobX + driftX) + "px," + (blobY + driftY) + "px,0)";
      if (blob2) blob2.style.transform = "translate3d(" + (-blobX - driftY) + "px," + (-blobY - driftX) + "px,0)";
      if (blob3)
        blob3.style.transform =
          "translate3d(" + (blobX * 0.6 - driftY) + "px," + (blobY * 0.6 + driftX) + "px,0)";
    }

    if (supportsHover) {
      var vx = mouseX - lastMouseX;
      var vy = mouseY - lastMouseY;
      lastMouseX = mouseX;
      lastMouseY = mouseY;
      var speed = Math.min(Math.hypot(vx, vy), 60);
      var stretch = 1 + speed * 0.008;

      dotX += (mouseX - dotX) * 0.55;
      dotY += (mouseY - dotY) * 0.55;
      ringX += (mouseX - ringX) * 0.25;
      ringY += (mouseY - ringY) * 0.25;

      cursorDot.style.transform = "translate3d(" + dotX + "px," + dotY + "px,0) translate(-50%,-50%)";
      cursorRing.style.transform =
        "translate3d(" + ringX + "px," + ringY + "px,0) translate(-50%,-50%) scale(" + stretch + ")";

      cursorPreview.style.transform =
        "translate3d(" + ringX + "px," + (ringY - 26) + "px,0) translate(-50%,-50%)";
    }

    requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);

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

  document.addEventListener(
    "mousemove",
    function (e) {
      var card = e.target instanceof Element ? e.target.closest(".spotlight-card") : null;
      if (!card) return;
      var rect = card.getBoundingClientRect();
      var mx = ((e.clientX - rect.left) / rect.width) * 100;
      var my = ((e.clientY - rect.top) / rect.height) * 100;
      card.style.setProperty("--mx", mx + "%");
      card.style.setProperty("--my", my + "%");
    },
    { passive: true }
  );

  if (!supportsHover) return;

  document.addEventListener("pointerover", function (e) {
    var target = e.target;
    if (!(target instanceof Element)) return;

    var previewEl = target.closest("[data-cursor-preview], [data-cursor-label]");
    if (previewEl) {
      var src = previewEl.getAttribute("data-cursor-preview");
      var label = previewEl.getAttribute("data-cursor-label");
      var caption = previewEl.getAttribute("data-cursor-caption");
      var previewCard = cursorPreview.querySelector(".preview-card");
      cursorRing.classList.add("is-preview");

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
      cursorRing.classList.add("is-link");
      cursorRing.classList.remove("is-text");
      return;
    }

    if (target.closest("h1, h2, h3, h4, p")) {
      cursorRing.classList.add("is-text");
      cursorRing.classList.remove("is-link");
    }
  });

  document.addEventListener("pointerout", function (e) {
    var target = e.target;
    if (!(target instanceof Element)) return;

    if (target.closest("[data-cursor-preview], [data-cursor-label]")) {
      cursorRing.classList.remove("is-preview");
      cursorPreview.classList.remove("is-visible");
    }
    if (target.closest("a, button, [role='button'], .glightbox")) {
      cursorRing.classList.remove("is-link");
    }
    if (target.closest("h1, h2, h3, h4, p")) {
      cursorRing.classList.remove("is-text");
    }
  });

  document.addEventListener("mouseleave", function () {
    cursorDot.style.opacity = "0";
    cursorRing.style.opacity = "0";
  });
  document.addEventListener("mouseenter", function () {
    cursorDot.style.opacity = "";
    cursorRing.style.opacity = "";
  });
})();

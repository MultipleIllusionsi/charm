(function() {
  document.addEventListener("DOMContentLoaded", function() {
    const lazyLoadImg = [].slice.call(
      document.querySelectorAll(".lazyload")
    );
    if ("IntersectionObserver" in window) {
      let lazyImgObserver = new IntersectionObserver(
        (entries, observer) => {
          entries.forEach(({ isIntersecting, target }) => {
            if (isIntersecting) {
              target.src = target.dataset.src;
              // lazyImage.srcset = lazyImage.dataset.srcset;
              target.classList.remove("lazyload");
              target.classList.add("lazyloaded");
              lazyImgObserver.unobserve(target);
            }
          });
        },
        {
          rootMargin: "0px 0px 450px 0px"
        }
      );

      lazyLoadImg.forEach(img => lazyImgObserver.observe(img));
    } else {
      lazyLoadImg.forEach(img => {
        img.src = img.dataset.src;
        img.classList.remove("lazyload");
      });
    }
  });
})();

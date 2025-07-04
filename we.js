window.addEventListener('load', () => {
    gsap.fromTo(
      ".svg-letter-container",
      {
        rotationY: 90,
        opacity: 0,
      },
      {
        rotationY: 0,
        opacity: 1,
        stagger: {
          from: "start",
          amount: 0.4,
        },
        ease: "power1.out",
      }
    );  
})
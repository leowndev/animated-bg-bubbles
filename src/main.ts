import "./style.scss";

let curX: number = 0;
let curY: number = 0;

document.addEventListener("DOMContentLoaded", (): void => {
  const interBubble: HTMLDivElement | null =
    document.querySelector<HTMLDivElement>(".cursor");

  function move(): void {
    interBubble.style.transform = `translate(${curX}px, ${curY}px`;

    requestAnimationFrame((): void => {
      move();
    });
  }

  window.addEventListener("mousemove", (event: MouseEvent) => {
    curX = event.clientX;
    curY = event.clientY;
  });

  move();
});

let scrollPercent = 0;

document.body.onscroll = () => {
  scrollPercent =
    ((document.documentElement.scrollTop || document.body.scrollTop) /
      ((document.documentElement.scrollHeight || document.body.scrollHeight) -
        document.documentElement.clientHeight)) *
    100;
};

function lerp(x, y, a) {
  return (1 - a) * x + a * y;
}

function scalePercent(start, end) {
  return (scrollPercent - start) / (end - start);
}

const animationScripts = (obj, camera) => [
  {
    start: 0,
    end: 40,
    func: () => {
      camera.lookAt(obj.position);
      camera.position.set(0, 1, 2);
      obj.position.z = lerp(-20, 0, scalePercent(0, 60));
			camera.position.y = lerp(1, 5, scalePercent(70, 80));
    },
  },
  {
    start: 40,
    end: 60,
    func: () => {
      camera.lookAt(obj.position);
      camera.position.set(0, 1, 2);
      obj.rotation.z = lerp(0, Math.PI, scalePercent(60, 70));
    },
  },
  {
    start: 60,
    end: 80,
    func: () => {
      camera.position.x = lerp(0, 5, scalePercent(70, 80));
      camera.position.y = lerp(1, 5, scalePercent(70, 80));
      camera.lookAt(obj.position);
    },
  },
  {
    start: 80,
    end: 101,
    func: () => {
      //auto rotate
      obj.rotation.x += 0.01;
      obj.rotation.y += 0.01;
    },
  },
];

const animationPlay = (scripts) => {
  scripts.forEach((a) => {
    if (scrollPercent >= a.start && scrollPercent < a.end) {
      a.func();
    }
  });
};

export { animationScripts, animationPlay };

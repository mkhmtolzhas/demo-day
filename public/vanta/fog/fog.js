var setVanta = () => {
  if (window.VANTA) window.VANTA.FOG({
    el: ".home-page",
    mouseControls: true,
    touchControls: true,
    gyroControls: false,
    minHeight: 200.00,
    minWidth: 200.00,
    highlightColor: 0xfd00ff,
    midtoneColor: 0xffffe9
  })
}
setVanta();
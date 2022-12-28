const navMainTrigger = document.querySelector('[data-name="nav-trigger__main"]');
const navMainCloseBtn = document.querySelector('[data-name="nav-close-btn__main"]');
const navContainerMain = document.querySelector('[data-name="nav-container__main"]');
const navMainWrapper = document.querySelector('[data-name="nav-main-wrapper"]');
const navMainItems = Array.from(document.querySelectorAll('[data-name="nav-main-item"]'));

/* 메인 메뉴 버튼 */
navMainTrigger.addEventListener('click', (e) => {
  navMainCloseBtn.classList.toggle('animate__animated', 'animate__fadeOut');
  navContainerMain.style.setProperty('display', 'block');
  setTimeout(() => {
    let i = 0;
    navContainerMain.classList.toggle('visible');
    setTimeout(() => {
      navContainerMain.addEventListener('transitionend', (e) => {
        e.preventDefault();
        e.stopPropagation();
        navMainItems.forEach((elem) => {
          i = i + 1;
          elem.classList.add('animate__animated', `animate__delay-${i}s`, 'animate__fadeInUp');
        });
      }, { once: true })
    }, 0)
  }, 0);
});

/* 메인 메뉴 닫기 버튼 */
navMainCloseBtn.addEventListener('click', (e) => {
  navMainCloseBtn.classList.toggle('animate__animated', 'animate__fadeOut');
  let i = 0;
  navMainItems.forEach((elem) => {
    i = i + 1;
    elem.classList.remove('animate__fadeInUp');
    elem.classList.add('animate__fadeOutDown');
  });
  setTimeout(() => {
    navContainerMain.addEventListener('animationend', () => {
      e.preventDefault();
      e.stopPropagation();
      navContainerMain.classList.toggle('visible');
      setTimeout(() => {
        navContainerMain.addEventListener('transitionend', (e) => {
          e.preventDefault();
          e.stopPropagation();
          navMainItems.forEach((elem) => {
            elem.classList.remove('animate__fadeOutDown');
          });
          navContainerMain.style.setProperty('display', 'none');
        }, { once: true });
      }, 500)
    }, { once: true });
  }, 0);
});

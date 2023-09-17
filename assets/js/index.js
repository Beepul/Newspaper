// Night Mode
const nmBtn = document.querySelectorAll(".btn__night__mode");
const body = document.querySelector('body');

// Select Option
const selectTexts = document.querySelectorAll(".custom-select .select-text");
const selectOptions = document.querySelectorAll(".custom-select .select-options");

// ham
const hambarEl = document.querySelectorAll('.bars');
// const sidebarOverlay = document.querySelector('#sidebarOverlay');
// const sidebarCloseBtn = document.querySelectorAll('#sidebar-close');
const sidebars = document.querySelectorAll('.sidebar');

// tabs
const tabButtons = document.querySelectorAll('.tab-button');
const tabContents = document.querySelectorAll('.tab-content');

const galleryTabs = document.querySelectorAll('.gallery-tab-btn');
const galleryContainers = document.querySelectorAll(".gallery_item");

// side bar menu
const submenuOpener = document.querySelectorAll('.angle-down');


const headerSearch = document.getElementById('header-search');
const searchBar = document.getElementById('header-search-bar');

const newsList = document.querySelector('.breaking_news_list');
const newsItems = newsList?.querySelectorAll('.news');

const videoEl = document.querySelector('#video_wrap');
const videoBtn = videoEl?.querySelector('.btn__video');
const videoPlaceholder = videoEl?.querySelector('.poster');
const videoIFrame = videoEl?.querySelector('iframe');
// console.log(videoEl,videoBtn,video)

const viewMore = document.querySelector('#view-more');
const contentParagraph = viewMore?.parentElement;

// accordion btn
const accordionContainer = document.querySelectorAll('.accordion');
const accordionButtons = document.querySelectorAll('.accordion-button');



const handleVideoPlayer = () => {
  videoPlaceholder.style.display = "none";
  videoBtn.style.display = "none";
  videoIFrame.style.display = "block"; // Show the iframe with the video
  videoIFrame.src = videoIFrame.getAttribute('data-src'); // Start playing the video
  

}



const handleNightMode = (btn, index) => {
  btn.classList.toggle('active');
  const indicator = btn.querySelector('.indicator');
  indicator.classList.toggle('active');
  body.classList.toggle('active');
}

// Select Option Start
const toggleOptions = (index) => {
    selectTexts.forEach((select,i) => {
        if(i === index){
            select.classList.toggle('active');
        }else{
            select.classList.remove('active');
        }
    })
    closeOtherOptions(index)
    const optionsContainer = selectOptions[index];
    optionsContainer.style.display = optionsContainer.style.display === "block" ? "none" : "block";
}
const handleSelectOption = (index, e) => {
    // selectTexts[index].classList.toggle(active);
    const clickedOption = e.target.closest('li');
    const targetElement = selectTexts[index];
    const inputEl = targetElement.nextElementSibling;
    if (clickedOption) {
      // targetElement.value = "hello"
      inputEl.value = clickedOption.innerText;
      // selectTexts[index].value = clickedOption.innerText
      selectTexts[index].innerHTML = clickedOption.innerHTML;
      toggleOptions(index);
    }
  }
  
  const closeOtherOptions = (selectedIndex) => {
    for (let i = 0; i < selectOptions.length; i++) {
      if (i !== selectedIndex) {
        selectOptions[i].style.display = "none";
      }
    }
  }
// Select Option End

// const handleSideBar = (index) => {
//   sidebarOverlay.style.display = 'block';
//   sidebar[index].classList.add('active');
// }

const handleSideBar = (hamBtn) => {
  const hamId = hamBtn.id;
  const existingSideBar = Array.from(sidebars).filter(sidebar => {
    return sidebar.id === hamId
  })
  const sidebarOverlay = hamBtn.nextElementSibling;
  if(existingSideBar){
    sidebarOverlay.style.display = 'block';
    existingSideBar[0].classList.add('active');
    sidebarOverlay?.addEventListener('click',()=> handleSideBarClose(existingSideBar,sidebarOverlay))
    const closeBtn = existingSideBar[0].querySelector('#sidebar-close');
    closeBtn.addEventListener('click',()=>handleSideBarClose(existingSideBar,sidebarOverlay))
  }
}

const handleSideBarClose = (existingSideBar,sidebarOverlay) => {
  sidebarOverlay.style.display = 'none';
  existingSideBar[0].classList.remove('active');
}

const handleTabs = (e,button) => {
  const tabName =  e.target.getAttribute('data-tab');
  tabContents.forEach(tabContent => {
    tabContent.style.display = 'none';
  });
  const selectedTab = document.getElementById(tabName);
  selectedTab.style.display = 'block';
  if(button.classList.contains("active")){
    return 
  }else{
    tabButtons.forEach(btn => {
      btn.classList.remove('active');
    });
    button.classList.toggle('active');
  }
}

function showGallery(galleryId) {
  galleryContainers.forEach(container => {
      container.classList.remove("active");
  });
  galleryTabs.forEach(btn => {
    btn.classList.remove("active");
  });
  const targetGallery = document.getElementById(galleryId);
  const tabId = galleryId.split('-');
  const tabBtn = document.getElementById(tabId[0]);
  if (targetGallery && tabBtn) {
      tabBtn.classList.add("active");
      targetGallery.classList.add("active");
  }
}

const handleSearchBar = (e) => {
  e.preventDefault();
  searchBar.classList.toggle('active');
}

const handleViewMore = () => {
  contentParagraph.classList.toggle('active');
}

const handleAccordion = (button) => {
  const content = button.nextElementSibling;
  const accordionItem = button.parentElement;
  button.classList.toggle('active');
  accordionItem.classList.toggle('active');
  content.classList.toggle('active');
  content.style.maxHeight = content.style.maxHeight ? null : content.scrollHeight + "px";
  // console.log(content.scrollHeight);
}

const handleOpeningSubmenu = (opener) => {
  let totalHeight = 0; // Initialize totalHeight to 0
  const submenu = opener.nextElementSibling;
  totalHeight = submenu.scrollHeight
  const innerSubMenu = submenu.querySelectorAll('ul');
  innerSubMenu.forEach(menu => {
    totalHeight += menu.scrollHeight;
  })
  if(submenu.style.visibility === "visible"){
    submenu.style.visibility = "hidden";
    submenu.style.maxHeight = "0";
  }else{
    submenu.style.visibility = "visible";
    submenu.style.maxHeight =  totalHeight + "px";
  }
  totalHeight = 0;

}



window.addEventListener('load',()=>{
  tabButtons[0]?.classList.add("active");
  if (tabContents[0]) {
      tabContents[0].style.display = "block";
  }
    // Night Mode
    nmBtn.forEach((btn, index) => {
      btn?.addEventListener("click", () => handleNightMode(btn, index));
    });

      // custom select options
    selectTexts.forEach((text,index) => {
        selectTexts[index]?.addEventListener('click', () => toggleOptions(index));
        selectOptions[index]?.addEventListener('click', (e) => handleSelectOption(index, e));
    })

    // ham
    // hambarEl?.forEach((hamBtn,index) => {
    //   hamBtn?.addEventListener('click', () => {
    //     handleSideBar(index)
    //   })
    //   sidebarCloseBtn[index]?.addEventListener('click', ()=> {
    //     handleSideBarClose(index)
    //   })
    //   sidebarOverlay?.addEventListener('click',()=> handleSideBarClose(index))
    // })
    hambarEl?.forEach(hamBtn => {
      hamBtn?.addEventListener('click', () => handleSideBar(hamBtn));
    })
    

   
    // tabs 
    tabButtons?.forEach(button => {
      button?.addEventListener('click', (e) => handleTabs(e,button))
    })

    // Display the first gallery initially
    if (galleryContainers.length > 0) {
      galleryContainers[0].classList.add("active");
    }
    if (galleryTabs.length > 0) {
      galleryTabs[0].classList.add("active");
    }
    galleryTabs.forEach(tab => {
      tab?.addEventListener("click", function (event) {
          event.preventDefault();
          const galleryId = tab.getAttribute("id") + "-gallery";
          showGallery(galleryId);
      });
  });

    // sidebar menu
    submenuOpener.forEach(opener => {
      opener.addEventListener('click', () => handleOpeningSubmenu(opener));
    });
    

    headerSearch?.addEventListener('click', handleSearchBar)

    // ticker animation duration
    const animationDurationFactor = 3; 
    const totalWidth = newsList?.offsetWidth;
    const animationDuration = totalWidth / (Math.pow(newsItems?.length, animationDurationFactor));
    document.documentElement.style.setProperty('--animation-duration', animationDuration + 's');

    videoBtn?.addEventListener('click', handleVideoPlayer);

    viewMore?.addEventListener('click',(e)=>handleViewMore(e));

     accordionContainer?.forEach(accordion => {
        const accordionButton = accordion.querySelectorAll('.accordion-button');
        const accordionItem = accordion.querySelectorAll('.accordion-item');
        const firstContent = accordionButton[0].nextElementSibling;
        accordionItem[0].classList.add('active');
        accordionButton[0].classList.add('active');
        firstContent.classList.add('active');
        firstContent.style.maxHeight = firstContent.style.maxHeight ? null : firstContent.scrollHeight + "px";
      })

      accordionButtons?.forEach(button => {
        button.addEventListener('click',() => handleAccordion(button))
      })
})

const navbar = document.querySelector(".desktop-header");
const initialNavbarPosition = navbar.offsetTop;
// mobile nav for header one
// const headerOne = document.querySelector('.site-header.style-one');
const mobileNav = document.querySelector('#mobile-header');
const initialMobileNavbarPosition = mobileNav.offsetTop;



window.addEventListener("scroll", function () {

    if (window.scrollY >= initialNavbarPosition) {
        navbar.classList.add("sticky");
    } else {
        navbar.classList.remove("sticky");
    }

    if (window.scrollY <= initialNavbarPosition) {
        navbar.classList.remove("sticky");
    }

    if(mobileNav.style.display != 'none'){
      if (window.scrollY >= initialMobileNavbarPosition) {
        mobileNav.classList.add('sticky');
      } else {
          mobileNav.classList.remove('sticky')
      }
    
      if (window.scrollY <= initialMobileNavbarPosition) {
          mobileNav.classList.remove('sticky');
      }
    }
});




// Function to start the progress when in view
function startProgress() {
  let progressBar = document.querySelector('.circular-progress');
  let valueContainer = document.querySelector('.value-container .value');
  let progressValue = 0;
  let progressEndValue = valueContainer.dataset.ptg;
  let speed = 20;
  let progress = setInterval(() => {
      progressValue++;
      valueContainer.textContent = `${progressValue}%`;
      progressBar.style.background = `conic-gradient(
          #102B54 ${progressValue * 3.6}deg,
          #EFEFEF ${progressValue * 3.6}deg
      )`;
      if (progressValue == progressEndValue) {
          clearInterval(progress);
      }
  }, speed);
}

// Create an Intersection Observer instance
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
      if (entry.isIntersecting) {
          // If the section is in view, start the progress
          startProgress();
          // Stop observing once it's started
          observer.unobserve(entry.target);
      }
  });
});

// Observe the circular-progress element
const circularProgress = document.querySelector('.circular-progress');
if(circularProgress){
  observer.observe(circularProgress);
}








const countDownMaker = (dateCountDown, containerId) => {

  var countDownDate = new Date(dateCountDown).getTime();

  var x = setInterval(function () {

    var now = new Date().getTime();

    var distance = countDownDate - now;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);


    document.getElementById(containerId).innerHTML = hours + "h "
      + minutes + "m " + seconds + "s ";

    if (distance < 0) {
      clearInterval(x);
      document.getElementById(containerId).innerHTML = "EXPIRED";
    }
  }, 1000);
}





  const lotteryCount = (initNumber) => setInterval(() => {
    initNumber += ((initNumber * 1) / 100);
    //document.getElementById(containerId).innerHTML = initNumber;
    const lotteryTitle = document.createElement('h2');

    lotteryTitle.innerText = "win $" + Math.round(initNumber) + "  in Lottery";

    console.log(initNumber);


    return initNumber;


  }, 3000)



//lotteryCount(5000)



export const bannerMaker = (containerId,) => {

  const container = document.getElementById(containerId)

  const lotteryBannerContainer = document.createElement('div')

  lotteryBannerContainer.classList.add('lottery-banner')

  const lotteryTitle = document.createElement('h2')

  lotteryTitle.classList.add('lottery-title')

  lotteryTitle.innerText = "win $5000 in Lottery"

  const lotteryCounter = document.createElement('div')

  lotteryCounter.classList.add('lottery-counter')

  const lotteryCounterTitle = document.createElement('h2')

  lotteryCounterTitle.classList.add('lottery-counter-title')

  lotteryCounterTitle.innerText = "0h 0m 0s"

  lotteryCounter.appendChild(lotteryCounterTitle)

  lotteryCounter.setAttribute("id", "lotteryCounter")

  const lotteryCounterBackground = document.createElement('img')

  lotteryCounterBackground.src = "./assets/asset 37.png"

  lotteryCounterBackground.classList.add('lottery-counter-background')

  lotteryCounter.appendChild(lotteryCounterBackground)

  const lotteryButton = document.createElement('div')

  lotteryButton.classList.add('lottery-button')

  const lotteryBannerContainerContent = document.createElement('div')

  lotteryBannerContainerContent.classList.add('lottery-banner-content')

  lotteryBannerContainerContent.append(lotteryTitle, lotteryCounter, lotteryButton)

  lotteryBannerContainer.appendChild(lotteryBannerContainerContent)

  container.appendChild(lotteryBannerContainer)

  const lotteryImageContainer = document.createElement('div')

  lotteryImageContainer.classList.add('lottery-image-container')

  const lotteryImageContainerBackground = document.createElement('img')

  lotteryImageContainerBackground.src = "./assets/asset 37.png"

  lotteryImageContainerBackground.classList.add('lottery-image-container-background')

  lotteryImageContainer.appendChild(lotteryImageContainerBackground)

  const lotteryImage = document.createElement('img')

  lotteryImage.classList.add('lottery-image')

  lotteryImage.src = "./assets/asset 2.png"

  lotteryImageContainer.appendChild(lotteryImage)

  lotteryBannerContainer.appendChild(lotteryImageContainer)








}

bannerMaker("lotteryContainer")


;
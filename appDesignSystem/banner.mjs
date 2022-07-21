
export const countDownMaker = (dateCountDown, containerId) => {

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




export const lotteryCount = (initNumber) => {

  var x = setInterval(() => {
    initNumber += ((initNumber * 1) / 100)
    //document.getElementById(containerId).innerHTML = initNumber;
    const lotteryTitle = document.createElement('h2')

    lotteryTitle.innerText = "win $" + Math.round(initNumber) + "  in Lottery"
    return lotteryTitle
  }, 3000)


}




export const bannerMaker = (containerId, countDownMaker, lotteryCount) => {

  const container = document.getElementById(containerId)

  const lotteryBannerContainer = document.createElement('div')

  const lotteryTitle = document.createElement('h2')

  lotteryTitle.innerText = "win $ " + lotteryCount + " in Lottery"


  const lotteryCounter = document.createElement('div')

  lotteryCounter.setAttribute("id", "lotteryCounter")

  const lotteryButton = document.createElement('div')

  const lotteryBannerContainerContent = document.createElement('div')

  lotteryBannerContainerContent.append(lotteryTitle, lotteryCounter, lotteryButton)

  lotteryBannerContainer.appendChild(lotteryBannerContainerContent)

  container.appendChild(lotteryBannerContainer)

}

bannerMaker("lotteryContainer", countDownMaker('july 21, 2022 01:22:00', "lotteryContainer"), lotteryCount(32740))


;
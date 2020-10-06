<style src="../assets/css/Footer-Basic.css" scoped></style>

<style scoped src="../assets/css/buttonhome.css"></style>
<style scoped src="../assets/css/scroll-footer.css"></style>

<template>
  <div id="site-footer">
    <div class="footer-basic">
      <footer>
        <div class="social">
          <img
            src="../assets/img/logofooter.png"
            width="90"
            height="50"
            alt=""
          />
        </div>
        <ul class="list-inline">
          <router-link to="./">
            <li class="list-inline-item"><a href="#">Home</a></li>
          </router-link>
          <router-link to="./payticket">
            <li class="list-inline-item"><a href="#">Pay Ticket</a></li>
          </router-link>
          <router-link to="./services">
            <li class="list-inline-item"><a href="#">Services</a></li>
          </router-link>
          <router-link to="./about">
            <li class="list-inline-item"><a href="#">About</a></li>
          </router-link>
        </ul>
        <p class="copyright">Parking.com © 2017</p>
      </footer>
    </div>
  </div>
</template>
<script>
// $(document).ready(function() {
//   // INITIATE THE FOOTER
//   siteFooter();
//   // COULD BE SIMPLIFIED FOR THIS PEN BUT I WANT TO MAKE IT AS EASY TO PUT INTO YOUR SITE AS POSSIBLE
//   $(window).resize(function() {
//     siteFooter();
//   });

//   function siteFooter() {
//     var siteContent = $('#site-content');
//     var siteContentHeight = siteContent.height();
//     var siteContentWidth = siteContent.width();

//     var siteFooter = $('#site-footer');
//     var siteFooterHeight = siteFooter.height();
//     var siteFooterWidth = siteFooter.width();

//     console.log('Content Height = ' + siteContentHeight + 'px');
//     console.log('Content Width = ' + siteContentWidth + 'px');
//     console.log('Footer Height = ' + siteFooterHeight + 'px');
//     console.log('Footer Width = ' + siteFooterWidth + 'px');

//     siteContent.css({
//       'margin-bottom': siteFooterHeight + 50,
//     });
//   }
// });
</script>

fetch('./assets/data/movie.json')
.then(res=>res.json())
.then(json=>{
  const booking = json.chartList;
  const current = json.currentList;
  const iceCon = json.iceconList;
  const artHouse = json.artList;
  const cgvOnly = json.onlyList;


  /* 예매차트 */
  let bookingHtml =``;
  booking.forEach((element,index) => {
    
    screenTypeImage = 
    element.type && element.type.iMax
  ? "https://img.cgv.co.kr/WebApp/images/main/@3x/ico_screenType0.png"
  : element.type && element.type["4DX"]
  ? "https://img.cgv.co.kr/WebApp/images/main/@3x/ico_screenType1.png"
  : element.type && element.type.screenX
  ? "https://img.cgv.co.kr/WebApp/images/main/@3x/ico_screenType2.png"
  : null;

  displayStyle = screenTypeImage ? '' : 'display: none;';

  onlyEl = `<div class="only-box">
  <img src="https://img.cgv.co.kr/Movie/Thumbnail/PosterIcon/16231991733190.png" alt="" style="">
</div>`
  only = element.cgvOnly ? onlyEl : "";

  view = element.view === null ? element.dDay : element.view;

  bookingHtml += 
    `<li class="swiper-slide content-item">
    <div class="movie-poster">
      <a class="detail-link" href="#"></a>
      <div class="asdf">
        <div class="onlyage-wrap">
          ${only}
          <div class="screen-type">
            <img src="${screenTypeImage}" alt="" style="${displayStyle}">
          </div>
          <i class="age age${element.age}">
            <span class="blind">
              12세관람가
            </span>
          </i>
        </div>
        <img src="${element.thumbNail}" alt="">
        <span class="ranking">
          <span class="rank-img">
            <img src="./assets/images/ranknum${element.rank}.png" alt="">
          </span>
          <span class="per">${element.rate.adv}</span>
        </span>
      </div>
    </div>
    <p class="movie-title">
      ${element.title}
    </p>
    <div class="accrue-wrap">
      <div class="egg-box">
        <span class="egg-state">${element.rate.egg}</span>
      </div>
      <span class="accrue">
        <span class="accrue-num">${view}</span>
      </span>
    </div>
    <div class="reserve-btnBox">
      <a href="">지금예매</a>
    </div>
    </li>`

    /* 광고추가 */
    if ((index + 1) % 2 === 0){
      bookingHtml += `<li class="swiper-slide content-ad">
        <div class="con-img-wrap">
          <a href="">
            <img src="./assets/images/chart-ad1.jpg" alt="">
          </a>
        </div>
        <strong>토레타</strong>
        <span>CGV무비차트 다음순위를 알려 드립니다.</span>
      </li>`;
    }


  });//booking forEach 끝

  /* 현재상영작 */
  let currentHtml =``;
  current.forEach((element,index) => {
    
    screenTypeImage = 
    element.type && element.type.iMax
  ? "https://img.cgv.co.kr/WebApp/images/main/@3x/ico_screenType0.png"
  : element.type && element.type["4DX"]
  ? "https://img.cgv.co.kr/WebApp/images/main/@3x/ico_screenType1.png"
  : element.type && element.type.screenX
  ? "https://img.cgv.co.kr/WebApp/images/main/@3x/ico_screenType2.png"
  : null;

  displayStyle = screenTypeImage ? '' : 'display: none;';

  onlyEl = `<div class="only-box">
  <img src="https://img.cgv.co.kr/Movie/Thumbnail/PosterIcon/16231991733190.png" alt="" style="">
</div>`
  only = element.cgvOnly ? onlyEl : "";

  view = element.view === null ? element.dDay : element.view;
  


  currentHtml += 
    
    `<li class="swiper-slide content-item">
    <div class="movie-poster">
    <a class="detail-link" href=""></a>
    <div class="asdf">
      <div class="onlyage-wrap">
        ${only}
        <div class="screen-type">
          <img src="${screenTypeImage}" alt="" style="${displayStyle}">
        </div>
        <i class="age age${element.age}">
          <span class="blind">
            12세관람가
          </span>
        </i>
      </div>
      <img src="${element.thumbNail}" alt="">
      <span class="ranking">
        <span class="rank-img">
          <img src="./assets/images/ranknum${element.rank}.png" alt="">
        </span>
        <span class="per">${element.rate.adv}</span>
      </span>
    </div>
    </div>
    <p class="movie-title">
      ${element.title}
    </p>
    <div class="accrue-wrap">
      <div class="egg-box">
        <span class="egg-state">${element.rate.egg}</span>
      </div>
      <span class="accrue">
        <span class="accrue-num">${view}</span>
      </span>
    </div>
    <div class="reserve-btnBox">
      <a href="">지금예매</a>
    </div>
    </li>`

  });//current forEach 끝

  /* ICECON */
  let iceHtml = ``;
  iceCon.forEach((element,index)=>{

    
    
    screenTypeImage = 
    element.type && element.type.iMax
  ? "https://img.cgv.co.kr/WebApp/images/main/@3x/ico_screenType0.png"
  : element.type && element.type["4DX"]
  ? "https://img.cgv.co.kr/WebApp/images/main/@3x/ico_screenType1.png"
  : element.type && element.type.screenX
  ? "https://img.cgv.co.kr/WebApp/images/main/@3x/ico_screenType2.png"
  : null;

  displayStyle = screenTypeImage ? '' : 'display: none;';

  onlyEl = `<div class="only-box">
  <img src="https://img.cgv.co.kr/Movie/Thumbnail/PosterIcon/16231991733190.png" alt="" style="">
</div>`
  only = element.cgvOnly ? onlyEl : "";

  view = element.view === null ? element.dDay : element.view;
  


  iceHtml += 
    
    `<li class="swiper-slide content-item">
    <div class="movie-poster">
      <a class="detail-link" href=""></a>
      <div class="asdf">
        <div class="onlyage-wrap">
          ${only}
          <div class="screen-type">
            <img src="${screenTypeImage}" alt="" style="${displayStyle}">
          </div>
          <i class="age age${element.age}">
            <span class="blind">
              12세관람가
            </span>
          </i>
        </div>
        <img src="${element.thumbNail}" alt="">
        <span class="ranking">
          <span class="rank-img">
            <img src="./assets/images/ranknum${element.rank}.png" alt="">
          </span>
          <span class="per">${element.rate.adv}</span>
        </span>
      </div>
    </div>
    <p class="movie-title">
      ${element.title}
    </p>
    <div class="accrue-wrap">
      <div class="egg-box">
        <span class="egg-state">${element.rate.egg}</span>
      </div>
      <span class="accrue">
        <span class="accrue-num">${view}</span>
      </span>
    </div>
    <div class="reserve-btnBox">
      <a href="">지금예매</a>
    </div>
    </li>`

  });//iceCon forEach 끝

  /* 아트하우스 */
  let artHouseHtml = ``;
  artHouse.forEach((element,index)=>{
      
    screenTypeImage = 
    element.type && element.type.iMax
  ? "https://img.cgv.co.kr/WebApp/images/main/@3x/ico_screenType0.png"
  : element.type && element.type["4DX"]
  ? "https://img.cgv.co.kr/WebApp/images/main/@3x/ico_screenType1.png"
  : element.type && element.type.screenX
  ? "https://img.cgv.co.kr/WebApp/images/main/@3x/ico_screenType2.png"
  : null;

  displayStyle = screenTypeImage ? '' : 'display: none;';

  onlyEl = `<div class="only-box">
  <img src="https://img.cgv.co.kr/Movie/Thumbnail/PosterIcon/16231991733190.png" alt="" style="">
</div>`
  only = element.cgvOnly ? onlyEl : "";

  view = element.view === null ? element.dDay : element.view;

  artHouseHtml += 
    `<li class="swiper-slide content-item">
    <div class="movie-poster">
      <a class="detail-link" href=""></a>
      <div class="asdf">
        <div class="onlyage-wrap">
          ${only}
          <div class="screen-type">
            <img src="${screenTypeImage}" alt="" style="${displayStyle}">
          </div>
          <i class="age age${element.age}">
            <span class="blind">
              12세관람가
            </span>
          </i>
        </div>
        <img src="${element.thumbNail}" alt="">
        <span class="ranking">
          <span class="rank-img">
            <img src="./assets/images/ranknum${element.rank}.png" alt="">
          </span>
          <span class="per">${element.rate.adv}</span>
        </span>
      </div>
    </div>
    <p class="movie-title">
      ${element.title}
    </p>
    <div class="accrue-wrap">
      <div class="egg-box">
        <span class="egg-state">${element.rate.egg}</span>
      </div>
      <span class="accrue">
        <span class="accrue-num">${view}</span>
      </span>
    </div>
    <div class="reserve-btnBox">
      <a href="">지금예매</a>
    </div>
    </li>`

    /* 광고추가 */
    if ((index + 1) % 2 === 0){
      artHouseHtml += `<li class="swiper-slide content-ad">
        <div class="con-img-wrap">
          <a href="">
            <img src="./assets/images/chart-ad1.jpg" alt="">
          </a>
        </div>
        <strong>토레타</strong>
        <span>CGV무비차트 다음순위를 알려 드립니다.</span>
      </li>`;
    }
  });//artHouse forEach 끝

  /* cgv only */
  let cgvOnlyHtml = ``;
  cgvOnly.forEach((element,index)=>{

    screenTypeImage = 
    element.type && element.type.iMax
  ? "https://img.cgv.co.kr/WebApp/images/main/@3x/ico_screenType0.png"
  : element.type && element.type["4DX"]
  ? "https://img.cgv.co.kr/WebApp/images/main/@3x/ico_screenType1.png"
  : element.type && element.type.screenX
  ? "https://img.cgv.co.kr/WebApp/images/main/@3x/ico_screenType2.png"
  : null;

  displayStyle = screenTypeImage ? '' : 'display: none;';

  onlyEl = `<div class="only-box">
  <img src="https://img.cgv.co.kr/Movie/Thumbnail/PosterIcon/16231991733190.png" alt="" style="">
</div>`
  only = element.cgvOnly ? onlyEl : "";

  view = element.view === null ? element.dDay : element.view;
  


  cgvOnlyHtml += 
    
    `<li class="swiper-slide content-item">
    <div class="movie-poster">
      <a class="detail-link" href=""></a>
      <div class="asdf">
        <div class="onlyage-wrap">
          ${only}
          <div class="screen-type">
            <img src="${screenTypeImage}" alt="" style="${displayStyle}">
          </div>
          <i class="age age${element.age}">
            <span class="blind">
              12세관람가
            </span>
          </i>
        </div>
        <img src="${element.thumbNail}" alt="">
        <span class="ranking">
          <span class="rank-img">
            <img src="./assets/images/ranknum${element.rank}.png" alt="">
          </span>
          <span class="per">${element.rate.adv}</span>
        </span>
      </div>
    </div>
    <p class="movie-title">
      ${element.title}
    </p>
    <div class="accrue-wrap">
      <div class="egg-box">
        <span class="egg-state">${element.rate.egg}</span>
      </div>
      <span class="accrue">
        <span class="accrue-num">${view}</span>
      </span>
    </div>
    <div class="reserve-btnBox">
      <a href="">지금예매</a>
    </div>
    </li>`

  });//cgvOnly forEach 끝




  //처음화면이 예매차트여야 하기 때문에 작성함.
  $('#booking').html(bookingHtml);

/* -------------- 클릭 이벤트 -------------- */

  // 클릭 이벤트 핸들러 함수 정의
function handleListItemClick(event) {
  // 클릭한 요소의 data-list 속성 값을 확인
  const dataList = $(this).data('list');

  if (dataList === 'booking') {
    $('#booking').html(bookingHtml);
  } else if (dataList === 'current') {
    $('#booking').html(currentHtml);
  } else if (dataList === 'iceCon') {
    $('#booking').html(iceHtml);
  } else if (dataList === 'artHouse'){
    $('#booking').html(artHouseHtml);
  } else if (dataList === 'cgvOnly'){
    $('#booking').html(cgvOnlyHtml);
  }

}
// ul 요소의 자식 li 요소에 대한 클릭 이벤트 핸들러를 등록
$('.hash-list .hash-item').on('click', handleListItemClick);

  
})


/* 디테일 페이지 연결 */
// fetch('../../assets/data/detail.json')
// .then(res=>res.json())
// .then(json=>{
//   const detailInfo = json.detailInfo;

//   let detailHtml = ``;
//   detailInfo.forEach((element,index)=>{
//     sliderImg1 = element.slider.img1;
//     sliderImg2 = element.slider.img2;
//     sliderImg3 = element.slider.img3;
//     sliderImg4 = element.slider.img4;
//     sliderImg5 = element.slider.img5;


//     detailHtml +=
//     `
//     <header class="detail-header">
//       <a href="" class="menu-icon">
//         <i class="ic-menu"></i>
//       </a>
//       <div class="detail-title">
//         ${element.detailTitle}
//       </div>
//     </header>
//     <main class="detail-main">
//     <section class="sc-detailinfo">
//       <div class="detail-slide-group">
//         <div class="swiper detail-slide">
//           <div class="swiper-wrapper">
//             <!-- 비디오 -->
//             <div class="swiper-slide">
//               <div class="video-box">
//                 <video video_mtype="main_hotdeal" class="detail-video" preload="none" poster="https://img.cgv.co.kr/Movie/Thumbnail/Trailer/87433/87433219323_1024.jpg" controlslist="nodownload" playsinline="" webkit-playsinline="">
//                   <source src="${element.slider.video}" type="video/mp4">
//                   <!-- <p>video를 지원하지 않는 브라우저입니다.</p> -->
//                 </video>
//                 <img src="./assets/images/detail-thumbnail.jpg" alt="detail-thumbnail">
//               </div>
//             </div>
//             <!-- 이미지 -->
//             <div class="swiper-slide">
//               <div class="detail-img-wrap">
//                 <div class="detail-img-box">
//                   <img src="${sliderImg1}" alt="detail-img1">
//                 </div>
//               </div>
//             </div>
//             <div class="swiper-slide">
//               <div class="detail-img-wrap">
//                 <div class="detail-img-box">
//                   <img src="${sliderImg2}" alt="detail-img2">
//                 </div>
//               </div>
//             </div>
//             <div class="swiper-slide">
//               <div class="detail-img-wrap">
//                 <div class="detail-img-box">
//                   <img src="${sliderImg3}" alt="detail-img3">
//                 </div>
//               </div>
//             </div>
//             <div class="swiper-slide">
//               <div class="detail-img-wrap">
//                 <div class="detail-img-box">
//                   <img src="${sliderImg4}" alt="detail-img4">
//                 </div>
//               </div>
//             </div>
//             <div class="swiper-slide">
//               <div class="detail-img-wrap">
//                 <div class="detail-img-box">
//                   <img src="${sliderImg5}" alt="detail-img5">
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         <div class="movie-info-group">
//           <div class="poster">
//             <a href="">
//               <img src="${element.poster}" alt="영화 포스터">
//             </a>
//           </div>
//           <div class="movie-info">
//             <strong class="movie-title">${element.movieTitle}</strong>
//             <span class="eng-title">${element.enTitle}</span>
//             <div class="spec-box">
//               <span class="open-date">${element.openDate}</span>
//               <span class="runningtime">${element.runningTime}</span>
//               <span class="genre">${element.genre}</span>
//               <span class="distributor">${element.distributor}</span>
//               <span class="detail-age">${element.rated}</span>
//             </div>
//           </div>
//           <ul class="screen-type">
//             <li>
//               <img src="./assets/images/detail-screenType.svg" alt="IMAX">
//             </li>
//           </ul>
//         </div>
//       </div>

//       <!--  -->
//       <div class="detail-rate-wrap">
//         <ul>
//           <li>
//             <div class="icon-box">
//               <i class="icon ticket"></i>
//             </div>
//             <span class="rate-title">예매율 1위</span>
//             <span class="rate-percent">65</span>
//           </li>
//           <li>
//             <div class="icon-box">
//               <i class="icon pre-egg"></i>
//             </div>
//             <span class="rate-title">PRE EGG</span>
//             <span class="rate-percent">99</span>
//           </li>
//           <li>
//             <div class="icon-box">
//               <i class="icon gold-egg"></i>
//             </div>
//             <span class="rate-title">GOLDEN EGG</span>
//             <span class="rate-percent">?</span>
//             <a href="">
//               <img src="./assets/images/question- mark.png" alt="에그 도움말">
//             </a>
//           </li>
//         </ul>
//       </div>
//       <!--  -->
//       <div class="detail-synopsis-wrap">
//         <div class="synopsis">
//           화재로 어머니를 잃은 11살 소년 ‘마히토’는 아버지와 함께 어머니의 고향으로 간다.
//           <br>
//           어머니에 대한 그리움과 새로운 보금자리에 적응하느라 힘들어하던 ‘마히토’ 앞에 정체를 알 수 없는 왜가리 한 마리가 나타나고,
//           <br>
//           <div class="synopsis-accordion">
//             저택에서 일하는 일곱 할멈으로부터 왜가리가 살고 있는 탑에 대한 신비로운 이야기를 듣게 된다.
//             <br>
//             그러던 어느 날, ‘마히토’는 사라져버린 새엄마 ‘나츠코’를 찾기 위해 탑으로 들어가고,
//             <br>
//             왜가리가 안내하는 대로 이세계(異世界)의 문을 통과하는데…!
//           </div>
//         </div>
//         <a href="" class="synopsis-more">
//           더보기
//         </a>
//       </div>
//       <!--  -->
//       <div class="swiper detail-event-wrap">
//         <ul class="swiper-wrapper detail-event-list">
//           <li class="swiper-slide detail-event-item">
//             <a href="">
//               <strong>[그대들은 어떻게 <br>살 것인가] 현장 이벤트</strong>
//             </a>
//           </li>
//           <li class="swiper-slide detail-event-item">
//             <a href="">
//               <strong>[그대들은 어떻게 <br>살 것인가] 현장 이벤트2</strong>
//             </a>
//           </li>
//         </ul>
//       </div>


//     </section>

//     <section class="sc-detail-contents">
//       <ul class="detail-tap-list">
//         <li class="detail-tap-item active">
//           <a href="">
//             <span>상세정보</span>
//           </a>
//         </li>
//         <li class="detail-tap-item">
//           <a href="">
//             <span>관련소식</span>
//           </a>
//         </li>
//         <li class="detail-tap-item">
//           <a href="">
//             <span>실관람평(644)</span>
//           </a>
//         </li>
//       </ul>

//       <ul class="tab-container-list">
//         <li class="tab-item0 active" id="tab0">
//           <div class="tab-chart-wrap">
//             <div class="tab-subtitle-group">
//               <div class="subtitle-box">
//                 <h2>관람객수</h2>
//                 <span class="viewer-count">3,004</span>
//               </div>
//               <span class="chart-date">2023.00.00기준</span>
//             </div>

//             <div class="tab-chart-group">
//               <!-- 왼쪽 -->
//               <div class="gender-rate-box">
//                 <div class="chart-height man">
//                     <span class="per"></span>
//                     <span class="per-txt">50</span>
//                 </div>
//                 <div class="chart-height woman">
//                     <span class="per"></span>
//                     <span class="per-txt">50</span>
//                 </div>
                
//               </div>
//               <!-- 오른쪽 -->
//               <div class="chart-bar-box">
//                 <ul class="chart-bar-list">
//                   <li class="chart-bar-item">
//                     <span class="per">
//                       <span class="per-text">8</span>
//                     </span>
//                     <strong>10대</strong>
//                   </li>
//                   <li class="chart-bar-item top">
//                     <span class="per">
//                       <span class="per-text">35</span>
//                     </span>
//                     <strong>20대</strong>
//                   </li>
//                   <li class="chart-bar-item">
//                     <span class="per">
//                       <span class="per-text">26</span>
//                     </span>
//                     <strong>30대</strong>
//                   </li>
//                   <li class="chart-bar-item">
//                     <span class="per">
//                       <span class="per-text">18</span>
//                     </span>
//                     <strong>40대</strong>
//                   </li>
//                   <li class="chart-bar-item">
//                     <span class="per">
//                       <span class="per-text">14</span>
//                     </span>
//                     <strong>50대</strong>
//                   </li>
//                 </ul>
//               </div>
//             </div>
//           </div>

//           <div class="tab-person-wrap">
//             <h2>감독/등장인물</h2>
//             <ul class="person-list">
//               <li>
//                 <a href="">
//                   <div class="person-img-box">
//                     <img src="./assets/images/person1.jpg" alt="미야자키 하야오">
//                   </div>
//                   <strong>미야자키 하야오</strong>
//                   <span>감독</span>
//                 </a>
//               </li>
//               <li>
//                 <a href="">
//                   <div class="person-img-box">
//                     <img src="./assets/images/person2.jpg" alt="스다 마사키">
//                   </div>
//                   <strong>스다 마사키</strong>
//                   <span></span>
//                 </a>
//               </li>
//               <li>
//                 <a href="">
//                   <div class="person-img-box">
//                     <img src="./assets/images/person3.jpg" alt="기무라 타쿠야">
//                   </div>
//                   <strong>기무라 타쿠야</strong>
//                   <span></span>
//                 </a>
//               </li>
//               <li>
//                 <a href="">
//                   <div class="person-img-box">
//                     <img src="./assets/images/person4.jpg" alt="아이묭">
//                   </div>
//                   <strong>아이묭</strong>
//                   <span></span>
//                 </a>
//               </li>
//             </ul>
//           </div>

//           <div class="tab-trailer-wrap">
//             <h2 class="tab-trailer" data-count="3">트레일러</h2>
//             <ul class="trailer-list">
//               <li>
//                 <a href="">
//                   <div class="video-box">
//                     <video video_mtype="trailer" id="video-trailer-0" preload="none" controlslist="nodownload" playsinline="" webkit-playsinline=""><source src="./assets/videos/trailer-video1.mp4" type="video/mp4">
//                       <p>video를 지원하지 않는 브라우저입니다.</p>
//                     </video>

//                     <img src="./assets/images/trailer1.jpg" alt="트레일러 이미지 1">
//                   </div>
//                   <span class="trailer-text">스페셜 예고편</span>
//                 </a>
//               </li>
//               <li>
//                 <a href="">
//                   <div class="video-box">
//                     <video video_mtype="trailer" id="video-trailer-0" preload="none" controlslist="nodownload" playsinline="" webkit-playsinline=""><source src="./assets/videos/trailer-video2.mp4" type="video/mp4">
//                       <p>video를 지원하지 않는 브라우저입니다.</p>
//                     </video>

//                     <img src="./assets/images/trailer2.jpg" alt="트레일러 이미지 2">
//                   </div>
//                   <span class="trailer-text">메인 예고편</span>
//                 </a>
//               </li>
//               <li>
//                 <a href="">
//                   <div class="video-box">
//                     <video video_mtype="trailer" id="video-trailer-0" preload="none" controlslist="nodownload" playsinline="" webkit-playsinline=""><source src="./assets/videos/trailer-video3.mp4" type="video/mp4">
//                       <p>video를 지원하지 않는 브라우저입니다.</p>
//                     </video>

//                     <img src="./assets/images/trailer3.jpg" alt="트레일러 이미지 3">
//                   </div>
//                   <span class="trailer-text">메인 예고편</span>
//                 </a>
//               </li>
//             </ul>
//           </div>
          
//           <div class="tab-ad-wrap">
//             <div class="ad-box">
//               <a href="">
//                 <img src="./assets/images/detail-ad.jpg" alt="광고">
//               </a>
//             </div>
//           </div>

//           <div class="tab-steelcut-wrap">
//             <h2 class="steelcut-title" data-count="13">포스터 스틸컷</h2>

//             <div class="steelcut-gallery">
//               <ul>
//                 <li class="gallery-item photo-box1">
//                   <a href="" class="gallery-inner">
//                     <img src="./assets/images/steelcut1.jpg" alt="">
//                   </a>
//                 </li>
//                 <li class="gallery-item photo-box2">
//                   <a href="" class="gallery-inner">
//                     <img src="./assets/images/steelcut2.jpg" alt="">
//                   </a>
//                 </li>
//                 <li class="gallery-item photo-box3">
//                   <a href="" class="gallery-inner">
//                     <img src="./assets/images/steelcut3.jpg" alt="">
//                   </a>
//                 </li>
//                 <li class="gallery-item photo-box4">
//                   <a href="" class="gallery-inner">
//                     <img src="./assets/images/steelcut4.jpg" alt="">
//                   </a>
//                 </li>
//                 <li class="gallery-item photo-box5">
//                   <a href="" class="gallery-inner">
//                     <img src="./assets/images/steelcut5.jpg" alt="">
//                   </a>
//                 </li>
//               </ul>
//             </div>
//           </div>
//         </li>

        
//         <li class="tab-item1" id="tab1"></li>
//         <li class="tab-item2" id="tab2"></li>
//       </ul>
//     </section>
//   </main>`

//   })
// })

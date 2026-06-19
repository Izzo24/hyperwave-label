/* 超頻 HYPERWAVE — 共用互動 */
(function(){
  // 行動版選單
  var toggle = document.querySelector('.nav-toggle');
  var links = document.querySelector('.nav-links');
  if(toggle && links){
    toggle.addEventListener('click', function(){
      links.classList.toggle('open');
      toggle.setAttribute('aria-expanded', links.classList.contains('open'));
    });
    links.querySelectorAll('a').forEach(function(a){
      a.addEventListener('click', function(){ links.classList.remove('open'); });
    });
  }
  // 頁尾年份
  var y = document.getElementById('yr');
  if(y){ y.textContent = new Date().getFullYear(); }

  // 聯絡表單（前端示意，不送出）
  var form = document.getElementById('contactForm');
  if(form){
    form.addEventListener('submit', function(e){
      e.preventDefault();
      var ok = document.getElementById('formOk');
      if(ok){ ok.hidden = false; }
      form.reset();
    });
  }
})();

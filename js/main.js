// 等待DOM加载完成
document.addEventListener('DOMContentLoaded', function() {
  // 导航菜单滚动效果
  const navbar = document.querySelector('.navbar');
  const sections = document.querySelectorAll('.section');
  const navLinks = document.querySelectorAll('.navbar-link');
  
  // 滚动时导航栏变化
  window.addEventListener('scroll', function() {
    if (window.scrollY > 50) {
      navbar.style.background = 'rgba(44, 62, 80, 0.95)';
      navbar.style.padding = '0.5rem 0';
    } else {
      navbar.style.background = 'var(--primary-color)';
      navbar.style.padding = '1rem 0';
    }
    
    // 高亮当前滚动到的部分对应的导航链接
    let current = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      if (scrollY >= (sectionTop - 200)) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  });
  
  // 平滑滚动到锚点
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 70,
          behavior: 'smooth'
        });
      }
    });
  });
  
  // 移动端菜单切换
  const navbarToggle = document.querySelector('.navbar-toggle');
  const navbarMenu = document.querySelector('.navbar-menu');
  
  if (navbarToggle) {
    navbarToggle.addEventListener('click', function() {
      navbarMenu.classList.toggle('active');
    });
  }
  
  // 点击导航链接后关闭移动端菜单
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (navbarMenu.classList.contains('active')) {
        navbarMenu.classList.remove('active');
      }
    });
  });

  // 初始化Mermaid图表
  if (typeof mermaid !== 'undefined') {
    mermaid.initialize({ 
      startOnLoad: true,
      theme: 'neutral',
      flowchart: { 
        useMaxWidth: true,
        htmlLabels: true,
        curve: 'basis'
      },
      securityLevel: 'loose'
    });
  }
  
  // 初始化代码高亮
  document.querySelectorAll('pre code').forEach(block => {
    if (window.hljs) {
      hljs.highlightBlock(block);
    }
  });

  // 当前报告生成时间
  const generationTimeElement = document.getElementById('generation-time');
  if (generationTimeElement) {
    const now = new Date();
    const options = { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    };
    generationTimeElement.textContent = now.toLocaleDateString('zh-CN', options);
  }

  // 如果存在Chart.js图表，初始化它们
  initializeCharts();
});

// 初始化图表函数
function initializeCharts() {
  // 这个函数将在后续开发中实现具体的图表初始化
  console.log('Charts initialized');
}
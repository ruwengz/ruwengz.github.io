// TechShare 主题 JavaScript

document.addEventListener('DOMContentLoaded', function() {
  // 搜索按钮功能
  const searchBtn = document.querySelector('.search-btn');
  if (searchBtn) {
    searchBtn.addEventListener('click', function() {
      const searchInput = prompt('请输入搜索关键词：');
      if (searchInput) {
        // 实际项目中可以跳转到搜索结果页
        console.log('搜索:', searchInput);
        alert('搜索功能开发中，敬请期待！');
      }
    });
  }

  // 文章卡片点击效果
  const postCards = document.querySelectorAll('.post-card');
  postCards.forEach(card => {
    const titleLink = card.querySelector('.post-title a');
    if (titleLink) {
      card.addEventListener('click', function(e) {
        if (e.target.tagName !== 'A' && e.target.tagName !== 'BUTTON') {
          window.location.href = titleLink.href;
        }
      });
      card.style.cursor = 'pointer';
    }
  });

  // 专题开始学习按钮
  const startBtns = document.querySelectorAll('.topic-start');
  startBtns.forEach(btn => {
    btn.addEventListener('click', function() {
      alert('专题学习功能开发中，敬请期待！');
    });
  });

  // 分享按钮
  const shareBtns = document.querySelectorAll('.share-btn');
  shareBtns.forEach(btn => {
    btn.addEventListener('click', function() {
      const postTitle = document.querySelector('.post-title')?.textContent || 'TechShare';
      const postUrl = window.location.href;
      
      if (navigator.share) {
        navigator.share({
          title: postTitle,
          url: postUrl
        });
      } else {
        // 复制链接
        navigator.clipboard.writeText(postUrl).then(() => {
          alert('链接已复制到剪贴板！');
        });
      }
    });
  });

  // 分类标签切换
  const categoryTabs = document.querySelectorAll('.category-tab');
  categoryTabs.forEach(tab => {
    tab.addEventListener('click', function(e) {
      if (!this.classList.contains('active')) {
        categoryTabs.forEach(t => t.classList.remove('active'));
        this.classList.add('active');
      }
    });
  });

  // 平滑滚动优化
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // 滚动动画
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, observerOptions);

  document.querySelectorAll('.post-card, .topic-card, .sidebar-section').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
  });

  // GitHub 贡献图交互
  const contributionDays = document.querySelectorAll('.contribution-day');
  contributionDays.forEach(day => {
    day.addEventListener('mouseenter', function() {
      this.style.transform = 'scale(1.5)';
      this.style.zIndex = '10';
    });
    day.addEventListener('mouseleave', function() {
      this.style.transform = 'scale(1)';
      this.style.zIndex = '1';
    });
  });
});

// 控制台欢迎信息
console.log('%c TechShare ', 'background: linear-gradient(135deg, #6ECEDA, #C77DFF); color: white; font-size: 24px; padding: 10px 20px; border-radius: 8px;');
console.log('%c 用 ❤ 和代码构建 ', 'color: #C77DFF; font-size: 14px;');

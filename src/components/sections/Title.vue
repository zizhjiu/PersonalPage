<script lang="ts" setup>
import { siteContent } from '../../../site-content.js'

const { profile, about, announcements, highlightedAuthor, research: researchList } = siteContent

const splitAuthors = (authors) => {
  const start = authors.indexOf(highlightedAuthor)

  if (start === -1) {
    return [{ text: authors, highlighted: false }]
  }

  const nameEnd = start + highlightedAuthor.length
  const end = authors[nameEnd] === '*' ? nameEnd + 1 : nameEnd

  return [
    { text: authors.slice(0, start), highlighted: false },
    { text: authors.slice(start, end), highlighted: true },
    { text: authors.slice(end), highlighted: false },
  ].filter((part) => part.text)
}

</script>

<template>
  <div class="announcements-panel">
    <el-alert
      v-for="(announcement, idx) in announcements"
      :key="idx"
      :title="announcement.text"
      :type="announcement.type"
      class="announcement"
    />
  </div>

  <div class="container">
    <!-- 左侧个人信息 -->
    <div class="left-panel">
      <el-image :src="profile.photo" class="profile-photo" fit="cover" />
      <h2 class="profile-name">{{ profile.name }}</h2>
      <p class="profile-bio">{{ profile.bio }}</p>

      <div class="contact-row">
        <span class="contact-item">
          📍{{ profile.location }}
        </span>

        <a
          v-for="c in profile.contact"
          :key="c.type"
          :href="c.link"
          target="_blank"
          class="contact-item"
        >
          <span v-if="c.type === 'Email'">✉️</span>
          {{ c.label }}
        </a>
      </div>
    </div>

    <!-- 右侧内容 -->
    <div class="right-panel">
      <ul class="menu-list">

        <!-- About -->
        <li id="about">
          <a href="#about">🔎 About Me</a>
          <p class="menu-desc">{{ about }}</p>
        </li>

        <!-- Research -->
        <li id="research">
          <a href="#research">📝 Research</a>

          <div class="paper-list">
            <div
              v-for="(paper, idx) in researchList"
              :key="idx"
              class="paper-item"
            >
              <!-- 左侧架构图 -->
              <div class="paper-image">
                <el-image
                  :src="paper.image"
                  fit="cover"
                  class="paper-img"
                />
              </div>

              <!-- 右侧论文信息 -->
              <div class="paper-info">
                <div class="paper-title">
                  {{ paper.title }}
                </div>

                <div class="paper-authors">
                  <template
                    v-for="(part, authorPartIndex) in splitAuthors(paper.authors)"
                    :key="authorPartIndex"
                  >
                    <strong v-if="part.highlighted">{{ part.text }}</strong>
                    <span v-else>{{ part.text }}</span>
                  </template>
                </div>

                <div
                  class="paper-venue"
                  :style="paper.venueColor ? { color: paper.venueColor } : undefined"
                >
                  {{ paper.venue }}
                </div>

                <div class="paper-links">
                  <a v-if="paper.paper" :href="paper.paper" target="_blank">📄 Paper</a>
                  <span v-else class="disabled-link" aria-disabled="true">📄 Paper</span>
                  <a v-if="paper.webpage" :href="paper.webpage" target="_blank">🌐 Webpage</a>
                  <span v-else class="disabled-link" aria-disabled="true">🌐 Webpage</span>
                  <a v-if="paper.code" :href="paper.code" target="_blank">💻 Code</a>
                  <span v-else class="disabled-link" aria-disabled="true">💻 Code</span>
                </div>
              </div>
            </div>
          </div>
        </li>

      </ul>
    </div>
  </div>
</template>


<style scoped>
/* 页面顶部公告 */
.announcements-panel {
  max-width: 2000px;
  margin: 0 auto;
  padding: 20px 20px 0;
  font-family: "Arial", sans-serif;
}

.announcements-panel .announcement:first-child {
  margin-top: 0;
}

/* 整体容器，限制最大宽度为 A4 */
.container {
  display: flex;
  flex-direction: row;
  padding: 20px;
  min-height: auto;
  font-family: "Arial", sans-serif;

  max-width: 2000px;  /* A4纸宽度约 794px */
  margin: 0 auto;    /* 居中 */
}

/* 左侧个人信息 */
.left-panel {
  flex: 0.8;
  padding-right: 5px;  /* 缩小右侧间距 */
  text-align: center;
}

/* 头像，4:3比例 */
.profile-photo {
  width: 100%;
  max-width: 240px;  /* 限制最大宽度 */
  aspect-ratio: 3 / 4;
  border-radius: 8px;
  box-shadow: #ccc 0px 0px 6px 2px;
  margin-bottom: 20px;
}

/* 姓名 */
.profile-name {
  font-size: 24px;
  margin-bottom: 10px;
  font-weight: bold;
}

/* 简介 */
.profile-bio {
  font-size: 18px;
  margin-bottom: 20px;
  line-height: 1.5;
}

/* 联系方式 */
.contact-info p {
  font-size: 16px;
  margin-bottom: 6px;
}
.contact-info a {
  color: #42B883;
  text-decoration: none;
}
.contact-info a:hover {
  text-decoration: underline;
}

/* 右侧菜单 */
.right-panel {
  flex: 2;
  border-left: 2px solid #f0f0f0;
  padding-left: 50px; /* 缩小左侧间距 */
}
.menu-list {
  list-style: none;
  margin: 0;
  padding: 0;
  font-size: 30px;
}
.menu-list li {
  margin-bottom: 25px;
}
.menu-desc {
  font-size: 20px;
  color: #888;
  margin-top: 4px;
  max-width: 1400px;
  /* 两端对齐 */
  text-align: justify;
  text-align-last: left; /* 最后一行左对齐 */
  white-space: pre-line;
}
.menu-list a {
  text-decoration: none;
  color: #444;
  font-weight: bold;
  font-size: 28px;
}
.menu-list a:hover {
  color: #42B883;
}
.announcement {
  min-height: 40px;
  margin-top: 10px;
  padding: 8px 16px;
  border-radius: 4px;
  box-sizing: border-box;
}
.announcement :deep(.el-alert__title) {
  font-size: 14px;
  font-weight: 400;
  line-height: 24px;
}
.announcement :deep(.el-alert__close-btn) {
  font-size: 12px;
}
.contact-row {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 18px;
  margin-top: 12px;
  font-size: 16px;
  color: #444;
}

.contact-item {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  text-decoration: none;
  color: inherit;
  font-weight: 500;
  transition: all 0.2s ease;
}

.contact-item:hover {
  color: #42B883;
  transform: translateY(-1px);
}
/* 论文列表 */
.paper-list {
  margin-top: 18px;
  display: flex;
  flex-direction: column;
  gap: 18px;
}

/* 单篇论文 */
.paper-item {
  display: flex;
  gap: 20px;
  padding: 16px 18px;
  border-radius: 12px;
  background: #fafafa;
  transition: all 0.25s ease;
}

.paper-item:hover {
  box-shadow: 0 6px 18px rgba(0,0,0,0.06);
  transform: translateY(-2px);
}

/* 左侧图片 */
.paper-image {
  flex: 0 0 200px;
}

.paper-img {
  display: block;
  width: 100%;
  height: 120px;
  border-radius: 8px;
  border: 1px solid #eee;
  overflow: hidden;
}

/* 右侧内容 */
.paper-info {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

/* 题目 */
.paper-title {
  font-size: 20px;
  font-weight: 700;
  line-height: 1.35;
  margin-bottom: 4px;
}

/* 作者 */
.paper-authors {
  font-size: 15px;
  color: #666;
}

/* 会议 */
.paper-venue {
  font-size: 15px;
  font-weight: 600;
  color: #42b883;
  margin: 4px 0 6px;
}

/* 按钮区域 */
.paper-links {
  display: flex;
  gap: 14px;
}

.paper-links a,
.paper-links .disabled-link {
  font-size: 14px;
  font-weight: 600;
  color: #444;
  text-decoration: none;
  padding: 5px 12px;
  border-radius: 20px;
  border: 1px solid #ddd;
  transition: all 0.2s ease;
}

.paper-links .disabled-link {
  color: #aaa;
  cursor: not-allowed;
}

.paper-links a:hover {
  color: #42b883;
  border-color: #42b883;
  background: rgba(66,184,131,0.08);
}



/* 手机端自动换行 */
@media (max-width: 900px) {
  .announcements-panel {
    padding: 10px 10px 0;
  }
  .container {
    flex-direction: column;
    max-width: 100%;
    padding: 10px;
  }
  .right-panel {
    border-left: none;
    border-top: 2px solid #f0f0f0;
    padding-left: 0;
    padding-top: 20px;
  }
}
</style>

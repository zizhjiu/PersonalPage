

// 【GitHub Pages 部署必改】仓库名是 PersonalPage，因此这里必须写成 "/PersonalPage/"。
// 如果以后改成“用户名.github.io”仓库或使用独立域名，则改成 "/"。
const base = "/PersonalPage/"
const assetPath = (fileName) => `${base}${fileName}`

const siteContent = {
  pageTitle: "Welcome to My Homepage！",
  favicon: assetPath("logo.png"),
  highlightedAuthor: "Zizheng Jiu",

  profile: {
    name: "Zizheng Jiu 酒子峥",
    photo: assetPath("jiu.jpg"),
    bio: "Shanxi University | M.Sc.",
    location: "Taiyuan, China",
    contact: [
      { type: "Email", label: "Email", link: "mailto:jiu03699@gmail.com" },
    ],
  },

  about:
    "I am currently preparing to apply for a Ph.D. program. My research focuses on Multimodal Representation Learning, AI4Science, and Deep Clustering. I received my Master’s degree from Shanxi University, where I was supervised by Prof. Yuhua Qian and Prof. Feijiang Li. I completed my undergraduate studies in Automation at Jiangsu University. I am passionate about sports, especially football. I hope to leverage AI to promote science-based exercise and health management, ultimately improving public health and quality of life.",

  announcements: [
    {
      text: "🔥 [2026-11-14] 🎉🎉1 paper has been accepted by SIGKDD 2027!🎉🎉",
      type: "success",
    },
    {
      text: "🔥 [2026-05-01] 🎉🎉1 paper has been accepted by IJCAI 2026!🎉🎉",
      type: "success",
    },
    {
      text: "🔥 [2026-01-26] 🎉🎉 1 paper has been accepted by ICLR 2026! 🎉🎉",
      type: "success",
    },
  ],

  research: [
    {
      title: "Spatial Structure and Selective Text Jointly Facilitate Image Clustering",
      authors: "Zizheng Jiu*, Feijiang Li*, Jieting Wang, Yuhua Qian✉️, Lu Chen",
      venue: "ICLR 2026",
      image: assetPath("SATC.jpg"),
      paper:
        "https://openreview.net/forum?id=3DOgmfZ2k6&referrer=%5BAuthor%20Console%5D(%2Fgroup%3Fid%3DICLR.cc%2F2026%2FConference%2FAuthors%23your-submissions)",
      webpage: "https://zizhjiu.github.io/SATC/",
      code: null,
    },
    {
      title:
        "Reducing Bias and Variance: Generative Semantic Guidance and Bi-Layer Ensemble for Image Clustering",
      authors: "Feijiang Li✉️, Zhenxiong Li, Jieting Wang, Zizheng Jiu, Saixiong Liu, Liang Du",
      venue: "IJCAI 2026",
      venueColor: "#d32f2f",
      image: assetPath("GSEC.png"),
      paper: "https://ijcai.org/proceedings/2026/500",
      code: "https://github.com/2017LI/GSEC.git",
    },
    {
      title: "FSRC",
      authors: "Feijiang Li*, Zizheng Jiu*, Yuhua Qian✉️, Jieting Wang, Liang Du",
      venue: "SIGKDD 2027",
      venueColor: "#0067a5",
      image: assetPath("FSRC.png"),
      paper: null,
      webpage: "https://zizhjiu.github.io/FSRCPage/",
      code: "https://github.com/zizhjiu/FSRC",
    },
  ],

  carouselImages: [
    assetPath("1.jpg"),
    assetPath("2.jpg"),
    assetPath("3.JPG"),
    assetPath("4.jpg"),
    assetPath("5.JPG"),
    assetPath("6.jpg"),
  ],
}

export { siteContent }

// Vite 会读取这个默认导出；浏览器只会使用上面的 siteContent。
export default async () => {
  // 使用变量阻止浏览器构建静态扫描 Node 专用的 Vite 插件。
  const vuePluginPackage = '@vitejs/plugin-vue'
  const { default: vue } = await import(/* @vite-ignore */ vuePluginPackage)

  return {
    base,
    publicDir: 'icon',
    plugins: [vue()],
    resolve: {
      alias: {
        '@': `${process.cwd()}/src`,
      },
    },
  }
}

# CATERPI11AR 落地页

[English](./README.md)

**Caterpi11ar AI** 官方落地页 — 单页营销站点，展示我们的产品与理念。

## 技术栈

- **框架**: [Next.js 16](https://nextjs.org/) (App Router) + [React 19](https://react.dev/)
- **样式**: [Tailwind CSS 4](https://tailwindcss.com/) + [shadcn/ui](https://ui.shadcn.com/) (New York 风格)
- **动画**: [GSAP](https://gsap.com/) + ScrollTrigger、[Lenis](https://lenis.darkroom.engineering/) 平滑滚动
- **字体**: IBM Plex Sans、IBM Plex Mono、Bebas Neue
- **部署**: [Vercel](https://vercel.com/)

## 快速开始

```bash
# 安装依赖
pnpm install

# 启动开发服务器
pnpm dev

# 生产构建
pnpm build

# 启动生产服务器
pnpm start

# 代码检查
pnpm lint
```

## 项目结构

```
app/
├── layout.tsx          # 根布局（字体、平滑滚动、元数据）
├── page.tsx            # 单页入口，包含所有区块
└── globals.css         # 设计令牌与全局样式

components/
├── hero-section.tsx    # 首屏，含翻页牌文字动画
├── signals-section.tsx # 信号 / 指标区块
├── work-section.tsx    # 产品展示卡片
├── principles-section.tsx # 核心理念
├── colophon-section.tsx   # 页脚 / 关于区块
├── side-nav.tsx        # 固定侧边导航栏
├── smooth-scroll.tsx   # Lenis 平滑滚动封装
├── scramble-text.tsx   # 文字乱码动画
├── split-flap-text.tsx # 翻页牌显示效果
├── animated-noise.tsx  # Canvas 噪点纹理
├── bitmap-chevron.tsx  # 像素风 SVG 箭头
└── ui/                 # shadcn/ui 组件
```

## 设计

- **主题**: 强制深色模式，单色系配橙色强调色（`oklch(0.7 0.2 45)`）
- **排版**: IBM Plex Sans（正文）、IBM Plex Mono（标签）、Bebas Neue（标题）
- **布局**: 五个全屏区块，锚点导航（`#hero`、`#signals`、`#work`、`#principles`、`#colophon`）
- **视觉效果**: CSS 噪点叠加、网格背景、GSAP 滚动驱动动画

## 许可

Copyright © 2025 Caterpi11ar AI. 保留所有权利。

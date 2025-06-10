# Red Comet Games - 游戏管理指南

## 🎮 如何添加新游戏

### 1. 在 App.tsx 中添加游戏数据

找到 `gamesData` 数组（约第21行），按照以下格式添加新游戏：

```typescript
{
  id: 'your-game-id',                    // 唯一游戏ID
  title: '游戏标题',                      // 游戏名称
  description: '游戏描述...',             // 游戏简介
  iframeUrl: 'YOUR_IFRAME_URL_HERE',     // 游戏iframe地址
  category: 'Action',                    // 游戏分类
  thumbnail: 'https://...',              // 缩略图地址
  rating: 4.5,                          // 评分 (1-5)
  plays: '100K',                        // 游玩次数
  tags: ['Tag1', 'Tag2', 'Tag3'],       // 游戏标签
  featured: false                       // 是否为精选游戏
}
```

### 2. 支持的游戏分类

当前支持的分类包括：
- `Action` - 动作游戏
- `Puzzle` - 益智游戏
- `Racing` - 赛车游戏
- `Adventure` - 冒险游戏
- `Strategy` - 策略游戏
- `Casual` - 休闲游戏

如需添加新分类，请修改 `categories` 数组（约第81行）。

### 3. 获取游戏iframe地址

#### 常见游戏网站的iframe格式：

**HTML5游戏（推荐）:**
```html
https://your-game-host.com/games/game-name/index.html
```

**Unity WebGL游戏:**
```html
https://your-game-host.com/games/unity/game-name/index.html
```

**构造hoop游戏:**
```html
https://your-game-host.com/games/construct/game-name/
```

#### iframe测试步骤：
1. 打开浏览器开发者工具
2. 创建测试iframe：
   ```html
   <iframe src="YOUR_GAME_URL" width="800" height="600"></iframe>
   ```
3. 确认游戏可以正常加载和运行
4. 检查是否有跨域限制

### 4. 缩略图建议

**推荐尺寸:** 400x300px
**支持格式:** JPG, PNG, WebP
**建议大小:** < 100KB

**在线缩略图生成工具:**
- https://via.placeholder.com/400x300/颜色代码/ffffff?text=游戏名称
- https://picsum.photos/400/300（随机图片）

### 5. 示例：添加新游戏

```typescript
{
  id: 'snake-game',
  title: '经典贪吃蛇',
  description: '经典的贪吃蛇游戏，简单易上手，挑战你的反应速度',
  iframeUrl: 'https://example.com/games/snake/index.html',
  category: 'Casual',
  thumbnail: 'https://via.placeholder.com/400x300/22C55E/ffffff?text=Snake+Game',
  rating: 4.2,
  plays: '500K',
  tags: ['Classic', 'Arcade', 'Simple'],
  featured: true
}
```

## 🔧 网站功能特性

### 当前功能：
- ✅ 游戏分类筛选
- ✅ 搜索功能（标题、描述、标签）
- ✅ 精选游戏展示
- ✅ 响应式设计
- ✅ 游戏弹窗模式
- ✅ 评分和游玩数据显示

### 计划功能：
- 🔄 游戏收藏功能
- 🔄 用户评分系统
- 🔄 最近游玩记录
- 🔄 游戏推荐算法

## 📱 响应式支持

网站已优化支持：
- 🖥️ 桌面端 (1024px+)
- 📱 平板端 (768px - 1023px)
- 📱 手机端 (< 768px)

## 🎨 自定义样式

### 主要颜色配置：
- 主色调：蓝色 (#3B82F6)
- 辅助色：紫色 (#8B5CF6)
- 成功色：绿色 (#10B981)
- 警告色：黄色 (#F59E0B)
- 错误色：红色 (#EF4444)

### 修改主题色：
在 `App.tsx` 中搜索颜色类名：
- `bg-blue-600` → 主要背景色
- `text-blue-600` → 主要文字色
- `border-blue-200` → 边框色

## 🚀 部署流程

### 1. 构建生产版本
```bash
npm run build
```

### 2. 上传到GitHub
```bash
git add .
git commit -m "Update games"
git push origin main
```

### 3. Cloudflare自动部署
Cloudflare Pages会自动检测GitHub更新并重新构建网站。

## 🔍 故障排除

### 常见问题：

**Q: 游戏iframe无法加载？**
A: 检查游戏URL是否支持iframe嵌入，某些网站有防iframe策略。

**Q: 游戏在手机上显示异常？**
A: 确保游戏本身支持移动端，检查iframe的响应式设置。

**Q: 新添加的游戏不显示？**
A: 检查JSON语法是否正确，确保没有逗号或引号错误。

**Q: 搜索功能不工作？**
A: 确保游戏的title、description和tags字段都有内容。

## 📞 技术支持

如需技术支持或有功能建议，请：
1. 检查此文档的常见问题部分
2. 查看浏览器开发者工具的控制台错误
3. 确保所有必需字段都已正确填写

## 🎯 最佳实践

1. **游戏质量**: 只添加高质量、可正常运行的游戏
2. **分类准确**: 确保游戏分类准确，便于用户查找
3. **描述清晰**: 写简洁明了的游戏描述
4. **图片优化**: 使用适当大小的缩略图，提高加载速度
5. **定期维护**: 定期检查游戏链接是否仍然有效

---

💡 **提示**: 每次添加新游戏后，建议在本地测试确保一切正常，然后再部署到生产环境。 


import { useState } from 'react';
import { Play, Search, Grid, X, Star, Users, Gamepad2, Home } from 'lucide-react';

// 游戏数据接口
interface Game {
  id: string;
  title: string;
  description: string;
  iframeUrl: string;
  category: string;
  thumbnail: string;
  rating: number;
  plays: string;
  tags: string[];
  featured: boolean;
}

// 示例游戏数据 - 你可以根据需要添加更多游戏
const gamesData: Game[] = [
  {
    id: 'red-comet',
    title: 'Red Comet: Monster Survival',
    description: '在这款史诗般的浏览器生存射击游戏中，抵御无尽的怪物潮',
    iframeUrl: 'https://cloud.onlinegames.io/games/2025/unity/monster-survivors/index-og.html',
    category: 'Action',
    thumbnail: 'https://via.placeholder.com/400x300/3B82F6/ffffff?text=Red+Comet',
    rating: 4.8,
    plays: '1.2M',
    tags: ['Survival', 'Shooter', 'Action'],
    featured: true
  },
  {
    id: 'puzzle-master',
    title: 'Puzzle Master',
    description: '挑战你的智力，解决各种复杂的拼图谜题',
    iframeUrl: 'YOUR_PUZZLE_GAME_IFRAME_URL',
    category: 'Puzzle',
    thumbnail: 'https://via.placeholder.com/400x300/10B981/ffffff?text=Puzzle+Master',
    rating: 4.5,
    plays: '850K',
    tags: ['Puzzle', 'Brain', 'Logic'],
    featured: false
  },
  {
    id: 'racing-champion',
    title: 'Racing Champion',
    description: '极速赛车游戏，体验最刺激的赛道竞技',
    iframeUrl: 'YOUR_RACING_GAME_IFRAME_URL',
    category: 'Racing',
    thumbnail: 'https://via.placeholder.com/400x300/EF4444/ffffff?text=Racing+Champion',
    rating: 4.6,
    plays: '920K',
    tags: ['Racing', 'Cars', 'Speed'],
    featured: true
  },
  {
    id: 'adventure-quest',
    title: 'Adventure Quest',
    description: '踏上史诗般的冒险之旅，探索神秘的世界',
    iframeUrl: 'YOUR_ADVENTURE_GAME_IFRAME_URL',
    category: 'Adventure',
    thumbnail: 'https://via.placeholder.com/400x300/F59E0B/ffffff?text=Adventure+Quest',
    rating: 4.7,
    plays: '1.5M',
    tags: ['Adventure', 'RPG', 'Fantasy'],
    featured: false
  },
  {
    id: 'strategy-war',
    title: 'Strategy War',
    description: '建立你的帝国，在战略战争中取得胜利',
    iframeUrl: 'YOUR_STRATEGY_GAME_IFRAME_URL',
    category: 'Strategy',
    thumbnail: 'https://via.placeholder.com/400x300/8B5CF6/ffffff?text=Strategy+War',
    rating: 4.4,
    plays: '650K',
    tags: ['Strategy', 'War', 'Empire'],
    featured: false
  },
  {
    id: 'casual-bubble',
    title: 'Casual Bubble Pop',
    description: '轻松休闲的泡泡消除游戏，适合所有年龄段',
    iframeUrl: 'YOUR_CASUAL_GAME_IFRAME_URL',
    category: 'Casual',
    thumbnail: 'https://via.placeholder.com/400x300/EC4899/ffffff?text=Bubble+Pop',
    rating: 4.3,
    plays: '2.1M',
    tags: ['Casual', 'Bubble', 'Fun'],
    featured: true
  },
  {
    id: 'tetris-classic',
    title: '俄罗斯方块经典版',
    description: '经典的俄罗斯方块游戏，考验你的空间思维和反应能力',
    iframeUrl: 'https://tetris.com/games-content/play-tetris-content/tetris.html',
    category: 'Puzzle',
    thumbnail: 'https://via.placeholder.com/400x300/7C3AED/ffffff?text=Tetris+Classic',
    rating: 4.9,
    plays: '3.2M',
    tags: ['Classic', 'Puzzle', 'Retro'],
    featured: true
  }
];

const categories = ['All', 'Action', 'Puzzle', 'Racing', 'Adventure', 'Strategy', 'Casual'];

function App() {
  const [currentView, setCurrentView] = useState<'home' | 'games'>('home');
  const [selectedGame, setSelectedGame] = useState<Game | null>(null);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  // 过滤游戏
  const filteredGames = gamesData.filter(game => {
    const matchesCategory = selectedCategory === 'All' || game.category === selectedCategory;
    const matchesSearch = game.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         game.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         game.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const featuredGames = gamesData.filter(game => game.featured);

  const openGame = (game: Game) => {
    setSelectedGame(game);
  };

  const closeGame = () => {
    setSelectedGame(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
                <Gamepad2 className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Red Comet Games
              </span>
            </div>
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setCurrentView('home')}
                className={`flex items-center space-x-2 px-4 py-2 rounded-full font-medium transition-all duration-200 ${
                  currentView === 'home' 
                    ? 'bg-blue-100 text-blue-600' 
                    : 'text-gray-600 hover:text-blue-600'
                }`}
              >
                <Home className="w-4 h-4" />
                <span className="hidden sm:inline">主页</span>
              </button>
              <button
                onClick={() => setCurrentView('games')}
                className={`flex items-center space-x-2 px-4 py-2 rounded-full font-medium transition-all duration-200 ${
                  currentView === 'games' 
                    ? 'bg-blue-100 text-blue-600' 
                    : 'text-gray-600 hover:text-blue-600'
                }`}
              >
                <Grid className="w-4 h-4" />
                <span className="hidden sm:inline">所有游戏</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Home View */}
      {currentView === 'home' && (
        <>
          {/* Hero Section */}
          <section className="relative overflow-hidden py-20 lg:py-32">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center">
                <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
                  <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-red-600 bg-clip-text text-transparent">
                    Red Comet Games
                  </span>
                </h1>
                <p className="text-xl sm:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
                  发现最棒的在线游戏集合，从动作冒险到益智休闲，应有尽有
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
                  <button
                    onClick={() => setCurrentView('games')}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-200 transform hover:scale-105 hover:shadow-xl flex items-center space-x-2 group"
                  >
                    <Play className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    <span>开始游戏</span>
                  </button>
                  <div className="flex items-center space-x-4 text-gray-600">
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 text-yellow-500 fill-current" />
                      <span className="text-sm font-medium">免费游戏</span>
                    </div>
                    <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                    <span className="text-sm">{gamesData.length}+ 游戏</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Featured Games */}
          <section className="py-16 lg:py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                  精选游戏
                </h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  体验我们最受欢迎和评分最高的游戏
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {featuredGames.map((game) => (
                  <div
                    key={game.id}
                    className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden group cursor-pointer"
                    onClick={() => openGame(game)}
                  >
                    <div className="relative">
                      <img
                        src={game.thumbnail}
                        alt={game.title}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-4 right-4 bg-yellow-500 text-white px-2 py-1 rounded-full text-sm font-medium">
                        精选
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                        {game.title}
                      </h3>
                      <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                        {game.description}
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4 text-sm text-gray-500">
                          <div className="flex items-center space-x-1">
                            <Star className="w-4 h-4 text-yellow-500 fill-current" />
                            <span>{game.rating}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Users className="w-4 h-4" />
                            <span>{game.plays}</span>
                          </div>
                        </div>
                        <span className="bg-blue-100 text-blue-600 px-2 py-1 rounded-full text-xs font-medium">
                          {game.category}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="text-center mt-12">
                <button
                  onClick={() => setCurrentView('games')}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full font-semibold transition-all duration-200 transform hover:scale-105"
                >
                  查看所有游戏
                </button>
              </div>
            </div>
          </section>

          {/* Stats Section */}
          <section className="py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">{gamesData.length}+</div>
                  <div className="text-gray-600">游戏总数</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600 mb-2">{categories.length - 1}</div>
                  <div className="text-gray-600">游戏分类</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600 mb-2">5M+</div>
                  <div className="text-gray-600">总游戏次数</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-red-600 mb-2">100%</div>
                  <div className="text-gray-600">免费游戏</div>
                </div>
              </div>
            </div>
          </section>
        </>
      )}

      {/* Games View */}
      {currentView === 'games' && (
        <section className="py-12 lg:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Search and Filter Bar */}
            <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
              <div className="flex flex-col lg:flex-row gap-4 items-center">
                {/* Search */}
                <div className="relative flex-1 w-full lg:w-auto">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="搜索游戏..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                
                {/* Category Filter */}
                <div className="flex gap-2 overflow-x-auto">
                  {categories.map((category) => (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={`whitespace-nowrap px-4 py-2 rounded-xl font-medium transition-all duration-200 ${
                        selectedCategory === category
                          ? 'bg-blue-600 text-white'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      {category === 'All' ? '全部' : category}
                    </button>
                  ))}
                </div>
              </div>
              
              {/* Results count */}
              <div className="mt-4 text-sm text-gray-600">
                找到 {filteredGames.length} 款游戏
              </div>
            </div>

            {/* Games Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredGames.map((game) => (
                <div
                  key={game.id}
                  className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden group cursor-pointer"
                  onClick={() => openGame(game)}
                >
                  <div className="relative">
                    <img
                      src={game.thumbnail}
                      alt={game.title}
                      className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    {game.featured && (
                      <div className="absolute top-2 left-2 bg-yellow-500 text-white px-2 py-1 rounded-lg text-xs font-medium">
                        精选
                      </div>
                    )}
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                      <Play className="w-12 h-12 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                      {game.title}
                    </h3>
                    <p className="text-gray-600 mb-3 text-sm leading-relaxed line-clamp-2">
                      {game.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3 text-xs text-gray-500">
                        <div className="flex items-center space-x-1">
                          <Star className="w-3 h-3 text-yellow-500 fill-current" />
                          <span>{game.rating}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Users className="w-3 h-3" />
                          <span>{game.plays}</span>
                        </div>
                      </div>
                      <span className="bg-blue-100 text-blue-600 px-2 py-1 rounded-lg text-xs font-medium">
                        {game.category}
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-1 mt-2">
                      {game.tags.slice(0, 2).map((tag, index) => (
                        <span
                          key={index}
                          className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* No results */}
            {filteredGames.length === 0 && (
              <div className="text-center py-12">
                <Gamepad2 className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">未找到游戏</h3>
                <p className="text-gray-600">尝试调整搜索条件或选择不同的分类</p>
              </div>
            )}
          </div>
        </section>
      )}

      {/* Game Modal */}
      {selectedGame && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-6xl max-h-[90vh] overflow-hidden">
            {/* Modal Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-200">
              <div>
                <h2 className="text-2xl font-bold text-gray-900">{selectedGame.title}</h2>
                <div className="flex items-center space-x-4 mt-2 text-sm text-gray-600">
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 text-yellow-500 fill-current" />
                    <span>{selectedGame.rating}/5</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Users className="w-4 h-4" />
                    <span>{selectedGame.plays} 次游玩</span>
                  </div>
                  <span className="bg-blue-100 text-blue-600 px-2 py-1 rounded-full text-xs font-medium">
                    {selectedGame.category}
                  </span>
                </div>
              </div>
              <button
                onClick={closeGame}
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            
            {/* Game iframe */}
            <div className="relative bg-gray-900" style={{ height: 'calc(90vh - 120px)' }}>
              <iframe
                src={selectedGame.iframeUrl}
                className="w-full h-full"
                frameBorder="0"
                allowFullScreen
                title={selectedGame.title}
                loading="lazy"
              />
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <Gamepad2 className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold">Red Comet Games</span>
            </div>
            <p className="text-gray-400 mb-4">
              发现最棒的在线游戏体验
            </p>
            <p className="text-sm text-gray-500">
              © 2025 Red Comet Games. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
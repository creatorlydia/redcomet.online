import { useState } from 'react';
import { Play, Search, Grid, X, Star, Users, Gamepad2, Home } from 'lucide-react';

// Game data interface
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

// Sample game data - you can add more games as needed
const gamesData: Game[] = [
  {
    id: 'red-comet',
    title: 'Red Comet: Monster Survival',
    description: 'Defend against endless waves of monsters in this epic browser survival shooter game',
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
    description: 'Challenge your mind with complex puzzles and brain-teasing riddles',
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
    description: 'Experience the most thrilling racing action on exciting tracks',
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
    description: 'Embark on an epic journey and explore mysterious worlds',
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
    description: 'Build your empire and achieve victory in strategic warfare',
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
    description: 'Relaxing bubble popping game perfect for players of all ages',
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
    title: 'Tetris Classic',
    description: 'The classic Tetris game that tests your spatial thinking and reflexes',
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

  // Filter games
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
                <span className="hidden sm:inline">Home</span>
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
                <span className="hidden sm:inline">All Games</span>
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
                  Discover the ultimate collection of online games, from action-packed adventures to relaxing puzzles
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
                  <button
                    onClick={() => setCurrentView('games')}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-200 transform hover:scale-105 hover:shadow-xl flex items-center space-x-2 group"
                  >
                    <Play className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    <span>Start Playing</span>
                  </button>
                  <div className="flex items-center space-x-4 text-gray-600">
                    <div className="flex items-center space-x-1">
                      <Users className="w-5 h-5" />
                      <span className="font-medium">10M+ Players</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Star className="w-5 h-5 text-yellow-400" />
                      <span className="font-medium">4.8 Rating</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Features Section */}
          <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                  Why Choose Red Comet Games?
                </h2>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                  Experience the best in online gaming with our carefully curated collection
                </p>
              </div>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center p-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Play className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Instant Play</h3>
                  <p className="text-gray-600">No downloads required. Play directly in your browser with just one click.</p>
                </div>
                <div className="text-center p-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Star className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Premium Quality</h3>
                  <p className="text-gray-600">Handpicked games ensuring the highest quality entertainment experience.</p>
                </div>
                <div className="text-center p-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Community</h3>
                  <p className="text-gray-600">Join millions of players in our thriving gaming community.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Featured Games Section */}
          <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                  Featured Games
                </h2>
                <p className="text-xl text-gray-600">
                  Discover our most popular and highly-rated games
                </p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {featuredGames.map((game) => (
                  <div
                    key={game.id}
                    className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden cursor-pointer group"
                    onClick={() => openGame(game)}
                  >
                    <div className="relative">
                      <img
                        src={game.thumbnail}
                        alt={game.title}
                        className="w-full h-40 object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      <div className="absolute top-3 right-3 bg-black/70 text-white px-2 py-1 rounded-full text-sm font-medium">
                        ⭐ {game.rating}
                      </div>
                    </div>
                    <div className="p-4">
                      <h3 className="font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                        {game.title}
                      </h3>
                      <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                        {game.description}
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-1 text-gray-500 text-sm">
                          <Users className="w-4 h-4" />
                          <span>{game.plays}</span>
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
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-full font-semibold transition-all duration-200 transform hover:scale-105"
                >
                  View All Games
                </button>
              </div>
            </div>
          </section>
        </>
      )}

      {/* Games View */}
      {currentView === 'games' && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Search and Filter Bar */}
          <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
            <div className="flex flex-col lg:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search games..."
                  className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              
              {/* Category Filter */}
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-xl font-medium transition-all duration-200 ${
                      selectedCategory === category
                        ? 'bg-blue-600 text-white shadow-lg'
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
            
            <div className="mt-4 text-gray-600">
              Found {filteredGames.length} games
            </div>
          </div>

          {/* Games Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredGames.map((game) => (
              <div
                key={game.id}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden cursor-pointer group"
                onClick={() => openGame(game)}
              >
                <div className="relative">
                  <img
                    src={game.thumbnail}
                    alt={game.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Play className="w-12 h-12 text-white" />
                  </div>
                  <div className="absolute top-3 right-3 bg-black/70 text-white px-2 py-1 rounded-full text-sm font-medium">
                    ⭐ {game.rating}
                  </div>
                  {game.featured && (
                    <div className="absolute top-3 left-3 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-2 py-1 rounded-full text-xs font-bold">
                      FEATURED
                    </div>
                  )}
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {game.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                    {game.description}
                  </p>
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center space-x-1 text-gray-500 text-sm">
                      <Users className="w-4 h-4" />
                      <span>{game.plays}</span>
                    </div>
                    <span className="bg-blue-100 text-blue-600 px-2 py-1 rounded-full text-xs font-medium">
                      {game.category}
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {game.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="bg-gray-100 text-gray-600 px-2 py-1 rounded-full text-xs"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* No Results */}
          {filteredGames.length === 0 && (
            <div className="text-center py-16">
              <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="w-12 h-12 text-gray-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No games found</h3>
              <p className="text-gray-600 mb-4">Try adjusting your search or filter criteria</p>
              <button
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('All');
                }}
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-xl font-medium transition-colors"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      )}

      {/* Game Modal */}
      {selectedGame && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl w-full max-w-6xl max-h-[90vh] overflow-hidden relative">
            <div className="flex items-center justify-between p-4 border-b border-gray-200">
              <div>
                <h2 className="text-xl font-bold text-gray-900">{selectedGame.title}</h2>
                <div className="flex items-center space-x-4 text-sm text-gray-600 mt-1">
                  <span className="flex items-center space-x-1">
                    <Star className="w-4 h-4 text-yellow-400" />
                    <span>{selectedGame.rating}</span>
                  </span>
                  <span className="flex items-center space-x-1">
                    <Users className="w-4 h-4" />
                    <span>{selectedGame.plays} plays</span>
                  </span>
                  <span className="bg-blue-100 text-blue-600 px-2 py-1 rounded-full text-xs font-medium">
                    {selectedGame.category}
                  </span>
                </div>
              </div>
              <button
                onClick={closeGame}
                className="w-8 h-8 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors"
              >
                <X className="w-5 h-5 text-gray-600" />
              </button>
            </div>
            <div className="aspect-video">
              <iframe
                src={selectedGame.iframeUrl}
                className="w-full h-full border-0"
                allowFullScreen
                title={selectedGame.title}
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
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
                <Gamepad2 className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold">Red Comet Games</span>
            </div>
            <p className="text-gray-400 mb-4">
              The ultimate destination for online gaming entertainment
            </p>
            <p className="text-gray-500 text-sm">
              © 2025 Red Comet Games. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;